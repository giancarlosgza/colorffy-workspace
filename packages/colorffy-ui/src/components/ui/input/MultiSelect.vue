<script setup lang="ts">
import type { ListboxItem } from '@/composables/useListbox'
import type { ComboboxValue, IMultiSelectInputEmits, IMultiSelectInputProps } from '@/types/input'
import { computed, nextTick, onBeforeUnmount, ref, shallowReactive, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import { normalizeText, useListbox } from '@/composables/useListbox'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface SelectedEntry {
  value: ComboboxValue
  label: string
}

/** Props */
const props = withDefaults(defineProps<IMultiSelectInputProps>(), {
  id: null,
  label: null,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false,
  options: () => [],
  optionLabel: null,
  optionValue: null,
  optionDisabled: null,
  optionGroup: null,
  filterable: true,
  clearable: false,
  max: null,
  maxChips: null,
  remote: false,
  loading: false,
  searchDelay: 300,
  minSearchLength: 1,
  freeText: false
})

/** Emits */
const emit = defineEmits<IMultiSelectInputEmits>()

/** Model */
const model = defineModel<ComboboxValue[]>('modelValue', { default: () => [] })

/** Labels */
const l10n = useLabels('multiSelect')
const l10nCommon = useLabels('common')

/** Data */
const uid = useId()
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLElement | null>(null)
const query = ref('')
const announcement = ref('')
const remembered = shallowReactive(new Map<unknown, string>())
const searchPending = ref(false)
let searchTimer: ReturnType<typeof setTimeout> | undefined
let lastSearch = ''
const fieldId = computed(() => props.id ?? `${uid}-multiselect`)
const labelId = computed(() => `${fieldId.value}-label`)
const summaryId = computed(() => `${fieldId.value}-summary`)
const listboxId = computed(() => `${fieldId.value}-listbox`)

/** Composables */
const { isOpen, isAnchored, anchorName, open, close } = useAnchoredPopup(anchorRef, popupRef)
const listbox = useListbox({
  id: () => listboxId.value,
  options: () => props.options,
  optionLabel: () => props.optionLabel,
  optionValue: () => props.optionValue,
  optionDisabled: () => props.optionDisabled,
  optionGroup: () => props.optionGroup,
  query: () => (props.remote ? '' : query.value),
  create: () => newValueText()
})
const { groups, visible, activeItem, optionId, scrollToActive } = listbox

/** Computed */
const emptyLabel = computed(() => props.emptyText ?? l10n.value.empty)
const clearText = computed(() => props.clearLabel ?? l10n.value.clear)
const toggleText = computed(() => props.toggleLabel ?? l10n.value.toggle)
const removeText = computed(() => props.removeLabel ?? l10n.value.remove)
const hasErrors = computed(() => props.errorMessages?.length > 0)
const errorId = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const isLocked = computed(() => props.disabled || props.readonly)
const selectedValues = computed(() => new Set(model.value))
const selectedItems = computed<SelectedEntry[]>(() => {
  const byValue = new Map(listbox.items.value.map(item => [item.value, item.label]))
  return model.value.flatMap((value) => {
    const label = byValue.get(value) ?? remembered.get(value)
    return label === undefined ? [] : [{ value, label }]
  })
})
const isShortQuery = computed(() => {
  const length = query.value.trim().length
  return props.remote && length > 0 && length < props.minSearchLength
})
const isSearching = computed(() => props.loading || searchPending.value)
const showOptions = computed(() => !isSearching.value && !isShortQuery.value)
const currentItem = computed(() => (showOptions.value ? activeItem.value : null))
const statusText = computed(() => {
  if (isSearching.value)
    return l10n.value.loading
  if (isShortQuery.value || (props.remote && !visible.value.length && !query.value.trim()))
    return l10n.value.typeToSearch
  return null
})
const isFull = computed(() => props.max != null && model.value.length >= props.max)
const showChips = computed(() => props.maxChips == null || model.value.length <= props.maxChips)
const summaryLabel = computed(() => formatLabel(props.maxChipsLabel ?? l10n.value.summary, { count: model.value.length }))
const showClear = computed(() => props.clearable && !isLocked.value && model.value.length > 0)
const groupClasses = computed(() => ['form-group', { 'form-invalid': hasErrors.value }])
const labelClasses = computed(() => ['mb-2', { 'visually-hidden': props.hideLabel }])
const fieldClasses = computed(() => [
  'form-tags',
  'multiselect',
  { 'multiselect-single-row': props.maxChips != null },
  props.variant ? `form-${props.variant}` : null,
  props.size ? `form-${props.size}` : null,
  { 'form-rounded': props.rounded },
  props.customClass
])
const fieldAria = computed(() => ({
  'role': 'combobox',
  'aria-expanded': isOpen.value,
  'aria-controls': isOpen.value ? listboxId.value : undefined,
  'aria-activedescendant': isOpen.value && currentItem.value ? optionId(currentItem.value) : undefined,
  'aria-invalid': hasErrors.value || undefined,
  'aria-describedby': [model.value.length ? summaryId.value : null, errorId.value].filter(Boolean).join(' ') || undefined
}))

/** Methods */
function announce(text: string): void {
  announcement.value = ''
  nextTick(() => (announcement.value = text))
}
function newValueText(): string {
  const text = query.value.trim()
  if (!props.freeText || !text || !showOptions.value)
    return ''
  const search = normalizeText(text)
  return selectedItems.value.some(entry => normalizeText(entry.label) === search) ? '' : text
}
function requestSearch(text: string): void {
  if (!props.remote)
    return
  clearTimeout(searchTimer)
  const trimmed = text.trim()
  searchPending.value = false
  if (trimmed === lastSearch || (trimmed && trimmed.length < props.minSearchLength))
    return
  searchPending.value = true
  searchTimer = setTimeout(() => {
    searchPending.value = false
    lastSearch = trimmed
    emit('search', trimmed)
  }, props.searchDelay)
}
function resetSearch(): void {
  clearTimeout(searchTimer)
  searchPending.value = false
  if (props.remote && lastSearch) {
    lastSearch = ''
    emit('search', '')
  }
}
function isSelected(item: ListboxItem): boolean {
  return selectedValues.value.has(item.value as ComboboxValue)
}
function isUnavailable(item: ListboxItem): boolean {
  return item.disabled || (isFull.value && !isSelected(item))
}
function openList(start: 'selected' | 'last' | 'none' = 'selected'): void {
  if (isLocked.value)
    return
  open()
  const firstSelected = visible.value.find(isSelected)
  if (start === 'selected' && firstSelected)
    listbox.activate(firstSelected)
  else if (start === 'selected')
    listbox.activateFirst()
  else if (start === 'last')
    listbox.activateLast()
  scrollToActive()
}
function closeList(): void {
  close()
  query.value = ''
  listbox.activeIndex.value = -1
  resetSearch()
}
function remove(entry: SelectedEntry): void {
  model.value = model.value.filter(value => !Object.is(value, entry.value))
  emit('remove', entry.value)
  announce(formatLabel(l10n.value.removed, { label: entry.label }))
}
function toggle(item: ListboxItem): void {
  if (isLocked.value)
    return
  if (isSelected(item)) {
    remove({ value: item.value as ComboboxValue, label: item.label })
  } else if (!isUnavailable(item)) {
    if (props.remote || item.created)
      remembered.set(item.value, item.label)
    model.value = [...model.value, item.value as ComboboxValue]
    emit('add', item.value as ComboboxValue)
    announce(formatLabel(l10n.value.added, { label: item.label }))
  }
  if (query.value) {
    query.value = ''
    listbox.activate(item)
    scrollToActive()
    resetSearch()
  }
}
function removeChip(entry: SelectedEntry): void {
  remove(entry)
  fieldRef.value?.focus()
}
function clear(): void {
  const removed = selectedItems.value
  model.value = []
  removed.forEach(item => emit('remove', item.value as ComboboxValue))
  announce(l10n.value.cleared)
  fieldRef.value?.focus()
}
function onToggleClick(): void {
  if (isOpen.value) {
    closeList()
    return
  }
  fieldRef.value?.focus()
  openList()
}
function onFieldClick(event: MouseEvent): void {
  if ((event.target as HTMLElement).closest('button'))
    return
  fieldRef.value?.focus()
  if (!isOpen.value)
    openList()
  else if (!props.filterable)
    closeList()
}
function onInput(event: Event): void {
  query.value = (event.target as HTMLInputElement).value
  if (!isOpen.value)
    openList('none')
  if (query.value.trim())
    listbox.activateFirst()
  else
    listbox.activeIndex.value = -1
  scrollToActive()
  requestSearch(query.value)
}
function onKeydown(event: KeyboardEvent): void {
  if (isLocked.value)
    return
  const { key, altKey } = event

  if (key === 'ArrowDown' || key === 'ArrowUp') {
    event.preventDefault()
    if (!isOpen.value)
      openList(altKey ? 'none' : key === 'ArrowUp' ? 'last' : 'selected')
    else if (altKey && key === 'ArrowUp')
      closeList()
    else if (!altKey)
      listbox.move(key === 'ArrowDown' ? 1 : -1)
    scrollToActive()
  } else if ((key === 'PageDown' || key === 'PageUp') && isOpen.value) {
    event.preventDefault()
    listbox.move(key === 'PageDown' ? 10 : -10)
    scrollToActive()
  } else if ((key === 'Home' || key === 'End') && isOpen.value && !props.filterable) {
    event.preventDefault()
    if (key === 'Home')
      listbox.activateFirst()
    else
      listbox.activateLast()
    scrollToActive()
  } else if (key === 'Enter' && isOpen.value) {
    event.preventDefault()
    if (currentItem.value)
      toggle(currentItem.value)
  } else if (key === 'Escape' && isOpen.value) {
    // A dialog around the field only closes on the next Esc
    event.preventDefault()
    event.stopPropagation()
    closeList()
  } else if (key === 'Backspace' && !query.value && showChips.value && selectedItems.value.length) {
    remove(selectedItems.value[selectedItems.value.length - 1]!)
  } else if (!props.filterable && key === ' ' && !listbox.isTyping()) {
    event.preventDefault()
    if (isOpen.value && currentItem.value)
      toggle(currentItem.value)
    else if (!isOpen.value)
      openList()
  } else if (!props.filterable && key.length === 1 && !event.ctrlKey && !event.metaKey) {
    event.preventDefault()
    if (listbox.typeahead(key) && !isOpen.value)
      openList('none')
  }
}
function onLabelClick(): void {
  if (!props.filterable)
    fieldRef.value?.focus()
}
function onOptionMove(item: ListboxItem): void {
  if (activeItem.value !== item)
    listbox.activate(item)
}

/** Watchers */
watch(model, (value) => {
  emit('update', value)
})
watch([() => listbox.items.value, model], ([items, values]) => {
  if (!props.remote)
    return
  for (const item of items) {
    if (values.includes(item.value as ComboboxValue))
      remembered.set(item.value, item.label)
  }
}, { immediate: true })
watch([() => props.options, () => props.loading], () => {
  if (!props.remote || !isOpen.value || props.loading || !query.value.trim())
    return
  listbox.activateFirst()
  announce(formatLabel(l10n.value.results, { count: visible.value.filter(item => !item.created).length }))
})

/** Lifecycle */
onBeforeUnmount(() => clearTimeout(searchTimer))
</script>

<template>
  <div :class="groupClasses">
    <!-- Label -->
    <label
      :id="labelId"
      :for="filterable ? fieldId : undefined"
      :class="labelClasses"
      @click="onLabelClick"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>

    <!-- Field -->
    <div
      ref="anchorRef"
      :class="fieldClasses"
      :style="{ 'anchor-name': anchorName }"
      @click="onFieldClick"
    >
      <template v-if="showChips">
        <span
          v-for="(item, index) in selectedItems"
          :key="index"
          class="btn btn-chip chip-closable"
          :class="{ disabled: isLocked }"
        >
          <span class="chip-content">{{ item.label }}</span>
          <button
            v-if="!isLocked"
            type="button"
            class="chip-remove"
            :aria-label="`${removeText} ${item.label}`"
            @mousedown.prevent
            @click="removeChip(item)"
          >
            <UiIconMaterial icon-code="&#xe5cd;" />
          </button>
        </span>
      </template>
      <span
        v-else-if="model.length && !query"
        class="multiselect-count"
      >
        {{ summaryLabel }}
      </span>

      <input
        v-if="filterable"
        :id="fieldId"
        ref="fieldRef"
        type="text"
        class="form-tags-input"
        :value="query"
        :placeholder="model.length ? undefined : placeholder ?? undefined"
        :disabled="disabled"
        :readonly="readonly"
        :required="required && !model.length"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        aria-autocomplete="list"
        v-bind="fieldAria"
        @input="onInput"
        @keydown="onKeydown"
        @blur="closeList"
      >
      <span
        v-else
        :id="fieldId"
        ref="fieldRef"
        class="form-tags-input multiselect-select"
        :class="{ 'multiselect-placeholder': !model.length }"
        :tabindex="disabled ? undefined : 0"
        :aria-labelledby="labelId"
        :aria-disabled="disabled || undefined"
        :aria-readonly="readonly || undefined"
        :aria-required="required || undefined"
        v-bind="fieldAria"
        @keydown="onKeydown"
        @blur="closeList"
      >
        {{ model.length ? '' : placeholder }}
      </span>

      <span class="multiselect-actions">
        <span
          v-if="showClear"
          class="multiselect-action"
        >
          <UiButton
            variant="text"
            custom-class="text-neutral"
            size="sm"
            icon
            :aria-label="clearText"
            :aria-controls="fieldId"
            @mousedown.prevent
            @click="clear"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe5cd;" />
            </template>
          </UiButton>
        </span>
        <span class="multiselect-action">
          <UiButton
            variant="text"
            custom-class="text-neutral combobox-toggle"
            size="sm"
            icon
            tabindex="-1"
            :aria-label="toggleText"
            :aria-expanded="isOpen"
            :aria-controls="isOpen ? listboxId : undefined"
            :disabled="isLocked"
            @mousedown.prevent
            @click="onToggleClick"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe5cf;" />
            </template>
          </UiButton>
        </span>
      </span>
    </div>

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="errorId"
      class="invalid-feedback"
    >
      {{ errorMessages?.[0] }}
    </p>
    <p
      v-else-if="optionalLabel"
      class="caption text-muted mt-1"
    >
      {{ l10nCommon.optional }}
    </p>

    <!-- Screen reader text -->
    <span
      :id="summaryId"
      class="visually-hidden"
    >
      {{ selectedItems.map(item => item.label).join(', ') }}
    </span>
    <span class="visually-hidden" aria-live="polite">{{ announcement }}</span>

    <!-- Options, after the feedback so the error stays under the field -->
    <div
      v-if="isOpen"
      ref="popupRef"
      class="listbox-popup"
      :class="{ 'listbox-popup-anchored': isAnchored }"
      :style="{ 'position-anchor': anchorName }"
      popover="manual"
      @mousedown.prevent
    >
      <ul
        :id="listboxId"
        role="listbox"
        class="listbox"
        aria-multiselectable="true"
        :aria-labelledby="labelId"
        :aria-busy="loading || undefined"
      >
        <li
          v-for="(group, groupIndex) in showOptions ? groups : []"
          :key="groupIndex"
          role="presentation"
          class="listbox-group"
        >
          <span
            v-if="group.label"
            :id="`${listboxId}-group-${group.items[0]?.key}`"
            class="listbox-group-label"
          >
            {{ group.label }}
          </span>
          <ul
            :role="group.label ? 'group' : 'presentation'"
            :aria-labelledby="group.label ? `${listboxId}-group-${group.items[0]?.key}` : undefined"
          >
            <li
              v-for="item in group.items"
              :id="optionId(item)"
              :key="item.key"
              role="option"
              class="listbox-option"
              :class="{ 'active': item === activeItem, 'selected': isSelected(item), 'listbox-option-create': item.created }"
              :aria-selected="isSelected(item)"
              :aria-disabled="isUnavailable(item) || undefined"
              @mousemove="onOptionMove(item)"
              @click="toggle(item)"
            >
              <span
                v-if="item.created"
                class="listbox-option-label"
              >
                {{ formatLabel(l10n.create, { query: item.label }) }}
              </span>
              <slot
                v-else
                name="option"
                :option="item.option"
                :selected="isSelected(item)"
                :active="item === activeItem"
              >
                <span class="listbox-option-label">{{ item.label }}</span>
              </slot>
              <UiIconMaterial
                v-if="isSelected(item)"
                icon-code="&#xe5ca;"
                class="listbox-check"
              />
            </li>
          </ul>
        </li>
      </ul>
      <p
        v-if="statusText"
        class="listbox-empty"
        role="status"
      >
        {{ statusText }}
      </p>
      <p
        v-else-if="!visible.length"
        class="listbox-empty"
        role="status"
      >
        <slot name="empty" :query="query">
          {{ emptyLabel }}
        </slot>
      </p>
    </div>
  </div>
</template>

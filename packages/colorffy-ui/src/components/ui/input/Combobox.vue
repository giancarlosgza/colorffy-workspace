<script setup lang="ts">
import type { ListboxItem } from '@/composables/useListbox'
import type { ComboboxValue, IComboboxInputEmits, IComboboxInputProps } from '@/types/input'
import { computed, nextTick, onBeforeUnmount, ref, shallowReactive, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import { normalizeText, useListbox } from '@/composables/useListbox'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IComboboxInputProps>(), {
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
  remote: false,
  loading: false,
  searchDelay: 300,
  minSearchLength: 1,
  freeText: false
})

/** Emits */
const emit = defineEmits<IComboboxInputEmits>()
/** Labels */
const l10n = useLabels('combobox')
const l10nCommon = useLabels('common')
const emptyLabel = computed(() => props.emptyText ?? l10n.value.empty)
const clearText = computed(() => props.clearLabel ?? l10n.value.clear)
const toggleText = computed(() => props.toggleLabel ?? l10n.value.toggle)

/** Model */
const model = defineModel<ComboboxValue | null>('modelValue', { default: null })

/** Data */
const uid = useId()
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLElement | null>(null)
const query = ref('')
const inputText = ref('')
const announcement = ref('')
// Labels of picked options, kept while a remote search replaces `options`
const remembered = shallowReactive(new Map<unknown, string>())
const searchPending = ref(false)
let searchTimer: ReturnType<typeof setTimeout> | undefined
let lastSearch = ''
const fieldId = computed(() => props.id ?? `${uid}-combobox`)
const labelId = computed(() => `${fieldId.value}-label`)
const listboxId = computed(() => `${fieldId.value}-listbox`)

const { isOpen, isAnchored, anchorName, open, close } = useAnchoredPopup(anchorRef, popupRef)
const listbox = useListbox({
  id: () => listboxId.value,
  options: () => props.options,
  optionLabel: () => props.optionLabel,
  optionValue: () => props.optionValue,
  optionDisabled: () => props.optionDisabled,
  optionGroup: () => props.optionGroup,
  query: () => (props.remote ? '' : query.value)
})
const { groups, visible, activeItem, optionId, scrollToActive } = listbox

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const isLocked = computed(() => props.disabled || props.readonly)
const selectedItem = computed(() => listbox.items.value.find(item => Object.is(item.value, model.value)) ?? null)
const selectedLabel = computed(() => {
  if (selectedItem.value)
    return selectedItem.value.label
  if (model.value == null)
    return ''
  return remembered.get(model.value) ?? (props.freeText && typeof model.value === 'string' ? model.value : '')
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
const showClear = computed(() => props.clearable && !isLocked.value && (model.value != null || inputText.value !== ''))

const groupClasses = computed(() => ['form-group', { 'form-invalid': hasErrors.value }])
const labelClasses = computed(() => ['mb-2', { 'visually-hidden': props.hideLabel }])
const fieldClasses = computed(() => [
  'form-control',
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
  'aria-describedby': describedById.value
}))

/** Methods */
// Cleared first, so the same message twice is still read out
function announce(text: string): void {
  announcement.value = ''
  nextTick(() => (announcement.value = text))
}
// With `remote`, the typed text goes to `search` once typing pauses
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
// A closed list drops its search, so it reopens on the default options
function resetSearch(): void {
  clearTimeout(searchTimer)
  searchPending.value = false
  if (props.remote && lastSearch) {
    lastSearch = ''
    emit('search', '')
  }
}
function openList(start: 'selected' | 'last' | 'none' = 'selected'): void {
  if (isLocked.value)
    return
  open()
  if (start === 'selected' && selectedItem.value && visible.value.includes(selectedItem.value))
    listbox.activate(selectedItem.value)
  else if (start === 'selected')
    listbox.activateFirst()
  else if (start === 'last')
    listbox.activateLast()
  scrollToActive()
}
// Closes the list and shows `text` in the field; the model updates after the parent re-renders
function finish(text: string): void {
  close()
  query.value = ''
  listbox.activeIndex.value = -1
  inputText.value = text
  resetSearch()
}
function select(item: ListboxItem): void {
  if (item.disabled)
    return
  if (props.remote)
    remembered.set(item.value, item.label)
  model.value = item.value as ComboboxValue
  finish(item.label)
}
// An emptied field clears the value; text that matches an option exactly selects it, and with `freeText` other text becomes the value
function commitText(): void {
  const text = inputText.value.trim()
  if (props.filterable && !text) {
    model.value = null
    finish('')
    return
  }
  const match = props.filterable
    ? listbox.items.value.find(item => !item.disabled && item.search === normalizeText(text))
    : null
  if (match) {
    select(match)
  } else if (props.freeText) {
    model.value = text
    finish(text)
  } else {
    finish(selectedLabel.value)
  }
}
function clear(): void {
  model.value = null
  finish('')
  fieldRef.value?.focus()
}
function toggle(): void {
  if (isOpen.value) {
    finish(selectedLabel.value)
    return
  }
  fieldRef.value?.focus()
  openList()
}
function onInput(event: Event): void {
  inputText.value = (event.target as HTMLInputElement).value
  query.value = inputText.value
  if (!isOpen.value)
    openList('none')
  if (query.value.trim() && !props.freeText)
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
      openList(altKey ? 'none' : key === 'ArrowUp' && !selectedItem.value ? 'last' : 'selected')
    else if (altKey && key === 'ArrowUp' && currentItem.value)
      select(currentItem.value)
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
      select(currentItem.value)
    else
      commitText()
  } else if (key === 'Escape') {
    // First Esc closes the list, the next clears; a dialog around it only closes after that
    if (isOpen.value) {
      event.preventDefault()
      event.stopPropagation()
      finish(selectedLabel.value)
    } else if (showClear.value) {
      event.preventDefault()
      event.stopPropagation()
      clear()
    }
  } else if (!props.filterable && key === ' ' && !listbox.isTyping()) {
    event.preventDefault()
    if (isOpen.value && currentItem.value)
      select(currentItem.value)
    else if (!isOpen.value)
      openList()
  } else if (!props.filterable && key.length === 1 && !event.ctrlKey && !event.metaKey) {
    event.preventDefault()
    if (listbox.typeahead(key) && !isOpen.value)
      openList('none')
  }
}
function onFieldClick(): void {
  if (!props.filterable && isOpen.value)
    finish(selectedLabel.value)
  else if (!isOpen.value)
    openList()
}
// A label can't focus a div, so the select-only field focuses itself
function onLabelClick(): void {
  if (!props.filterable)
    fieldRef.value?.focus()
}
function onBlur(): void {
  if (isOpen.value || query.value)
    commitText()
}
function onOptionMove(item: ListboxItem): void {
  if (!item.disabled && activeItem.value !== item)
    listbox.activate(item)
}

/** Watchers */
watch(selectedLabel, (label) => {
  if (!query.value)
    inputText.value = label
}, { immediate: true })
watch(model, (value) => {
  emit('update', value)
})
watch([() => listbox.items.value, model], ([items, value]) => {
  const item = props.remote ? items.find(entry => Object.is(entry.value, value)) : null
  if (item)
    remembered.set(item.value, item.label)
}, { immediate: true })
// Fresh results: the first one is highlighted and the count announced
watch([() => props.options, () => props.loading], () => {
  if (!props.remote || !isOpen.value || props.loading || !query.value.trim())
    return
  if (!props.freeText)
    listbox.activateFirst()
  announce(formatLabel(l10n.value.results, { count: visible.value.length }))
})

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
      class="input-group input-group-inline combobox"
      :style="{ 'anchor-name': anchorName }"
    >
      <input
        v-if="filterable"
        :id="fieldId"
        ref="fieldRef"
        type="text"
        :class="fieldClasses"
        :value="inputText"
        :placeholder="placeholder ?? undefined"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        autocomplete="off"
        autocapitalize="off"
        spellcheck="false"
        aria-autocomplete="list"
        v-bind="fieldAria"
        @input="onInput"
        @keydown="onKeydown"
        @click="onFieldClick"
        @blur="onBlur"
      >
      <div
        v-else
        :id="fieldId"
        ref="fieldRef"
        class="combobox-select" :class="[fieldClasses, { 'combobox-placeholder': !selectedItem }]"
        :tabindex="disabled ? undefined : 0"
        :aria-labelledby="labelId"
        :aria-disabled="disabled || undefined"
        :aria-readonly="readonly || undefined"
        :aria-required="required || undefined"
        v-bind="fieldAria"
        @keydown="onKeydown"
        @click="onFieldClick"
        @blur="onBlur"
      >
        <span class="combobox-value">{{ selectedLabel || placeholder }}</span>
      </div>

      <span
        v-if="showClear"
        class="input-group-suffix"
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
      <span class="input-group-suffix">
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
          @click="toggle"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5cf;" />
          </template>
        </UiButton>
      </span>
    </div>

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="describedById"
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

    <span class="visually-hidden" aria-live="polite">{{ announcement }}</span>

    <!-- Options: after the feedback, so the error keeps following the field -->
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
        :aria-labelledby="labelId"
        :aria-busy="loading || undefined"
      >
        <li
          v-for="group in showOptions ? groups : []"
          :key="group.label ?? ''"
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
              :class="{ active: item === activeItem, selected: item === selectedItem }"
              :aria-selected="item === activeItem"
              :aria-disabled="item.disabled || undefined"
              @mousemove="onOptionMove(item)"
              @click="select(item)"
            >
              <slot
                name="option"
                :option="item.option"
                :selected="item === selectedItem"
                :active="item === activeItem"
              >
                <span class="listbox-option-label">{{ item.label }}</span>
              </slot>
              <UiIconMaterial
                v-if="item === selectedItem"
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

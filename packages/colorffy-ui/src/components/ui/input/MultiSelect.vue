<script setup lang="ts">
import type { ListboxItem } from '@/composables/useListbox'
import type { ComboboxValue, IMultiSelectInputEmits, IMultiSelectInputProps } from '@/types/input'
import { computed, nextTick, ref, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
import { useListbox } from '@/composables/useListbox'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'

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
  maxChipsLabel: '{count} selected',
  emptyText: 'No results',
  clearLabel: 'Clear selection',
  toggleLabel: 'Show options',
  removeLabel: 'Remove'
})

/** Emits */
const emit = defineEmits<IMultiSelectInputEmits>()

/** Model */
const model = defineModel<ComboboxValue[]>('modelValue', { default: () => [] })

/** Data */
const uid = useId()
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLElement | null>(null)
const query = ref('')
const announcement = ref('')
const fieldId = computed(() => props.id ?? `${uid}-multiselect`)
const labelId = computed(() => `${fieldId.value}-label`)
const listboxId = computed(() => `${fieldId.value}-listbox`)
const summaryId = computed(() => `${fieldId.value}-summary`)

const { isOpen, isAnchored, anchorName, open, close } = useAnchoredPopup(anchorRef, popupRef)
const listbox = useListbox({
  id: () => listboxId.value,
  options: () => props.options,
  optionLabel: () => props.optionLabel,
  optionValue: () => props.optionValue,
  optionDisabled: () => props.optionDisabled,
  optionGroup: () => props.optionGroup,
  query: () => query.value
})
const { groups, visible, activeItem, optionId, scrollToActive } = listbox

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const errorId = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const isLocked = computed(() => props.disabled || props.readonly)
const selectedValues = computed(() => new Set(model.value))
// Chips follow the order the values were picked in
const selectedItems = computed(() => {
  const byValue = new Map(listbox.items.value.map(item => [item.value, item]))
  return model.value.flatMap(value => byValue.get(value) ?? [])
})
const isFull = computed(() => props.max != null && model.value.length >= props.max)
const showChips = computed(() => props.maxChips == null || model.value.length <= props.maxChips)
const summaryLabel = computed(() => props.maxChipsLabel.replace(/\{count\}/g, String(model.value.length)))
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
  'aria-activedescendant': isOpen.value && activeItem.value ? optionId(activeItem.value) : undefined,
  'aria-invalid': hasErrors.value || undefined,
  'aria-describedby': [model.value.length ? summaryId.value : null, errorId.value].filter(Boolean).join(' ') || undefined
}))

/** Methods */
// Cleared first, so the same message twice is still read out
function announce(text: string): void {
  announcement.value = ''
  nextTick(() => (announcement.value = text))
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
}
function remove(item: ListboxItem): void {
  model.value = model.value.filter(value => !Object.is(value, item.value))
  emit('remove', item.value as ComboboxValue)
  announce(`Removed ${item.label}`)
}
// The list stays open; a search is cleared so the next one starts fresh
function toggle(item: ListboxItem): void {
  if (isLocked.value)
    return
  if (isSelected(item)) {
    remove(item)
  } else if (!isUnavailable(item)) {
    model.value = [...model.value, item.value as ComboboxValue]
    emit('add', item.value as ComboboxValue)
    announce(`Added ${item.label}`)
  }
  if (query.value) {
    query.value = ''
    listbox.activate(item)
    scrollToActive()
  }
}
function removeChip(item: ListboxItem): void {
  remove(item)
  fieldRef.value?.focus()
}
function clear(): void {
  const removed = selectedItems.value
  model.value = []
  removed.forEach(item => emit('remove', item.value as ComboboxValue))
  announce('Selection cleared')
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
    if (activeItem.value)
      toggle(activeItem.value)
  } else if (key === 'Escape' && isOpen.value) {
    // A dialog around the field only closes on the next Esc
    event.preventDefault()
    event.stopPropagation()
    closeList()
  } else if (key === 'Backspace' && !query.value && showChips.value && selectedItems.value.length) {
    remove(selectedItems.value[selectedItems.value.length - 1]!)
  } else if (!props.filterable && key === ' ' && !listbox.isTyping()) {
    event.preventDefault()
    if (isOpen.value && activeItem.value)
      toggle(activeItem.value)
    else if (!isOpen.value)
      openList()
  } else if (!props.filterable && key.length === 1 && !event.ctrlKey && !event.metaKey) {
    event.preventDefault()
    if (listbox.typeahead(key) && !isOpen.value)
      openList('none')
  }
}
// A label can't focus a span, so the select-only field focuses itself
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
          v-for="item in selectedItems"
          :key="item.key"
          class="btn btn-chip chip-closable"
          :class="{ disabled: isLocked }"
        >
          <span class="chip-content">{{ item.label }}</span>
          <button
            v-if="!isLocked"
            type="button"
            class="chip-remove"
            :aria-label="`${removeLabel} ${item.label}`"
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
            :aria-label="clearLabel"
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
            :aria-label="toggleLabel"
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
      Optional
    </p>

    <!-- Screen reader text: what's selected, and each change -->
    <span
      :id="summaryId"
      class="visually-hidden"
    >
      {{ selectedItems.map(item => item.label).join(', ') }}
    </span>
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
        aria-multiselectable="true"
        :aria-labelledby="labelId"
      >
        <li
          v-for="group in groups"
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
              :class="{ active: item === activeItem, selected: isSelected(item) }"
              :aria-selected="isSelected(item)"
              :aria-disabled="isUnavailable(item) || undefined"
              @mousemove="onOptionMove(item)"
              @click="toggle(item)"
            >
              <slot
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
        v-if="!visible.length"
        class="listbox-empty"
        role="status"
      >
        <slot name="empty" :query="query">
          {{ emptyText }}
        </slot>
      </p>
    </div>
  </div>
</template>

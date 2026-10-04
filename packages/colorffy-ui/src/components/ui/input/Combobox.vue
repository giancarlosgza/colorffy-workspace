<script setup lang="ts">
import type { ListboxItem } from '@/composables/useListbox'
import type { ComboboxValue, IComboboxInputEmits, IComboboxInputProps } from '@/types/input'
import { computed, ref, useId, watch } from 'vue'
import { useAnchoredPopup } from '@/composables/useAnchoredPopup'
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
  emptyText: 'No results',
  clearLabel: 'Clear selection',
  toggleLabel: 'Show options'
})

/** Emits */
const emit = defineEmits<IComboboxInputEmits>()

/** Model */
const model = defineModel<ComboboxValue | null>('modelValue', { default: null })

/** Data */
const uid = useId()
const anchorRef = ref<HTMLElement | null>(null)
const popupRef = ref<HTMLElement | null>(null)
const fieldRef = ref<HTMLElement | null>(null)
const query = ref('')
const inputText = ref('')
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
  query: () => query.value
})
const { groups, visible, activeItem, optionId, scrollToActive } = listbox

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value ? `${fieldId.value}-error-0` : undefined))
const isLocked = computed(() => props.disabled || props.readonly)
const selectedItem = computed(() => listbox.items.value.find(item => Object.is(item.value, model.value)) ?? null)
const selectedLabel = computed(() => selectedItem.value?.label ?? '')
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
  'aria-activedescendant': isOpen.value && activeItem.value ? optionId(activeItem.value) : undefined,
  'aria-invalid': hasErrors.value || undefined,
  'aria-describedby': describedById.value
}))

/** Methods */
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
}
function select(item: ListboxItem): void {
  if (item.disabled)
    return
  model.value = item.value as ComboboxValue
  finish(item.label)
}
// An emptied field clears the value; text that matches an option exactly selects it
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
  if (match)
    select(match)
  else
    finish(selectedLabel.value)
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
      openList(altKey ? 'none' : key === 'ArrowUp' && !selectedItem.value ? 'last' : 'selected')
    else if (altKey && key === 'ArrowUp' && activeItem.value)
      select(activeItem.value)
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
      select(activeItem.value)
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
    if (isOpen.value && activeItem.value)
      select(activeItem.value)
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
      <span class="input-group-suffix">
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
      Optional
    </p>

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

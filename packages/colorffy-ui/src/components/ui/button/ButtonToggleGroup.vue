<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type {
  IButtonToggleGroupEmits,
  IButtonToggleGroupProps,
  IButtonToggleOption
} from '@/types/button'
import { computed, ref } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IButtonToggleGroupProps>(), {
  ariaLabel: 'Toggle button group',
  groupLabel: ''
})

/** Emits */
const emit = defineEmits<IButtonToggleGroupEmits>()

/** Model */
// Selected option id; takes precedence over the legacy per-option `active` flag.
const model = defineModel<string>()

/** Data */
const optionRefs = ref<(HTMLElement | null)[]>([])

function isSelected(option: IButtonToggleOption): boolean {
  return model.value !== undefined ? model.value === option.id : !!option.active
}

// Roving tabindex: the selected option (or first enabled) is the only tab stop.
const rovingIndex = computed(() => {
  const activeIndex = props.options.findIndex(o => isSelected(o) && !o.disabled)
  return activeIndex !== -1 ? activeIndex : props.options.findIndex(o => !o.disabled)
})

/** Methods */
function setOptionRef(el: Element | ComponentPublicInstance | null, index: number): void {
  optionRefs.value[index] = (el as HTMLElement) ?? null
}
function selectOption(event: MouseEvent | KeyboardEvent, item: IButtonToggleOption): void {
  if (!item.disabled) {
    model.value = item.id
    emit('onOptionClick', event, item)
  }
}
function nextEnabledIndex(from: number, direction: number): number {
  const count = props.options.length
  let index = from
  for (let step = 0; step < count; step++) {
    index = (index + direction + count) % count
    if (!props.options[index]?.disabled)
      return index
  }
  return from
}
function focusOption(index: number, event: KeyboardEvent): void {
  const option = props.options[index]
  if (!option || option.disabled)
    return
  selectOption(event, option)
  optionRefs.value[index]?.focus()
}
function onOptionKeydown(event: KeyboardEvent, index: number): void {
  switch (event.key) {
    case 'Enter':
    case ' ':
      event.preventDefault()
      selectOption(event, props.options[index])
      break
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      focusOption(nextEnabledIndex(index, 1), event)
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      focusOption(nextEnabledIndex(index, -1), event)
      break
    case 'Home':
      event.preventDefault()
      focusOption(nextEnabledIndex(props.options.length - 1, 1), event)
      break
    case 'End':
      event.preventDefault()
      focusOption(nextEnabledIndex(0, -1), event)
      break
  }
}

function getOptionKey(index: number): string {
  return `toggle-btn-${index}`
}
function getOptionAriaLabel(option: IButtonToggleOption): string {
  const title = option.title || 'Option'
  const disabled = option.disabled ? ' (disabled)' : ''
  const active = isSelected(option) ? ' (selected)' : ''
  return `${title}${disabled}${active}`
}
function getIconClass(option: IButtonToggleOption): string {
  return option.iconClass || ''
}
</script>

<template>
  <div
    class="toggle-btn-group"
    role="radiogroup"
    :aria-label="props.ariaLabel"
  >
    <div
      v-for="(option, index) in props.options"
      :key="getOptionKey(index)"
      :ref="(el) => setOptionRef(el, index)"
      role="radio"
      :tabindex="index === rovingIndex ? 0 : -1"
      :aria-checked="isSelected(option)"
      :aria-disabled="option.disabled"
      :aria-label="getOptionAriaLabel(option)"
      class="toggle-btn"
      :class="{
        'toggle-btn-active': isSelected(option),
        'toggle-btn-disabled': option.disabled,
      }"
      @click="selectOption($event, option)"
      @keydown="onOptionKeydown($event, index)"
    >
      <div class="toggle-btn-inner">
        <!-- Icon -->
        <div
          v-if="option.icon"
          class="toggle-btn-icon-wrapper"
        >
          <UiIconMaterial
            :icon-code="option.icon"
            :class="getIconClass(option)"
            :aria-hidden="true"
          />
        </div>

        <!-- Support text -->
        <div class="toggle-btn-support-text">
          <p
            v-if="option.title"
            class="subtitle-1"
            v-text="option.title"
          />
          <p
            v-if="option.text"
            class="subtitle-2"
            v-text="option.text"
          />
        </div>

        <!-- Badge -->
        <div v-if="option.badge && option.badge.text">
          <UiBadge
            :variant="option.badge.variant"
            :text="option.badge.text"
            :aria-label="`Tier: ${option.badge.text}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

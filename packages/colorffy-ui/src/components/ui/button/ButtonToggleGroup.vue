<script setup lang="ts">
import type { IBadgeProps } from '@/types/badge'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface IButtonToggleOption {
  id: string
  icon?: string
  iconClass?: string
  title: string
  text?: string
  badge?: {
    variant?: IBadgeProps['variant']
    text?: string
  }
  active?: boolean
  disabled?: boolean
}
interface IButtonToggleGroupProps {
  options: IButtonToggleOption[]
  ariaLabel?: string
  groupLabel?: string
}
interface IButtonToggleGroupEmits {
  onOptionClick: [event: MouseEvent, item: IButtonToggleOption]
}

/** Props */
const props = withDefaults(defineProps<IButtonToggleGroupProps>(), {
  ariaLabel: 'Toggle button group',
  groupLabel: ''
})

/** Emits */
const emit = defineEmits<IButtonToggleGroupEmits>()

/** Methods */
function handleOptionClick(event: MouseEvent, item: IButtonToggleOption): void {
  if (!item.disabled) {
    emit('onOptionClick', event, item)
  }
}
function handleKeyDown(event: KeyboardEvent, item: IButtonToggleOption): void {
  if (!item.disabled && (event.key === 'Enter' || event.key === ' ')) {
    if (event.key === ' ') {
      event.preventDefault()
    }
    // Create a synthetic MouseEvent for consistency with the emit interface
    const syntheticEvent = new MouseEvent('click', {
      bubbles: event.bubbles,
      cancelable: event.cancelable,
      view: window
    })
    emit('onOptionClick', syntheticEvent, item)
  }
}

function getOptionKey(index: number): string {
  return `toggle-btn-${index}`
}
function getOptionAriaLabel(option: IButtonToggleOption): string {
  const title = option.title || 'Option'
  const disabled = option.disabled ? ' (disabled)' : ''
  const active = option.active ? ' (selected)' : ''
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
      role="radio"
      :tabindex="option.disabled ? -1 : 0"
      :aria-checked="option.active"
      :aria-disabled="option.disabled"
      :aria-label="getOptionAriaLabel(option)"
      class="toggle-btn"
      :class="{
        'toggle-btn-active': option.active,
        'toggle-btn-disabled': option.disabled,
      }"
      @click="handleOptionClick($event, option)"
      @keydown="handleKeyDown($event, option)"
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

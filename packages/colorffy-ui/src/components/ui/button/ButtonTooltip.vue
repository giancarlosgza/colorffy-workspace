<script setup lang="ts">
import type { IButtonTooltipEmits, IButtonTooltipProps } from '@/types/button'
import { Tooltip as VTooltip } from 'floating-vue'
import UiButton from './Button.vue'

/** Props */
withDefaults(defineProps<IButtonTooltipProps>(), {
  tooltipText: '',
  id: 'tooltip',
  title: '',
  text: '',
  variant: 'filled',
  color: '',
  size: '',
  icon: false,
  iconVariant: undefined,
  iconTrailing: false,
  disabled: false,
  loading: false,
  customClass: '',
  rounded: false,
  fluid: false,
  placement: 'top' as const
})

/** Emits */
defineEmits<IButtonTooltipEmits>()
</script>

<template>
  <VTooltip
    :aria-id="`${id}-tooltip`"
    :placement="placement"
    :class="{ 'w-100': fluid }"
  >
    <!-- Button component -->
    <UiButton
      :id
      :title
      :text
      :variant
      :color
      :size
      :icon
      :icon-variant="iconVariant"
      :custom-class="customClass"
      :rounded="rounded"
      :fluid="fluid"
      :icon-trailing="iconTrailing"
      :loading="loading"
      :disabled="disabled"
      :aria-label="text ? undefined : (title || tooltipText)"
      :aria-expanded="ariaExpanded"
      :aria-controls="ariaControls"
      @click="$emit('onClick')"
    >
      <!-- Icon slot -->
      <template #icon>
        <slot name="icon" />
      </template>
    </UiButton>

    <!-- Tooltip text slot -->
    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>
</template>

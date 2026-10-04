<script setup lang="ts">
import type { IButtonTooltipEmits, IButtonTooltipProps } from '@/types/button'
import { Tooltip as VTooltip } from 'floating-vue'
import { useFloatingContainer } from '@/composables/useFloatingContainer'
import UiButton from './Button.vue'

/** Props */
withDefaults(defineProps<IButtonTooltipProps>(), {
  tooltipText: '',
  id: '',
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
  placement: 'top' as const,
  ariaExpanded: undefined
})

/** Emits */
defineEmits<IButtonTooltipEmits>()

/** Data */
const floatingProps = useFloatingContainer()
</script>

<template>
  <VTooltip
    v-bind="floatingProps"
    :aria-id="id ? `${id}-tooltip` : undefined"
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
      :type="type"
      :to="to"
      :href="href"
      :as="as"
      @click="$emit('click', $event)"
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

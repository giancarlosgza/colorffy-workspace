<script setup lang="ts">
import type { IButtonMenuEmits, IButtonMenuProps } from '@/types/button'
import { Dropdown as VDropdown, Tooltip as VTooltip } from 'floating-vue'
import UiButton from './Button.vue'

/** Props */
withDefaults(defineProps<IButtonMenuProps>(), {
  isMobile: false,
  tooltipText: 'menu',
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
  placement: 'bottom',
  tooltipPlacement: 'top'
})

/** Emits */
defineEmits<IButtonMenuEmits>()
</script>

<template>
  <VDropdown
    :aria-id="`${id}-dropdown`"
    :positioning-disabled="isMobile"
    :placement="placement"
    :class="{ 'w-100': fluid }"
  >
    <VTooltip
      :aria-id="`${id}-tooltip`"
      :placement="tooltipPlacement"
      :class="{ 'w-100': fluid }"
      class="d-inline-block"
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

    <!-- Dropdown menu slot -->
    <template #popper>
      <ul>
        <slot name="menu" />
      </ul>
    </template>
  </VDropdown>
</template>

<script setup lang="ts">
import type { IButtonProps } from '@/types/button'
import { Dropdown as VDropdown, Tooltip as VTooltip } from 'floating-vue'
import UiButton from './Button.vue'

/** Interfaces */
interface IButtonMenuProps extends IButtonProps {
  isMobile?: boolean
  tooltipText?: string
}
interface IButtonMenuEmits {
  (e: 'onClick'): void
}

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
  rounded: false
})

/** Emits */
defineEmits<IButtonMenuEmits>()
</script>

<template>
  <div>
    <VDropdown
      :aria-id="`${id}-dropdown`"
      :positioning-disabled="isMobile"
    >
      <VTooltip
        :aria-id="`${id}-tooltip`"
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
          <template #content>
            <slot name="content" />
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
  </div>
</template>

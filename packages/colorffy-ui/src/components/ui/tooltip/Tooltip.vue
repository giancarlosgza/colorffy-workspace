<script setup lang="ts">
import type { ITooltipProps } from '@/types/tooltip'
import { Tooltip as VTooltip } from 'floating-vue'
import { useId } from 'vue'
import { useFloatingContainer } from '@/composables/useFloatingContainer'

/** Props */
const props = withDefaults(defineProps<ITooltipProps>(), {
  text: null,
  placement: 'top',
  disabled: false,
  ariaId: undefined,
  customClass: null
})

// SSR-stable fallback id: floating-vue's auto-generated ids differ between
// server and client and trigger hydration attribute mismatches
const fallbackAriaId = useId()
const resolvedAriaId = props.ariaId ?? fallbackAriaId

/** Data */
const floatingProps = useFloatingContainer()
</script>

<template>
  <VTooltip
    v-bind="floatingProps"
    class="d-inline-block"
    :class="customClass"
    :aria-id="resolvedAriaId"
    :placement="placement"
    :disabled="disabled"
  >
    <!-- Trigger element -->
    <slot />

    <!-- Tooltip content -->
    <template #popper>
      <!-- Rich content slot takes priority over the text prop -->
      <slot name="content">
        {{ text }}
      </slot>
    </template>
  </VTooltip>
</template>

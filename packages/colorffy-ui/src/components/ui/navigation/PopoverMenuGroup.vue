<script setup lang="ts">
import type { IPopoverMenuGroupProps } from '@/types/navigation'

/** Props */
withDefaults(defineProps<IPopoverMenuGroupProps>(), {
  text: null,
  ariaLabel: null,
  customClass: null
})
</script>

<template>
  <div
    class="popover-menu-group"
    :class="customClass"
    role="group"
    :aria-label="ariaLabel || text || undefined"
  >
    <p
      v-if="text"
      class="popover-menu-group-label"
    >
      {{ text }}
    </p>

    <slot />
  </div>
</template>

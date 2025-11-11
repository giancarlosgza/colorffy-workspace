<script setup lang="ts">
import type { ISidebarProps } from '@/types/sidebar'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<ISidebarProps>(), {
  bordered: false,
  rail: false,
  width: null,
  customClass: ''
})

/** Computed */
const sidebarClasses = computed(() => [
  'navigation-drawer',
  {
    'drawer-bordered': props.bordered,
    'drawer-closed': props.rail
  },
  props.customClass
])
const sidebarStyles = computed(() => {
  if (props.width) {
    return { '--theme-nav-drawer-width': props.width }
  }
  return {}
})
</script>

<template>
  <div
    :class="sidebarClasses"
    :style="sidebarStyles"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="drawer-content">
      <slot name="header" />
      <slot name="body" />
      <slot name="footer" />
      <slot />
    </div>
  </div>
</template>

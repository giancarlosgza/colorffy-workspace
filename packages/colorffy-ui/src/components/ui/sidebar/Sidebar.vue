<script setup lang="ts">
import type { ISidebarEmits, ISidebarProps } from '@/types/sidebar'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<ISidebarProps>(), {
  bordered: false,
  rail: false,
  open: false,
  width: null,
  ariaLabel: 'Main navigation',
  customClass: '',
  headerClass: null,
  bodyClass: null,
  footerClass: null
})

/** Emits */
const emit = defineEmits<ISidebarEmits>()

/** Computed */
const sidebarClasses = computed(() => [
  'navigation-drawer',
  {
    'drawer-bordered': props.bordered,
    'drawer-rail': props.rail,
    'drawer-open': props.open,
    'drawer-closed': !props.open
  },
  props.customClass
])
const sidebarStyles = computed(() => {
  if (props.width) {
    return { '--cffy-sidebar-width': props.width }
  }
  return {}
})
</script>

<template>
  <div
    v-if="open"
    class="drawer-overlay"
    @click="emit('update:open', false)"
  />

  <nav
    :class="sidebarClasses"
    :style="sidebarStyles"
    :aria-label="ariaLabel"
  >
    <div class="drawer-content">
      <div
        v-if="$slots.header"
        class="drawer-header"
        :class="headerClass"
      >
        <slot name="header" />
      </div>
      <div
        v-if="$slots.body"
        class="drawer-body"
        :class="bodyClass"
      >
        <slot name="body" />
      </div>
      <div
        v-if="$slots.footer"
        class="drawer-footer"
        :class="footerClass"
      >
        <slot name="footer" />
      </div>
    </div>
  </nav>
</template>

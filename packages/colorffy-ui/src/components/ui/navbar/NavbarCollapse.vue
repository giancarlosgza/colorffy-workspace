<script setup lang="ts">
import type { INavbarCollapseProps } from '@/types/navbar'

/** Props */
const _props = withDefaults(defineProps<INavbarCollapseProps>(), {
  customClass: null
})

/** Slots */
const slots = defineSlots<{
  default?: () => any
  start?: () => any
  end?: () => any
}>()
</script>

<template>
  <div class="navbar-collapse" :class="customClass">
    <!-- Default slot for custom content -->
    <slot v-if="slots.default" />

    <!-- Start section slot -->
    <ul
      v-if="!slots.default && slots.start"
      class="navbar-nav nav-start"
    >
      <slot name="start" />
    </ul>

    <!-- End section slot -->
    <ul
      v-if="!slots.default && slots.end
      " class="navbar-nav nav-end"
    >
      <slot name="end" />
    </ul>
  </div>
</template>

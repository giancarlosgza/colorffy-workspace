<script setup lang="ts">
import type { INavbarCollapseProps } from '@/types/navbar'

/** Props */
const _props = withDefaults(defineProps<INavbarCollapseProps>(), {
  customClass: null
})
</script>

<template>
  <div class="navbar-collapse" :class="customClass">
    <!-- Start section slot -->
    <ul class="navbar-nav nav-end">
      <slot name="end" />
    </ul>

    <!-- End section slot -->
    <ul class="navbar-nav nav-start">
      <slot name="start" />
    </ul>
  </div>
</template>

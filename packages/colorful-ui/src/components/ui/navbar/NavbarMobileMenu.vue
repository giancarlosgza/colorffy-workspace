<script setup lang="ts">
import type { INavbarMobileMenuProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarMobileMenuProps>(), {
  customClass: null
})
</script>

<template>
  <div class="navbar-sm-avatar-wrapper" :class="customClass">
    <slot />
  </div>
</template>

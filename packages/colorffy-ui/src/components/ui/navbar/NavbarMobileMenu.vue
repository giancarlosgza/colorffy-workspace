<script setup lang="ts">
import type { INavbarMobileMenuProps } from '@/types/navbar'

/** Props */
withDefaults(defineProps<INavbarMobileMenuProps>(), {
  customClass: null
})
</script>

<template>
  <div class="navbar-sm-avatar-wrapper" :class="customClass">
    <slot />
  </div>
</template>

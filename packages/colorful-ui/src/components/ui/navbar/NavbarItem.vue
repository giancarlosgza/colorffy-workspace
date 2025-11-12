<script setup lang="ts">
import type { INavbarItemProps } from '@/types/navbar'

/** Props */
const _props = withDefaults(defineProps<INavbarItemProps>(), {
  customClass: null
})
</script>

<template>
  <li class="nav-item" :class="customClass">
    <slot />
  </li>
</template>

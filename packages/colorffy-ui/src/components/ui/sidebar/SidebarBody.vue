<script setup lang="ts">
import type { ISidebarBodyProps } from '@/types/sidebar'

/** Props */
defineProps<ISidebarBodyProps>()
</script>

<template>
  <div class="drawer-body" :class="customClass">
    <slot />
  </div>
</template>

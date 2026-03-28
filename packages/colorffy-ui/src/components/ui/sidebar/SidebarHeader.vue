<script setup lang="ts">
import type { ISidebarHeaderProps } from '@/types/sidebar'

/** Props */
defineProps<ISidebarHeaderProps>()
</script>

<template>
  <div class="drawer-header" :class="customClass">
    <slot />
  </div>
</template>

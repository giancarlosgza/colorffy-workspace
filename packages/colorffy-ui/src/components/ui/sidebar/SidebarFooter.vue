<script setup lang="ts">
import type { ISidebarFooterProps } from '@/types/sidebar'

/** Props */
defineProps<ISidebarFooterProps>()
</script>

<template>
  <div class="drawer-footer" :class="customClass">
    <slot />
  </div>
</template>

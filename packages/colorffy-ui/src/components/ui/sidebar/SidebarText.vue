<script setup lang="ts">
import type { ISidebarTextProps } from '@/types/sidebar'

/** Props */
withDefaults(defineProps<ISidebarTextProps>(), {
  text: '',
  customClass: ''
})
</script>

<template>
  <p class="drawer-text" :class="customClass">
    {{ text }}
  </p>
</template>

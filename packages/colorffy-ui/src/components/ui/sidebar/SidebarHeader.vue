<script setup lang="ts">
/** Props */
defineProps<{
  customClass?: string | null
}>()
</script>

<template>
  <div class="drawer-header" :class="customClass">
    <slot />
  </div>
</template>

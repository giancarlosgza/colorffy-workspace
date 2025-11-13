<script setup lang="ts">
/** Props */
defineProps<{
  customClass?: string | null
}>()
</script>

<template>
  <div class="drawer-footer" :class="customClass">
    <slot />
  </div>
</template>

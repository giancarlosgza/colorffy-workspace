<script setup lang="ts">
/** Props */
defineProps<{
  customClass?: string | null
}>()
</script>

<template>
  <div class="drawer-body" :class="customClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
/** Props */
const props = withDefaults(defineProps<{
  text?: string
  customClass?: string | null
}>(), {
  text: '',
  customClass: ''
})
</script>

<template>
  <p class="drawer-text" :class="customClass">
    {{ text }}
  </p>
</template>

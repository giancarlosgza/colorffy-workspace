<script setup lang="ts">
import type { IButtonFabGroupProps } from '@/types/button'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IButtonFabGroupProps>(), {
  top: false,
  start: false,
  customClass: ''
})

/** Computed */
const fabGroupClasses = computed(() => {
  const classes = []

  if (props.top)
    classes.push('fab-top')

  if (props.start)
    classes.push('fab-start')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div
    class="fab-group"
    :class="fabGroupClasses"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IProgressSpinnerProps } from '@/types/progress'
import type { ClassValue } from '@/types/shared'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IProgressSpinnerProps>(), {
  size: '1.25rem',
  customClass: null,
  customStyles: null
})

/** Computed */
const spinnerClasses = computed(() => {
  const classes: ClassValue[] = ['progress-spinner']

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
// Vue merges a style array, so string and object `customStyles` both apply on top
const spinnerStyles = computed(() => [{ '--cffy-progress-spinner-size': props.size }, props.customStyles])
</script>

<template>
  <div
    :class="spinnerClasses"
    :style="spinnerStyles"
    role="status"
    aria-label="Loading"
  />
</template>

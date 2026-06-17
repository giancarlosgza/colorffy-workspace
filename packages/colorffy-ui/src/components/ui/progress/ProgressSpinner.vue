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
const spinnerStyles = computed(() => {
  const styles: Record<string, any> = {
    '--_progress-spinner-size': props.size
  }

  if (props.customStyles) {
    if (typeof props.customStyles === 'string') {
      return [styles, props.customStyles].join('; ')
    }
    return { ...styles, ...props.customStyles }
  }

  return styles
})
</script>

<template>
  <div
    :class="spinnerClasses"
    :style="spinnerStyles"
    role="status"
    aria-label="Loading"
  />
</template>

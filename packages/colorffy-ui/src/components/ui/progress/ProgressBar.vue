<script setup lang="ts">
import type { IProgressBarProps } from '@/types/progress'
import type { ClassValue } from '@/types/shared'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IProgressBarProps>(), {
  value: 0,
  size: undefined,
  animated: false,
  gradient: false,
  indeterminate: false,
  text: null,
  ariaValuemin: 0,
  ariaValuemax: 100,
  customClass: null,
  customStyles: null,
  barClass: null,
  barStyles: null
})

/** Computed */
const progressClasses = computed(() => {
  const classes: ClassValue[] = ['progress']

  if (props.size === 'sm')
    classes.push('progress-sm')

  if (props.size === 'lg')
    classes.push('progress-lg')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
const progressBarClasses = computed(() => {
  const classes: ClassValue[] = ['progress-bar']

  if (props.animated)
    classes.push('progress-animated')

  if (props.gradient)
    classes.push('progress-gradient')

  if (props.indeterminate)
    classes.push('progress-indeterminate')

  if (props.barClass)
    classes.push(props.barClass)

  return classes
})
const progressBarStyles = computed(() => {
  const styles: Record<string, any> = {
    '--_progress-width': `${props.value}%`
  }

  if (props.barStyles) {
    if (typeof props.barStyles === 'string') {
      return [styles, props.barStyles].join('; ')
    }
    return { ...styles, ...props.barStyles }
  }

  return styles
})
</script>

<template>
  <div
    :class="progressClasses"
    :style="customStyles"
  >
    <div
      :class="progressBarClasses"
      :style="progressBarStyles"
      role="progressbar"
      :aria-label="ariaLabel"
      :aria-valuenow="indeterminate ? undefined : value"
      :aria-valuemin="ariaValuemin"
      :aria-valuemax="ariaValuemax"
    >
      <span v-if="text" v-text="text" />
      <slot />
    </div>
  </div>
</template>

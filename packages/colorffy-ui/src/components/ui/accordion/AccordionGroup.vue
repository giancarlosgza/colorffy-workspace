<script setup lang="ts">
import type { IAccordionGroupProps } from '@/types/accordion'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IAccordionGroupProps>(), {
  isTransparent: false,
  variant: null,
  size: null,
  shape: 'rounded',
  customClass: null
})

/** Computed */
const groupClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []
  if (props.isTransparent)
    classes.push('accordion-transparent')

  if (props.variant)
    classes.push(`accordion-${props.variant}`)

  if (props.size && props.size !== 'md')
    classes.push(`accordion-${props.size}`)

  if (props.shape === 'square')
    classes.push('accordion-square')

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass)
  }
  return classes
})
</script>

<template>
  <div
    class="accordion-group"
    :class="groupClasses"
  >
    <slot />
  </div>
</template>

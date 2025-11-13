<script setup lang="ts">
import type { IAccordionGroupProps } from '@/types/accordion'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IAccordionGroupProps>(), {
  isTransparent: false,
  customClass: null
})

/** Computed */
const groupClasses = computed(() => {
  const classes: any[] = []
  if (props.isTransparent)
    classes.push('accordion-transparent')

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

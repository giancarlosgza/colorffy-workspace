<script setup lang="ts">
import type { IListGroupProps } from '@/types/list'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IListGroupProps>(), {
  variant: null,
  size: null,
  isInteractive: false,
  customClass: null
})

/** Computed */
const listClasses = computed(() => {
  const classes: any[] = []

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass)
  }

  if (props.variant)
    classes.push(`list-group-${props.variant}`)

  if (props.size)
    classes.push(`list-group-${props.size}`)

  if (props.isInteractive)
    classes.push('list-group-interactive')

  return classes
})
</script>

<template>
  <ul
    class="list-group"
    :class="listClasses"
  >
    <slot />
  </ul>
</template>

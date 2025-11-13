<script setup lang="ts">
import type { IButtonGroupProps } from '@/types/button'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IButtonGroupProps>(), {
  connected: false,
  joined: false,
  vertical: false,
  customClass: ''
})

/** Computed */
const buttonGroupClasses = computed(() => {
  const classes = []

  if (props.connected)
    classes.push('btn-group-connected')

  if (props.joined)
    classes.push('btn-group-joined')

  if (props.vertical)
    classes.push('btn-group-vertical')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div
    class="btn-group"
    :class="buttonGroupClasses"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { IDividerProps } from '@/types/divider'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IDividerProps>(), {
  text: null,
  vertical: false,
  inset: false,
  customClass: null
})

/** Computed */
const dividerClasses = computed(() => {
  const classes: (string | string[] | Record<string, boolean>)[] = []

  if (props.inset)
    classes.push('divider-inset')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <!-- Text divider -->
  <div
    v-if="text"
    class="divider divider-text"
    :class="dividerClasses"
    role="separator"
    v-text="text"
  />

  <!-- Vertical divider -->
  <div
    v-else-if="vertical"
    class="divider divider-vertical"
    :class="dividerClasses"
    role="separator"
    aria-orientation="vertical"
  />

  <!-- Horizontal divider -->
  <hr
    v-else
    class="divider"
    :class="dividerClasses"
  >
</template>

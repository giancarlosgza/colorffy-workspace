<script setup lang="ts">
import type { ICardProps } from '@/types/card'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<ICardProps>(), {
  id: null,
  title: '',
  variant: '',
  size: undefined,
  customClass: null,
  selectable: false
})

/** Computed */
const cardClasses = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`card-${props.variant}`)

  // Scalable size prop
  if (props.size === 'xs')
    classes.push('card-xs')
  else if (props.size === 'sm')
    classes.push('card-sm')
  else if (props.size === 'md')
    classes.push('card-md')

  // Selectable state
  if (props.selectable)
    classes.push('card-selectable')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div
    v-bind="{ title: title || undefined, id: id ? `card-${id}` : undefined }"
    class="card"
    :class="cardClasses"
  >
    <div class="card-header">
      <slot name="header">
        <p
          v-if="title"
          class="card-title"
        >
          {{ title }}
        </p>
      </slot>
    </div>
    <div class="card-body">
      <slot name="body" />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

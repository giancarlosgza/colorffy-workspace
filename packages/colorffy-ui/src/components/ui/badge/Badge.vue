<script setup lang="ts">
import type { IBadgeProps } from '@/types/badge'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IBadgeProps>(), {
  text: undefined,
  variant: 'primary',
  iconCode: null,
  size: undefined,
  pill: false,
  customClass: null,
  iconClass: null,
  iconStyle: null,
  dot: false,
  max: null,
  attached: false
})

/** Computed */
const badgeClasses = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`badge-${props.variant}`)

  if (props.size === 'sm')
    classes.push('badge-sm')

  if (props.pill)
    classes.push('badge-pill')

  if (props.dot)
    classes.push('badge-dot')

  if (props.attached)
    classes.push('badge-attached')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})

// Pure passthrough of `text` unless `max` is explicitly set and exceeded,
// e.g. text="120" + max={99} -> "99+"
const displayText = computed(() => {
  if (props.max == null || !props.text)
    return props.text

  const numericValue = Number(props.text)

  if (!Number.isNaN(numericValue) && numericValue > props.max)
    return `${props.max}+`

  return props.text
})
</script>

<template>
  <div
    class="badge"
    :class="badgeClasses"
  >
    <UiIconMaterial
      v-if="iconCode && !dot"
      :icon-code="iconCode"
      :class="iconClass"
      :style="iconStyle"
    />
    <span v-if="text && !dot" v-text="displayText" />
  </div>
</template>

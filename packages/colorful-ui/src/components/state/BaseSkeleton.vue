<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

/** Interfaces */
interface IBaseSkeletonProps {
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'thumbnail' | 'ai-generation' | 'shimmer'
  isThumbnail?: boolean // Deprecated: use variant="thumbnail" instead
  customClass?: string | string[] | null
  skeletonStyles?: StyleValue
  width?: string | number
  height?: string | number
  rounded?: boolean
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<IBaseSkeletonProps>(), {
  size: 'md',
  variant: 'default',
  isThumbnail: false,
  customClass: null,
  skeletonStyles: null,
  width: undefined,
  height: undefined,
  rounded: false,
  role: 'status',
  ariaLabel: 'Loading content',
  ariaLive: 'polite'
})

/** Computed */
const skeletonClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = ['skeleton']

  if (props.size) {
    classes.push(`skeleton-${props.size}`)
  }

  // Handle both new variant prop and legacy isThumbnail prop
  const effectiveVariant = props.isThumbnail ? 'thumbnail' : props.variant

  if (effectiveVariant && effectiveVariant !== 'default') {
    if (effectiveVariant === 'thumbnail') {
      classes.push('skeleton-thumbnail')
    } else {
      classes.push(`skeleton-${effectiveVariant}`)
    }
  }

  if (props.rounded) {
    classes.push('rounded-pill')
  }

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
})
const skeletonStyles = computed(() => {
  const styles: Record<string, string> = {}

  if (props.width) {
    styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  }

  if (props.height) {
    styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  }

  // Merge with user-provided styles
  if (props.skeletonStyles) {
    if (typeof props.skeletonStyles === 'string') {
      return [styles, props.skeletonStyles]
    } else {
      return { ...styles, ...props.skeletonStyles }
    }
  }

  return styles
})
const ariaAttributes = computed(() => {
  const attributes: Record<string, string> = {}

  if (props.role)
    attributes.role = props.role
  if (props.ariaLabel)
    attributes['aria-label'] = props.ariaLabel
  if (props.ariaLive && props.ariaLive !== 'off')
    attributes['aria-live'] = props.ariaLive

  return attributes
})
</script>

<template>
  <div
    :class="skeletonClasses"
    :style="skeletonStyles"
    v-bind="ariaAttributes"
  />
</template>

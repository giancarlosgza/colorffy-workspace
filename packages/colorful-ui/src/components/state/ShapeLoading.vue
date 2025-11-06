<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

/** Interfaces */
interface IShapeLoadingProps {
  title?: string | null
  subtitle?: string | null
  customClass?: string | string[] | null
  loadingStyles?: StyleValue
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<IShapeLoadingProps>(), {
  title: null,
  subtitle: null,
  customClass: null,
  loadingStyles: null,
  role: 'status',
  ariaLabel: 'Loading content',
  ariaLive: 'polite'
})

/** Computed */
const containerClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = ['loading-shapes-container']

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
})
const titleClasses = computed(() => {
  return ['subtitle-1', 'font-primary', 'fw-600', 'mb-0', 'fs-500']
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
    :class="containerClasses"
    :style="loadingStyles"
    v-bind="ariaAttributes"
  >
    <!-- Label wrapper -->
    <div
      v-if="title || subtitle"
      class="loading-label-wrapper"
    >
      <p
        v-if="title"
        :class="titleClasses"
      >
        {{ title }}
      </p>
      <p
        v-if="subtitle"
        class="subtitle-2 text-muted mt-1 mb-0"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- Shapes -->
    <div
      class="shapes-wrapper"
      aria-hidden="true"
    >
      <div class="shape" />
      <div class="shape" />
      <div class="shape" />
    </div>
  </div>
</template>

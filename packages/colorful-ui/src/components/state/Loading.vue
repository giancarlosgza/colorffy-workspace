<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

/** Interfaces */
interface ILoadingProps {
  title?: string | null
  subtitle?: string | null
  customClass?: string | string[] | null
  loadingStyles?: StyleValue
  spinnerSize?: string | number
  hideSpinner?: boolean
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<ILoadingProps>(), {
  title: null,
  subtitle: null,
  customClass: null,
  loadingStyles: null,
  spinnerSize: '65px',
  hideSpinner: false,
  role: 'status',
  ariaLabel: 'Loading',
  ariaLive: 'polite'
})

/** Computed */
const loadingClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = []

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
})
const spinnerSizeValue = computed(() => {
  return typeof props.spinnerSize === 'number' ? `${props.spinnerSize}px` : props.spinnerSize
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
    :class="loadingClasses"
    :style="loadingStyles"
    v-bind="ariaAttributes"
  >
    <svg
      v-if="!hideSpinner"
      class="spinner mb-3"
      :width="spinnerSizeValue"
      :height="spinnerSizeValue"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
    <h2
      v-if="title"
      class="fs-500 fw-800 mb-2"
    >
      {{ title }}
    </h2>
    <p
      v-if="subtitle"
      class="subtitle-1 text-muted mb-3"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

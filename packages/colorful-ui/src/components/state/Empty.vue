<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'

/** Interfaces */
interface IEmptyProps {
  title?: string | null
  subtitle?: string | null
  customClass?: string | string[] | null
  emptyStyles?: StyleValue
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<IEmptyProps>(), {
  title: null,
  subtitle: null,
  customClass: null,
  emptyStyles: null,
  role: 'status',
  ariaLabel: 'Empty state',
  ariaLive: 'polite'
})

/** Computed */
const emptyClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = ['text-center', 'my-3']

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
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
    :class="emptyClasses"
    :style="emptyStyles"
    v-bind="ariaAttributes"
  >
    <!-- Icon State -->
    <div class="icon-state-wrapper">
      <div class="icon-empty-state" />
      <div class="icon-empty-state" />
      <div class="icon-empty-state" />
    </div>

    <!-- Title -->
    <h3
      v-if="title"
      class="fw-800 mb-2 subtitle-1 fs-500"
    >
      {{ title }}
    </h3>

    <!-- Subtitle -->
    <p
      v-if="subtitle"
      class="subtitle-2 text-muted mb-3"
    >
      {{ subtitle }}
    </p>

    <!-- Action slot -->
    <slot name="button" />
  </div>
</template>

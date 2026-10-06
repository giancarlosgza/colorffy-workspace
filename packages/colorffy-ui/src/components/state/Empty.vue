<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import UiButtonGroup from '../ui/button/ButtonGroup.vue'
import UiIconMaterial from '../ui/icon/Material.vue'

/** Interfaces */
interface IEmptyProps {
  title?: string | null
  subtitle?: string | null
  customClass?: string | string[] | null
  emptyStyles?: StyleValue
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
  useCustomIcon?: boolean
  iconCode?: string
}

/** Props */
const props = withDefaults(defineProps<IEmptyProps>(), {
  title: null,
  subtitle: null,
  customClass: null,
  emptyStyles: null,
  role: 'status',
  ariaLive: 'polite',
  useCustomIcon: false,
  iconCode: '&#xeb83;'
})

/** Labels */
const l10n = useLabels('empty')

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
  const label = props.ariaLabel ?? l10n.value.ariaLabel
  if (label)
    attributes['aria-label'] = label
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
    <!-- Icon -->
    <div v-if="!useCustomIcon" class="icon-state-wrapper">
      <div class="icon-empty-state" />
      <div class="icon-empty-state" />
      <div class="icon-empty-state" />
    </div>

    <!-- Custom icon -->
    <UiIconMaterial
      v-else
      :icon-code="iconCode"
      class="fs-4xl lh-1 text-muted mb-3"
    />

    <!-- Title -->
    <h3
      v-if="title"
      class="fw-800 mb-2 subtitle-1 fs-lg"
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

    <!-- Action -->
    <UiButtonGroup
      v-if="$slots.action"
      custom-class="justify-content-center"
    >
      <slot name="action" />
    </UiButtonGroup>
  </div>
</template>

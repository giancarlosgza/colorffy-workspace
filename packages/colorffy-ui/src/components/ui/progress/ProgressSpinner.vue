<script setup lang="ts">
import type { IProgressSpinnerProps } from '@/types/progress'
import type { ClassValue } from '@/types/shared'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<IProgressSpinnerProps>(), {
  size: '1.25rem',
  customClass: null,
  customStyles: null
})

/** Labels */
const l10n = useLabels('loading')

/** Computed */
const spinnerClasses = computed(() => {
  const classes: ClassValue[] = ['progress-spinner']

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
const spinnerStyles = computed(() => [{ '--cffy-progress-spinner-size': props.size }, props.customStyles])
</script>

<template>
  <div
    :class="spinnerClasses"
    :style="spinnerStyles"
    role="status"
    :aria-label="l10n.spinner"
  />
</template>

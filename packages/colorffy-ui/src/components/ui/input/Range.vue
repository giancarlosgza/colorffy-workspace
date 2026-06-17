<script setup lang="ts">
import type { IRangeInputEmits, IRangeInputProps } from '@/types/input'
import { computed, onMounted, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<IRangeInputProps>(), {
  id: null,
  label: null,
  min: 0,
  max: 100,
  step: 1,
  modelValue: null,
  errorMessages: () => [],
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  disabled: false,
  size: null,
  hideLabel: false,
  required: false
})

/** Emits */
const emit = defineEmits<IRangeInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => (props.id ? `${props.id}-input-range` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const rangeClasses = computed(() => {
  const classes = ['form-control', 'form-range']
  if (props.variant) {
    classes.push(`form-${props.variant}`)
  }
  if (props.size) {
    classes.push(`form-${props.size}`)
  }
  if (props.rounded) {
    classes.push('form-rounded')
  }
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})

const valueAsPercent = computed(() => {
  // Guard empty/NaN explicitly so a legitimate 0 isn't discarded.
  const numeric = Number(model.value)
  const currentValue = model.value === null || model.value === '' || Number.isNaN(numeric)
    ? props.min
    : numeric
  const percent = ((currentValue - props.min) / (props.max - props.min)) * 100
  return Math.round(percent)
})

/** Watchers */
watch(model, (value) => {
  emit('onUpdate', value)
})

// Seed an empty model with min so the native thumb matches the stored value
onMounted(() => {
  if (model.value == null)
    model.value = props.min
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Input -->
    <label
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>
    <input
      :id="inputId"
      v-model="model"
      :class="rangeClasses"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :aria-invalid="hasErrors || undefined"
      :aria-describedby="describedById"
      :style="`--_form-range-track-fill: ${valueAsPercent}%;`"
      :disabled="disabled"
    >

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="describedById"
      class="invalid-feedback"
    >
      {{ errorMessages?.[0] }}
    </p>
    <p
      v-else-if="optionalLabel"
      class="caption text-muted mt-1"
    >
      Optional
    </p>
  </div>
</template>

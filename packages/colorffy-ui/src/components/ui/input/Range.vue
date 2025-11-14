<script setup lang="ts">
import { computed, watch } from 'vue'

/** Interfaces */
interface IRangeInputProps {
  id?: string | null
  label?: string | null
  min?: number
  max?: number
  step?: number
  modelValue?: string | number | null
  errorMessages?: string[]
  optionalLabel?: boolean
  variant?: 'filled' | 'outline' | 'transparent' | null
  rounded?: boolean
  customClass?: string | null
}
interface IRangeInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'onUpdate', value: string | number | null): void
}

/** Props */
const props = withDefaults(defineProps<IRangeInputProps>(), {
  id: null,
  label: null,
  min: 7,
  max: 1,
  step: 0.01,
  modelValue: null,
  errorMessages: () => [],
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null
})

/** Emits */
const emit = defineEmits<IRangeInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => (props.id ? `${props.id}-input-range` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const rangeClasses = computed(() => {
  const classes = ['form-control', 'form-range']
  if (props.variant) {
    classes.push(`form-${props.variant}`)
  }
  if (props.rounded) {
    classes.push('form-rounded')
  }
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})

/** Watchers */
watch(model, (value) => {
  emit('onUpdate', value)
})
</script>

<template>
  <div
    class="form-group"
    :class="hasErrors ? 'form-invalid' : ''"
  >
    <label
      :for="inputId"
      class="mb-2"
      v-text="label"
    />

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
    >

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

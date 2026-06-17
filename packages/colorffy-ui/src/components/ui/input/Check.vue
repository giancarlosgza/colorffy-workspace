<script setup lang="ts">
import type { ICheckProps } from '@/types/input'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<ICheckProps>(), {
  id: null,
  type: 'checkbox',
  modelValue: false,
  errorMessages: () => [],
  customClass: null,
  size: null,
  hideLabel: false,
  variant: null,
  required: false
})

/** Model */
// Default to false so a checkbox starts as a real boolean, not null.
const model = defineModel<string | boolean | null>('modelValue', { default: false })

/** Computed */
const hasError = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => props.id ?? undefined)
const describedById = computed(() => (hasError.value && props.id ? `${props.id}-error-0` : undefined))

const groupClasses = computed(() => [
  'form-check',
  { 'form-invalid': hasError.value },
  props.size ? `form-${props.size}` : '',
  props.variant ? `form-check-${props.variant}` : ''
])
const labelClasses = computed(() => [
  'form-check-label',
  { 'visually-hidden': props.hideLabel }
])
const checkClasses = computed(() => {
  const classes = ['form-check-input']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Input -->
    <input
      :id="inputId"
      v-model="model"
      :class="checkClasses"
      :type="type"
      :aria-invalid="hasError || undefined"
      :aria-describedby="describedById"
    >
    <div>
      <label
        :for="inputId"
        :class="labelClasses"
      >
        {{ label }}{{ required ? ' *' : '' }}
      </label>

      <!-- Feedback -->
      <p
        v-if="hasError"
        :id="describedById"
        class="invalid-feedback"
      >
        {{ errorMessages?.[0] }}
      </p>
    </div>
  </div>
</template>

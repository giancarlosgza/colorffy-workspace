<script setup lang="ts">
import type { IColorPickerEmits, IColorPickerProps } from '@/types/input'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IColorPickerProps>(), {
  id: null,
  label: null,
  maxlength: 7,
  modelValue: null,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false
})

/** Emits */
const emit = defineEmits<IColorPickerEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputIdColor = computed(() => props.id ? `${props.id}-input-color` : undefined)
const inputIdText = computed(() => props.id ? `${props.id}-input-text` : undefined)
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const colorGroupClasses = computed(() => [
  'form-color-group',
  props.size ? `form-${props.size}` : ''
])
const colorClasses = computed(() => {
  const classes = ['form-color']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
const textClasses = computed(() => {
  const classes = ['form-control']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Label -->
    <label
      :for="inputIdColor"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>
    <!-- Accessible name for the hex text input (hidden visually, not from AT) -->
    <label
      :for="inputIdText"
      class="visually-hidden"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>

    <!-- Input -->
    <div :class="colorGroupClasses">
      <!-- Picker -->
      <input
        :id="inputIdColor"
        v-model="model"
        type="color"
        :class="colorClasses"
        :disabled="disabled"
        :required="required"
        :aria-invalid="hasErrors || undefined"
        :aria-describedby="describedById"
        @change="emit('onUpdate', model)"
      >
      <!-- Text -->
      <input
        :id="inputIdText"
        v-model.lazy="model"
        type="text"
        :class="textClasses"
        :maxlength="maxlength"
        :disabled="disabled"
        :aria-invalid="hasErrors || undefined"
        :aria-describedby="describedById"
        @change="emit('onUpdate', model)"
      >
    </div>

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

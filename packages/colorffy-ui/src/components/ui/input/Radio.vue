<script setup lang="ts">
import type { IRadioInputEmits, IRadioInputProps } from '@/types/input'
import { computed, useId, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<IRadioInputProps>(), {
  id: null,
  label: null,
  options: () => [],
  optionLabel: null,
  optionValue: null,
  modelValue: null,
  errorMessages: () => [],
  customClass: null,
  disabled: false,
  required: false,
  size: null,
  hideLabel: false,
  inline: true
})

/** Emits */
const emit = defineEmits<IRadioInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const labelId = useId()
const baseId = computed(() => props.id ?? undefined)
const groupName = computed(() => (baseId.value ? `radio-${baseId.value}` : undefined))
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const optionsWrapperClasses = computed(() => [
  props.inline ? 'd-flex flex-wrap gap-5' : 'd-flex flex-column gap-2'
])
const checkClasses = computed(() => [
  'form-check',
  'mb-0',
  props.size ? `form-${props.size}` : ''
])
const checkLabelClasses = computed(() => [
  'form-check-label'
])
const radioInputClasses = computed(() => {
  const classes = ['form-check-input']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})

/** Methods */
// Reads a label/value field off an option, containing the unsafe cast here.
function getField(option: unknown, key: string): unknown {
  return (option as Record<string, unknown>)[key]
}

/** Watchers */
watch(model, (value) => {
  emit('onUpdate', value)
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Main Group Label -->
    <label
      v-if="label"
      :id="labelId"
      :class="labelClasses"
    >
      {{ label }}{{ props.required ? ' *' : '' }}
    </label>

    <!-- Radio Options -->
    <div
      :class="optionsWrapperClasses"
      role="radiogroup"
      :aria-labelledby="label ? labelId : undefined"
      :aria-describedby="describedById"
    >
      <div
        v-for="(option, index) in options"
        :key="`radio-opt-${index}`"
        :class="checkClasses"
      >
        <!-- Input -->
        <input
          :id="baseId ? `${baseId}-${index}` : undefined"
          v-model="model"
          :class="radioInputClasses"
          :name="groupName"
          :value="optionValue ? getField(option, optionValue) : option"
          type="radio"
          :disabled="disabled"
          :required="required"
        >
        <label
          :for="baseId ? `${baseId}-${index}` : undefined"
          :class="checkLabelClasses"
        >
          {{ optionLabel ? getField(option, optionLabel) : option }}
        </label>
      </div>
    </div>

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="describedById"
      class="invalid-feedback"
    >
      {{ errorMessages?.[0] }}
    </p>
  </div>
</template>

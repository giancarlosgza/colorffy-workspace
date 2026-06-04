<script setup lang="ts">
import type { ISelectInputEmits, ISelectInputProps } from '@/types/input'
import { computed, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<ISelectInputProps>(), {
  id: null,
  label: null,
  modelValue: null,
  errorMessages: () => [],
  options: () => [],
  optionLabel: null,
  optionValue: null,
  placeholder: 'Clic para seleccionar',
  disabled: false,
  required: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false
})

/** Emits */
const emit = defineEmits<ISelectInputEmits>()

/** Model */
const model = defineModel<string | number | Record<string, unknown> | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const selectId = computed(() => (props.id ? `${props.id}-select` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const placeholderText = computed(() => props.placeholder ?? undefined)

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const selectClasses = computed(() => {
  const classes = ['form-control', 'form-select']
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

/** Watchers */
watch(model, (value) => {
  emit('onUpdate', value)
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Input -->
    <label
      :for="selectId"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>
    <select
      :id="selectId"
      v-model="model"
      :class="selectClasses"
      :placeholder="placeholderText"
      :disabled="disabled"
      :required="required"
      :aria-invalid="hasErrors || undefined"
      :aria-describedby="describedById"
    >
      <option
        :value="null"
        disabled
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, indexOption) in options"
        :key="`option-${indexOption}`"
        :value="optionValue ? option[optionValue] : option"
      >
        {{ optionLabel ? option[optionLabel] : option }}
      </option>
    </select>

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

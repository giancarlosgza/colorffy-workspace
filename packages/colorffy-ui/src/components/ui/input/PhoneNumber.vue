<script setup lang="ts">
import type { IPhoneNumberInputEmits, IPhoneNumberInputProps } from '@/types/input'
import { computed } from 'vue'
import { useTextUtils } from '@/composables/useTextUtils'

/** Props */
const props = withDefaults(defineProps<IPhoneNumberInputProps>(), {
  id: null,
  label: null,
  modelValue: '',
  errorMessages: () => [],
  maxlength: 50,
  placeholder: null,
  disabled: false,
  required: false,
  autofocus: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false
})

/** Emits */
const emit = defineEmits<IPhoneNumberInputEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: '' })

/** Composables */
const { formatPhoneNumber } = useTextUtils()

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const baseId = computed(() => props.id ?? undefined)
const inputId = computed(() => (baseId.value ? `${baseId.value}-input-text` : undefined))
const describedById = computed(() => (hasErrors.value && baseId.value ? `${baseId.value}-error-0` : undefined))
const value = computed({
  get: () => {
    const currentValue = model.value ?? ''

    if (!currentValue.trim()) {
      return ''
    }

    return formatPhoneNumber(currentValue)
  },
  set: (value: string | null) => {
    model.value = value ?? ''
    emit('onUpdate', model.value)
  }
})
const placeholderText = computed(() => props.placeholder ?? undefined)

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const inputClasses = computed(() => {
  const classes = ['form-control']
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
      v-model="value"
      :class="inputClasses"
      :maxlength="maxlength"
      :placeholder="placeholderText"
      :disabled="disabled"
      :required="required"
      :autofocus="autofocus"
      :aria-invalid="hasErrors || undefined"
      :aria-describedby="describedById"
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

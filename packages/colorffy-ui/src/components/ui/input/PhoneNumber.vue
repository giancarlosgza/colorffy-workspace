<script setup lang="ts">
import { computed } from 'vue'
import { useTextUtils } from '@/composables/useTextUtils'

/** Interfaces */
interface IPhoneNumberInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | null
  errorMessages?: string[]
  maxlength?: number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  variant?: 'filled' | 'outline' | 'transparent' | null
  rounded?: boolean
}
interface IPhoneNumberInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'onUpdate', value: string | null): void
}

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
  rounded: false
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
const inputClasses = computed(() => {
  const classes = ['form-control']
  if (props.variant) {
    classes.push(`form-${props.variant}`)
  }
  if (props.rounded) {
    classes.push('form-rounded')
  }
  return classes
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

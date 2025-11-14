<script setup lang="ts">
import { computed, watch } from 'vue'

/** Interfaces */
interface ITextareaInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | null
  errorMessages?: string[]
  maxlength?: string | number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  rows?: number
  cols?: number
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  variant?: 'filled' | 'outline' | 'transparent' | null
  rounded?: boolean
}
interface ITextareaInputEmits {
  (e: 'update:modelValue', value: string | null): void
  (e: 'onUpdate', value: string | null): void
}

/** Props */
const props = withDefaults(defineProps<ITextareaInputProps>(), {
  id: null,
  label: null,
  modelValue: null,
  errorMessages: () => [],
  maxlength: 500,
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  autofocus: false,
  optionalLabel: false,
  rows: 4,
  cols: undefined,
  resize: 'vertical',
  variant: null,
  rounded: false
})

/** Emits */
const emit = defineEmits<ITextareaInputEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => (props.id ? `${props.id}-input-textarea` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const placeholderText = computed(() => props.placeholder ?? undefined)
const textareaStyle = computed(() => ({
  resize: props.resize
}))
const textareaClasses = computed(() => {
  const classes = ['form-control']
  if (props.variant) {
    classes.push(`form-${props.variant}`)
  }
  if (props.rounded) {
    classes.push('form-rounded')
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

    <textarea
      :id="inputId"
      v-model="model"
      :class="textareaClasses"
      :maxlength="maxlength"
      :placeholder="placeholderText"
      :rows="rows"
      :cols="cols"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
      :autofocus="autofocus"
      :style="textareaStyle"
      :aria-invalid="hasErrors || undefined"
      :aria-describedby="describedById"
    />

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

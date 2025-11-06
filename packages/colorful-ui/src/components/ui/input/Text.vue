<script setup lang="ts">
import { computed, watch } from 'vue'

/** Interfaces */
interface ITextInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | number | null
  errorMessages?: string[]
  type?: string
  maxlength?: string | number
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  readonly?: boolean
  autofocus?: boolean
  optionalLabel?: boolean
  min?: number | null
  max?: number | null
}
interface ITextInputEmits {
  (e: 'update:modelValue', value: string | number | null): void
  (e: 'onUpdate', value: string | number | null): void
}

/** Props */
const props = withDefaults(defineProps<ITextInputProps>(), {
  id: null,
  label: null,
  modelValue: null,
  errorMessages: () => [],
  type: 'text',
  maxlength: 50,
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  autofocus: false,
  optionalLabel: false,
  min: null,
  max: null
})

/** Emits */
const emit = defineEmits<ITextInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => (props.id ? `${props.id}-input-text` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const placeholderText = computed(() => props.placeholder ?? undefined)
const minValue = computed(() => (props.type === 'number' ? props.min ?? undefined : undefined))
const maxValue = computed(() => (props.type === 'number' ? props.max ?? undefined : undefined))

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
      class="form-control"
      :type="type"
      :maxlength="maxlength"
      :placeholder="placeholderText"
      :min="minValue"
      :max="maxValue"
      :disabled="disabled"
      :required="required"
      :readonly="readonly"
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

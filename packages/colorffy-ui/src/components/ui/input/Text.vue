<script setup lang="ts">
import type { ITextInputEmits, ITextInputProps } from '@/types/input'
import { computed, useSlots, watch } from 'vue'

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
  max: null,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false
})

/** Emits */
const emit = defineEmits<ITextInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

// For type="number", coerce the string input to a real number (or null).
const inputModel = computed<string | number | null>({
  get: () => model.value,
  set: (val) => {
    if (props.type !== 'number') {
      model.value = val
      return
    }
    if (val === '' || val === null) {
      model.value = null
      return
    }
    const num = Number(val)
    model.value = Number.isNaN(num) ? null : num
  }
})

/** Composable */
const slots = useSlots()

/** Computed */
const hasPrefix = computed(() => !!slots.prefix)
const hasSuffix = computed(() => !!slots.suffix)
const hasGroup = computed(() => hasPrefix.value || hasSuffix.value)
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => (props.id ? `${props.id}-input-text` : undefined))
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const placeholderText = computed(() => props.placeholder ?? undefined)

const minValue = computed(() => (props.type === 'number' ? props.min ?? undefined : undefined))
const maxValue = computed(() => (props.type === 'number' ? props.max ?? undefined : undefined))

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

// Shared input bindings so both branches (with/without group) stay in sync
const inputAttrs = computed(() => ({
  'id': inputId.value,
  'class': inputClasses.value,
  'type': props.type,
  'maxlength': props.maxlength,
  'placeholder': placeholderText.value,
  'min': minValue.value,
  'max': maxValue.value,
  'disabled': props.disabled,
  'required': props.required,
  'readonly': props.readonly,
  'autofocus': props.autofocus,
  'aria-invalid': hasErrors.value || undefined,
  'aria-describedby': describedById.value
}))

/** Watchers */
watch(model, (value) => {
  emit('onUpdate', value)
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
    <div
      v-if="hasGroup"
      class="input-group"
    >
      <span
        v-if="hasPrefix"
        class="input-group-prefix"
      >
        <slot name="prefix" />
      </span>
      <input
        v-model="inputModel"
        v-bind="inputAttrs"
      >
      <span
        v-if="hasSuffix"
        class="input-group-suffix"
      >
        <slot name="suffix" />
      </span>
    </div>
    <input
      v-else
      v-model="inputModel"
      v-bind="inputAttrs"
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

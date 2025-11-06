<script setup lang="ts">
import { computed, watch } from 'vue'

/** Interfaces */
interface ISelectInputProps {
  id?: string | null
  label?: string | null
  modelValue?: string | number | Record<string, unknown> | null
  errorMessages?: string[]
  options?: any[]
  optionLabel?: string | null
  optionValue?: string | null
  placeholder?: string | null
  disabled?: boolean
  required?: boolean
  optionalLabel?: boolean
}
interface ISelectInputEmits {
  (e: 'update:modelValue', value: string | number | Record<string, unknown> | null): void
  (e: 'onUpdate', value: string | number | Record<string, unknown> | null): void
}

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
  optionalLabel: false
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
      :for="selectId"
      class="mb-2"
      v-text="label"
    />

    <select
      :id="selectId"
      v-model="model"
      class="form-control form-select"
      :placeholder="placeholderText"
      :disabled="disabled"
      :required="required"
      :aria-invalid="hasErrors || undefined"
      :aria-describedby="describedById"
    >
      <option :value="null" disabled>
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

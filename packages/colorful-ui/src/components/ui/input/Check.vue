<script setup lang="ts">
import { computed } from 'vue'

/** Interfaces */
interface ICheckProps {
  id?: string | null
  label: string
  type?: string
  modelValue?: string | boolean | null
  errorMessages?: string[]
}

/** Props */
const props = withDefaults(defineProps<ICheckProps>(), {
  id: null,
  type: 'checkbox',
  modelValue: null,
  errorMessages: () => []
})

/** Model */
const model = defineModel<string | boolean | null>('modelValue', { default: null })

/** Computed */
const hasError = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => props.id ?? undefined)
const describedById = computed(() => (hasError.value && props.id ? `${props.id}-error-0` : undefined))
</script>

<template>
  <div
    class="form-check"
    :class="hasError ? 'form-invalid' : ''"
  >
    <input
      :id="inputId"
      v-model="model"
      class="form-check-input"
      :type="type"
      :aria-invalid="hasError || undefined"
      :aria-describedby="describedById"
    >
    <div>
      <label
        :for="inputId"
        class="form-check-label"
        v-text="label"
      />

      <!-- Feedback labels -->
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

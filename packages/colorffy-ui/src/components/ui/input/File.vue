<script setup lang="ts">
import type { IFileInputEmits, IFileInputProps } from '@/types/input'
import { computed, toRefs } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IFileInputProps>(), {
  id: null,
  label: null,
  inputLabel: null,
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
const emit = defineEmits<IFileInputEmits>()

/** Model */
const model = defineModel<File | null>('modelValue', { default: null })

/** Labels */
const l10nCommon = useLabels('common')

/** Data */
const { label, inputLabel } = toRefs(props)
const inputId = computed(() => props.id ?? undefined)

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const groupClasses = computed(() => [
  'input-file-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  { 'visually-hidden': props.hideLabel }
])
const dropboxClasses = computed(() => [
  'input-file-dropbox',
  {
    'valid-file': !!model.value,
    'dropbox-lg': props.size === 'lg'
  }
])
const fileClasses = computed(() => {
  const classes = ['form-control', 'input-file']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})

/** Methods */
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0] ?? null

  model.value = file
  emit('update', file)
}
</script>

<template>
  <div>
    <div :class="groupClasses">
      <!-- Label -->
      <label
        :for="inputId"
        :class="labelClasses"
      >
        {{ label }}{{ props.required ? ' *' : '' }}
      </label>
      <div :class="dropboxClasses">
        <!-- Input -->
        <input
          :id="inputId"
          :class="fileClasses"
          type="file"
          :disabled="disabled"
          :required="required"
          :aria-invalid="hasErrors || undefined"
          :aria-describedby="describedById"
          @input="handleInput"
        >

        <!-- File info -->
        <div
          v-if="model"
          class="input-file-text"
        >
          <UiIconMaterial icon-code="&#xe876;" />
          <p v-text="model ? model.name : ''" />
        </div>
        <div
          v-else
          class="input-file-text"
        >
          <UiIconMaterial icon-code="&#xe2c3;" />
          <p v-text="inputLabel" />
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
      <p
        v-else-if="optionalLabel"
        class="caption text-muted mt-1"
      >
        {{ l10nCommon.optional }}
      </p>
    </div>
  </div>
</template>

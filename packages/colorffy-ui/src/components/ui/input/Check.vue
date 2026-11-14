<script setup lang="ts">
import type { ICheckEmits, ICheckProps } from '@/types/input'
import { computed, getCurrentInstance, ref, watch } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<ICheckProps>(), {
  id: null,
  type: 'checkbox',
  modelValue: false,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  optionalLabel: false,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false,
  variant: null
})

/** Emits */
const emit = defineEmits<ICheckEmits>()

/** Labels */
const l10nCommon = useLabels('common')

/** Data */
// A local copy keeps the box usable without v-model; a bound parent stays the source of truth, as with defineModel
const model = ref<string | boolean | null>(props.modelValue)
const instance = getCurrentInstance()
const inputId = computed(() => props.id ?? undefined)

/** Computed */
const hasError = computed(() => props.errorMessages?.length > 0)
const describedById = computed(() => (hasError.value && props.id ? `${props.id}-error-0` : undefined))
const groupClasses = computed(() => [
  'form-check',
  { 'form-invalid': hasError.value },
  props.size ? `form-${props.size}` : '',
  props.variant ? `form-check-${props.variant}` : ''
])
const labelClasses = computed(() => [
  'form-check-label',
  { 'visually-hidden': props.hideLabel }
])
const checkClasses = computed(() => {
  const classes = ['form-check-input']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
const checked = computed({
  get: () => model.value,
  set: (value: string | boolean | null) => {
    if (!isBound())
      model.value = value
    emit('update:modelValue', Boolean(value))
  }
})

/** Methods */
function isBound(): boolean {
  const vnodeProps = instance?.vnode.props
  if (!vnodeProps)
    return false
  const hasValue = 'modelValue' in vnodeProps || 'model-value' in vnodeProps
  const hasListener = 'onUpdate:modelValue' in vnodeProps || 'onUpdate:model-value' in vnodeProps
  return hasValue && hasListener
}

/** Watchers */
watch(() => props.modelValue, (value) => {
  model.value = value
})
watch(model, (value) => {
  emit('update', value)
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Input -->
    <input
      :id="inputId"
      v-model="checked"
      :class="checkClasses"
      :type="type"
      :disabled="disabled"
      :required="required"
      :aria-invalid="hasError || undefined"
      :aria-describedby="describedById"
    >
    <div>
      <label
        :for="inputId"
        :class="labelClasses"
      >
        {{ label }}{{ required ? ' *' : '' }}
      </label>

      <!-- Feedback -->
      <p
        v-if="hasError"
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

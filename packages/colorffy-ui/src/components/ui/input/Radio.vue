<script setup lang="ts">
import type { IRadioInputEmits, IRadioInputProps } from '@/types/input'
import { computed, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<IRadioInputProps>(), {
  id: null,
  label: null,
  options: () => [],
  optionLabel: null,
  optionValue: null,
  modelValue: null,
  customClass: null,
  required: false,
  size: null,
  hideLabel: false,
  inline: true
})

/** Emits */
const emit = defineEmits<IRadioInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const baseId = computed(() => props.id ?? undefined)
const groupName = computed(() => (baseId.value ? `radio-${baseId.value}` : undefined))

const groupClasses = computed(() => [
  'form-group'
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const optionsWrapperClasses = computed(() => [
  props.inline ? 'd-flex flex-wrap gap-5' : 'd-flex flex-column gap-2'
])
const checkClasses = computed(() => [
  'form-check',
  props.size ? `form-${props.size}` : ''
])
const checkLabelClasses = computed(() => [
  'form-check-label'
])
const radioInputClasses = computed(() => {
  const classes = ['form-check-input']
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
    <!-- Main Group Label -->
    <label
      v-if="label"
      :class="labelClasses"
    >
      {{ label }}{{ props.required ? ' *' : '' }}
    </label>

    <!-- Radio Options -->
    <div :class="optionsWrapperClasses">
      <div
        v-for="(option, index) in options"
        :key="`radio-opt-${index}`"
        :class="checkClasses"
      >
        <!-- Input -->
        <input
          :id="baseId ? `${baseId}-${index}` : undefined"
          v-model="model"
          :class="radioInputClasses"
          :name="groupName"
          :value="optionValue ? option[optionValue] : option"
          type="radio"
          :required="required"
        >
        <label
          :for="baseId ? `${baseId}-${index}` : undefined"
          :class="checkLabelClasses"
        >
          {{ optionLabel ? option[optionLabel] : option }}
        </label>
      </div>
    </div>
  </div>
</template>

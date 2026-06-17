<script setup lang="ts">
import type { IColorPickerEmits, IColorPickerProps } from '@/types/input'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IColorPickerProps>(), {
  id: null,
  label: null,
  maxLength: 7,
  modelValue: null,
  customClass: null,
  size: null,
  hideLabel: false,
  required: false
})

/** Emits */
const emit = defineEmits<IColorPickerEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Computed */
const inputIdColor = computed(() => props.id ? `${props.id}-input-color` : undefined)
const inputIdText = computed(() => props.id ? `${props.id}-input-text` : undefined)

const groupClasses = computed(() => ['form-group'])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const colorGroupClasses = computed(() => [
  'form-color-group',
  props.size ? `form-${props.size}` : ''
])
const colorClasses = computed(() => {
  const classes = ['form-color']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
const textClasses = computed(() => {
  const classes = ['form-control']
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Label -->
    <label
      :for="inputIdColor"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>
    <!-- Accessible name for the hex text input (hidden visually, not from AT) -->
    <label
      :for="inputIdText"
      class="visually-hidden"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>

    <!-- Input -->
    <div :class="colorGroupClasses">
      <!-- Picker -->
      <input
        :id="inputIdColor"
        v-model="model"
        type="color"
        :class="colorClasses"
        @change="emit('onUpdate', model)"
      >
      <!-- Text -->
      <input
        :id="inputIdText"
        v-model.lazy="model"
        type="text"
        :class="textClasses"
        :maxlength="maxLength"
        @change="emit('onUpdate', model)"
      >
    </div>
  </div>
</template>

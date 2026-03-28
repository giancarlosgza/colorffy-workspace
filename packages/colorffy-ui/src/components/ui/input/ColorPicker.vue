<script setup lang="ts">
import type { IColorPickerEmits, IColorPickerProps } from '@/types/input'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IColorPickerProps>(), {
  id: null,
  label: null,
  maxLength: 7,
  modelValue: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<IColorPickerEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Computed */
const inputIdColor = computed(() => props.id ? `${props.id}-input-text` : undefined)
const inputIdText = computed(() => props.id ? `${props.id}-input-color` : undefined)
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
  <div class="form-group">
    <!-- Label -->
    <label
      :for="inputIdColor"
      class="mb-2"
      v-text="label"
    />
    <label
      :for="inputIdText"
      class="d-none mb-2"
      aria-hidden="true"
      v-text="label"
    />

    <!-- Inputs -->
    <div class="form-color-group">
      <!-- Color picker -->
      <input
        :id="inputIdColor"
        v-model="model"
        type="color"
        :class="colorClasses"
        @change="emit('onUpdate')"
      >
      <!-- Color text -->
      <input
        :id="inputIdText"
        v-model.lazy="model"
        type="text"
        :class="textClasses"
        @change="emit('onUpdate')"
      >
    </div>
  </div>
</template>

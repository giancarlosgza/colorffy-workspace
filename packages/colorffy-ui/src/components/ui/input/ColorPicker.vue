<script setup lang="ts">
import { computed } from 'vue'

/** Interfaces */
interface IColorPickerProps {
  id?: string | null
  label?: string | null
  maxLength?: number
  modelValue?: string | null
}

/** Props */
const props = withDefaults(defineProps<IColorPickerProps>(), {
  id: null,
  label: null,
  maxLength: 7,
  modelValue: null
})

/** Emits */
const emit = defineEmits(['onUpdate'])

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Computed */
const inputIdColor = computed(() => props.id ? `${props.id}-input-text` : undefined)
const inputIdText = computed(() => props.id ? `${props.id}-input-color` : undefined)
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
        class="form-color"
        @change="emit('onUpdate')"
      >
      <!-- Color text -->
      <input
        :id="inputIdText"
        v-model.lazy="model"
        type="text"
        class="form-control"
        @change="emit('onUpdate')"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IFileInputEmits, IFileInputProps } from '@/types/input'
import { computed, toRefs } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IFileInputProps>(), {
  id: null,
  label: null,
  inputLabel: null,
  large: false,
  modelValue: null,
  customClass: null,
  required: false
})

/** Emits */
const emit = defineEmits<IFileInputEmits>()

/** Model */
const model = defineModel<File | null>('modelValue', { default: null })

/** Refs */
const { label, inputLabel, large } = toRefs(props)
const inputId = computed(() => props.id ?? undefined)

const groupClasses = computed(() => ['input-file-group'])
const labelClasses = computed(() => [])
const dropboxClasses = computed(() => [
  'input-file-dropbox',
  {
    'valid-file': !!model.value,
    'dropbox-lg': large.value
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
  emit('onUpdate', file)
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
          @input="handleInput"
        >

        <!-- File Info -->
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
    </div>
  </div>
</template>

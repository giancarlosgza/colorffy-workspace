<script setup lang="ts">
import { computed, toRefs } from 'vue'

/** Interfaces */
interface IFileInputProps {
  id?: string | null
  label?: string | null
  inputLabel?: string | null
  large?: boolean
  modelValue?: File | null
  customClass?: string | null
}
interface IFileInputEmits {
  (e: 'update:modelValue', value: File | null): void
  (e: 'onUpdate', value: File | null): void
}

/** Props */
const props = withDefaults(defineProps<IFileInputProps>(), {
  id: null,
  label: null,
  inputLabel: null,
  large: false,
  modelValue: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<IFileInputEmits>()

/** Model */
const model = defineModel<File | null>('modelValue', { default: null })

/** Refs */
const { label, inputLabel, large } = toRefs(props)
const inputId = computed(() => props.id ?? undefined)
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
    <div class="input-file-group">
      <label :for="inputId" v-text="label" />
      <div
        class="input-file-dropbox"
        :class="[model ? 'valid-file' : '', large ? 'dropbox-xl' : '']"
      >
        <input
          :id="inputId"
          :class="fileClasses"
          type="file"
          @input="handleInput"
        >

        <div v-if="model" class="input-file-text">
          <UiIconMaterial icon-code="&#xe876;" />
          <p v-text="model ? model.name : ''" />
        </div>
        <div v-else class="input-file-text">
          <UiIconMaterial icon-code="&#xe2c3;" />
          <p v-text="inputLabel" />
        </div>
      </div>
    </div>
  </div>
</template>

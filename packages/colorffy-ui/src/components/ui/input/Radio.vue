<script setup lang="ts">
import type { IRadioInputEmits, IRadioInputProps } from '@/types/input'
import { computed, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<IRadioInputProps>(), {
  id: null,
  type: 'radio',
  modelValue: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<IRadioInputEmits>()

/** Model */
const model = defineModel<string | number | null>('modelValue', { default: null })

/** Computed */
const baseId = computed(() => props.id ?? undefined)
const firstOptionId = computed(() => (baseId.value ? `${baseId.value}-1` : undefined))
const secondOptionId = computed(() => (baseId.value ? `${baseId.value}-2` : undefined))
const groupName = computed(() => (baseId.value ? `radio-${baseId.value}` : undefined))
const radioClasses = computed(() => {
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
  <div class="d-flex flex-wrap gap-5">
    <div class="form-check">
      <input
        :id="firstOptionId"
        v-model="model"
        :class="radioClasses"
        :name="groupName"
        :value="6.5"
        :type="type"
      >
      <label
        :for="firstOptionId"
        class="form-check-label"
        v-text="labelDefaultOption"
      />
    </div>
    <div class="form-check">
      <input
        :id="secondOptionId"
        v-model="model"
        :class="radioClasses"
        :name="groupName"
        :value="10"
        :type="type"
      >
      <label
        :for="secondOptionId"
        class="form-check-label"
        v-text="labelOption"
      />
    </div>
  </div>
</template>

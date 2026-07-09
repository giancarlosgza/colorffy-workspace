<script setup lang="ts">
import type { IChipGroupEmits, IChipGroupProps, IChipOption } from '@/types/chip'
import { computed } from 'vue'
import UiChip from './Chip.vue'

/** Props */
const props = withDefaults(defineProps<IChipGroupProps>(), {
  modelValue: null,
  multiple: false,
  ariaLabel: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<IChipGroupEmits>()

/** Computed */
const selectedIds = computed<string[]>(() => {
  if (props.modelValue == null)
    return []

  return Array.isArray(props.modelValue) ? props.modelValue : [props.modelValue]
})

/** Methods */
function isSelected(option: IChipOption): boolean {
  return selectedIds.value.includes(option.id)
}
function toggle(option: IChipOption) {
  if (option.disabled)
    return

  if (props.multiple) {
    const next = isSelected(option)
      ? selectedIds.value.filter(id => id !== option.id)
      : [...selectedIds.value, option.id]
    emit('update:modelValue', next)
    return
  }

  // Single mode: clicking the selected chip deselects it
  emit('update:modelValue', isSelected(option) ? null : option.id)
}
</script>

<template>
  <div
    class="chip-group"
    :class="customClass"
    role="group"
    :aria-label="ariaLabel ?? undefined"
  >
    <UiChip
      v-for="option in options"
      :key="option.id"
      :id="option.id"
      :text="option.text"
      :icon-code="option.iconCode"
      :selected="isSelected(option)"
      :disabled="option.disabled"
      :closable="option.closable"
      @click="toggle(option)"
      @remove="emit('remove', option.id)"
    />
  </div>
</template>

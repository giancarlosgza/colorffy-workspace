<script setup lang="ts">
import type { ISearchInputEmits, ISearchInputProps } from '@/types/input'
import { computed, ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiInputText from './Text.vue'

/** Props */
const props = withDefaults(defineProps<ISearchInputProps>(), {
  modelValue: null,
  autocomplete: 'off',
  clearLabel: 'Clear search'
})

/** Emits */
const emit = defineEmits<ISearchInputEmits>()

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })

/** Data */
const field = ref<InstanceType<typeof UiInputText> | null>(null)

/** Computed */
const textProps = computed(() => {
  const { modelValue: _modelValue, clearLabel: _clearLabel, ...rest } = props
  return rest
})
const hasValue = computed(() => !!model.value)

/** Methods */
function clear(): void {
  model.value = ''
  emit('clear')
  field.value?.$el.querySelector('input')?.focus()
}
function onKeydown(event: KeyboardEvent): void {
  if (event.key === 'Enter')
    emit('search', model.value ?? '')

  // First Esc empties the field; a dialog around it only closes on the next one
  if (event.key === 'Escape' && hasValue.value && !props.disabled && !props.readonly) {
    event.preventDefault()
    event.stopPropagation()
    clear()
  }
}
</script>

<template>
  <UiInputText
    ref="field"
    v-bind="textProps"
    v-model="model"
    type="search"
    adornments="inline"
    @update="emit('update', $event as string | null)"
    @keydown="onKeydown"
  >
    <template #prefix>
      <UiIconMaterial icon-code="&#xe8b6;" />
    </template>
    <template v-if="hasValue" #suffix>
      <UiButton
        variant="text"
        custom-class="text-neutral"
        size="sm"
        icon
        :aria-label="clearLabel"
        :aria-controls="id ?? undefined"
        :disabled="disabled || readonly"
        @click="clear"
      >
        <template #icon>
          <UiIconMaterial icon-code="&#xe5cd;" />
        </template>
      </UiButton>
    </template>
  </UiInputText>
</template>

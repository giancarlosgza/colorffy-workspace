<script setup lang="ts">
import type { IChipEmits, IChipProps } from '@/types/chip'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IChipProps>(), {
  id: null,
  text: null,
  iconCode: null,
  selected: false,
  disabled: false,
  closable: false,
  textOnly: false,
  closeLabel: 'Remove',
  customClass: null
})

/** Emits */
const emit = defineEmits<IChipEmits>()

/** Computed */
const chipClasses = computed(() => {
  const classes: (string | string[] | Record<string, boolean>)[] = ['btn', 'btn-chip']

  if (props.selected)
    classes.push('chip-active')

  if (props.textOnly)
    classes.push('chip-text')

  if (props.closable)
    classes.push('chip-closable')

  if (props.closable && props.disabled)
    classes.push('disabled')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
const leadingIcon = computed(() => (props.selected ? '&#xe5ca;' : props.iconCode))
const ariaPressed = computed(() => (props.selected ? true : undefined))
</script>

<template>
  <div
    v-if="closable"
    :class="chipClasses"
    :aria-disabled="disabled || undefined"
  >
    <button
      type="button"
      class="chip-content"
      :disabled="disabled"
      :aria-pressed="ariaPressed"
      @click="emit('click', $event)"
    >
      <UiIconMaterial
        v-if="leadingIcon"
        :icon-code="leadingIcon"
      />
      <span v-if="text">{{ text }}</span>
      <slot />
    </button>
    <button
      type="button"
      class="chip-remove"
      :disabled="disabled"
      :aria-label="closeLabel"
      @click="emit('remove')"
    >
      <UiIconMaterial icon-code="&#xe5cd;" />
    </button>
  </div>

  <button
    v-else
    type="button"
    :class="chipClasses"
    :disabled="disabled"
    :aria-pressed="ariaPressed"
    @click="emit('click', $event)"
  >
    <UiIconMaterial
      v-if="leadingIcon"
      :icon-code="leadingIcon"
    />
    <span v-if="text">{{ text }}</span>
    <slot />
  </button>
</template>

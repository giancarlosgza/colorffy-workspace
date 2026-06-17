<script setup lang="ts">
import type { IButtonEmits, IButtonProps } from '@/types/button'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IButtonProps>(), {
  id: '',
  title: '',
  text: '',
  variant: 'filled',
  color: '',
  size: '',
  icon: false,
  iconVariant: undefined,
  iconTrailing: false,
  disabled: false,
  loading: false,
  customClass: '',
  rounded: false,
  fluid: false
})

/** Emits */
defineEmits<IButtonEmits>()

/** Computed */
const buttonClasses = computed(() => {
  const classes = []

  // Variants
  if (props.variant) {
    classes.push(`btn-${props.variant}`)
    if (props.variant === 'filled' && props.color)
      classes.push(`filled-${props.color}`)
    else if (props.variant === 'tonal' && props.color)
      classes.push(`tonal-${props.color}`)
  }

  // Sizes
  if (props.size) {
    let sizeClass

    if (props.size === 'sm') {
      sizeClass = 'btn-sm'
    } else if (props.size === 'lg') {
      sizeClass = 'btn-lg'
    } else if (props.size === 'md') {
      sizeClass = ''
    } else {
      sizeClass = props.size
    }

    if (sizeClass)
      classes.push(sizeClass)
  }

  if (props?.icon) {
    classes.push('btn-icon')
    if (props.iconVariant)
      classes.push(props.iconVariant)
  }

  if (props?.iconTrailing)
    classes.push('icon-trailing')

  if (props?.loading)
    classes.push('loading')

  if (props?.rounded)
    classes.push('btn-rounded')

  if (props?.fluid)
    classes.push('btn-block')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <button
    v-bind="{ title: title || undefined, id: id ? `button-${id}` : undefined }"
    class="btn"
    :class="buttonClasses"
    type="button"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    @click="$emit('onClick')"
  >
    <slot name="icon" />
    <span v-if="text">{{ text }}</span>

    <!-- Loading -->
    <span
      v-if="loading"
      class="icon-spinner-stack"
      aria-hidden="true"
    >
      <UiIconMaterial
        icon-code="&#xe9d0;"
        class="icon-spinner"
      />
    </span>
  </button>
</template>

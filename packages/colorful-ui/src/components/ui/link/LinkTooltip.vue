<script setup lang="ts">
import type { IButtonProps } from '@/types/button'
import type { RouteLocationRaw } from 'vue-router'
import { Tooltip as VTooltip } from 'floating-vue'
import { computed } from 'vue'

/** Interfaces */
interface ILinkTooltipProps extends Omit<IButtonProps, 'onClick'> {
  linkTo: RouteLocationRaw
  tooltipText?: string
}

/** Props */
const props = withDefaults(defineProps<ILinkTooltipProps>(), {
  id: '',
  title: '',
  text: '',
  tooltipText: '',
  variant: 'filled',
  color: '',
  size: '',
  icon: false,
  iconVariant: undefined,
  iconTrailing: false,
  disabled: false,
  loading: false,
  customClass: '',
  rounded: false
})

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
    let sizeClass = ''

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

  if (props?.icon)
    classes.push(`btn-icon ${props.iconVariant}`)

  if (props?.iconTrailing)
    classes.push('icon-trailing')

  if (props?.loading)
    classes.push('loading')

  if (props?.rounded)
    classes.push('btn-rounded')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <VTooltip
    :aria-id="id ? `${id}-tooltip` : undefined"
    class="d-inline-block"
  >
    <NuxtLink
      :id="id ? `link-${id}` : undefined"
      :title="title || undefined"
      :to="linkTo"
      class="btn"
      :class="buttonClasses"
      :disabled="disabled"
    >
      <slot name="icon" />
      {{ text }}
    </NuxtLink>

    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>
</template>

<script setup lang="ts">
import type { IButtonProps } from '@/types/button'
import { Tooltip as VTooltip } from 'floating-vue'
import { computed } from 'vue'

/** Interfaces */
interface ILinkTooltipProps extends Omit<IButtonProps, 'onClick'> {
  to?: string | object
  href?: string
  tooltipText?: string
  as?: string | object
}

/** Props */
const props = withDefaults(defineProps<ILinkTooltipProps>(), {
  id: '',
  title: '',
  text: '',
  to: '',
  href: '',
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
  rounded: false,
  as: 'a'
})

/** Computed */
const linkTarget = computed(() => {
  return props.to || props.href
})
const isExternalLink = computed(() => {
  const target = linkTarget.value
  return typeof target === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(target)
})
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
const linkProps = computed(() => {
  const baseProps = {
    id: props.id ? `link-${props.id}` : undefined,
    title: props.title || undefined,
    class: ['btn', ...buttonClasses.value],
    disabled: props.disabled
  }

  // For anchor tags or external links
  if (props.as === 'a' || isExternalLink.value) {
    const href = typeof linkTarget.value === 'string' ? linkTarget.value : ''
    return {
      ...baseProps,
      href: props.disabled ? undefined : href,
      ...(isExternalLink.value && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.) - supports string or object
  return {
    ...baseProps,
    to: linkTarget.value
  }
})
</script>

<template>
  <VTooltip
    :aria-id="id ? `${id}-tooltip` : undefined"
    class="d-inline-block"
  >
    <component
      :is="props.as"
      v-bind="linkProps"
    >
      <slot name="icon" />
      {{ text }}
    </component>

    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>
</template>

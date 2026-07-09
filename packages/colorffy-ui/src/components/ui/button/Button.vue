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
  fluid: false,
  type: 'button',
  to: '',
  href: '',
  as: 'a'
})

/** Emits */
const emit = defineEmits<IButtonEmits>()

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

// Link mode activates only when a navigation target is provided; `as` alone
// (with no `to`/`href`) never switches the native `<button>` markup.
const isLink = computed(() => Boolean(props.to || props.href))
const linkTarget = computed(() => props.to || props.href)
const isExternalLink = computed(() => {
  const target = linkTarget.value
  return typeof target === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(target)
})
// String targets render a plain anchor unless `as` overrides it to something
// else; object targets (router locations) always defer to `as`.
const usesAnchor = computed(() => typeof linkTarget.value === 'string' && (props.as === 'a' || isExternalLink.value))
const linkTag = computed(() => (usesAnchor.value ? 'a' : props.as))
const linkClasses = computed(() => {
  const classes = [...buttonClasses.value]
  if (props.disabled)
    classes.push('disabled')
  return classes
})
const linkAttrs = computed(() => {
  const common = {
    'aria-disabled': props.disabled || undefined,
    'aria-busy': props.loading || undefined
  }

  if (usesAnchor.value) {
    const target = linkTarget.value as string
    return {
      ...common,
      href: props.disabled ? undefined : target,
      ...(isExternalLink.value && !props.disabled && { target: '_blank', rel: 'noopener noreferrer' })
    }
  }

  // Router-style component (RouterLink, NuxtLink, etc.) — supports string or object
  return {
    ...common,
    to: linkTarget.value
  }
})

/** Methods */
// Disabled links have no native `disabled` attribute, so the click has to be
// intercepted manually (blocking navigation and any parent `@click` listener
// via `v-bind="$attrs"`) to match a real disabled `<button>`, which never
// dispatches a click at all. Loading blocks activation the same way.
function onLinkClick(event: MouseEvent) {
  if (props.disabled || props.loading) {
    event.preventDefault()
    event.stopPropagation()
    return
  }
  emit('onClick')
}
</script>

<template>
  <button
    v-if="!isLink"
    v-bind="{ title: title || undefined, id: id ? `button-${id}` : undefined }"
    class="btn"
    :class="buttonClasses"
    :type="type"
    :disabled="disabled || loading"
    :aria-busy="loading || undefined"
    @click="emit('onClick')"
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

  <!-- Link mode: same visual markup, rendered as `as` (default 'a') -->
  <component
    :is="linkTag"
    v-else
    v-bind="{ title: title || undefined, id: id ? `button-${id}` : undefined, ...linkAttrs }"
    class="btn"
    :class="linkClasses"
    @click="onLinkClick"
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
  </component>
</template>

<script setup lang="ts">
import type { ICardProps } from '@/types/card'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<ICardProps>(), {
  id: null,
  title: '',
  variant: '',
  size: undefined,
  customClass: null,
  selectable: false,
  imageUrl: null,
  imageAlt: null,
  to: null,
  href: null,
  as: null
})

/** Computed */
// Link mode activates only when `to` or `href` is passed; otherwise the
// card renders exactly as before (plain `div.card`, no extra attrs).
const linkTarget = computed(() => props.to || props.href || null)
const isLink = computed(() => linkTarget.value !== null)
const resolvedTag = computed(() => (isLink.value ? (props.as || 'a') : 'div'))
const isExternalLink = computed(() => {
  const target = linkTarget.value
  return typeof target === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(target)
})
const linkAttrs = computed(() => {
  if (!isLink.value)
    return {}

  const target = linkTarget.value

  // Anchor/external only for string targets; object targets use the router branch
  if (typeof target === 'string' && (resolvedTag.value === 'a' || isExternalLink.value)) {
    return {
      href: target,
      ...(isExternalLink.value && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.) - supports string or object
  return {
    to: target
  }
})
const cardClasses = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`card-${props.variant}`)

  // Scalable size prop
  if (props.size === 'xs')
    classes.push('card-xs')
  else if (props.size === 'sm')
    classes.push('card-sm')
  else if (props.size === 'md')
    classes.push('card-md')

  // Selectable state
  if (props.selectable)
    classes.push('card-selectable')

  // Link mode implies clickable-card styling (hover/active affordances)
  if (isLink.value)
    classes.push('card-link')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <component
    :is="resolvedTag"
    v-bind="{ title: title || undefined, id: id ? `card-${id}` : undefined, ...linkAttrs }"
    class="card"
    :class="cardClasses"
  >
    <!-- Media slot (cover image, full-bleed at the top of the card) -->
    <slot name="media">
      <img
        v-if="imageUrl"
        class="card-image"
        :src="imageUrl"
        :alt="imageAlt ?? ''"
      >
    </slot>

    <div class="card-header">
      <slot name="header">
        <p
          v-if="title"
          class="card-title"
        >
          {{ title }}
        </p>
      </slot>
    </div>
    <div class="card-body">
      <slot name="body" />
    </div>
    <div class="card-footer">
      <slot name="footer" />
    </div>
  </component>
</template>

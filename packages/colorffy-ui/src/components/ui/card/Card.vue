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

  if (typeof target === 'string' && (resolvedTag.value === 'a' || isExternalLink.value)) {
    return {
      href: target,
      ...(isExternalLink.value && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  return {
    to: target
  }
})
const cardClasses = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`card-${props.variant}`)

  if (props.size === 'xs')
    classes.push('card-xs')
  else if (props.size === 'sm')
    classes.push('card-sm')
  else if (props.size === 'md')
    classes.push('card-md')

  if (props.selectable)
    classes.push('card-selectable')

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
    v-bind="{ id: id || undefined, ...linkAttrs }"
    class="card"
    :class="cardClasses"
  >
    <!-- Media -->
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

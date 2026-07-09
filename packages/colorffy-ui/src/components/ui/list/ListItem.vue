<script setup lang="ts">
import type { IListItemProps } from '@/types/list'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IListItemProps>(), {
  title: null,
  text: null,
  icon: null,
  imageUrl: null,
  imageAlt: null,
  active: false,
  disabled: false,
  customClass: null,
  customIconWrapperClass: null,
  customIconClass: null,
  customImageClass: null,
  hasActions: false,
  to: null,
  href: null,
  as: null
})

/** Computed */
// Link mode activates only when `to` or `href` is passed; otherwise the
// item renders exactly as before (plain `div.list-item`, no extra attrs).
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
  const baseAttrs = {
    'aria-current': props.active ? 'page' : undefined,
    'aria-disabled': props.disabled || undefined,
    'disabled': props.disabled || undefined
  }

  // Anchor/external only for string targets; object targets use the router branch
  if (typeof target === 'string' && (resolvedTag.value === 'a' || isExternalLink.value)) {
    return {
      ...baseAttrs,
      href: props.disabled ? undefined : target,
      ...(isExternalLink.value && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.) - supports string or object
  return {
    ...baseAttrs,
    to: props.disabled ? undefined : target
  }
})
const itemClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass)
  }

  if (props.active)
    classes.push('list-item-active')

  if (props.disabled)
    classes.push('list-item-disabled')

  if (props.hasActions)
    classes.push('list-item-undecorated')

  // Link mode implies the interactive (hover/active + arrow) styling that
  // `UiListGroup`'s `isInteractive` prop provides at the group level.
  if (isLink.value)
    classes.push('list-group-item-link')

  return classes
})
const iconWrapperClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = ['list-item-icon-wrapper']

  if (props.customIconWrapperClass) {
    if (Array.isArray(props.customIconWrapperClass))
      classes.push(...props.customIconWrapperClass)
    else
      classes.push(props.customIconWrapperClass)
  }

  return classes
})
const iconClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []

  if (props.customIconClass) {
    if (Array.isArray(props.customIconClass))
      classes.push(...props.customIconClass)
    else
      classes.push(props.customIconClass)
  }

  return classes
})
const imageClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = ['list-item-image']

  if (props.customImageClass) {
    if (Array.isArray(props.customImageClass))
      classes.push(...props.customImageClass)
    else
      classes.push(props.customImageClass)
  }

  return classes
})
</script>

<template>
  <li
    class="list-group-item"
    :class="itemClasses"
    :aria-disabled="disabled || undefined"
  >
    <component
      :is="resolvedTag"
      class="list-item"
      v-bind="linkAttrs"
    >
      <!-- Media slot (replaces the image/icon area) -->
      <slot name="media">
        <!-- Image (takes precedence over icon) -->
        <img
          v-if="imageUrl"
          :class="imageClasses"
          :src="imageUrl"
          :alt="imageAlt ?? ''"
        >

        <!-- Icon -->
        <div
          v-else-if="icon"
          :class="iconWrapperClasses"
        >
          <UiIconMaterial
            :icon-code="icon"
            :class="iconClasses"
          />
        </div>
      </slot>

      <!-- Support text -->
      <div>
        <p
          v-if="title"
          class="subtitle-1"
          v-text="title"
        />
        <p
          v-if="text"
          class="subtitle-2"
          v-text="text"
        />
      </div>
    </component>

    <!-- Actions slot -->
    <div
      v-if="hasActions"
      class="list-item-actions"
    >
      <slot name="list-action" />
    </div>
  </li>
</template>

<script setup lang="ts">
import type { INavbarLinkProps } from '@/types/navbar'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<INavbarLinkProps>(), {
  text: '',
  to: '',
  href: '',
  active: false,
  disabled: false,
  customClass: '',
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
const linkProps = computed(() => {
  const baseProps = {
    'class': ['nav-link', { active: props.active, disabled: props.disabled }, props.customClass],
    'aria-current': props.active ? 'page' : undefined,
    'aria-disabled': props.disabled || undefined,
    'disabled': props.disabled || undefined
  }

  const target = linkTarget.value

  // Anchor/external only for string targets; object targets use the router branch
  if (typeof target === 'string' && (props.as === 'a' || isExternalLink.value)) {
    return {
      ...baseProps,
      'href': props.disabled ? undefined : target,
      ...(isExternalLink.value && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.) - supports string or object
  return {
    ...baseProps,
    to: target
  }
})
</script>

<template>
  <li class="nav-item">
    <component
      :is="props.as"
      v-bind="linkProps"
    >
      <slot name="icon" />
      {{ text }}
    </component>
  </li>
</template>

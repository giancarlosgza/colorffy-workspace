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
    'class': ['nav-link', { disabled: props.disabled }, props.customClass],
    'aria-disabled': props.disabled || undefined
  }

  // For anchor tags or external links
  if (props.as === 'a' || isExternalLink.value) {
    const href = typeof linkTarget.value === 'string' ? linkTarget.value : ''
    return {
      ...baseProps,
      'class': ['nav-link', { active: props.active, disabled: props.disabled }, props.customClass],
      'aria-current': props.active ? 'page' : undefined,
      'href': props.disabled ? undefined : href,
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

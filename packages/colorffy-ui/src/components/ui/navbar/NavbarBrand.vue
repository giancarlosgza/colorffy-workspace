<script setup lang="ts">
import type { INavbarBrandProps } from '@/types/navbar'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<INavbarBrandProps>(), {
  text: '',
  to: '',
  href: '',
  logo: null,
  initials: null,
  customClass: null,
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
    'class': 'navbar-logo',
    'aria-label': props.text
  }

  const target = linkTarget.value

  // Anchor/external only for string targets; object targets use the router branch
  if (typeof target === 'string' && (props.as === 'a' || isExternalLink.value)) {
    return {
      ...baseProps,
      href: target,
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
  <div class="navbar-brand" :class="customClass">
    <!-- Initials avatar -->
    <span
      v-if="initials && !logo"
      class="initials-avatar initials-navbar"
      v-text="initials"
    />

    <!-- Logo image -->
    <img
      v-else-if="logo"
      :src="logo"
      class="navbar-logo-img"
      alt="Brand logo"
    >

    <!-- Brand link with slot support -->
    <slot
      name="link"
      :link-target="linkTarget"
      :brand-text="text"
    >
      <component
        :is="props.as"
        v-bind="linkProps"
      >
        {{ text }}
      </component>
    </slot>
  </div>
</template>

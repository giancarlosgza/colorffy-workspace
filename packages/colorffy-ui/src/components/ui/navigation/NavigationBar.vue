<script setup lang="ts">
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface INavigationItem {
  id: string
  to: string | object
  icon: string
  text: string
  ariaLabel: string
}
interface INavigationBarProps {
  items?: INavigationItem[]
  activeItem?: string | null
  as?: string | object
}

/** Props */
const props = withDefaults(defineProps<INavigationBarProps>(), {
  items: () => [
    {
      id: 'nav-home',
      to: '/',
      icon: '&#xe66b;',
      text: 'Home',
      ariaLabel: 'Navigate to home page'
    }
  ],
  activeItem: null,
  as: 'a'
})

/** Computed */
const navigationItems = computed(() => props.items)

/** Methods */
function isActivePath(path: string | object): boolean {
  if (typeof path === 'string') {
    return props.activeItem === path
  }
  // For object paths, you might need custom logic based on your routing needs
  return false
}
function isExternalLink(to: string | object): boolean {
  return typeof to === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(to)
}
function getLinkProps(to: string | object, ariaLabel: string, isActive: boolean) {
  const isExternal = isExternalLink(to)

  const baseProps = {
    'aria-label': ariaLabel,
    'aria-current': isActive ? 'page' : undefined,
    'class': 'navigation-bar-link'
  }

  // For anchor tags or external links
  if (props.as === 'a' || isExternal) {
    const href = typeof to === 'string' ? to : ''
    return {
      ...baseProps,
      href,
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.) - supports string or object
  return {
    ...baseProps,
    to
  }
}
</script>

<template>
  <nav
    class="navigation-bar"
    role="navigation"
    aria-label="Main navigation"
  >
    <div
      v-for="item in navigationItems"
      :key="item.id"
      class="navigation-bar-item"
    >
      <component
        :is="props.as"
        v-bind="getLinkProps(item.to, item.ariaLabel, isActivePath(item.to))"
      >
        <UiIconMaterial
          :icon-code="item.icon"
          :class="{ 'iw-bold': isActivePath(item.to) }"
        />
        <div class="indicator" />
        <p class="typography-headline-sm">
          {{ item.text }}
        </p>
      </component>
    </div>
  </nav>
</template>

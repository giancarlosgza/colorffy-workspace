<script setup lang="ts">
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface INavigationItem {
  id: string
  path: string
  icon: string
  label: string
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
      path: '/',
      icon: '&#xe66b;',
      label: 'Home',
      ariaLabel: 'Navigate to home page'
    }
  ],
  activeItem: null,
  as: 'a'
})

/** Computed */
const navigationItems = computed(() => props.items)

/** Methods */
function isActivePath(path: string): boolean {
  return props.activeItem === path
}
function isExternalLink(path: string): boolean {
  return /^(?:https?:|mailto:|tel:|\/\/)/.test(path)
}
function getLinkProps(path: string, ariaLabel: string, isActive: boolean) {
  const isExternal = isExternalLink(path)

  const baseProps = {
    'aria-label': ariaLabel,
    'aria-current': isActive ? 'page' : undefined,
    'class': 'navigation-bar-link'
  }

  // For anchor tags or external links
  if (props.as === 'a' || isExternal) {
    return {
      ...baseProps,
      href: path,
      ...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer'
      })
    }
  }

  // For router components (NuxtLink, RouterLink, etc.)
  return {
    ...baseProps,
    to: path
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
        v-bind="getLinkProps(item.path, item.ariaLabel, isActivePath(item.path))"
      >
        <UiIconMaterial
          :icon-code="item.icon"
          :class="{ 'iw-bold': isActivePath(item.path) }"
        />
        <div class="indicator" />
        <p class="typography-headline-sm">
          {{ item.label }}
        </p>
      </component>
    </div>
  </nav>
</template>

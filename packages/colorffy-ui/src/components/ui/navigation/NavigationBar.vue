<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
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
    },
    {
      id: 'nav-components',
      path: '/components',
      icon: '&#xe5c3;',
      label: 'Components',
      ariaLabel: 'Navigate to UI components'
    },
    {
      id: 'nav-about',
      path: '/about',
      icon: '&#xe88e;',
      label: 'About',
      ariaLabel: 'Navigate to about page'
    }
  ]
})

/** Data */
const route = useRoute()

/** Computed */
const navigationItems = computed(() => props.items)

/** Methods */
function getActiveIconClass(path: string): string {
  return route.path === path ? 'iw-bold' : ''
}
function isActivePath(path: string): boolean {
  return route.path === path
}
</script>

<template>
  <nav class="navigation-bar" role="navigation" aria-label="Main navigation">
    <div
      v-for="item in navigationItems"
      :key="item.id"
      class="navigation-bar-item"
    >
      <NuxtLink
        :to="item.path"
        class="navigation-bar-link"
        :aria-label="item.ariaLabel"
        :aria-current="isActivePath(item.path) ? 'page' : undefined"
      >
        <UiIconMaterial
          :icon-code="item.icon"
          :class="getActiveIconClass(item.path)"
          aria-hidden="true"
        />
        <div class="indicator" />
        <p class="typography-headline-sm">
          {{ item.label }}
        </p>
      </NuxtLink>
    </div>
  </nav>
</template>

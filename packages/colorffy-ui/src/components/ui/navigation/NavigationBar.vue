<script setup lang="ts">
import type { INavigationBarProps, INavItem } from '@/types/navigation'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import UiIconMaterial from '../icon/Material.vue'

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
  as: 'a',
  frosted: false,
  island: false,
  indicatorTab: false,
  indicatorFrosted: false
})

/** Labels */
const l10n = useLabels('navigationBar')

/** Computed */
const navigationItems = computed(() => props.items)
const navigationBarClasses = computed(() => ({
  'navigation-bar-frosted': props.frosted,
  'navigation-bar-island': props.island
}))
const indicatorClasses = computed(() => ({
  'indicator-tab': props.indicatorTab,
  'indicator-frosted': props.indicatorFrosted
}))

/** Methods */
function isActiveItem(item: INavItem): boolean {
  if (props.activeItem == null)
    return false
  if (props.activeItem === item.id)
    return true
  return typeof item.to === 'string' && props.activeItem === item.to
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

  return {
    ...baseProps,
    to
  }
}
</script>

<template>
  <nav
    class="navigation-bar"
    :class="navigationBarClasses"
    role="navigation"
    :aria-label="l10n.ariaLabel"
  >
    <div
      v-for="item in navigationItems"
      :key="item.id"
      class="navigation-bar-item"
    >
      <component
        :is="props.as"
        v-bind="getLinkProps(item.to, item.ariaLabel, isActiveItem(item))"
      >
        <UiIconMaterial
          :icon-code="item.icon"
          :class="{ 'iw-bold': isActiveItem(item) }"
        />
        <p class="typography-headline-sm">
          {{ item.text }}
        </p>
      </component>
    </div>

    <div
      class="indicator"
      :class="indicatorClasses"
    />
  </nav>
</template>

<script setup lang="ts">
import type { IFooterItemProps } from '@/types/layout'
import { computed } from 'vue'
import UiIconMaterial from '../ui/icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IFooterItemProps>(), {
  text: null,
  icon: null,
  to: null,
  href: null,
  as: null,
  customClass: null
})

/** Computed */
const linkTarget = computed(() => props.to || props.href || null)
const routerComponent = computed(() => (props.as && props.as !== 'a' ? props.as : null))
const isExternalLink = computed(() => typeof linkTarget.value === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(linkTarget.value))
const usesAnchor = computed(() => isExternalLink.value || routerComponent.value === null)
// A route object needs a router component; an anchor cannot consume one
const isLink = computed(() => linkTarget.value !== null && (typeof linkTarget.value === 'string' || !usesAnchor.value))
const resolvedTag = computed(() => {
  if (!isLink.value)
    return 'span'

  return usesAnchor.value ? 'a' : routerComponent.value
})
const itemClasses = computed(() => ['footer-item', isLink.value ? null : 'anchor-link', props.customClass])
const linkAttrs = computed(() => {
  if (!isLink.value)
    return {}

  if (usesAnchor.value) {
    return {
      href: linkTarget.value as string,
      ...(isExternalLink.value && { target: '_blank', rel: 'noopener noreferrer' })
    }
  }

  return { to: linkTarget.value }
})
</script>

<template>
  <component
    :is="resolvedTag"
    :class="itemClasses"
    v-bind="linkAttrs"
  >
    <UiIconMaterial
      v-if="icon"
      :icon-code="icon"
      class="footer-item-icon"
    />
    <slot>{{ text }}</slot>
  </component>
</template>

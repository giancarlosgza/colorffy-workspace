<script setup lang="ts">
import type { ISidebarLinkProps } from '@/types/sidebar'
import { Tooltip as VTooltip } from 'floating-vue'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ISidebarLinkProps>(), {
  id: '',
  text: '',
  tooltipText: '',
  href: '',
  to: '',
  icon: null,
  tooltipPlacement: 'right',
  active: false,
  disabled: false,
  child: false,
  customClass: '',
  ariaLabelledby: '',
  as: 'a'
})

/** Computed */
const tooltipId = computed(() => `${props.id}-tooltip`)
const linkTarget = computed(() => {
  return props.to || props.href
})
const isExternalLink = computed(() => {
  const target = linkTarget.value
  return typeof target === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(target)
})
const linkProps = computed(() => {
  const baseClasses = [
    'drawer-item',
    {
      'drawer-item-disabled': props.disabled,
      'drawer-item-child': props.child
    },
    props.customClass
  ]

  const baseProps = {
    'class': baseClasses,
    'aria-disabled': props.disabled || undefined,
    'disabled': props.disabled || undefined,
    'aria-labelledby': props.ariaLabelledby || undefined,
    'aria-label': props.ariaLabelledby ? undefined : props.text
  }

  // For anchor tags or external links
  if (props.as === 'a' || isExternalLink.value) {
    const href = typeof linkTarget.value === 'string' ? linkTarget.value : ''
    return {
      ...baseProps,
      'class': [
        'drawer-item',
        {
          'drawer-item-disabled': props.disabled,
          'drawer-item-child': props.child,
          'active': props.active
        },
        props.customClass
      ],
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
  <VTooltip
    v-if="tooltipText"
    :aria-id="tooltipId"
    class="d-inline-block"
    :placement="tooltipPlacement"
  >
    <component
      :is="props.as"
      v-bind="linkProps"
    >
      <UiIconMaterial v-if="icon" :icon-code="icon" />
      <span>{{ text }}</span>
      <slot name="badge" />
    </component>

    <!-- Tooltip popper -->
    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>

  <!-- Without tooltip -->
  <component
    :is="props.as"
    v-else
    v-bind="linkProps"
  >
    <UiIconMaterial v-if="icon" :icon-code="icon" />
    <span>{{ text }}</span>
    <slot name="badge" />
  </component>
</template>

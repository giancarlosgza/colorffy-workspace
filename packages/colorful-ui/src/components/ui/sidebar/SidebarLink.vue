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
  ariaLabelledby: ''
})

/** Computed */
const linkClasses = computed(() => [
  'drawer-item',
  {
    'drawer-item-disabled': props.disabled,
    'drawer-item-child': props.child,
    'active': props.active
  },
  props.customClass
])
const tooltipId = computed(() => `${props.id}-tooltip`)
const linkTarget = computed(() => {
  const target = props.to || props.href
  return typeof target === 'string' ? target : ''
})
</script>

<template>
  <VTooltip
    v-if="tooltipText"
    :aria-id="tooltipId"
    class="d-inline-block"
    :placement="tooltipPlacement"
  >
    <!-- With custom link component slot -->
    <slot
      name="link"
      :link-target="linkTarget"
      :link-classes="linkClasses"
      :is-disabled="disabled"
      :aria-labelledby="ariaLabelledby"
      :aria-label="ariaLabelledby ? undefined : text"
    >
      <!-- Default: use <a> tag for framework-agnostic -->
      <a
        :href="disabled ? undefined : linkTarget"
        :class="linkClasses"
        :aria-labelledby="ariaLabelledby || undefined"
        :aria-label="ariaLabelledby ? undefined : text"
        :aria-disabled="disabled"
      >
        <UiIconMaterial v-if="icon" :icon-code="icon" aria-hidden="true" />
        <span>{{ text }}</span>
        <slot name="badge" />
      </a>
    </slot>

    <!-- Tooltip popper -->
    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>

  <!-- Without tooltip -->
  <slot
    v-else
    name="link"
    :link-target="linkTarget"
    :link-classes="linkClasses"
    :is-disabled="disabled"
    :aria-labelledby="ariaLabelledby"
    :aria-label="ariaLabelledby ? undefined : text"
  >
    <a
      :href="disabled ? undefined : linkTarget"
      :class="linkClasses"
      :aria-labelledby="ariaLabelledby || undefined"
      :aria-label="ariaLabelledby ? undefined : text"
      :aria-disabled="disabled"
    >
      <UiIconMaterial v-if="icon" :icon-code="icon" aria-hidden="true" />
      <span>{{ text }}</span>
      <slot name="badge" />
    </a>
  </slot>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { INavbarLinkProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarLinkProps>(), {
  text: '',
  to: '',
  href: '',
  active: false,
  disabled: false,
  customClass: ''
})

/** Computed */
const linkTarget = computed(() => {
  const target = props.to || props.href
  return typeof target === 'string' ? target : ''
})
</script>

<template>
  <li class="nav-item">
    <!-- With custom link component slot -->
    <slot
      name="link"
      :link-target="linkTarget"
      :is-active="active"
      :is-disabled="disabled"
    >
      <!-- Default: use <a> tag for framework-agnostic -->
      <a
        :href="disabled ? undefined : linkTarget"
        class="nav-link"
        :class="[
          { 'active': active, 'disabled': disabled },
          customClass
        ]"
        :aria-current="active ? 'page' : undefined"
        :aria-disabled="disabled || undefined"
      >
        <slot name="icon" />
        {{ text }}
      </a>
    </slot>
  </li>
</template>

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
  customClass: null
})

/** Computed */
const linkTarget = computed(() => {
  const target = props.to || props.href
  return typeof target === 'string' ? target : ''
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
      <a
        :href="linkTarget"
        class="navbar-logo"
        :aria-label="text"
      >
        {{ text }}
      </a>
    </slot>
  </div>
</template>

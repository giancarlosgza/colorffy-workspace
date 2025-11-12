<script setup lang="ts">
import { computed } from 'vue'
import type { INavbarProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarProps>(), {
  sticky: false,
  fluid: false,
  customClass: null
})

/** Computed */
const containerClass = computed(() => props.fluid ? 'container-fluid' : 'container')
</script>

<template>
  <component :is="sticky ? 'div' : 'nav'" :class="sticky ? 'nav-sticky' : ['navbar', customClass]">
    <nav
      v-if="sticky"
      class="navbar"
      :class="customClass"
      aria-label="Main navigation"
    >
      <div :class="containerClass">
        <slot />
      </div>
    </nav>
    <div v-else :class="containerClass">
      <slot />
    </div>
  </component>
</template>

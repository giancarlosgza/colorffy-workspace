<script setup lang="ts">
import { computed } from 'vue'
import type { INavbarNavProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarNavProps>(), {
  position: 'start',
  customClass: null
})

/** Computed */
const navClasses = computed(() => [
  'navbar-nav',
  {
    'nav-start': props.position === 'start',
    'nav-end': props.position === 'end'
  },
  props.customClass
])
</script>

<template>
  <ul :class="navClasses">
    <slot />
  </ul>
</template>

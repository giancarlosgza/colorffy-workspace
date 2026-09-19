<script setup lang="ts">
import type { IFooterGroupProps } from '@/types/layout'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IFooterGroupProps>(), {
  title: null,
  direction: 'col',
  overline: false,
  customClass: null
})

/** Computed */
const groupClasses = computed(() => [`footer-${props.direction}`, props.customClass])
const titleClasses = computed(() => ['footer-group-title', props.overline ? 'footer-group-title-overline' : null])
const wrapsLinks = computed(() => props.direction === 'row' && Boolean(props.title))
</script>

<template>
  <div
    class="footer-group"
    :class="groupClasses"
  >
    <p
      v-if="title"
      :class="titleClasses"
    >
      {{ title }}
    </p>

    <div
      v-if="wrapsLinks"
      class="footer-group-links"
    >
      <slot />
    </div>
    <slot v-else />
  </div>
</template>

<script setup lang="ts">
import type { IFooterGroupProps } from '@/types/layout'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IFooterGroupProps>(), {
  title: null,
  direction: 'col',
  customClass: null
})

/** Computed */
const groupClasses = computed(() => [`footer-${props.direction}`, props.customClass])
</script>

<template>
  <div
    class="footer-group"
    :class="groupClasses"
  >
    <p v-if="title">
      {{ title }}
    </p>

    <slot />
  </div>
</template>

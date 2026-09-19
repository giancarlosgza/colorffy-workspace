<script setup lang="ts">
import type { IFooterProps } from '@/types/layout'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IFooterProps>(), {
  title: null,
  subtitle: null,
  fluid: false,
  customClass: null
})

/** Computed */
const containerClass = computed(() => props.fluid ? 'container-fluid' : 'container')
</script>

<template>
  <footer
    class="footer"
    :class="customClass"
  >
    <div :class="containerClass">
      <slot name="brand">
        <p
          v-if="title"
          class="footer-title"
        >
          {{ title }}
        </p>

        <p
          v-if="subtitle"
          class="footer-subtitle"
        >
          {{ subtitle }}
        </p>
      </slot>

      <slot />

      <div
        v-if="$slots.bottom"
        class="footer-bottom"
      >
        <slot name="bottom" />
      </div>
    </div>
  </footer>
</template>

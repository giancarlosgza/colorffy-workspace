<script setup lang="ts">
import type { INavbarProps } from '@/types/navbar'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<INavbarProps>(), {
  sticky: false,
  fluid: false,
  customClass: null
})

/** Labels */
const l10n = useLabels('navbar')

/** Computed */
const navText = computed(() => props.ariaLabel ?? l10n.value.ariaLabel)
const containerClass = computed(() => props.fluid ? 'container-fluid' : 'container')
</script>

<template>
  <component
    :is="sticky ? 'div' : 'nav'"
    :class="sticky ? 'nav-sticky' : ['navbar', customClass]"
    :aria-label="sticky ? undefined : navText"
  >
    <nav
      v-if="sticky"
      class="navbar"
      :class="customClass"
      :aria-label="navText"
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

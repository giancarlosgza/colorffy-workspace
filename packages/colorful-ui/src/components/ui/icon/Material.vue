<script setup lang="ts">
import type { IMaterialIconProps } from '@/types/icon'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IMaterialIconProps>(), {
  decorative: true,
  ariaLabel: null
})

/** Computed */
const ariaHidden = computed(() => (props.decorative ? 'true' : undefined))
const ariaRole = computed(() => (props.decorative ? undefined : 'img'))
const ariaLabel = computed(() => (props.decorative ? undefined : props.ariaLabel ?? undefined))
</script>

<template>
  <i
    class="material-symbols-rounded"
    :aria-hidden="ariaHidden"
    :role="ariaRole"
    :aria-label="ariaLabel"
    v-html="iconCode"
  />
</template>

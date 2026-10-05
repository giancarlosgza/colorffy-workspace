<script setup lang="ts">
import type { IconSize, IMaterialIconProps } from '@/types/icon'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IMaterialIconProps>(), {
  size: null,
  color: null,
  decorative: true,
  ariaLabel: null
})

/** Data */
const sizeMap: Record<IconSize, string> = {
  xs: '1.25rem',
  sm: '1.5rem',
  md: '2rem',
  lg: '2.5rem',
  xl: '3rem'
}

/** Computed */
const iconStyle = computed(() => ({
  fontSize: typeof props.size === 'number' ? `${props.size / 16}rem` : props.size ? sizeMap[props.size] : undefined,
  color: props.color ?? undefined
}))
const ariaHidden = computed(() => (props.decorative ? 'true' : undefined))
const ariaRole = computed(() => (props.decorative ? undefined : 'img'))
const ariaLabel = computed(() => (props.decorative ? undefined : props.ariaLabel ?? undefined))
// Blocks raw angle brackets (tag injection); entities, glyphs and ligatures pass
const safeIconCode = computed(() => (/[<>]/.test(props.iconCode) ? '' : props.iconCode))
</script>

<template>
  <i
    class="material-symbols-rounded"
    :style="iconStyle"
    :aria-hidden="ariaHidden"
    :role="ariaRole"
    :aria-label="ariaLabel"
    v-html="safeIconCode"
  />
</template>

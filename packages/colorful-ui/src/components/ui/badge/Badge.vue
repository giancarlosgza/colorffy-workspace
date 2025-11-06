<script setup lang="ts">
import type { IBadgeProps } from '@/types/badge'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IBadgeProps>(), {
  text: undefined,
  variant: 'primary',
  iconCode: null,
  size: undefined,
  pill: false,
  customClass: null,
  iconClass: null,
  iconStyle: null
})

/** Computed */
const badgeClasses = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`badge-${props.variant}`)

  if (props.size === 'sm')
    classes.push('badge-sm')

  if (props.pill)
    classes.push('badge-pill')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div
    class="badge"
    :class="badgeClasses"
  >
    <UiIconMaterial
      v-if="iconCode"
      :icon-code="iconCode"
      :class="iconClass"
      :style="iconStyle"
    />
    <span v-if="text" v-text="text" />
  </div>
</template>

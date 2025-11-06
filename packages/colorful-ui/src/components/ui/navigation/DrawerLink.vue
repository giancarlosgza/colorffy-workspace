<script setup lang="ts">
import { Tooltip as VTooltip } from 'floating-vue'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface IDrawerLinkProps {
  id?: string
  text?: string
  tooltipText?: string
  link?: string | object
  icon?: string
  disabled?: boolean
  customClass?: string | string[]
  ariaLabelledby?: string
}

/** Props */
const props = withDefaults(defineProps<IDrawerLinkProps>(), {
  id: '',
  text: '',
  tooltipText: '',
  link: '',
  icon: '&#xe66b;',
  disabled: false,
  customClass: '',
  ariaLabelledby: ''
})

/** Computed */
const linkClasses = computed(() => [
  'drawer-item',
  { 'drawer-item-disabled': props.disabled },
  props.customClass
])
const tooltipId = computed(() => `${props.id}-tooltip`)
</script>

<template>
  <VTooltip
    :aria-id="tooltipId"
    class="d-inline-block"
  >
    <!-- Link component -->
    <NuxtLink
      :to="props.disabled ? '' : props.link"
      :class="linkClasses"
      :disabled="props.disabled"
      :aria-labelledby="props.ariaLabelledby || undefined"
      :aria-label="props.ariaLabelledby ? undefined : props.text"
    >
      <UiIconMaterial :icon-code="props.icon" aria-hidden="true" />
      <span>{{ props.text }}</span>
    </NuxtLink>

    <!-- Tooltip text slot -->
    <template #popper>
      {{ tooltipText }}
    </template>
  </VTooltip>
</template>

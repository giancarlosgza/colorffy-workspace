<script setup lang="ts">
import { computed } from 'vue'
import type { INavbarToggleProps } from '@/types/navbar'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<INavbarToggleProps>(), {
  collapsed: false,
  collapseText: 'Collapse sidebar',
  expandText: 'Expand sidebar',
  customClass: null
})

/** Emits */
defineEmits<{
  toggle: []
}>()

/** Computed */
const tooltipText = computed(() => props.collapsed ? props.expandText : props.collapseText)
const iconCode = computed(() => props.collapsed ? '&#xf7e4;' : '&#xe9e2;')
</script>

<template>
  <UiButtonTooltip
    id="sidebar-collapse"
    variant="text"
    icon
    icon-variant="compact"
    custom-class="text-neutral"
    class="sidebar-collapse"
    :class="customClass"
    :tooltip-text="tooltipText"
    @click="$emit('toggle')"
  >
    <template #icon>
      <UiIconMaterial :icon-code="iconCode" />
    </template>
  </UiButtonTooltip>
</template>

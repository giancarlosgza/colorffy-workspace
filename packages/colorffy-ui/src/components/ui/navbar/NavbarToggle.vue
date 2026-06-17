<script setup lang="ts">
import type { INavbarToggleEmits, INavbarToggleProps } from '@/types/navbar'
import { computed } from 'vue'
import UiButtonTooltip from '../button/ButtonTooltip.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<INavbarToggleProps>(), {
  id: 'sidebar-collapse',
  collapsed: false,
  collapseText: 'Collapse sidebar',
  expandText: 'Expand sidebar',
  customClass: null,
  showToggleButton: false
})

/** Emits */
defineEmits<INavbarToggleEmits>()

/** Computed */
const tooltipText = computed(() => props.collapsed ? props.expandText : props.collapseText)
const iconCode = computed(() => props.collapsed ? '&#xf7e4;' : '&#xe9e2;')
const toggleClasses = computed(() => [
  'sidebar-collapse-button',
  {
    'sidebar-collapse-visible-mobile': props.showToggleButton
  },
  props.customClass
])
</script>

<template>
  <UiButtonTooltip
    :id="id"
    variant="text"
    icon
    icon-variant="compact"
    custom-class="text-neutral"
    :class="toggleClasses"
    :tooltip-text="tooltipText"
    :aria-expanded="!collapsed"
    :aria-controls="controls"
    @click="$emit('toggle')"
  >
    <template #icon>
      <UiIconMaterial :icon-code="iconCode" />
    </template>
  </UiButtonTooltip>
</template>

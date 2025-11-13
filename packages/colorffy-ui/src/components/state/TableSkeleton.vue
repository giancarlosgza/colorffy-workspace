<script setup lang="ts">
import type { StyleValue } from 'vue'
import { breakpointsBootstrapV5, useBreakpoints } from '@vueuse/core'
import { computed } from 'vue'
import UiIconMaterial from '../ui/icon/Material.vue'
import StateBaseSkeleton from './BaseSkeleton.vue'

/** Interfaces */
interface ITableSkeletonProps {
  skeletonRows?: number
  skeletonCols?: number
  skeletonColExpanded?: number
  customClass?: string | string[] | null
  skeletonStyles?: StyleValue
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
  isExpanded?: boolean
}

/** Props */
const props = withDefaults(defineProps<ITableSkeletonProps>(), {
  skeletonRows: 12,
  skeletonCols: 5,
  skeletonColExpanded: 7,
  customClass: null,
  skeletonStyles: null,
  role: 'status',
  ariaLabel: 'Loading table data',
  ariaLive: 'polite',
  isExpanded: false
})

/** Data */
const breakpoints = useBreakpoints(breakpointsBootstrapV5)
const isMobile = breakpoints.smallerOrEqual('sm')

/** Computed */
const expandedSkeletonCols = computed(() => {
  return props.isExpanded ? props.skeletonColExpanded : props.skeletonCols
})
const tbodyClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = []

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
})
const ariaAttributes = computed(() => {
  const attributes: Record<string, string> = {}

  if (props.role)
    attributes.role = props.role
  if (props.ariaLabel)
    attributes['aria-label'] = props.ariaLabel
  if (props.ariaLive && props.ariaLive !== 'off')
    attributes['aria-live'] = props.ariaLive

  return attributes
})
</script>

<template>
  <tbody
    :class="tbodyClasses"
    :style="skeletonStyles"
    v-bind="ariaAttributes"
  >
    <tr
      v-for="skeletonTableRowIndex in skeletonRows"
      :key="`row-${skeletonTableRowIndex}`"
    >
      <td
        v-for="skeletonTableColIndex in expandedSkeletonCols"
        :key="`col-${skeletonTableColIndex}`"
      >
        <UiIconMaterial
          v-show="!isMobile"
          class="text-muted animation-spin me-2"
          icon-code="&#xe9d0;"
          aria-hidden="true"
        />
        <StateBaseSkeleton class="col-12 col-md-6" />
      </td>
    </tr>
  </tbody>
</template>

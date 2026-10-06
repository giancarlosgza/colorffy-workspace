<script setup lang="ts">
import type { StyleValue } from 'vue'
import { breakpointsBootstrapV5, useBreakpoints } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
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
  ariaLive: 'polite',
  isExpanded: false
})

/** Labels */
const l10n = useLabels('loading')

/** Data */
// False until mounted, so SSR and the first client render match
const isClient = ref(false)

/** Composables */
const breakpoints = useBreakpoints(breakpointsBootstrapV5)
const smAndDown = breakpoints.smallerOrEqual('sm')

/** Computed */
const isMobile = computed(() => isClient.value && smAndDown.value)
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
  const label = props.ariaLabel ?? l10n.value.table
  if (label)
    attributes['aria-label'] = label
  if (props.ariaLive && props.ariaLive !== 'off')
    attributes['aria-live'] = props.ariaLive

  return attributes
})

/** Lifecycle */
onMounted(() => {
  isClient.value = true
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

<script setup lang="ts">
import { computed } from 'vue'
import UiButton from '../ui/button/Button.vue'
import UiCard from '../ui/card/Card.vue'
import UiIconMaterial from '../ui/icon/Material.vue'
import StateBaseSkeleton from './BaseSkeleton.vue'

/** Interfaces */
interface IGridSkeletonProps {
  skeletonGridItems?: number
  gridLayoutClasses?: string | string[] | null
  cardVariant?: string
  showFooter?: boolean
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<IGridSkeletonProps>(), {
  skeletonGridItems: 12,
  gridLayoutClasses: '',
  cardVariant: 'pane',
  showFooter: true,
  role: 'status',
  ariaLabel: 'Loading content grid',
  ariaLive: 'polite'
})

/** Computed */
const gridClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = []

  if (props.gridLayoutClasses) {
    if (Array.isArray(props.gridLayoutClasses)) {
      classes.push(...props.gridLayoutClasses)
    } else {
      classes.push(props.gridLayoutClasses)
    }
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
  <div
    :class="gridClasses"
    v-bind="ariaAttributes"
  >
    <UiCard
      v-for="skeletonGridIndex in skeletonGridItems"
      :key="`skeleton-grid-item-${skeletonGridIndex}`"
      :variant="cardVariant"
      :aria-label="`Loading item ${skeletonGridIndex} of ${skeletonGridItems}`"
    >
      <template #body>
        <!-- Skeleton -->
        <div>
          <StateBaseSkeleton
            size="lg"
            class="col-12 h-fixed rounded-lg"
            style="--fixed-size: 6.25rem;"
            :aria-label="`Loading preview for item ${skeletonGridIndex}`"
          />
        </div>
      </template>
      <template v-if="showFooter" #footer>
        <UiButton
          variant="outline"
          icon
          icon-variant="compact"
          disabled
          aria-label="Action button (loading)"
        >
          <template #icon>
            <UiIconMaterial class="iw-bold" icon-code="&#xe3c6;" />
          </template>
        </UiButton>
      </template>
    </UiCard>
  </div>
</template>

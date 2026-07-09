<script setup lang="ts">
import type { ITimelineItem, ITimelineProps } from '@/types/timeline'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ITimelineProps>(), {
  items: () => [],
  align: 'start',
  size: undefined,
  customClass: null
})

/** Computed */
const timelineClasses = computed(() => {
  const classes: (string | string[] | Record<string, boolean>)[] = []

  if (props.align === 'alternate')
    classes.push('timeline-alternate')

  if (props.size === 'sm')
    classes.push('timeline-sm')

  if (props.size === 'lg')
    classes.push('timeline-lg')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})

/** Methods */
function markerClasses(item: ITimelineItem) {
  return item.variant ? `timeline-item-${item.variant}` : undefined
}
</script>

<template>
  <ol
    class="timeline"
    :class="timelineClasses"
    role="list"
  >
    <li
      v-for="item in items"
      :key="item.id"
      class="timeline-item"
      role="listitem"
    >
      <!-- Marker column -->
      <div
        class="timeline-item-marker"
        :class="markerClasses(item)"
      >
        <img
          v-if="item.imageUrl"
          class="timeline-item-image"
          :src="item.imageUrl"
          :alt="item.imageAlt ?? ''"
        >

        <div
          v-else-if="item.icon"
          class="list-item-icon-wrapper"
        >
          <UiIconMaterial :icon-code="item.icon" />
        </div>

        <span
          v-else
          class="timeline-item-dot"
        />

        <span class="timeline-item-line" />
      </div>

      <!-- Content column -->
      <div class="timeline-item-content">
        <slot
          :name="`item-${item.id}`"
          :item="item"
        >
          <slot
            name="item"
            :item="item"
          >
            <p
              v-if="item.time"
              class="caption text-muted mb-1"
              v-text="item.time"
            />
            <p
              v-if="item.title"
              class="timeline-title"
              v-text="item.title"
            />
            <p
              v-if="item.text"
              class="timeline-text"
              v-text="item.text"
            />
          </slot>
        </slot>
      </div>
    </li>
  </ol>
</template>

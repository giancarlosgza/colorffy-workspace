<script setup lang="ts">
import type { ITimelineItem, ITimelineProps } from '@/types/timeline'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ITimelineProps>(), {
  items: () => [],
  align: 'start',
  customClass: null
})

/** Computed */
const timelineClasses = computed(() => {
  const classes: (string | string[] | Record<string, boolean>)[] = []

  if (props.align === 'alternate')
    classes.push('timeline-alternate')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})

/** Methods */
// Colors the dot/icon marker using the shared semantic palette
function markerClasses(item: ITimelineItem) {
  return item.variant ? `timeline-item-${item.variant}` : undefined
}
</script>

<template>
  <!-- Explicit roles: display:contents + list-style:none strip implicit list semantics in some browsers -->
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
      <!-- Marker column: image/icon/dot + connector line to the next item -->
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
        <!-- Per-item custom body: #item-<id> slot first, then scoped #item slot -->
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
              class="subtitle-1"
              v-text="item.title"
            />
            <p
              v-if="item.text"
              class="subtitle-2"
              v-text="item.text"
            />
          </slot>
        </slot>
      </div>
    </li>
  </ol>
</template>

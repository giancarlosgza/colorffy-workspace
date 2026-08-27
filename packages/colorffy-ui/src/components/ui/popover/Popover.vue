<script setup lang="ts">
import type { IPopoverProps } from '@/types/popover'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IPopoverProps>(), {
  positionBlock: 'top',
  positionInline: 'left'
})

/** Computed */
const popoverClass = computed(() => {
  const classes = ['popover', 'popover-anchor'] as string[]

  if (props.positionBlock === 'top') {
    classes.push('popover-anchor-top')
  } else if (props.positionBlock === 'bottom') {
    classes.push('popover-anchor-bottom')
  }

  if (props.positionInline === 'left') {
    classes.push('popover-anchor-left')
  } else if (props.positionInline === 'right') {
    classes.push('popover-anchor-right')
  }

  if (props.size) {
    classes.push(`popover-${props.size}`)
  }

  return classes
})
const popoverStyle = computed(() => ({ 'position-anchor': props.anchorName }))
</script>

<template>
  <div
    :id="id"
    :class="popoverClass"
    :style="popoverStyle"
    popover
  >
    <div
      class="popover-content"
      :class="contentClass"
    >
      <div
        v-if="$slots.header"
        class="popover-header"
      >
        <slot name="header" />
      </div>
      <div
        v-if="$slots.body"
        class="popover-body"
      >
        <slot name="body" />
      </div>
      <div
        v-if="$slots.footer"
        class="popover-footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

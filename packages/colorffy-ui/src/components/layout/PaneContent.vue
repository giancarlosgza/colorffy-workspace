<script setup lang="ts">
import type { IPaneContentProps } from '@/types/layout'
import { computed, ref } from 'vue'

/** Props */
const props = withDefaults(defineProps<IPaneContentProps>(), {
  customClass: null,
  containerClass: null,
  isFullHeight: false,
  ariaLabel: undefined,
  ariaLabelledby: undefined,
  ariaDescribedby: undefined,
  id: undefined
})

/** Computed */
const paneClasses = computed(() => [props.customClass, { 'pane-content-expanded': props.isFullHeight }])
const ariaAttributes = computed(() => {
  const attributes: Record<string, string> = {}

  if (props.ariaLabel)
    attributes['aria-label'] = props.ariaLabel
  if (props.ariaLabelledby)
    attributes['aria-labelledby'] = props.ariaLabelledby
  if (props.ariaDescribedby)
    attributes['aria-describedby'] = props.ariaDescribedby
  if (props.id)
    attributes.id = props.id

  return attributes
})

/**
 * Create the ref reference and expose it to be used by the parent
 */
const paneContentRef = ref<HTMLElement | null>(null)

defineExpose({
  paneContentRef
})
</script>

<template>
  <div
    class="row"
    :class="containerClass"
  >
    <div class="col-md-12">
      <section
        ref="paneContentRef"
        class="pane-content"
        :class="paneClasses"
        v-bind="ariaAttributes"
      >
        <slot />
      </section>
    </div>
  </div>
</template>

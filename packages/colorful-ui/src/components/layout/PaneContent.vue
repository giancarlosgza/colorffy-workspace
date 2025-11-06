<script setup lang="ts">
import { computed, ref } from 'vue'

/** Interfaces */
interface IPaneContentProps {
  customClass?: string | string[] | null
  containerClass?: string | string[] | null
  isFullHeight?: boolean
  ariaLabel?: string
  ariaLabelledby?: string
  ariaDescribedby?: string
  id?: string
}

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
const paneClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = []

  if (props.customClass) {
    classes.push(props.customClass)
  }

  if (props.isFullHeight) {
    classes.push('pane-content-expanded')
  }

  return classes
})
const containerClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = []

  if (props.containerClass) {
    classes.push(props.containerClass)
  }

  return classes
})
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
  <div class="row" :class="containerClasses">
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

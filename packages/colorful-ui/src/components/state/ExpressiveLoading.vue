<script setup lang="ts">
import type { StyleValue } from 'vue'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

/** Interfaces */
interface IExpressiveLoadingProps {
  title?: string[] | string | null
  interval?: number
  size?: 'sm' | 'md' | 'lg'
  customClass?: string | string[] | null
  loadingStyles?: StyleValue
  role?: string
  ariaLabel?: string
  ariaLive?: 'off' | 'polite' | 'assertive'
}

/** Props */
const props = withDefaults(defineProps<IExpressiveLoadingProps>(), {
  title: null,
  interval: 3000,
  size: 'md',
  customClass: null,
  loadingStyles: null,
  role: 'status',
  ariaLabel: 'Loading content',
  ariaLive: 'polite'
})

/** Data */
const titleDynamic = ref<string | null>(null)
let currentIndex = 0
let intervalId: ReturnType<typeof setInterval> | null = null

/** Computed */
const loadingClasses = computed<(string | string[])[]>(() => {
  const classes: (string | string[])[] = ['d-grid', 'place-items-center', 'gap-5']

  if (props.size === 'sm') {
    classes.push('gap-3')
  } else if (props.size === 'lg') {
    classes.push('gap-6')
  }

  if (props.customClass) {
    classes.push(props.customClass)
  }

  return classes
})
const spinnerSize = computed(() => {
  switch (props.size) {
    case 'sm': return { width: '45px', height: '45px' }
    case 'lg': return { width: '85px', height: '85px' }
    default: return { width: '65px', height: '65px' }
  }
})
const titleClasses = computed(() => {
  const classes = ['subtitle-1', 'font-primary', 'fw-800']

  if (props.size === 'sm') {
    classes.push('fs-500')
  } else if (props.size === 'lg') {
    classes.push('fs-700')
  } else {
    classes.push('fs-600')
  }

  return classes
})
const titleArray = computed(() => {
  if (!props.title)
    return []
  return Array.isArray(props.title) ? props.title : [props.title]
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

/** Methods */
function startTitleRotation() {
  if (titleArray.value.length > 0) {
    titleDynamic.value = titleArray.value[currentIndex] || null

    if (titleArray.value.length > 1) {
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % titleArray.value.length
        titleDynamic.value = titleArray.value[currentIndex] || null
      }, props.interval)
    }
  }
}
function stopTitleRotation() {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

/** Lifecycle hooks */
onMounted(() => {
  startTitleRotation()
})
onUnmounted(() => {
  stopTitleRotation()
})

// Watcher
watch(() => props.title, () => {
  stopTitleRotation()
  currentIndex = 0
  startTitleRotation()
}, { deep: true })
</script>

<template>
  <div
    :class="loadingClasses"
    :style="loadingStyles"
    v-bind="ariaAttributes"
  >
    <!-- Spinner -->
    <svg
      class="spinner"
      :width="spinnerSize.width"
      :height="spinnerSize.height"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        class="path"
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>

    <!-- Dynamic title text -->
    <Transition mode="out-in" name="slide-block">
      <p
        v-if="titleDynamic"
        :key="titleDynamic"
        :class="titleClasses"
      >
        {{ titleDynamic }}
      </p>
    </Transition>
  </div>
</template>

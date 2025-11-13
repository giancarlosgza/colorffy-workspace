<script setup lang="ts">
import type { IconSize, IconToolName, IToolIconProps } from '@/types/icon'
import { computed } from 'vue'

/** Interfaces */
interface IToolIconDefinition {
  viewBox: string
  defaultColor?: string
  paths?: Array<{ d: string }>
}

/** Props */
const props = withDefaults(defineProps<IToolIconProps>(), {
  tool: 'Stripe',
  size: 'md',
  decorative: true,
  ariaLabel: null
})

/** Data */
const sizeMap: Record<IconSize, number> = {
  xs: 20,
  sm: 24,
  md: 36,
  lg: 48,
  xl: 64
}
const iconDefinitions: Record<IconToolName, IToolIconDefinition> = {
  'Stripe': {
    viewBox: '0 0 24 24',
    defaultColor: '#6772E5',
    paths: [{
      d: 'M13.479 9.883c-1.626-.604-2.512-1.067-2.512-1.803 0-.622.511-.977 1.423-.977 1.667 0 3.379.642 4.558 1.22l.666-4.111c-.935-.446-2.847-1.177-5.49-1.177-1.87 0-3.425.489-4.536 1.401-1.155.954-1.757 2.334-1.757 4 0 3.023 1.847 4.312 4.847 5.403 1.936.688 2.579 1.178 2.579 1.934 0 .732-.629 1.155-1.762 1.155-1.403 0-3.716-.689-5.231-1.578l-.674 4.157c1.304.732 3.705 1.488 6.197 1.488 1.976 0 3.624-.467 4.735-1.356 1.245-.977 1.89-2.422 1.89-4.289 0-3.091-1.889-4.38-4.935-5.468h.002z'
    }]
  },
  'Buy Sell Ads': {
    viewBox: '0 0 24 24',
    defaultColor: '#EB4714',
    paths: [
      { d: 'M3 3v17a1 1 0 0 0 1 1h17v-2H5V3H3z' },
      { d: 'M15.293 14.707a.999.999 0 0 0 1.414 0l5-5-1.414-1.414L16 12.586l-2.293-2.293a.999.999 0 0 0-1.414 0l-5 5 1.414 1.414L13 12.414l2.293 2.293z' }
    ]
  },
  'Firebase Console': {
    viewBox: '0 0 24 24',
    defaultColor: '#FFA000',
    paths: [{
      d: 'M5.239 15.063 7.21 2.381a.453.453 0 0 1 .847-.145l2.12 3.979-4.938 8.848zM19.24 18.14 17.363 6.469a.454.454 0 0 0-.766-.246L4.76 18.14l6.55 3.691c.411.23.912.23 1.323 0l6.607-3.691zM13.917 7.955 12.4 5.052a.452.452 0 0 0-.8 0L4.939 16.989l8.978-9.034z'
    }]
  },
  'Search Console': {
    viewBox: '0 0 24 24',
    defaultColor: '#4982DC',
    paths: [
      { d: 'M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z' },
      { d: 'M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z' }
    ]
  },
  'Hotjar Insights': {
    viewBox: '0 0 24 24',
    defaultColor: '#FF3C00',
    paths: [{
      d: 'M16.5 8c0 1.5-.5 3.5-2.9 4.3.7-1.7.8-3.4.3-5-.7-2.1-3-3.7-4.6-4.6-.4-.3-1.1.1-1 .7 0 1.1-.3 2.7-2 4.4C4.1 10 3 12.3 3 14.5 3 17.4 5 21 9 21c-4-4-1-7.5-1-7.5.8 5.9 5 7.5 7 7.5 1.7 0 5-1.2 5-6.4 0-3.1-1.3-5.5-2.4-6.9-.3-.5-1-.2-1.1.3'
    }]
  },
  'Plausible Analytics': {
    viewBox: '0 0 24 24',
    defaultColor: '#6574CD',
    paths: [
      { d: 'M13 6c2.507.423 4.577 2.493 5 5h4c-.471-4.717-4.283-8.529-9-9v4z' },
      { d: 'M18 13c-.478 2.833-2.982 4.949-5.949 4.949-3.309 0-6-2.691-6-6C6.051 8.982 8.167 6.478 11 6V2c-5.046.504-8.949 4.773-8.949 9.949 0 5.514 4.486 10 10 10 5.176 0 9.445-3.903 9.949-8.949h-4z' }
    ]
  },
  'Google Ads': {
    viewBox: '0 0 192 192'
  },
  'Google Analytics': {
    viewBox: '0 0 192 192'
  }
}

/** Computed */
const resolvedSize = computed(() => {
  if (typeof props.size === 'number')
    return props.size

  if (!props.size)
    return sizeMap.md

  return sizeMap[props.size as IconSize] ?? sizeMap.md
})
const iconConfig = computed(() => iconDefinitions[props.tool])
const ariaHidden = computed(() => (props.decorative ? true : undefined))
const ariaRole = computed(() => (props.decorative ? undefined : 'img'))
const ariaLabel = computed(() => {
  if (props.decorative)
    return undefined

  return props.ariaLabel ?? props.tool
})
</script>

<template>
  <svg
    v-if="iconConfig && iconConfig.paths && iconConfig.paths.length"
    :width="resolvedSize"
    :height="resolvedSize"
    :role="ariaRole"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    :style="{ fill: iconConfig.defaultColor }"
    focusable="false"
    :viewBox="iconConfig.viewBox"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      v-for="(path, index) in iconConfig.paths"
      :key="`tool-path-${index}`"
      :d="path.d"
    />
  </svg>

  <!-- Multi-color inline definitions (not color-overridable) -->
  <svg
    v-else-if="props.tool === 'Firebase Console'"
    :width="resolvedSize"
    :height="resolvedSize"
    :role="ariaRole"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <path fill-rule="evenodd" clip-rule="evenodd" d="m124.072 170.836-.005-.002a66.724 66.724 0 0 1-30.396 6.125 67.007 67.007 0 0 1-22.703-4.797l-22.054-66.018 15.28-29.593h56.347s3.533 94.286 3.531 94.285Z" fill="#FF9100" />
    <path d="M94.438 152.218c-19.528-18.059-31.377-44.2-30.374-72.873.033-.929.083-1.862.139-2.791a50.693 50.693 0 0 0-10.906-1.59 50.617 50.617 0 0 0-15.503 1.862 66.7 66.7 0 0 0-8.752 30.832c-1.012 28.964 16.515 54.269 41.926 64.504a50.692 50.692 0 0 0 23.47-19.944Z" fill="#FFC400" />
    <path d="M99.54 8.69C86.749 18.94 76.643 32.451 70.534 48.02a94.509 94.509 0 0 0-6.34 28.534c22.462 5.795 38.691 26.561 37.846 50.706a50.355 50.355 0 0 1-7.616 24.963 94.543 94.543 0 0 0 29.648 18.613c22.218-10.268 37.98-32.365 38.891-58.502.591-16.936-5.915-32.028-15.106-44.768C138.148 54.096 99.54 8.69 99.54 8.69Z" fill="#DD2C00" />
  </svg>

  <svg
    v-else-if="props.tool === 'Search Console'"
    :width="resolvedSize"
    :height="resolvedSize"
    :role="ariaRole"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <path d="M0-1h48v48H0z" fill="none" />
    <circle cx="24" cy="23" fill="#FFF" r="22" />
    <path d="M24 1.23c12.11 0 21.94 9.79 22 21.89v-.11c0-12.15-9.85-22-22-22C11.85 1 2 10.85 2 23v.11c.06-12.09 9.89-21.88 22-21.88z" fill="#FFF" fill-opacity=".2" />
    <path d="M24 44.77c12.11 0 21.94-9.79 22-21.89v.11c0 12.15-9.85 22-22 22C11.85 45 2 35.15 2 23v-.11c.06 12.09 9.89 21.88 22 21.88z" fill="#263238" fill-opacity=".15" />
    <path d="M33.76 34.26c2.75-2.56 4.49-6.37 4.49-11.26 0-.89-.08-1.84-.29-3H24.01v5.99h8.03c-.4 2.02-1.5 3.56-3.07 4.56v.75l3.91 2.97h.88z" fill="#4285F4" />
    <path d="M15.58 25.77A8.845 8.845 0 0 0 24 31.86c1.92 0 3.62-.46 4.97-1.31l4.79 3.71C31.14 36.7 27.65 38 24 38c-5.93 0-11.01-3.4-13.45-8.36l.17-1.01 4.06-2.85h.8z" fill="#34A853" />
    <path d="M15.59 20.21a8.864 8.864 0 0 0 0 5.58l-5.03 3.86c-.98-2-1.53-4.25-1.53-6.64 0-2.39.55-4.64 1.53-6.64l1-.22 3.81 2.98.22 1.08z" fill="#FBBC05" />
    <path d="M24 14.14c2.11 0 4.02.75 5.52 1.98l4.36-4.36C31.22 9.43 27.81 8 24 8c-5.93 0-11.01 3.4-13.45 8.36l5.03 3.85A8.86 8.86 0 0 1 24 14.14z" fill="#EA4335" />
    <radialGradient id="aa" cx="298.159" cy="-106.681" gradientTransform="translate(-264.667 105.437) scale(.917)" gradientUnits="userSpaceOnUse" r="47.683"><stop offset="0" stop-color="#fff" /><stop offset="1" stop-color="#fff" stop-opacity="0" /></radialGradient>
    <circle cx="24" cy="23" fill="url(#aa)" fill-opacity=".1" r="22" />
  </svg>

  <svg
    v-else-if="props.tool === 'Google Ads'"
    :width="resolvedSize"
    :height="resolvedSize"
    :role="ariaRole"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <g>
      <g>
        <rect x="8" y="62.52" transform="matrix(0.5 -0.866 0.866 0.5 -46.2127 103.666)" fill="#FBBC04" width="117.33" height="58.67" />
        <path fill="#4285F4" d="M180.07,127.99L121.4,26.38c-8.1-14.03-26.04-18.84-40.07-10.74c-14.03,8.1-18.84,26.04-10.74,40.07l58.67,101.61c8.1,14.03,26.04,18.83,40.07,10.74C183.36,159.96,188.16,142.02,180.07,127.99z" />
        <circle fill="#34A853" cx="37.34" cy="142.66" r="29.33" />
      </g>
      <rect fill="none" width="192" height="192" />
    </g>
  </svg>

  <svg
    v-else-if="props.tool === 'Google Analytics'"
    :width="resolvedSize"
    :height="resolvedSize"
    :role="ariaRole"
    :aria-hidden="ariaHidden"
    :aria-label="ariaLabel"
    viewBox="0 0 192 192"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
  >
    <rect x="0" y="0" fill="none" width="192" height="192" />
    <g>
      <g>
        <path fill="#F9AB00" d="M130,29v132c0,14.77,10.19,23,21,23c10,0,21-7,21-23V30c0-13.54-10-22-21-22S130,17.33,130,29z" />
      </g>
      <g>
        <path fill="#E37400" d="M75,96v65c0,14.77,10.19,23,21,23c10,0,21-7,21-23V97c0-13.54-10-22-21-22S75,84.33,75,96z" />
      </g>
      <g>
        <circle fill="#E37400" cx="41" cy="163" r="21" />
      </g>
    </g>
  </svg>
</template>

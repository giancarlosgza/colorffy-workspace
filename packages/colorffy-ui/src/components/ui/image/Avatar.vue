<script setup lang="ts">
import type { IAvatarProps } from '@/types/avatar'
import { computed, ref } from 'vue'

/** Props */
const props = withDefaults(defineProps<IAvatarProps>(), {
  src: '',
  alt: 'Avatar',
  size: 'sm',
  initials: null,
  maskShape: null,
  maskStretch: false,
  status: null
})

/** Data */
const imageError = ref(false)

/** Computed */
const avatarClasses = computed(() => {
  const classes = ['img-avatar']
  if (props.size) {
    classes.push(`avatar-${props.size}`)
  }
  if (props.maskShape) {
    classes.push('mask-shape', `shape-${props.maskShape}`)
    if (props.maskStretch) {
      classes.push('shape-stretch')
    }
  }
  return classes
})
const placeholderClasses = computed(() => {
  const classes = ['img-avatar', 'avatar-placeholder']
  if (props.size) {
    classes.push(`avatar-${props.size}`)
  }
  if (props.maskShape) {
    classes.push('mask-shape', `shape-${props.maskShape}`)
    if (props.maskStretch) {
      classes.push('shape-stretch')
    }
  }
  return classes
})
const initialsAvatarClasses = computed(() => {
  const classes = ['img-avatar', 'initials-avatar']
  if (props.size) {
    classes.push(`avatar-${props.size}`)
  }
  if (props.maskShape) {
    classes.push('mask-shape', `shape-${props.maskShape}`)
    if (props.maskStretch) {
      classes.push('shape-stretch')
    }
  }
  return classes
})
const statusWrapperClasses = computed(() => {
  const classes = ['avatar-status-wrapper']
  if (props.maskShape) {
    classes.push('avatar-status-masked')
  }
  return classes
})
const statusDotClasses = computed(() => {
  return ['avatar-status', `avatar-status-${props.status}`]
})

/** Methods */
function handleImageError() {
  imageError.value = true
}
</script>

<template>
  <!-- Status avatar: wrapped so the dot escapes mask-shape clipping -->
  <span
    v-if="status"
    :class="statusWrapperClasses"
  >
    <!-- Initial Avatar -->
    <span
      v-if="initials"
      :class="initialsAvatarClasses"
    >
      {{ initials }}
    </span>

    <!-- Image Avatar -->
    <img
      v-else-if="src && !imageError"
      :src="src"
      :class="avatarClasses"
      :alt="alt"
      @error="handleImageError"
    >
    <!-- Placeholder Avatar -->
    <div
      v-else
      :class="placeholderClasses"
    />

    <!-- Status dot -->
    <span
      :class="statusDotClasses"
      role="img"
      :aria-label="status"
    />
  </span>

  <!-- Default markup, unchanged when no status is set. Kept as a direct -->
  <!-- v-else-if chain (no <template> wrapper) so Vue still treats the -->
  <!-- component as single-root and inherits fallthrough attrs like class -->
  <!-- Initial Avatar -->
  <span
    v-else-if="initials"
    :class="initialsAvatarClasses"
  >
    {{ initials }}
  </span>

  <!-- Image Avatar -->
  <img
    v-else-if="src && !imageError"
    :src="src"
    :class="avatarClasses"
    :alt="alt"
    @error="handleImageError"
  >
  <!-- Placeholder Avatar -->
  <div
    v-else
    :class="placeholderClasses"
  />
</template>

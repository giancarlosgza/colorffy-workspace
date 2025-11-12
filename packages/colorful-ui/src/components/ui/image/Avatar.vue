<script setup lang="ts">
import type { IAvatarProps } from '@/types/avatar'
import { computed, ref } from 'vue'

/** Props */
const props = withDefaults(defineProps<IAvatarProps>(), {
  src: '',
  size: 'sm',
  initials: null,
  maskShape: null,
  maskStretch: false
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

/** Methods */
function handleImageError() {
  imageError.value = true
}
</script>

<template>
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
    alt="Avatar"
    @error="handleImageError"
  >
  <!-- Placeholder Avatar -->
  <div
    v-else
    :class="placeholderClasses"
  />
</template>

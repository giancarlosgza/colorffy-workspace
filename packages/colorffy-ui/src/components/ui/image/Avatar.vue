<script setup lang="ts">
import type { IAvatarProps } from '@/types/avatar'
import { computed, ref } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<IAvatarProps>(), {
  src: '',
  size: 'sm',
  initials: null,
  maskShape: null,
  maskStretch: false,
  status: null,
  color: null,
  variant: null
})

/** Labels */
const l10n = useLabels('avatar')

/** Data */
const imageError = ref(false)

/** Computed */
const altText = computed(() => props.alt ?? l10n.value.alt)
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
  if (props.color) {
    classes.push(`avatar-${props.color}`)
  }
  if (props.variant && props.variant !== 'transparent') {
    classes.push(`avatar-${props.variant}`)
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
  if (props.color) {
    classes.push(`avatar-${props.color}`)
  }
  if (props.variant && props.variant !== 'transparent') {
    classes.push(`avatar-${props.variant}`)
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
  <!-- Status avatar, wrapped so the dot escapes the mask clipping -->
  <span
    v-if="status"
    :class="statusWrapperClasses"
  >
    <!-- Image avatar -->
    <img
      v-if="src && !imageError"
      :src="src"
      :class="avatarClasses"
      :alt="altText"
      @error="handleImageError"
    >

    <!-- Initials avatar -->
    <span
      v-else-if="initials"
      :class="initialsAvatarClasses"
    >
      {{ initials }}
    </span>
    <!-- Placeholder avatar -->
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

  <!-- A v-else-if chain without a wrapper keeps the component single-root -->
  <!-- Image avatar -->
  <img
    v-else-if="src && !imageError"
    :src="src"
    :class="avatarClasses"
    :alt="altText"
    @error="handleImageError"
  >

  <!-- Initials avatar -->
  <span
    v-else-if="initials"
    :class="initialsAvatarClasses"
  >
    {{ initials }}
  </span>

  <!-- Placeholder avatar -->
  <div
    v-else
    :class="placeholderClasses"
  />
</template>

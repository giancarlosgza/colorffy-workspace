<script setup lang="ts">
import type { INavbarAvatarProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarAvatarProps>(), {
  src: null,
  alt: 'User avatar',
  size: 'navbar',
  customClass: null
})

/** Emits */
defineEmits<{
  click: []
}>()
</script>

<template>
  <span
    class="nav-link avatar-link"
    :class="[
      { 'p-2': size === 'sm' },
      customClass
    ]"
    role="button"
    @click="$emit('click')"
  >
    <img
      v-if="src"
      :src="src"
      class="img-fluid img-avatar"
      :class="{
        'avatar-sm': size === 'sm',
        'avatar-navbar': size === 'navbar'
      }"
      :alt="alt"
    >
    <span
      v-else
      class="img-avatar avatar-placeholder"
      :class="{
        'avatar-sm': size === 'sm',
        'avatar-navbar': size === 'navbar'
      }"
    />
  </span>
</template>

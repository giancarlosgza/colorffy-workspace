<script setup lang="ts">
import type { INavbarAvatarEmits, INavbarAvatarProps } from '@/types/navbar'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<INavbarAvatarProps>(), {
  src: null,
  size: 'navbar',
  customClass: null
})

/** Emits */
defineEmits<INavbarAvatarEmits>()
/** Labels */
const l10n = useLabels('navbar')
const altText = computed(() => props.alt ?? l10n.value.avatarAlt)
</script>

<template>
  <span
    class="nav-link avatar-link"
    :class="[
      { 'p-2': size === 'sm' },
      customClass,
    ]"
    role="button"
    tabindex="0"
    :aria-label="altText"
    @click="$emit('click')"
    @keydown.enter.prevent="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <img
      v-if="src"
      :src="src"
      class="img-fluid img-avatar"
      :class="{
        'avatar-sm': size === 'sm',
        'avatar-navbar': size === 'navbar',
      }"
      :alt="altText"
    >
    <span
      v-else
      class="img-avatar avatar-placeholder"
      :class="{
        'avatar-sm': size === 'sm',
        'avatar-navbar': size === 'navbar',
      }"
    />
  </span>
</template>

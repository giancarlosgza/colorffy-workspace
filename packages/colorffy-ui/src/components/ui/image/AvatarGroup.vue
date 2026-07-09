<script setup lang="ts">
import type { IAvatarGroupProps } from '@/types/avatar'
import { computed } from 'vue'
import UiAvatar from './Avatar.vue'

/** Props */
const props = withDefaults(defineProps<IAvatarGroupProps>(), {
  avatars: () => [],
  max: undefined,
  size: 'sm',
  customClass: null
})

/** Computed */
const avatarGroupClasses = computed(() => {
  const classes: (string | string[] | Record<string, boolean>)[] = ['avatar-group']

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
// Avatars actually rendered once `max` truncates the list
const visibleAvatars = computed(() => {
  if (!props.avatars?.length)
    return []

  return props.max ? props.avatars.slice(0, props.max) : props.avatars
})
// Remaining count collapsed into the "+N" overflow avatar
const overflowCount = computed(() => {
  if (!props.avatars?.length || !props.max)
    return 0

  return Math.max(props.avatars.length - props.max, 0)
})
const overflowClasses = computed(() => {
  const classes = ['img-avatar', 'initials-avatar', 'avatar-group-overflow']

  if (props.size)
    classes.push(`avatar-${props.size}`)

  return classes
})
</script>

<template>
  <div :class="avatarGroupClasses">
    <!-- Avatars built from the `avatars` prop -->
    <template v-if="avatars && avatars.length">
      <UiAvatar
        v-for="(avatar, index) in visibleAvatars"
        :key="avatar.initials ?? avatar.src ?? index"
        v-bind="avatar"
        :size="avatar.size ?? size"
      />
      <span
        v-if="overflowCount > 0"
        :class="overflowClasses"
      >+{{ overflowCount }}</span>
    </template>

    <!-- Avatars composed directly via the default slot -->
    <slot v-else />
  </div>
</template>

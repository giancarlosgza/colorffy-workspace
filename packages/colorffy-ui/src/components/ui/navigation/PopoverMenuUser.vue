<script setup lang="ts">
import type { IPopoverMenuUserProps } from '@/types/navigation'
import { computed } from 'vue'

/** Props */
const props = withDefaults(defineProps<IPopoverMenuUserProps>(), {
  user: null,
  displayName: null,
  email: null,
  photoUrl: null,
  alt: null,
  avatarClass: null,
  customClass: null
})

/** Computed */
const name = computed(() => props.displayName ?? props.user?.displayName ?? null)
const mail = computed(() => props.email ?? props.user?.email ?? null)
const photo = computed(() => props.photoUrl ?? props.user?.photoURL ?? null)
const photoAlt = computed(() => props.alt ?? `${name.value || 'Account'} profile photo`)
</script>

<template>
  <div
    class="popover-menu-user"
    :class="customClass"
  >
    <!-- Avatar -->
    <slot name="avatar">
      <img
        v-if="photo"
        :src="photo"
        class="img-fluid img-avatar avatar-menu"
        :class="avatarClass"
        :alt="photoAlt"
      >
      <span
        v-else
        class="img-avatar avatar-placeholder avatar-menu"
        :class="avatarClass"
      />
    </slot>

    <div class="popover-menu-user-content">
      <slot>
        <p
          v-if="name"
          class="subtitle-1 text-truncate"
          :title="name"
        >
          {{ name }}
        </p>
        <p
          v-if="mail"
          class="subtitle-2 text-truncate"
          :title="mail"
        >
          {{ mail }}
        </p>
      </slot>
    </div>

    <!-- Trailing -->
    <span
      v-if="$slots.trailing"
      class="popover-menu-user-trailing"
    >
      <slot name="trailing" />
    </span>
  </div>
</template>

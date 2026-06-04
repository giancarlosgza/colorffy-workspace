<script setup lang="ts">
import type { IButtonMenuItemProps } from '@/types/button'
import { computed } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IButtonMenuItemProps>(), {
  itemText: '',
  icon: null,
  iconStyle: null,
  iconClass: null,
  isDestructive: false,
  disabled: false,
  customClass: null,
  badge: null,
  shortcut: null,
  iconTrailing: null,
  iconTrailingStyle: null,
  iconTrailingClass: null
})

/** Computed */
const itemClasses = computed(() => {
  const classes = []

  if (props.isDestructive)
    classes.push('v-danger')

  if (props.disabled)
    classes.push('v-disabled')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <li>
    <button
      class="v-dropdown-item"
      :class="itemClasses"
      :disabled="disabled"
    >
      <span class="v-dropdown-item-primary">
        <!-- Leading Icon & Text -->
        <UiIconMaterial
          v-if="icon"
          :icon-code="icon"
          :class="iconClass"
          :style="iconStyle"
        />
        {{ itemText }}
      </span>

      <span
        v-if="badge || shortcut || iconTrailing"
        class="v-dropdown-item-secondary"
      >
        <!-- Badge -->
        <UiBadge
          v-if="badge"
          size="sm"
          :variant="badge.variant"
          :text="badge.text"
          :icon-code="badge.iconCode"
          :icon-class="badge.iconClass"
          :icon-style="badge.iconStyle"
          :pill="badge.pill"
          :custom-class="badge.customClass"
        />

        <!-- Shortcut -->
        <span v-if="shortcut">
          {{ shortcut }}
        </span>

        <!-- Icon Trailing -->
        <UiIconMaterial
          v-if="iconTrailing"
          :icon-code="iconTrailing"
          :class="iconTrailingClass"
          :style="iconTrailingStyle"
        />
      </span>
    </button>
  </li>
</template>

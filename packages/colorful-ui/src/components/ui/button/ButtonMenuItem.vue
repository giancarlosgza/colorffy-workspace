<script setup lang="ts">
import { computed } from 'vue'
import type { IBadgeProps } from '@/types/badge'
import UiIconMaterial from '../icon/Material.vue'
import UiBadge from '../badge/Badge.vue'

/** Interfaces */
interface IButtonMenuItemProps {
  itemText?: string
  icon?: string | null
  iconStyle?: string | Record<string, any> | null
  iconClass?: string | string[] | null
  isDestructive?: boolean
  disabled?: boolean
  customClass?: string | string[] | null
  badge?: Partial<IBadgeProps> | null
  shortcut?: string | null
}

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
  shortcut: null
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
        <UiIconMaterial
          v-if="icon"
          :icon-code="icon"
          :class="iconClass"
          :style="iconStyle"
        />
        {{ itemText }}
      </span>
      <span v-if="badge || shortcut" class="v-dropdown-item-secondary">
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
        <span v-if="shortcut">
          {{ shortcut }}
        </span>
      </span>
    </button>
  </li>
</template>

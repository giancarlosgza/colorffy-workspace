<script setup lang="ts">
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface IButtonMenuItemProps {
  itemText?: string
  icon?: string
  iconStyle?: string | Record<string, any> | null
  iconClass?: string | string[] | null
  isDestructive?: boolean
  disabled?: boolean
  customClass?: string | string[] | null
  badge?: Record<string, any> | null
}

/** Props */
const props = withDefaults(defineProps<IButtonMenuItemProps>(), {
  itemText: '',
  icon: '&#xe3c9;',
  iconStyle: null,
  iconClass: null,
  isDestructive: false,
  disabled: false,
  customClass: null,
  badge: null
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
      <UiIconMaterial
        :icon-code="icon"
        :class="iconClass"
        :style="iconStyle"
      />
      {{ itemText }}
      <span
        v-if="badge"
        class="badge badge-sm"
        :class="badge.class"
      >
        {{ badge.text }}
      </span>
    </button>
  </li>
</template>

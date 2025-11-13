<script setup lang="ts">
import type { IListItemProps } from '@/types/list'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IListItemProps>(), {
  title: null,
  text: null,
  icon: null,
  active: false,
  disabled: false,
  customClass: null
})

/** Computed */
const itemClasses = computed(() => {
  const classes: any[] = []

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass)
  }

  if (props.active)
    classes.push('list-item-active')

  if (props.disabled)
    classes.push('list-item-disabled')

  return classes
})
</script>

<template>
  <li
    class="list-group-item"
    :class="itemClasses"
    :aria-disabled="disabled || undefined"
  >
    <div class="list-item">
      <!-- Icon -->
      <div
        v-if="icon"
        class="list-item-icon-wrapper"
      >
        <UiIconMaterial :icon-code="icon || ''" />
      </div>

      <!-- Support text -->
      <div>
        <p
          v-if="title"
          class="subtitle-1"
          v-text="title"
        />
        <p
          v-if="text"
          class="subtitle-2"
          v-text="text"
        />
      </div>
    </div>
  </li>
</template>

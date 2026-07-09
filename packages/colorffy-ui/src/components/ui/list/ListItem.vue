<script setup lang="ts">
import type { IListItemProps } from '@/types/list'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IListItemProps>(), {
  title: null,
  text: null,
  icon: null,
  imageUrl: null,
  imageAlt: null,
  active: false,
  disabled: false,
  customClass: null,
  customIconWrapperClass: null,
  customIconClass: null,
  customImageClass: null,
  hasActions: false
})

/** Computed */
const itemClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []

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

  if (props.hasActions)
    classes.push('list-item-undecorated')

  return classes
})
const iconWrapperClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = ['list-item-icon-wrapper']

  if (props.customIconWrapperClass) {
    if (Array.isArray(props.customIconWrapperClass))
      classes.push(...props.customIconWrapperClass)
    else
      classes.push(props.customIconWrapperClass)
  }

  return classes
})
const iconClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []

  if (props.customIconClass) {
    if (Array.isArray(props.customIconClass))
      classes.push(...props.customIconClass)
    else
      classes.push(props.customIconClass)
  }

  return classes
})
const imageClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = ['list-item-image']

  if (props.customImageClass) {
    if (Array.isArray(props.customImageClass))
      classes.push(...props.customImageClass)
    else
      classes.push(props.customImageClass)
  }

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
      <!-- Media slot (replaces the image/icon area) -->
      <slot name="media">
        <!-- Image (takes precedence over icon) -->
        <img
          v-if="imageUrl"
          :class="imageClasses"
          :src="imageUrl"
          :alt="imageAlt ?? ''"
        >

        <!-- Icon -->
        <div
          v-else-if="icon"
          :class="iconWrapperClasses"
        >
          <UiIconMaterial
            :icon-code="icon"
            :class="iconClasses"
          />
        </div>
      </slot>

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

    <!-- Actions slot -->
    <div
      v-if="hasActions"
      class="list-item-actions"
    >
      <slot name="list-action" />
    </div>
  </li>
</template>

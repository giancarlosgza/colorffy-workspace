<script setup lang="ts">
import type { IAlertProps } from '@/types/alert'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IAlertProps>(), {
  type: 'banner',
  variant: 'danger',
  critical: false,
  size: undefined,
  customClass: undefined
})

/** Computed */
const alertClasses = computed(() => {
  const classes = []

  if (props.type)
    classes.push(`alert-${props.type}`)

  if (props.variant)
    classes.push(`${props.type}-${props.variant}`)

  if (props.size === 'sm')
    classes.push('alert-sm')

  if (props.critical)
    classes.push('alert-critical')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div class="alert-container">
    <div
      class="alert"
      role="alert"
      :class="alertClasses"
    >
      <!-- Content -->
      <div class="alert-content">
        <!-- Icon -->
        <UiIconMaterial v-if="variant === 'success'" icon-code="&#xe86c;" />
        <UiIconMaterial v-else-if="variant === 'warning'" icon-code="&#xe002;" />
        <UiIconMaterial v-else-if="variant === 'default'" icon-code="&#xe88e;" />
        <UiIconMaterial v-else-if="variant === 'danger'" icon-code="&#xe160;" />
        <UiIconMaterial v-else-if="variant === 'primary' || variant === 'secondary' || variant === 'accent' || variant === 'neutral'" icon-code="&#xe88e;" />

        <!-- Text -->
        <div>
          <p
            v-if="title"
            class="alert-title"
          >
            {{ title }}
          </p>
          <p v-if="message">
            {{ message }}
          </p>
          <slot name="message" />
        </div>
      </div>

      <!-- Actions -->
      <div>
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

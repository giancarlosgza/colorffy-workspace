<script setup lang="ts">
import type { IAlertProps } from '@/types/alert'
import { computed } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IAlertProps>(), {
  type: 'banner',
  variant: 'danger',
  critical: false,
  rounded: false,
  placement: 'bottom',
  size: undefined,
  customClass: undefined
})

/** Computed */
const alertContainerClasses = computed(() => {
  const classes = []
  if (props.type === 'snackbar' && props.placement) {
    const p = props.placement.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    classes.push(`placement-${p}`)
  }
  return classes
})
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

  if (props.rounded)
    classes.push('alert-rounded')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})
</script>

<template>
  <div
    class="alert-container"
    :class="alertContainerClasses"
  >
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
        <UiIconMaterial
          v-else-if="variant === 'primary' || variant === 'secondary' || variant === 'accent' || variant === 'neutral' || variant === 'info'"
          icon-code="&#xe88e;"
        />

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
          <slot name="content" />
        </div>
      </div>

      <!-- Actions -->
      <div>
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

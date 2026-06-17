<script setup lang="ts">
import type { AlertPlacement, AlertVariant, IAlertToastProps, IToastOptions } from '@/types/alert'
import { onBeforeUnmount, ref } from 'vue'
import UiAlert from './Alert.vue'

/** Props */
const props = withDefaults(defineProps<IAlertToastProps>(), {
  snackbarTitle: null,
  snackbarMessage: null,
  snackbarVariant: 'success',
  placement: 'bottom'
})

const title = ref<string>(props.snackbarTitle ?? '')
const message = ref<string>(props.snackbarMessage ?? '')
const variant = ref<AlertVariant>(props.snackbarVariant as AlertVariant ?? 'success')
const placement = ref<AlertPlacement>(props.placement ?? 'bottom')
const isVisible = ref<boolean>(false)

/** Methods */
let hideTimer: ReturnType<typeof setTimeout> | null = null

function showToast(options?: IToastOptions) {
  if (options) {
    if (options.message)
      message.value = options.message
    if (options.variant)
      variant.value = options.variant
    if (options.placement)
      placement.value = options.placement
  }
  isVisible.value = true

  // Reset any in-flight hide timer so re-showing the toast restarts the full
  // duration instead of being cut short by a previous call's timer.
  if (hideTimer)
    clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    isVisible.value = false
    hideTimer = null
  }, 3000)
}

onBeforeUnmount(() => {
  if (hideTimer)
    clearTimeout(hideTimer)
})

defineExpose({
  title,
  message,
  variant,
  placement,
  showToast
})
</script>

<template>
  <Transition name="slide-block" mode="out-in">
    <UiAlert
      v-if="isVisible"
      :title="title"
      :message="message"
      :variant="variant"
      :placement="placement"
      type="snackbar"
    />
  </Transition>
</template>

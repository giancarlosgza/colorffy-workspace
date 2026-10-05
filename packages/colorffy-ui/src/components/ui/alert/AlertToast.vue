<script setup lang="ts">
import type { AlertPlacement, AlertVariant, IAlertToastProps, IToastOptions } from '@/types/alert'
import { onBeforeUnmount, ref } from 'vue'
import UiAlert from './Alert.vue'

/** Props */
const props = withDefaults(defineProps<IAlertToastProps>(), {
  snackbarTitle: '',
  snackbarMessage: '',
  snackbarVariant: 'success',
  placement: 'bottom'
})

/** Data */
const title = ref<string>(props.snackbarTitle ?? '')
const message = ref<string>(props.snackbarMessage ?? '')
const variant = ref<AlertVariant>(props.snackbarVariant as AlertVariant ?? 'success')
const placement = ref<AlertPlacement>(props.placement ?? 'bottom')
const isVisible = ref<boolean>(false)
let hideTimer: ReturnType<typeof setTimeout> | null = null

/** Methods */
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

  if (hideTimer)
    clearTimeout(hideTimer)
  hideTimer = setTimeout(() => {
    isVisible.value = false
    hideTimer = null
  }, options?.duration ?? 3000)
}

/** Lifecycle */
onBeforeUnmount(() => {
  if (hideTimer)
    clearTimeout(hideTimer)
})

/** Expose */
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

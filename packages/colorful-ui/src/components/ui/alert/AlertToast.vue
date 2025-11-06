<script setup lang="ts">
import type { AlertVariant } from '@/types/alert'
import { ref } from 'vue'
import UiAlert from './Alert.vue'

/** Interfaces */
interface IAlertToastProps {
  snackbarTitle?: string | null
  snackbarMessage?: string | null
  snackbarVariant?: AlertVariant
}

/** Props */
const props = withDefaults(defineProps<IAlertToastProps>(), {
  snackbarTitle: null,
  snackbarMessage: null,
  snackbarVariant: 'success'
})

const title = ref<string>(props.snackbarTitle ?? '')
const message = ref<string>(props.snackbarMessage ?? '')
const variant = ref<AlertVariant>(props.snackbarVariant as AlertVariant ?? 'success')
const isVisible = ref<boolean>(false)

/** Methods */
function showToast() {
  isVisible.value = true

  setTimeout(() => {
    isVisible.value = false
  }, 3000)
}

defineExpose({
  title,
  message,
  variant,
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
      type="snackbar"
    />
  </Transition>
</template>

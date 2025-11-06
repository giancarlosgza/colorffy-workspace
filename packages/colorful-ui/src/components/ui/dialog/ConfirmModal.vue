<script setup lang="ts">
import type { IDialogProps } from '@/types/dialog'
import { vOnClickOutside } from '@vueuse/components'
import { computed, ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Interfaces */
interface IConfirmModalProps extends IDialogProps {
  isLoading?: boolean
  loadingLabel?: string
}

/** Props */
const props = withDefaults(defineProps<IConfirmModalProps>(), {
  showAsModal: true,
  mode: undefined,
  size: undefined,
  title: null,
  message: null,
  confirmLabel: 'Delete',
  isLoading: false,
  loadingLabel: 'Deleting...',
  variant: 'danger',
  customClass: null
})

/** Emits */
const emit = defineEmits(['confirm'])

/** Data */
const dialogRef = ref<HTMLDialogElement | null>(null)
const dialogClasses = computed(() => {
  const classes: any[] = ['dialog-confirm']

  // Modes
  if (props.mode) {
    if (props.mode === 'modal') {
      classes.push('dialog-modal')
    }
    if (props.mode === 'side-sheet') {
      classes.push('dialog-side-sheet')
    }
    if (props.mode === 'headless') {
      classes.push('dialog-headless')
    }
  } else {
    classes.push('dialog-modal')
  }

  // Sizes
  if (props.size) {
    if (props.size === 'sm') {
      classes.push('dialog-sm')
    }
    if (props.size === 'lg') {
      classes.push('dialog-lg')
    }
  }

  if (props.customClass) {
    if (Array.isArray(props.customClass)) {
      classes.push(...props.customClass)
    } else {
      classes.push(props.customClass as any)
    }
  }

  return classes
})

/** Computed */
const variantClass = computed(() => {
  let cssClass
  let icon

  switch (props.variant) {
    case 'danger':
      cssClass = 'text-danger'
      icon = '&#xe872;'
      break
    case 'warning':
      cssClass = 'text-warning'
      icon = '&#xe002;'
      break
    case 'success':
      cssClass = 'text-success'
      icon = '&#xe86c;'
      break
    case 'primary':
      cssClass = 'text-primary'
      icon = '&#xe88e;'
      break
    default:
      cssClass = 'text-muted'
      icon = '&#xe872;'
      break
  }

  return { cssClass, icon }
})
const buttonClass = computed(() => {
  const classes = []

  if (props.variant)
    classes.push(`filled-${props.variant}`)

  return classes
})

/** Methods */
function showDialog() {
  if (dialogRef.value) {
    if (props.showAsModal)
      dialogRef.value.showModal()
    else
      dialogRef.value.show()
  }
}
function closeDialog() {
  dialogRef?.value?.close()
}

defineExpose({
  showDialog,
  closeDialog
})
</script>

<template>
  <dialog
    ref="dialogRef"
    class="dialog"
    :class="dialogClasses"
    role="dialog"
    aria-modal="true"
  >
    <div
      v-on-click-outside="closeDialog"
      class="dialog-content"
    >
      <div class="dialog-body">
        <UiIconMaterial
          class="iw-bold"
          :class="variantClass.cssClass"
          :icon-code="variantClass.icon"
        />
        <p
          v-if="title"
          class="subtitle-1 mb-3"
        >
          {{ title }}
        </p>
        <p
          v-if="message"
          class="subtitle-1 text-muted"
        >
          {{ message }}
        </p>
        <slot name="messages" />
      </div>
      <div class="dialog-footer">
        <UiButton
          variant="text"
          text="Cancel"
          @click="closeDialog"
        />
        <UiButton
          variant="filled"
          :class="buttonClass"
          :text="confirmLabel"
          :loading="isLoading"
          :disabled="isLoading"
          @click="emit('confirm')"
        />
      </div>
    </div>
  </dialog>
</template>

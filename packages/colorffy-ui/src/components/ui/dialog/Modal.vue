<script setup lang="ts">
import type { IDialogProps } from '@/types/dialog'
import { vOnClickOutside } from '@vueuse/components'
import { computed, ref } from 'vue'

/** Props */
const props = withDefaults(defineProps<IDialogProps>(), {
  showAsModal: true,
  mode: undefined,
  size: undefined,
  customClass: null,
  bodyDialogClass: null
})

/** Emits */
const emit = defineEmits(['onCloseDialog'])

/** Data */
const dialogRef = ref<HTMLDialogElement | null>(null)
const dialogClasses = computed(() => {
  const classes = [] as any[]

  // Modes
  if (props.mode) {
    if (props.mode === 'side-sheet') {
      classes.push('dialog-side-sheet')
    } else if (props.mode === 'headless') {
      classes.push('dialog-modal dialog-headless')
    } else {
      classes.push('dialog-modal')
    }
  } else {
    classes.push('dialog-modal')
  }

  // Sizes
  if (props.size) {
    if (props.size === 'sm')
      classes.push('dialog-sm')
    if (props.size === 'lg')
      classes.push('dialog-lg')
  }

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass as any)
  }

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
  emit('onCloseDialog')
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
      <div class="dialog-header">
        <slot name="header" />
      </div>
      <div class="dialog-body" :class="props.bodyDialogClass">
        <slot name="body" />
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>

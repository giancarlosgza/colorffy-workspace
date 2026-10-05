<script setup lang="ts">
import type { IDialogEmits, IDialogProps } from '@/types/dialog'
import { vOnClickOutside } from '@vueuse/components'
import { computed, ref } from 'vue'

/** Props */
const props = withDefaults(defineProps<IDialogProps>(), {
  showAsModal: true,
  closeOnClickOutside: true,
  mode: undefined,
  size: undefined,
  customClass: null,
  bodyDialogClass: null
})

/** Emits */
const emit = defineEmits<IDialogEmits>()

/** Data */
const dialogRef = ref<HTMLDialogElement | null>(null)
const dialogClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = []

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
    if (props.size === 'md')
      classes.push('dialog-md')
    if (props.size === 'lg')
      classes.push('dialog-lg')
    if (props.size === 'fullscreen')
      classes.push('dialog-fullscreen')
  }

  if (props.customClass) {
    if (Array.isArray(props.customClass))
      classes.push(...props.customClass)
    else
      classes.push(props.customClass)
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
    // A reopened dialog starts at the top; a hidden dialog can't be scrolled, so this runs once it shows
    dialogRef.value.querySelector('.dialog-body')?.scrollTo(0, 0)
    focusMarkedField(dialogRef.value)
  }
}
// Browsers only autofocus a focusable element, so `autofocus` on a field component focuses its control
function focusMarkedField(dialog: HTMLDialogElement) {
  const marked = dialog.querySelector<HTMLElement>('[autofocus]')
  if (marked && !marked.contains(document.activeElement))
    marked.querySelector<HTMLElement>('input:not([type="hidden"]), select, textarea, button, [tabindex]:not([tabindex="-1"])')?.focus()
}
// The native close event emits `close`, so Esc and form[method=dialog] report it too
function closeDialog() {
  dialogRef.value?.close()
}
function closeFromOutside() {
  if (props.closeOnClickOutside && dialogRef.value?.open)
    closeDialog()
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
    @close="emit('close')"
  >
    <!-- Menus and tooltips opened from the dialog render outside this box -->
    <div
      v-on-click-outside="[closeFromOutside, { ignore: ['.v-popper__popper'] }]"
      class="dialog-content"
    >
      <div class="dialog-header">
        <slot name="header">
          <p
            v-if="title"
            class="dialog-title"
          >
            {{ title }}
          </p>
        </slot>
      </div>
      <div
        class="dialog-body"
        :class="props.bodyDialogClass"
      >
        <slot name="body">
          <p
            v-if="message"
            class="mb-0"
          >
            {{ message }}
          </p>
        </slot>
      </div>
      <div class="dialog-footer">
        <slot name="footer" />
      </div>
    </div>
  </dialog>
</template>

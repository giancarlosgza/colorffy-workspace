<script setup lang="ts">
import type { IConfirmModalEmits, IConfirmModalProps } from '@/types/dialog'
import { vOnClickOutside } from '@vueuse/components'
import { computed, ref } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IConfirmModalProps>(), {
  showAsModal: true,
  closeOnClickOutside: true,
  mode: undefined,
  size: undefined,
  title: null,
  message: null,
  isLoading: false,
  variant: 'danger',
  customClass: null
})

/** Emits */
const emit = defineEmits<IConfirmModalEmits>()

/** Labels */
const l10n = useLabels('confirmModal')

/** Data */
const dialogRef = ref<HTMLDialogElement | null>(null)

/** Computed */
const dialogClasses = computed(() => {
  const classes: (string | Record<string, boolean>)[] = ['dialog-confirm']

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
      classes.push(props.customClass)
    }
  }

  return classes
})
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
    // A hidden dialog can't scroll, so the reset runs once it shows
    dialogRef.value.querySelector('.dialog-body')?.scrollTo(0, 0)
  }
}
// The native close event emits `close`, so Esc reports it too
function closeDialog() {
  dialogRef.value?.close()
}
function closeFromOutside() {
  if (props.closeOnClickOutside && dialogRef.value?.open)
    closeDialog()
}

/** Expose */
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
          :text="cancelLabel ?? l10n.cancel"
          @click="closeDialog"
        />
        <UiButton
          variant="filled"
          :class="buttonClass"
          :text="isLoading ? loadingLabel ?? l10n.loading : confirmLabel ?? l10n.confirm"
          :loading="isLoading"
          :disabled="isLoading"
          @click="emit('confirm')"
        />
      </div>
    </div>
  </dialog>
</template>

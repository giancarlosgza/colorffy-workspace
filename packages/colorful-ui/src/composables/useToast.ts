import type { IAlertProps } from '@/types/alert'
import type { Ref } from 'vue'

type ToastVariant = NonNullable<IAlertProps['variant']>

interface ToastOptions {
  duration?: number // ms;
}

export function useToast(toast: Ref<IToastDisplay | null>) {
  function onToastMessage(variant: ToastVariant, message: string, _opts?: ToastOptions) {
    if (!toast.value)
      return

    toast.value.variant = variant
    toast.value.message = message
    toast.value.showToast()
  }

  // Convenience helpers
  const success = (message: string, opts?: ToastOptions) => onToastMessage('success', message, opts)
  const warning = (message: string, opts?: ToastOptions) => onToastMessage('warning', message, opts)
  const danger = (message: string, opts?: ToastOptions) => onToastMessage('danger', message, opts)

  return { onToastMessage, success, warning, danger }
}

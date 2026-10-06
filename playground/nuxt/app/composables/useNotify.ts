import type { AlertPlacement, AlertVariant, UiAlertToast } from '@colorffy/ui'
import { shallowRef } from 'vue'

// One toast lives in the default layout; pages call notify() to show it.
const toast = shallowRef<InstanceType<typeof UiAlertToast> | null>(null)

export function useNotify() {
  function register(instance: InstanceType<typeof UiAlertToast> | null): void {
    toast.value = instance
  }

  function notify(title: string, message: string, variant: AlertVariant = 'success', placement: AlertPlacement = 'bottom-right'): void {
    if (!toast.value)
      return
    toast.value.title = title
    toast.value.showToast({ variant, message, placement })
  }

  return { register, notify }
}

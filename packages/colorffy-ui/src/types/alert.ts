import type { ClassValue, ThemeColor } from '@/types/shared'

export type AlertType = 'banner' | 'tonal' | 'snackbar'
export type AlertVariant = ThemeColor | 'transparent' | 'default'
export type AlertSize = 'sm'
export type AlertPlacement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right'
export type AlertClassName = ClassValue
export interface IToastOptions {
  message?: string
  variant?: AlertVariant
  placement?: AlertPlacement
  /** Auto-hide delay in milliseconds. Defaults to 3000. */
  duration?: number
}

/**
 * Interface props for the Alert component.
 * Notes:
 * - Prefer optional props over explicit null unions.
 * - `type` controls surface (banner | tonal | snackbar), `variant` controls intent (primary | success | warning | danger | etc.).
 * - Use `size` for scalable sizing ('sm').
 */
export interface IAlertProps {
  /**
   * Optional title of the alert.
   */
  title?: string

  /**
   * Optional message of the alert.
   */
  message?: string

  /**
   * Surface style of the alert.
   */
  type?: AlertType

  /**
   * Variant color of the alert.
   */
  variant?: AlertVariant

  /**
   * Scalable size of the alert. Only 'sm' is supported.
   */
  size?: AlertSize

  /**
   * Marks the alert as critical.
   */
  critical?: boolean

  /**
   * Optional rounded style. When true, applies a fully rounded alert style.
   */
  rounded?: boolean

  /**
   * Placement configuration of the alert (only applicable when type is snackbar).
   */
  placement?: AlertPlacement

  /**
   * Custom classes to apply to the root element.
   */
  customClass?: AlertClassName

  /**
   * When true, renders a close button. Clicking it hides the alert and emits `dismiss`.
   */
  dismissible?: boolean

  /**
   * Auto-hide delay in milliseconds for non-snackbar alert types. When set, the alert
   * hides itself after this delay and emits `dismiss`. Snackbars manage their own
   * duration via `UiAlertToast`/`useToast`, so this is ignored when `type` is `snackbar`.
   */
  duration?: number

  /**
   * Accessible label for the close button (only rendered when `dismissible` is true).
   */
  closeLabel?: string
}

/**
 * Interface emits for the Alert component.
 */
export interface IAlertEmits {
  /**
   * Emitted when the alert is dismissed, either via the close button or the `duration` auto-hide timer.
   */
  (e: 'dismiss'): void
}

/**
 * Interface props for the AlertToast component.
 */
export interface IAlertToastProps {
  /**
   * Optional title of the toast.
   */
  snackbarTitle?: string

  /**
   * Optional message of the toast.
   */
  snackbarMessage?: string

  /**
   * Optional variant of the toast.
   */
  snackbarVariant?: AlertVariant

  /**
   * Placement of the toast (only applicable when type is snackbar).
   */
  placement?: AlertPlacement
}

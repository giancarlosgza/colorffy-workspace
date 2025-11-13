export type AlertType = 'banner' | 'tonal' | 'snackbar'
export type AlertVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'transparent' | 'default'
export type AlertSize = 'sm'
export type AlertClassName = string | string[] | Record<string, boolean>
export interface IToastOptions {
  message?: string
  variant?: AlertVariant
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
  size?: AlertSize | undefined

  /**
   * Marks the alert as critical.
   */
  critical?: boolean

  /**
   * Custom classes to apply to the root element.
   */
  customClass?: AlertClassName
}

/**
 * Exposed Toast display handle.
 * Use `showToast()` to open the toast; can accept options for quick overrides.
 */
declare interface IToastDisplay {
  /**
   * Show the toast. Optional inline overrides.
   */
  showToast: (options?: IToastOptions) => void

  /**
   * Default message for this toast instance.
   */
  message?: string

  /**
   * Default variant for this toast instance.
   */
  variant?: AlertVariant
}

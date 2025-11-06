export type DialogClassName = string | string[] | Record<string, boolean>
export type DialogMode = 'modal' | 'side-sheet' | 'headless'
export type DialogSize = 'sm' | 'md' | 'lg'
export type DialogVariant = 'danger' | 'warning' | 'success' | 'primary'

/**
 * Interface props for the Dialog component
 * Notes:
 * - Keep existing flags for backward compatibility.
 * - New additive prop `mode` is preferred going forward.
 */
export interface IDialogProps {
  /**
   * Optional dialogModal property of the Dialog component.
   * Can be a boolean indicating if the dialog is modal or not, or null.
   */
  showAsModal?: boolean | null

  /**
   * Legacy flag: when true, treat as a modal dialog.
   * Only applied when `mode` is not provided.
   */
  isModal?: boolean | null

  /**
   * Legacy flag: when true, render dialog as a side sheet.
   * Only applied when `mode` is not provided.
   */
  isSideSheet?: boolean | null

  /**
   * Optional isHeadless property of the Dialog component.
   * Can be a boolean indicating if the dialog is customizable or not, or null.
   */
  isHeadless?: boolean | null

  /**
   * Preferred way to describe the dialog shape.
   * When provided, it takes precedence over `isModal`, `isSideSheet`, and `isHeadless`.
   */
  mode?: DialogMode

  /**
   * Preferred size for the Dialog component.
   * When provided, it takes precedence over legacy `isSmall` and `isLarge` flags.
   */
  size?: DialogSize | null

  /**
   * Deprecated: use `size` instead.
   * Optional isSmall property of the Dialog component.
   * Can be a boolean indicating if the dialog is small or not, or null.
   */
  isSmall?: boolean | null

  /**
   * Deprecated: use `size` instead.
   * Optional isLarge property of the Dialog component.
   * Can be a boolean indicating if the dialog is large or not, or null.
   */
  isLarge?: boolean | null

  /**
   * Optional title text shown in the dialog header (if used by the template).
   */
  title?: string | null

  /**
   * Optional message text shown in the dialog body.
   */
  message?: string | null

  /**
   * Optional label for the primary confirm action (used by confirm-style dialogs).
   */
  confirmLabel?: string | null

  /**
   * Visual intent of the dialog; may affect colors and icons in specific implementations.
   */

  variant?: DialogVariant | null
  /**
   * Optional custom class for the dialog root.
   */
  customClass?: DialogClassName | null

  /**
   * Optional custom class for the dialog body element.
   */
  bodyDialogClass?: DialogClassName | null
}

export interface IDialogDisplay {
  /**
   * Open the dialog function
   */
  showDialog: () => void

  /**
   * Close the dialog function
   */
  closeDialog: () => void
}

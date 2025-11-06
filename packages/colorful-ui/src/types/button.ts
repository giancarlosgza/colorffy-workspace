export type ButtonClassName = string | string[] | Record<string, boolean>
export type ButtonVariant = 'filled' | 'tonal' | 'outline' | 'text' | 'link' | 'chip' | 'cta' | 'gradient' | 'frosted'
export type ButtonColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'transparent'
export type ButtonSizeLevel = 'sm' | 'md' | 'lg'

/**
 * Interface props for the Button component.
 * Notes:
 * - Use `variant` (filled | tonal | outline | text | link | chip | cta | gradient | frosted) for style and `color` (primary | warning | etc.) for intent.
 * - Preferred size prop: `size` ('sm' | 'md' | 'lg').
 * - Legacy composite `variant` strings remain accepted as a fallback; `sizeLevel` is kept for backward compatibility.
 */
export interface IButtonProps {
  /**
   * Optional ID of the button. Can be a string or null.
   */
  id?: string | null

  /**
   * Optional text of the button. Can be a string or null.
   */
  text?: string | null

  /**
   * Optional title of the button. Can be a string or null.
   */
  title?: string | null

  /**
   * Visual style. Prefer simple values like 'filled' | 'tonal' | 'outline'.
   * Legacy composite strings are still accepted for backward compatibility.
   */
  variant: ButtonVariant | string | undefined

  /**
   * Semantic color used with certain variants (e.g., 'filled' or 'tonal').
   */
  color?: ButtonColor | string | undefined

  /**
   * Preferred size alias.
   * Accepts logical sizes ('sm' | 'md' | 'lg'). Legacy class strings are also accepted for compatibility.
   */
  size?: ButtonSizeLevel | string | undefined

  /**
   * Optional icon variant of the button. Can be 'shape-sm', 'shape-md', 'compact-sm', 'compact', or undefined.
   */
  iconVariant?: 'shape-sm' | 'shape-md' | 'compact-sm' | 'compact' | undefined

  /**
   * Icon-only mode toggle. When true, renders the button with icon styles (no label required).
   */
  icon?: boolean

  /**
   * Places the icon on the trailing side when true. Defaults to leading when false.
   */
  iconTrailing?: boolean

  /**
   * Optional disabled state of the button. Can be a boolean.
   */
  disabled?: boolean

  /**
   * Optional loading state of the button. Can be a boolean. When true, shows a loading spinner.
   */
  loading?: boolean

  /**
   * Optional tooltip text of the button. Can be a string or null.
   */
  tooltipText?: string | null

  /**
   * Optional custom class for the button. Can be an array or null.
   */
  customClass?: ButtonClassName | null

  /**
   * Optional rounded style. When true, applies a fully rounded button style.
   */
  rounded?: boolean
}

/**
 * Vue-compatible class binding value: a string, an array of strings, or a
 * map of class names to booleans. Shared by every component's `customClass`.
 */
export type ClassValue = string | string[] | Record<string, boolean>

/**
 * Canonical semantic color palette shared across components.
 * Component-specific color unions extend this with their own extras
 * (e.g. Button adds 'white' | 'black' | 'transparent').
 */
export type ThemeColor = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info'

/**
 * Canonical size scale shared across components. Components supporting a
 * subset should narrow it (e.g. `Extract<SizeLevel, 'sm' | 'lg'>`).
 */
export type SizeLevel = 'sm' | 'md' | 'lg'

/**
 * Canonical floating placement union (floating-vue compatible), shared by
 * tooltips, dropdown menus and sidebar popovers.
 */
export type FloatingPlacement = 'top' | 'bottom' | 'left' | 'right' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end'

/**
 * Shared base properties for link-like components (Navbar, Sidebar, NavItems).
 */
export interface IBaseLinkProps {
  /**
   * Unique identifier for the item.
   */
  id?: string

  /**
   * Display text label for the link.
   */
  text?: string

  /**
   * Material icon code for the link icon.
   */
  icon?: string | null

  /**
   * Navigation destination. Can be a string path or router object.
   */
  to?: string | object

  /**
   * Standard href attribute for external links.
   */
  href?: string

  /**
   * Marks the link as active (applies active styling).
   */
  active?: boolean

  /**
   * Disables the link.
   */
  disabled?: boolean

  /**
   * Optional custom CSS classes.
   */
  customClass?: ClassValue | null

  /**
   * Component type to render for links (e.g., 'a', 'router-link', 'nuxt-link').
   */
  as?: string | object
}

/**
 * Shared base properties for form input components.
 */
export interface IBaseInputProps {
  /**
   * Unique identifier for the input.
   */
  id?: string | null

  /**
   * Display label text.
   */
  label?: string | null

  /**
   * Array of error validation messages.
   */
  errorMessages?: string[]

  /**
   * Input placeholder text.
   */
  placeholder?: string | null

  /**
   * Disables the input.
   */
  disabled?: boolean

  /**
   * Marks the input as required.
   */
  required?: boolean

  /**
   * Marks the input as read-only.
   */
  readonly?: boolean

  /**
   * Marks the input as rounded.
   */
  rounded?: boolean

  /**
   * Optional custom CSS classes.
   */
  customClass?: string | null

  /**
   * When true, shows an "(Opcional)" label next to the primary label.
   */
  optionalLabel?: boolean

  /**
   * Input visual variant.
   */
  variant?: InputVariant

  /**
   * Input size variant.
   */
  size?: InputSize

  /**
   * When true, hides the label visually.
   */
  hideLabel?: boolean
}

/**
 * Type for input variants.
 */
export type InputVariant = 'filled' | 'outline' | 'transparent' | null

/**
 * Type for input sizes.
 */
export type InputSize = 'sm' | 'lg' | null

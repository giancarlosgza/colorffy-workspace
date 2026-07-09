import type { IBadgeProps } from '@/types/badge'
import type { ClassValue, FloatingPlacement, SizeLevel, ThemeColor } from '@/types/shared'

export type ButtonClassName = ClassValue
export type ButtonVariant = 'filled' | 'tonal' | 'outline' | 'text' | 'link' | 'chip' | 'cta' | 'gradient' | 'frosted'
export type ButtonColor = ThemeColor | 'white' | 'black' | 'transparent'
export type ButtonSizeLevel = SizeLevel

/**
 * Base props shared by all button families.
 * Contains core identifiers, content, visual styles, and common states.
 */
export interface IBaseButtonProps {
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
  variant?: ButtonVariant | (string & {})

  /**
   * Semantic color used with certain variants (e.g., 'filled' or 'tonal').
   */
  color?: ButtonColor | (string & {})

  /**
   * Preferred size alias.
   * Accepts logical sizes ('sm' | 'md' | 'lg'). Legacy class strings are also accepted for compatibility.
   */
  size?: ButtonSizeLevel | (string & {})

  /**
   * Optional icon variant of the button. Can be 'shape-sm', 'shape-md', 'compact-sm', 'compact', or undefined.
   */
  iconVariant?: 'shape-sm' | 'shape-md' | 'compact-sm' | 'compact'

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
   * Optional custom class for the button. Can be an array or null.
   */
  customClass?: ButtonClassName | null

  /**
   * Optional rounded style. When true, applies a fully rounded button style.
   */
  rounded?: boolean

  /**
   * Optional fluid width style. When true, applies btn-block class for 100% width.
   */
  fluid?: boolean

  /**
   * Optional tooltip text of the button. Can be a string or null.
   */
  tooltipText?: string | null

  /**
   * Optional placement for tooltip or dropdown.
   */
  placement?: FloatingPlacement
}

/**
 * Interface props for the Button component.
 * Notes:
 * - Use `variant` (filled | tonal | outline | text | link | chip | cta | gradient | frosted) for style and `color` (primary | warning | etc.) for intent.
 * - Preferred size prop: `size` ('sm' | 'md' | 'lg').
 * - Legacy composite `variant` strings remain accepted as a fallback.
 */
export type IButtonProps = IBaseButtonProps

/**
 * Interface emits for the Button component.
 */
export interface IButtonEmits {
  /**
   * Emitted when the button is clicked.
   */
  (e: 'onClick'): void
}

/**
 * Interface props for the ButtonGroup component.
 */
export interface IButtonGroupProps {
  /**
   * Applies connected button styling with rounded outer corners.
   * When true, buttons will have reduced gap and only first/last buttons have rounded corners.
   */
  connected?: boolean

  /**
   * Removes gap completely between buttons. Only works when `connected` is also true.
   * Creates a seamless joined button group with no spacing.
   */
  joined?: boolean

  /**
   * Arranges buttons vertically instead of horizontally.
   * Changes which corners are rounded (top corners for first, bottom for last).
   */
  vertical?: boolean

  /**
   * Optional custom CSS classes to apply to the button group container.
   */
  customClass?: string | null
}

/**
 * Interface props for the ButtonFabGroup component (Floating Action Button Group).
 */
export interface IButtonFabGroupProps {
  /**
   * Positions the FAB group at the top of the viewport instead of bottom.
   * Default position is bottom-right. Combine with `start` for top-left.
   */
  top?: boolean

  /**
   * Positions the FAB group at the start (left) of the viewport instead of end (right).
   * Default position is bottom-right. Combine with `top` for top-left.
   */
  start?: boolean

  /**
   * Optional custom CSS classes to apply to the FAB group container.
   */
  customClass?: ButtonClassName | null
}

/**
 * Interface props for the ButtonTooltip component.
 */
export interface IButtonTooltipProps extends IButtonProps {
  /**
   * Text to display in the tooltip.
   */
  tooltipText?: string

  /**
   * Forwarded to the underlying button's `aria-expanded` (for toggle buttons).
   */
  ariaExpanded?: boolean

  /**
   * Forwarded to the underlying button's `aria-controls`.
   */
  ariaControls?: string
}

/**
 * Interface emits for the ButtonTooltip component.
 */
export interface IButtonTooltipEmits {
  /**
   * Emitted when the button is clicked.
   */
  (e: 'onClick'): void
}

/**
 * Interface for options used in ButtonToggleGroup component.
 */
export interface IButtonToggleOption {
  /**
   * Unique identifier for the option.
   */
  id: string

  /**
   * Material icon code for the option.
   */
  icon?: string

  /**
   * Custom CSS class for the icon.
   */
  iconClass?: string

  /**
   * Primary title text for the option.
   */
  title: string

  /**
   * Secondary support text for the option.
   */
  text?: string

  /**
   * Optional badge configuration for the option.
   */
  badge?: {
    variant?: IBadgeProps['variant']
    text?: string
  }

  /**
   * When true, marks the option as active.
   */
  active?: boolean

  /**
   * When true, disables the option.
   */
  disabled?: boolean
}

/**
 * Interface props for the ButtonToggleGroup component.
 */
export interface IButtonToggleGroupProps {
  /**
   * Array of toggle options to display.
   */
  options: IButtonToggleOption[]

  /**
   * ARIA label for accessibility.
   */
  ariaLabel?: string

  /**
   * Group label for accessibility.
   */
  groupLabel?: string
}

/**
 * Interface emits for the ButtonToggleGroup component.
 */
export interface IButtonToggleGroupEmits {
  /**
   * Emitted when an option is activated by pointer or keyboard.
   */
  (e: 'onOptionClick', event: MouseEvent | KeyboardEvent, item: IButtonToggleOption): void
}

/**
 * Interface props for the ButtonMenuText component.
 */
export interface IButtonMenuTextProps {
  /**
   * Text to display in the menu item.
   */
  itemText?: string
}

/**
 * Interface props for the ButtonMenu component.
 */
export interface IButtonMenuProps extends IBaseButtonProps {
  /**
   * When true, disables certain positioning features for mobile devices.
   */
  isMobile?: boolean

  /**
   * Optional placement for the tooltip.
   */
  tooltipPlacement?: FloatingPlacement
}

/**
 * Interface emits for the ButtonMenu component.
 */
export interface IButtonMenuEmits {
  /**
   * Emitted when the menu button is clicked.
   */
  (e: 'onClick'): void
}

/**
 * Interface props for the ButtonMenuItem component.
 */
export interface IButtonMenuItemProps {
  /**
   * Primary text label for the menu item.
   */
  itemText?: string

  /**
   * Optional Material icon code.
   */
  icon?: string | null

  /**
   * Inline styles for the icon.
   */
  iconStyle?: string | Record<string, string | number> | null

  /**
   * CSS classes for the icon.
   */
  iconClass?: string | string[] | null

  /**
   * When true, applies destructive action styling (e.g., red color).
   */
  isDestructive?: boolean

  /**
   * When true, disables the menu item.
   */
  disabled?: boolean

  /**
   * Custom CSS classes for the menu item container.
   */
  customClass?: string | string[] | null

  /**
   * Optional badge configuration.
   */
  badge?: Partial<IBadgeProps> | null

  /**
   * Optional shortcut label (e.g., "Ctrl+S").
   */
  shortcut?: string | null

  /**
   * Optional Material icon code for the trailing icon.
   */
  iconTrailing?: string | null

  /**
   * Inline styles for the trailing icon.
   */
  iconTrailingStyle?: string | Record<string, string | number> | null

  /**
   * CSS classes for the trailing icon.
   */
  iconTrailingClass?: string | string[] | null
}

/**
 * Interface props for the LinkTooltip component.
 */
export interface ILinkTooltipProps extends IBaseButtonProps {
  /**
   * Router link target location.
   */
  to?: string | object

  /**
   * Standard href attribute for external links.
   */
  href?: string

  /**
   * Component type to render (e.g., 'a', 'RouterLink').
   * @default 'a'
   */
  as?: string | object
}

/**
 * Interface props for the ButtonMenuSubmenu component.
 */
export interface IButtonMenuSubmenuProps {
  /**
   * Unique ID for the dropdown.
   */
  id?: string | null

  /**
   * Placement of the submenu dropdown.
   * Defaults to 'right' for a submenu.
   */
  placement?: FloatingPlacement

  /**
   * When true, disables certain positioning features on mobile devices.
   */
  isMobile?: boolean

  /**
   * Primary text label for the menu item.
   */
  itemText?: string

  /**
   * Optional Material icon code.
   */
  icon?: string | null

  /**
   * Inline styles for the icon.
   */
  iconStyle?: string | Record<string, string | number> | null

  /**
   * CSS classes for the icon.
   */
  iconClass?: string | string[] | null

  /**
   * When true, applies destructive action styling (e.g., red color).
   */
  isDestructive?: boolean

  /**
   * When true, disables the menu item.
   */
  disabled?: boolean

  /**
   * Custom CSS classes for the menu item container.
   */
  customClass?: string | string[] | null

  /**
   * Optional badge configuration.
   */
  badge?: Partial<IBadgeProps> | null

  /**
   * Optional Material icon code for the trailing icon.
   */
  iconTrailing?: string | null

  /**
   * Inline styles for the trailing icon.
   */
  iconTrailingStyle?: string | Record<string, string | number> | null

  /**
   * CSS classes for the trailing icon.
   */
  iconTrailingClass?: string | string[] | null
}

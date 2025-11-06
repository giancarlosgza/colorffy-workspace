export type ListClassName = string | string[] | Record<string, boolean>

export type ListVariant = 'flush' | 'low-contrast'
export type ListSize = 'sm' | 'md'

/**
 * Interface props for the List group component.
 * Notes:
 * - Use `variant` to switch surface style ('flush' | 'low-contrast').
 * - Use `size` for scalable sizing ('sm' | 'md').
 * - `isInteractive` enables hover/active styles provided by the design system.
 * - Prefer optional props over explicit null checks; `customClass` supports string, array, or object maps.
 */
export interface IListGroupProps {
  /**
   * Surface variant for the list group.
   * Accepts documented variants or a custom string. Can be null.
   */
  variant?: ListVariant | string | null

  /**
   * Scalable size for list items.
   * Accepts documented sizes ('sm' | 'md') or a custom string. Can be null.
   */
  size?: ListSize | string | null

  /**
   * Enables interactive styles like hover/active.
   */
  isInteractive?: boolean

  /**
   * Optional custom classes for the root element.
   * Accepts a string, an array of strings, or a map of class names to booleans.
   */
  customClass?: ListClassName | null
}

/**
 * Interface props for the List item component.
 * Notes:
 * - Prefer slots for custom content; `title` and `text` are convenience props.
 * - `icon` expects a Material Symbols HTML entity (e.g., `&#xe88e;`).
 * - Use `active` and `disabled` to reflect item state; styling is handled by the design system.
 */
export interface IListItemProps {
  /**
   * Optional title text displayed prominently.
   * Can be a string or null.
   */
  title?: string | null

  /**
   * Optional supporting text.
   * Can be a string or null.
   */
  text?: string | null

  /**
   * Optional Material Symbols icon code (HTML entity).
   * Can be a string or null.
   */
  icon?: string | null

  /**
   * Marks the item as active.
   */
  active?: boolean

  /**
   * Disables the item.
   */
  disabled?: boolean

  /**
   * Optional custom classes for the li element.
   * Accepts a string, an array of strings, or a map of class names to booleans.
   */
  customClass?: ListClassName | null
}

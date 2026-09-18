import type { ClassValue } from '@/types/shared'

/**
 * Interface props for the HeaderContent component.
 * Notes:
 * - Use `title` and `subtitle` to display header text.
 * - Use `backButton` to enable back navigation.
 * - Fill the #actions slot to add action buttons; the layout reacts on its own.
 */
export interface IHeaderContentProps {
  /**
   * Optional ID for the header title element, for external `aria-labelledby`
   * references. Falls back to a generated id.
   */
  headingId?: string

  /**
   * Main title text to display in the header.
   */
  title?: string | null

  /**
   * Subtitle text to display below the title.
   */
  subtitle?: string | null

  /**
   * When true, drops the actions out of the layout once the header's own
   * container is 700px or narrower, rather than wrapping them below the title.
   * Named for the container width, not the viewport: a narrow header in a wide
   * window collapses too.
   * @default false
   */
  hideActionsWhenNarrow?: boolean

  /**
   * When true, displays a back navigation button.
   */
  backButton?: boolean

  /**
   * Tooltip text for the back button.
   * @default 'Go back'
   */
  backButtonLabel?: string

  /**
   * Optional custom CSS classes for the header container.
   */
  containerClass?: ClassValue | null
}

/**
 * Interface for HeaderContent component events.
 */
export interface IHeaderContentEmits {
  /**
   * Emitted when the back button is clicked.
   */
  (e: 'back'): void
}

/**
 * Interface props for the PaneContent component.
 * Notes:
 * - Use `isFullHeight` to expand the pane to full height.
 * - Use ARIA attributes for improved accessibility.
 * - The component wraps content in a row/column layout structure.
 */
export interface IPaneContentProps {
  /**
   * Optional custom CSS classes for the pane.
   */
  customClass?: string | string[] | null

  /**
   * Optional custom CSS classes for the container wrapper.
   */
  containerClass?: string | string[] | null

  /**
   * When true, expands the pane to full height with `pane-content-expanded`.
   */
  isFullHeight?: boolean

  /**
   * Optional ARIA label for the pane section.
   */
  ariaLabel?: string

  /**
   * Optional ARIA labelledby reference for the pane section.
   */
  ariaLabelledby?: string

  /**
   * Optional ARIA describedby reference for the pane section.
   */
  ariaDescribedby?: string

  /**
   * Optional ID for the pane section element.
   */
  id?: string
}

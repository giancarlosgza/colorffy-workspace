import type { ClassValue } from '@/types/shared'

export type HeaderContentSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type HeroContentSize = 'sm' | 'md' | 'lg' | 'xl'
export type HeroContentAlign = 'start' | 'center' | 'end'
export type SubheadingContentGutter = 'none' | 'sm' | 'md'

/**
 * Interface props for the HeaderContent component.
 * Notes:
 * - Use `title` and `subtitle` to display header text.
 * - Use `backButton` to enable back navigation.
 * - Fill the #actions slot to add action buttons; the layout reacts on its own.
 */
export interface IHeaderContentProps {
  /**
   * Heading element to render for the title. Section headers inside a page
   * should step down from the page's own `h1`.
   * @default 'h1'
   */
  as?: string

  /**
   * Optional ID for the header title element, for external `aria-labelledby`
   * references. Falls back to a generated id.
   */
  headingId?: string

  /**
   * Small eyebrow label rendered above the title.
   */
  headline?: string | null

  /**
   * Main title text to display in the header.
   */
  title?: string | null

  /**
   * Subtitle text to display below the title.
   */
  subtitle?: string | null

  /**
   * Title size. `sm` is the default page-header title; every step above it
   * also takes the line height the type scale pairs with that step.
   * @default 'sm'
   */
  size?: HeaderContentSize | (string & {}) | null

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
   * Pairs this header with the matching one on another page for a view
   * transition. The value is the shared name both pages use, so it must be
   * unique within each document; the description derives `<name>-description`.
   * Nothing is emitted when it is omitted.
   */
  viewTransitionName?: string | null

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
  customClass?: ClassValue | null

  /**
   * Optional custom CSS classes for the container wrapper.
   */
  containerClass?: ClassValue | null

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

/**
 * Interface props for the HeroContent component.
 * Notes:
 * - `size` picks the display step the title uses (`display-1` … `display-4`).
 * - `align` moves the whole block, text and actions together.
 * - Fill the #actions slot with the call-to-action buttons.
 */
export interface IHeroContentProps {
  /**
   * Optional ID for the hero title element. The section references it with
   * `aria-labelledby`. Falls back to a generated id.
   */
  headingId?: string

  /**
   * Small eyebrow label rendered above the title.
   */
  headline?: string | null

  /**
   * Main title text.
   */
  title?: string | null

  /**
   * Supporting description below the title.
   */
  subtitle?: string | null

  /**
   * Title size, mapped onto the display scale; `xl` is the largest.
   * @default 'xl'
   */
  size?: HeroContentSize | (string & {}) | null

  /**
   * Horizontal alignment of the whole hero.
   */
  align?: HeroContentAlign | (string & {}) | null

  /**
   * Pairs this hero with the matching one on another page for a view
   * transition. The value is the shared name both pages use, so it must be
   * unique within each document; the description derives `<name>-description`.
   * Nothing is emitted when it is omitted.
   */
  viewTransitionName?: string | null

  /**
   * Optional custom CSS classes for the hero section.
   */
  customClass?: ClassValue | null
}

/**
 * Interface props for the SubheadingContent component.
 * Notes:
 * - Renders `.text-subheading`; the description picks up its muted styling by
 *   being the heading's sibling.
 * - Use `as` to keep the document's heading order correct.
 */
export interface ISubheadingContentProps {
  /**
   * Heading element to render.
   * @default 'h3'
   */
  as?: string

  /**
   * Subheading text.
   */
  title?: string | null

  /**
   * Supporting description below the subheading.
   */
  subtitle?: string | null

  /**
   * Space below the subheading block: `md` is the default, `sm` tightens it
   * and `none` removes it. The gap between the title and its description is
   * fixed and does not follow it.
   * @default 'md'
   */
  gutter?: SubheadingContentGutter | (string & {}) | null

  /**
   * Optional custom CSS classes for the wrapper.
   */
  customClass?: ClassValue | null
}

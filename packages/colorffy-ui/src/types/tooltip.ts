import type { ClassValue, FloatingPlacement } from '@/types/shared'

/**
 * Interface props for the Tooltip component.
 * Notes:
 * - Generic wrapper over floating-vue's `VTooltip`; the default slot is the
 *   trigger element, wrapped in an inline-block so any content works as-is.
 * - Use `text` for plain-text content, or the `#content` slot for rich
 *   markup (links, `kbd`, multi-line copy).
 * - For buttons/links needing tooltip + semantics in one component, prefer
 *   `UiButtonTooltip` / `UiLinkTooltip` instead.
 */
export interface ITooltipProps {
  /**
   * Plain-text tooltip content. Ignored when the `#content` slot is used.
   */
  text?: string | null

  /**
   * Tooltip placement relative to the trigger.
   * @default 'top'
   */
  placement?: FloatingPlacement

  /**
   * Disables the tooltip (trigger renders without any popover behavior).
   */
  disabled?: boolean

  /**
   * Accessible id applied to the popper content and referenced by the
   * trigger's `aria-describedby`. Defaults to an SSR-stable auto-generated id.
   */
  ariaId?: string

  /**
   * Optional custom CSS classes for the trigger wrapper element.
   */
  customClass?: ClassValue | null
}

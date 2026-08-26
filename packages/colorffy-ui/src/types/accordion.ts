import type { ClassValue, SizeLevel } from '@/types/shared'

export type AccordionClassName = ClassValue

export type AccordionSize = Extract<SizeLevel, 'sm' | 'md'>
export type AccordionVariant = 'borderless' | 'border-block'
export type AccordionShape = 'rounded' | 'square'

/**
 * Interface props for the Accordion item component.
 * Notes:
 * - Prefer slots for header/body content. `title` and `text` are convenience props.
 * - Controlled expand/collapse via `v-model:open` (boolean). Component emits `update:open` and `toggle`.
 * - Use `customClass` to pass extra classes to the root <details> element.
 * - `name` is preserved for native <details> grouping/backward compatibility; keep optional.
 */
export interface IAccordionItemProps {
  /**
   * Optional DOM id of the accordion item. Used to link header/body for accessibility.
   */
  id?: string | null

  /**
   * Optional group name for the native <details> behavior.
   */
  name?: string | null

  /**
   * Header text displayed in the summary. Prefer using the `header` slot for custom content.
   */
  title?: string | null

  /**
   * Optional leading Material Symbols icon (HTML entity, e.g. `'&#xe87c;'`) shown before the title.
   * Rendered via UiIconMaterial. Ignored when the `header` slot is used.
   */
  icon?: string | null

  /**
   * Optional custom class for the icon within the accordion item. Accepts string, array, or object map.
   */
  iconClass?: AccordionClassName | null

  /**
   * Body text displayed inside the accordion panel. Prefer using the default slot.
   */
  text?: string | null

  /**
   * Disables user interaction when true.
   */
  disabled?: boolean

  /**
   * Scalable size for this accordion item ('sm' | 'md').
   * Overrides the size set on the parent AccordionGroup. Defaults to 'md'.
   */
  size?: AccordionSize | (string & {}) | null

  /**
   * Optional custom classes for the root element.
   */
  customClass?: AccordionClassName | null
}

/**
 * Interface props for the Accordion group component.
 * Notes:
 * - Wrap multiple accordion items. Set `isTransparent` for a surface-less container.
 * - Use `customClass` to pass classes to the wrapper element.
 */
export interface IAccordionGroupProps {
  /**
   * Renders the group with a transparent background.
   */
  isTransparent?: boolean

  /**
   * Surface variant for the group.
   * 'borderless' removes background and borders; 'border-block' renders a
   * flush list separated by horizontal rules. Accepts a custom string.
   */
  variant?: AccordionVariant | (string & {}) | null

  /**
   * Scalable size applied to all accordion items ('sm' | 'md').
   * Defaults to 'md'. Accepts a custom string.
   */
  size?: AccordionSize | (string & {}) | null

  /**
   * Corner shape for the accordion items. 'rounded' (default) keeps the
   * tonal per-position radius; 'square' removes all rounding.
   */
  shape?: AccordionShape | null

  /**
   * Optional custom classes for the wrapper element.
   */
  customClass?: AccordionClassName | null
}

import type { ClassValue } from '@/types/shared'

export type AccordionClassName = ClassValue

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
   * Body text displayed inside the accordion panel. Prefer using the default slot.
   */
  text?: string | null

  /**
   * Disables user interaction when true.
   */
  disabled?: boolean

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
   * Optional custom classes for the wrapper element.
   */
  customClass?: AccordionClassName | null
}

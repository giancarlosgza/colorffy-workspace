import type { ClassValue } from '@/types/shared'

/**
 * Interface props for the Divider component.
 * Notes:
 * - Renders an `<hr>` by default; a labelled or vertical divider renders a `<div>`.
 * - Use `text` to render a centered label between two hairlines.
 * - Use `vertical` to separate inline content within a flex row.
 * - Use `inset` to indent the divider (e.g. aligned past a leading icon).
 */
export interface IDividerProps {
  /**
   * Optional label rendered centered between two hairlines. Can be a string or null.
   */
  text?: string | null

  /**
   * Renders a vertical divider for separating inline content.
   */
  vertical?: boolean

  /**
   * Indents the divider from the inline start (aligns past a leading icon).
   */
  inset?: boolean

  /**
   * Optional custom class for the divider. Accepts string, array, or object map.
   */
  customClass?: ClassValue | null
}

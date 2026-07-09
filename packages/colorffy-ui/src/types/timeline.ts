import type { ClassValue, ThemeColor } from '@/types/shared'

export type TimelineClassName = ClassValue
export type TimelineAlign = 'start' | 'alternate'
export type TimelineSize = 'sm' | 'lg'

/**
 * Interface for individual items rendered by the Timeline component.
 * Notes:
 * - `icon` expects a Material Symbols HTML entity (e.g., `&#xe88e;`).
 * - `imageUrl` takes precedence over `icon`; a plain dot renders when neither is set.
 * - `variant` colors the dot/icon marker using the shared semantic palette.
 */
export interface ITimelineItem {
  /**
   * Unique identifier for the item.
   * Used as the render key and to target the `#item-<id>` named slot.
   */
  id: string

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
   * Optional timestamp/label rendered above the title (e.g. "Hace 2 horas").
   * Can be a string or null.
   */
  time?: string | null

  /**
   * Optional Material Symbols icon code (HTML entity) for the marker.
   * Takes precedence over the plain dot marker.
   */
  icon?: string | null

  /**
   * Optional image URL rendered in place of the icon/dot marker.
   * Takes precedence over `icon` when both are provided.
   */
  imageUrl?: string | null

  /**
   * Alt text for the image. Defaults to empty (decorative image).
   */
  imageAlt?: string | null

  /**
   * Semantic color applied to the dot/icon marker.
   */
  variant?: ThemeColor | null
}

/**
 * Interface props for the Timeline component.
 * Notes:
 * - Renders an ordered list of `items`, each with a dot/icon/image marker and
 *   a connector line joining it to the next item.
 * - Use `align` to switch between a single-column layout ('start', default)
 *   and a centered, zig-zagging layout ('alternate').
 * - Provide a custom body per item via the `#item-<id>` named slot (highest
 *   priority) or the scoped `#item` slot (exposes `{ item }`), falling back
 *   to the default title/text/time markup when neither slot is used.
 */
export interface ITimelineProps {
  /**
   * Array of timeline items to render.
   */
  items?: ITimelineItem[]

  /**
   * Layout alignment.
   * 'start' keeps markers on one side (default); 'alternate' centers the
   * connector line and alternates content left/right.
   */
  align?: TimelineAlign

  /**
   * Size variant of the timeline.
   * Accepts 'sm' for a tighter layout or 'lg' for a larger one; defaults to the standard size.
   */
  size?: TimelineSize

  /**
   * Optional custom classes for the root element.
   * Accepts a string, an array of strings, or a map of class names to booleans.
   */
  customClass?: TimelineClassName | null
}

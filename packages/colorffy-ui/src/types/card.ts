import type { ClassValue } from '@/types/shared'

export type CardClassName = ClassValue
export type CardVariant = 'outline' | 'elevated' | 'pane'
export type CardSize = 'xs' | 'sm' | 'md'

/**
 * Interface props for the Card component.
 * Notes:
 * - Use `variant` to control surface (outline | elevated | pane).
 * - Use `size` for scalable sizing ('xs' | 'sm' | 'md').
 * - Use `selectable` to enable interactive/selectable affordances (adds `card-selectable`).
 */
export interface ICardProps {
  /**
   * Optional ID of the card. Can be a string or null.
   */
  id?: string | null

  /**
   * Optional title of the card. Can be a string or null.
   */
  title?: string | null

  /**
   * Optional variant of the card. Can be 'outline', 'elevated', any other string, or undefined.
   */
  variant?: CardVariant | (string & {})

  /**
   * Scalable size of the card. Prefer 'sm' | 'md'.
   */
  size?: CardSize

  /**
   * Optional custom class for the card.
   */
  customClass?: CardClassName | null

  /**
   * When true, adds the `card-selectable` class to enable selectable styles.
   */
  selectable?: boolean

  /**
   * Optional cover image URL rendered full-bleed at the top of the card.
   * Ignored when the `#media` slot is used instead.
   */
  imageUrl?: string | null

  /**
   * Alt text for the cover image. Defaults to empty (decorative image).
   */
  imageAlt?: string | null

  /**
   * Navigation destination. Can be a string path or router object.
   * Activates link mode (the card's root element renders as `as`/`a` instead
   * of a plain `div`) when set together with, or instead of, `href`.
   */
  to?: string | object | null

  /**
   * Standard href attribute for link mode (e.g. external links).
   * Activates link mode when set together with, or instead of, `to`.
   */
  href?: string | null

  /**
   * Component/tag to render for the card's root element in link mode
   * (e.g. 'a', 'router-link', 'nuxt-link'). Defaults to 'a'.
   * Ignored unless `to` or `href` is also provided.
   */
  as?: string | object | null
}

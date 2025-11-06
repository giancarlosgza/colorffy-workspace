export type CardClassName = string | string[] | Record<string, boolean>
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
  variant?: CardVariant | string | undefined

  /**
   * Scalable size of the card. Prefer 'sm' | 'md'.
   */
  size?: CardSize | undefined

  /**
   * Optional custom class for the card.
   */
  customClass?: CardClassName | null

  /**
   * When true, adds the `card-selectable` class to enable selectable styles.
   */
  selectable?: boolean | undefined
}

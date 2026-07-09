import type { ClassValue, ThemeColor } from '@/types/shared'

export type BadgeClassName = ClassValue
export type BadgeVariant = ThemeColor | 'gradient' | 'default' | 'outline' | `tonal tonal-${Exclude<ThemeColor, 'neutral'>}` | (string & {})
export type BadgeSize = 'sm'

/**
 * Interface props for the Badge component.
 * Notes:
 * - Prefer intent-like variants; legacy strings stay supported.
 * - Use `size` for scalable sizing ('sm').
 * - Use `pill` to enable fully rounded capsule style.
 */
export interface IBadgeProps {
  /**
   * Optional text of the badge. Can be a string or null.
   */
  text?: string | null

  /**
   * Variant/style preset.
   * Prefer intent names (primary/secondary/accent/neutral/success/warning/danger)
   * or documented tonal forms. Legacy strings still supported.
   */
  variant?: BadgeVariant

  /**
   * Optional icon of the badge. Can be a string or null.
   */
  iconCode?: string | null

  /**
   * Optional custom class for the icon within the badge. Accepts string, array, or object map.
   */
  iconClass?: BadgeClassName | null

  /**
   * Optional inline styles for the icon within the badge.
   */
  iconStyle?: string | Record<string, string | number> | null

  /**
   * Scalable size of the badge. Only 'sm' is supported.
   */
  size?: BadgeSize | (string & {})

  /**
   * Fully rounded capsule style.
   */
  pill?: boolean | null

  /**
   * Optional custom class for the badge. Accepts string, array, or object map.
   */
  customClass?: BadgeClassName | null
}

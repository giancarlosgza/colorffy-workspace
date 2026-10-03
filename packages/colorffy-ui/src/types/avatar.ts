import type { ClassValue, ThemeColor } from '@/types/shared'

export type AvatarMaskShape
  = | 'arch'
    | 'pill'
    | 'sunny'
    | 'gem'
    | 'cookie-6'
    | 'cookie-9'
    | 'cookie-12'
    | 'clover-4'
    | 'clover-8'
    | 'bum'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'navbar' | 'menu'

export type AvatarStatus = 'online' | 'busy' | 'away' | 'offline'

export type AvatarVariant = 'transparent' | 'tonal' | 'filled'

export interface IAvatarProps {
  src?: string
  /**
   * Alternative text / accessible name for the avatar image.
   * @default 'Avatar'
   */
  alt?: string
  size?: AvatarSize
  initials?: string | null
  /**
   * Apply a mask shape to the avatar
   */
  maskShape?: AvatarMaskShape | null
  /**
   * Stretch the mask size to 115%
   * @default false
   */
  maskStretch?: boolean
  /**
   * Show a presence indicator dot on the avatar's bottom-end corner.
   * When `maskShape` is set, the dot is rendered outside the mask and
   * nudged inward so it stays visible.
   * @default null
   */
  status?: AvatarStatus | null
  /**
   * Background color for initials and placeholder avatars, as a light tint
   * of the theme color. Has no effect on image avatars.
   * @default null
   */
  color?: ThemeColor | null
  /**
   * Background style for initials and placeholder avatars:
   * - transparent: light tint that lets what's behind show through
   * - tonal: the same light tint, opaque
   * - filled: the full theme color with contrasting text
   * @default 'transparent'
   */
  variant?: AvatarVariant | null
}

/**
 * Interface props for the AvatarGroup component.
 * Notes:
 * - Provide either `avatars` (an array of avatar props) or compose `UiAvatar`
 *   instances directly via the default slot.
 * - `max` truncates the `avatars` array and renders a "+N" overflow avatar
 *   styled like `.initials-avatar`. It only applies to the `avatars` prop —
 *   slot-composed avatars always render in full.
 */
export interface IAvatarGroupProps {
  /**
   * Avatars to render, in order. Alternative to composing `UiAvatar`
   * instances via the default slot.
   */
  avatars?: IAvatarProps[]

  /**
   * Maximum number of avatars to render before collapsing the remainder
   * into a "+N" overflow avatar. Only applies when using the `avatars` prop.
   */
  max?: number

  /**
   * Size applied to every avatar in the group (and the overflow avatar).
   * Individual `avatars` entries can override it with their own `size`.
   */
  size?: AvatarSize

  /**
   * Color applied to every avatar in the group and the overflow avatar.
   * Individual `avatars` entries can override it with their own `color`.
   * Slot-composed avatars set their own `color`.
   */
  color?: ThemeColor | null

  /**
   * Background style applied to every avatar in the group and the overflow
   * avatar. Defaults to 'tonal' so overlapping avatars don't show through.
   * Individual `avatars` entries can override it.
   * @default 'tonal'
   */
  variant?: AvatarVariant | null

  /**
   * Optional custom CSS classes for the group container.
   */
  customClass?: ClassValue | null
}

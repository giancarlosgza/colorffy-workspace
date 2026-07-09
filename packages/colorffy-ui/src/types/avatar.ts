import type { ClassValue } from '@/types/shared'

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
   * Optional custom CSS classes for the group container.
   */
  customClass?: ClassValue | null
}

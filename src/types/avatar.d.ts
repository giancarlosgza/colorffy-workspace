export type AvatarMaskShape = 'arch' | 'pill' | 'sunny' | 'gem' | 'cookie-6' | 'cookie-9' | 'cookie-12' | 'clover-4' | 'clover-8' | 'bum';
export interface IAvatarProps {
    src?: string;
    /**
     * Alternative text / accessible name for the avatar image.
     * @default 'Avatar'
     */
    alt?: string;
    size?: 'sm' | 'md' | 'lg' | 'navbar' | 'menu';
    initials?: string | null;
    /**
     * Apply a mask shape to the avatar
     */
    maskShape?: AvatarMaskShape | null;
    /**
     * Stretch the mask size to 115%
     * @default false
     */
    maskStretch?: boolean;
}
//# sourceMappingURL=avatar.d.ts.map
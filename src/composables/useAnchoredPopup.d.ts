import { Ref } from 'vue';
/**
 * Opens a popup next to an anchor element. The popup is a `popover="manual"`
 * element rendered while `isOpen` is true, so it sits in the top layer above
 * dialogs and outside any clipping container. Browsers with CSS anchor
 * positioning place it from the stylesheet (`isAnchored`); the rest get fixed
 * coordinates from `place()`, kept in sync on scroll and resize.
 */
export declare function useAnchoredPopup(anchor: Ref<HTMLElement | null>, popup: Ref<HTMLElement | null>, options?: {
    shouldPlace?: () => boolean;
}): {
    isOpen: Ref<boolean, boolean>;
    isAnchored: Ref<boolean, boolean>;
    anchorName: string;
    open: () => Promise<void>;
    close: () => void;
};
//# sourceMappingURL=useAnchoredPopup.d.ts.map
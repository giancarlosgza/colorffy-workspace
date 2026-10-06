import { Ref } from 'vue';
/**
 * Keyboard movement between the items of a `role="menu"` list, as the WAI-ARIA
 * menu pattern describes: ↑ and ↓ wrap around, Home and End jump to the ends,
 * and a letter moves to the next item starting with it. Nested submenus are
 * separate lists, since their poppers render outside the parent menu.
 */
export declare function useMenuNavigation(menu: Ref<HTMLElement | null>): {
    focusItem: (position: "first" | "last") => void;
    onKeydown: (event: KeyboardEvent) => void;
};
//# sourceMappingURL=useMenuNavigation.d.ts.map
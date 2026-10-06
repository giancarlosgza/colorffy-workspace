import { ComputedRef } from 'vue';
/**
 * Where a FloatingVue popper is appended. FloatingVue uses `<body>`, but a
 * modal `<dialog>` (`showModal()`) or an open `[popover]` sits in the top
 * layer above it, and a modal dialog makes the rest of the page inert, so a
 * menu or tooltip opened from inside one would be hidden and unclickable.
 * Inside either, the popper goes into that element instead. Menus and
 * tooltips opened from inside another popper share its container, since their
 * trigger only exists once the parent is open.
 *
 * Returns props to bind on `VDropdown` / `VTooltip`. They're typed loosely
 * because FloatingVue's generated types declare `container` as a `Date`.
 */
export declare function useFloatingContainer(): ComputedRef<Record<string, unknown>>;
//# sourceMappingURL=useFloatingContainer.d.ts.map
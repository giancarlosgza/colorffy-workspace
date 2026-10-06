/**
 * An option normalized for rendering and keyboard navigation.
 */
export interface ListboxItem {
    key: number;
    option: unknown;
    value: unknown;
    label: string;
    search: string;
    disabled: boolean;
    group: string | null;
    /** The "Add …" row for typed text that isn't an option yet. */
    created?: boolean;
}
/**
 * A run of items under one heading; `label` is null for ungrouped options.
 */
export interface ListboxGroup {
    label: string | null;
    items: ListboxItem[];
}
interface ListboxSource {
    id: () => string;
    options: () => unknown[];
    optionLabel: () => string | null;
    optionValue: () => string | null;
    optionDisabled: () => string | null;
    optionGroup: () => string | null;
    query: () => string;
    /** Typed text offered as a new option when no option has that label. */
    create?: () => string;
}
/**
 * Lowercases text and strips accents, so "Ines" finds "Inés".
 */
export declare function normalizeText(text: string): string;
/**
 * Options, filtering, grouping and the active (highlighted) option of a
 * listbox popup. Keyboard handlers move `activeIndex` through the visible
 * options, skipping disabled ones; each option's element id comes from
 * `optionId()` under the `id` prefix.
 */
export declare function useListbox(source: ListboxSource): {
    items: import('vue').ComputedRef<ListboxItem[]>;
    groups: import('vue').ComputedRef<ListboxGroup[]>;
    visible: import('vue').ComputedRef<ListboxItem[]>;
    activeIndex: import('vue').Ref<number, number>;
    activeItem: import('vue').ComputedRef<ListboxItem>;
    activate: (item: ListboxItem | null) => void;
    activateFirst: () => void;
    activateLast: () => void;
    move: (count: number) => void;
    optionId: (item: ListboxItem) => string;
    scrollToActive: () => void;
    typeahead: (char: string) => boolean;
    isTyping: () => boolean;
};
export {};
//# sourceMappingURL=useListbox.d.ts.map
import { IPopoverMenuItemProps } from '../../../types/navigation';
declare var __VLS_15: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_15) => any;
} & {
    trailing?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IPopoverMenuItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<IPopoverMenuItemProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    customClass: string | string[] | null;
    text: string;
    ariaLabel: string | null;
    iconStyle: string | Record<string, string | number> | null;
    icon: string | null;
    to: string | object | null;
    as: string | object;
    iconTrailing: string | null;
    disabled: boolean;
    active: boolean;
    iconClass: string | string[] | null;
    badge: Partial<import('../../..').IBadgeProps> | null;
    isDestructive: boolean;
    shortcut: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PopoverMenuItem.vue.d.ts.map
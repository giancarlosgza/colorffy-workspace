import { IPopoverMenuItem, IPopoverMenuProps } from '../../../types/navigation';
declare var __VLS_1: {}, __VLS_17: {}, __VLS_32: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_1) => any;
} & {
    body?: (props: typeof __VLS_17) => any;
} & {
    footer?: (props: typeof __VLS_32) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IPopoverMenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hideDropdown: () => any;
    menuItemClick: (to: string | object) => any;
}, string, import('vue').PublicProps, Readonly<IPopoverMenuProps> & Readonly<{
    onHideDropdown?: (() => any) | undefined;
    onMenuItemClick?: ((to: string | object) => any) | undefined;
}>, {
    title: string | null;
    ariaLabel: string | null;
    id: string | null;
    closable: boolean;
    isOpened: boolean;
    nativePopover: boolean;
    menuItems: IPopoverMenuItem[];
    currentRoute: import('../../../types/navigation').IRouteLike | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PopoverMenu.vue.d.ts.map
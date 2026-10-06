import { ISidebarProps } from '../../../types/sidebar';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_1) => any;
} & {
    body?: (props: typeof __VLS_3) => any;
} & {
    footer?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ISidebarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<ISidebarProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    customClass: import('../../../types/sidebar').SidebarClassName | null;
    width: string | null;
    open: boolean;
    bordered: boolean;
    rail: boolean;
    headerClass: import('../../../types/sidebar').SidebarClassName | null;
    bodyClass: import('../../../types/sidebar').SidebarClassName | null;
    footerClass: import('../../../types/sidebar').SidebarClassName | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Sidebar.vue.d.ts.map
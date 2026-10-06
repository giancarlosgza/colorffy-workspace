import { ISidebarGroupProps } from '../../../types/sidebar';
declare var __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ISidebarGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ISidebarGroupProps> & Readonly<{}>, {
    customClass: import('../../../types/sidebar').SidebarClassName | null;
    text: string;
    icon: string | null;
    collapsible: boolean;
    defaultOpen: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=SidebarGroup.vue.d.ts.map
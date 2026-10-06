import { ISidebarLinkProps } from '../../../types/sidebar';
declare var __VLS_19: {}, __VLS_34: {};
type __VLS_Slots = {} & {
    badge?: (props: typeof __VLS_19) => any;
} & {
    badge?: (props: typeof __VLS_34) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ISidebarLinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ISidebarLinkProps> & Readonly<{}>, {
    customClass: import('../../..').ClassValue | null;
    text: string;
    icon: string | null;
    to: string | object;
    href: string;
    as: string | object;
    tooltipText: string;
    tooltipPlacement: import('../../..').FloatingPlacement;
    id: string;
    disabled: boolean;
    ariaLabelledby: string;
    active: boolean;
    child: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=SidebarLink.vue.d.ts.map
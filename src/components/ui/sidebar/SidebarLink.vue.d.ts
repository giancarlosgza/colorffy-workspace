import { ISidebarLinkProps } from '../../../types/sidebar';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        badge?(_: {}): any;
        badge?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ISidebarLinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ISidebarLinkProps> & Readonly<{}>, {
    text: string;
    tooltipPlacement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    to: string | object;
    href: string;
    as: string | object;
    icon: string | null;
    id: string;
    disabled: boolean;
    customClass: import('../../..').ClassValue | null;
    tooltipText: string;
    ariaLabelledby: string;
    active: boolean;
    child: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=SidebarLink.vue.d.ts.map
import { IButtonMenuSubmenuProps } from '../../../types/button';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IButtonMenuSubmenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IButtonMenuSubmenuProps> & Readonly<{}>, {
    isMobile: boolean;
    icon: string | null;
    id: string | null;
    iconTrailing: string | null;
    disabled: boolean;
    customClass: string | string[] | null;
    placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
    iconClass: string | string[] | null;
    iconStyle: string | Record<string, string | number> | null;
    badge: Partial<import('../../..').IBadgeProps> | null;
    itemText: string;
    isDestructive: boolean;
    iconTrailingStyle: string | Record<string, string | number> | null;
    iconTrailingClass: string | string[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ButtonMenuSubmenu.vue.d.ts.map
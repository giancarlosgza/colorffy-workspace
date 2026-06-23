declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('../../..').IBaseLinkProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('../../..').IBaseLinkProps> & Readonly<{}>, {
    text: string;
    to: string | object;
    href: string;
    as: string | object;
    disabled: boolean;
    customClass: import('../../..').ClassValue | null;
    active: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NavbarLink.vue.d.ts.map
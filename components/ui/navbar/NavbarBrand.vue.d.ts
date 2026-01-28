import { INavbarBrandProps } from '../../../types/navbar';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        link?(_: {
            linkTarget: string | object;
            brandText: string;
        }): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<INavbarBrandProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<INavbarBrandProps> & Readonly<{}>, {
    text: string;
    customClass: import('../../../types/navbar').NavbarClassName | null;
    initials: string | null;
    to: string | object;
    href: string;
    as: string | object;
    logo: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NavbarBrand.vue.d.ts.map
import { INavbarBrandProps } from '../../../types/navbar';
declare var __VLS_1: {
    linkTarget: string | object;
    brandText: string;
};
type __VLS_Slots = {} & {
    link?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<INavbarBrandProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<INavbarBrandProps> & Readonly<{}>, {
    customClass: import('../../..').ClassValue | null;
    text: string;
    to: string | object;
    href: string;
    as: string | object;
    initials: string | null;
    logo: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NavbarBrand.vue.d.ts.map
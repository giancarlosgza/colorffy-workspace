import { INavbarTitleProps } from '../../../types/navbar';
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    brand?: (props: typeof __VLS_1) => any;
} & {
    title?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import('vue').DefineComponent<INavbarTitleProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<INavbarTitleProps> & Readonly<{}>, {
    title: string;
    customClass: import('../../../types/navbar').NavbarClassName | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=NavbarTitle.vue.d.ts.map
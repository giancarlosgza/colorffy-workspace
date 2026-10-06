import { IFooterProps } from '../../types/layout';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    brand?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    bottom?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IFooterProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IFooterProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    fluid: boolean;
    customClass: import('../..').ClassValue | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Footer.vue.d.ts.map
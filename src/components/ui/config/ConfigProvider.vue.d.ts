import { IConfigProviderProps } from '../../../types/config';
/** Slots */
type __VLS_Slots = {
    default?: () => any;
};
declare const __VLS_base: import('vue').DefineComponent<IConfigProviderProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IConfigProviderProps> & Readonly<{}>, {
    locale: string | null;
    labels: import('../../../types/config').ColorffyLabelsInput | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ConfigProvider.vue.d.ts.map
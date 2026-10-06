import { ISearchInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = ISearchInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
} & {
    search: (value: string) => any;
    clear: () => any;
    "update:modelValue": (value: string | null) => any;
    update: (value: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSearch?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onUpdate?: ((value: string | null) => any) | undefined;
}>, {
    modelValue: string | null;
    autocomplete: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Search.vue.d.ts.map
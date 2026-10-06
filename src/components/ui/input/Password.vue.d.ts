import { IPasswordInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IPasswordInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | null;
    'revealed'?: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
    "update:revealed": (value: boolean) => any;
} & {
    "update:modelValue": (value: string | null) => any;
    update: (value: string | null) => any;
    "update:revealed": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onUpdate?: ((value: string | null) => any) | undefined;
    "onUpdate:revealed"?: ((value: boolean) => any) | undefined;
}>, {
    modelValue: string | null;
    maxlength: string | number;
    autocomplete: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Password.vue.d.ts.map
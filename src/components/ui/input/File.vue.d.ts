import { IFileInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IFileInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: File | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: File | null) => any;
} & {
    "update:modelValue": (value: File | null) => any;
    update: (value: File | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: File | null) => any) | undefined;
    onUpdate?: ((value: File | null) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    modelValue: File | null;
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
    inputLabel: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=File.vue.d.ts.map
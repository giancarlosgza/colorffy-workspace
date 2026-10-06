import { ISelectInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = ISelectInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | number | Record<string, unknown> | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | Record<string, unknown> | null) => any;
} & {
    "update:modelValue": (value: string | number | Record<string, unknown> | null) => any;
    update: (value: string | number | Record<string, unknown> | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | Record<string, unknown> | null) => any) | undefined;
    onUpdate?: ((value: string | number | Record<string, unknown> | null) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    options: unknown[];
    modelValue: string | number | Record<string, unknown> | null;
    errorMessages: string[];
    optionalLabel: boolean;
    hideLabel: boolean;
    optionLabel: string | null;
    optionValue: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Select.vue.d.ts.map
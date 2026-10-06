import { IRangeInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IRangeInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | number | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
} & {
    "update:modelValue": (value: string | number | null) => any;
    update: (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onUpdate?: ((value: string | number | null) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    max: number;
    modelValue: string | number | null;
    min: number;
    step: number;
    errorMessages: string[];
    optionalLabel: boolean;
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Range.vue.d.ts.map
import { IRangeInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IRangeInputProps;
type __VLS_PublicProps = {
    'modelValue'?: string | number | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
} & {
    "update:modelValue": (value: string | number | null) => any;
    onUpdate: (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onOnUpdate?: ((value: string | number | null) => any) | undefined;
}>, {
    variant: import('../../..').InputVariant;
    size: import('../../..').InputSize;
    required: boolean;
    label: string | null;
    id: string | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    modelValue: string | number | null;
    min: number;
    max: number;
    step: number;
    errorMessages: string[];
    hideLabel: boolean;
    optionalLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Range.vue.d.ts.map
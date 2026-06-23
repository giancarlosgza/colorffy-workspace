import { ISelectInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = ISelectInputProps;
type __VLS_PublicProps = {
    'modelValue'?: string | number | Record<string, unknown> | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | Record<string, unknown> | null) => any;
} & {
    "update:modelValue": (value: string | number | Record<string, unknown> | null) => any;
    onUpdate: (value: string | number | Record<string, unknown> | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | Record<string, unknown> | null) => any) | undefined;
    onOnUpdate?: ((value: string | number | Record<string, unknown> | null) => any) | undefined;
}>, {
    variant: import('../../..').InputVariant;
    size: import('../../..').InputSize;
    required: boolean;
    label: string | null;
    id: string | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    options: unknown[];
    modelValue: string | number | Record<string, unknown> | null;
    optionLabel: string | null;
    optionValue: string | null;
    errorMessages: string[];
    hideLabel: boolean;
    optionalLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Select.vue.d.ts.map
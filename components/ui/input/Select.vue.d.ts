/** Interfaces */
interface ISelectInputProps {
    id?: string | null;
    label?: string | null;
    modelValue?: string | number | Record<string, unknown> | null;
    errorMessages?: string[];
    options?: any[];
    optionLabel?: string | null;
    optionValue?: string | null;
    placeholder?: string | null;
    disabled?: boolean;
    required?: boolean;
    optionalLabel?: boolean;
    variant?: 'filled' | 'outline' | 'transparent' | null;
    rounded?: boolean;
    customClass?: string | null;
}
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
    required: boolean;
    label: string | null;
    id: string | null;
    variant: "filled" | "outline" | "transparent" | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    options: any[];
    modelValue: string | number | Record<string, unknown> | null;
    errorMessages: string[];
    optionalLabel: boolean;
    optionLabel: string | null;
    optionValue: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Select.vue.d.ts.map
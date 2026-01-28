/** Interfaces */
interface IRangeInputProps {
    id?: string | null;
    label?: string | null;
    min?: number;
    max?: number;
    step?: number;
    modelValue?: string | number | null;
    errorMessages?: string[];
    optionalLabel?: boolean;
    variant?: 'filled' | 'outline' | 'transparent' | null;
    rounded?: boolean;
    customClass?: string | null;
    disabled?: boolean;
}
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
    label: string | null;
    id: string | null;
    variant: "filled" | "outline" | "transparent" | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    modelValue: string | number | null;
    errorMessages: string[];
    optionalLabel: boolean;
    min: number;
    max: number;
    step: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Range.vue.d.ts.map
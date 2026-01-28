/** Interfaces */
interface ITextInputProps {
    id?: string | null;
    label?: string | null;
    modelValue?: string | number | null;
    errorMessages?: string[];
    type?: string;
    maxlength?: string | number;
    placeholder?: string | null;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    optionalLabel?: boolean;
    min?: number | null;
    max?: number | null;
    variant?: 'filled' | 'outline' | 'transparent' | null;
    rounded?: boolean;
    customClass?: string | null;
}
/** Props */
type __VLS_Props = ITextInputProps;
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
    type: string;
    required: boolean;
    label: string | null;
    id: string | null;
    variant: "filled" | "outline" | "transparent" | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    modelValue: string | number | null;
    errorMessages: string[];
    maxlength: string | number;
    autofocus: boolean;
    optionalLabel: boolean;
    min: number | null;
    max: number | null;
    readonly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Text.vue.d.ts.map
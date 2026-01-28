/** Interfaces */
interface ITextareaInputProps {
    id?: string | null;
    label?: string | null;
    modelValue?: string | null;
    errorMessages?: string[];
    maxlength?: string | number;
    placeholder?: string | null;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean;
    autofocus?: boolean;
    optionalLabel?: boolean;
    rows?: number;
    cols?: number;
    resize?: 'none' | 'both' | 'horizontal' | 'vertical';
    variant?: 'filled' | 'outline' | 'transparent' | null;
    rounded?: boolean;
    customClass?: string | null;
}
/** Props */
type __VLS_Props = ITextareaInputProps;
type __VLS_PublicProps = {
    'modelValue'?: string | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
} & {
    "update:modelValue": (value: string | null) => any;
    onUpdate: (value: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onOnUpdate?: ((value: string | null) => any) | undefined;
}>, {
    required: boolean;
    label: string | null;
    id: string | null;
    variant: "filled" | "outline" | "transparent" | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    resize: "none" | "both" | "horizontal" | "vertical";
    modelValue: string | null;
    errorMessages: string[];
    maxlength: string | number;
    autofocus: boolean;
    optionalLabel: boolean;
    readonly: boolean;
    rows: number;
    cols: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Textarea.vue.d.ts.map
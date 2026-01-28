/** Interfaces */
interface IPhoneNumberInputProps {
    id?: string | null;
    label?: string | null;
    modelValue?: string | null;
    errorMessages?: string[];
    maxlength?: number;
    placeholder?: string | null;
    disabled?: boolean;
    required?: boolean;
    autofocus?: boolean;
    optionalLabel?: boolean;
    variant?: 'filled' | 'outline' | 'transparent' | null;
    rounded?: boolean;
    customClass?: string | null;
}
/** Props */
type __VLS_Props = IPhoneNumberInputProps;
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
    modelValue: string | null;
    errorMessages: string[];
    maxlength: number;
    autofocus: boolean;
    optionalLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=PhoneNumber.vue.d.ts.map
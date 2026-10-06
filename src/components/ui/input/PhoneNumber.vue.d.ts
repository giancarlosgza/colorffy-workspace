import { IPhoneNumberInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IPhoneNumberInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
} & {
    "update:modelValue": (value: string | null) => any;
    update: (value: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onUpdate?: ((value: string | null) => any) | undefined;
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
    modelValue: string | null;
    maxlength: number;
    autofocus: boolean;
    errorMessages: string[];
    optionalLabel: boolean;
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=PhoneNumber.vue.d.ts.map
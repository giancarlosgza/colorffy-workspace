import { IPhoneNumberInputProps } from '../../../types/input';
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
    variant: import('../../..').InputVariant;
    size: import('../../..').InputSize;
    required: boolean;
    label: string | null;
    id: string | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    modelValue: string | null;
    maxlength: number;
    autofocus: boolean;
    errorMessages: string[];
    hideLabel: boolean;
    optionalLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=PhoneNumber.vue.d.ts.map
import { IInputOtpProps } from '../../../types/input';
/** Props */
type __VLS_Props = IInputOtpProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
} & {
    "update:modelValue": (value: string) => any;
    update: (value: string) => any;
    complete: (value: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onUpdate?: ((value: string) => any) | undefined;
    onComplete?: ((value: string) => any) | undefined;
}>, {
    customClass: string | null;
    length: number;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    modelValue: string;
    autofocus: boolean;
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
    integerOnly: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Otp.vue.d.ts.map
import { ITextInputProps } from '../../../types/input';
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
    variant: import('../../..').InputVariant;
    size: import('../../..').InputSize;
    type: string;
    required: boolean;
    label: string | null;
    id: string | null;
    disabled: boolean;
    customClass: string | null;
    rounded: boolean;
    placeholder: string | null;
    modelValue: string | number | null;
    maxlength: string | number;
    autofocus: boolean;
    min: number | null;
    max: number | null;
    errorMessages: string[];
    hideLabel: boolean;
    readonly: boolean;
    optionalLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Text.vue.d.ts.map
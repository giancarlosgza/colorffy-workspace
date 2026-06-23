import { IRadioInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IRadioInputProps;
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
    size: import('../../..').InputSize;
    required: boolean;
    label: string | null;
    id: string | null;
    disabled: boolean;
    customClass: string | null;
    inline: boolean;
    options: unknown[];
    modelValue: string | number | null;
    optionLabel: string | null;
    optionValue: string | null;
    errorMessages: string[];
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Radio.vue.d.ts.map
import { IRadioInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IRadioInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | number | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number | null) => any;
} & {
    "update:modelValue": (value: string | number | null) => any;
    update: (value: string | number | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number | null) => any) | undefined;
    onUpdate?: ((value: string | number | null) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    id: string | null;
    disabled: boolean;
    inline: boolean;
    options: unknown[];
    modelValue: string | number | null;
    errorMessages: string[];
    hideLabel: boolean;
    optionLabel: string | null;
    optionValue: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Radio.vue.d.ts.map
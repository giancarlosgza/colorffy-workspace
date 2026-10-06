import { ICheckProps } from '../../../types/input';
/** Props */
type __VLS_Props = ICheckProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | boolean | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | boolean | null) => any;
} & {
    "update:modelValue": (value: string | boolean | null) => any;
    update: (value: string | boolean | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | boolean | null) => any) | undefined;
    onUpdate?: ((value: string | boolean | null) => any) | undefined;
}>, {
    customClass: string | null;
    type: string;
    size: import('../../..').InputSize;
    required: boolean;
    placeholder: string | null;
    variant: "switch" | null;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    modelValue: string | boolean | null;
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Check.vue.d.ts.map
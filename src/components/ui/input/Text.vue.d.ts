import { ITextInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = ITextInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string | number | null;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_1: {}, __VLS_3: {};
type __VLS_Slots = {} & {
    prefix?: (props: typeof __VLS_1) => any;
} & {
    suffix?: (props: typeof __VLS_3) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
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
    type: string;
    size: import('../../..').InputSize;
    required: boolean;
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    max: number | null;
    modelValue: string | number | null;
    min: number | null;
    maxlength: string | number;
    autofocus: boolean;
    autocomplete: string | null;
    adornments: "attached" | "inline";
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Text.vue.d.ts.map
/** Interfaces */
interface IRadioInputProps {
    id?: string | null;
    labelDefaultOption: string;
    labelOption: string;
    type?: string;
    modelValue?: string | number | null;
    customClass?: string | null;
}
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
    type: string;
    id: string | null;
    customClass: string | null;
    modelValue: string | number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Radio.vue.d.ts.map
/** Interfaces */
interface ICheckProps {
    id?: string | null;
    label: string;
    type?: string;
    modelValue?: string | boolean | null;
    errorMessages?: string[];
    customClass?: string | null;
}
/** Props */
type __VLS_Props = ICheckProps;
type __VLS_PublicProps = {
    'modelValue'?: string | boolean | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | boolean | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | boolean | null) => any) | undefined;
}>, {
    type: string;
    id: string | null;
    customClass: string | null;
    modelValue: string | boolean | null;
    errorMessages: string[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Check.vue.d.ts.map
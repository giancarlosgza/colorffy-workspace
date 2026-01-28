/** Interfaces */
interface IFileInputProps {
    id?: string | null;
    label?: string | null;
    inputLabel?: string | null;
    large?: boolean;
    modelValue?: File | null;
    customClass?: string | null;
}
/** Props */
type __VLS_Props = IFileInputProps;
type __VLS_PublicProps = {
    'modelValue'?: File | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: File | null) => any;
} & {
    "update:modelValue": (value: File | null) => any;
    onUpdate: (value: File | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: File | null) => any) | undefined;
    onOnUpdate?: ((value: File | null) => any) | undefined;
}>, {
    label: string | null;
    id: string | null;
    customClass: string | null;
    large: boolean;
    modelValue: File | null;
    inputLabel: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=File.vue.d.ts.map
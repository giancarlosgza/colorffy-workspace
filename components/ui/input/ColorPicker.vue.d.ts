/** Interfaces */
interface IColorPickerProps {
    id?: string | null;
    label?: string | null;
    maxLength?: number;
    modelValue?: string | null;
    customClass?: string | null;
}
/** Props */
type __VLS_Props = IColorPickerProps;
type __VLS_PublicProps = {
    'modelValue'?: string | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    onUpdate: (...args: any[]) => void;
    "update:modelValue": (value: string | null) => void;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onOnUpdate?: ((...args: any[]) => any) | undefined;
}>, {
    label: string | null;
    id: string | null;
    customClass: string | null;
    modelValue: string | null;
    maxLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ColorPicker.vue.d.ts.map
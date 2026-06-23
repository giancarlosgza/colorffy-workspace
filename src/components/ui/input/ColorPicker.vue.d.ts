import { IColorPickerProps } from '../../../types/input';
/** Props */
type __VLS_Props = IColorPickerProps;
type __VLS_PublicProps = {
    'modelValue'?: string | null;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | null) => any;
} & {
    onUpdate: (value: string | null) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | null) => any) | undefined;
    onOnUpdate?: ((value: string | null) => any) | undefined;
}>, {
    size: import('../../..').InputSize;
    required: boolean;
    label: string | null;
    id: string | null;
    customClass: string | null;
    modelValue: string | null;
    hideLabel: boolean;
    maxLength: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ColorPicker.vue.d.ts.map
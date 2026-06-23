import { ICheckProps } from '../../../types/input';
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
    variant: "switch" | null;
    size: import('../../..').InputSize;
    type: string;
    required: boolean;
    id: string | null;
    customClass: string | null;
    modelValue: string | boolean | null;
    errorMessages: string[];
    hideLabel: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Check.vue.d.ts.map
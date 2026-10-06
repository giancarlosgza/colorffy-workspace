import { IButtonToggleGroupProps, IButtonToggleOption } from '../../../types/button';
/** Props */
type __VLS_Props = IButtonToggleGroupProps;
type __VLS_ModelProps = {
    /** Model */
    modelValue?: string;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | undefined) => any;
} & {
    optionClick: (event: MouseEvent | KeyboardEvent, item: IButtonToggleOption) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOptionClick?: ((event: MouseEvent | KeyboardEvent, item: IButtonToggleOption) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=ButtonToggleGroup.vue.d.ts.map
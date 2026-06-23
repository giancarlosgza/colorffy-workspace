import { IButtonToggleGroupProps, IButtonToggleOption } from '../../../types/button';
/** Props */
type __VLS_Props = IButtonToggleGroupProps;
type __VLS_PublicProps = {
    modelValue?: string;
} & __VLS_Props;
declare const _default: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string) => any;
} & {
    onOptionClick: (event: MouseEvent | KeyboardEvent, item: IButtonToggleOption) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onOnOptionClick?: ((event: MouseEvent | KeyboardEvent, item: IButtonToggleOption) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
}>, {
    ariaLabel: string;
    groupLabel: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ButtonToggleGroup.vue.d.ts.map
import { ComboboxValue, IMultiSelectInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = IMultiSelectInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: ComboboxValue[];
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_36: {
    option: unknown;
    selected: boolean;
    active: boolean;
}, __VLS_43: {
    query: string;
};
type __VLS_Slots = {} & {
    option?: (props: typeof __VLS_36) => any;
} & {
    empty?: (props: typeof __VLS_43) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: ComboboxValue[]) => any;
} & {
    search: (query: string) => any;
    add: (value: ComboboxValue) => any;
    remove: (value: ComboboxValue) => any;
    "update:modelValue": (value: ComboboxValue[]) => any;
    update: (value: ComboboxValue[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onSearch?: ((query: string) => any) | undefined;
    onAdd?: ((value: ComboboxValue) => any) | undefined;
    onRemove?: ((value: ComboboxValue) => any) | undefined;
    "onUpdate:modelValue"?: ((value: ComboboxValue[]) => any) | undefined;
    onUpdate?: ((value: ComboboxValue[]) => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    loading: boolean;
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    max: number | null;
    options: unknown[];
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
    optionLabel: string | null;
    optionValue: string | null;
    optionDisabled: string | null;
    optionGroup: string | null;
    filterable: boolean;
    clearable: boolean;
    remote: boolean;
    searchDelay: number;
    minSearchLength: number;
    freeText: boolean;
    maxChips: number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=MultiSelect.vue.d.ts.map
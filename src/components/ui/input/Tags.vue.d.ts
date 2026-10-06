import { ITagsInputProps } from '../../../types/input';
/** Props */
type __VLS_Props = ITagsInputProps;
type __VLS_ModelProps = {
    /** Model */
    'modelValue'?: string[];
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string[]) => any;
} & {
    add: (tag: string) => any;
    remove: (tag: string) => any;
    "update:modelValue": (value: string[]) => any;
    update: (value: string[]) => any;
    reject: (tag: string, reason: "duplicate" | "max") => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    onAdd?: ((tag: string) => any) | undefined;
    onRemove?: ((tag: string) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string[]) => any) | undefined;
    onUpdate?: ((value: string[]) => any) | undefined;
    onReject?: ((tag: string, reason: "duplicate" | "max") => any) | undefined;
}>, {
    customClass: string | null;
    label: string | null;
    size: import('../../..').InputSize;
    required: boolean;
    placeholder: string | null;
    variant: import('../../..').InputVariant;
    id: string | null;
    disabled: boolean;
    rounded: boolean;
    separator: string;
    max: number | null;
    maxlength: number;
    errorMessages: string[];
    readonly: boolean;
    optionalLabel: boolean;
    hideLabel: boolean;
    allowDuplicates: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Tags.vue.d.ts.map
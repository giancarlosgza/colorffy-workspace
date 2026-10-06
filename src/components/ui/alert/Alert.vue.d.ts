import { IAlertProps } from '../../../types/alert';
declare var __VLS_26: {}, __VLS_28: {};
type __VLS_Slots = {} & {
    content?: (props: typeof __VLS_26) => any;
} & {
    actions?: (props: typeof __VLS_28) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IAlertProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    dismiss: () => any;
}, string, import('vue').PublicProps, Readonly<IAlertProps> & Readonly<{
    onDismiss?: (() => any) | undefined;
}>, {
    customClass: import('../../../types/alert').AlertClassName;
    type: import('../../../types/alert').AlertType;
    size: import('../../../types/alert').AlertSize;
    placement: import('../../../types/alert').AlertPlacement;
    variant: import('../../../types/alert').AlertVariant;
    rounded: boolean;
    duration: number;
    critical: boolean;
    dismissible: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Alert.vue.d.ts.map
import { IConfirmModalProps } from '../../../types/dialog';
/** Methods */
declare function showDialog(): void;
declare function closeDialog(): void;
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    messages?: (props: typeof __VLS_6) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IConfirmModalProps, {
    showDialog: typeof showDialog;
    closeDialog: typeof closeDialog;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    confirm: () => any;
}, string, import('vue').PublicProps, Readonly<IConfirmModalProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    title: string | null;
    customClass: import('../../../types/dialog').DialogClassName | null;
    size: import('../../../types/dialog').DialogSize | null;
    variant: import('../../../types/dialog').DialogVariant | null;
    mode: import('../../../types/dialog').DialogMode;
    message: string | null;
    isLoading: boolean;
    showAsModal: boolean | null;
    closeOnClickOutside: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ConfirmModal.vue.d.ts.map
import { IDialogProps } from '../../../types/dialog';
/** Methods */
declare function showDialog(): void;
declare function closeDialog(): void;
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_1) => any;
} & {
    body?: (props: typeof __VLS_3) => any;
} & {
    footer?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IDialogProps, {
    showDialog: typeof showDialog;
    closeDialog: typeof closeDialog;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
}, string, import('vue').PublicProps, Readonly<IDialogProps> & Readonly<{
    onClose?: (() => any) | undefined;
}>, {
    customClass: import('../../../types/dialog').DialogClassName | null;
    size: import('../../../types/dialog').DialogSize | null;
    mode: import('../../../types/dialog').DialogMode;
    showAsModal: boolean | null;
    closeOnClickOutside: boolean;
    bodyDialogClass: import('../../../types/dialog').DialogClassName | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Modal.vue.d.ts.map
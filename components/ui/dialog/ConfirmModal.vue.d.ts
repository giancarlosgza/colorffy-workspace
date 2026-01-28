import { IDialogProps } from '../../../types/dialog';
/** Interfaces */
interface IConfirmModalProps extends IDialogProps {
    isLoading?: boolean;
    loadingLabel?: string;
    cancelLabel?: string;
}
/** Methods */
declare function showDialog(): void;
declare function closeDialog(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        messages?(_: {}): any;
    };
    refs: {
        dialogRef: HTMLDialogElement;
    };
    rootEl: HTMLDialogElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IConfirmModalProps, {
    showDialog: typeof showDialog;
    closeDialog: typeof closeDialog;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    confirm: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<IConfirmModalProps> & Readonly<{
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    title: string | null;
    size: import('../../../types/dialog').DialogSize | null;
    variant: import('../../../types/dialog').DialogVariant | null;
    customClass: import('../../../types/dialog').DialogClassName | null;
    mode: import('../../../types/dialog').DialogMode;
    message: string | null;
    isLoading: boolean;
    loadingLabel: string;
    cancelLabel: string;
    showAsModal: boolean | null;
    confirmLabel: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    dialogRef: HTMLDialogElement;
}, HTMLDialogElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ConfirmModal.vue.d.ts.map
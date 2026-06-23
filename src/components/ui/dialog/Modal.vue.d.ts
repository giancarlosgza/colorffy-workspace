import { IDialogProps } from '../../../types/dialog';
/** Methods */
declare function showDialog(): void;
declare function closeDialog(): void;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        body?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {
        dialogRef: HTMLDialogElement;
    };
    rootEl: HTMLDialogElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IDialogProps, {
    showDialog: typeof showDialog;
    closeDialog: typeof closeDialog;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onCloseDialog: () => any;
}, string, import('vue').PublicProps, Readonly<IDialogProps> & Readonly<{
    onOnCloseDialog?: (() => any) | undefined;
}>, {
    size: import('../../../types/dialog').DialogSize | null;
    customClass: import('../../../types/dialog').DialogClassName | null;
    mode: import('../../../types/dialog').DialogMode;
    showAsModal: boolean | null;
    closeOnClickOutside: boolean;
    bodyDialogClass: import('../../../types/dialog').DialogClassName | null;
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
//# sourceMappingURL=Modal.vue.d.ts.map
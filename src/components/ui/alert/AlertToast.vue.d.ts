import { AlertPlacement, AlertVariant, IAlertToastProps, IToastOptions } from '../../../types/alert';
/** Methods */
declare function showToast(options?: IToastOptions): void;
declare const __VLS_export: import('vue').DefineComponent<IAlertToastProps, {
    title: import('vue').Ref<string, string>;
    message: import('vue').Ref<string, string>;
    variant: import('vue').Ref<AlertVariant, AlertVariant>;
    placement: import('vue').Ref<AlertPlacement, AlertPlacement>;
    showToast: typeof showToast;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IAlertToastProps> & Readonly<{}>, {
    placement: AlertPlacement;
    snackbarTitle: string;
    snackbarMessage: string;
    snackbarVariant: AlertVariant;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=AlertToast.vue.d.ts.map
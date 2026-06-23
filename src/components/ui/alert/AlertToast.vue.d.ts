import { AlertPlacement, AlertVariant, IAlertToastProps, IToastOptions } from '../../../types/alert';
declare function showToast(options?: IToastOptions): void;
declare const _default: import('vue').DefineComponent<IAlertToastProps, {
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
export default _default;
//# sourceMappingURL=AlertToast.vue.d.ts.map
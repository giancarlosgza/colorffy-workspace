import { AlertVariant } from '../../../types/alert';
/** Interfaces */
interface IAlertToastProps {
    snackbarTitle?: string | null;
    snackbarMessage?: string | null;
    snackbarVariant?: AlertVariant;
}
/** Methods */
declare function showToast(): void;
declare const _default: import('vue').DefineComponent<IAlertToastProps, {
    title: import('vue').Ref<string, string>;
    message: import('vue').Ref<string, string>;
    variant: import('vue').Ref<AlertVariant, AlertVariant>;
    showToast: typeof showToast;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IAlertToastProps> & Readonly<{}>, {
    snackbarTitle: string | null;
    snackbarMessage: string | null;
    snackbarVariant: AlertVariant;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
//# sourceMappingURL=AlertToast.vue.d.ts.map
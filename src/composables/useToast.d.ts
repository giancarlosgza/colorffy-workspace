import { Ref } from 'vue';
import { IAlertProps } from '../types/alert';
import { IToastDisplay } from '../types/toast';
type ToastVariant = NonNullable<IAlertProps['variant']>;
interface ToastOptions {
    duration?: number;
}
export declare function useToast(toast: Ref<IToastDisplay | null>): {
    onToastMessage: (variant: ToastVariant, message: string, opts?: ToastOptions) => void;
    success: (message: string, opts?: ToastOptions) => void;
    warning: (message: string, opts?: ToastOptions) => void;
    danger: (message: string, opts?: ToastOptions) => void;
};
export {};
//# sourceMappingURL=useToast.d.ts.map
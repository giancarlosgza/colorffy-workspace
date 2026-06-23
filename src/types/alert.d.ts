export type AlertType = 'banner' | 'tonal' | 'snackbar';
export type AlertVariant = 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'transparent' | 'default';
export type AlertSize = 'sm';
export type AlertPlacement = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right';
export type AlertClassName = string | string[] | Record<string, boolean>;
export interface IToastOptions {
    message?: string;
    variant?: AlertVariant;
    placement?: AlertPlacement;
    /** Auto-hide delay in milliseconds. Defaults to 3000. */
    duration?: number;
}
/**
 * Interface props for the Alert component.
 * Notes:
 * - Prefer optional props over explicit null unions.
 * - `type` controls surface (banner | tonal | snackbar), `variant` controls intent (primary | success | warning | danger | etc.).
 * - Use `size` for scalable sizing ('sm').
 */
export interface IAlertProps {
    /**
     * Optional title of the alert.
     */
    title?: string;
    /**
     * Optional message of the alert.
     */
    message?: string;
    /**
     * Surface style of the alert.
     */
    type?: AlertType;
    /**
     * Variant color of the alert.
     */
    variant?: AlertVariant;
    /**
     * Scalable size of the alert. Only 'sm' is supported.
     */
    size?: AlertSize;
    /**
     * Marks the alert as critical.
     */
    critical?: boolean;
    /**
     * Optional rounded style. When true, applies a fully rounded alert style.
     */
    rounded?: boolean;
    /**
     * Placement configuration of the alert (only applicable when type is snackbar).
     */
    placement?: AlertPlacement;
    /**
     * Custom classes to apply to the root element.
     */
    customClass?: AlertClassName;
}
/**
 * Interface props for the AlertToast component.
 */
export interface IAlertToastProps {
    /**
     * Optional title of the toast.
     */
    snackbarTitle?: string;
    /**
     * Optional message of the toast.
     */
    snackbarMessage?: string;
    /**
     * Optional variant of the toast.
     */
    snackbarVariant?: AlertVariant;
    /**
     * Placement of the toast (only applicable when type is snackbar).
     */
    placement?: AlertPlacement;
}
//# sourceMappingURL=alert.d.ts.map
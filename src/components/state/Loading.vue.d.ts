import { StyleValue } from 'vue';
/** Interfaces */
interface ILoadingProps {
    title?: string | null;
    subtitle?: string | null;
    customClass?: string | string[] | null;
    loadingStyles?: StyleValue;
    spinnerSize?: string | number;
    hideSpinner?: boolean;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const __VLS_export: import('vue').DefineComponent<ILoadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ILoadingProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    customClass: string | string[] | null;
    role: string;
    ariaLive: "off" | "polite" | "assertive";
    loadingStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    spinnerSize: string | number;
    hideSpinner: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Loading.vue.d.ts.map
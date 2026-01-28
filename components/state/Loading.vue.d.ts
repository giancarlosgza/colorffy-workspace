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
declare const _default: import('vue').DefineComponent<ILoadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ILoadingProps> & Readonly<{}>, {
    title: string | null;
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    subtitle: string | null;
    ariaLive: "off" | "polite" | "assertive";
    loadingStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    spinnerSize: string | number;
    hideSpinner: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=Loading.vue.d.ts.map
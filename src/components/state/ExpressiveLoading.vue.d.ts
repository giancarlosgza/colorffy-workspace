import { StyleValue } from 'vue';
/** Interfaces */
interface IExpressiveLoadingProps {
    title?: string[] | string | null;
    interval?: number;
    size?: 'sm' | 'md' | 'lg';
    customClass?: string | string[] | null;
    loadingStyles?: StyleValue;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const _default: import('vue').DefineComponent<IExpressiveLoadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IExpressiveLoadingProps> & Readonly<{}>, {
    title: string[] | string | null;
    size: "sm" | "md" | "lg";
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    ariaLive: "off" | "polite" | "assertive";
    interval: number;
    loadingStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ExpressiveLoading.vue.d.ts.map
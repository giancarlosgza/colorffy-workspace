import { StyleValue } from 'vue';
/** Interfaces */
interface IShapeLoadingProps {
    title?: string | null;
    subtitle?: string | null;
    customClass?: string | string[] | null;
    loadingStyles?: StyleValue;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const __VLS_export: import('vue').DefineComponent<IShapeLoadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IShapeLoadingProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    customClass: string | string[] | null;
    role: string;
    ariaLive: "off" | "polite" | "assertive";
    loadingStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=ShapeLoading.vue.d.ts.map
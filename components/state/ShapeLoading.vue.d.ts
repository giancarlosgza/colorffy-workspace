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
declare const _default: import('vue').DefineComponent<IShapeLoadingProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IShapeLoadingProps> & Readonly<{}>, {
    title: string | null;
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    subtitle: string | null;
    ariaLive: "off" | "polite" | "assertive";
    loadingStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
export default _default;
//# sourceMappingURL=ShapeLoading.vue.d.ts.map
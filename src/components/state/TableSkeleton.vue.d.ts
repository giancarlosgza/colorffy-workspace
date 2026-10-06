import { StyleValue } from 'vue';
/** Interfaces */
interface ITableSkeletonProps {
    skeletonRows?: number;
    skeletonCols?: number;
    skeletonColExpanded?: number;
    customClass?: string | string[] | null;
    skeletonStyles?: StyleValue;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
    isExpanded?: boolean;
}
declare const __VLS_export: import('vue').DefineComponent<ITableSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITableSkeletonProps> & Readonly<{}>, {
    customClass: string | string[] | null;
    role: string;
    skeletonStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    ariaLive: "off" | "polite" | "assertive";
    skeletonRows: number;
    skeletonCols: number;
    skeletonColExpanded: number;
    isExpanded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=TableSkeleton.vue.d.ts.map
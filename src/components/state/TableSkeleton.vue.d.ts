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
declare const _default: import('vue').DefineComponent<ITableSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITableSkeletonProps> & Readonly<{}>, {
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    skeletonStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    ariaLive: "off" | "polite" | "assertive";
    skeletonRows: number;
    skeletonCols: number;
    skeletonColExpanded: number;
    isExpanded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLTableSectionElement>;
export default _default;
//# sourceMappingURL=TableSkeleton.vue.d.ts.map
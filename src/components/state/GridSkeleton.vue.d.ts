/** Interfaces */
interface IGridSkeletonProps {
    skeletonGridItems?: number;
    gridLayoutClasses?: string | string[] | null;
    cardVariant?: string;
    showFooter?: boolean;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
}
declare const __VLS_export: import('vue').DefineComponent<IGridSkeletonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IGridSkeletonProps> & Readonly<{}>, {
    role: string;
    ariaLive: "off" | "polite" | "assertive";
    skeletonGridItems: number;
    gridLayoutClasses: string | string[] | null;
    cardVariant: string;
    showFooter: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=GridSkeleton.vue.d.ts.map
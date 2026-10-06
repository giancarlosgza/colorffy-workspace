import { IPaginationProps } from '../../../types/pagination';
/** Props */
type __VLS_Props = IPaginationProps;
type __VLS_ModelProps = {
    /** Model */
    'page'?: number;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare const __VLS_export: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:page": (value: number) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:page"?: ((value: number) => any) | undefined;
}>, {
    customClass: import('../../..').ClassValue | null;
    size: import('../../..').SizeLevel | null;
    labels: Partial<import('../../../types/pagination').IPaginationLabels> | null;
    compact: boolean;
    disabled: boolean;
    total: number;
    siblingCount: number;
    showEdges: boolean;
    pageSize: number;
    totalPages: number | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: typeof __VLS_export;
export default _default;
//# sourceMappingURL=Pagination.vue.d.ts.map
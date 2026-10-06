import { IDatatableColumn, IDatatableProps } from '../../../types/datatable';
/** Props */
type __VLS_Props = IDatatableProps;
type __VLS_ModelProps = {
    /** Model */
    'selected'?: (string | number)[];
    'page'?: number;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_1: {}, __VLS_9: {}, __VLS_11: {
    columns: IDatatableColumn[];
    allVisible: boolean;
    isVisible: (key: string) => boolean;
    isLocked: (key: string) => boolean;
    toggle: (key: string) => void;
    toggleAll: () => void;
}, __VLS_27: {
    columns: IDatatableColumn[];
    allVisible: boolean;
    isVisible: (key: string) => boolean;
    isLocked: (key: string) => boolean;
    toggle: (key: string) => void;
    toggleAll: () => void;
}, __VLS_49: {}, __VLS_67: `cell-${string}`, __VLS_68: {
    item: Record<string, any>;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_67>]?: (props: typeof __VLS_68) => any;
} & {
    controls?: (props: typeof __VLS_1) => any;
} & {
    'actions-start'?: (props: typeof __VLS_9) => any;
} & {
    'column-toggle'?: (props: typeof __VLS_11) => any;
} & {
    'column-manager'?: (props: typeof __VLS_27) => any;
} & {
    'actions-end'?: (props: typeof __VLS_49) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:page": (value: number) => any;
    "update:selected": (value: (string | number)[]) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:page"?: ((value: number) => any) | undefined;
    "onUpdate:selected"?: ((value: (string | number)[]) => any) | undefined;
}>, {
    pagination: import('../../../types/datatable').IDatatablePagination | null;
    selectable: boolean;
    skeletonRows: number;
    tableClass: "table-bordered" | "table-striped" | "table-borderless" | (string & {});
    isLoading: boolean;
    stickyHeader: boolean;
    stickyHeight: string | number | null;
    defaultSortKey: string;
    defaultSortOrder: "asc" | "desc";
    sortable: boolean;
    columnManager: boolean;
    toolbarButton: import('../../../types/datatable').DatatableToolbarButton | null;
    emptyStateUseCustomIcon: boolean;
    emptyStateIconCode: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Datatable.vue.d.ts.map
import { IDatatableProps } from '../../../types/datatable';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: Partial<Record<`cell-${string}`, (_: {
        item: Record<string, any>;
    }) => any>> & {
        controls?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IDatatableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IDatatableProps> & Readonly<{}>, {
    skeletonRows: number;
    skeletonCols: number;
    skeletonColExpanded: number;
    isExpanded: boolean;
    tableClass: "table-bordered" | "table-striped" | "table-borderless" | (string & {});
    isLoading: boolean;
    defaultSortKey: string;
    defaultSortOrder: "asc" | "desc";
    sortable: boolean;
    columnManager: boolean;
    columnsToggleTooltip: string | import('../../../types/datatable').IColumnsToggleTooltip;
    columnManagerText: string;
    columnManagerTooltip: string;
    emptyStateTitle: string;
    emptyStateSubtitle: string;
    emptyStateUseCustomIcon: boolean;
    emptyStateIconCode: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Datatable.vue.d.ts.map
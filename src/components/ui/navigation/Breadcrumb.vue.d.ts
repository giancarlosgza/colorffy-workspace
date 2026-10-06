import { IBreadcrumbItem, IBreadcrumbProps } from '../../../types/breadcrumb';
declare var __VLS_1: {
    item: IBreadcrumbItem | undefined;
    index: number;
    isCurrent: boolean;
}, __VLS_16: {
    item: IBreadcrumbItem | undefined;
    index: number;
    isCurrent: boolean;
}, __VLS_23: {};
type __VLS_Slots = {} & {
    item?: (props: typeof __VLS_1) => any;
} & {
    item?: (props: typeof __VLS_16) => any;
} & {
    separator?: (props: typeof __VLS_23) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IBreadcrumbProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    itemClick: (item: IBreadcrumbItem, index: number) => any;
}, string, import('vue').PublicProps, Readonly<IBreadcrumbProps> & Readonly<{
    onItemClick?: ((item: IBreadcrumbItem, index: number) => any) | undefined;
}>, {
    customClass: import('../../..').ClassValue | null;
    as: string | object;
    separator: string;
    separatorIcon: string | null;
    structuredData: boolean;
    baseUrl: string;
    maxItems: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Breadcrumb.vue.d.ts.map
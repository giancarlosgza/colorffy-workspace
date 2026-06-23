import { IBreadcrumbItem, IBreadcrumbProps } from '../../../types/breadcrumb';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        item?(_: {
            item: IBreadcrumbItem | undefined;
            index: number;
            isCurrent: boolean;
        }): any;
        item?(_: {
            item: IBreadcrumbItem | undefined;
            index: number;
            isCurrent: boolean;
        }): any;
        separator?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IBreadcrumbProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    itemClick: (item: IBreadcrumbItem, index: number) => any;
}, string, import('vue').PublicProps, Readonly<IBreadcrumbProps> & Readonly<{
    onItemClick?: ((item: IBreadcrumbItem, index: number) => any) | undefined;
}>, {
    as: string | object;
    ariaLabel: string;
    customClass: import('../../..').ClassValue | null;
    separator: string;
    separatorIcon: string | null;
    structuredData: boolean;
    baseUrl: string;
    maxItems: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Breadcrumb.vue.d.ts.map
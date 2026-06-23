import { IListItemProps } from '../../../types/list';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'list-action'?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLLIElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IListItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IListItemProps> & Readonly<{}>, {
    text: string | null;
    title: string | null;
    icon: string | null;
    disabled: boolean;
    customClass: import('../../../types/list').ListClassName | null;
    active: boolean;
    customIconWrapperClass: import('../../../types/list').ListClassName | null;
    customIconClass: import('../../../types/list').ListClassName | null;
    hasActions: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ListItem.vue.d.ts.map
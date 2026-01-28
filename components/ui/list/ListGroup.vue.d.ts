import { IListGroupProps } from '../../../types/list';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLUListElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IListGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IListGroupProps> & Readonly<{}>, {
    size: import('../../../types/list').ListSize | string | null;
    variant: import('../../../types/list').ListVariant | string | null;
    customClass: import('../../../types/list').ListClassName | null;
    isInteractive: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ListGroup.vue.d.ts.map
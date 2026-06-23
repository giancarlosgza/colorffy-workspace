import { IAccordionItemProps } from '../../../types/accordion';
/** Props */
type __VLS_Props = IAccordionItemProps;
type __VLS_PublicProps = {
    'open'?: boolean;
} & __VLS_Props;
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        content?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDetailsElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    text: string | null;
    title: string | null;
    id: string | null;
    disabled: boolean;
    customClass: import('../../../types/accordion').AccordionClassName | null;
    name: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDetailsElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Accordion.vue.d.ts.map
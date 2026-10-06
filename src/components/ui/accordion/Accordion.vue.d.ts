import { IAccordionItemProps } from '../../../types/accordion';
/** Props */
type __VLS_Props = IAccordionItemProps;
type __VLS_ModelProps = {
    /** Model */
    'open'?: boolean;
};
type __VLS_PublicProps = __VLS_Props & __VLS_ModelProps;
declare var __VLS_1: {}, __VLS_8: {};
type __VLS_Slots = {} & {
    header?: (props: typeof __VLS_1) => any;
} & {
    content?: (props: typeof __VLS_8) => any;
};
declare const __VLS_base: import('vue').DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
}>, {
    title: string | null;
    customClass: import('../../../types/accordion').AccordionClassName | null;
    text: string | null;
    size: import('../../../types/accordion').AccordionSize | (string & {}) | null;
    icon: string | null;
    id: string | null;
    disabled: boolean;
    name: string | null;
    iconClass: import('../../../types/accordion').AccordionClassName | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Accordion.vue.d.ts.map
/** Interfaces */
interface IPaneContentProps {
    customClass?: string | string[] | null;
    containerClass?: string | string[] | null;
    isFullHeight?: boolean;
    ariaLabel?: string;
    ariaLabelledby?: string;
    ariaDescribedby?: string;
    id?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {
        paneContentRef: HTMLElement;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IPaneContentProps, {
    paneContentRef: import('vue').Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IPaneContentProps> & Readonly<{}>, {
    ariaLabel: string;
    id: string;
    customClass: string | string[] | null;
    containerClass: string | string[] | null;
    isFullHeight: boolean;
    ariaLabelledby: string;
    ariaDescribedby: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    paneContentRef: HTMLElement;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PaneContent.vue.d.ts.map
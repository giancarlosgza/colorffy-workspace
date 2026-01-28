import { StyleValue } from 'vue';
/** Interfaces */
interface IEmptyProps {
    title?: string | null;
    subtitle?: string | null;
    customClass?: string | string[] | null;
    emptyStyles?: StyleValue;
    role?: string;
    ariaLabel?: string;
    ariaLive?: 'off' | 'polite' | 'assertive';
    useCustomIcon?: boolean;
    iconCode?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        button?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IEmptyProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IEmptyProps> & Readonly<{}>, {
    iconCode: string;
    title: string | null;
    ariaLabel: string;
    role: string;
    customClass: string | string[] | null;
    subtitle: string | null;
    ariaLive: "off" | "polite" | "assertive";
    emptyStyles: string | false | import('vue').CSSProperties | StyleValue[] | null;
    useCustomIcon: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Empty.vue.d.ts.map
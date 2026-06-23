import { ILinkTooltipProps } from '../../../types/button';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ILinkTooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ILinkTooltipProps> & Readonly<{}>, {
    text: string | null;
    variant: import('../../../types/button').ButtonVariant | (string & {});
    to: string | object;
    href: string;
    as: string | object;
    title: string | null;
    icon: boolean;
    size: import('../../../types/button').ButtonSizeLevel | (string & {});
    color: import('../../../types/button').ButtonColor | (string & {});
    id: string | null;
    iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
    iconTrailing: boolean;
    disabled: boolean;
    loading: boolean;
    customClass: import('../../../types/button').ButtonClassName | null;
    rounded: boolean;
    tooltipText: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=LinkTooltip.vue.d.ts.map
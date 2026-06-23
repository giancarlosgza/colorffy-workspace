import { IButtonTooltipProps } from '../../../types/button';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IButtonTooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: () => any;
}, string, import('vue').PublicProps, Readonly<IButtonTooltipProps> & Readonly<{
    onOnClick?: (() => any) | undefined;
}>, {
    text: string | null;
    variant: import('../../../types/button').ButtonVariant | (string & {});
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
    fluid: boolean;
    tooltipText: string;
    placement: "top" | "bottom" | "left" | "right" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end" | "right-start" | "right-end";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ButtonTooltip.vue.d.ts.map
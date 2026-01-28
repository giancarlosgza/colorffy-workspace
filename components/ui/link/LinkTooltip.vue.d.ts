import { IButtonProps } from '../../../types/button';
/** Interfaces */
interface ILinkTooltipProps extends Omit<IButtonProps, 'onClick'> {
    to?: string | object;
    href?: string;
    tooltipText?: string;
    as?: string | object;
}
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
    title: string | null;
    size: string;
    color: string;
    id: string | null;
    variant: import('../../../types/button').ButtonVariant | string | undefined;
    iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
    icon: boolean;
    iconTrailing: boolean;
    disabled: boolean;
    loading: boolean;
    tooltipText: string;
    customClass: import('../../../types/button').ButtonClassName | null;
    rounded: boolean;
    to: string | object;
    href: string;
    as: string | object;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=LinkTooltip.vue.d.ts.map
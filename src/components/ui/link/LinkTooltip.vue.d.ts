import { ILinkTooltipProps } from '../../../types/button';
declare var __VLS_14: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ILinkTooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ILinkTooltipProps> & Readonly<{}>, {
    title: string | null;
    fluid: boolean;
    customClass: import('../../../types/button').ButtonClassName | null;
    text: string | null;
    size: import('../../../types/button').ButtonSizeLevel | (string & {});
    color: import('../../../types/button').ButtonColor | (string & {});
    icon: boolean;
    to: string | object;
    href: string;
    as: string | object;
    loading: boolean;
    tooltipText: string | null;
    placement: import('../../..').FloatingPlacement;
    variant: import('../../../types/button').ButtonVariant | (string & {});
    id: string | null;
    iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
    iconTrailing: boolean;
    disabled: boolean;
    rounded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=LinkTooltip.vue.d.ts.map
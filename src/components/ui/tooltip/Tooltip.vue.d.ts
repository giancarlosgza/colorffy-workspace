import { ITooltipProps } from '../../../types/tooltip';
declare var __VLS_8: {}, __VLS_11: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_8) => any;
} & {
    content?: (props: typeof __VLS_11) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ITooltipProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITooltipProps> & Readonly<{}>, {
    customClass: import('../../..').ClassValue | null;
    text: string | null;
    placement: import('../../..').FloatingPlacement;
    disabled: boolean;
    ariaId: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Tooltip.vue.d.ts.map
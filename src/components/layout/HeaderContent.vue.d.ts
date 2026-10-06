import { IHeaderContentProps } from '../../types/layout';
declare var __VLS_21: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_21) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IHeaderContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    back: () => any;
}, string, import('vue').PublicProps, Readonly<IHeaderContentProps> & Readonly<{
    onBack?: (() => any) | undefined;
}>, {
    title: string | null;
    subtitle: string | null;
    containerClass: import('../..').ClassValue | null;
    size: import('../../types/layout').HeaderContentSize | (string & {}) | null;
    as: string;
    headline: string | null;
    hideActionsWhenNarrow: boolean;
    backButton: boolean;
    viewTransitionName: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=HeaderContent.vue.d.ts.map
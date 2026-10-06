import { ITimelineItem, ITimelineProps } from '../../../types/timeline';
declare var __VLS_7: `item-${string}`, __VLS_8: {
    item: ITimelineItem;
}, __VLS_10: {
    item: ITimelineItem;
};
type __VLS_Slots = {} & {
    [K in NonNullable<typeof __VLS_7>]?: (props: typeof __VLS_8) => any;
} & {
    item?: (props: typeof __VLS_10) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ITimelineProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITimelineProps> & Readonly<{}>, {
    customClass: import('../../../types/timeline').TimelineClassName | null;
    size: import('../../../types/timeline').TimelineSize;
    align: import('../../../types/timeline').TimelineAlign;
    items: ITimelineItem[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Timeline.vue.d.ts.map
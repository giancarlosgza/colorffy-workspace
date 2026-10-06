import { ISubheadingContentProps } from '../../types/layout';
declare var __VLS_7: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_7) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ISubheadingContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ISubheadingContentProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    customClass: import('../..').ClassValue | null;
    as: string;
    gutter: import('../../types/layout').SubheadingContentGutter | (string & {}) | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=SubheadingContent.vue.d.ts.map
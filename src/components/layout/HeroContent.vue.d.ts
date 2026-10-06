import { IHeroContentProps } from '../../types/layout';
declare var __VLS_1: {};
type __VLS_Slots = {} & {
    actions?: (props: typeof __VLS_1) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IHeroContentProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IHeroContentProps> & Readonly<{}>, {
    title: string | null;
    subtitle: string | null;
    customClass: import('../..').ClassValue | null;
    size: import('../../types/layout').HeroContentSize | (string & {}) | null;
    headingId: string;
    headline: string | null;
    viewTransitionName: string | null;
    align: import('../../types/layout').HeroContentAlign | (string & {}) | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=HeroContent.vue.d.ts.map
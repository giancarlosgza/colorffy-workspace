import { ICardProps } from '../../../types/card';
declare var __VLS_8: {}, __VLS_10: {}, __VLS_12: {}, __VLS_14: {};
type __VLS_Slots = {} & {
    media?: (props: typeof __VLS_8) => any;
} & {
    header?: (props: typeof __VLS_10) => any;
} & {
    body?: (props: typeof __VLS_12) => any;
} & {
    footer?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import('vue').DefineComponent<ICardProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ICardProps> & Readonly<{}>, {
    title: string | null;
    customClass: import('../../../types/card').CardClassName | null;
    size: import('../../../types/card').CardSize;
    to: string | object | null;
    href: string | null;
    as: string | object | null;
    variant: import('../../../types/card').CardVariant | (string & {});
    id: string | null;
    selectable: boolean;
    imageUrl: string | null;
    imageAlt: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Card.vue.d.ts.map
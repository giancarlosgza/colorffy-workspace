import { IListItemProps } from '../../../types/list';
declare var __VLS_7: {}, __VLS_14: {};
type __VLS_Slots = {} & {
    media?: (props: typeof __VLS_7) => any;
} & {
    'list-action'?: (props: typeof __VLS_14) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IListItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IListItemProps> & Readonly<{}>, {
    title: string | null;
    customClass: import('../../../types/list').ListClassName | null;
    text: string | null;
    icon: string | null;
    to: string | object | null;
    href: string | null;
    as: string | object | null;
    disabled: boolean;
    active: boolean;
    imageUrl: string | null;
    imageAlt: string | null;
    customIconWrapperClass: import('../../../types/list').ListClassName | null;
    customIconClass: import('../../../types/list').ListClassName | null;
    customImageClass: import('../../../types/list').ListClassName | null;
    hasActions: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ListItem.vue.d.ts.map
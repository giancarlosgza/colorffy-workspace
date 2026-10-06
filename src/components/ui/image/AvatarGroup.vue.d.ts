import { IAvatarGroupProps } from '../../../types/avatar';
declare var __VLS_6: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_6) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IAvatarGroupProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IAvatarGroupProps> & Readonly<{}>, {
    customClass: import('../../..').ClassValue | null;
    size: import('../../../types/avatar').AvatarSize;
    color: import('../../..').ThemeColor | null;
    variant: import('../../../types/avatar').AvatarVariant | null;
    max: number;
    avatars: import('../../../types/avatar').IAvatarProps[];
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=AvatarGroup.vue.d.ts.map
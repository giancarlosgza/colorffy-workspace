import { IPopoverMenuUserProps } from '../../../types/navigation';
declare var __VLS_1: {}, __VLS_3: {}, __VLS_5: {};
type __VLS_Slots = {} & {
    avatar?: (props: typeof __VLS_1) => any;
} & {
    default?: (props: typeof __VLS_3) => any;
} & {
    trailing?: (props: typeof __VLS_5) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IPopoverMenuUserProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IPopoverMenuUserProps> & Readonly<{}>, {
    customClass: string | string[] | null;
    alt: string | null;
    email: string | null;
    user: import('../../../types/navigation').IUserData | null;
    displayName: string | null;
    photoUrl: string | null;
    avatarClass: string | string[] | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const __VLS_export: __VLS_WithSlots<typeof __VLS_base, __VLS_Slots>;
declare const _default: typeof __VLS_export;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PopoverMenuUser.vue.d.ts.map
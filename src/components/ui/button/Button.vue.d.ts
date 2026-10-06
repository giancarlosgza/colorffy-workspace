import { IButtonProps } from '../../../types/button';
declare var __VLS_1: {}, __VLS_17: {};
type __VLS_Slots = {} & {
    icon?: (props: typeof __VLS_1) => any;
} & {
    icon?: (props: typeof __VLS_17) => any;
};
declare const __VLS_base: import('vue').DefineComponent<IButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    click: (event: MouseEvent) => any;
}, string, import('vue').PublicProps, Readonly<IButtonProps> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    title: string | null;
    fluid: boolean;
    customClass: import('../../../types/button').ButtonClassName | null;
    text: string | null;
    type: "button" | "submit" | "reset";
    size: import('../../../types/button').ButtonSizeLevel | (string & {});
    color: import('../../../types/button').ButtonColor | (string & {});
    icon: boolean;
    to: string | object;
    href: string;
    as: string | object;
    loading: boolean;
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
//# sourceMappingURL=Button.vue.d.ts.map
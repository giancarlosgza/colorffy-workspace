import { IButtonProps } from '../../../types/button';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLButtonElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: () => any;
}, string, import('vue').PublicProps, Readonly<IButtonProps> & Readonly<{
    onOnClick?: (() => any) | undefined;
}>, {
    text: string | null;
    title: string | null;
    size: string;
    color: string;
    id: string | null;
    variant: import('../../../types/button').ButtonVariant | string | undefined;
    iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
    icon: boolean;
    iconTrailing: boolean;
    disabled: boolean;
    loading: boolean;
    customClass: import('../../../types/button').ButtonClassName | null;
    rounded: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLButtonElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=Button.vue.d.ts.map
import { IButtonProps } from '../../../types/button';
/** Interfaces */
interface IButtonMenuProps extends IButtonProps {
    isMobile?: boolean;
    tooltipText?: string;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        icon?(_: {}): any;
        content?(_: {}): any;
        menu?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IButtonMenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    onClick: () => any;
}, string, import('vue').PublicProps, Readonly<IButtonMenuProps> & Readonly<{
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
    tooltipText: string;
    customClass: import('../../../types/button').ButtonClassName | null;
    rounded: boolean;
    isMobile: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=ButtonMenu.vue.d.ts.map
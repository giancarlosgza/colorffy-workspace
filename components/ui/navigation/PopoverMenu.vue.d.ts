/** Interfaces */
interface IMenuItem {
    id: string;
    to: string | object;
    icon: string;
    text: string;
    ariaLabel: string;
}
interface IPopoverMenuProps {
    isOpened?: boolean;
    menuItems?: IMenuItem[];
    currentRoute?: any;
    title?: string | null;
    subtitle?: string | null;
    avatarUrl?: string | null;
    showVerifiedIcon?: boolean;
    verifiedIconCode?: string;
    user?: any;
    auth?: any | null;
}
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        'body-extra'?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<IPopoverMenuProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    hideDropdown: () => any;
    menuItemClick: (to: string | object) => any;
}, string, import('vue').PublicProps, Readonly<IPopoverMenuProps> & Readonly<{
    onHideDropdown?: (() => any) | undefined;
    onMenuItemClick?: ((to: string | object) => any) | undefined;
}>, {
    title: string | null;
    subtitle: string | null;
    isOpened: boolean;
    menuItems: IMenuItem[];
    currentRoute: any;
    avatarUrl: string | null;
    showVerifiedIcon: boolean;
    verifiedIconCode: string;
    user: any;
    auth: any | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=PopoverMenu.vue.d.ts.map
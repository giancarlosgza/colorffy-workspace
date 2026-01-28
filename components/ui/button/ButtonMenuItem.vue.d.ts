import { IBadgeProps } from '../../../types/badge';
/** Interfaces */
interface IButtonMenuItemProps {
    itemText?: string;
    icon?: string | null;
    iconStyle?: string | Record<string, any> | null;
    iconClass?: string | string[] | null;
    isDestructive?: boolean;
    disabled?: boolean;
    customClass?: string | string[] | null;
    badge?: Partial<IBadgeProps> | null;
    shortcut?: string | null;
}
declare const _default: import('vue').DefineComponent<IButtonMenuItemProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<IButtonMenuItemProps> & Readonly<{}>, {
    icon: string | null;
    disabled: boolean;
    customClass: string | string[] | null;
    iconClass: string | string[] | null;
    iconStyle: string | Record<string, any> | null;
    badge: Partial<IBadgeProps> | null;
    itemText: string;
    isDestructive: boolean;
    shortcut: string | null;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLLIElement>;
export default _default;
//# sourceMappingURL=ButtonMenuItem.vue.d.ts.map
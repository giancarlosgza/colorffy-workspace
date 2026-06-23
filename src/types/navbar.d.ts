import { IBaseLinkProps } from './shared';
export type NavbarClassName = string | string[] | Record<string, boolean>;
/**
 * Interface props for the Navbar component.
 */
export interface INavbarProps {
    /**
     * Enable sticky positioning with .nav-sticky wrapper.
     * @default false
     */
    sticky?: boolean;
    /**
     * Use fluid container (.container-fluid vs .container).
     * @default false
     */
    fluid?: boolean;
    /**
     * Accessible label for the navigation landmark.
     * @default 'Main navigation'
     */
    ariaLabel?: string;
    /**
     * Optional custom CSS classes to apply to the navbar.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarBrand component.
 */
export interface INavbarBrandProps extends IBaseLinkProps {
    /**
     * Brand logo image URL.
     */
    logo?: string | null;
    /**
     * Initials to show in avatar (if no logo).
     */
    initials?: string | null;
}
/**
 * Interface props for the NavbarTitle component.
 */
export interface INavbarTitleProps {
    /**
     * Page title text to display.
     */
    title?: string;
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarToggle component.
 */
export interface INavbarToggleProps {
    /**
     * Optional id for the toggle button.
     * @default 'sidebar-collapse'
     */
    id?: string;
    /**
     * Id of the element this toggle controls (sets aria-controls on the button).
     */
    controls?: string;
    /**
     * Whether sidebar is collapsed.
     * Controls icon display and tooltip text.
     * @default false
     */
    collapsed?: boolean;
    /**
     * Tooltip text when sidebar is expanded.
     * @default 'Collapse sidebar'
     */
    collapseText?: string;
    /**
     * Tooltip text when sidebar is collapsed.
     * @default 'Expand sidebar'
     */
    expandText?: string;
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
    /**
     * Show the toggle button on mobile.
     * @default false
     */
    showToggleButton?: boolean;
}
/**
 * Interface props for the NavbarToggle component emits.
 */
export interface INavbarToggleEmits {
    /**
     * Emitted when the toggle button is clicked.
     */
    toggle: [];
}
/**
 * Interface props for the NavbarAvatar component.
 */
export interface INavbarAvatarProps {
    /**
     * Avatar image source URL.
     */
    src?: string | null;
    /**
     * Image alt text.
     */
    alt?: string;
    /**
     * Avatar size variant.
     * - sm: Small avatar for mobile
     * - navbar: Standard navbar avatar for desktop
     * @default 'navbar'
     */
    size?: 'sm' | 'navbar';
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarAvatar component emits.
 */
export interface INavbarAvatarEmits {
    /**
     * Emitted when the avatar is clicked.
     */
    click: [];
}
/**
 * Interface props for the NavbarMobileMenu component.
 */
export interface INavbarMobileMenuProps {
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarCollapse component.
 */
export interface INavbarCollapseProps {
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarNav component.
 */
export interface INavbarNavProps {
    /**
     * Navigation position.
     * - start: Align left (.nav-start)
     * - end: Align right (.nav-end)
     * @default 'start'
     */
    position?: 'start' | 'end';
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarItem component.
 */
export interface INavbarItemProps {
    /**
     * Optional custom CSS classes.
     */
    customClass?: NavbarClassName | null;
}
/**
 * Interface props for the NavbarLink component.
 */
export type INavbarLinkProps = IBaseLinkProps;
//# sourceMappingURL=navbar.d.ts.map
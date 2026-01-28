/** Interfaces */
interface INavigationItem {
    id: string;
    to: string | object;
    icon: string;
    text: string;
    ariaLabel: string;
}
interface INavigationBarProps {
    items?: INavigationItem[];
    activeItem?: string | null;
    as?: string | object;
    frosted?: boolean;
    island?: boolean;
    indicatorTab?: boolean;
    indicatorFrosted?: boolean;
}
declare const _default: import('vue').DefineComponent<INavigationBarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<INavigationBarProps> & Readonly<{}>, {
    frosted: boolean;
    items: INavigationItem[];
    as: string | object;
    activeItem: string | null;
    island: boolean;
    indicatorTab: boolean;
    indicatorFrosted: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
export default _default;
//# sourceMappingURL=NavigationBar.vue.d.ts.map
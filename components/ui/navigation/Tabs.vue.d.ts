/** Interfaces */
interface ITabItem {
    id: string;
    label: string;
}
interface ITabsProps {
    tabs: ITabItem[];
    pillTabs?: boolean;
    contrastTabs?: boolean;
}
declare const _default: import('vue').DefineComponent<ITabsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<ITabsProps> & Readonly<{}>, {
    pillTabs: boolean;
    contrastTabs: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
export default _default;
//# sourceMappingURL=Tabs.vue.d.ts.map
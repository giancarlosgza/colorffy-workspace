import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('../../..').ITabsProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        updateActiveTab: (tabId: string) => any;
    }, string, import('vue').PublicProps, Readonly<import('../../..').ITabsProps> & Readonly<{
        onUpdateActiveTab?: ((tabId: string) => any) | undefined;
    }>, {
        activeTab: string;
        pillTabs: boolean;
        contrastTabs: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLUListElement>;
    tags: string[];
    argTypes: {
        tabs: {
            control: "object";
        };
        pillTabs: {
            control: "boolean";
        };
        contrastTabs: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const PillTabs: Story;
export declare const ContrastTabs: Story;
export declare const PillWithContrast: Story;
export declare const ManyTabs: Story;
export declare const ManyPillTabs: Story;
export declare const CustomTabs: Story;
export declare const TwoTabs: Story;
//# sourceMappingURL=Tabs.stories.d.ts.map
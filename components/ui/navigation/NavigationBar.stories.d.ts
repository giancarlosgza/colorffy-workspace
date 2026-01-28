import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('../../..').INavigationBarProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('../../..').INavigationBarProps> & Readonly<{}>, {
        frosted: boolean;
        items: import('../../..').INavigationItem[];
        as: string | object;
        activeItem: string | null;
        island: boolean;
        indicatorTab: boolean;
        indicatorFrosted: boolean;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
    tags: string[];
    argTypes: {
        items: {
            control: "object";
        };
        activeItem: {
            control: "text";
        };
        as: {
            control: "select";
            options: string[];
        };
        frosted: {
            control: "boolean";
        };
        island: {
            control: "boolean";
        };
        indicatorTab: {
            control: "boolean";
        };
        indicatorFrosted: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Frosted: Story;
export declare const Island: Story;
export declare const WithIndicatorTab: Story;
export declare const WithIndicatorFrosted: Story;
export declare const FrostedWithIndicatorTab: Story;
export declare const IslandWithIndicatorFrosted: Story;
export declare const CustomItems: Story;
//# sourceMappingURL=NavigationBar.stories.d.ts.map
import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('../../..').IMaterialIconProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('../../..').IMaterialIconProps> & Readonly<{}>, {
        decorative: boolean;
        ariaLabel: string | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLElement>;
    tags: string[];
    argTypes: {
        iconCode: {
            control: "text";
        };
        color: {
            control: "text";
        };
        decorative: {
            control: "boolean";
        };
        ariaLabel: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Search: Story;
export declare const Home: Story;
export declare const Settings: Story;
export declare const Favorite: Story;
export declare const Delete: Story;
export declare const Edit: Story;
export declare const Check: Story;
export declare const Close: Story;
export declare const AllIcons: Story;
export declare const WithAccessibility: Story;
//# sourceMappingURL=Material.stories.d.ts.map
import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: import('vue').DefineComponent<import('../../..').IBadgeProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('../../..').IBadgeProps> & Readonly<{}>, {
        text: string | null;
        iconCode: string | null;
        size: string;
        variant: string;
        customClass: import('../../..').BadgeClassName | null;
        iconClass: import('../../..').BadgeClassName | null;
        iconStyle: string | Record<string, any> | null;
        pill: boolean | null;
    }, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        text: {
            control: "text";
        };
        iconCode: {
            control: "text";
        };
        size: {
            control: "select";
            options: string[];
        };
        pill: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Success: Story;
export declare const Warning: Story;
export declare const Danger: Story;
export declare const Outline: Story;
export declare const AllVariants: Story;
//# sourceMappingURL=Badge.stories.d.ts.map
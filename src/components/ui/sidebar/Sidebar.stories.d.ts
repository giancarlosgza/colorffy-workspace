import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').ISidebarProps> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            "update:open": (value: boolean) => any;
        }, import('vue').PublicProps, {
            ariaLabel: string;
            customClass: import('../../..').SidebarClassName | null;
            width: string | null;
            open: boolean;
            bordered: boolean;
            rail: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').ISidebarProps> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            ariaLabel: string;
            customClass: import('../../..').SidebarClassName | null;
            width: string | null;
            open: boolean;
            bordered: boolean;
            rail: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').ISidebarProps> & Readonly<{
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        "update:open": (value: boolean) => any;
    }, string, {
        ariaLabel: string;
        customClass: import('../../..').SidebarClassName | null;
        width: string | null;
        open: boolean;
        bordered: boolean;
        rail: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            header?(_: {}): any;
            body?(_: {}): any;
            footer?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        bordered: {
            control: "boolean";
        };
        rail: {
            control: "boolean";
        };
        width: {
            control: "text";
        };
    };
    decorators: (() => {
        template: string;
    })[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithGroups: Story;
export declare const WithCollapsibleGroups: Story;
export declare const WithDropdown: Story;
export declare const RailMode: Story;
export declare const Bordered: Story;
export declare const CustomWidth: Story;
//# sourceMappingURL=Sidebar.stories.d.ts.map
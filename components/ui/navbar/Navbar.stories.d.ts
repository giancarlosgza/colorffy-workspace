import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').INavbarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            customClass: import('../../..').NavbarClassName | null;
            sticky: boolean;
            fluid: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').INavbarProps> & Readonly<{}>, {}, {}, {}, {}, {
            customClass: import('../../..').NavbarClassName | null;
            sticky: boolean;
            fluid: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').INavbarProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        customClass: import('../../..').NavbarClassName | null;
        sticky: boolean;
        fluid: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        sticky: {
            control: "boolean";
        };
        fluid: {
            control: "boolean";
        };
    };
    decorators: (() => {
        template: string;
    })[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithAvatar: Story;
export declare const WithBadges: Story;
export declare const WithNavLinks: Story;
export declare const NonSticky: Story;
export declare const WithLogo: Story;
export declare const ContainedWidth: Story;
//# sourceMappingURL=Navbar.stories.d.ts.map
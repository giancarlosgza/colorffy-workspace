import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../..').IHeaderContentProps> & Readonly<{
            onClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            click: () => any;
        }, import('vue').PublicProps, {
            title: string | null;
            subtitle: string | null;
            actions: boolean;
            hideActionsOnMobile: boolean;
            backButton: boolean;
            backButtonLabel: string;
            containerClass: string | string[];
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../..').IHeaderContentProps> & Readonly<{
            onClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            title: string | null;
            subtitle: string | null;
            actions: boolean;
            hideActionsOnMobile: boolean;
            backButton: boolean;
            backButtonLabel: string;
            containerClass: string | string[];
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../..').IHeaderContentProps> & Readonly<{
        onClick?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        click: () => any;
    }, string, {
        title: string | null;
        subtitle: string | null;
        actions: boolean;
        hideActionsOnMobile: boolean;
        backButton: boolean;
        backButtonLabel: string;
        containerClass: string | string[];
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            actions?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        title: {
            control: "text";
        };
        subtitle: {
            control: "text";
        };
        actions: {
            control: "boolean";
        };
        hideActionsOnMobile: {
            control: "boolean";
        };
        backButton: {
            control: "boolean";
        };
        backButtonLabel: {
            control: "text";
        };
        containerClass: {
            control: "text";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithBackButton: Story;
export declare const WithActions: Story;
export declare const WithBackButtonAndActions: Story;
export declare const TitleOnly: Story;
export declare const LongContent: Story;
export declare const CustomContainer: Story;
//# sourceMappingURL=HeaderContent.stories.d.ts.map
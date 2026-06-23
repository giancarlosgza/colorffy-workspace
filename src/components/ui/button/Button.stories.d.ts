import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').IBaseButtonProps> & Readonly<{
            onOnClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
            onClick: () => any;
        }, import('vue').PublicProps, {
            text: string | null;
            variant: import('../../..').ButtonVariant | (string & {});
            title: string | null;
            icon: boolean;
            size: import('../../..').ButtonSizeLevel | (string & {});
            color: import('../../..').ButtonColor | (string & {});
            id: string | null;
            iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
            iconTrailing: boolean;
            disabled: boolean;
            loading: boolean;
            customClass: import('../../..').ButtonClassName | null;
            rounded: boolean;
            fluid: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLButtonElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').IBaseButtonProps> & Readonly<{
            onOnClick?: (() => any) | undefined;
        }>, {}, {}, {}, {}, {
            text: string | null;
            variant: import('../../..').ButtonVariant | (string & {});
            title: string | null;
            icon: boolean;
            size: import('../../..').ButtonSizeLevel | (string & {});
            color: import('../../..').ButtonColor | (string & {});
            id: string | null;
            iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
            iconTrailing: boolean;
            disabled: boolean;
            loading: boolean;
            customClass: import('../../..').ButtonClassName | null;
            rounded: boolean;
            fluid: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').IBaseButtonProps> & Readonly<{
        onOnClick?: (() => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
        onClick: () => any;
    }, string, {
        text: string | null;
        variant: import('../../..').ButtonVariant | (string & {});
        title: string | null;
        icon: boolean;
        size: import('../../..').ButtonSizeLevel | (string & {});
        color: import('../../..').ButtonColor | (string & {});
        id: string | null;
        iconVariant: "shape-sm" | "shape-md" | "compact-sm" | "compact";
        iconTrailing: boolean;
        disabled: boolean;
        loading: boolean;
        customClass: import('../../..').ButtonClassName | null;
        rounded: boolean;
        fluid: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: string[];
        };
        color: {
            control: "select";
            options: string[];
        };
        size: {
            control: "select";
            options: string[];
        };
        text: {
            control: "text";
        };
        disabled: {
            control: "boolean";
        };
        loading: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Success: Story;
export declare const Danger: Story;
export declare const Tonal: Story;
export declare const Outline: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const Loading: Story;
export declare const Disabled: Story;
//# sourceMappingURL=Button.stories.d.ts.map
import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').IListGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: import('../../..').ListSize | string | null;
            variant: import('../../..').ListVariant | string | null;
            customClass: import('../../..').ListClassName | null;
            isInteractive: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLUListElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').IListGroupProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: import('../../..').ListSize | string | null;
            variant: import('../../..').ListVariant | string | null;
            customClass: import('../../..').ListClassName | null;
            isInteractive: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').IListGroupProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: import('../../..').ListSize | string | null;
        variant: import('../../..').ListVariant | string | null;
        customClass: import('../../..').ListClassName | null;
        isInteractive: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        variant: {
            control: "select";
            options: (string | null)[];
        };
        size: {
            control: "select";
            options: (string | null)[];
        };
        isInteractive: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithIcons: Story;
export declare const ActiveItem: Story;
export declare const DisabledItem: Story;
export declare const Interactive: Story;
export declare const Flush: Story;
export declare const Small: Story;
export declare const Large: Story;
export declare const ComplexList: Story;
//# sourceMappingURL=List.stories.d.ts.map
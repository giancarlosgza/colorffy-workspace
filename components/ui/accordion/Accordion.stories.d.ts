import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<{
            open?: boolean;
        } & import('../../..').IAccordionItemProps> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            "update:open": (value: boolean) => any;
        }, import('vue').PublicProps, {
            text: string | null;
            title: string | null;
            id: string | null;
            disabled: boolean;
            customClass: import('../../..').AccordionClassName | null;
            open: boolean;
            name: string | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDetailsElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{
            open?: boolean;
        } & import('../../..').IAccordionItemProps> & Readonly<{
            "onUpdate:open"?: ((value: boolean) => any) | undefined;
        }>, {}, {}, {}, {}, {
            text: string | null;
            title: string | null;
            id: string | null;
            disabled: boolean;
            customClass: import('../../..').AccordionClassName | null;
            open: boolean;
            name: string | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<{
        open?: boolean;
    } & import('../../..').IAccordionItemProps> & Readonly<{
        "onUpdate:open"?: ((value: boolean) => any) | undefined;
    }>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        "update:open": (value: boolean) => any;
    }, string, {
        text: string | null;
        title: string | null;
        id: string | null;
        disabled: boolean;
        customClass: import('../../..').AccordionClassName | null;
        open: boolean;
        name: string | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            header?(_: {}): any;
            content?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        title: {
            control: "text";
        };
        text: {
            control: "text";
        };
        open: {
            control: "boolean";
        };
        disabled: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Single: Story;
export declare const Open: Story;
export declare const Disabled: Story;
export declare const WithCustomContent: Story;
export declare const AccordionGroup: Story;
export declare const TransparentGroup: Story;
//# sourceMappingURL=Accordion.stories.d.ts.map
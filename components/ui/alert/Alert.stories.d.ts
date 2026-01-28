import { StoryObj } from '@storybook/vue3';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').IAlertProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: "sm";
            type: import('../../..').AlertType;
            variant: import('../../..').AlertVariant;
            customClass: import('../../..').AlertClassName;
            critical: boolean;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').IAlertProps> & Readonly<{}>, {}, {}, {}, {}, {
            size: "sm";
            type: import('../../..').AlertType;
            variant: import('../../..').AlertVariant;
            customClass: import('../../..').AlertClassName;
            critical: boolean;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').IAlertProps> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
        size: "sm";
        type: import('../../..').AlertType;
        variant: import('../../..').AlertVariant;
        customClass: import('../../..').AlertClassName;
        critical: boolean;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            message?(_: {}): any;
            actions?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        type: {
            control: "select";
            options: string[];
        };
        variant: {
            control: "select";
            options: string[];
        };
        title: {
            control: "text";
        };
        message: {
            control: "text";
        };
        critical: {
            control: "boolean";
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SuccessBanner: Story;
export declare const WarningBanner: Story;
export declare const DangerBanner: Story;
export declare const InfoBanner: Story;
export declare const TonalAlert: Story;
export declare const SnackbarAlert: Story;
export declare const CriticalAlert: Story;
//# sourceMappingURL=Alert.stories.d.ts.map
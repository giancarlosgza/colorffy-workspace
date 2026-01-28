import { StoryObj } from '@storybook/vue3-vite';
declare const meta: {
    title: string;
    component: {
        new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('../../..').IDialogProps> & Readonly<{
            onOnCloseDialog?: ((...args: any[]) => any) | undefined;
        }>, {
            showDialog: () => void;
            closeDialog: () => void;
        }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
            onCloseDialog: (...args: any[]) => void;
        }, import('vue').PublicProps, {
            size: import('../../..').DialogSize | null;
            customClass: import('../../..').DialogClassName | null;
            mode: import('../../..').DialogMode;
            showAsModal: boolean | null;
            bodyDialogClass: import('../../..').DialogClassName | null;
        }, false, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {
            dialogRef: HTMLDialogElement;
        }, HTMLDialogElement, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('../../..').IDialogProps> & Readonly<{
            onOnCloseDialog?: ((...args: any[]) => any) | undefined;
        }>, {
            showDialog: () => void;
            closeDialog: () => void;
        }, {}, {}, {}, {
            size: import('../../..').DialogSize | null;
            customClass: import('../../..').DialogClassName | null;
            mode: import('../../..').DialogMode;
            showAsModal: boolean | null;
            bodyDialogClass: import('../../..').DialogClassName | null;
        }>;
        __isFragment?: never;
        __isTeleport?: never;
        __isSuspense?: never;
    } & import('vue').ComponentOptionsBase<Readonly<import('../../..').IDialogProps> & Readonly<{
        onOnCloseDialog?: ((...args: any[]) => any) | undefined;
    }>, {
        showDialog: () => void;
        closeDialog: () => void;
    }, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
        onCloseDialog: (...args: any[]) => void;
    }, string, {
        size: import('../../..').DialogSize | null;
        customClass: import('../../..').DialogClassName | null;
        mode: import('../../..').DialogMode;
        showAsModal: boolean | null;
        bodyDialogClass: import('../../..').DialogClassName | null;
    }, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
        $slots: {
            header?(_: {}): any;
            body?(_: {}): any;
            footer?(_: {}): any;
        };
    });
    tags: string[];
    argTypes: {
        title: {
            control: "text";
        };
        size: {
            control: "select";
            options: string[];
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithFooter: Story;
export declare const LargeModal: Story;
export declare const SmallModal: Story;
//# sourceMappingURL=Modal.stories.d.ts.map
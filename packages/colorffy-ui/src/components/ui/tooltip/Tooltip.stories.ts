import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from '../button/Button.vue'
import UiTooltip from './Tooltip.vue'

const meta = {
  title: 'Components/Tooltip',
  component: UiTooltip,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left-start', 'left-end', 'right-start', 'right-end'] },
    disabled: { control: 'boolean' },
    ariaId: { control: 'text' }
  }
} satisfies Meta<typeof UiTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="Hover me" />
      </UiTooltip>
    `
  }),
  args: { text: 'Helpful hint' }
}

export const Placement: Story = {
  render: () => ({
    components: { UiTooltip, UiButton },
    template: `
      <div style="display: flex; gap: 1rem;">
        <UiTooltip text="Top" placement="top">
          <UiButton variant="outline" text="Top" />
        </UiTooltip>
        <UiTooltip text="Bottom" placement="bottom">
          <UiButton variant="outline" text="Bottom" />
        </UiTooltip>
        <UiTooltip text="Left" placement="left">
          <UiButton variant="outline" text="Left" />
        </UiTooltip>
        <UiTooltip text="Right" placement="right">
          <UiButton variant="outline" text="Right" />
        </UiTooltip>
      </div>
    `
  })
}

// Rich content via the #content slot instead of the plain-text `text` prop
export const RichContent: Story = {
  render: () => ({
    components: { UiTooltip, UiButton },
    template: `
      <UiTooltip placement="top">
        <UiButton variant="outline" text="Shortcut" />
        <template #content>
          Save changes <kbd>Ctrl</kbd> + <kbd>S</kbd>
        </template>
      </UiTooltip>
    `
  })
}

export const Disabled: Story = {
  args: { text: 'You will never see this', disabled: true },
  render: args => ({
    components: { UiTooltip, UiButton },
    setup() {
      return { args }
    },
    template: `
      <UiTooltip v-bind="args">
        <UiButton variant="outline" text="No tooltip" />
      </UiTooltip>
    `
  })
}

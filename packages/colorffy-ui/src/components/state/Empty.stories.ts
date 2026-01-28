import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '../ui/button/Button.vue'
import StateEmpty from './Empty.vue'

const meta: Meta<typeof StateEmpty> = {
  title: 'States/Empty',
  component: StateEmpty,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    customClass: { control: 'text' },
    role: { control: 'text' },
    ariaLabel: { control: 'text' },
    ariaLive: {
      control: 'select',
      options: ['off', 'polite', 'assertive']
    },
    useCustomIcon: { control: 'boolean' },
    iconCode: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'No data available',
    subtitle: 'There is no data to display at the moment'
  }
}

export const WithDefaultIcon: Story = {
  args: {
    title: 'Empty state',
    subtitle: 'Nothing to show here',
    useCustomIcon: false
  }
}

export const WithCustomIcon: Story = {
  args: {
    title: 'No items found',
    subtitle: 'Try adjusting your filters',
    useCustomIcon: true,
    iconCode: '&#xe8b6;'
  }
}

export const WithActionButton: Story = {
  args: {
    title: 'No results',
    subtitle: 'Get started by creating your first item'
  },
  render: args => ({
    components: { StateEmpty, UiButton },
    setup() {
      return { args }
    },
    template: `
      <StateEmpty v-bind="args">
        <template #button>
          <UiButton text="Create New" variant="filled" color="primary" />
        </template>
      </StateEmpty>
    `
  })
}

export const TitleOnly: Story = {
  args: {
    title: 'No data'
  }
}

export const SubtitleOnly: Story = {
  args: {
    subtitle: 'There are no items to display'
  }
}

export const CustomStyles: Story = {
  args: {
    title: 'Empty folder',
    subtitle: 'This folder is empty',
    customClass: 'p-5 bg-surface rounded',
    useCustomIcon: true,
    iconCode: '&#xe2c7;'
  }
}

import type { Meta, StoryObj } from '@storybook/vue3'
import StateShapeLoading from './ShapeLoading.vue'

const meta: Meta<typeof StateShapeLoading> = {
  title: 'States/ShapeLoading',
  component: StateShapeLoading,
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
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Loading',
    subtitle: 'Please wait...'
  }
}

export const WithTitle: Story = {
  args: {
    title: 'Processing your request'
  }
}

export const WithSubtitle: Story = {
  args: {
    subtitle: 'This may take a few moments'
  }
}

export const TitleAndSubtitle: Story = {
  args: {
    title: 'Loading content',
    subtitle: 'Fetching data from server'
  }
}

export const NoText: Story = {
  args: {}
}

export const CustomStyles: Story = {
  args: {
    title: 'Loading',
    subtitle: 'Please wait',
    customClass: 'p-5 bg-surface rounded'
  }
}

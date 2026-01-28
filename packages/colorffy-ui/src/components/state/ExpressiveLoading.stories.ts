import type { Meta, StoryObj } from '@storybook/vue3'
import StateExpressiveLoading from './ExpressiveLoading.vue'

const meta: Meta<typeof StateExpressiveLoading> = {
  title: 'States/ExpressiveLoading',
  component: StateExpressiveLoading,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'object' },
    interval: { control: 'number' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
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
    title: ['Loading...', 'Fetching data...', 'Almost there...'],
    interval: 2000,
    size: 'md'
  }
}

export const SingleMessage: Story = {
  args: {
    title: 'Loading content',
    size: 'md'
  }
}

export const MultipleMessages: Story = {
  args: {
    title: [
      'Preparing your workspace...',
      'Loading components...',
      'Applying settings...',
      'Almost ready!'
    ],
    interval: 2500,
    size: 'md'
  }
}

export const SmallSize: Story = {
  args: {
    title: ['Loading...', 'Please wait...'],
    interval: 2000,
    size: 'sm'
  }
}

export const LargeSize: Story = {
  args: {
    title: ['Loading...', 'Fetching data...', 'Processing...'],
    interval: 2000,
    size: 'lg'
  }
}

export const FastInterval: Story = {
  args: {
    title: ['Step 1...', 'Step 2...', 'Step 3...', 'Step 4...'],
    interval: 1000,
    size: 'md'
  }
}

export const SlowInterval: Story = {
  args: {
    title: ['Analyzing data...', 'Processing results...', 'Finalizing...'],
    interval: 4000,
    size: 'md'
  }
}

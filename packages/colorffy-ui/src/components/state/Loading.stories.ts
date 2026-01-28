import type { Meta, StoryObj } from '@storybook/vue3-vite'
import StateLoading from './Loading.vue'

const meta: Meta<typeof StateLoading> = {
  title: 'States/Loading',
  component: StateLoading,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    customClass: { control: 'text' },
    spinnerSize: { control: 'text' },
    hideSpinner: { control: 'boolean' },
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
    title: 'Loading...',
    subtitle: 'Please wait while we fetch your data'
  }
}

export const WithSpinnerOnly: Story = {
  args: {}
}

export const WithTitle: Story = {
  args: {
    title: 'Loading content'
  }
}

export const WithSubtitle: Story = {
  args: {
    subtitle: 'This may take a few moments'
  }
}

export const CustomSpinnerSize: Story = {
  args: {
    title: 'Loading...',
    spinnerSize: '100px'
  }
}

export const SmallSpinner: Story = {
  args: {
    title: 'Loading',
    subtitle: 'Just a moment',
    spinnerSize: '40px'
  }
}

export const WithoutSpinner: Story = {
  args: {
    title: 'Processing...',
    subtitle: 'Your request is being processed',
    hideSpinner: true
  }
}

export const CustomStyles: Story = {
  args: {
    title: 'Loading data',
    subtitle: 'Fetching information',
    customClass: 'text-center p-5'
  }
}

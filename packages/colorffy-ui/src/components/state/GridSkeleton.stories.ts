import type { Meta, StoryObj } from '@storybook/vue3-vite'
import StateGridSkeleton from './GridSkeleton.vue'

const meta: Meta<typeof StateGridSkeleton> = {
  title: 'States/GridSkeleton',
  component: StateGridSkeleton,
  tags: ['autodocs'],
  argTypes: {
    skeletonGridItems: { control: 'number' },
    gridLayoutClasses: { control: 'text' },
    cardVariant: { control: 'text' },
    showFooter: { control: 'boolean' },
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
    skeletonGridItems: 12,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}

export const FourItems: Story = {
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}

export const SixItems: Story = {
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}

export const WithoutFooter: Story = {
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'pane',
    showFooter: false
  }
}

export const TwoColumns: Story = {
  args: {
    skeletonGridItems: 4,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 gap-4',
    cardVariant: 'pane',
    showFooter: true
  }
}

export const FourColumns: Story = {
  args: {
    skeletonGridItems: 8,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3',
    cardVariant: 'pane',
    showFooter: true
  }
}

export const CustomCardVariant: Story = {
  args: {
    skeletonGridItems: 6,
    gridLayoutClasses: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
    cardVariant: 'flat',
    showFooter: true
  }
}

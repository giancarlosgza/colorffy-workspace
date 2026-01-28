import type { Meta, StoryObj } from '@storybook/vue3'
import StateBaseSkeleton from './BaseSkeleton.vue'

const meta: Meta<typeof StateBaseSkeleton> = {
  title: 'States/BaseSkeleton',
  component: StateBaseSkeleton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    variant: {
      control: 'select',
      options: ['default', 'thumbnail', 'ai-generation', 'shimmer']
    },
    customClass: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    rounded: { control: 'boolean' },
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
    size: 'md',
    variant: 'default'
  }
}

export const SmallSize: Story = {
  args: {
    size: 'sm'
  }
}

export const LargeSize: Story = {
  args: {
    size: 'lg'
  }
}

export const Thumbnail: Story = {
  args: {
    variant: 'thumbnail',
    size: 'md'
  }
}

export const AIGeneration: Story = {
  args: {
    variant: 'ai-generation',
    size: 'md'
  }
}

export const Shimmer: Story = {
  args: {
    variant: 'shimmer',
    size: 'md'
  }
}

export const CustomWidth: Story = {
  args: {
    width: '300px',
    size: 'md'
  }
}

export const CustomHeight: Story = {
  args: {
    height: '100px',
    size: 'md'
  }
}

export const CustomSize: Story = {
  args: {
    width: '400px',
    height: '150px',
    size: 'md'
  }
}

export const Rounded: Story = {
  args: {
    rounded: true,
    width: '100px',
    height: '100px'
  }
}

export const MultipleSkeletons: Story = {
  render: args => ({
    components: { StateBaseSkeleton },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column gap-3">
        <StateBaseSkeleton v-bind="args" />
        <StateBaseSkeleton v-bind="args" width="80%" />
        <StateBaseSkeleton v-bind="args" width="60%" />
      </div>
    `
  }),
  args: {
    size: 'md'
  }
}

export const CardSkeleton: Story = {
  render: args => ({
    components: { StateBaseSkeleton },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column gap-3 p-3 bg-surface rounded">
        <StateBaseSkeleton width="100%" height="200px" />
        <StateBaseSkeleton width="80%" />
        <StateBaseSkeleton width="60%" />
        <div class="d-flex gap-2 mt-2">
          <StateBaseSkeleton rounded width="40px" height="40px" />
          <StateBaseSkeleton rounded width="40px" height="40px" />
        </div>
      </div>
    `
  })
}

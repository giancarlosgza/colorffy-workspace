import type { Meta, StoryObj } from '@storybook/vue3-vite'
import StateTableSkeleton from './TableSkeleton.vue'

const meta: Meta<typeof StateTableSkeleton> = {
  title: 'States/TableSkeleton',
  component: StateTableSkeleton,
  tags: ['autodocs'],
  argTypes: {
    skeletonRows: { control: 'number' },
    skeletonCols: { control: 'number' },
    skeletonColExpanded: { control: 'number' },
    customClass: { control: 'text' },
    role: { control: 'text' },
    ariaLabel: { control: 'text' },
    ariaLive: {
      control: 'select',
      options: ['off', 'polite', 'assertive']
    },
    isExpanded: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 12,
    skeletonCols: 5,
    isExpanded: false
  }
}

export const FewRows: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 5,
    skeletonCols: 5,
    isExpanded: false
  }
}

export const FewColumns: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 10,
    skeletonCols: 3,
    isExpanded: false
  }
}

export const Expanded: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 10,
    skeletonCols: 5,
    skeletonColExpanded: 8,
    isExpanded: true
  }
}

export const ManyColumns: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 8,
    skeletonCols: 8,
    isExpanded: false
  }
}

export const SmallTable: Story = {
  render: args => ({
    components: { StateTableSkeleton },
    setup() {
      return { args }
    },
    template: `
      <table class="table">
        <StateTableSkeleton v-bind="args" />
      </table>
    `
  }),
  args: {
    skeletonRows: 3,
    skeletonCols: 3,
    isExpanded: false
  }
}

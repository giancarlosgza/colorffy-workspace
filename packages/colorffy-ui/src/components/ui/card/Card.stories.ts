import type { Meta, StoryObj } from '@storybook/vue3'
import UiCard from './Card.vue'

const meta = {
  title: 'Components/Card',
  component: UiCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pane', 'elevated']
    }
  }
} satisfies Meta<typeof UiCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard v-bind="args">
        <template #body>
          <h3>Card Title</h3>
          <p>This is a card component with some content inside.</p>
        </template>
      </UiCard>
    `
  })
}

export const Pane: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard variant="pane">
        <template #body>
          <h3>Pane Card</h3>
          <p>This is a pane variant of the card component.</p>
        </template>
      </UiCard>
    `
  })
}

export const WithActions: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard v-bind="args">
        <template #body>
          <h3>Card with Actions</h3>
          <p>This card has header and footer actions.</p>
        </template>
        <template #actions>
          <button class="btn btn-sm btn-primary">Action</button>
          <button class="btn btn-sm btn-outline">Cancel</button>
        </template>
      </UiCard>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiCard from './Card.vue'

const meta = {
  title: 'Components/Card',
  component: UiCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pane', 'elevated']
    },
    imageUrl: { control: 'text' },
    imageAlt: { control: 'text' },
    to: { control: 'text' },
    href: { control: 'text' },
    as: { control: 'text' }
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

export const WithImage: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard v-bind="args" variant="outline" image-url="https://picsum.photos/480/270" image-alt="Random cover photo">
        <template #body>
          <h3>Card with cover image</h3>
          <p>The cover image sits full-bleed above the header/body, respecting the card radius.</p>
        </template>
      </UiCard>
    `
  })
}

export const AsLink: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard v-bind="args" variant="outline" href="https://colorffy.com">
        <template #body>
          <h3>Clickable card</h3>
          <p>Setting \`href\` (or \`to\`) renders the whole card as a link.</p>
        </template>
      </UiCard>
    `
  })
}

export const AsInternalLink: Story = {
  render: args => ({
    components: { UiCard },
    setup() {
      return { args }
    },
    template: `
      <UiCard v-bind="args" variant="outline" to="/dashboard">
        <template #body>
          <h3>Internal link card</h3>
          <p>\`to\` renders the card as \`as\` (default 'a'), suited for router-link/nuxt-link.</p>
        </template>
      </UiCard>
    `
  })
}

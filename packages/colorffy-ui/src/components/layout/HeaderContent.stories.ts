import type { Meta, StoryObj } from '@storybook/vue3'
import UiButton from '../ui/button/Button.vue'
import HeaderContent from './HeaderContent.vue'

const meta = {
  title: 'Layouts/HeaderContent',
  component: HeaderContent,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    actions: { control: 'boolean' },
    hideActionsOnMobile: { control: 'boolean' },
    backButton: { control: 'boolean' },
    backButtonLabel: { control: 'text' },
    containerClass: { control: 'text' }
  }
} satisfies Meta<typeof HeaderContent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Page Title',
    subtitle: 'This is a subtitle description'
  }
}

export const WithBackButton: Story = {
  args: {
    title: 'Page with Back Button',
    subtitle: 'Navigate back to previous page',
    backButton: true,
    backButtonLabel: 'Go back'
  }
}

export const WithActions: Story = {
  args: {
    title: 'Page with Actions',
    subtitle: 'Header with action buttons',
    actions: true
  },
  render: args => ({
    components: { HeaderContent, UiButton },
    setup() {
      return { args }
    },
    template: `
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButton text="Save" variant="filled" color="primary" />
          <UiButton text="Cancel" variant="outline" />
        </template>
      </HeaderContent>
    `
  })
}

export const WithBackButtonAndActions: Story = {
  args: {
    title: 'Full Header Example',
    subtitle: 'With back button and action buttons',
    backButton: true,
    backButtonLabel: 'Back to dashboard',
    actions: true
  },
  render: args => ({
    components: { HeaderContent, UiButton },
    setup() {
      return { args }
    },
    template: `
      <HeaderContent v-bind="args">
        <template #actions>
          <ButtonGroup>
              <UiButton text="Edit" variant="filled" color="secondary" />
              <UiButton text="Delete" variant="outline" color="danger" />
          </ButtonGroup>
        </template>
      </HeaderContent>
    `
  })
}

export const TitleOnly: Story = {
  args: {
    title: 'Simple Page Title'
  }
}

export const LongContent: Story = {
  args: {
    title: 'Very Long Page Title That Might Wrap',
    subtitle: 'This is a longer subtitle description that provides more context about the current page and what the user can expect to find here'
  }
}

export const CustomContainer: Story = {
  args: {
    title: 'Custom Container',
    subtitle: 'With custom container classes',
    containerClass: 'container-fluid'
  }
}

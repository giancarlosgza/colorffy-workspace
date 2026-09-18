import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from '../ui/button/Button.vue'
import UiButtonGroup from '../ui/button/ButtonGroup.vue'
import HeaderContent from './HeaderContent.vue'

const meta = {
  title: 'Layouts/HeaderContent',
  component: HeaderContent,
  tags: ['autodocs'],
  argTypes: {
    headingId: { control: 'text' },
    headline: { control: 'text' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
    size: { control: 'select', options: [null, '2xl', '3xl', '4xl', '5xl'] },
    hideActionsWhenNarrow: { control: 'boolean' },
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

export const WithExplicitHeadingId: Story = {
  args: {
    headingId: 'project-heading',
    title: 'Project Header',
    subtitle: 'Project details'
  },
  play: async ({ canvasElement }) => {
    const heading = canvasElement.querySelector('h1')

    if (!heading || heading.id !== 'project-heading')
      throw new Error('Expected the explicit headingId to be applied to the heading')
  }
}

export const WithHeadline: Story = {
  args: {
    headline: 'Herramientas',
    title: 'Generador de gradientes',
    subtitle: 'El eyebrow usa las clases caption y text-primary'
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
    subtitle: 'Header with action buttons'
  },
  render: args => ({
    components: { HeaderContent, UiButton, UiButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Save" variant="filled" color="primary" />
            <UiButton text="Cancel" variant="outline" />
          </UiButtonGroup>
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
    backButtonLabel: 'Back to dashboard'
  },
  render: args => ({
    components: { HeaderContent, UiButton, UiButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <HeaderContent v-bind="args">
        <template #actions>
          <UiButtonGroup>
            <UiButton text="Edit" variant="filled" color="secondary" />
            <UiButton text="Delete" variant="outline" color="danger" />
          </UiButtonGroup>
        </template>
      </HeaderContent>
    `
  })
}

export const Sizes: Story = {
  render: args => ({
    components: { HeaderContent },
    setup: () => ({ args }),
    template: `
      <div>
        <HeaderContent v-bind="args" title="Default (--fs-xl)" subtitle="Sin size" />
        <HeaderContent v-bind="args" size="2xl" title="size 2xl" subtitle="--fs-2xl" />
        <HeaderContent v-bind="args" size="3xl" title="size 3xl" subtitle="--fs-3xl" />
        <HeaderContent v-bind="args" size="4xl" title="size 4xl" subtitle="--fs-4xl, matches the base h1" />
        <HeaderContent v-bind="args" size="5xl" title="size 5xl" subtitle="--fs-5xl" />
      </div>
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

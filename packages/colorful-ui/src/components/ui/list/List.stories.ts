import type { Meta, StoryObj } from '@storybook/vue3'
import UiListGroup from './ListGroup.vue'
import UiListItem from './ListItem.vue'

const meta = {
  title: 'Components/List',
  component: UiListGroup,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [null, 'flush', 'horizontal'],
    },
    size: {
      control: 'select',
      options: [null, 'sm', 'lg'],
    },
    isInteractive: { control: 'boolean' },
  },
} satisfies Meta<typeof UiListGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup>
        <UiListItem title="First Item" text="This is the first item" />
        <UiListItem title="Second Item" text="This is the second item" />
        <UiListItem title="Third Item" text="This is the third item" />
      </UiListGroup>
    `,
  }),
}

export const WithIcons: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup>
        <UiListItem title="Home" icon="&#xe88a;" text="Go to home page" />
        <UiListItem title="Settings" icon="&#xe8b8;" text="Manage your settings" />
        <UiListItem title="Profile" icon="&#xe7fd;" text="View your profile" />
        <UiListItem title="Logout" icon="&#xe9ba;" text="Sign out of your account" />
      </UiListGroup>
    `,
  }),
}

export const ActiveItem: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup>
        <UiListItem title="Dashboard" text="Overview" :active="true" />
        <UiListItem title="Projects" text="All projects" />
        <UiListItem title="Tasks" text="Pending tasks" />
        <UiListItem title="Reports" text="View reports" />
      </UiListGroup>
    `,
  }),
}

export const DisabledItem: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup>
        <UiListItem title="Available Item" text="This item is clickable" />
        <UiListItem title="Disabled Item" text="This item is disabled" :disabled="true" />
        <UiListItem title="Another Available Item" text="This item is also clickable" />
      </UiListGroup>
    `,
  }),
}

export const Interactive: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup :is-interactive="true">
        <UiListItem title="Clickable Item 1" text="Hover over me" />
        <UiListItem title="Clickable Item 2" text="Click me" />
        <UiListItem title="Clickable Item 3" text="I'm interactive" />
      </UiListGroup>
    `,
  }),
}

export const Flush: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup variant="flush">
        <UiListItem title="Flush List Item 1" />
        <UiListItem title="Flush List Item 2" />
        <UiListItem title="Flush List Item 3" />
      </UiListGroup>
    `,
  }),
}

export const Small: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup size="sm">
        <UiListItem title="Small Item 1" text="Compact size" />
        <UiListItem title="Small Item 2" text="Compact size" />
        <UiListItem title="Small Item 3" text="Compact size" />
      </UiListGroup>
    `,
  }),
}

export const Large: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup size="lg">
        <UiListItem title="Large Item 1" text="More spacing" />
        <UiListItem title="Large Item 2" text="More spacing" />
        <UiListItem title="Large Item 3" text="More spacing" />
      </UiListGroup>
    `,
  }),
}

export const ComplexList: Story = {
  render: () => ({
    components: { UiListGroup, UiListItem },
    template: `
      <UiListGroup :is-interactive="true">
        <UiListItem 
          title="Inbox" 
          text="5 new messages"
          icon="&#xe0be;"
          :active="true"
        />
        <UiListItem 
          title="Drafts" 
          text="3 drafts"
          icon="&#xe873;"
        />
        <UiListItem 
          title="Sent" 
          text="12 sent today"
          icon="&#xe163;"
        />
        <UiListItem 
          title="Trash" 
          text="Empty"
          icon="&#xe872;"
          :disabled="true"
        />
      </UiListGroup>
    `,
  }),
}

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiTabs from './Tabs.vue'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: UiTabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    pillTabs: { control: 'boolean' },
    contrastTabs: { control: 'boolean' }
  }
} satisfies Meta<typeof UiTabs>

export default meta
type Story = StoryObj<typeof meta>

const defaultTabs = [
  { id: 'overview', label: 'Overview' },
  { id: 'details', label: 'Details' },
  { id: 'settings', label: 'Settings' }
]

const manyTabs = [
  { id: 'home', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
]

export const Default: Story = {
  args: {
    tabs: defaultTabs
  }
}

export const PillTabs: Story = {
  args: {
    tabs: defaultTabs,
    pillTabs: true
  }
}

export const ContrastTabs: Story = {
  args: {
    tabs: defaultTabs,
    contrastTabs: true
  }
}

export const PillWithContrast: Story = {
  args: {
    tabs: defaultTabs,
    pillTabs: true,
    contrastTabs: true
  }
}

export const ManyTabs: Story = {
  args: {
    tabs: manyTabs
  }
}

export const ManyPillTabs: Story = {
  args: {
    tabs: manyTabs,
    pillTabs: true
  }
}

export const CustomTabs: Story = {
  args: {
    tabs: [
      { id: 'dashboard', label: 'Dashboard' },
      { id: 'analytics', label: 'Analytics' },
      { id: 'reports', label: 'Reports' },
      { id: 'team', label: 'Team' }
    ],
    contrastTabs: true
  }
}

export const TwoTabs: Story = {
  args: {
    tabs: [
      { id: 'login', label: 'Login' },
      { id: 'signup', label: 'Sign Up' }
    ],
    pillTabs: true
  }
}

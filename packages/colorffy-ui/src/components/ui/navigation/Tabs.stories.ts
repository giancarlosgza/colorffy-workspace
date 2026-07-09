import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiTabs from './Tabs.vue'

const meta = {
  title: 'Components/Navigation/Tabs',
  component: UiTabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
    pillTabs: { control: 'boolean' },
    contrastTabs: { control: 'boolean' },
    fluid: { control: 'boolean' }
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

// Per-tab badge config (Partial<IBadgeProps>) rendered after the label
export const WithBadges: Story = {
  args: {
    tabs: [
      { id: 'inbox', label: 'Inbox', badge: { text: '12', variant: 'primary', pill: true } },
      { id: 'archived', label: 'Archived', badge: { text: 'New', variant: 'success' } },
      { id: 'spam', label: 'Spam' }
    ]
  }
}

// Leading Material icon per tab, same convention as INavItem.icon
export const WithIcons: Story = {
  args: {
    tabs: [
      { id: 'overview', label: 'Overview', icon: '&#xe88a;' },
      { id: 'details', label: 'Details', icon: '&#xe873;' },
      { id: 'settings', label: 'Settings', icon: '&#xe8b8;' }
    ]
  }
}

// Fluid tabs stretch equally to fill the available width
export const Fluid: Story = {
  args: {
    tabs: defaultTabs,
    fluid: true
  }
}

// Overflowing tabs scroll horizontally with a thin scrollbar instead of wrapping
export const OverflowScroll: Story = {
  args: {
    tabs: [
      { id: 'tab-1', label: 'First Tab' },
      { id: 'tab-2', label: 'Second Tab' },
      { id: 'tab-3', label: 'Third Tab' },
      { id: 'tab-4', label: 'Fourth Tab' },
      { id: 'tab-5', label: 'Fifth Tab' },
      { id: 'tab-6', label: 'Sixth Tab' },
      { id: 'tab-7', label: 'Seventh Tab' },
      { id: 'tab-8', label: 'Eighth Tab' }
    ]
  },
  decorators: [
    () => ({
      template: '<div style="max-width: 420px;"><story /></div>'
    })
  ]
}

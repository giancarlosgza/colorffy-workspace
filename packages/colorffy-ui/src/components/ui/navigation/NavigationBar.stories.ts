import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiNavigationBar from './NavigationBar.vue'

const meta = {
  title: 'Components/Navigation/NavigationBar',
  component: UiNavigationBar,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    activeItem: { control: 'text' },
    as: {
      control: 'select',
      options: ['a', 'router-link', 'nuxt-link']
    },
    frosted: { control: 'boolean' },
    island: { control: 'boolean' },
    indicatorTab: { control: 'boolean' },
    indicatorFrosted: { control: 'boolean' }
  }
} satisfies Meta<typeof UiNavigationBar>

export default meta
type Story = StoryObj<typeof meta>

const defaultItems = [
  {
    id: 'nav-home',
    to: '/',
    icon: '&#xe66b;',
    text: 'Home',
    ariaLabel: 'Navigate to home page'
  },
  {
    id: 'nav-explore',
    to: '/explore',
    icon: '&#xe8b6;',
    text: 'Explore',
    ariaLabel: 'Navigate to explore page'
  },
  {
    id: 'nav-notifications',
    to: '/notifications',
    icon: '&#xe7f4;',
    text: 'Notifications',
    ariaLabel: 'Navigate to notifications page'
  },
  {
    id: 'nav-profile',
    to: '/profile',
    icon: '&#xe853;',
    text: 'Profile',
    ariaLabel: 'Navigate to profile page'
  }
]

export const Default: Story = {
  args: {
    items: defaultItems,
    activeItem: '/'
  }
}

export const Frosted: Story = {
  args: {
    items: defaultItems,
    activeItem: '/explore',
    frosted: true
  }
}

export const Island: Story = {
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true
  }
}

export const WithIndicatorTab: Story = {
  args: {
    items: defaultItems,
    activeItem: '/',
    indicatorTab: true
  }
}

export const WithIndicatorFrosted: Story = {
  args: {
    items: defaultItems,
    activeItem: '/explore',
    indicatorFrosted: true
  }
}

export const FrostedWithIndicatorTab: Story = {
  args: {
    items: defaultItems,
    activeItem: '/profile',
    frosted: true,
    indicatorTab: true
  }
}

export const IslandWithIndicatorFrosted: Story = {
  args: {
    items: defaultItems,
    activeItem: '/notifications',
    island: true,
    indicatorFrosted: true
  }
}

export const CustomItems: Story = {
  args: {
    items: [
      {
        id: 'dashboard',
        to: '/dashboard',
        icon: '&#xe871;',
        text: 'Dashboard',
        ariaLabel: 'Navigate to dashboard'
      },
      {
        id: 'analytics',
        to: '/analytics',
        icon: '&#xe1b8;',
        text: 'Analytics',
        ariaLabel: 'Navigate to analytics'
      },
      {
        id: 'settings',
        to: '/settings',
        icon: '&#xe8b8;',
        text: 'Settings',
        ariaLabel: 'Navigate to settings'
      }
    ],
    activeItem: '/dashboard',
    frosted: true
  }
}

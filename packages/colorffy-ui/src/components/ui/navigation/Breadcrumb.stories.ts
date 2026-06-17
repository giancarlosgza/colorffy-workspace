import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiBreadcrumb from './Breadcrumb.vue'

const meta: Meta<typeof UiBreadcrumb> = {
  title: 'Components/Breadcrumb',
  component: UiBreadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: { control: 'text' },
    maxItems: { control: 'number' },
    structuredData: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const trail = [
  { label: 'Home', to: '/', icon: '&#xe88a;' },
  { label: 'Components', to: '/components' },
  { label: 'Navigation', to: '/components/navigation' },
  { label: 'Breadcrumb' }
]

export const Default: Story = {
  args: {
    items: trail,
    baseUrl: 'https://example.com'
  }
}

export const IconSeparator: Story = {
  args: {
    items: trail,
    separatorIcon: '&#xe5cc;',
    baseUrl: 'https://example.com'
  }
}

export const Collapsed: Story = {
  args: {
    items: [
      { label: 'Home', to: '/', icon: '&#xe88a;' },
      { label: 'Catalog', to: '/catalog' },
      { label: 'Electronics', to: '/catalog/electronics' },
      { label: 'Computers', to: '/catalog/electronics/computers' },
      { label: 'Laptops', to: '/catalog/electronics/computers/laptops' },
      { label: 'Ultrabook X1' }
    ],
    maxItems: 3,
    separatorIcon: '&#xe5cc;',
    baseUrl: 'https://example.com'
  }
}

export const WithoutStructuredData: Story = {
  args: {
    items: trail,
    structuredData: false
  }
}

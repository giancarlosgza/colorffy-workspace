import type { Meta, StoryObj } from '@storybook/vue3'
import UiBadge from '../badge/Badge.vue'
import UiButtonMenuItem from '../button/ButtonMenuItem.vue'
import UiButtonMenuText from '../button/ButtonMenuText.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiSidebar from './Sidebar.vue'
import UiSidebarBody from './SidebarBody.vue'
import UiSidebarDropdown from './SidebarDropdown.vue'
import UiSidebarFooter from './SidebarFooter.vue'
import UiSidebarGroup from './SidebarGroup.vue'
import UiSidebarHeader from './SidebarHeader.vue'
import UiSidebarLink from './SidebarLink.vue'
import UiSidebarText from './SidebarText.vue'

const meta = {
  title: 'Components/Sidebar',
  component: UiSidebar,
  tags: ['autodocs'],
  argTypes: {
    bordered: { control: 'boolean' },
    rail: { control: 'boolean' },
    width: { control: 'text' }
  },
  decorators: [
    () => ({
      template: '<div style="height: 100vh; display: flex;"><story /></div>'
    })
  ]
} satisfies Meta<typeof UiSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial,
      UiBadge
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">v1.0.0</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Go to dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="View components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="View docs" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiBadge text="v1.0.0" variant="outline" size="sm" />
        </UiSidebarFooter>
      </UiSidebar>
    `
  })
}

export const WithGroups: Story = {
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarGroup,
      UiIconMaterial
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `
  })
}

export const WithCollapsibleGroups: Story = {
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarGroup,
      UiIconMaterial
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Main" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          
          <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
            <UiSidebarLink icon="&#xe853;" text="Profile" child tooltip-text="Profile" />
            <UiSidebarLink icon="&#xe8b8;" text="Account" child tooltip-text="Account" />
            <UiSidebarLink icon="&#xe32a;" text="Security" child tooltip-text="Security" />
          </UiSidebarGroup>

          <UiSidebarGroup text="Resources" collapsible :default-open="false" icon="&#xe873;">
            <UiSidebarLink icon="&#xe873;" text="Documentation" child tooltip-text="Docs" />
            <UiSidebarLink icon="&#xe8ef;" text="API Reference" child tooltip-text="API" />
          </UiSidebarGroup>
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `
  })
}

export const WithDropdown: Story = {
  args: {
    bordered: false,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiSidebarDropdown,
      UiIconMaterial,
      UiButtonMenuText,
      UiButtonMenuItem
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <UiSidebarDropdown title="My Workspace" subtitle="Personal" :interactive="true" placement="right-start">
            <UiButtonMenuText item-text="Switch Workspace" />
            <UiButtonMenuItem item-text="Personal" icon="&#xe853;" />
            <UiButtonMenuItem item-text="Enterprise" icon="&#xe70e;" />
          </UiSidebarDropdown>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter>
          <UiSidebarDropdown title="User Name" subtitle="user@example.com" :interactive="false" />
        </UiSidebarFooter>
      </UiSidebar>
    `
  })
}

export const RailMode: Story = {
  args: {
    bordered: false,
    rail: true
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
          <UiSidebarLink icon="&#xe873;" text="Documentation" tooltip-text="Documentation" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `
  })
}

export const Bordered: Story = {
  args: {
    bordered: true,
    rail: false
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `
  })
}

export const CustomWidth: Story = {
  args: {
    bordered: false,
    rail: false,
    width: '320px'
  },
  render: args => ({
    components: {
      UiSidebar,
      UiSidebarHeader,
      UiSidebarBody,
      UiSidebarFooter,
      UiSidebarText,
      UiSidebarLink,
      UiIconMaterial
    },
    setup() {
      return { args }
    },
    template: `
      <UiSidebar v-bind="args">
        <UiSidebarHeader>
          <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" />
          <div>
            <p class="drawer-header-title">Colorffy UI</p>
            <p class="drawer-header-subtitle">Custom Width: 320px</p>
          </div>
        </UiSidebarHeader>

        <UiSidebarBody>
          <UiSidebarText text="Navigation" />
          <UiSidebarLink icon="&#xe88a;" text="Dashboard" active tooltip-text="Dashboard" />
          <UiSidebarLink icon="&#xe5c3;" text="Components" tooltip-text="Components" />
        </UiSidebarBody>

        <UiSidebarFooter />
      </UiSidebar>
    `
  })
}

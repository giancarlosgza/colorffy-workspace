import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiBadge from '../badge/Badge.vue'
import UiButton from '../button/Button.vue'
import UiButtonGroup from '../button/ButtonGroup.vue'
import UiDivider from '../divider/Divider.vue'
import UiAvatar from '../image/Avatar.vue'
import UiPopoverMenu from './PopoverMenu.vue'
import UiPopoverMenuGroup from './PopoverMenuGroup.vue'
import UiPopoverMenuItem from './PopoverMenuItem.vue'
import UiPopoverMenuUser from './PopoverMenuUser.vue'

const meta = {
  title: 'Components/Navigation/PopoverMenu',
  component: UiPopoverMenu,
  tags: ['autodocs'],
  // Native auto-popovers light-dismiss each other on the docs page, so stories use the class branch
  args: { nativePopover: false },
  argTypes: {
    isOpened: { control: 'boolean' },
    closable: { control: 'boolean' },
    title: { control: 'text' }
  }
} satisfies Meta<typeof UiPopoverMenu>

export default meta
type Story = StoryObj<typeof meta>

const user = {
  displayName: 'Giancarlos Garza',
  email: 'hello@giancarlos.dev',
  photoURL: null
}

// The menu is absolutely positioned inside its container, so stories need room below it
const decorators = [
  () => ({ template: '<div style="min-height: 520px; padding-top: 8px;"><story /></div>' })
]

/** An identity header via UiPopoverMenuUser, grouped rows, trailing affordances and a destructive action. */
export const Default: Story = {
  args: { isOpened: true, id: 'story-default' },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup, UiPopoverMenuUser, UiDivider },
    setup() {
      return { args, user }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Account menu">
        <template #header>
          <UiPopoverMenuUser :user="user" />
        </template>

        <template #body>
          <UiPopoverMenuGroup aria-label="Navigation">
            <UiPopoverMenuItem icon="&#xe871;" text="Dashboard" active />
            <UiPopoverMenuItem icon="&#xe8ef;" text="Projects" />
            <UiPopoverMenuItem icon="&#xe853;" text="Account settings" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup aria-label="Account">
            <UiPopoverMenuItem icon="&#xe8b8;" text="Command menu" shortcut="⌘K" />
            <UiPopoverMenuItem as="a" to="https://colorffy.com" icon="&#xe873;" text="Documentation" icon-trailing="&#xe89e;" />
            <UiPopoverMenuItem icon="&#xe879;" text="Sign out" is-destructive />
          </UiPopoverMenuGroup>
        </template>

        <template #footer>
          <span class="subtitle-2 text-muted flex-grow-1">Colorffy UI</span>
          <span class="subtitle-2 text-muted">v2.5.0</span>
        </template>
      </UiPopoverMenu>
    `
  })
}

/** Groups take a `text` label, rendered above their rows. */
export const GroupLabels: Story = {
  args: { isOpened: true, title: 'Workspace', id: 'story-group-labels' },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup, UiDivider },
    setup() {
      return { args }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #body>
          <UiPopoverMenuGroup text="Workspace">
            <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
          </UiPopoverMenuGroup>

          <UiDivider />

          <UiPopoverMenuGroup text="Data">
            <UiPopoverMenuItem icon="&#xe2c4;" text="Export activity" />
            <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `
  })
}

/**
 * With no title, no header slot and `closable: false`, the header is dropped entirely.
 * This one also fills the body through the default slot, which is an alias for `#body`.
 */
export const NoHeader: Story = {
  args: { isOpened: true, id: 'story-no-header', closable: false },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup },
    setup() {
      return { args }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <UiPopoverMenuGroup>
          <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
          <UiPopoverMenuItem icon="&#xe7ef;" text="Members" :badge="{ text: '12', variant: 'primary', pill: true }" />
          <UiPopoverMenuItem icon="&#xe157;" text="Copy link" shortcut="⌘L" />
          <UiPopoverMenuItem icon="&#xe872;" text="Delete workspace" is-destructive />
        </UiPopoverMenuGroup>
      </UiPopoverMenu>
    `
  })
}

/** A row can host a control through the trailing slot — render it as a div so it is not a menu item. */
export const InlineControl: Story = {
  args: { isOpened: true, title: 'Preferences', id: 'story-inline-control' },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup, UiButton, UiButtonGroup },
    setup() {
      return { args }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Preferences menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem as="div" icon="&#xe3ac;" text="Theme">
              <template #trailing>
                <UiButtonGroup connected joined>
                  <UiButton icon size="sm" variant="filled" color="primary" aria-label="System" />
                  <UiButton icon size="sm" variant="outline" aria-label="Light" />
                  <UiButton icon size="sm" variant="outline" aria-label="Dark" />
                </UiButtonGroup>
              </template>
            </UiPopoverMenuItem>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Advanced settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `
  })
}

/** Disabled rows cannot be activated and are skipped by pointer events. */
export const DisabledItems: Story = {
  args: { isOpened: true, title: 'Billing', id: 'story-disabled' },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup },
    setup() {
      return { args }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Billing menu">
        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8b8;" text="Manage plan" />
            <UiPopoverMenuItem icon="&#xe8a1;" text="Download invoices" disabled />
            <UiPopoverMenuItem icon="&#xe7ef;" text="Seats" disabled />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `
  })
}

/** The `menuItems` shortcut renders the body when no body slot is filled. */
export const MenuItemsShortcut: Story = {
  args: {
    isOpened: true,
    title: 'Account',
    id: 'story-menu-items',
    menuItems: [
      { id: 'dashboard', icon: '&#xe871;', text: 'Dashboard', active: true },
      { id: 'projects', icon: '&#xe8ef;', text: 'Projects' },
      { id: 'signout', icon: '&#xe879;', text: 'Sign out', isDestructive: true }
    ]
  },
  decorators
}

/** The identity block takes slots too — a custom avatar, custom lines, or trailing content. */
export const CustomIdentity: Story = {
  args: { isOpened: true, id: 'story-custom-identity' },
  decorators,
  render: args => ({
    components: { UiPopoverMenu, UiPopoverMenuItem, UiPopoverMenuGroup, UiPopoverMenuUser, UiAvatar, UiBadge },
    setup() {
      return { args, user }
    },
    template: `
      <UiPopoverMenu v-bind="args" aria-label="Workspace menu">
        <template #header>
          <UiPopoverMenuUser display-name="Colorffy" email="Enterprise workspace">
            <template #avatar>
              <UiAvatar initials="CO" size="md" status="online" />
            </template>
            <template #trailing>
              <UiBadge text="Pro" variant="outline" size="sm" />
            </template>
          </UiPopoverMenuUser>
        </template>

        <template #body>
          <UiPopoverMenuGroup>
            <UiPopoverMenuItem icon="&#xe8ef;" text="Switch workspace" icon-trailing="&#xe5cc;" />
            <UiPopoverMenuItem icon="&#xe8b8;" text="Workspace settings" />
          </UiPopoverMenuGroup>
        </template>
      </UiPopoverMenu>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiNavbar from './Navbar.vue'
import UiNavbarAvatar from './NavbarAvatar.vue'
import UiNavbarBrand from './NavbarBrand.vue'
import UiNavbarCollapse from './NavbarCollapse.vue'
import UiNavbarItem from './NavbarItem.vue'
import UiNavbarLink from './NavbarLink.vue'
import UiNavbarMobileMenu from './NavbarMobileMenu.vue'
import UiNavbarNav from './NavbarNav.vue'
import UiNavbarTitle from './NavbarTitle.vue'
import UiNavbarToggle from './NavbarToggle.vue'

const meta = {
  title: 'Components/Navbar',
  component: UiNavbar,
  tags: ['autodocs'],
  argTypes: {
    sticky: { control: 'boolean' },
    fluid: { control: 'boolean' }
  },
  decorators: [
    () => ({
      template: '<div style="min-height: 200px;"><story /></div>'
    })
  ]
} satisfies Meta<typeof UiNavbar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe7f4;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const WithAvatar: Story = {
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarAvatar,
      UiNavbarMobileMenu,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiBadge
    },
    setup() {
      const sidebarCollapse = ref(false)
      const user = {
        displayName: 'John Doe',
        photoURL: 'https://i.pravatar.cc/150?img=12'
      }
      return { args, sidebarCollapse, user }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar 
            :src="user.photoURL"
            :alt="user.displayName"
            size="sm"
          />
        </UiNavbarMobileMenu>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiNavbarAvatar 
                :src="user.photoURL"
                :alt="user.displayName"
                size="navbar"
              />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const WithBadges: Story = {
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiBadge,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiBadge text="PRO" variant="gradient" custom-class="g-primary" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="ADMIN" variant="outline" icon-code="&#xef3d;" icon-class="text-gradient g-violet" />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiBadge text="3" variant="danger" pill />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const WithNavLinks: Story = {
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiNavbarLink,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #start>
            <UiNavbarLink text="Home" href="/" active />
            <UiNavbarLink text="About" href="/about" />
            <UiNavbarLink text="Contact" href="/contact" />
          </template>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const NonSticky: Story = {
  args: {
    sticky: false,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const WithLogo: Story = {
  args: {
    sticky: true,
    fluid: true
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="My Application">
          <template #brand>
            <UiNavbarBrand 
              text="MyApp" 
              logo="https://via.placeholder.com/40" 
              to="/" 
            />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

export const ContainedWidth: Story = {
  args: {
    sticky: true,
    fluid: false
  },
  render: args => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarTitle,
      UiNavbarToggle,
      UiNavbarCollapse,
      UiNavbarNav,
      UiNavbarItem,
      UiIconMaterial
    },
    setup() {
      const sidebarCollapse = ref(false)
      return { args, sidebarCollapse }
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarToggle 
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse" 
        />

        <UiNavbarTitle title="Dashboard">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarCollapse>
          <template #end>
            <UiNavbarItem>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>
    `
  })
}

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import { NuxtLink } from '#components'

/** Data */
const colors = ['system', 'light', 'dark']
const activeMode = useState()
const route = useRoute()
const sidebarCollapse = useState<boolean>('sidebarCollapse', () => false)
const user = {
  displayName: 'Giancarlos',
  email: 'giancarlosgza@gmail.com',
  photoURL: 'https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg'
}
const isMenuActive = ref<boolean>(false)
const menuItems = [
  {
    id: 'dashboard',
    to: '/dashboard',
    icon: '&#xe871;',
    text: 'Dashboard',
    ariaLabel: 'Go to dashboard'
  },
  {
    id: 'projects',
    to: '/projects',
    icon: '&#xe8ef;',
    text: 'Projects',
    ariaLabel: 'Go to projects'
  },
  {
    id: 'account',
    to: '/account',
    icon: '&#xe853;',
    text: 'Account',
    ariaLabel: 'Go to account settings'
  },
  {
    id: 'notifications',
    to: '/notifications',
    icon: '&#xe7f4;',
    text: 'Alerts',
    ariaLabel: 'Go to notifications'
  }
]

/** Methods */
function toggleUserMenu(): void {
  isMenuActive.value = !isMenuActive.value
}
function closeMenu(): void {
  isMenuActive.value = false
}
</script>

<template>
  <div class="grid-main-content">
    <NuxtRouteAnnouncer />

    <!-- Sidebar -->
    <UiSidebar
      bordered
      :rail="sidebarCollapse"
      :open="sidebarCollapse"
      @update:open="sidebarCollapse = $event"
    >
      <UiSidebarHeader>
        <UiIconMaterial v-if="false" icon-code="&#xe88a;" class="drawer-brand-icon" />
        <img
          src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" class="img-fluid"
          alt="Avatar Image"
        >
        <UiSidebarDropdown title="Nuxt" subtitle="Colorffy UI" placement="right-start" :interactive="false">
          <UiButtonMenuText item-text="Workspace" />
          <UiButtonMenuItem
            item-text="Switch to Personal" icon="&#xe853;"
            icon-class="bg-primary-fixed rounded-sm p-1"
          />
          <UiButtonMenuItem
            item-text="Switch to Enterprise" icon="&#xe70e;"
            icon-class="bg-accent-fixed rounded-sm p-1"
          />
        </UiSidebarDropdown>
      </UiSidebarHeader>

      <UiSidebarBody>
        <UiSidebarText text="Platform" />
        <UiSidebarLink
          :as="NuxtLink"
          to="/"
          text="Home"
          icon="&#xe88a;"
          tooltip-text="Go to home page"
          tooltip-placement="top"
        />
        <UiSidebarLink
          :as="NuxtLink"
          to="/dashboard"
          text="Dashboard"
          icon="&#xe871;"
          tooltip-text="Dashboard overview"
        />
        <UiSidebarLink
          :as="NuxtLink"
          to="/projects"
          text="Projects"
          icon="&#xe8ef;"
          tooltip-text="View projects"
        />
        <UiSidebarLink
          :as="NuxtLink"
          to="/settings"
          text="Settings"
          icon="&#xe8b8;"
          tooltip-text="App settings"
        />
        <UiSidebarLink
          :as="NuxtLink"
          to="/about"
          text="About"
          icon="&#xe866;"
          tooltip-text="View about page"
        />

        <!-- Collapsible Group -->
        <UiSidebarGroup text="Account" collapsible :default-open="true" icon="&#xe853;">
          <UiSidebarLink
            :as="NuxtLink"
            to="/account"
            text="Profile"
            icon="&#xe853;"
            child
            tooltip-text="User profile"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/notifications"
            text="Notifications"
            icon="&#xe7f4;"
            child
            tooltip-text="Notifications"
          />
        </UiSidebarGroup>
      </UiSidebarBody>

      <UiSidebarFooter>
        <div class="d-flex flex-wrap gap-2 align-items-center">
          <UiSidebarDropdown title="Gian" subtitle="giancarlosgza@gmail.com" :interactive="false" />
        </div>
        <div class="mt-2">
          <UiBadge text="v1.0.0" variant="outline" size="sm" icon-code="&#xf5f4;" icon-class="text-accent-fixed" />
        </div>
      </UiSidebarFooter>
    </UiSidebar>

    <!-- Content -->
    <main>
      <!-- Navbar -->
      <UiNavbar
        v-on-click-outside="closeMenu"
        sticky
        fluid
      >
        <UiNavbarToggle
          :show-toggle-button="true"
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse"
        />

        <UiNavbarTitle :title="(route.meta.pageTitle as string) || 'Dashboard'">
          <template #brand>
            <UiNavbarBrand
              text="Admin"
              initials="A"
              :as="NuxtLink"
              :to="{ name: 'index' }"
            />
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar
            v-if="user"
            :src="user.photoURL"
            :alt="`${user.displayName} photo`"
            size="sm"
            @click="isMenuActive = !isMenuActive"
          />
        </UiNavbarMobileMenu>

        <UiNavbarCollapse>
          <UiNavbarNav position="start">
            <UiNavbarItem>
              <div class="input-group">
                <div class="input-group-prefix border border-transparent px-0">
                  <UiIconMaterial icon-code="&#xe8b6;" />
                </div>
                <UiInputText
                  placeholder="Search for anything..."
                  variant="transparent"
                  rounded custom-class="px-2"
                />
              </div>
            </UiNavbarItem>
            <UiNavbarLink
              :as="NuxtLink"
              :to="{ name: 'settings' }"
              text="Settings"
              class="nav-dropdown"
            >
              <template #icon>
                <UiIconMaterial
                  icon-code="&#xe313;"
                  :class="{ 'rotate-180': isMenuActive }"
                />
              </template>
            </UiNavbarLink>
          </UiNavbarNav>
          <UiNavbarNav position="start">
            <UiNavbarItem>
              <UiBadge
                text="ADMIN"
                variant="outline"
                custom-class="my-0"
                icon-code="&#xef3d;"
                icon-class="text-accent"
              />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiNavbarAvatar
                v-if="user"
                :src="user.photoURL"
                :alt="`${user.displayName} photo`"
                size="navbar"
                class="border border-md border-accent rounded-full p-px"
                @click="toggleUserMenu"
              />
            </UiNavbarItem>
          </UiNavbarNav>
        </UiNavbarCollapse>

        <!-- Popover Menu -->
        <UiPopoverMenu
          id="user-account-menu"
          :is-opened="isMenuActive"
          :current-route="route"
          :closable="false"
          aria-label="Menú de cuenta"
          @hide-dropdown="isMenuActive = false"
        >
          <template #header>
            <UiPopoverMenuUser
              :user="user"
              display-name="Gian"
              email="giancarlos@gmail.com"
              photo-url="https://images.pexels.com/photos/38089393/pexels-photo-38089393.jpeg"
              avatar-class="border border-lg border-gradient gradient-secondary p-1"
            >
              <template #trailing>
                <UiBadge
                  text="Pro"
                  variant="outline"
                  size="sm"
                  class="border border-md border-gradient gradient-secondary"
                />
              </template>
            </UiPopoverMenuUser>
          </template>
          <template #body>
            <!-- Navigation -->
            <UiPopoverMenuGroup aria-label="Navegación">
              <UiPopoverMenuItem
                v-for="item in menuItems"
                :key="item.id"
                :as="NuxtLink"
                :to="item.to"
                :icon="item.icon"
                :text="item.text"
                :aria-label="item.ariaLabel"
                @click="closeMenu"
              />
            </UiPopoverMenuGroup>

            <!-- Preferences -->
            <UiPopoverMenuGroup text="Preferences">
              <UiPopoverMenuItem
                text="Pricing"
              />
              <UiPopoverMenuItem
                text="Shortcuts"
                shortcut="⌘K"
              />
              <UiPopoverMenuItem
                as="div"
                text="Theme"
              >
                <template #trailing>
                  <UiButtonGroup
                    connected
                    joined
                  >
                    <UiButton
                      v-for="(color, index) in colors"
                      :key="`color-${index}`"
                      :variant="color === activeMode ? 'filled' : 'outline'"
                      :color="color === activeMode ? 'primary' : ''"
                      :aria-label="color === 'system' ? 'Sistema' : color === 'light' ? 'Claro' : 'Oscuro'"
                      icon size="sm"
                      @click="$colorMode.preference = color; activeMode = color"
                    >
                      <template #icon>
                        <UiIconMaterial
                          v-if="color === 'system'"
                          icon-code="&#xe31e;"
                          class="fs-sm"
                          :class="activeMode === 'system' ? 'text-on-primary' : ''"
                        />
                        <UiIconMaterial
                          v-else-if="color === 'light'"
                          icon-code="&#xe518;"
                          class="fs-sm"
                          :class="activeMode === 'light' ? 'text-on-primary' : ''"
                        />
                        <UiIconMaterial
                          v-else-if="color === 'dark'"
                          icon-code="&#xe51c;"
                          class="fs-sm"
                          :class="activeMode === 'dark' ? 'text-on-primary' : ''"
                        />
                      </template>
                    </UiButton>
                  </UiButtonGroup>
                </template>
              </UiPopoverMenuItem>
            </UiPopoverMenuGroup>

            <UiDivider />

            <UiPopoverMenuGroup aria-label="Cuenta">
              <UiPopoverMenuItem
                as="a"
                to="https://colorffy-ui-docs.pages.dev"
                icon="&#xe873;"
                text="Documentation"
                icon-trailing="&#xe89e;"
              />
              <UiPopoverMenuItem
                icon="&#xe879;"
                text="Sign Out"
                is-destructive
              />
            </UiPopoverMenuGroup>
          </template>
          <template #footer>
            <span class="caption text-muted flex-grow-1">Colorffy UI</span>
            <span class="caption text-muted">v2.5.0</span>
          </template>
        </UiPopoverMenu>
      </UiNavbar>

      <NuxtPage />

      <!-- Navigation Bar -->
      <UiNavigationBar
        :as="NuxtLink"
        :items="menuItems"
        :active-item="route.path"
        indicator-tab
      />
    </main>
  </div>
</template>

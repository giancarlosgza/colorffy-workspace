<script setup lang="ts">
import { NuxtLink } from '#components'
import { vOnClickOutside } from '@vueuse/components'

/** Data */
const route = useRoute()
const router = useRouter()
const sidebarCollapse = useState<boolean>('sidebarCollapse', () => false)
const user = {
  displayName: 'Giancarlos',
  email: 'giancarlosgza@gmail.com',
  photoURL: 'https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg'
}
const isMenuActive = ref<boolean>(false)
const menuItems = [
  {
    id: 'home',
    path: '/',
    icon: '&#xe66b;',
    label: 'Home',
    ariaLabel: 'Navigate to home page'
  },
  {
    id: 'about',
    path: '/about',
    icon: '&#xe853;',
    label: 'About',
    ariaLabel: 'Go to about page'
  }
]

/** Methods */
function toggleUserMenu(): void {
  isMenuActive.value = !isMenuActive.value
}
function closeMenu(): void {
  isMenuActive.value = false
}
function handleMenuItemClick(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="grid-main-content">
    <NuxtRouteAnnouncer />

    <!-- Sidebar -->
    <UiSidebar bordered :rail="sidebarCollapse">
      <UiSidebarHeader>
        <!-- <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" /> -->
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
          to="/components"
          text="Components"
          icon="&#xe5c3;"
          tooltip-text="View components"
        />
        <UiSidebarLink
          :as="NuxtLink"
          to="/about"
          text="About"
          icon="&#xe866;"
          tooltip-text="View about page"
        />

        <!-- Group -->
        <UiSidebarGroup text="Documentation">
          <UiSidebarLink
            :as="NuxtLink"
            to="/docs"
            text="Documentation"
            icon="&#xe873;"
            child
            tooltip-text="View docs"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/api"
            text="API Reference"
            icon="&#xe8ef;"
            child
            tooltip-text="API docs"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/guides"
            text="Guides"
            icon="&#xe866;"
            child
            tooltip-text="View guides"
          />
        </UiSidebarGroup>

        <!-- Collapsible Group -->
        <UiSidebarText text="Resources" />
        <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
          <UiSidebarLink
            :as="NuxtLink"
            to="/settings/profile"
            text="Profile"
            icon="&#xe853;"
            child
            tooltip-text="User profile"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/settings/account"
            text="Account"
            icon="&#xe8b8;"
            child
            tooltip-text="Account"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/settings/security"
            text="Security"
            icon="&#xe32a;"
            child
            tooltip-text="Security"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/settings/notifications"
            text="Notifications"
            icon="&#xe7f4;"
            child
            tooltip-text="Notifications"
          />
          <UiSidebarLink
            :as="NuxtLink"
            to="/settings/billing"
            text="Billing"
            icon="&#xf041;"
            child
            tooltip-text="Billing"
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
        <UiNavbarToggle :collapsed="sidebarCollapse" @toggle="sidebarCollapse = !sidebarCollapse" />
        <UiNavbarTitle :title="(route.meta.pageTitle as string) || 'Dashboard'">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A">
              <template #link="{ linkTarget, brandText }">
                <NuxtLink :to="linkTarget" class="navbar-logo">
                  {{ brandText }}
                </NuxtLink>
              </template>
            </UiNavbarBrand>
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
          <template #end>
            <UiNavbarNav>
              <UiNavbarLink
                :as="NuxtLink"
                text="Home"
                to="/"
                :active="route.path === '/'"
              />
              <UiNavbarLink
                :as="NuxtLink"
                text="About"
                :to="{ name: 'about' }"
                :active="route.path === '/about'"
              />
            </UiNavbarNav>
          </template>
          <template #start>
            <UiNavbarNav>
              <UiNavbarItem>
                <UiBadge
                  text="ADMIN" variant="outline" custom-class="my-0" icon-code="&#xef3d;"
                  icon-class="text-gradient g-violet"
                />
              </UiNavbarItem>
              <UiNavbarItem>
                <UiNavbarAvatar
                  v-if="user" :src="user.photoURL" :alt="`${user.displayName} photo`" size="navbar"
                  @click="toggleUserMenu"
                />
              </UiNavbarItem>
            </UiNavbarNav>
          </template>
        </UiNavbarCollapse>

        <!-- Popover Menu -->
        <UiPopoverMenu
          :user="user"
          :is-opened="isMenuActive"
          :menu-items="menuItems"
          :active-item="route.path"
          @hide-dropdown="isMenuActive = false"
          @menu-item-click="handleMenuItemClick"
        >
          <template #footer>
            <UiButton
              variant="outline"
              text="Sign out"
              class="btn-block"
              rounded
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe879;" class="text-danger" />
              </template>
            </UiButton>
          </template>
        </UiPopoverMenu>
      </UiNavbar>

      <NuxtPage />

      <!-- Navigation Bar -->
      <UiNavigationBar
        :as="NuxtLink"
        :items="menuItems"
        :active-item="route.path"
      />
    </main>
  </div>
</template>

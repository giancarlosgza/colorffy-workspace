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
        <UiSidebarLink to="/" icon="&#xe88a;" tooltip-text="Go to home page" tooltip-placement="top">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe88a;" />
              <span>Home</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>
        <UiSidebarLink to="/components" icon="&#xe5c3;" tooltip-text="View components">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe5c3;" />
              <span>Components</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>
        <UiSidebarLink to="/about" icon="&#xe866;" tooltip-text="View about page">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe866;" />
              <span>About</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>

        <!-- Group -->
        <UiSidebarGroup text="Documentation">
          <UiSidebarLink to="/docs" icon="&#xe873;" child tooltip-text="View docs">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe873;" />
                <span>Documentation</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/api" icon="&#xe8ef;" text="API Reference" child tooltip-text="API docs">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe8ef;" />
                <span>API Reference</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/guides" icon="&#xe866;" text="Guides" child tooltip-text="View guides">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe866;" />
                <span>Guides</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
        </UiSidebarGroup>

        <!-- Collapsible Group -->
        <UiSidebarText text="Resources" />
        <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
          <UiSidebarLink to="/settings/profile" icon="&#xe853;" child tooltip-text="User profile">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe853;" />
                <span>Profile</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/account" icon="&#xe8b8;" child tooltip-text="Account">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe8b8;" />
                <span>Account</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/security" icon="&#xe32a;" child tooltip-text="Security">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe32a;" />
                <span>Security</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/notifications" icon="&#xe7f4;" child tooltip-text="Notifications">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe7f4;" />
                <span>Notifications</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/billing" icon="&#xf041;" child tooltip-text="Billing">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xf041;" />
                <span>Billing</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
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
          <template #start>
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

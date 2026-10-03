<script setup lang="ts">
import type { UiAlertToast } from '@colorffy/ui'
import { vOnClickOutside } from '@vueuse/components'
import { NuxtLink } from '#components'

const colorMode = useColorMode()
const route = useRoute()
const { register } = useNotify()

const sidebarCollapse = useState<boolean>('sidebarCollapse', () => false)
const isMenuActive = ref<boolean>(false)
const toastRef = ref<InstanceType<typeof UiAlertToast> | null>(null)

const unreadCount = computed(() => notifications.filter(n => n.unread).length)
const latestNotifications = notifications.slice(0, 3)

const themes = [
  { id: 'system', label: 'System', icon: '&#xe31e;' },
  { id: 'light', label: 'Light', icon: '&#xe518;' },
  { id: 'dark', label: 'Dark', icon: '&#xe51c;' }
]

const mobileItems = [
  { id: 'home', to: '/', icon: '&#xe88a;', text: 'Home', ariaLabel: 'Go to home' },
  { id: 'inbox', to: '/inbox', icon: '&#xe156;', text: 'Inbox', ariaLabel: 'Go to inbox' },
  { id: 'projects', to: '/projects', icon: '&#xe2c7;', text: 'Projects', ariaLabel: 'Go to projects' },
  { id: 'settings', to: '/settings', icon: '&#xe8b8;', text: 'Settings', ariaLabel: 'Go to settings' }
]

const accountLinks = [
  { id: 'profile', to: '/settings', icon: '&#xe7fd;', text: 'Profile' },
  { id: 'team', to: '/team', icon: '&#xe7ef;', text: 'Team' },
  { id: 'billing', to: '/billing', icon: '&#xe870;', text: 'Billing' }
]

onMounted(() => register(toastRef.value))

function avatarColor(color: Intent): Exclude<Intent, 'muted'> | 'neutral' {
  return color === 'muted' ? 'neutral' : color
}

function closeMenu(): void {
  isMenuActive.value = false
}
</script>

<template>
  <div class="grid-main-content">
    <UiSidebar
      bordered
      :rail="sidebarCollapse"
      :open="sidebarCollapse"
      @update:open="sidebarCollapse = $event"
    >
      <template #header>
        <span class="workspace-logo bg-primary text-on-primary" aria-hidden="true">O</span>
        <UiSidebarDropdown :title="workspace.name" :subtitle="workspace.team" placement="right-start" :interactive="false">
          <UiButtonMenuText item-text="Switch workspace" />
          <UiButtonMenuItem item-text="Orbit · Product team" icon="&#xe5ca;" icon-class="bg-primary-container text-on-primary-container rounded-sm p-1" />
          <UiButtonMenuItem item-text="Personal" icon="&#xe7fd;" icon-class="bg-accent-container text-on-accent-container rounded-sm p-1" />
          <UiButtonMenuDivider />
          <UiButtonMenuItem item-text="Create workspace" icon="&#xe145;" />
        </UiSidebarDropdown>
      </template>

      <template #body>
        <UiSidebarLink :as="NuxtLink" to="/" text="Home" icon="&#xe88a;" tooltip-text="Home" />
        <UiSidebarLink :as="NuxtLink" to="/inbox" text="Inbox" icon="&#xe156;" tooltip-text="Inbox">
          <template #badge>
            <UiBadge v-if="unreadCount" :text="String(unreadCount)" variant="primary" size="sm" pill />
          </template>
        </UiSidebarLink>
        <UiSidebarLink :as="NuxtLink" to="/projects" text="Projects" icon="&#xe2c7;" tooltip-text="Projects" />
        <UiSidebarLink :as="NuxtLink" to="/team" text="Team" icon="&#xe7ef;" tooltip-text="Team" />

        <UiSidebarText text="Favorites" />
        <UiSidebarLink
          v-for="project in projects.slice(0, 3)"
          :key="project.id"
          :as="NuxtLink"
          :to="`/projects/${project.id}`"
          :text="project.name"
          :icon="project.icon"
          :tooltip-text="project.name"
        />

        <UiSidebarGroup text="Workspace" icon="&#xe8b8;" collapsible :default-open="true">
          <UiSidebarLink :as="NuxtLink" to="/billing" text="Billing" icon="&#xe870;" tooltip-text="Billing" child />
          <UiSidebarLink :as="NuxtLink" to="/settings" text="Settings" icon="&#xe8b8;" tooltip-text="Settings" child />
        </UiSidebarGroup>

        <UiSidebarLink :as="NuxtLink" to="/help" text="Help center" icon="&#xe887;" tooltip-text="Help center" />
      </template>

      <template #footer>
        <div class="trial-card bg-primary-container text-on-primary-container">
          <p class="fw-700 mb-1">
            Pro trial · {{ workspace.trialDaysLeft }} days left
          </p>
          <UiProgressBar :value="Math.round(((30 - workspace.trialDaysLeft) / 30) * 100)" size="sm" />
          <UiButton :as="NuxtLink" to="/billing" text="Upgrade" variant="filled" color="primary" size="sm" fluid class="mt-2" />
        </div>
        <UiSidebarDropdown :title="currentUser.name" :subtitle="currentUser.email" :interactive="false">
          <UiButtonMenuItem item-text="Profile" icon="&#xe7fd;" @click="navigateTo('/settings')" />
          <UiButtonMenuItem item-text="Sign out" icon="&#xe9ba;" is-destructive @click="navigateTo('/sign-in')" />
        </UiSidebarDropdown>
      </template>
    </UiSidebar>

    <main>
      <UiNavbar v-on-click-outside="closeMenu" sticky fluid>
        <UiNavbarToggle
          :show-toggle-button="true"
          :collapsed="sidebarCollapse"
          @toggle="sidebarCollapse = !sidebarCollapse"
        />

        <UiNavbarTitle :title="(route.meta.pageTitle as string) || 'Home'">
          <template #brand>
            <UiNavbarBrand text="Orbit" initials="O" :as="NuxtLink" to="/" />
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar
            :src="currentUser.avatar"
            :alt="`${currentUser.name} photo`"
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
                  placeholder="Search projects, tasks and people"
                  variant="transparent"
                  rounded
                  custom-class="px-2"
                  aria-label="Search"
                />
              </div>
            </UiNavbarItem>
            <UiNavbarLink :as="NuxtLink" to="/help" text="Help" />
          </UiNavbarNav>

          <UiNavbarNav position="end">
            <UiNavbarItem>
              <UiButtonMenu id="create-menu" text="New" variant="filled" color="primary" size="sm" placement="bottom-end">
                <template #icon>
                  <UiIconMaterial icon-code="&#xe145;" />
                </template>
                <template #menu>
                  <UiButtonMenuItem item-text="Project" icon="&#xe2c7;" @click="navigateTo('/projects?new=1')" />
                  <UiButtonMenuItem item-text="Task" icon="&#xe2e6;" />
                  <UiButtonMenuItem item-text="Invite member" icon="&#xe7fe;" @click="navigateTo('/team')" />
                  <UiButtonMenuDivider />
                  <UiButtonMenuSubmenu item-text="Import from" icon="&#xe2c6;" placement="left-start">
                    <UiButtonMenuItem item-text="CSV file" />
                    <UiButtonMenuItem item-text="Jira" />
                    <UiButtonMenuItem item-text="Trello" />
                  </UiButtonMenuSubmenu>
                </template>
              </UiButtonMenu>
            </UiNavbarItem>

            <UiNavbarItem>
              <UiButton
                variant="text"
                icon
                size="sm"
                aria-label="Notifications"
                popovertarget="notifications-popover"
                style="anchor-name: --notifications-popover"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe7f4;" />
                </template>
              </UiButton>
            </UiNavbarItem>

            <UiNavbarItem>
              <UiNavbarAvatar
                :src="currentUser.avatar"
                :alt="`${currentUser.name} photo`"
                size="navbar"
                @click="isMenuActive = !isMenuActive"
              />
            </UiNavbarItem>
          </UiNavbarNav>
        </UiNavbarCollapse>

        <UiPopoverMenu
          id="user-account-menu"
          :is-opened="isMenuActive"
          :current-route="route"
          :closable="false"
          aria-label="Account menu"
          @hide-dropdown="isMenuActive = false"
        >
          <template #header>
            <UiPopoverMenuUser
              :display-name="currentUser.name"
              :email="currentUser.email"
              :photo-url="currentUser.avatar"
            >
              <template #trailing>
                <UiBadge :text="workspace.plan" variant="tonal tonal-primary" size="sm" />
              </template>
            </UiPopoverMenuUser>
          </template>
          <template #body>
            <UiPopoverMenuGroup aria-label="Account">
              <UiPopoverMenuItem
                v-for="item in accountLinks"
                :key="item.id"
                :as="NuxtLink"
                :to="item.to"
                :icon="item.icon"
                :text="item.text"
                @click="closeMenu"
              />
            </UiPopoverMenuGroup>

            <UiPopoverMenuGroup text="Preferences">
              <UiPopoverMenuItem text="Keyboard shortcuts" icon="&#xe312;" shortcut="⌘K" />
              <UiPopoverMenuItem as="div" text="Theme" icon="&#xe40a;">
                <template #trailing>
                  <UiButtonGroup connected>
                    <UiButton
                      v-for="theme in themes"
                      :key="theme.id"
                      :variant="theme.id === colorMode.preference ? 'filled' : 'outline'"
                      :color="theme.id === colorMode.preference ? 'primary' : ''"
                      :aria-label="theme.label"
                      icon
                      size="sm"
                      @click="colorMode.preference = theme.id"
                    >
                      <template #icon>
                        <UiIconMaterial :icon-code="theme.icon" class="fs-sm" />
                      </template>
                    </UiButton>
                  </UiButtonGroup>
                </template>
              </UiPopoverMenuItem>
            </UiPopoverMenuGroup>

            <UiDivider />

            <UiPopoverMenuGroup aria-label="Session">
              <UiPopoverMenuItem :as="NuxtLink" to="/help" icon="&#xe887;" text="Help center" @click="closeMenu" />
              <UiPopoverMenuItem :as="NuxtLink" to="/sign-in" icon="&#xe9ba;" text="Sign out" is-destructive @click="closeMenu" />
            </UiPopoverMenuGroup>
          </template>
          <template #footer>
            <span class="caption text-muted flex-grow-1">Orbit for teams</span>
            <span class="caption text-muted">v3.0</span>
          </template>
        </UiPopoverMenu>
      </UiNavbar>

      <UiPopover
        id="notifications-popover"
        anchor-name="--notifications-popover"
        position-block="bottom"
        position-inline="left"
      >
        <template #header>
          <p class="popover-title">
            Notifications
          </p>
          <p class="popover-subtitle">
            {{ unreadCount }} unread
          </p>
        </template>
        <template #body>
          <UiListGroup>
            <UiListItem
              v-for="item in latestNotifications"
              :key="item.id"
              :title="item.title"
              :text="item.time"
            >
              <template #media>
                <UiAvatar
                  :src="memberById(item.actorId).avatar"
                  :initials="memberById(item.actorId).avatar ? null : memberById(item.actorId).initials"
                  :color="avatarColor(memberById(item.actorId).color)"
                  size="sm"
                />
              </template>
            </UiListItem>
          </UiListGroup>
        </template>
        <template #footer>
          <UiButton :as="NuxtLink" to="/inbox" text="Open inbox" variant="text" size="sm" />
        </template>
      </UiPopover>

      <slot />

      <UiNavigationBar :as="NuxtLink" :items="mobileItems" :active-item="route.path" indicator-tab />
    </main>

    <UiAlertToast ref="toastRef" />
  </div>
</template>

<style scoped>
.workspace-logo {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: 2.25rem;
  aspect-ratio: 1;
  border-radius: var(--cffy-radius-md);
  font-weight: var(--cffy-fw-800);
}

.trial-card {
  padding: var(--cffy-space-12);
  margin-block-end: var(--cffy-space-8);
  border-radius: var(--cffy-radius-lg);
  font-size: var(--cffy-fs-2xs);
}
</style>

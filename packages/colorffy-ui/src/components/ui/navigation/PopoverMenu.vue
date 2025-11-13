<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiListGroup from '../list/ListGroup.vue'
import UiListItem from '../list/ListItem.vue'

/** Interfaces */
interface IMenuItem {
  id: string
  icon: string
  title: string
  link: string
  ariaLabel: string
}
interface IPopoverMenuProps {
  isOpened?: boolean
  menuItems?: IMenuItem[]
  // Header props (fallback if no slot/user provided)
  title?: string | null
  subtitle?: string | null
  avatarUrl?: string | null
  // Legacy user support (optional)
  user?: any
  auth?: any | null
}
interface IPopoverMenuEmits {
  (e: 'hideDropdown'): void
  (e: 'menuItemClick', link: string): void
}
interface IUserData {
  displayName: string | null
  email: string | null
  photoURL: string | null
}

/** Props */
const props = withDefaults(defineProps<IPopoverMenuProps>(), {
  isOpened: false,
  menuItems: () => [
    {
      id: 'home',
      icon: '&#xe66b;',
      title: 'Home',
      link: 'index',
      ariaLabel: 'Navigate to home page'
    },
    {
      id: 'about',
      icon: '&#xe88e;',
      title: 'About',
      link: 'about',
      ariaLabel: 'Navigate to about page'
    }
  ],
  title: null,
  subtitle: null,
  avatarUrl: null,
  user: null,
  auth: null
})

/** Emits */
const emit = defineEmits<IPopoverMenuEmits>()

/** Data */
const router = useRouter()
const route = useRoute()

/** Computed */
const listItems = computed(() => props.menuItems)
const menuClasses = computed(() => [
  'menu-user',
  { 'menu-user-visible': props.isOpened }
])

const userData = computed((): IUserData => ({
  displayName: props.user?.displayName || props.title || null,
  email: props.user?.email || props.subtitle || null,
  photoURL: props.user?.photoURL || props.avatarUrl || null
}))
const userDisplayName = computed(() => userData.value.displayName || 'User')
const userEmail = computed(() => userData.value.email || 'Email')
const userPhotoAlt = computed(() => `${userDisplayName.value} Profile Photo`)

/** Methods */
function handleHideDropdown() {
  emit('hideDropdown')
}
function handleMenuItemClick(link: string): void {
  emit('menuItemClick', link)
  router.push({ name: link })
  handleHideDropdown()
}
function isActiveMenuItem(link: string): boolean {
  return route.name === link
}
</script>

<template>
  <div
    id="user-navigation-menu"
    :class="menuClasses"
    role="menu"
    aria-label="User account menu"
    tabindex="0"
  >
    <!-- Header -->
    <div class="menu-user-header">
      <!-- User related data -->
      <div v-if="user">
        <div class="avatar-container">
          <img
            v-if="userData.photoURL"
            :src="userData.photoURL"
            class="img-fluid img-avatar avatar-menu mb-2"
            :alt="userPhotoAlt"
          >
          <span
            v-else
            class="img-avatar avatar-placeholder avatar-menu mb-2"
          />

          <!-- Pro icon (only show if user prop exists) -->
          <UiIconMaterial
            v-if="user"
            class="avatar-pro-icon"
            icon-code=" &#xef76;"
          />
        </div>

        <p
          class="subtitle-1 text-truncate"
          :title="userDisplayName"
        >
          {{ userDisplayName }}
        </p>
        <p
          v-if="userData.email"
          class="subtitle-2 text-truncate"
          :title="userEmail"
        >
          {{ userEmail }}
        </p>
      </div>

      <!-- Fallback header content -->
      <div v-else>
        <p class="subtitle-1 text-truncate">
          {{ props.title }}
        </p>
        <p class="subtitle-2 text-truncate">
          {{ props.subtitle }}
        </p>
      </div>

      <UiButton
        variant="outline"
        icon
        aria-label="Close user menu"
        @on-click="handleHideDropdown"
      >
        <template #icon>
          <UiIconMaterial icon-code="&#xe5cd;" aria-hidden="true" />
        </template>
      </UiButton>
    </div>

    <!-- Body -->
    <div class="menu-user-body">
      <UiListGroup
        variant="low-contrast"
        is-interactive
      >
        <UiListItem
          v-for="item in listItems"
          :key="item.id"
          :title="item.title"
          :icon="item.icon"
          :active="isActiveMenuItem(item.link)"
          :aria-label="item.ariaLabel"
          @click="handleMenuItemClick(item.link)"
        />
      </UiListGroup>

      <slot name="body-separator" />
      <hr v-if="$slots['body-separator']">

      <!-- Color mode picker -->
      <ClientOnly>
        <LazyIncludeColorModePicker hydrate-on-visible />
      </ClientOnly>
    </div>

    <!-- Footer -->
    <div class="menu-user-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

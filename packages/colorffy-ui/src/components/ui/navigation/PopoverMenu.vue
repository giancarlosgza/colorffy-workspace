<script setup lang="ts">
import type {
  IPopoverMenuEmits,
  IPopoverMenuProps,
  IUserData
} from '@/types/navigation'
import { computed } from 'vue'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiListGroup from '../list/ListGroup.vue'
import UiListItem from '../list/ListItem.vue'

/** Props */
const props = withDefaults(defineProps<IPopoverMenuProps>(), {
  isOpened: false,
  menuItems: () => [
    {
      id: 'home',
      to: '/',
      icon: '&#xe66b;',
      text: 'Home',
      ariaLabel: 'Navigate to home page'
    }
  ],
  currentRoute: null,
  title: null,
  subtitle: null,
  avatarUrl: null,
  user: null
})

/** Emits */
const emit = defineEmits<IPopoverMenuEmits>()

/** Computed */
const listItems = computed(() => props.menuItems)
const menuClasses = computed(() => [
  'popover-menu',
  { 'popover-menu-visible': props.isOpened }
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
function handleMenuItemClick(to: string | object): void {
  emit('menuItemClick', to)
  handleHideDropdown()
}
function isActiveMenuItem(to: string | object): boolean {
  if (!props.currentRoute)
    return false

  // String path comparison
  if (typeof to === 'string') {
    return props.currentRoute.path === to
  }

  // Object route comparison
  if (typeof to === 'object' && 'name' in to) {
    return props.currentRoute.name === to.name
  }

  return false
}
</script>

<template>
  <div class="popover-menu-container">
    <div
      id="user-navigation-menu"
      :class="menuClasses"
      role="menu"
      aria-label="User account menu"
      tabindex="0"
    >
      <!-- Header -->
      <div class="popover-menu-header">
        <!-- User related data -->
        <div v-if="user">
          <div class="avatar-container">
            <img
              v-if="userData.photoURL"
              :src="userData.photoURL"
              class="img-fluid img-avatar avatar-menu"
              :class="avatarCustomClass"
              :alt="userPhotoAlt"
            >
            <span
              v-else
              class="img-avatar avatar-placeholder avatar-menu"
              :class="avatarCustomClass"
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

        <!-- Close button -->
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
      <div class="popover-menu-body">
        <UiListGroup
          variant="low-contrast"
          size="sm"
          is-interactive
        >
          <UiListItem
            v-for="item in listItems"
            :key="item.id"
            :title="item.text"
            :icon="item.icon"
            :active="isActiveMenuItem(item.to)"
            :aria-label="item.ariaLabel"
            @click="handleMenuItemClick(item.to)"
          />
        </UiListGroup>

        <slot name="body-extra" />
      </div>

      <!-- Footer -->
      <div class="popover-menu-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

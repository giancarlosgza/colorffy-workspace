<script setup lang="ts">
import type {
  IPopoverMenuEmits,
  IPopoverMenuItem,
  IPopoverMenuProps
} from '@/types/navigation'
import { computed, useSlots } from 'vue'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiPopoverMenuGroup from './PopoverMenuGroup.vue'
import UiPopoverMenuItem from './PopoverMenuItem.vue'

/** Props */
const props = withDefaults(defineProps<IPopoverMenuProps>(), {
  isOpened: false,
  id: null,
  ariaLabel: null,
  closable: true,
  menuItems: () => [],
  currentRoute: null,
  title: null
})

/** Emits */
const emit = defineEmits<IPopoverMenuEmits>()

/** Data */
const slots = useSlots()

/** Computed */
const listItems = computed(() => props.menuItems)
const menuClasses = computed(() => [
  'popover-menu',
  { 'popover-menu-visible': props.isOpened }
])

const hasHeader = computed(() => Boolean(slots.header || props.title || props.closable))
const hasBody = computed(() => Boolean(slots.body || slots.default || slots['body-extra'] || listItems.value.length))

/** Methods */
function handleHideDropdown() {
  emit('hideDropdown')
}
function handleMenuItemClick(item: IPopoverMenuItem): void {
  if (item.disabled)
    return

  if (item.to)
    emit('menuItemClick', item.to)

  handleHideDropdown()
}
function isActiveMenuItem(to: string | object | null | undefined): boolean {
  if (!props.currentRoute || !to)
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
      :id="id || undefined"
      :class="menuClasses"
      role="menu"
      :aria-label="ariaLabel || 'Menu'"
      tabindex="0"
    >
      <!-- Header -->
      <div
        v-if="hasHeader"
        class="popover-menu-header"
      >
        <div class="popover-menu-header-content">
          <slot name="header">
            <p
              v-if="title"
              class="subtitle-1 text-truncate"
              :title="title"
            >
              {{ title }}
            </p>
          </slot>
        </div>

        <!-- Close button -->
        <UiButton
          v-if="closable"
          variant="outline"
          icon
          custom-class="popover-menu-close"
          aria-label="Close menu"
          @on-click="handleHideDropdown"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5cd;" aria-hidden="true" />
          </template>
        </UiButton>
      </div>

      <!-- Body -->
      <div
        v-if="hasBody"
        class="popover-menu-body"
      >
        <slot name="body">
          <slot>
            <UiPopoverMenuGroup>
              <UiPopoverMenuItem
                v-for="item in listItems"
                :key="item.id"
                v-bind="item"
                :active="item.active ?? isActiveMenuItem(item.to)"
                @click="handleMenuItemClick(item)"
              />
            </UiPopoverMenuGroup>
          </slot>
        </slot>

        <!-- Deprecated: use the body slot; removed in v3 -->
        <slot name="body-extra" />
      </div>

      <!-- Footer -->
      <div
        v-if="$slots.footer"
        class="popover-menu-footer"
      >
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  IPopoverMenuEmits,
  IPopoverMenuItem,
  IPopoverMenuProps
} from '@/types/navigation'
import { computed, nextTick, onMounted, ref, useId, useSlots, watch } from 'vue'
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
  nativePopover: true,
  menuItems: () => [],
  currentRoute: null,
  title: null
})

/** Emits */
const emit = defineEmits<IPopoverMenuEmits>()

/** Data */
const slots = useSlots()
const panelRef = ref<HTMLElement | null>(null)
const supportsNativePopover = ref<boolean>(false)
const anchorName = `--popover-menu-${useId()}`
let lastNativeDismiss = 0

/** Computed */
const isNative = computed(() => props.nativePopover && supportsNativePopover.value)
const listItems = computed(() => props.menuItems)
const menuClasses = computed(() => [
  'popover-menu',
  { 'popover-menu-visible': !isNative.value && props.isOpened }
])

const hasHeader = computed(() => Boolean(slots.header || props.title || props.closable))
const hasBody = computed(() => Boolean(slots.body || slots.default || slots['body-extra'] || listItems.value.length))

/** Methods */
function handleHideDropdown() {
  emit('hideDropdown')
}
function syncNativePopover(open: boolean): void {
  const panel = panelRef.value
  if (!panel)
    return

  if (open && !panel.matches(':popover-open')) {
    // A reopen right after a light dismiss is the same gesture closing the menu
    if (performance.now() - lastNativeDismiss < 100) {
      emit('hideDropdown')
      return
    }
    panel.showPopover()
  } else if (!open && panel.matches(':popover-open')) {
    panel.hidePopover()
  }
}
function handleNativeToggle(event: ToggleEvent): void {
  if (event.newState === 'closed' && props.isOpened) {
    lastNativeDismiss = performance.now()
    emit('hideDropdown')
  }
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

/** Lifecycle */
onMounted(() => {
  supportsNativePopover.value = 'popover' in HTMLElement.prototype && CSS.supports('anchor-name: --a')
  if (isNative.value && props.isOpened)
    nextTick(() => syncNativePopover(true))
})

/** Watchers */
watch(() => props.isOpened, (open) => {
  if (isNative.value)
    syncNativePopover(open)
})
</script>

<template>
  <div class="popover-menu-container" :style="{ anchorName }">
    <div
      :id="id || undefined"
      ref="panelRef"
      :class="menuClasses"
      :popover="isNative ? 'auto' : undefined"
      :style="isNative ? { positionAnchor: anchorName } : undefined"
      role="menu"
      :aria-label="ariaLabel || 'Menu'"
      tabindex="0"
      @toggle="handleNativeToggle"
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

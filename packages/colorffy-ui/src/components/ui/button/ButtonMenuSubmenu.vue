<script setup lang="ts">
import type { IButtonMenuSubmenuProps } from '@/types/button'
import { Dropdown as VDropdown } from 'floating-vue'
import { computed, ref, useId } from 'vue'
import { useFloatingContainer } from '@/composables/useFloatingContainer'
import { useMenuNavigation } from '@/composables/useMenuNavigation'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IButtonMenuSubmenuProps>(), {
  id: '',
  placement: 'right',
  isMobile: false,
  itemText: '',
  icon: null,
  iconStyle: null,
  iconClass: null,
  isDestructive: false,
  disabled: false,
  customClass: null,
  badge: null,
  iconTrailing: null,
  iconTrailingStyle: null,
  iconTrailingClass: null
})

/** Computed */
const itemClasses = computed(() => {
  const classes = []

  if (props.isDestructive)
    classes.push('v-danger')

  if (props.disabled)
    classes.push('v-disabled')

  if (props.customClass)
    classes.push(props.customClass)

  return classes
})

/** Data */
const floatingProps = useFloatingContainer()
const isOpen = ref(false)
const triggerRef = ref<HTMLButtonElement | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const menuId = useId()
const { focusItem, onKeydown: onNavigationKeydown } = useMenuNavigation(menuRef)

/** Methods */
// → opens the submenu on its first item, ← closes it back to this item
function onTriggerKeydown(event: KeyboardEvent): void {
  if (event.key !== 'ArrowRight')
    return
  event.preventDefault()
  event.stopPropagation()
  if (isOpen.value)
    focusItem('first')
  else
    isOpen.value = true
}
function onMenuShown(): void {
  requestAnimationFrame(() => focusItem('first'))
}
function onMenuKeydown(event: KeyboardEvent): void {
  if (event.key !== 'ArrowLeft')
    return onNavigationKeydown(event)
  event.preventDefault()
  event.stopPropagation()
  triggerRef.value?.focus()
  isOpen.value = false
}
</script>

<template>
  <li role="none">
    <VDropdown
      v-model:shown="isOpen"
      v-bind="floatingProps"
      :aria-id="id ? `${id}-submenu` : undefined"
      :positioning-disabled="isMobile"
      :placement="placement"
      class="w-100"
      no-auto-focus
      @apply-show="onMenuShown"
    >
      <button
        ref="triggerRef"
        type="button"
        class="v-dropdown-item"
        :class="itemClasses"
        role="menuitem"
        aria-haspopup="menu"
        :aria-expanded="isOpen"
        :aria-controls="isOpen ? menuId : undefined"
        :disabled="disabled"
        @keydown="onTriggerKeydown"
      >
        <span class="v-dropdown-item-primary">
          <!-- Leading Icon & Text -->
          <UiIconMaterial
            v-if="icon"
            :icon-code="icon"
            :class="iconClass"
            :style="iconStyle"
          />
          {{ itemText }}
        </span>

        <span
          v-if="badge || iconTrailing"
          class="v-dropdown-item-secondary"
        >
          <!-- Badge -->
          <UiBadge
            v-if="badge"
            size="sm"
            :variant="badge.variant"
            :text="badge.text"
            :icon-code="badge.iconCode"
            :icon-class="badge.iconClass"
            :icon-style="badge.iconStyle"
            :pill="badge.pill"
            :custom-class="badge.customClass"
          />

          <!-- Icon Trailing -->
          <UiIconMaterial
            v-if="iconTrailing"
            :icon-code="iconTrailing"
            :class="iconTrailingClass"
            :style="iconTrailingStyle"
          />
        </span>
      </button>

      <template #popper>
        <ul
          :id="menuId"
          ref="menuRef"
          role="menu"
          :aria-label="itemText"
          @keydown="onMenuKeydown"
        >
          <slot />
        </ul>
      </template>
    </VDropdown>
  </li>
</template>

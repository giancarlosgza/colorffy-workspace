<script setup lang="ts">
import type { IButtonMenuEmits, IButtonMenuProps } from '@/types/button'
import { hideAllPoppers, Dropdown as VDropdown, Tooltip as VTooltip } from 'floating-vue'
import { onBeforeUnmount, ref, useId, watch } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import { useFloatingContainer } from '@/composables/useFloatingContainer'
import { useMenuNavigation } from '@/composables/useMenuNavigation'
import UiButton from './Button.vue'

/** Props */
withDefaults(defineProps<IButtonMenuProps>(), {
  isMobile: false,
  tooltipText: null,
  id: '',
  title: '',
  text: '',
  variant: 'filled',
  color: '',
  size: '',
  icon: false,
  iconVariant: undefined,
  iconTrailing: false,
  disabled: false,
  loading: false,
  customClass: '',
  rounded: false,
  fluid: false,
  placement: 'bottom',
  tooltipPlacement: 'top'
})

/** Emits */
defineEmits<IButtonMenuEmits>()

/** Labels */
const l10n = useLabels('buttonMenu')

/** Data */
const isOpen = ref(false)
const returnFocus = ref(false)
const triggerRef = ref<InstanceType<typeof UiButton> | null>(null)
const menuRef = ref<HTMLElement | null>(null)
const menuId = useId()
let focusOnShow: 'first' | 'last' = 'first'

/** Composables */
const floatingProps = useFloatingContainer()
const { focusItem, onKeydown: onMenuKeydown } = useMenuNavigation(menuRef)

/** Methods */
function triggerElement(): HTMLElement | undefined {
  return triggerRef.value?.$el as HTMLElement | undefined
}
function isInMenu(element: Element | null): boolean {
  return !!element?.closest('.v-popper__popper')
}
// FloatingVue keeps the dropdown open while the button's tooltip shows, so Esc hides every popper
function onDocumentKeydown(event: KeyboardEvent): void {
  if (event.key === 'Tab' && isInMenu(document.activeElement)) {
    isOpen.value = false
    hideAllPoppers()
    triggerElement()?.focus()
    return
  }
  if (event.key !== 'Escape')
    return
  event.preventDefault()
  event.stopPropagation()
  returnFocus.value = true
  isOpen.value = false
  hideAllPoppers()
}
function onTriggerKeydown(event: KeyboardEvent): void {
  if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')
    return
  event.preventDefault()
  focusOnShow = event.key === 'ArrowUp' ? 'last' : 'first'
  if (isOpen.value)
    focusItem(focusOnShow)
  else
    isOpen.value = true
}
// The items can only take focus once the popper renders as shown
function onMenuShown(): void {
  const position = focusOnShow
  focusOnShow = 'first'
  requestAnimationFrame(() => focusItem(position))
}
function onMenuHidden(): void {
  const focusLost = !document.activeElement || document.activeElement === document.body || isInMenu(document.activeElement)
  if (returnFocus.value && focusLost)
    triggerElement()?.focus()
  returnFocus.value = false
}

/** Watchers */
// Only a keyboard pick gives focus back to the button
watch(isOpen, (open) => {
  if (open) {
    document.addEventListener('keydown', onDocumentKeydown, true)
    return
  }
  document.removeEventListener('keydown', onDocumentKeydown, true)
  const active = document.activeElement
  if (isInMenu(active) && active?.matches(':focus-visible'))
    returnFocus.value = true
})

/** Lifecycle */
onBeforeUnmount(() => document.removeEventListener('keydown', onDocumentKeydown, true))
</script>

<template>
  <VDropdown
    v-model:shown="isOpen"
    v-bind="floatingProps"
    :aria-id="id ? `${id}-dropdown` : undefined"
    :positioning-disabled="isMobile"
    :placement="placement"
    :class="{ 'w-100': fluid }"
    no-auto-focus
    @apply-show="onMenuShown"
    @apply-hide="onMenuHidden"
  >
    <VTooltip
      v-bind="floatingProps"
      :aria-id="id ? `${id}-tooltip` : undefined"
      :placement="tooltipPlacement"
      :disabled="!tooltipText"
      :class="{ 'w-100': fluid }"
      class="d-inline-block"
    >
      <!-- Button -->
      <UiButton
        :id
        ref="triggerRef"
        :title
        :text
        :variant
        :color
        :size
        :icon
        :icon-variant="iconVariant"
        :custom-class="customClass"
        :rounded="rounded"
        :fluid="fluid"
        :icon-trailing="iconTrailing"
        :loading="loading"
        :disabled="disabled"
        :aria-label="text ? undefined : (title || tooltipText || l10n.ariaLabel)"
        aria-haspopup="menu"
        :aria-expanded="isOpen"
        :aria-controls="isOpen ? menuId : undefined"
        @click="$emit('click', $event)"
        @keydown="onTriggerKeydown"
      >
        <!-- Icon -->
        <template #icon>
          <slot name="icon" />
        </template>
      </UiButton>

      <!-- Tooltip text -->
      <template #popper>
        {{ tooltipText }}
      </template>
    </VTooltip>

    <!-- Dropdown menu -->
    <template #popper>
      <ul
        :id="menuId"
        ref="menuRef"
        role="menu"
        :aria-label="text || title || tooltipText || l10n.ariaLabel"
        @keydown="onMenuKeydown"
      >
        <slot name="menu" />
      </ul>
    </template>
  </VDropdown>
</template>

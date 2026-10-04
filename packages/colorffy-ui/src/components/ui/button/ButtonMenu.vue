<script setup lang="ts">
import type { IButtonMenuEmits, IButtonMenuProps } from '@/types/button'
import { hideAllPoppers, Dropdown as VDropdown, Tooltip as VTooltip } from 'floating-vue'
import { onBeforeUnmount, ref, watch } from 'vue'
import { useFloatingContainer } from '@/composables/useFloatingContainer'
import UiButton from './Button.vue'

/** Props */
const props = withDefaults(defineProps<IButtonMenuProps>(), {
  isMobile: false,
  tooltipText: 'menu',
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

/** Data */
const floatingProps = useFloatingContainer()
const isOpen = ref(false)
const returnFocus = ref(false)
const triggerRef = ref<InstanceType<typeof UiButton> | null>(null)

/** Methods */
// Esc closes the menu, not a dialog around it, and gives focus back to the button.
// FloatingVue keeps a dropdown open while its button's tooltip shows, so both close,
// and focus only returns once the menu is gone (focusing shows the tooltip again).
function onEscape(event: KeyboardEvent): void {
  if (event.key !== 'Escape')
    return
  event.preventDefault()
  event.stopPropagation()
  returnFocus.value = true
  isOpen.value = false
  hideAllPoppers()
}
function onMenuHidden(): void {
  if (!returnFocus.value)
    return
  returnFocus.value = false
  ;(triggerRef.value?.$el as HTMLElement | undefined)?.focus()
}

/** Watchers */
watch(isOpen, (open) => {
  if (open)
    document.addEventListener('keydown', onEscape, true)
  else
    document.removeEventListener('keydown', onEscape, true)
})

onBeforeUnmount(() => document.removeEventListener('keydown', onEscape, true))
</script>

<template>
  <VDropdown
    v-model:shown="isOpen"
    v-bind="floatingProps"
    :aria-id="id ? `${id}-dropdown` : undefined"
    :positioning-disabled="isMobile"
    :placement="placement"
    :class="{ 'w-100': fluid }"
    @apply-hide="onMenuHidden"
  >
    <VTooltip
      v-bind="floatingProps"
      :aria-id="id ? `${id}-tooltip` : undefined"
      :placement="tooltipPlacement"
      :class="{ 'w-100': fluid }"
      class="d-inline-block"
    >
      <!-- Button component -->
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
        :aria-label="text ? undefined : (title || tooltipText)"
        :aria-expanded="isOpen"
        :aria-controls="isOpen && props.id ? `${props.id}-dropdown` : undefined"
        @click="$emit('click', $event)"
      >
        <!-- Icon slot -->
        <template #icon>
          <slot name="icon" />
        </template>
      </UiButton>

      <!-- Tooltip text slot -->
      <template #popper>
        {{ tooltipText }}
      </template>
    </VTooltip>

    <!-- Dropdown menu slot -->
    <template #popper>
      <ul>
        <slot name="menu" />
      </ul>
    </template>
  </VDropdown>
</template>

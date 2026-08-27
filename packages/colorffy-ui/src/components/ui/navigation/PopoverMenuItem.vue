<script setup lang="ts">
import type { IPopoverMenuItemEmits, IPopoverMenuItemProps } from '@/types/navigation'
import { computed } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IPopoverMenuItemProps>(), {
  as: 'button',
  text: '',
  icon: null,
  iconClass: null,
  iconStyle: null,
  to: null,
  active: false,
  disabled: false,
  isDestructive: false,
  shortcut: null,
  badge: null,
  iconTrailing: null,
  ariaLabel: null,
  customClass: null
})

/** Emits */
const emit = defineEmits<IPopoverMenuItemEmits>()

/** Computed */
const itemClasses = computed(() => [
  {
    'active': props.active,
    'disabled': props.disabled,
    'popover-menu-item-destructive': props.isDestructive
  },
  props.customClass
])
// Anchors and router links take the destination, buttons take a type
const linkProps = computed(() => {
  if (props.as === 'button')
    return { type: 'button', disabled: props.disabled }

  if (props.as === 'a')
    return { href: typeof props.to === 'string' ? props.to : undefined }

  // Plain elements (div, li) carry no destination; anything else is a router component
  return typeof props.as === 'string' ? {} : { to: props.to ?? undefined }
})
// A row that only holds other controls is not itself a menu item
const isInteractive = computed(() => props.as !== 'div' && props.as !== 'span')

/** Methods */
function handleClick(event: MouseEvent) {
  if (props.disabled)
    return

  emit('click', event)
}
</script>

<template>
  <component
    :is="as"
    v-bind="linkProps"
    class="popover-menu-item"
    :class="itemClasses"
    :role="isInteractive ? 'menuitem' : undefined"
    :aria-label="ariaLabel || undefined"
    :aria-current="active ? 'page' : undefined"
    :aria-disabled="disabled || undefined"
    @click="handleClick"
  >
    <!-- Leading icon -->
    <UiIconMaterial
      v-if="icon"
      :icon-code="icon"
      :class="iconClass"
      :style="iconStyle"
    />

    <p>
      <slot>{{ text }}</slot>
    </p>

    <!-- Trailing -->
    <span
      v-if="badge || shortcut || iconTrailing || $slots.trailing"
      class="popover-menu-item-trailing"
    >
      <slot name="trailing">
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

        <kbd
          v-if="shortcut"
          class="popover-menu-shortcut"
        >
          {{ shortcut }}
        </kbd>

        <UiIconMaterial
          v-if="iconTrailing"
          :icon-code="iconTrailing"
        />
      </slot>
    </span>
  </component>
</template>

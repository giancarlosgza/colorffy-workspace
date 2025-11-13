<script setup lang="ts">
import { computed } from 'vue'
import UiButtonTooltip from '../ui/button/ButtonTooltip.vue'
import UiIconMaterial from '../ui/icon/Material.vue'

/**
 * HeaderContent Component
 *
 * A flexible header component with support for back buttons, actions, and featured badges.
 * Designed for page headers with navigation and action controls.
 *
 * @component
 * @example
 * ```vue
 * <HeaderContent
 *   title="Gradient Generator"
 *   subtitle="Create beautiful gradients"
 *   :is-featured="true"
 *   :actions="true"
 *   :back-button="true"
 *   back-button-label="Back to tools"
 *   @click="handleBack"
 * >
 *   <template #actions>
 *     <UiButton text="Save" />
 *   </template>
 * </HeaderContent>
 * ```
 */

/** Interfaces */
interface IHeaderContentProps {
  /** Main title text to display */
  title?: string | null
  /** Subtitle text to display below the title */
  subtitle?: string | null
  /** Whether to show actions slot */
  actions?: boolean
  /** Whether to hide actions on mobile devices */
  hideActionsOnMobile?: boolean
  /** Whether to show back button */
  backButton?: boolean
  /** Tooltip text for the back button */
  backButtonLabel?: string
  /** Additional CSS classes for the header container */
  containerClass?: string | string[]
}
interface IHeaderContentEmits {
  (e: 'click'): void
}

/** Props */
const props = withDefaults(defineProps<IHeaderContentProps>(), {
  title: null,
  subtitle: null,
  actions: false,
  hideActionsOnMobile: true,
  backButton: false,
  backButtonLabel: 'Go back',
  containerClass: ''
})

/** Emits */
const emit = defineEmits<IHeaderContentEmits>()

/** Computed */
const headerClasses = computed(() => {
  const classes = []

  if (props.backButton) {
    classes.push('page-header-breadcrumb')
  }

  if (props.actions) {
    classes.push('page-header-actions')
  }

  return classes
})
const containerClasses = computed(() => {
  const classes = ['header-container']

  if (props.containerClass) {
    if (Array.isArray(props.containerClass)) {
      classes.push(...(props.containerClass as string[]))
    } else {
      classes.push(props.containerClass as string)
    }
  }

  return classes.join(' ')
})

/** Methods */
function handleBackClick() {
  emit('click')
}
</script>

<template>
  <div :class="containerClasses">
    <header
      class="header"
      role="banner"
      :aria-label="title ? `Page header: ${title}` : 'Page header'"
    >
      <!-- Title -->
      <div
        class="header-title"
        :class="headerClasses"
      >
        <!-- Back button -->
        <UiButtonTooltip
          v-if="backButton"
          variant="text"
          custom-class="text-neutral"
          icon icon-variant="compact"
          :tooltip-text="backButtonLabel"
          :aria-label="backButtonLabel"
          @on-click="handleBackClick"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5c4;" />
          </template>
        </UiButtonTooltip>

        <!-- Title and subtitle -->
        <div class="header-content">
          <h1
            v-if="title"
            :id="`page-title-${$attrs.id || 'default'}`"
            class="text-title"
          >
            {{ title }}
          </h1>

          <p
            v-if="subtitle"
            class="text-description"
            :aria-describedby="title ? `page-title-${$attrs.id || 'default'}` : undefined"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div
        v-if="actions && $slots.actions"
        class="header-actions"
        :class="{ 'page-header-actions-responsive': hideActionsOnMobile }"
        role="toolbar"
        aria-label="Page actions"
      >
        <slot name="actions" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.text-title {
  view-transition-name: selected-header;
  width: fit-content;
  contain: paint;
}

.text-description {
  view-transition-name: selected-description;
  width: fit-content;
  contain: paint;
}
</style>

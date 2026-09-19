<script setup lang="ts">
import type { IHeaderContentEmits, IHeaderContentProps } from '@/types/layout'
import { computed, useId, useSlots } from 'vue'
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
 *   headline="Tools"
 *   title="Gradient Generator"
 *   subtitle="Create beautiful gradients"
 *   :back-button="true"
 *   back-button-label="Back to tools"
 *   @back="handleBack"
 * >
 *   <template #actions>
 *     <UiButton text="Save" />
 *   </template>
 * </HeaderContent>
 * ```
 */

/** Props */
const props = withDefaults(defineProps<IHeaderContentProps>(), {
  as: 'h1',
  headline: null,
  title: null,
  subtitle: null,
  size: 'sm',
  hideActionsWhenNarrow: false,
  backButton: false,
  backButtonLabel: 'Go back',
  viewTransitionName: null,
  containerClass: null
})

/** Emits */
const emit = defineEmits<IHeaderContentEmits>()

/** Slots */
const slots = useSlots()

/** Constants */
const TITLE_SIZE_CLASSES: Record<string, string> = {
  'md': 'header-2xl',
  'lg': 'header-3xl',
  'xl': 'header-4xl',
  '2xl': 'header-5xl'
}

/** Computed */
const generatedHeadingId = useId()
const headingId = computed(() => props.headingId ?? generatedHeadingId)
const containerClasses = computed(() => [TITLE_SIZE_CLASSES[props.size ?? ''] ?? null, props.containerClass])
const viewTransitionClass = computed(() => (props.viewTransitionName ? 'header-vt' : null))
const titleStyle = computed(() => (props.viewTransitionName ? { viewTransitionName: props.viewTransitionName } : undefined))
const descriptionStyle = computed(() => (props.viewTransitionName ? { viewTransitionName: `${props.viewTransitionName}-description` } : undefined))

/** Methods */
function headerClasses() {
  return {
    'page-header-back': props.backButton,
    'page-header-actions': Boolean(slots.actions)
  }
}
function handleBackClick() {
  emit('back')
}
</script>

<template>
  <div
    class="header-container"
    :class="containerClasses"
  >
    <header class="header">
      <!-- Title -->
      <div
        class="header-title"
        :class="headerClasses()"
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
          <p
            v-if="headline"
            class="caption text-primary"
          >
            {{ headline }}
          </p>

          <component
            :is="as"
            v-if="title"
            :id="headingId"
            class="text-title"
            :class="viewTransitionClass"
            :style="titleStyle"
          >
            {{ title }}
          </component>

          <p
            v-if="subtitle"
            class="text-description"
            :class="viewTransitionClass"
            :style="descriptionStyle"
          >
            {{ subtitle }}
          </p>
        </div>
      </div>

      <!-- Actions -->
      <div
        v-if="$slots.actions"
        class="header-actions"
        :class="{ 'page-header-actions-responsive': hideActionsWhenNarrow }"
        role="group"
        aria-label="Page actions"
      >
        <slot name="actions" />
      </div>
    </header>
  </div>
</template>

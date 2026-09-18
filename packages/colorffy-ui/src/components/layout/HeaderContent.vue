<script setup lang="ts">
import type { IHeaderContentEmits, IHeaderContentProps } from '@/types/layout'
import { computed, useId } from 'vue'
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
  title: null,
  subtitle: null,
  hideActionsWhenNarrow: false,
  backButton: false,
  backButtonLabel: 'Go back',
  containerClass: null
})

/** Emits */
const emit = defineEmits<IHeaderContentEmits>()

/** Computed */
const generatedHeadingId = useId()
const headingId = computed(() => props.headingId ?? generatedHeadingId)

/** Methods */
function handleBackClick() {
  emit('back')
}
</script>

<template>
  <div
    class="header-container"
    :class="containerClass"
  >
    <header class="header">
      <!-- Title -->
      <div
        class="header-title"
        :class="{ 'page-header-breadcrumb': backButton, 'page-header-actions': Boolean($slots.actions) }"
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
            :id="headingId"
            class="text-title"
          >
            {{ title }}
          </h1>

          <p
            v-if="subtitle"
            class="text-description"
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

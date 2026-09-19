<script setup lang="ts">
import type { IHeroContentProps } from '@/types/layout'
import { computed, useId } from 'vue'

/**
 * HeroContent Component
 *
 * A page-opening hero with an eyebrow, display title, description and CTA slot.
 *
 * @component
 * @example
 * ```vue
 * <HeroContent
 *   headline="Open source"
 *   title="Build vibrant interfaces"
 *   subtitle="70+ headless components for Vue 3 and Nuxt."
 *   size="lg"
 *   align="center"
 * >
 *   <template #actions>
 *     <UiButton text="Get started" variant="filled" color="primary" />
 *   </template>
 * </HeroContent>
 * ```
 */

/** Props */
const props = withDefaults(defineProps<IHeroContentProps>(), {
  headingId: undefined,
  headline: null,
  title: null,
  subtitle: null,
  size: 'xl',
  align: 'start',
  viewTransitionName: null,
  customClass: null
})

/** Constants */
const TITLE_DISPLAY_CLASSES: Record<string, string> = {
  sm: 'display-4',
  md: 'display-3',
  lg: 'display-2',
  xl: 'display-1'
}

/** Computed */
const generatedHeadingId = useId()
const headingId = computed(() => props.headingId ?? generatedHeadingId)
const heroClasses = computed(() => [props.align === 'start' ? null : `hero-${props.align}`, props.customClass])
const viewTransitionClass = computed(() => (props.viewTransitionName ? 'hero-vt' : null))
const titleClasses = computed(() => ['hero-title', TITLE_DISPLAY_CLASSES[props.size ?? ''] ?? 'display-1', viewTransitionClass.value])
const titleStyle = computed(() => (props.viewTransitionName ? { viewTransitionName: props.viewTransitionName } : undefined))
const descriptionStyle = computed(() => (props.viewTransitionName ? { viewTransitionName: `${props.viewTransitionName}-description` } : undefined))
</script>

<template>
  <section
    class="hero-content"
    :class="heroClasses"
    :aria-labelledby="title ? headingId : undefined"
  >
    <p
      v-if="headline"
      class="caption text-primary"
    >
      {{ headline }}
    </p>

    <h1
      v-if="title"
      :id="headingId"
      :class="titleClasses"
      :style="titleStyle"
    >
      {{ title }}
    </h1>

    <p
      v-if="subtitle"
      class="hero-description"
      :class="viewTransitionClass"
      :style="descriptionStyle"
    >
      {{ subtitle }}
    </p>

    <div
      v-if="$slots.actions"
      class="hero-actions"
    >
      <slot name="actions" />
    </div>
  </section>
</template>

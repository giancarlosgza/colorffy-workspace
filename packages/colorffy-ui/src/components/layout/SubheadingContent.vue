<script setup lang="ts">
import type { ISubheadingContentProps } from '@/types/layout'
import { computed } from 'vue'

/**
 * SubheadingContent Component
 *
 * A section subheading with an optional description, built on the
 * `.text-subheading` design-system styles.
 *
 * @component
 * @example
 * ```vue
 * <SubheadingContent
 *   title="Integraciones"
 *   subtitle="Conecta las herramientas que ya usa tu equipo."
 * >
 *   <template #actions>
 *     <UiBadge text="3 activas" variant="outline" size="sm" />
 *   </template>
 * </SubheadingContent>
 * ```
 */

/** Props */
const props = withDefaults(defineProps<ISubheadingContentProps>(), {
  as: 'h3',
  title: null,
  subtitle: null,
  gutter: 'md',
  customClass: null
})

/** Constants */
const GUTTER_CLASSES: Record<string, string> = {
  none: 'subheading-m0',
  sm: 'subheading-m1'
}

/** Computed */
const headingClasses = computed(() => ['text-subheading', GUTTER_CLASSES[props.gutter ?? ''] ?? null])
</script>

<template>
  <div
    class="subheading-content"
    :class="customClass"
  >
    <div class="subheading-text">
      <component
        :is="as"
        v-if="title"
        :class="headingClasses"
      >
        {{ title }}
      </component>

      <p v-if="subtitle">
        {{ subtitle }}
      </p>
    </div>

    <div
      v-if="$slots.actions"
      class="subheading-actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

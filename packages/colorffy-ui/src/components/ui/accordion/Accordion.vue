<script setup lang="ts">
import type { IAccordionItemProps } from '@/types/accordion'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
withDefaults(defineProps<IAccordionItemProps>(), {
  id: null,
  name: 'accordion-item',
  title: '',
  icon: null,
  iconClass: null,
  text: '',
  disabled: false,
  size: null,
  customClass: null
})

/** Model */
const isOpen = defineModel<boolean>('open', { default: false })
</script>

<template>
  <details
    :id="id || undefined"
    :name="name || undefined"
    class="accordion"
    :class="[customClass, size && size !== 'md' ? `accordion-${size}` : null, { 'is-disabled': disabled }]"
    :open="isOpen || undefined"
    @toggle="isOpen = ($event.target as HTMLDetailsElement).open"
  >
    <!-- Enter and Space also reach the summary as a click -->
    <summary
      class="accordion-header"
      :aria-disabled="disabled || undefined"
      :tabindex="disabled ? -1 : undefined"
      @click="disabled && $event.preventDefault()"
    >
      <slot name="header">
        <UiIconMaterial
          v-if="icon"
          class="accordion-icon" :class="[iconClass]"
          :icon-code="icon"
        />
        <span class="accordion-title">{{ title }}</span>
      </slot>
    </summary>
    <div class="accordion-body">
      <p v-if="text" v-text="text" />
      <slot name="content" />
    </div>
  </details>
</template>

<script setup lang="ts">
import type { IAccordionItemProps } from '@/types/accordion'

/** Props */
withDefaults(defineProps<IAccordionItemProps>(), {
  id: null,
  name: 'accordion-item',
  title: '',
  text: '',
  open: false,
  disabled: false,
  customClass: null
})

/** Model */
const isOpen = defineModel<boolean>('open', { default: false })
</script>

<template>
  <details
    :id="id ? `accordion-${id}` : undefined"
    :name="name || undefined"
    class="accordion"
    :class="[customClass, { 'is-disabled': disabled }]"
    :open="isOpen || undefined"
    :aria-disabled="disabled || undefined"
  >
    <summary class="accordion-header">
      <slot name="header">
        <span class="accordion-title">{{ title }}</span>
      </slot>
    </summary>
    <div class="accordion-body">
      <p v-if="text" v-text="text" />
      <slot name="content" />
    </div>
  </details>
</template>

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
    @toggle="isOpen = ($event.target as HTMLDetailsElement).open"
  >
    <summary class="accordion-header">
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

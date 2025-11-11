<script setup lang="ts">
import { ref } from 'vue'
import type { ISidebarGroupProps } from '@/types/sidebar'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ISidebarGroupProps>(), {
  text: '',
  icon: null,
  collapsible: false,
  defaultOpen: true,
  customClass: '',
})

/** State */
const isOpen = ref(props.defaultOpen)

/** Methods */
function toggleGroup() {
  if (props.collapsible) {
    isOpen.value = !isOpen.value
  }
}
</script>

<template>
  <div :class="['drawer-group', customClass]">
    <!-- Collapsible header -->
    <div
      v-if="collapsible && text"
      class="drawer-item"
      role="button"
      :aria-expanded="isOpen"
      :aria-controls="`group-${text}`"
      @click="toggleGroup"
    >
      <UiIconMaterial v-if="icon" :icon-code="icon" decorative />
      <span>{{ text }}</span>
      <UiIconMaterial icon-code="&#xe313;" decorative :class="{ 'rotate-180': isOpen }" />
    </div>

    <!-- Non-collapsible label -->
    <p v-else-if="text" class="drawer-text">{{ text }}</p>

    <!-- Group content -->
    <div
      v-if="!collapsible || isOpen"
      :id="`group-${text}`"
      class="drawer-group-content"
    >
      <slot />
    </div>
  </div>
</template>

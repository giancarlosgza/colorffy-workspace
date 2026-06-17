<script setup lang="ts">
import type { ISidebarDropdownProps } from '@/types/sidebar'
import { Dropdown as VDropdown } from 'floating-vue'
import { computed, ref } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ISidebarDropdownProps>(), {
  title: '',
  subtitle: null,
  interactive: true,
  placement: 'bottom',
  customClass: ''
})

/** Data */
const isShown = ref(false)

/** Computed */
const contentClasses = computed(() => [
  'drawer-dropdown-content',
  {
    'dropdown-switcher': props.interactive
  },
  props.customClass
])

/** Methods */
function toggleDropdown() {
  isShown.value = !isShown.value
}
</script>

<template>
  <!-- Interactive version with VDropdown -->
  <VDropdown v-if="interactive" v-model:shown="isShown" class="d-flex flex-grow-1" :placement="placement">
    <!-- Trigger content -->
    <div
      :class="contentClasses"
      role="button"
      tabindex="0"
      aria-haspopup="menu"
      :aria-expanded="isShown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
    >
      <div class="drawer-dropdown-text">
        <p class="drawer-dropdown-title">
          {{ title }}
        </p>
        <p v-if="subtitle" class="drawer-dropdown-subtitle">
          {{ subtitle }}
        </p>
      </div>
      <UiIconMaterial icon-code="&#xe5d7;" class="drawer-dropdown-switcher-icon" />
    </div>

    <!-- Dropdown menu -->
    <template #popper>
      <ul class="v-dropdown-menu">
        <slot />
      </ul>
    </template>
  </VDropdown>

  <!-- Static version (no dropdown) -->
  <div v-else :class="contentClasses">
    <div class="drawer-dropdown-text">
      <p class="drawer-dropdown-title">
        {{ title }}
      </p>
      <p v-if="subtitle" class="drawer-dropdown-subtitle">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

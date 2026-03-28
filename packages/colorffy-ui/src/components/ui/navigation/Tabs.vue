<script setup lang="ts">
import type { ITabsEmits, ITabsProps } from '@/types/navigation'
import { ref, toRef, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<ITabsProps>(), {
  pillTabs: false,
  contrastTabs: false,
  activeTab: undefined
})

/** Emits */
const emit = defineEmits<ITabsEmits>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')

/** Watchers */
watch(() => props.activeTab, (newVal) => {
  if (newVal) {
    activeTabName.value = newVal
  }
})

/** Methods */
function handleSelectedTab(tab: string) {
  activeTabName.value = tab
  emit('updateActiveTab', tab)
}
</script>

<template>
  <ul
    class="tabs-navigation"
    :class="{ 'tabs-pills': pillTabs, 'tabs-contrast': contrastTabs }"
    role="tablist"
  >
    <li
      v-for="(tab, tabIndex) in tabs"
      :key="`tab-${tabIndex}`"
      class="tab-item"
    >
      <button
        class="tab-link"
        role="tab"
        :class="[activeTabName === tab.id ? 'active' : '']"
        :aria-selected="activeTabName === tab.id"
        :tabindex="activeTabName === tab.id ? 0 : -1"
        @click="handleSelectedTab(tab.id)"
      >
        {{ tab.label }}
      </button>
    </li>
  </ul>
</template>

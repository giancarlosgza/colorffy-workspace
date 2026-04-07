<script setup lang="ts">
import type { ITabItem, ITabsEmits, ITabsProps } from '@/types/navigation'
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
function handleSelectedTab(tab: ITabItem) {
  if (tab.disabled)
    return

  activeTabName.value = tab.id
  emit('updateActiveTab', tab.id)
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
        :class="[activeTabName === tab.id ? 'active' : '', tab.disabled ? 'disabled' : '']"
        :aria-selected="activeTabName === tab.id"
        :aria-disabled="tab.disabled"
        :tabindex="activeTabName === tab.id ? 0 : -1"
        :disabled="tab.disabled"
        @click="handleSelectedTab(tab)"
      >
        {{ tab.label }}
      </button>
    </li>
  </ul>
</template>

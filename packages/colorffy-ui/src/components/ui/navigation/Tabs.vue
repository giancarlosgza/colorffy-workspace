<script setup lang="ts">
import { ref, toRef } from 'vue'

/** Interfaces */
interface ITabItem {
  id: string
  label: string
}
interface ITabsProps {
  tabs: ITabItem[]
  pillTabs?: boolean
  contrastTabs?: boolean
}

/** Props */
const props = withDefaults(defineProps<ITabsProps>(), {
  pillTabs: false,
  contrastTabs: false
})

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(tabs.value?.[0]?.id ?? '')

/** Methods */
function handleSelectedTab(tab: string) {
  activeTabName.value = tab
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

<script setup lang="ts">
import { computed, ref, toRef, watch } from 'vue'

/** Interfaces */
interface ISegmentedTab {
  id: string
  label: string
  position: number
}
interface ISegmentedControlsProps {
  tabs: ISegmentedTab[]
  activeTab?: string
}

/** Props */
const props = withDefaults(defineProps<ISegmentedControlsProps>(), {
  activeTab: undefined
})

/** Emits */
const emit = defineEmits<{ (e: 'updateActiveTab', tabId: string): void }>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')
const activeTabPosition = computed(() => tabs.value.find(t => t.id === activeTabName.value)?.position ?? 0)

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
  <div class="tab-segmented-control-container">
    <ul
      class="tab-segmented-control"
      role="tablist"
      :style="`--_segmented-control-count: ${tabs.length}`"
    >
      <!-- Tabs -->
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="`tab-${tabIndex}`"
        class="segmented-control-item"
        :class="[activeTabName === tab.id ? 'active-item' : '']"
      >
        <button
          class="segmented-control-link"
          role="tab"
          :class="[activeTabName === tab.id ? 'active' : '']"
          :aria-selected="activeTabName === tab.id"
          :tabindex="activeTabName === tab.id ? 0 : -1"
          @click="handleSelectedTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </li>

      <!-- Indicator -->
      <li
        aria-hidden="true"
        class="pill-indicator"
        :style="[`--pos: ${activeTabPosition}`]"
      />
    </ul>
  </div>
</template>

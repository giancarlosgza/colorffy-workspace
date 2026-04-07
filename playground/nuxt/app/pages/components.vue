<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/** Data */
const route = useRoute()
const router = useRouter()
const tabs = ref([
  { id: 'index', label: 'Home', route: '/', disabled: true },
  { id: 'about', label: 'About', route: '/about', disabled: true },
  { id: 'components', label: 'Components', route: '/components' }
])
const segmentedTabs = ref([
  { id: 'overview', label: 'Overview', position: 0 },
  { id: 'features', label: 'Features', position: 1, disabled: true },
  { id: 'settings', label: 'Settings', position: 2 }
])

/** Computed */
const currentActiveTab = computed(() => {
  const currentTab = tabs.value.find(tab => tab.route === route.path)
  return currentTab?.id ?? tabs.value[0]?.id
})
const currentActiveSegmentedTab = computed(() => {
  const queryTab = route.query.activeTab?.toString()

  if (queryTab) {
    const foundTab = segmentedTabs.value.find(tab => tab.id === queryTab)
    return foundTab?.id ?? segmentedTabs.value[0]?.id
  }
  return segmentedTabs.value[0]?.id
})

/** Methods */
function handleTabChange(tabId: string) {
  const selectedTab = tabs.value.find(tab => tab.id === tabId)

  if (selectedTab?.route) {
    router.push(selectedTab.route)
  }
}
function handleSegmentedTabChange(tabId: string) {
  const selectedTab = segmentedTabs.value.find(tab => tab.id === tabId)

  if (selectedTab) {
    router.replace({ query: { activeTab: tabId } })
  }
}
</script>

<template>
  <div class="container mt-3">
    <!-- Header -->
    <UiHeaderContent
      title="Components Page"
      subtitle="This is the components page of the Nuxt application"
    />

    <!-- Tabs -->
    <div class="mt-4">
      <UiTabs
        :tabs="tabs"
        :active-tab="currentActiveTab"
        @update-active-tab="handleTabChange"
      />
    </div>

    <!-- Segmented Controls -->
    <div class="mt-4">
      <h3 class="subtitle-1 mb-2">
        Segmented Controls
      </h3>
      <UiSegmentedControls
        :tabs="segmentedTabs"
        :active-tab="currentActiveSegmentedTab"
        @update-active-tab="handleSegmentedTabChange"
      />
    </div>

    <!-- List Group -->
    <div class="mt-4">
      <h3 class="subtitle-1 mb-2">
        List Group
      </h3>
      <UiListGroup
        variant="flush"
        size="md"
        is-interactive
      >
        <UiListItem text="Item 1" />
        <UiListItem text="Item 2" />
        <UiListItem text="Item 3" />
        <UiListItem text="Item 4" />
      </UiListGroup>
    </div>
  </div>
</template>

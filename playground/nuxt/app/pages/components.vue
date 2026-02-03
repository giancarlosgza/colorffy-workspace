<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/** Data */
const route = useRoute()
const router = useRouter()
const tabs = ref([
  { id: 'index', label: 'Home', route: '/' },
  { id: 'about', label: 'About', route: '/about' },
  { id: 'components', label: 'Components', route: '/components' }
])

/** Computed */
const currentActiveTab = computed(() => {
  const currentTab = tabs.value.find(tab => tab.route === route.path)
  return currentTab?.id ?? tabs.value[0]?.id
})

/** Methods */
function handleTabChange(tabId: string) {
  const selectedTab = tabs.value.find(tab => tab.id === tabId)

  if (selectedTab?.route) {
    router.push(selectedTab.route)
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
  </div>
</template>

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
    <div class="mt-4 mb-5">
      <h3 class="subtitle-1 mb-3">
        Communication
      </h3>
      <UiListGroup
        is-interactive
        is-undecorated
      >
        <UiListItem
          text="Festivals"
          title="Food, music, and art events happening around you"
          icon="&#xea16;"
          custom-class="rounded-full"
          custom-icon-wrapper-class="bg-primary-fixed rounded-full"
          custom-icon-class="text-primary-emphasis"
          has-actions
        >
          <template #list-action>
            <UiButtonGroup
              connected
              class="flex-nowrap"
            >
              <UiButton
                id="quick"
                text="Edit"
                variant="filled"
                color="primary"
                size="sm"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe3c9;" />
                </template>
              </UiButton>
              <UiButtonMenu
                id="view-more"
                variant="filled"
                color="primary"
                icon
                size="sm"
                tooltip-text="View More"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe313;" />
                </template>
                <template #menu>
                  <UiButtonMenuItem
                    item-text="Open in new window"
                    icon="&#xe89e;"
                  />
                  <UiButtonMenuDivider />
                  <UiButtonMenuItem
                    item-text="Share"
                    icon="&#xe80d;"
                  />
                  <UiButtonMenuItem
                    item-text="Edit"
                    icon="&#xe3c9;"
                    shortcut="CTRL + E"
                  />
                  <UiButtonMenuDivider />
                  <UiButtonMenuSubmenu
                    item-text="Export to"
                    icon="&#xe2c4;"
                    icon-trailing="&#xf46a;"
                    icon-trailing-class="text-muted"
                    placement="right-start"
                  >
                    <UiButtonMenuItem
                      item-text="PDF"
                      icon-trailing="&#xf41d;"
                      icon-trailing-class="text-muted"
                    />
                    <UiButtonMenuItem
                      item-text="Word"
                      icon-trailing="&#xf41d;"
                      icon-trailing-class="text-muted"
                    />
                    <UiButtonMenuItem
                      item-text="Excel"
                      icon-trailing="&#xf41d;"
                      icon-trailing-class="text-muted"
                    />
                  </UiButtonMenuSubmenu>
                  <UiButtonMenuDivider />
                  <UiButtonMenuItem
                    item-text="Remove"
                    icon="&#xe872;"
                    is-destructive
                  />
                </template>
              </UiButtonMenu>
            </UiButtonGroup>
          </template>
        </UiListItem>
        <UiListItem
          text="Restaurants"
          title="Food, music, and art events happening around you"
          icon="&#xe638;"
          custom-icon-wrapper-class="bg-accent-fixed rounded-md"
          custom-icon-class="text-accent-emphasis"
        />
        <UiListItem
          text="Outdoors"
          title="Food, music, and art events happening around you"
          icon="&#xebf0;"
          custom-icon-wrapper-class="bg-secondary-fixed rounded-md"
          custom-icon-class="text-secondary-emphasis"
          has-actions
        >
          <template #list-action>
            <UiInputCheck
              id="settings"
              label="Settings"
              variant="switch"
              size="lg"
              hide-label
              class="gap-0 mb-0"
            />
          </template>
        </UiListItem>
        <UiListItem
          text="Shopping"
          title="Food, music, and art events happening around you"
          icon="&#xeb15;"
          custom-class="rounded-full"
          custom-icon-wrapper-class="bg-danger-fixed rounded-full"
          custom-icon-class="text-danger-emphasis"
        />
      </UiListGroup>

      <hr>
      <h3 class="subtitle-1 mb-3">
        Settings
      </h3>
      <UiListGroup
        is-interactive
        is-undecorated
      >
        <UiListItem
          text="Controls for this phone"
          title="Set up PIN"
          custom-class="bg-secondary-fixed rounded-full p-2"
          has-actions
        >
          <template #list-action>
            <UiInputCheck
              id="settings"
              label="Settings"
              variant="switch"
              size="lg"
              hide-label
              class="gap-0 mb-0"
            />
          </template>
        </UiListItem>
      </UiListGroup>

      <hr>
      <h3 class="subtitle-1 mb-3">
        System
      </h3>
      <UiCard
        variant="pane"
        size="sm"
        class="rounded-xl"
      >
        <template #body>
          <UiAlert
            message="Theme saved successfully!"
            type="snackbar"
            variant="success"
            rounded
            placement="bottom"
          />

          <UiListGroup
            is-interactive
            variant="flush"
            size="md"
          >
            <UiListItem
              title="Software update"
              text="There is a software update available"
              icon="&#xe8d7;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-success-fixed fs-300"
            />
            <UiListItem
              title="Language & region"
              text="System language, app language, regional preferences, speech"
              icon="&#xe8e2;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="About"
              text="Model, storage, legal, etc"
              icon="&#xe30c;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="Support"
              text="Contact, warranty, legal, etc"
              icon="&#xef73;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="Accessibility"
              text="Voice Control, zoom, text size, etc"
              icon="&#xe84e;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
          </UiListGroup>
        </template>
      </UiCard>
    </div>
  </div>
</template>

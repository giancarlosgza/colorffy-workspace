<script setup lang="ts">
import type { ITabItem } from '@colorffy/ui'

/** Interfaces */
interface IColorModePickerProps {
  showLabels?: boolean
}

/** Props */
const { showLabels = true } = defineProps<IColorModePickerProps>()

/** Data */
// The saved preference only exists on the client, so the picker follows it after mount
const isMounted = ref<boolean>(false)
// Scoped ids keep the tab buttons unique when two pickers share a page
const idPrefix = useId()
const colorModeTabs: ITabItem[] = [
  { id: `${idPrefix}-system`, label: 'System', icon: '&#xe31e;' },
  { id: `${idPrefix}-light`, label: 'Light', icon: '&#xe518;' },
  { id: `${idPrefix}-dark`, label: 'Dark', icon: '&#xe51c;' }
]

/** Composables */
const colorMode = useColorMode()

/** Computed */
const activeTab = computed(() => `${idPrefix}-${isMounted.value ? colorMode.preference : 'system'}`)

/** Methods */
function selectColorMode(tabId: string): void {
  colorMode.preference = tabId.slice(idPrefix.length + 1)
}

/** Lifecycle */
onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <UiTabs
    :tabs="colorModeTabs"
    :active-tab="activeTab"
    pill-tabs
    size="sm"
    rounded
    fit
    :icon-only="!showLabels"
    aria-label="Color mode"
    @update:active-tab="selectColorMode"
  />
</template>

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
// Scoped ids keep the buttons unique when two pickers share a page
const idPrefix = useId()
const colorModeTabs: ITabItem[] = [
  { id: 'system', label: 'System', icon: '&#xe31e;' },
  { id: 'light', label: 'Light', icon: '&#xe518;' },
  { id: 'dark', label: 'Dark', icon: '&#xe51c;' }
]

/** Composables */
const colorMode = useColorMode()

/** Computed */
const activeTab = computed(() => isMounted.value ? colorMode.preference : 'system')

/** Methods */
function selectColorMode(mode: string): void {
  colorMode.preference = mode
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
    mode="radio"
    :id-prefix="idPrefix"
    pill-tabs
    size="sm"
    rounded
    fit
    :icon-only="!showLabels"
    aria-label="Color mode"
    @update:active-tab="selectColorMode"
  />
</template>

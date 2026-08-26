<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { ITabItem, ITabsEmits, ITabsProps } from '@/types/navigation'
import { computed, ref, toRef, watch } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ITabsProps>(), {
  pillTabs: false,
  contrastTabs: false,
  activeTab: undefined,
  fluid: false
})

/** Emits */
const emit = defineEmits<ITabsEmits>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')
const tabButtons = ref<(HTMLButtonElement | null)[]>([])

/** Computed */
const tabsClasses = computed(() => ({
  'tabs-pills': props.pillTabs,
  'tabs-contrast': props.contrastTabs,
  'tabs-fluid': props.fluid
}))

/** Watchers */
watch(() => props.activeTab, (newVal) => {
  activeTabName.value = newVal ?? (tabs.value?.[0]?.id ?? '')
})

/** Methods */
function isActiveTab(tab: ITabItem): boolean {
  return activeTabName.value === tab.id
}
function setTabButton(el: Element | ComponentPublicInstance | null, index: number) {
  tabButtons.value[index] = (el as HTMLButtonElement) ?? null
}
function handleSelectedTab(tab: ITabItem) {
  if (tab.disabled)
    return

  activeTabName.value = tab.id
  emit('updateActiveTab', tab.id)
}
function nextEnabledIndex(from: number, direction: number): number {
  const count = tabs.value.length
  let index = from
  for (let step = 0; step < count; step++) {
    index = (index + direction + count) % count
    if (!tabs.value[index]?.disabled)
      return index
  }
  return from
}
function focusTab(index: number) {
  const tab = tabs.value[index]
  if (!tab || tab.disabled)
    return
  handleSelectedTab(tab)
  tabButtons.value[index]?.focus()
}
function onTabKeydown(event: KeyboardEvent, index: number) {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      focusTab(nextEnabledIndex(index, 1))
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      focusTab(nextEnabledIndex(index, -1))
      break
    case 'Home':
      event.preventDefault()
      focusTab(nextEnabledIndex(tabs.value.length - 1, 1))
      break
    case 'End':
      event.preventDefault()
      focusTab(nextEnabledIndex(0, -1))
      break
  }
}
</script>

<template>
  <ul
    class="tabs-navigation"
    :class="tabsClasses"
    role="tablist"
  >
    <li
      v-for="(tab, tabIndex) in tabs"
      :key="tab.id"
      class="tab-item"
      role="presentation"
    >
      <button
        :id="`tab-${tab.id}`"
        :ref="(el) => setTabButton(el, tabIndex)"
        class="tab-link"
        role="tab"
        :class="{ active: isActiveTab(tab), disabled: tab.disabled }"
        :aria-selected="isActiveTab(tab)"
        :aria-controls="tab.panelId || undefined"
        :aria-disabled="tab.disabled"
        :tabindex="isActiveTab(tab) ? 0 : -1"
        :disabled="tab.disabled"
        @click="handleSelectedTab(tab)"
        @keydown="onTabKeydown($event, tabIndex)"
      >
        <!-- Leading icon -->
        <UiIconMaterial
          v-if="tab.icon"
          :icon-code="tab.icon"
        />

        {{ tab.label }}

        <!-- Badge -->
        <UiBadge
          v-if="tab.badge"
          size="sm"
          :variant="tab.badge.variant"
          :text="tab.badge.text"
          :icon-code="tab.badge.iconCode"
          :icon-class="tab.badge.iconClass"
          :icon-style="tab.badge.iconStyle"
          :pill="tab.badge.pill"
          :custom-class="tab.badge.customClass"
        />
      </button>
    </li>

    <!-- Indicator -->
    <li
      aria-hidden="true"
      role="presentation"
      class="tab-indicator"
    />
  </ul>
</template>

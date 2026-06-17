<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { ISegmentedControlsEmits, ISegmentedControlsProps, ISegmentedTab } from '@/types/navigation'
import { computed, ref, toRef, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<ISegmentedControlsProps>(), {
  activeTab: undefined
})

/** Emits */
const emit = defineEmits<ISegmentedControlsEmits>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')
// Derive the pill position from the rendered order, not a separate `position` field
const activeTabPosition = computed(() => {
  const index = tabs.value.findIndex(t => t.id === activeTabName.value)
  return index >= 0 ? index : 0
})
const tabButtons = ref<(HTMLButtonElement | null)[]>([])

/** Watchers */
watch(() => props.activeTab, (newVal) => {
  activeTabName.value = newVal ?? (tabs.value?.[0]?.id ?? '')
})

/** Methods */
function setTabButton(el: Element | ComponentPublicInstance | null, index: number) {
  tabButtons.value[index] = (el as HTMLButtonElement) ?? null
}
function handleSelectedTab(tab: ISegmentedTab) {
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
  <div class="tab-segmented-control-container">
    <ul
      class="tab-segmented-control"
      role="tablist"
      :style="`--_segmented-control-count: ${tabs.length}`"
    >
      <!-- Tabs -->
      <li
        v-for="(tab, tabIndex) in tabs"
        :key="tab.id"
        class="segmented-control-item"
        :class="[activeTabName === tab.id ? 'active-item' : '']"
        role="presentation"
      >
        <button
          :id="`tab-${tab.id}`"
          :ref="(el) => setTabButton(el, tabIndex)"
          class="segmented-control-link"
          role="tab"
          :class="[activeTabName === tab.id ? 'active' : '', tab.disabled ? 'disabled' : '']"
          :aria-selected="activeTabName === tab.id"
          :aria-controls="tab.panelId || undefined"
          :aria-disabled="tab.disabled"
          :tabindex="activeTabName === tab.id ? 0 : -1"
          :disabled="tab.disabled"
          @click="handleSelectedTab(tab)"
          @keydown="onTabKeydown($event, tabIndex)"
        >
          {{ tab.label }}
        </button>
      </li>

      <!-- Indicator -->
      <li
        aria-hidden="true"
        role="presentation"
        class="pill-indicator"
        :style="[`--pos: ${activeTabPosition}`]"
      />
    </ul>
  </div>
</template>

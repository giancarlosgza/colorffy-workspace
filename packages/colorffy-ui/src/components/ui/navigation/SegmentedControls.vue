<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { ISegmentedControlsEmits, ISegmentedControlsProps, ISegmentedTab } from '@/types/navigation'
import { nextTick, ref, toRef, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<ISegmentedControlsProps>(), {
  activeTab: undefined
})

/** Emits */
const emit = defineEmits<ISegmentedControlsEmits>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')
const tabButtons = ref<(HTMLButtonElement | null)[]>([])
const pillIndicator = ref<HTMLElement | null>(null)

/** Watchers */
watch(() => props.activeTab, (newVal) => {
  animatePillMove()
  activeTabName.value = newVal ?? (tabs.value?.[0]?.id ?? '')
})

/** Methods */
function isActiveTab(tab: ISegmentedTab): boolean {
  return activeTabName.value === tab.id
}
// FLIP slide for the pill: CSS transitions on anchored insets freeze re-resolution in Chromium
function animatePillMove() {
  const pill = pillIndicator.value
  if (!pill || typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    return

  const prev = pill.getBoundingClientRect()
  nextTick(() => {
    const next = pill.getBoundingClientRect()
    const dx = prev.left - next.left
    if (!dx)
      return

    pill.animate(
      [{ translate: `${dx}px 0` }, { translate: '0 0' }],
      { duration: 300, easing: 'cubic-bezier(0.2, 0, 0, 1)' }
    )
  })
}
function setTabButton(el: Element | ComponentPublicInstance | null, index: number) {
  tabButtons.value[index] = (el as HTMLButtonElement) ?? null
}
function handleSelectedTab(tab: ISegmentedTab) {
  if (tab.disabled)
    return

  animatePillMove()
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
        :class="{ 'active-item': isActiveTab(tab) }"
        role="presentation"
      >
        <button
          :id="`tab-${tab.id}`"
          :ref="(el) => setTabButton(el, tabIndex)"
          class="segmented-control-link"
          role="tab"
          :class="{ 'active': isActiveTab(tab), 'disabled': tab.disabled }"
          :aria-selected="isActiveTab(tab)"
          :aria-controls="tab.panelId || undefined"
          :aria-disabled="tab.disabled"
          :tabindex="isActiveTab(tab) ? 0 : -1"
          :disabled="tab.disabled"
          @click="handleSelectedTab(tab)"
          @keydown="onTabKeydown($event, tabIndex)"
        >
          {{ tab.label }}
        </button>
      </li>

      <!-- Indicator -->
      <li
        ref="pillIndicator"
        aria-hidden="true"
        role="presentation"
        class="pill-indicator"
      />
    </ul>
  </div>
</template>

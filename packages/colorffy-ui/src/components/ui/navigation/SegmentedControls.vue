<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { ISegmentedControlsEmits, ISegmentedControlsProps, ISegmentedTab } from '@/types/navigation'
import { computed, ref, toRef, watch } from 'vue'
import UiBadge from '../badge/Badge.vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ISegmentedControlsProps>(), {
  activeTab: undefined,
  ariaLabel: undefined,
  idPrefix: 'tab',
  mode: 'tabs'
})

/** Emits */
const emit = defineEmits<ISegmentedControlsEmits>()

/** Data */
const tabs = toRef(props, 'tabs')
const activeTabName = ref<string>(props.activeTab ?? tabs.value?.[0]?.id ?? '')
const tabButtons = ref<(HTMLButtonElement | null)[]>([])

/** Computed */
const isRadio = computed(() => props.mode === 'radio')
// With no enabled active tab, the first enabled one keeps the group reachable by Tab
const focusableId = computed(() => {
  const active = tabs.value.find(tab => tab.id === activeTabName.value && !tab.disabled)
  return active?.id ?? tabs.value.find(tab => !tab.disabled)?.id ?? ''
})

/** Methods */
function isActiveTab(tab: ISegmentedTab): boolean {
  return activeTabName.value === tab.id
}
function setTabButton(el: Element | ComponentPublicInstance | null, index: number) {
  tabButtons.value[index] = (el as HTMLButtonElement) ?? null
}
function handleSelectedTab(tab: ISegmentedTab) {
  if (tab.disabled)
    return

  activeTabName.value = tab.id
  emit('update:activeTab', tab.id)
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

/** Watchers */
watch(() => props.activeTab, (newVal) => {
  activeTabName.value = newVal ?? (tabs.value?.[0]?.id ?? '')
})
</script>

<template>
  <div class="tab-segmented-control-container">
    <ul
      class="tab-segmented-control"
      :role="isRadio ? 'radiogroup' : 'tablist'"
      :aria-label="ariaLabel"
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
          :id="`${idPrefix}-${tab.id}`"
          :ref="(el) => setTabButton(el, tabIndex)"
          class="segmented-control-link"
          :role="isRadio ? 'radio' : 'tab'"
          :class="{ active: isActiveTab(tab), disabled: tab.disabled }"
          :aria-selected="isRadio ? undefined : isActiveTab(tab)"
          :aria-checked="isRadio ? isActiveTab(tab) : undefined"
          :aria-controls="isRadio ? undefined : tab.panelId || undefined"
          :aria-disabled="tab.disabled"
          :tabindex="tab.id === focusableId ? 0 : -1"
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
        class="pill-indicator"
      />
    </ul>
  </div>
</template>

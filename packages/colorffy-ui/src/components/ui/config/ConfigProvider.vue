<script setup lang="ts">
import type { IColorffyConfig, IConfigProviderProps } from '@/types/config'
import { provide, reactive } from 'vue'
import { colorffyConfigKey, mergeLabels, useColorffyConfig } from '@/composables/useColorffyConfig'

/** Props */
const props = withDefaults(defineProps<IConfigProviderProps>(), {
  locale: null,
  labels: null
})

/** Slots */
defineSlots<{
  default?: () => any
}>()

/** Composables */
const parent = useColorffyConfig()
// Getters read through, so changes to the surrounding config still reach this subtree
const config = reactive({
  get locale() {
    return props.locale ?? parent.locale
  },
  get labels() {
    return mergeLabels(parent.labels, props.labels)
  }
}) as IColorffyConfig
provide(colorffyConfigKey, config)
</script>

<template>
  <slot />
</template>

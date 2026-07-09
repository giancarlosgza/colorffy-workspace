<script setup lang="ts">
import type { IconSize, IIconSvgProps } from '@/types/icon'
import { computed, useId } from 'vue'

/** Props */
const props = withDefaults(defineProps<IIconSvgProps>(), {
  content: null,
  size: 'md',
  color: null,
  decorative: true,
  ariaLabel: null
})

/** Data */
const sizeMap: Record<IconSize, number> = {
  xs: 20,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 48
}

/** Composable */
const uid = useId()

/** Computed */
const resolvedSize = computed(() => {
  if (typeof props.size === 'number')
    return props.size

  if (!props.size)
    return sizeMap.md

  return sizeMap[props.size] ?? sizeMap.md
})
const ariaHidden = computed(() => (props.decorative ? true : undefined))
const ariaRole = computed(() => (props.decorative ? undefined : 'img'))
const ariaLabel = computed(() => (props.decorative ? undefined : props.ariaLabel ?? undefined))
const wrapperProps = computed(() => ({
  'class': ['icon-svg', { 'icon-svg-current': !!props.color }],
  'style': { '--_icon-svg-size': `${resolvedSize.value}px`, 'color': props.color ?? undefined },
  'aria-hidden': ariaHidden.value,
  'role': ariaRole.value,
  'aria-label': ariaLabel.value
}))
const renderedContent = computed(() => namespaceSvgIds(props.content ?? '', uid))

/** Methods */
function namespaceSvgIds(markup: string, seed: string): string {
  if (!markup || !seed)
    return markup

  const ids = new Set<string>()
  const idPattern = /\bid="([^"]+)"/g
  let match = idPattern.exec(markup)
  while (match !== null) {
    ids.add(match[1])
    match = idPattern.exec(markup)
  }

  if (!ids.size)
    return markup

  const prefix = `icon-${seed.replace(/[^\w-]/g, '')}`
  let out = markup
  for (const id of ids) {
    const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const namespaced = `${prefix}-${id}`
    out = out
      .replace(new RegExp(`\\bid="${escaped}"`, 'g'), `id="${namespaced}"`)
      .replace(new RegExp(`url\\(#${escaped}\\)`, 'g'), `url(#${namespaced})`)
      .replace(new RegExp(`((?:xlink:)?href)="#${escaped}"`, 'g'), `$1="#${namespaced}"`)
  }
  return out
}
</script>

<template>
  <span
    v-if="content"
    v-bind="wrapperProps"
    v-html="renderedContent"
  />
  <span
    v-else
    v-bind="wrapperProps"
  >
    <slot />
  </span>
</template>

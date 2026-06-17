<script setup lang="ts">
import type { IBreadcrumbEmits, IBreadcrumbItem, IBreadcrumbProps } from '@/types/breadcrumb'
import { computed, h } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IBreadcrumbProps>(), {
  as: 'a',
  separator: '/',
  separatorIcon: null,
  ariaLabel: 'Breadcrumb',
  structuredData: true,
  baseUrl: '',
  maxItems: 0,
  customClass: null
})

/** Emits */
const emit = defineEmits<IBreadcrumbEmits>()

/** Computed */
// Whether the trail is long enough to collapse the middle into an ellipsis
const isCollapsed = computed(() => props.maxItems > 0 && props.items.length > props.maxItems)

// Entries actually rendered. Ellipsis entries carry no item; real entries keep
// their original index so current/last detection stays correct after collapsing.
const visibleEntries = computed(() => {
  if (!isCollapsed.value)
    return props.items.map((item, index) => ({ item, index, ellipsis: false }))

  const tailCount = Math.max(1, props.maxItems - 1)
  const start = props.items.length - tailCount
  const tail = props.items.slice(start).map((item, i) => ({ item, index: start + i, ellipsis: false }))
  return [
    { item: props.items[0], index: 0, ellipsis: false },
    { item: undefined, index: -1, ellipsis: true },
    ...tail
  ]
})

// schema.org BreadcrumbList — always built from the full item list, not the
// collapsed view. `<` is escaped so a label can't break out of the script tag.
const jsonLd = computed(() => {
  const itemListElement = props.items.map((item, i) => {
    const url = toAbsoluteUrl(item.to ?? item.href)
    return {
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.label,
      ...(url ? { item: url } : {})
    }
  })
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement
  }
  return JSON.stringify(data).replace(/</g, '\\u003c')
})

/** Methods */
function isCurrent(item: IBreadcrumbItem, index: number): boolean {
  return item.current ?? index === props.items.length - 1
}
function linkTarget(item: IBreadcrumbItem): string | object {
  return item.to || item.href || ''
}
function isExternal(item: IBreadcrumbItem): boolean {
  const target = linkTarget(item)
  return typeof target === 'string' && /^(?:https?:|mailto:|tel:|\/\/)/.test(target)
}
function useAnchor(item: IBreadcrumbItem): boolean {
  return typeof linkTarget(item) === 'string' && (props.as === 'a' || isExternal(item))
}
function resolveTag(item: IBreadcrumbItem): string | object {
  return useAnchor(item) ? 'a' : props.as
}
function linkProps(item: IBreadcrumbItem): Record<string, unknown> {
  const target = linkTarget(item)
  if (useAnchor(item)) {
    return {
      href: target || undefined,
      ...(isExternal(item) && { target: '_blank', rel: 'noopener noreferrer' })
    }
  }
  return { to: target }
}
function toAbsoluteUrl(target: string | object | undefined): string {
  // Route objects can't be serialized to a URL reliably; emit name-only items
  if (!target || typeof target !== 'string')
    return ''
  if (/^https?:\/\//.test(target))
    return target
  if (!props.baseUrl)
    return target
  return `${props.baseUrl.replace(/\/+$/, '')}/${target.replace(/^\/+/, '')}`
}

// Render the JSON-LD <script> via a render function. Templates can't hold a
// <script>, and v-html on a dynamic component is disallowed; this is the clean,
// SSR-safe way to emit structured data.
function StructuredData() {
  if (!props.structuredData)
    return null
  return h('script', { type: 'application/ld+json', innerHTML: jsonLd.value })
}
</script>

<template>
  <nav
    :aria-label="ariaLabel"
    class="breadcrumb-nav"
    :class="customClass"
  >
    <ol class="breadcrumb">
      <li
        v-for="(entry, vi) in visibleEntries"
        :key="entry.ellipsis ? 'ellipsis' : entry.index"
        class="breadcrumb-item"
        :class="{ active: !entry.ellipsis && isCurrent(entry.item!, entry.index) }"
      >
        <!-- Collapsed middle -->
        <span v-if="entry.ellipsis" class="breadcrumb-ellipsis" aria-hidden="true">
          &hellip;
        </span>

        <!-- Current page (non-link) -->
        <span
          v-else-if="isCurrent(entry.item!, entry.index)"
          class="breadcrumb-current"
          aria-current="page"
        >
          <slot name="item" :item="entry.item" :index="entry.index" :is-current="true">
            <UiIconMaterial v-if="entry.item!.icon" :icon-code="entry.item!.icon" class="breadcrumb-icon" />
            {{ entry.item!.label }}
          </slot>
        </span>

        <!-- Link -->
        <component
          :is="resolveTag(entry.item!)"
          v-else
          class="breadcrumb-link"
          v-bind="linkProps(entry.item!)"
          @click="emit('itemClick', entry.item!, entry.index)"
        >
          <slot name="item" :item="entry.item" :index="entry.index" :is-current="false">
            <UiIconMaterial v-if="entry.item!.icon" :icon-code="entry.item!.icon" class="breadcrumb-icon" />
            {{ entry.item!.label }}
          </slot>
        </component>

        <!-- Separator (skipped after the last visible entry) -->
        <span
          v-if="vi < visibleEntries.length - 1"
          class="breadcrumb-separator"
          aria-hidden="true"
        >
          <slot name="separator">
            <UiIconMaterial v-if="separatorIcon" :icon-code="separatorIcon" />
            <template v-else>{{ separator }}</template>
          </slot>
        </span>
      </li>
    </ol>

    <!-- SEO: schema.org BreadcrumbList as inline JSON-LD -->
    <StructuredData />
  </nav>
</template>

import type { ComputedRef, InjectionKey, ShallowRef } from 'vue'
import { computed, getCurrentInstance, inject, onMounted, provide, shallowRef } from 'vue'

type FloatingContainer = string | HTMLElement

const floatingContainerKey: InjectionKey<ShallowRef<FloatingContainer>> = Symbol('floating-container')

/**
 * Where a FloatingVue popper is appended. FloatingVue uses `<body>`, but a
 * modal `<dialog>` (`showModal()`) or an open `[popover]` sits in the top
 * layer above it, and a modal dialog makes the rest of the page inert, so a
 * menu or tooltip opened from inside one would be hidden and unclickable.
 * Inside either, the popper goes into that element instead. Menus and
 * tooltips opened from inside another popper share its container, since their
 * trigger only exists once the parent is open.
 *
 * Returns props to bind on `VDropdown` / `VTooltip`. They're typed loosely
 * because FloatingVue's generated types declare `container` as a `Date`.
 */
export function useFloatingContainer(): ComputedRef<Record<string, unknown>> {
  const container = inject(floatingContainerKey, null) ?? detectContainer()
  provide(floatingContainerKey, container)
  return computed(() => typeof container.value === 'string'
    ? { container: container.value }
    : { container: container.value, strategy: 'fixed' })
}

function detectContainer(): ShallowRef<FloatingContainer> {
  const container = shallowRef<FloatingContainer>('body')
  const instance = getCurrentInstance()
  onMounted(() => {
    const node = instance?.proxy?.$el as Node | null | undefined
    const element = node instanceof Element ? node : node?.parentElement
    const layer = element?.closest<HTMLElement>('dialog, [popover]')
    if (layer)
      container.value = layer
  })

  return container
}

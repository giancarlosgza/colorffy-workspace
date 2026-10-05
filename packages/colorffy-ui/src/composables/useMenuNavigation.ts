import type { Ref } from 'vue'

const itemSelector = '[role^="menuitem"]:not(:disabled)'
const iconGlyphs = /\p{Co}/gu

/**
 * Keyboard movement between the items of a `role="menu"` list, as the WAI-ARIA
 * menu pattern describes: ↑ and ↓ wrap around, Home and End jump to the ends,
 * and a letter moves to the next item starting with it. Nested submenus are
 * separate lists, since their poppers render outside the parent menu.
 */
export function useMenuNavigation(menu: Ref<HTMLElement | null>) {
  function items(): HTMLElement[] {
    return [...(menu.value?.querySelectorAll<HTMLElement>(itemSelector) ?? [])]
  }

  function label(item: HTMLElement): string {
    return (item.textContent ?? '').replace(iconGlyphs, '').trim().toLocaleLowerCase()
  }

  function focusItem(position: 'first' | 'last'): void {
    const list = items()
    ;(position === 'first' ? list[0] : list[list.length - 1])?.focus()
  }

  function onKeydown(event: KeyboardEvent): void {
    const list = items()
    if (!list.length || event.ctrlKey || event.metaKey || event.altKey)
      return

    const index = list.indexOf(document.activeElement as HTMLElement)
    const last = list.length - 1
    const moves: Record<string, number> = {
      ArrowDown: index >= last ? 0 : index + 1,
      ArrowUp: index <= 0 ? last : index - 1,
      Home: 0,
      End: last
    }
    let next = event.key in moves ? list[moves[event.key]!] : undefined
    if (!next && event.key.length === 1 && event.key.trim()) {
      const letter = event.key.toLocaleLowerCase()
      const rest = [...list.slice(index + 1), ...list.slice(0, index + 1)]
      next = rest.find(item => label(item).startsWith(letter))
    }

    if (!next)
      return
    event.preventDefault()
    next.focus()
  }

  return { focusItem, onKeydown }
}

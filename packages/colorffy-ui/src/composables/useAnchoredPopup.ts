import type { Ref } from 'vue'
import { nextTick, onBeforeUnmount, ref, useId } from 'vue'

// Space kept between the popup and the viewport edge in the fallback
const VIEWPORT_GAP = 8

// The flip fallback is the newest piece of anchor positioning the popup relies on
function supportsAnchoring(): boolean {
  return typeof CSS !== 'undefined' && CSS.supports('position-try-fallbacks', 'flip-block')
}

/**
 * Opens a popup next to an anchor element. The popup is a `popover="manual"`
 * element rendered while `isOpen` is true, so it sits in the top layer above
 * dialogs and outside any clipping container. Browsers with CSS anchor
 * positioning place it from the stylesheet (`isAnchored`); the rest get fixed
 * coordinates from `place()`, kept in sync on scroll and resize.
 */
export function useAnchoredPopup(
  anchor: Ref<HTMLElement | null>,
  popup: Ref<HTMLElement | null>,
  options: { shouldPlace?: () => boolean } = {}
) {
  const isOpen = ref(false)
  const isAnchored = ref(true)
  const anchorName = `--cffy-anchor-${useId()}`

  let frame = 0
  let observer: ResizeObserver | null = null

  function place(): void {
    const field = anchor.value
    const list = popup.value
    if (!field || !list)
      return

    const style = list.style
    // A popup the stylesheet places itself, such as a bottom sheet, drops the script's coordinates
    if (options.shouldPlace && !options.shouldPlace()) {
      for (const property of ['top', 'bottom', 'left', 'right', 'minWidth', 'maxHeight'] as const)
        style[property] = ''
      return
    }

    const rect = field.getBoundingClientRect()
    style.minWidth = `${rect.width}px`
    style.maxHeight = ''

    const computed = getComputedStyle(list)
    const offset = Number.parseFloat(computed.marginBlockStart) || 0
    const maxHeight = Number.parseFloat(computed.maxHeight) || Infinity
    const viewWidth = document.documentElement.clientWidth
    const viewHeight = document.documentElement.clientHeight
    const below = viewHeight - rect.bottom - offset - VIEWPORT_GAP
    const above = rect.top - offset - VIEWPORT_GAP
    const openAbove = below < Math.min(list.scrollHeight, maxHeight) && above > below

    style.top = openAbove ? 'auto' : `${rect.bottom}px`
    style.bottom = openAbove ? `${viewHeight - rect.top}px` : 'auto'
    style.maxHeight = `${Math.max(Math.min(maxHeight, openAbove ? above : below), 0)}px`

    // Align to the anchor's start edge, kept inside the viewport
    const width = list.offsetWidth
    const limit = Math.max(viewWidth - width - VIEWPORT_GAP, VIEWPORT_GAP)
    if (getComputedStyle(field).direction === 'rtl') {
      style.left = 'auto'
      style.right = `${Math.min(Math.max(viewWidth - rect.right, VIEWPORT_GAP), limit)}px`
    } else {
      style.right = 'auto'
      style.left = `${Math.min(Math.max(rect.left, VIEWPORT_GAP), limit)}px`
    }
  }

  function schedule(event?: Event): void {
    // Scrolling the list itself doesn't move it
    if (event?.target === popup.value)
      return
    cancelAnimationFrame(frame)
    frame = requestAnimationFrame(place)
  }

  function stopTracking(): void {
    cancelAnimationFrame(frame)
    window.removeEventListener('scroll', schedule, true)
    window.removeEventListener('resize', schedule)
    observer?.disconnect()
    observer = null
  }

  async function open(): Promise<void> {
    if (isOpen.value)
      return
    isAnchored.value = supportsAnchoring()
    isOpen.value = true
    await nextTick()

    const list = popup.value
    if (!isOpen.value || !list)
      return
    if (typeof list.showPopover === 'function' && !list.matches(':popover-open'))
      list.showPopover()

    if (!isAnchored.value && anchor.value) {
      place()
      window.addEventListener('scroll', schedule, { capture: true, passive: true })
      window.addEventListener('resize', schedule, { passive: true })
      observer = new ResizeObserver(() => schedule())
      observer.observe(anchor.value)
    }
  }

  function close(): void {
    if (!isOpen.value)
      return
    stopTracking()
    isOpen.value = false
  }

  onBeforeUnmount(stopTracking)

  return { isOpen, isAnchored, anchorName, open, close }
}

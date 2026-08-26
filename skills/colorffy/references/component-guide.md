# Component Selection Guide

Guide for choosing the right Colorffy UI component for common UI patterns.

## Layout & Structure

**Page headers**
- Use `UiHeaderContent` for consistent page titles with optional subtitles
- Provides semantic structure for page headings

**Content sections**
- Use `UiPaneContent` for basic content wrappers
- Use `UiCard` when you need header/body/footer structure
- Cards support variants: `pane` (default), `outlined`, `elevated`

**Visual separation**
- Use `UiDivider` to separate items in a list, sections of a form, or inline toolbar actions (`vertical`)
- Use `text` for a labelled divider (e.g. "OR"); use `inset` to align past a leading icon

**Modals & Dialogs**
- Use `UiModal` for custom modal content with full control
- Use `UiConfirmModal` for quick confirmation dialogs
- Modal sizes: `sm`, `md`, `lg`, `xl`, `full`

## Navigation

**Top navigation (horizontal)**
- Use `UiTabs` for section/page navigation
- Use navbar with `UiNavbarLink` for main site navigation
- Tabs support active state and click events
- Each tab item can carry a leading `icon` and/or trailing `badge`; set `fluid` on `UiTabs` to stretch tabs to fill the available width equally

**Bottom navigation (mobile)**
- Use `UiNavigationBar` for mobile app-style bottom nav
- Best for 3-5 primary destinations
- Shows icons + labels

**Sidebar navigation**
- Use `UiSidebar` (+ `UiSidebarHeader` / `UiSidebarBody` / `UiSidebarFooter`, `UiSidebarGroup`, `UiSidebarLink`, `UiSidebarText`, `UiSidebarDropdown`) for the navigation drawer
- Two independent states: `rail` (compact, desktop) and `open` (responsive mobile, `v-model:open`)
- Supports icons, active states, collapsible groups, and nested `child` links
- Good for dashboards and admin panels

**Segmented controls**
- Use `UiSegmentedControls` for mutually exclusive options
- Best for 2-4 view switchers (e.g., Grid/List)
- More compact than tabs

**Active indicators (`UiTabs`, `UiSegmentedControls`, `UiNavigationBar`)**

All three place *and* animate their indicator with pure CSS anchor positioning — no JavaScript. Every item gets its own `anchor-name` (`--tabs-item-1`, `--tabs-item-2`, …) from an `@for` loop, a `:has()` ladder points a `--*-anchor` custom property at the active item's name, and the indicator reads `anchor(var(--*-anchor) <side>)`. An `@supports not (anchor-name: --foo)` fallback styles the active item directly. One rule when touching it:

- **The transition only fires if the referenced anchor name changes.** Transitions run on computed-value changes, and `left: anchor(left)` computes the same before and after — so moving `anchor-name` between elements while the indicator keeps a fixed `position-anchor` makes it *snap*, with no transition generated at all. Switching which name the indicator references (`anchor(var(--x) left)`) does change the computed value, so it interpolates. That is why the anchor names are per-item and the active one is selected through a variable.
- Keep the `transition` inside `@media (prefers-reduced-motion: no-preference)`, and note the `@for` bound caps how many items animate (16 for tabs/segmented, 8 for the navigation bar).

**Dropdown menus**
- Use `UiButtonMenu` with `UiButtonMenuItem` for action menus
- Use `UiPopoverMenu` for context menus
- Support dividers and non-clickable text

**Multi-step flows**
- Use `UiStepper` for progress through a sequence of steps; `vertical` for narrow layouts; `linear` blocks skipping ahead
- Step `icon` replaces the number; completed steps show a check mark; disabled steps are skipped by keyboard navigation

## Forms & Inputs

**Text input**
- Use `UiInputText` for single-line text
- Types: `text`, `email`, `password`, `url`, `tel`
- Supports label, placeholder, error messages, hints

**Multi-line text**
- Use `UiInputTextarea` for longer text content
- Configure `rows` for initial height
- Supports `maxlength` for character limits

**Dropdowns**
- Use `UiInputSelect` for single-choice from list
- Provide `options` array with `label` and `value`
- Supports placeholder and required state

**Checkboxes**
- Use `UiInputCheck` for boolean choices
- Use multiple checkboxes for multi-select
- Supports custom colors

**Radio buttons**
- Use `UiInputRadio` for exclusive choices
- Group by `name` prop
- Better than select for 2-5 options

**Sliders**
- Use `UiInputRange` for numeric ranges
- Configure `min`, `max`, `step`
- Good for volume, opacity, filters

**File uploads**
- Use `UiInputFile` for file selection
- Supports `multiple` for multi-file upload
- Use `accept` to limit file types

**Color picker**
- Use `UiInputColorPicker` for color selection
- Returns hex color value
- Works with v-model

**Phone numbers**
- Use `UiInputPhoneNumber` for formatted phone input
- Includes country code selector
- Set `defaultCountry` for region

**PIN/verification codes**
- Use `UiInputOtp` for segmented OTP/PIN entry; `length` sets box count (default 6)
- Auto-advances focus, supports paste and WebOTP autofill; listen for `complete`

**Chips as filters or tag inputs**
- Use `UiChipGroup` (+ `UiChip`) when the selection is interactive — filter pills, multi-select tag pickers, removable input tags
- Single mode models `string | null` (clicking the selected chip deselects it); `multiple` models `string[]`
- Use `closable` chips for removable tags; `UiChipGroup` emits `remove(optionId)`
- Prefer `UiBadge` instead when the label is just a static status/count, not something the user clicks

## Buttons & Actions

**Primary actions**
- Use `UiButton` with `variant="filled"` for main CTAs
- High visual prominence
- Use sparingly (1-2 per section)

**Buttons as links**
- Pass `to` or `href` to render button styling on a link (`<a>` or the tag/component given via `as`) instead of a `<button>`
- Without `to`/`href`, `UiButton` always renders a native `<button>` — `as` alone has no effect
- Good for external/docs links or router navigation that should look like a button

**Secondary actions**
- Use `variant="outline"` for secondary actions
- Use `variant="tonal"` for subtle actions
- Use `variant="text"` for tertiary/low-priority actions

**Button groups**
- Use `UiButtonToggleGroup` for mutually exclusive options
- Similar to radio buttons but button-styled
- Supports single or multiple selection

**Action menus**
- Use `UiButtonMenu` when multiple actions available
- Groups related actions under one button
- Add `UiButtonMenuDivider` to separate sections

**Buttons with tooltips**
- Use `UiButtonTooltip` for actions needing explanation
- Combines button functionality with helper text
- Set `tooltipPlacement` for positioning
- Use `UiTooltip` to add a tooltip to any non-button/link trigger (avatar, icon, custom control); use `UiButtonTooltip`/`UiLinkTooltip` when the trigger is a plain button or link

## Feedback & Status

**Notifications**
- Use `UiAlert` with `type="banner"` for important page-level messages
- Use `type="snackbar"` for temporary notifications (bottom-right)
- Use `type="tonal"` for inline alerts within content
- Use `UiAlertToast` for simple toast notifications
- Set `dismissible` for a close button (emits `dismiss`); set `duration` (ms) to auto-hide banner/tonal alerts (ignored for `type="snackbar"` — use `UiAlertToast`/`useToast` there instead)

**Alert variants:**
- `success` - Positive feedback (green)
- `warning` - Caution/attention needed (yellow)
- `danger` - Errors/critical issues (red)
- `info` - Informational (blue)

**Loading states**
- Use `UiLoading` for simple spinner
- Use `UiExpressiveLoading` for branded loader animation
- Use `UiShapeLoading` for geometric loader
- Use skeleton components (`UiBaseSkeleton`, `UiGridSkeleton`, `UiTableSkeleton`) while content loads

**Empty states**
- Use `UiEmpty` when no data to display
- Provide helpful `title`, `subtitle`, and (with `use-custom-icon`) `icon-code`
- Add a call-to-action via the `#action` slot — empty states almost always need one (e.g. "Clear filters" or "New item")

**Badges & counts**
- Use `UiBadge` for labels, tags, status indicators
- Use `pill` for numeric/initial content (e.g. `text="9"`); keep full-word labels non-pill
- Use `dot` for a label-less indicator (unread, presence, activity)
- Use `max` to cap a numeric `text` (e.g. `text="120"` with `:max="99"` renders "99+")
- Use `attached` to overlay a badge on a `.position-relative` parent's corner (avatars, icon buttons, tabs)
- Variants: intent colors (`primary`/`success`/`danger`/...), `outline`, `gradient`, `tonal tonal-<intent>`
- Use `UiBadgeGroup` to contain multiple badges
- Badges are static (not clickable) — for interactive filters/tags/inputs use `UiChip` / `UiChipGroup` instead

## Data Display

**Tables**
- Use `UiDatatable` for sortable data tables with a column manager
- Configure `columns` with `key`, `label`, and optional `sortable` / `hidden` / `align`
- Built-in loading skeleton (`is-loading`) and empty state; custom cells via `#cell-<key>`
- Set `selectable` + `v-model:selected` for a row-selection checkbox column (identity from `rowKey`, falling back to `id`, then index)
- Set `sticky-header` to keep the header visible while the body scrolls (wraps in `.table-responsive-sticky`)
- Pagination and filtering are not built in — handle them in the parent and pass the current `items`
- Best for structured data with many rows

**Lists**
- Use `UiListGroup` with `UiListItem` for simple lists
- Items support icons, active state, clickable prop
- Pass `to` or `href` to render a row as a navigable link (`as` picks the tag/component, e.g. `NuxtLink`); link mode implies the hover/active/arrow styling automatically
- Lighter weight than tables
- Good for navigation lists, option lists

**Timelines**
- Use `UiTimeline` for chronological event feeds (activity logs, status history, changelogs)
- Markers: image → icon → dot fallback; `variant` colors the marker
- Use `align="alternate"` for a centered, zig-zagging layout
- Custom per-item content via `#item-<id>` or the scoped `#item` slot

**Cards**
- Use `UiCard` for content grouping
- Slots: `media` (cover image), `header`, `body`, `footer`
- Variants: `pane`, `outline`, `elevated`
- Set `image-url` (+ optional `image-alt`) for a full-bleed cover image at the top; use `#media` instead for custom markup
- Set `to` or `href` to render the whole card as a link (root switches from `div` to `as`/`a`); external URLs auto-get `target="_blank" rel="noopener noreferrer"`
- Good for dashboards, product cards, content blocks

**Collapsible sections**
- Use `UiAccordion` for single collapsible section
- Use `UiAccordionGroup` when only one should be open
- Set `icon` for a leading Material Symbols icon before the title
- Set `size="sm"` for compact lists; `variant="border-block"` + `shape="square"` for flush FAQ-style lists; `variant="borderless"` for a flat look
- Good for FAQs, settings sections
- Reduces visual clutter

## Media

**Avatars**
- Use `UiAvatar` for user profile images
- Falls back to `initials` when no `src`/image
- Sizes: `sm`, `md`, `lg`, `navbar`, `menu`
- Optional decorative `maskShape` (e.g. `gem`, `cookie-9`)
- Set `status` (`online` | `busy` | `away` | `offline`) for a presence dot on the bottom-end corner; works with masked avatars and is passed through by `UiAvatarGroup`'s `avatars` entries
- Use `UiAvatarGroup` to stack multiple avatars with an overlapping ring; pass `avatars` (supports `max` overflow) or compose `UiAvatar` via the default slot

**Icons**
- Use `UiIconMaterial` for Material Symbols (icon font glyph via `iconCode`)
- Use `UiIconShapes` for decorative geometric shapes
- Use `UiIconSvg` for any inline SVG (logos, brand marks) — paste into the slot, or pass `content` for data-driven icons from a local registry
- All support `size` and `color` props (`color` recolors monochrome SVGs)

## Decision Trees

### "I need a way for users to choose one option"
- 2-5 options, visible → `UiInputRadio`
- 6+ options → `UiInputSelect`
- Button-style toggle → `UiButtonToggleGroup`
- Visual options (tabs) → `UiTabs` or `UiSegmentedControls`
- Filter-style pills (single or multi-select) → `UiChipGroup`

### "I need to show feedback to users"
- Page-level important → `UiAlert` type="banner"
- Temporary notification → `UiAlertToast` or `UiAlert` type="snackbar"
- Inline within content → `UiAlert` type="tonal"
- Loading/processing → `UiLoading` or skeleton components

### "I need navigation"
- Top horizontal → `UiTabs` or navbar with `UiNavbarLink`
- Mobile bottom → `UiNavigationBar`
- Sidebar / drawer → `UiSidebar` + `UiSidebarLink`
- Breadcrumb trail → `UiBreadcrumb`
- Dropdown menu → `UiButtonMenu`
- Multi-step flow / wizard progress → `UiStepper`

### "I need to display data"
- Structured data, many rows → `UiDatatable`
- Simple lists → `UiListGroup` + `UiListItem`
- Content blocks → `UiCard`
- Collapsible sections → `UiAccordion`

## Component Combinations

**Form with validation:**
- Multiple `UiInputText`, `UiInputSelect`, etc.
- Each with `:error` prop for validation messages
- Submit with `UiButton` variant="filled"

**Modal with form:**
- `UiModal` wrapper
- Form inputs in `#body` slot
- Cancel and submit buttons in `#footer` slot

**Card with actions:**
- `UiCard` wrapper
- Content in `#body` slot
- `UiButton` or `UiButtonMenu` in `#footer` slot

**List with badges:**
- `UiListGroup` container
- Each `UiListItem` includes `UiBadge` for status

**Dashboard layout:**
- Grid container with `row` and responsive `col-*`
- Multiple `UiCard` components for widgets
- `UiButton`, `UiAlert`, `UiDatatable` inside cards

## Migration Patterns

**From plain HTML:**
- `<input>` → `UiInputText`
- `<button>` → `UiButton`
- `<select>` → `UiInputSelect`
- `<div class="card">` → `UiCard`

**From Bootstrap:**
- `.alert` → `UiAlert`
- `.btn` → `UiButton`
- `.card` → `UiCard`
- `.modal` → `UiModal`
- `.nav-tabs` → `UiTabs`

**From Vuetify:**
- `v-btn` → `UiButton`
- `v-card` → `UiCard`
- `v-text-field` → `UiInputText`
- `v-select` → `UiInputSelect`
- `v-dialog` → `UiModal`

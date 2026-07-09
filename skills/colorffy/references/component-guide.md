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

**Dropdown menus**
- Use `UiButtonMenu` with `UiButtonMenuItem` for action menus
- Use `UiPopoverMenu` for context menus
- Support dividers and non-clickable text

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

## Feedback & Status

**Notifications**
- Use `UiAlert` with `type="banner"` for important page-level messages
- Use `type="snackbar"` for temporary notifications (bottom-right)
- Use `type="tonal"` for inline alerts within content
- Use `UiAlertToast` for simple toast notifications

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
- Provide helpful title, message, and icon
- Optionally include action button

**Badges & counts**
- Use `UiBadge` for labels, tags, status indicators
- Use with `count` prop for numeric badges
- Variants: `filled`, `outline`, `tonal`
- Use `UiBadgeGroup` to contain multiple badges
- Badges are static (not clickable) — for interactive filters/tags/inputs use `UiChip` / `UiChipGroup` instead

## Data Display

**Tables**
- Use `UiDatatable` for sortable data tables with a column manager
- Configure `columns` with `key`, `label`, and optional `sortable` / `hidden` / `align`
- Built-in loading skeleton (`is-loading`) and empty state; custom cells via `#cell-<key>`
- Pagination and filtering are not built in — handle them in the parent and pass the current `items`
- Best for structured data with many rows

**Lists**
- Use `UiListGroup` with `UiListItem` for simple lists
- Items support icons, active state, clickable prop
- Lighter weight than tables
- Good for navigation lists, option lists

**Cards**
- Use `UiCard` for content grouping
- Three slots: `header`, `body`, `footer`
- Variants: `pane`, `outlined`, `elevated`
- Good for dashboards, product cards, content blocks

**Collapsible sections**
- Use `UiAccordion` for single collapsible section
- Use `UiAccordionGroup` when only one should be open
- Good for FAQs, settings sections
- Reduces visual clutter

## Media

**Avatars**
- Use `UiAvatar` for user profile images
- Supports fallback text if image fails
- Sizes: `sm`, `md`, `lg`, `xl` or custom pixels
- Shapes: `circle`, `square`, `rounded`

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

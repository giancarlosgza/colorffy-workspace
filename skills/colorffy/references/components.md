# Colorffy UI Components Reference

Complete reference for all 70+ Vue 3 components in @colorffy/ui.

## Table of Contents

- [Component Import Pattern](#component-import-pattern)
- [Layout Components](#layout-components)
- [Accordion](#accordion)
- [Alerts & Notifications](#alerts--notifications)
- [Badges](#badges)
- [Buttons](#buttons)
- [Cards](#cards)
- [Chips](#chips)
- [Dialogs](#dialogs)
- [Dividers](#dividers)
- [Icons](#icons)
- [Images](#images)
- [Form Inputs](#form-inputs)
- [Links](#links)
- [Popovers](#popovers)
- [Tooltips](#tooltips)
- [Lists](#lists)
- [Navigation](#navigation)
- [Steppers](#steppers)
- [Tables](#tables)
- [Timeline](#timeline)
- [State Components](#state-components)
- [Composables](#composables)

## Component Import Pattern

All components follow the `Ui` prefix naming convention:

```vue
<script setup lang="ts">
import { UiButton, UiCard, UiAlert } from '@colorffy/ui'
</script>
```

## Layout Components

### UiHeaderContent
Page header with title, subtitle, optional back button and actions. Renders the title as an `h1` by default; use `as` for section headers.

```vue
<UiHeaderContent title="Projects" subtitle="Manage your team's work" back-button @back="goBack">
  <template #actions>
    <UiButton variant="filled" color="primary" text="New" />
  </template>
</UiHeaderContent>
```

**Props:**
- `title` / `subtitle` (string | null) - Heading and description
- `headline` (string | null) - Small eyebrow label above the title
- `as` (string, default: 'h1') - Heading element for the title
- `headingId` (string, optional) - Id of the title element (generated when omitted)
- `size` ('sm' | 'md' | 'lg' | 'xl' | '2xl', default: 'sm') - Title size
- `backButton` (boolean, default: false) - Shows a back button that emits `back`
- `backButtonLabel` (string, default: 'Go back') - Back button tooltip and aria-label
- `hideActionsWhenNarrow` (boolean, default: false) - Drops the actions once the header's container is 700px or narrower instead of wrapping them
- `viewTransitionName` (string | null) - Shared view-transition name pairing it with another page's header; must be unique per document
- `containerClass` (string | string[] | object) - Extra classes on the container

**Events:** `back` - Back button clicked

**Slots:** `actions` - Action buttons; filling it renders the actions area

### UiFooter / UiFooterGroup / UiFooterItem
Page footer with a brand block, link groups and links.

```vue
<UiFooter title="Colorffy UI" subtitle="MIT licensed">
  <UiFooterGroup title="Docs">
    <UiFooterItem text="Installation" :as="NuxtLink" to="/install" />
  </UiFooterGroup>
  <UiFooterGroup title="Social" direction="row">
    <UiFooterItem text="GitHub" href="https://github.com" icon="&#xe86f;" />
  </UiFooterGroup>
</UiFooter>
```

**UiFooter props:** `title` / `subtitle` (string | null), `fluid` (boolean, default: false), `customClass`
**UiFooter slots:** `brand` (replaces title/subtitle), default (link groups), `bottom` (divided bar, split left/right)
**UiFooterGroup props:** `title` (string | null), `direction` ('col' | 'row', default: 'col'), `overline` (boolean, default: false) - small uppercase heading, `customClass`
**UiFooterItem props:** `text` (string | null), `icon` (string | null) - leading Material Symbols code, `to` (string | object | null) / `href` (string | null), `as` (string | object | null) - link component such as `NuxtLink`/`RouterLink`, `customClass`
**UiFooterItem slots:** default (overrides `text`)

**Note:** the footer supplies its own `.container`; pass `fluid` for `.container-fluid`. A string `to`/`href` without `as` renders a plain `<a href>`; external URLs always stay `<a>` with `target="_blank" rel="noopener noreferrer"`; with no `to`/`href` the item renders a plain `.anchor-link` `<span>`.

### UiHeroContent
Page-opening hero with a display-sized title and CTA slot.

```vue
<UiHeroContent headline="Open source" title="Build vibrant interfaces" subtitle="70+ components" size="lg" align="center">
  <template #actions>
    <UiButton variant="filled" color="primary" text="Get started" />
  </template>
</UiHeroContent>
```

**Props:**
- `headline` (string | null) - Eyebrow label above the title
- `title` / `subtitle` (string | null)
- `size` ('sm' | 'md' | 'lg' | 'xl', default: 'xl') - Title size on the display scale (`sm` = `display-4` … `xl` = `display-1`)
- `align` ('start' | 'center' | 'end', default: 'start')
- `headingId` (string, optional) - Referenced by the section's `aria-labelledby`; generated when omitted
- `viewTransitionName` (string | null) - Shared name pairing it with another page's title; must be unique per document
- `customClass` (string | string[] | object) - Extra classes on the section

**Slots:** `actions` - call-to-action buttons

### UiSubheadingContent
Section subheading with an optional description.

```vue
<UiSubheadingContent title="Integrations" subtitle="Connect your tools.">
  <template #actions>
    <UiBadge text="3 active" variant="outline" size="sm" />
  </template>
</UiSubheadingContent>
```

**Props:**
- `as` (string, default: 'h3') - Heading element, keeps the heading order valid
- `title` / `subtitle` (string | null)
- `gutter` ('none' | 'sm' | 'md', default: 'md') - Space below the block; the title-to-description gap is fixed
- `customClass` (string | string[] | object) - Extra classes on the wrapper

**Slots:** `actions` - badge or control beside the subheading

### UiPaneContent
Content pane: a `<section class="pane-content">` inside a `.row > .col-md-12` wrapper.

```vue
<UiPaneContent is-full-height aria-label="Project list">
  <p>Content goes here</p>
</UiPaneContent>
```

**Props:**
- `isFullHeight` (boolean, default: false) - Expands the pane (`pane-content-expanded`)
- `customClass` (string | string[] | object) - Classes on the `<section>`
- `containerClass` (string | string[] | object) - Classes on the `.row` wrapper
- `id` (string, optional) - Id of the `<section>`
- `ariaLabel` / `ariaLabelledby` / `ariaDescribedby` (string, optional) - ARIA wiring for the section

**Slots:** default - pane content
**Exposed:** `paneContentRef` - the `<section>` element

## Accordion

### UiAccordion
Single collapsible item built on a native `<details>`.

```vue
<UiAccordion title="Section Title" name="faq" icon="&#xe88a;">
  <template #content>
    <p>Accordion content</p>
  </template>
</UiAccordion>

<!-- Controlled, plain body text -->
<UiAccordion v-model:open="isOpen" title="Details" name="details" text="Plain body text." />
```

**Props:**
- `title` (string | null, default: '') - Header text; ignored when the `header` slot is used
- `name` (string | null, default: 'accordion-item') - Native `<details name>`: items sharing a name are exclusive (one open at a time) across the whole document. Because of the default, unnamed items are exclusive with each other — give each group its own `name`, or pass `:name="null"` for an independent item
- `id` (string | null) - Rendered unchanged on the `<details>`
- `icon` (string | null) - Leading Material Symbols icon (HTML entity) shown before the title; ignored when the `header` slot is used
- `iconClass` (string | string[] | object | null) - Classes for the icon
- `text` (string | null, default: '') - Body text rendered before the `content` slot
- `open` (boolean, default: false) - Open state; use `v-model:open`
- `size` ('sm' | 'md' | null) - Per-item size override; defaults to the group size
- `disabled` (boolean, default: false) - The header can't be clicked or focused, so the item keeps its open state (`v-model:open` can still change it)
- `customClass` (string | string[] | object | null)

**Events:** `update:open` (via `v-model:open`)

**Slots:** `header` - replaces icon + title; `content` - panel body

### UiAccordionGroup
Wrapper that styles a stack of accordion items. One-open-at-a-time behavior comes from the items sharing a `name`, not from the group.

```vue
<UiAccordionGroup variant="border-block" shape="square" size="sm">
  <UiAccordion title="Section 1" name="demo">
    <template #content><p>Content 1</p></template>
  </UiAccordion>
  <UiAccordion title="Section 2" name="demo">
    <template #content><p>Content 2</p></template>
  </UiAccordion>
</UiAccordionGroup>
```

**Props:**
- `variant` ('borderless' | 'border-block', optional) - 'borderless' removes surface and borders; 'border-block' renders a flush list separated by horizontal rules
- `size` ('sm' | 'md', default: md) - Scales item paddings, arrow, and title
- `shape` ('rounded' | 'square', default: 'rounded') - Corner shape for items
- `isTransparent` (boolean, default: false) - Transparent background with outline border
- `customClass` (string | string[] | object | null)

## Alerts & Notifications

### UiAlert
Versatile alert component with multiple types and variants.

```vue
<UiAlert
  type="banner"
  variant="success"
  title="Success!"
  message="Operation completed successfully."
  dismissible
  @dismiss="onDismiss"
>
  <template #actions>
    <UiButton variant="text" size="sm" text="Undo" @click="undo" />
  </template>
</UiAlert>
```

**Props:**
- `type` ('banner' | 'tonal' | 'snackbar', default: 'banner') - Surface style
- `variant` ('primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'transparent' | 'default', default: 'danger') - Intent color and icon
- `title` (string, optional) - Alert heading
- `message` (string, optional) - Alert text
- `size` ('sm', optional) - Compact padding and icon
- `critical` (boolean, default: false) - High-priority styling
- `rounded` (boolean, default: false) - Fully rounded shape
- `placement` ('top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right', default: 'bottom') - Snackbar position; only used when `type="snackbar"`
- `dismissible` (boolean, default: false) - Show close button; clicking it hides the alert and emits `dismiss`
- `duration` (number, optional) - Auto-hide delay in ms for non-snackbar types; emits `dismiss` when the timer fires (ignored when `type="snackbar"` — use `UiAlertToast`/`useToast` instead)
- `closeLabel` (string, default: 'Close') - Accessible label for the close button
- `customClass` (string | string[] | object)

**Events:** `dismiss` - Emitted when the alert is closed via the close button or the `duration` auto-hide timer

**Slots:** `content` - extra content below the message; `actions` - controls before the close button

**Types:**
- `banner` - Inline alert on a neutral surface with a variant-colored icon
- `tonal` - Tinted container background in the variant color
- `snackbar` - Fixed toast, bottom-center by default (`placement` moves it)

### UiAlertToast
Snackbar toast driven from code. It stays hidden until `showToast()` is called — usually through `useToast`.

```vue
<script setup lang="ts">
import type { IToastDisplay } from '@colorffy/ui'
import { useToast } from '@colorffy/ui'
import { ref } from 'vue'

const toastRef = ref<IToastDisplay | null>(null)
const toast = useToast(toastRef)

function onSave() {
  toast.success('Saved successfully!', { duration: 3000 })
}
</script>

<template>
  <UiAlertToast ref="toastRef" placement="bottom-right" />
  <UiButton text="Save" @click="onSave" />
</template>
```

**Props:** (initial values; `showToast()` options override them)
- `snackbarTitle` (string, default: '') - Toast title
- `snackbarMessage` (string, default: '') - Toast text
- `snackbarVariant` (alert variant, default: 'success')
- `placement` ('top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right', default: 'bottom')

**Exposed:** `showToast({ message?, variant?, placement?, duration? })` - shows the toast; auto-hides after `duration` ms (default: 3000)
**useToast(ref):** `success` / `warning` / `danger` / `info` / `primary(message, { duration })`, plus `onToastMessage(variant, message, opts)`

## Badges

### UiBadge
Badge/tag for static labels, counts, and status indicators. Renders a `<span>` (safe inside text and buttons); not clickable — for interactive filters/tags use `UiChip`.

```vue
<UiBadge text="New" variant="primary" />
<UiBadge text="9" variant="danger" pill />
<UiBadge variant="danger" dot />
<UiBadge variant="danger" pill text="120" :max="99" />
```

**Props:**
- `text` (string | null) - Badge label
- `variant` ('primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'default' | 'outline' | `'tonal tonal-<intent>'` (any intent except neutral), default: 'primary') - Color / style preset
- `size` ('sm') - Only `sm` is supported
- `pill` (boolean, default: false) - Fully rounded capsule; numbers/initials only, not full-word labels
- `dot` (boolean, default: false) - Label-less notification dot; `text`/`iconCode` are ignored while `dot` is set
- `max` (number, optional) - Caps numeric `text`, rendering `{max}+` when exceeded (`text="120"` + `:max="99"` → "99+")
- `attached` (boolean, default: false) - Overlays the badge on the top-end corner of the nearest `.position-relative` ancestor; the parent must set `position: relative`
- `iconCode` (string | null) - Leading Material Symbols code
- `iconClass` (string | string[] | object | null) / `iconStyle` (string | object | null) - Icon classes / inline styles
- `customClass` (string | string[] | object | null) - Extra classes

**Convention:** `pill` is for numbers/initials only — keep full-word labels like "Active" or "Pending" as the default (non-pill) shape.

### UiBadgeGroup
Container for multiple badges.

```vue
<UiBadgeGroup>
  <UiBadge text="Tag 1" />
  <UiBadge text="Tag 2" />
  <UiBadge text="Tag 3" />
</UiBadgeGroup>
```

## Buttons

### UiButton
Primary button component with extensive customization.

```vue
<UiButton
  variant="filled"
  color="primary"
  size="md"
  text="Search"
  :loading="false"
  :disabled="false"
  @click="handleClick"
>
  <template #icon>
    <UiIconMaterial icon-code="&#xe8b6;" />
  </template>
</UiButton>
```

**Props:**
- `variant` ('filled' | 'tonal' | 'outline' | 'text' | 'link' | 'chip' | 'cta' | 'gradient' | 'frosted', default: 'filled') - Button style
- `color` ('primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'white' | 'black' | 'transparent') - Only applied with `variant="filled"` or `"tonal"`
- `size` ('sm' | 'md' | 'lg') - `md` is the default size
- `text` (string | null) - Button label
- `id` (string | null) - Rendered unchanged on the element
- `title` (string | null) - Native `title` attribute
- `icon` (boolean, default: false) - Icon-only button (no label required)
- `iconVariant` ('shape-sm' | 'shape-md' | 'compact-sm' | 'compact') - Icon-button shape; used with `icon`
- `iconTrailing` (boolean, default: false) - Places the `icon` slot after the label
- `loading` (boolean, default: false) - Shows a spinner, sets `aria-busy` and blocks clicks
- `disabled` (boolean, default: false) - Disable interaction
- `rounded` (boolean, default: false) - Fully rounded shape
- `fluid` (boolean, default: false) - Full width (`btn-block`)
- `customClass` (string | string[] | object | null)
- `type` ('button' | 'submit' | 'reset', default: 'button') - Native `<button>` type; ignored in link mode
- `to` (string | object, optional) - Navigation target; setting `to` (or `href`) switches to link mode, rendering an `<a>` (or `as`) instead of a `<button>`
- `href` (string, optional) - Plain/external href; also switches to link mode. External URLs get `target="_blank" rel="noopener noreferrer"`
- `as` (string | object, default: 'a') - Tag/component for link mode (`RouterLink`, `NuxtLink`); no effect without `to`/`href`

**Events:** `click` (MouseEvent) - never emitted while `disabled` or `loading`

**Slots:** `icon` - icon before the label (after it with `iconTrailing`). There is no default slot; use `text`.

```vue
<!-- Link mode: same button styling on a link -->
<UiButton variant="filled" color="primary" text="Docs" href="https://colorffy.com" />
<UiButton variant="outline" text="Dashboard" to="/dashboard" :as="RouterLink" />
<!-- Disabled link: no href, aria-disabled, click blocked -->
<UiButton variant="filled" text="Locked" href="/dashboard" disabled />
```

**Variants:** `filled` (solid), `tonal` (tinted), `outline` (border), `text` (no background), plus `link`, `chip`, `cta`, `gradient`, `frosted`.

### UiButtonMenu
Button with a dropdown menu.

```vue
<UiButtonMenu variant="outline" text="Actions" tooltip-text="More actions">
  <template #menu>
    <UiButtonMenuText item-text="Manage" />
    <UiButtonMenuItem item-text="Edit" icon="&#xe3c9;" @click="onEdit" />
    <UiButtonMenuDivider />
    <UiButtonMenuItem item-text="Delete" icon="&#xe872;" is-destructive @click="onDelete" />
  </template>
</UiButtonMenu>
```

**Props:** UiButton's look and state props (`id`, `text`, `title`, `variant`, `color`, `size`, `icon`, `iconVariant`, `iconTrailing`, `disabled`, `loading`, `rounded`, `fluid`, `customClass`) — no link mode (`to`/`href`/`as`/`type` are not supported) — plus:
- `placement` ('top' | 'bottom' | 'left' | 'right' and `-start`/`-end` variants, default: 'bottom') - Dropdown placement
- `tooltipText` (string | null, default: 'menu') - Tooltip on the trigger; also its aria-label when there is no `text`/`title`
- `tooltipPlacement` (same values, default: 'top')
- `isMobile` (boolean, default: false) - Disables dropdown positioning

**Events:** `click` (MouseEvent) - trigger clicked; not emitted while disabled or loading

**Slots:**
- `menu` - Menu content (items, submenus, dividers, text)
- `icon` - Trigger icon

### UiButtonMenuItem
Menu item for UiButtonMenu. Clicking it closes the menu (and any parent submenu) unless `keepOpen` is set.

```vue
<UiButtonMenuItem
  item-text="Edit item"
  icon="&#xe3c9;"
  shortcut="Ctrl+E"
  icon-trailing="&#xe5cc;"
  icon-trailing-class="text-muted"
  @click="handleEdit"
/>
<UiButtonMenuItem item-text="Show grid" :badge="{ text: 'New', variant: 'accent' }" keep-open @click="toggleGrid" />
```

**Props:**
- `itemText` (string) - Item label (there is no default slot)
- `icon` (string | null) - Leading icon code
- `iconClass` (string | string[] | null) / `iconStyle` (string | object | null) - Leading icon classes / inline styles
- `iconTrailing` (string | null) - Trailing icon code (right side)
- `iconTrailingClass` (string | string[] | null) / `iconTrailingStyle` (string | object | null)
- `shortcut` (string | null) - Keyboard shortcut text
- `badge` (`Partial<IBadgeProps>` | null) - Small badge (`text`, `variant`, `iconCode`, `iconClass`, `iconStyle`, `pill`, `customClass`)
- `keepOpen` (boolean, default: false) - Keep the menu open after a click; by default a click closes the menu and any parent submenu
- `isDestructive` (boolean, default: false) - Destructive (danger) styling
- `disabled` (boolean, default: false)
- `customClass` (string | string[] | null)

**Events:** `click` - native click on the item (the listener falls through to the root `<li>`)

### UiButtonMenuSubmenu
Nested dropdown for menu trees. Must be placed inside a UiButtonMenu `#menu` (or another submenu).

```vue
<UiButtonMenuSubmenu item-text="Export to" icon="&#xe2c7;" icon-trailing="&#xe5cc;">
  <UiButtonMenuItem item-text="PDF" />
  <UiButtonMenuItem item-text="Word" />
</UiButtonMenuSubmenu>
```

**Props:**
- `itemText` (string) - Submenu trigger label
- `placement` ('top' | 'bottom' | 'left' | 'right' and `-start`/`-end` variants, default: 'right') - Submenu placement relative to the item
- `isMobile` (boolean, default: false) - Disable positioning logic on mobile screens
- `id` (string | null) - Used as the dropdown's `aria-id` (`<id>-submenu`), not rendered as an element id
- `icon` (string | null) - Leading icon code
- `iconClass` / `iconStyle` (optional) - Leading icon customization
- `iconTrailing` (string | null) - Trailing icon code
- `iconTrailingClass` / `iconTrailingStyle` (optional) - Trailing icon customization
- `badge` (`Partial<IBadgeProps>` | null) - Optional badge config
- `disabled` (boolean, default: false) - Disable submenu trigger
- `isDestructive` (boolean, default: false) - Destructive styling
- `customClass` (string | string[] | null)

**Slots:** default - submenu items

### UiButtonMenuDivider
Visual separator in menu.

```vue
<UiButtonMenuDivider />
```

### UiButtonMenuText
Non-interactive text in a menu (e.g., section headers).

```vue
<UiButtonMenuText item-text="Section Title" />
```

**Props:** `itemText` (string) - Label text

### UiButtonToggleGroup
Single-select group of card-like toggle options (`role="radiogroup"`, arrow-key navigation).

```vue
<script setup lang="ts">
import type { IButtonToggleOption } from '@colorffy/ui'
import { ref } from 'vue'

const view = ref('list')
const options: IButtonToggleOption[] = [
  { id: 'list', title: 'List', icon: '&#xe896;' },
  { id: 'grid', title: 'Grid', icon: '&#xe9b0;', text: 'Card layout' },
  { id: 'board', title: 'Board', badge: { variant: 'accent', text: 'Beta' }, disabled: true }
]
</script>

<template>
  <UiButtonToggleGroup
    v-model="view"
    :options="options"
    aria-label="View mode"
    @option-click="(event, item) => onSelect(item.id)"
  />
</template>
```

**Props:**
- `options` (`IButtonToggleOption[]`, required) - `{ id, title, icon?, iconClass?, text?, badge?: { variant?, text? }, active?, disabled? }`
- `modelValue` (string) - Selected option `id` (`v-model`); when bound it overrides the per-option `active` flag
- `ariaLabel` (string, default: 'Toggle button group') - Label for the radiogroup

**Events:**
- `update:modelValue` - Selected `id` changed
- `optionClick(event, item)` - Option chosen by pointer or keyboard (Enter/Space/arrows/Home/End); not emitted for disabled options

### UiButtonTooltip
Button with an integrated tooltip.

```vue
<UiButtonTooltip variant="text" icon tooltip-text="Settings" placement="bottom" @click="openSettings">
  <template #icon>
    <UiIconMaterial icon-code="&#xe8b8;" />
  </template>
</UiButtonTooltip>

<!-- Link mode is forwarded to the inner UiButton -->
<UiButtonTooltip variant="outline" text="Docs" tooltip-text="Open the documentation" href="https://colorffy.com" />
```

**Props:** Same as UiButton (including `type`, `to`, `href`, `as`), plus:
- `tooltipText` (string, default: '') - Tooltip text; also the button's aria-label when it has no `text` or `title`
- `placement` ('top' | 'bottom' | 'left' | 'right' and `-start`/`-end` variants, default: 'top') - Tooltip placement
- `ariaExpanded` (boolean) / `ariaControls` (string) - Forwarded to the button (toggle buttons)

**Events:** `click` (MouseEvent) - not emitted while disabled or loading

**Slots:** `icon`

### UiButtonGroup
Groups multiple buttons (including UiButtonMenu / UiButtonTooltip) into one layout group.

```vue
<UiButtonGroup connected class="flex-nowrap">
  <UiButton variant="outline" text="Edit" />
  <UiButtonMenu variant="outline" icon tooltip-text="More actions">
    <template #icon>
      <UiIconMaterial icon-code="&#xe5d4;" />
    </template>
    <template #menu>
      <UiButtonMenuItem item-text="Duplicate" />
      <UiButtonMenuItem item-text="Archive" />
    </template>
  </UiButtonMenu>
</UiButtonGroup>
```

**Props:**
- `connected` (boolean, default: false) - Small `0.25rem` gap; first/last buttons get pill-shaped outer corners
- `joined` (boolean, default: false) - Only with `connected`: removes the gap and squares the inner corners (`--_btn-radius: 0`); no effect on its own
- `vertical` (boolean, default: false) - Stacks buttons vertically
- `customClass` (string | null) - Custom CSS classes

**SCSS Styling Behavior:**
- Under `.btn-group-connected`, `.btn-icon` buttons fall back to `v.$button-border-radius` (instead of a circle) to align with their neighbors.
- Under `.btn-group-connected.btn-group-joined` (horizontal and vertical), the gap is `0` and every button gets `--_btn-radius: 0`; the group's outer corners keep the connected radius.

### UiButtonFabGroup
Floating action buttons pinned to a corner of the viewport (`position: fixed`), bottom-right by default. Buttons stack upward: the first child sits at the bottom.

```vue
<UiButtonFabGroup>
  <UiButtonTooltip variant="filled" color="primary" icon tooltip-text="New project" placement="left" @click="createProject">
    <template #icon>
      <UiIconMaterial icon-code="&#xe145;" />
    </template>
  </UiButtonTooltip>
  <UiButtonTooltip variant="tonal" color="primary" size="sm" icon tooltip-text="Help" placement="left" @click="openHelp">
    <template #icon>
      <UiIconMaterial icon-code="&#xe887;" />
    </template>
  </UiButtonTooltip>
</UiButtonFabGroup>
```

**Props:**
- `top` (boolean, default: false) - Pin to the top edge instead of the bottom
- `start` (boolean, default: false) - Pin to the left edge instead of the right
- `customClass` (string | string[] | object | null)

**Slots:** `default` - the buttons. Icon-only FABs need an accessible name: `UiButtonTooltip` uses its `tooltip-text` as the label.

**CSS variables:** `--cffy-fab-group-offset-block` / `--cffy-fab-group-offset-inline` (distance from the edges, default `1.75rem`), `--cffy-fab-group-gap` (default `--cffy-space-16`).

## Cards

### UiCard
Container card component.

```vue
<UiCard variant="pane" title="Card Title">
  <template #body>
    <p>Card content goes here</p>
  </template>
  <template #footer>
    <UiButton text="Action" />
  </template>
</UiCard>

<!-- Cover image + clickable card -->
<UiCard variant="outline" image-url="/cover.jpg" image-alt="Cover photo" href="https://colorffy.com">
  <template #body>
    <h3>Card Title</h3>
    <p>Card content…</p>
  </template>
</UiCard>
```

**Props:**
- `variant` ('outline' | 'elevated' | 'pane') - Static surface; pick one. No hover or press feedback on its own
- `size` ('xs' | 'sm' | 'md')
- `title` (string | null) - Rendered as `.card-title` in the header when the `header` slot is empty (not a browser tooltip)
- `id` (string | null) - Rendered unchanged on the root element
- `selectable` (boolean, default: false) - Adds `card-selectable`: hover lift, primary border on press/focus, held by the `selected` class
- `imageUrl` (string | null) - Cover image rendered full-bleed at the top (ignored when the `#media` slot is used)
- `imageAlt` (string | null) - Alt text for the cover image (decorative/empty by default)
- `to` (string | object | null) - Navigation destination; activates link mode (root renders as `as`/`a` instead of `div`, with `.card-link` hover/press feedback)
- `href` (string | null) - Standard href for link mode; external URLs (`http(s):`, `mailto:`, `tel:`, `//`) get `target="_blank" rel="noopener noreferrer"`
- `as` (string | object | null, default: 'a') - Tag/component rendered in link mode; ignored unless `to`/`href` is set
- `customClass` (string | string[] | object | null)

**Slots:**
- `media` - Cover image area, defaults to the `imageUrl`/`imageAlt` image
- `header` - Card header (overrides `title`)
- `body` - Main content area
- `footer` - Card footer section

## Chips

### UiChip
Single interactive chip (filter, input, or plain). Renders a `<button>`; a closable chip renders a wrapper with a content button and a remove button.

```vue
<UiChip text="Filter chip" icon-code="&#xe152;" @click="onClick" />
<UiChip text="Selected" selected />
<UiChip text="Elevated" variant="elevated" selected />
<UiChip text="Low emphasis" color="neutral" selected />
<UiChip text="Removable" closable @remove="onRemove" />
```

**Props:**
- `id` (string | null) - Rendered unchanged on the chip's root element
- `text` (string | null) - Chip label
- `iconCode` (string | null) - Leading Material Symbols code, replaced by a check mark while `selected`
- `variant` ('outline' | 'elevated', default: 'outline') - Container style while unselected
- `color` ('primary' | 'secondary' | 'neutral', default: 'primary') - Fill applied once selected; no effect while unselected
- `selected` (boolean, default: false) - Filter-chip active state (`aria-pressed`); paints the chip with `color`
- `disabled` (boolean, default: false)
- `closable` (boolean, default: false) - Renders a trailing remove button
- `textOnly` (boolean, default: false) - Borderless text-only variant
- `closeLabel` (string, default: 'Remove') - Accessible label for the remove button
- `customClass` (string | string[] | object | null)

**Events:** `click` (MouseEvent) - chip body clicked; `remove` - remove button clicked (no payload)

**Slots:** `default` - extra content rendered after `text`

### UiChipGroup
Chip set with single/multiple selection via `v-model` (`role="group"`).

```vue
<UiChipGroup
  v-model="selected"
  :options="[{ id: 'a', text: 'Option A' }, { id: 'b', text: 'Option B' }]"
  aria-label="Filter"
/>
```

**Props:**
- `options` (`IChipOption[]`, required) - `{ id, text, iconCode?, disabled?, closable? }`
- `variant` ('outline' | 'elevated', default: 'outline') - Container style for every option
- `color` ('primary' | 'secondary' | 'neutral', default: 'primary') - Selected fill for every option
- `modelValue` (`string | string[] | null`, default: null) - single mode: `string | null` (clicking the selected chip clears it to `null`); multi mode: `string[]`
- `multiple` (boolean, default: false)
- `ariaLabel` (string | null)
- `customClass` (string | string[] | object | null) - Classes on the group container

**Events:** `update:modelValue`, `remove` (emits the option `id`)

**Note:** Chips are interactive filters/inputs; use `UiBadge` for static status labels. A chip carries no color until it is selected — `variant` is the resting container, `color` is the selected fill.

## Dialogs

### UiModal
Modal dialog on a native `<dialog>`. Open and close it through its exposed `showDialog()` / `closeDialog()` via a template ref (no `v-model`).

```vue
<script setup lang="ts">
import type { IDialogDisplay } from '@colorffy/ui'
import { ref } from 'vue'

const modal = ref<IDialogDisplay | null>(null)
</script>

<template>
  <UiButton variant="filled" text="Open" @click="modal?.showDialog()" />

  <UiModal ref="modal" title="Modal Title" size="md" @close="onClose">
    <template #body>
      <p>Modal content</p>
    </template>
    <template #footer>
      <UiButton variant="text" text="Cancel" @click="modal?.closeDialog()" />
      <UiButton variant="filled" color="primary" text="Confirm" @click="onConfirm" />
    </template>
  </UiModal>
</template>
```

**Props:**
- `title` (string | null) - Header text when the `header` slot is empty
- `message` (string | null) - Body text when the `body` slot is empty
- `size` ('sm' | 'md' | 'lg' | 'fullscreen') - Widths snap to the container scale: `sm` ≤ 28rem, `md` ≤ 42rem, `lg` ≤ 56rem; `fullscreen` fills the viewport
- `mode` ('modal' | 'side-sheet' | 'headless') - Dialog shape
- `closeOnClickOutside` (boolean, default: true) - Clicking outside the content calls `closeDialog()`
- `showAsModal` (boolean | null, default: true) - `false` opens with the non-modal `show()` instead of `showModal()`
- `customClass` / `bodyDialogClass` (string | string[] | object | null) - Extra classes for the `<dialog>` / the body

**Exposed:** `showDialog()`, `closeDialog()`

**Events:** `close` - emitted whenever the dialog closes: `closeDialog()`, an outside click, or Esc

**Slots:**
- `header` - Custom header (overrides `title`)
- `body` - Modal content (overrides `message`)
- `footer` - Action buttons

### UiConfirmModal
Pre-configured confirmation dialog (icon, title, message, cancel + confirm buttons). Opened/closed through its exposed `showDialog()` / `closeDialog()` via a template ref.

```vue
<script setup lang="ts">
import type { IDialogDisplay } from '@colorffy/ui'
import { ref } from 'vue'

const confirmModal = ref<IDialogDisplay | null>(null)
const deleting = ref(false)

async function handleConfirm() {
  deleting.value = true
  await deleteItem()
  deleting.value = false
  confirmModal.value?.closeDialog() // confirming does not close it on its own
}
</script>

<template>
  <UiButton variant="filled" color="danger" text="Delete" @click="confirmModal?.showDialog()" />

  <UiConfirmModal
    ref="confirmModal"
    variant="danger"
    title="Delete item?"
    message="This can't be undone."
    confirm-label="Delete"
    cancel-label="Cancel"
    :is-loading="deleting"
    loading-label="Deleting..."
    @confirm="handleConfirm"
    @close="handleClose"
  />
</template>
```

**Props:**
- `title` (string | null) - Dialog title
- `message` (string | null) - Confirmation message
- `variant` ('danger' | 'warning' | 'success' | 'primary', default: 'danger') - Icon and confirm-button color
- `confirmLabel` (string | null, default: 'Delete')
- `cancelLabel` (string, default: 'Cancel')
- `isLoading` (boolean, default: false) - Confirm button shows `loadingLabel` with a spinner and is disabled
- `loadingLabel` (string, default: 'Deleting...')
- `size` ('sm' | 'lg') - Other sizes have no effect here
- `closeOnClickOutside` (boolean, default: true) - Clicking outside the content closes the dialog
- `mode` ('modal' | 'side-sheet' | 'headless'), `showAsModal` (boolean, default: true), `customClass`

**Exposed:** `showDialog()`, `closeDialog()`

**Events:**
- `confirm` - Confirm button clicked (the dialog stays open)
- `close` - Cancel button, outside click (unless `closeOnClickOutside` is false), Esc, or `closeDialog()`

**Slots:** `messages` - extra content below the message

## Dividers

### UiDivider
Separator for lists, forms, and sections. Renders a plain `<hr>`, or a labelled/vertical `<div role="separator">` (vertical also sets `aria-orientation="vertical"`).

```vue
<UiDivider />
<UiDivider text="OR" />
<UiDivider vertical />
<UiDivider inset />
```

**Props:**
- `text` (string | null) - Centered label between two hairlines; takes precedence over `vertical`
- `vertical` (boolean, default: false) - Vertical divider for inline flex content
- `inset` (boolean, default: false) - Indent from the inline start
- `customClass` (string | string[] | object)

## Icons

**Shared props (all icon components):**
- `decorative` (boolean, default: true) - Hides the icon from assistive tech
- `ariaLabel` (string | null) - Accessible name; required when `decorative` is `false`

### UiIconMaterial
Material Symbols glyph (`<i class="material-symbols-rounded">`). Without `size` or `color` it follows the surrounding text.

```vue
<UiIconMaterial icon-code="&#xe8b6;" />
<UiIconMaterial icon-code="&#xe8b6;" size="md" color="var(--cffy-primary-base)" :decorative="false" aria-label="Search" />
```

**Props:**
- `iconCode` (string, required) - Material Symbols entity (e.g. `&#xe8b6;`)
- `size` ('xs' | 'sm' | 'md' | 'lg' | 'xl' | number | null) - 20/24/32/40/48px; a number is px; unset follows the text size
- `color` (string | null) - Any CSS color; unset follows the text color

### UiIconShapes
Decorative multi-color shapes with fixed gradients (`color` has no effect).

```vue
<UiIconShapes shape="circle-1" />
<UiIconShapes shape="star-5" size="lg" />
<UiIconShapes shape="blob-3" :size="96" />
```

**Props:**
- `shape` (required) - `lighting-1`, `shape-1`…`shape-4`, `circle-1`…`circle-4`, `blob-1`…`blob-7`, `star-1`…`star-8`
- `size` ('xs' | 'sm' | 'md' | 'lg' | 'xl' | number, default: 'md') - Tokens map to 24/32/45/64/80px; a number is px
- `title` (string | null) - Fallback accessible name when `decorative` is `false` and no `ariaLabel` is set

### UiIconSvg
Wraps any inline SVG: paste it into the default slot, or pass raw markup via `content` for data-driven icons kept in a local registry.

```vue
<UiIconSvg size="sm">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="…" /></svg>
</UiIconSvg>

<UiIconSvg :content="brandIcons[name]" :size="24" color="var(--cffy-primary-base)" />
```

**Props:**
- `content` (string | null) - Raw SVG markup; when omitted, the default slot renders
- `size` ('xs' | 'sm' | 'md' | 'lg' | 'xl' | number, default: 'md') - Tokens map to 20/24/32/40/48px; a number is px
- `color` (string | null) - Any CSS color; recolors monochrome (`currentColor`) icons, multi-color SVGs keep their own fills
- `uid` (string | null) - Seed for namespacing `id`s inside the markup (defaults to `useId()`)

**Slots:** `default` - inline `<svg>` (used when `content` is not set)

## Images

### UiAvatar
User avatar component; shows the image (`src`) when set (even if `initials` is also set), falls back to `initials`, then to a placeholder, with an optional decorative `maskShape`.

```vue
<UiAvatar src="/path/to/image.jpg" alt="John Doe" size="md" />
<UiAvatar initials="JD" size="lg" color="primary" variant="tonal" />
<UiAvatar src="/path/to/image.jpg" mask-shape="gem" status="online" />
```

**Props:**
- `src` (string, optional) - Image URL; takes precedence over `initials`
- `alt` (string, default: 'Avatar') - Accessible name
- `initials` (string | null, optional) - Shown when `src` is empty or the image fails to load
- `size` ('sm' | 'md' | 'lg' | 'navbar' | 'menu', default: 'sm')
- `maskShape` ('arch' | 'pill' | 'sunny' | 'gem' | 'cookie-6' | 'cookie-9' | 'cookie-12' | 'clover-4' | 'clover-8' | 'bum' | null, optional) - Decorative mask
- `maskStretch` (boolean, default: false) - Stretch the mask to 115%
- `status` ('online' | 'busy' | 'away' | 'offline' | null, optional) - Presence indicator dot on the avatar's bottom-end corner; passed through by `UiAvatarGroup`'s `avatars` entries
- `color` ('primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | null, optional) - Tints initials and placeholder avatars (fixed tone at 25%); no effect on image avatars. Use it instead of `bg-*-fixed` classes
- `variant` ('transparent' | 'tonal' | 'filled' | null, default: 'transparent') - Background style for initials/placeholder: see-through tint, opaque tint, or full theme color with on-color text

### UiAvatarGroup
Stacks avatars with an overlapping ring; from an `avatars` array or by composing `UiAvatar` via the default slot.

```vue
<UiAvatarGroup :avatars="[{ initials: 'JD' }, { initials: 'AS' }, { initials: 'MK' }, { initials: 'LT' }]" :max="3" />
```

**Props:**
- `avatars` (`IAvatarProps[]`) - Avatars to render, in order; alternative to composing `UiAvatar` via the default slot
- `max` (number) - Caps rendered avatars, collapsing the remainder into a "+N" overflow avatar; only applies to `avatars`, not the slot
- `size` ('sm' | 'md' | 'lg' | 'navbar' | 'menu', default: 'sm') - Applied to every avatar and the overflow avatar
- `color` (same values as `UiAvatar`, optional) - Tint for every avatar and the overflow avatar
- `variant` ('transparent' | 'tonal' | 'filled' | null, default: 'tonal') - Background style for every avatar and the overflow avatar; opaque by default so overlapping avatars don't show through
- `customClass` (string | string[] | object)

`avatars` entries can override `size`, `color` and `variant`; slot-composed avatars set their own.

**Slots:** `default` - compose `UiAvatar` instances directly (always render in full, unaffected by `max`)

## Form Inputs

All inputs share the base props (`IBaseInputProps`) and bind with `v-model`.

**Common props:**
- `modelValue` - Bound value (`v-model`); type varies per input
- `id` (string | null) - Rendered unchanged on the field, so `<label for="<id>">` works. Pass it on every field: it also links the label, and the error message gets `<id>-error-0` with the field's `aria-describedby` pointing at it
- `label` (string | null) - Field label (`required` appends ` *`)
- `errorMessages` (string[], default: []) - Shows the first message below the field and marks it invalid (`aria-invalid`)
- `placeholder` (string | null)
- `disabled`, `required`, `readonly`, `rounded` (boolean, default: false)
- `optionalLabel` (boolean, default: false) - Shows an "Optional" caption below the field (hidden while an error shows)
- `variant` ('filled' | 'outline' | 'transparent' | null)
- `size` ('sm' | 'lg' | null)
- `hideLabel` (boolean, default: false) - Hides the label visually; it stays accessible
- `customClass` (string | null) - Extra classes on the field element

Not every input uses every base prop (`readonly` only applies to `UiInputText`, `UiInputTextarea` and `UiInputOtp`; `UiInputCheck` replaces `variant` with `'switch'`); each section lists what applies.

**Events (all inputs):** `update:modelValue` (for `v-model`) and `update` with the same value

### UiInputText

```vue
<UiInputText
  id="email"
  v-model="email"
  label="Email"
  type="email"
  placeholder="you@example.com"
  required
  :error-messages="emailErrors"
/>
```

**Additional props:**
- `type` (string, default: 'text') - Native input type (`'email'`, `'password'`, `'url'`, `'tel'`, …); `'number'` coerces the model to a number (or `null` when empty)
- `maxlength` (string | number, default: 50) - Native length cap; raise it for longer values
- `min` / `max` (number | null) - Only applied when `type="number"`
- `autofocus` (boolean, default: false)

**Slots:** `#prefix`, `#suffix` - render a bordered box attached to the input (e.g. an icon or a "USD" label)

### UiInputTextarea

```vue
<UiInputTextarea id="description" v-model="description" label="Description" :rows="6" :maxlength="1000" />
```

**Additional props:** `rows` (number, default: 4), `cols` (number), `maxlength` (string | number, default: 500), `resize` ('none' | 'both' | 'horizontal' | 'vertical', default: 'vertical'), `autofocus` (boolean)

### UiInputSelect

```vue
<UiInputSelect
  id="plan"
  v-model="plan"
  label="Plan"
  :options="[
    { label: 'Basic', value: 'basic' },
    { label: 'Premium', value: 'premium' }
  ]"
  option-label="label"
  option-value="value"
/>
```

**Additional props:**
- `options` (array, default: []) - Primitive values render as-is; for objects set `optionLabel`/`optionValue`
- `optionLabel` (string | null) - Key read for each option's text (without it, object options render as JSON)
- `optionValue` (string | null) - Key read for each option's value (without it, the whole object is bound)
- `placeholder` (string, default: 'Select an option') - Disabled first option with value `null`

`modelValue`: string | number | object | null

### UiInputCheck

```vue
<UiInputCheck id="terms" v-model="agreed" label="I agree to the terms" required />
<UiInputCheck id="dark-mode" v-model="darkMode" label="Dark mode" variant="switch" />
```

**Props:**
- `label` (string, required) - Label text beside the box
- `modelValue` (boolean | string | null, default: false)
- `variant` ('switch' | null) - `'switch'` renders a toggle switch
- `type` (string, default: 'checkbox') - Native input type
- `size` ('sm' | 'lg' | null)
- `hideLabel` (boolean) - Hides the label text visually while keeping it accessible
- `id` (string | null) - Pass it so clicking the label toggles the input
- Also: `disabled`, `required`, `errorMessages`, `optionalLabel`, `customClass` (on the `<input>`)

**Events:** `update:modelValue`, `update` (fires with the same value)

### UiInputRadio

```vue
<UiInputRadio
  id="plan"
  v-model="choice"
  label="Select plan"
  :options="[
    { label: 'Basic', value: 'basic' },
    { label: 'Premium', value: 'premium' }
  ]"
  option-label="label"
  option-value="value"
/>
```

**Props:**
- `modelValue` (string | number | null) - Selected value
- `label` (string | null) - Group label (labels the `role="radiogroup"`)
- `options` (array, default: []) - Primitive values render as-is; for objects set `optionLabel`/`optionValue`
- `optionLabel` / `optionValue` (string | null) - Keys read for each option's text / value
- `inline` (boolean, default: true) - Lays options out in a row; `false` stacks them
- `id` (string | null) - Gives the options a shared `name` (`radio-<id>`) and ids `<id>-<index>` so their labels are clickable
- Also: `disabled`, `required`, `errorMessages`, `size`, `hideLabel`, `customClass` (on each `<input>`)

**Events:** `update:modelValue`, `update`

### UiInputRange

```vue
<UiInputRange id="volume" v-model="volume" :min="0" :max="100" :step="1" label="Volume" />
<UiInputRange v-model="zoom" size="sm" label="Zoom" />
```

**Props:** `modelValue` (number | string | null; values set by dragging arrive as strings, and an empty model is seeded with `min` on mount), `min` (number, default: 0), `max` (number, default: 100), `step` (number, default: 1), `size` ('sm' | 'lg'; `'sm'` also scales the track and thumb), plus the base props `errorMessages`, `disabled`, `required`, `optionalLabel`, `variant`, `rounded`, `hideLabel`, `customClass`

**Events:** `update:modelValue`, `update`

### UiInputFile

```vue
<UiInputFile
  id="resume"
  v-model="file"
  label="Upload file"
  input-label="Choose a file or drop it here"
  size="lg"
  :error-messages="fileErrors"
/>
```

**Props:** `modelValue` (File | null; a single file, the first selected), `inputLabel` (string | null) - text inside the dropbox until a file is chosen (then the file name shows), `size` (`'lg'` renders a taller dropbox), plus the base props `id`, `label`, `errorMessages`, `disabled`, `required`, `optionalLabel`, `hideLabel`, `customClass` (on the `<input type="file">`). There are no `multiple` or `accept` props.

**Events:** `update:modelValue`, `update` (both with the selected `File` or `null`)

### UiInputColorPicker

```vue
<UiInputColorPicker id="brand" v-model="color" label="Brand color" />
```

**Props:** `modelValue` (string | null, hex color), `maxlength` (number, default: 7) - length cap of the hex text field, `size` ('sm' | 'lg'), plus the base props `id` (on the swatch; the hex text field gets `<id>-text`), `label`, `errorMessages`, `disabled`, `required`, `optionalLabel`, `hideLabel`, `customClass` (on both fields)

**Events:** `update:modelValue`, `update` (on commit: swatch change, or text field change)

### UiInputPhoneNumber
Phone field that displays digits dash-grouped (`555-123-4567`) while `v-model` holds the raw digits.

```vue
<UiInputPhoneNumber id="phone" v-model="phone" label="Phone number" placeholder="555-123-4567" />
```

**Props:** `modelValue` (string | null; digits only), `maxlength` (number, default: 50) - applies to the displayed (formatted) text, `autofocus` (boolean), plus the base props `id`, `label`, `errorMessages`, `placeholder`, `disabled`, `required`, `optionalLabel`, `variant`, `size`, `rounded`, `hideLabel`, `customClass`

**Events:** `update:modelValue`, `update` (both with the digits-only string)

### UiInputOtp
Segmented PIN/verification code input; auto-advances focus per box, supports Backspace/Arrow navigation, paste and WebOTP autofill.

```vue
<UiInputOtp id="code" v-model="code" label="Verification code" @complete="onComplete" />
<UiInputOtp v-model="pin" label="4-digit PIN" :length="4" />
```

**Props:** `modelValue` (string), `length` (number, default: 6) - number of boxes, `integerOnly` (boolean, default: true) - numeric-only input; set `false` to allow alphanumeric codes, `autofocus` (boolean) - focuses the first empty box on mount, `label` (string | null) - group label, also used in each box's `aria-label`, `id` (string | null) - boxes get `<id>-otp-<index>`, `placeholder` (string | null) - shown in every box, plus the base props `errorMessages`, `disabled`, `required`, `readonly`, `optionalLabel`, `variant`, `size`, `rounded`, `hideLabel`, `customClass` (on every box)

**Events:** `update:modelValue`, `update`, `complete` (fires with the full value once every box is filled)

## Links

### UiLinkTooltip
Button-styled link with a tooltip (same styling props as `UiButton`; `variant` defaults to `'filled'`). External URLs (`http(s):`, `mailto:`, `tel:`, `//`) open in a new tab with `rel="noopener noreferrer"`.

```vue
<UiLinkTooltip
  href="/pricing"
  text="Learn more"
  tooltip-text="See plans and pricing"
  variant="text"
  placement="bottom"
/>

<!-- Router link -->
<UiLinkTooltip :as="NuxtLink" to="/docs" text="Docs" tooltip-text="Read the documentation" />
```

**Props:**
- `href` (string) / `to` (string | object) - Link target; `to` wins when both are set
- `as` (string | object, default: 'a') - Tag/component to render (e.g. `NuxtLink`, `RouterLink`); external URLs always render an `<a>`
- `text` (string | null) - Link text
- `tooltipText` (string | null) - Tooltip content
- `placement` (`FloatingPlacement`, default: 'top')
- `variant` ('filled' | 'tonal' | 'outline' | 'text' | 'link' | …, default: 'filled'), `color`, `size` ('sm' | 'md' | 'lg') - Button styling
- `icon`, `iconVariant`, `iconTrailing`, `rounded`, `loading` - Same as `UiButton`
- `fluid` (boolean, default: false) - Full-width link (`btn-block`)
- `disabled` (boolean) - Removes the link target
- `id` (string | null) - Set on the link; the tooltip content gets `<id>-tooltip`
- `title`, `customClass`

**Slots:** `icon` - rendered before `text`

## Popovers

### UiPopover
Anchored panel built on the native Popover API (`popover` attribute: top layer, light dismiss and Esc handled by the browser), positioned against its trigger with CSS anchor positioning. Browsers without anchor positioning, and screens below 768px, center it in the viewport instead.

```vue
<template>
  <!-- The trigger toggles the popover by id and declares the anchor -->
  <UiButton text="Profile" popovertarget="profile-popover" style="anchor-name: --profile" />

  <UiPopover id="profile-popover" anchor-name="--profile" position-block="bottom" position-inline="right" size="sm">
    <template #header>
      <strong>Jane Doe</strong>
    </template>
    <template #body>
      <p>Product designer</p>
    </template>
    <template #footer>
      <UiButton variant="text" text="Close" popovertarget="profile-popover" popovertargetaction="hide" />
    </template>
  </UiPopover>
</template>
```

**Props:**
- `id` (string, required) - Targeted by the trigger's `popovertarget`
- `anchorName` (string, required) - Dashed ident (e.g. `--profile`) matching the trigger's `anchor-name`
- `positionBlock` ('top' | 'bottom', default: 'top') - Vertical side of the anchor
- `positionInline` ('left' | 'right', default: 'left') - Horizontal side of the anchor
- `size` ('sm' | 'lg') - `sm` matches the trigger's width, `lg` is at least 30rem; unset sizes to the content
- `contentClass` (string | string[]) - Extra classes on the inner `.popover-content`

**Slots:** `header`, `body`, `footer` - each region renders only when filled

**Note:** for an account menu use `UiPopoverMenu`, and for a menu on a button use `UiButtonMenu`; both position and dismiss themselves.

## Tooltips

### UiTooltip
Generic tooltip wrapper for any trigger (button, link, avatar, icon, …).

```vue
<UiTooltip text="Helpful hint" placement="bottom">
  <UiButton variant="outline" text="Hover me" />
</UiTooltip>
```

**Props:**
- `text` (string | null) - Plain-text tooltip content; ignored when the `#content` slot is used
- `placement` (`FloatingPlacement`, default: 'top') - `top`/`bottom`/`left`/`right` and their `-start`/`-end` variants
- `disabled` (boolean, default: false)
- `ariaId` (string) - Id of the popper content, referenced by the trigger's `aria-describedby`; defaults to an SSR-stable `useId()` value
- `customClass` (string | string[] | object) - Applied to the inline-block trigger wrapper

**Slots:** `default` - trigger element; `content` - rich body content, overrides `text`

**Note:** For a plain button or link needing tooltip + semantics in one component, prefer `UiButtonTooltip` / `UiLinkTooltip` instead.

## Lists

### UiListGroup
Container (`<ul class="list-group">`) for `UiListItem` entries.

```vue
<UiListGroup is-interactive variant="flush" size="sm">
  <UiListItem title="Inbox" text="12 new" icon="&#xe156;" active />
  <UiListItem title="Drafts" icon="&#xe254;" />
  <UiListItem title="Archive" icon="&#xe149;" disabled />
</UiListGroup>
```

**Props:**
- `variant` ('flush' | 'low-contrast' | null) - Surface style
- `size` ('sm' | 'md' | null) - Item density
- `isInteractive` (boolean, default: false) - Hover/active styles and a trailing arrow on items
- `isUndecorated` (boolean, default: false) - Hides the interactive arrow
- `customClass` (string | string[] | object)

**Slots:** `default` - `UiListItem` entries

### UiListItem
List row with an optional leading icon or image, a title and supporting text, and optional trailing actions. Content comes from props (there is no default slot).

```vue
<UiListItem
  title="Jane Cooper"
  text="jane.cooper@example.com"
  icon="&#xe7fd;"
  active
  has-actions
  custom-icon-wrapper-class="bg-primary rounded-full"
  custom-icon-class="text-white"
>
  <template #list-action>
    <UiButton variant="text" icon title="Edit">
      <template #icon>
        <UiIconMaterial icon-code="&#xe3c9;" />
      </template>
    </UiButton>
  </template>
</UiListItem>
```

**Props:**
- `title` (string | null) - Primary text
- `text` (string | null) - Supporting text
- `icon` (string | null) - Leading Material Symbols entity (e.g. `&#xe88a;`)
- `imageUrl` (string | null) - Image rendered in place of the icon (takes precedence over `icon`); accepts `public/` paths, imported assets, or external URLs
- `imageAlt` (string | null) - Alt text for the image (defaults to empty/decorative)
- `active` (boolean, default: false) - Highlighted state (`aria-current="page"` in link mode)
- `disabled` (boolean, default: false) - Disables the item; strips `href`/`to` and blocks pointer events in link mode
- `hasActions` (boolean, default: false) - Renders the `list-action` slot beside the row and hides the item's interactive arrow
- `to` (string | object | null) - Navigation destination; activates link mode (the `.list-item` renders as `as`/`a` instead of a `div`). Object targets need `as`
- `href` (string | null) - Standard href for link mode (e.g. external links)
- `as` (string | object | null, default: 'a') - Tag/component rendered in link mode (e.g. `'router-link'`, `'nuxt-link'`); ignored unless `to`/`href` is set
- `customClass` (string | string[] | object) - Classes on the `<li>`
- `customIconWrapperClass`, `customIconClass` (string | string[] | object) - Classes for the icon tile and icon (only when `icon` is set)
- `customImageClass` (string | string[] | object) - Classes for the image (e.g. `rounded-full`)

**Slots:**
- `media` - Replaces the whole image/icon area with arbitrary content (e.g. `UiIconSvg`)
- `list-action` - Trailing actions (rendered when `hasActions` is true)

```vue
<!-- Image instead of icon -->
<UiListItem
  title="Jane Cooper"
  text="jane.cooper@example.com"
  image-url="/avatars/jane.jpg"
  image-alt="Jane Cooper avatar"
/>

<!-- Navigable rows (render as links) -->
<UiListItem title="Dashboard" icon="&#xe88a;" to="/dashboard" />
<UiListItem title="Colorffy" icon="&#xe157;" href="https://colorffy.com" />
<UiListItem title="Settings" icon="&#xe8b8;" :to="{ name: 'settings' }" as="router-link" />
```

## Navigation

### UiNavigationBar
Mobile bottom navigation bar: shown below 1024px, hidden on wider screens.

```vue
<UiNavigationBar
  :as="NuxtLink"
  :active-item="route.path"
  :items="[
    { id: 'home', to: '/', icon: '&#xe88a;', text: 'Home', ariaLabel: 'Go to home' },
    { id: 'profile', to: '/profile', icon: '&#xe7fd;', text: 'Profile', ariaLabel: 'Go to profile' }
  ]"
  indicator-tab
/>
```

**Props:**
- `items` (`INavItem[]`) - `{ id, to, icon, ariaLabel, text? }` (`id`, `to`, `icon`, `ariaLabel` required); each item takes 25% of the width, and the indicator animates across up to 8 items
- `activeItem` (string | null, default: null) - Matches an item's `id` or its string `to`; that item gets `aria-current="page"` and a bold icon
- `as` (string | object, default: 'a') - Link component (`'a'`, `NuxtLink`, `RouterLink`); external `to` (`http(s):`, `mailto:`, `tel:`, `//`) always renders `<a target="_blank">`
- `frosted`, `island` (boolean, default: false) - Frosted-glass background / floating island surface
- `indicatorTab`, `indicatorFrosted` (boolean, default: false) - Short bar above the active item / frosted indicator, instead of the default tinted pill

The active color and the indicator follow the router's `.router-link-exact-active` class (pure CSS anchor positioning), so they need a router `as`. With plain `a` links only `aria-current` marks the active item and the indicator stays on the first one. The `<nav>` is always labelled "Main navigation".

### UiTabs
Horizontal tab navigation.

```vue
<UiTabs
  :tabs="[
    { id: 'inbox', label: 'Inbox', badge: { text: '12', variant: 'primary', pill: true } },
    { id: 'archived', label: 'Archived' }
  ]"
  v-model:active-tab="activeTab" />
```

**Props:**
- `activeTab` (string) - Id of the active tab
- `tabs` (array) - Tab items: `{ id, label, disabled?, panelId?, badge?, icon? }`; `badge` accepts `Partial<IBadgeProps>` (`text`, `variant`, `pill`, `iconCode`, ...) rendered after the label; `icon` is a Material Symbols entity code rendered before the label
- `pillTabs` / `contrastTabs` (boolean) - Styling variants
- `fluid` (boolean, default: false) - Stretches every tab to fill the available width equally
- `fit` (boolean, default: false) - The tab bar is only as wide as its tabs instead of spanning the container; ignored when `fluid` is set
- `rounded` (boolean, default: false) - Fully rounded pill tabs and indicator; only with `pillTabs`
- `iconOnly` (boolean, default: false) - Tabs with an `icon` render as square icon buttons; the label stays as visually hidden text (accessible name) and a native `title` tooltip; tabs without an icon keep their label
- `size` ('sm' | 'md' | null, default: null) - `'sm'` uses the default button height and font size

The active indicator (underline, or the raised pill with `pillTabs`) is placed and animated with pure CSS anchor positioning; where anchor positioning is unsupported the active tab falls back to its own border/background.

**Emits:**
- `update:activeTab` (tabId: string) - Fired when a tab is selected; use `v-model:active-tab`

### UiSegmentedControls
Compact segmented switcher with an animated active pill.

```vue
<UiSegmentedControls
  v-model:active-tab="view"
  :tabs="[
    { id: 'grid', label: 'Grid', icon: '&#xe9b0;' },
    { id: 'list', label: 'List', icon: '&#xe896;', badge: { text: '3', variant: 'primary', pill: true } }
  ]"
/>
```

**Props:**
- `tabs` (`ISegmentedTab[]`, required) - `ISegmentedTab` is `ITabItem`, the same shape as `UiTabs` items: `{ id, label, disabled?, panelId?, badge?, icon? }`. `icon` (Material Symbols code) renders before the label, `badge` (`Partial<IBadgeProps>`) after it
- `activeTab` (string) - Id of the active tab; defaults to the first tab

**Emits:**
- `update:activeTab(tabId)` - Fired when a tab is selected; use `v-model:active-tab`

Keyboard support matches `UiTabs` (arrow keys, Home/End, disabled tabs skipped). The pill is placed and animated with pure CSS anchor positioning. Where anchor positioning is unsupported it falls back to a bolder label on a filled background. Same mechanism as `UiTabs` and `UiNavigationBar` — see [component-guide.md](./component-guide.md).

### UiNavbar
Composable top navigation bar: `nav.navbar` > `.container` (or `.container-fluid`), assembled from the sub-components below.
- **From 992px:** links live in `UiNavbarCollapse`.
- **Below 992px:** the collapse is hidden and `UiNavbarMobileMenu` shows instead (usually the avatar). Pair it with `UiNavigationBar` for mobile links.

```vue
<script setup lang="ts">
import { NuxtLink } from '#components'
import { ref } from 'vue'

const collapsed = ref(false)
const menuOpen = ref(false)
</script>

<template>
  <UiNavbar sticky fluid aria-label="Top navigation">
    <UiNavbarToggle show-toggle-button :collapsed="collapsed" @toggle="collapsed = !collapsed" />

    <UiNavbarTitle title="Dashboard">
      <template #brand>
        <UiNavbarBrand :as="NuxtLink" to="/" text="Acme" initials="A" />
      </template>
    </UiNavbarTitle>

    <UiNavbarMobileMenu>
      <UiNavbarAvatar src="/me.jpg" alt="Account menu" size="sm" @click="menuOpen = !menuOpen" />
    </UiNavbarMobileMenu>

    <UiNavbarCollapse>
      <UiNavbarNav position="start">
        <UiNavbarLink :as="NuxtLink" to="/docs" text="Docs" />
        <UiNavbarLink :as="NuxtLink" to="/pricing" text="Pricing" />
      </UiNavbarNav>

      <UiNavbarNav position="end">
        <UiNavbarItem>
          <UiBadge text="PRO" variant="outline" />
        </UiNavbarItem>
        <UiNavbarItem>
          <UiNavbarAvatar src="/me.jpg" alt="Account menu" @click="menuOpen = !menuOpen" />
        </UiNavbarItem>
      </UiNavbarNav>
    </UiNavbarCollapse>

    <!-- Account menu: a UiPopoverMenu placed here drops from the navbar's right edge -->
    <UiPopoverMenu :is-opened="menuOpen" aria-label="Account menu" @hide-dropdown="menuOpen = false">
      <template #header>
        <UiPopoverMenuUser display-name="Jane Cooper" email="jane@example.com" photo-url="/me.jpg" />
      </template>
    </UiPopoverMenu>
  </UiNavbar>
</template>
```

**`UiNavbar` props:**
- `sticky` (boolean, default: false) - Wraps the bar in `.nav-sticky` (sticks to the top)
- `fluid` (boolean, default: false) - `.container-fluid` instead of `.container`
- `ariaLabel` (string, default: 'Main navigation') - `<nav>` landmark name; give it a distinct name when a `UiSidebar` (same default) is on the page
- `customClass` (ClassValue) - Classes on `nav.navbar` (e.g. `nav-island`, `nav-transparent`)
- **Slots:** default

**Sub-components:**
- `UiNavbarBrand` - Brand link. `text`, `logo` (image URL), `initials` (shown when there is no `logo`), `as` (default 'a'), `to` / `href`, `customClass`. `#link="{ linkTarget, brandText }"` replaces the link
- `UiNavbarTitle` - `title`, `customClass`; `#brand` slot before the title, `#title` slot after it. The `title` text only fades in once a `sticky` navbar is stuck to the top (CSS scroll-state query)
- `UiNavbarToggle` - Sidebar toggle button
  - `collapsed` (boolean, default: false) - Sets `aria-expanded="!collapsed"` and swaps the icon and tooltip
  - `collapseText` (default 'Collapse sidebar') / `expandText` (default 'Expand sidebar') - Tooltip text
  - `controls` - An element id, set as `aria-controls`
  - `id` (default 'sidebar-collapse'), `customClass`
  - `showToggleButton` (boolean, default: false) - The button is hidden below 1024px unless this is set
  - **Emits:** `toggle`. See UiSidebar for the wiring
- `UiNavbarCollapse` - Desktop region, hidden below 992px. Put `UiNavbarNav` groups in the default slot, or use the `#start` / `#end` slots, which render the `ul.navbar-nav` groups for you (ignored when the default slot is used). `customClass`
- `UiNavbarNav` - `ul.navbar-nav` group. `position` ('start' | 'end', default 'start'): `start` sits next to the brand, `end` is pushed to the far edge. `customClass`. Its styles only apply inside `UiNavbarCollapse`
- `UiNavbarItem` - `li.nav-item` wrapper for custom content (search field, button, badge, `UiNavbarAvatar`). `customClass`
- `UiNavbarLink` - Renders its own `li.nav-item` + `.nav-link`, so place it straight in `UiNavbarNav` / `#start` / `#end`
  - Props: `text`, `as` (default 'a'), `to` / `href`, `active`, `disabled`, `customClass`
  - The `#icon` slot renders before the text; the `icon` prop is not rendered
  - External targets open in a new tab
- `UiNavbarAvatar` - Clickable avatar (`role="button"`, Enter/Space activate)
  - Props: `src` (a placeholder renders when empty), `alt` (default 'User avatar'; also the accessible name), `size` ('sm' | 'navbar', default 'navbar'), `customClass`
  - **Emits:** `click`
- `UiNavbarMobileMenu` - Wrapper shown only below 992px (put the `size="sm"` avatar here). `customClass`

The current-page link is highlighted from the router's `.router-link-exact-active` / `.nuxt-link-exact-active` class, so use a router `as` for nav links. `active` only adds `aria-current="page"`.

### UiBreadcrumb
SEO-friendly breadcrumb trail. Pass an ordered `items` list (root → current). The last entry is auto-marked as the current page (`aria-current="page"`, non-link). Emits a schema.org `BreadcrumbList` as inline JSON-LD by default.

```vue
<UiBreadcrumb
  :as="NuxtLink"
  base-url="https://example.com"
  separator-icon="&#xe5cc;"
  :items="[
    { label: 'Home', to: '/', icon: '&#xe88a;' },
    { label: 'Projects', to: '/projects' },
    { label: 'Atlas' }
  ]"
/>
```

**Props:**
- `items` (`IBreadcrumbItem[]`, required) - Entries `{ label, to?, href?, icon?, current? }`; omit `to`/`href` on the current page, or force one with `current: true`
- `as` (string | component, default `'a'`) - Polymorphic link (`'a'`, `NuxtLink`, `router-link`); external string targets always render `<a target="_blank">`
- `separator` (string, default `'/'`) / `separatorIcon` (string) - Item separator; the icon wins
- `structuredData` (boolean, default `true`) - Emit JSON-LD `BreadcrumbList`; disable to feed your own `useHead`
- `baseUrl` (string) - Origin prefix → absolute URLs in the JSON-LD
- `maxItems` (number, default `0`) - When the trail is longer, show the first item, `…`, and the last `maxItems − 1` items (visual only; JSON-LD keeps the full trail)
- `ariaLabel` (string, default `'Breadcrumb'`) - `<nav>` landmark name
- `customClass` (ClassValue) - Classes on the `<nav>`
- **Emits:** `itemClick(item, index)` (link entries only) · **Slots:** `#item="{ item, index, isCurrent }"`, `#separator`

### UiSidebar (Navigation Drawer)
Composable navigation drawer. It keeps two **independent** states:
- `rail` - compact icons-only mode, a desktop concern; one-way and parent-controlled.
- `open` - the responsive mobile slide-in below 1024px; supports `v-model:open`.

On desktop the drawer is always visible. Below 1024px it slides in while `open`, over a dimmed overlay that emits `update:open` on dismiss.

```vue
<UiSidebar bordered :rail="rail" v-model:open="open" aria-label="Main navigation">
  <template #header>
    <UiSidebarDropdown title="Acme" subtitle="Workspace" :interactive="false" />
  </template>

  <template #body>
    <UiSidebarText text="Platform" />
    <UiSidebarLink :as="NuxtLink" to="/" text="Home" icon="&#xe88a;" tooltip-text="Home" />
    <UiSidebarLink :as="NuxtLink" to="/inbox" text="Inbox" icon="&#xe156;" tooltip-text="Inbox">
      <template #badge>
        <UiBadge text="4" variant="primary" size="sm" pill />
      </template>
    </UiSidebarLink>

    <UiSidebarGroup text="Account" collapsible :default-open="true" icon="&#xe853;">
      <UiSidebarLink :as="NuxtLink" to="/account" text="Profile" icon="&#xe853;" child />
      <UiSidebarLink :as="NuxtLink" to="/notifications" text="Notifications" icon="&#xe7f4;" child />
    </UiSidebarGroup>
  </template>

  <template #footer>
    <UiBadge text="v1.0.0" variant="outline" size="sm" />
  </template>
</UiSidebar>
```

**`UiSidebar` props:**
- `rail` (boolean, default: false) - Compact icons-only mode (`.drawer-rail`, half width); desktop only, ignored below 1024px; one-way, no `update:rail` emit
- `open` (boolean, default: false) - Mobile drawer below 1024px (`.drawer-open` / `.drawer-closed`); use `v-model:open`
- `bordered` (boolean, default: false) - Right border instead of shadow
- `width` (string) - Sets `--cffy-sidebar-width` (default `--cffy-container-2xs`, 18rem)
- `ariaLabel` (string, default `'Main navigation'`) - `<nav>` landmark name
- `customClass` (ClassValue) - Classes on the `<nav>`. The component has two root nodes (overlay + nav), so plain `class`/`id` attributes are not forwarded
- `headerClass` / `bodyClass` / `footerClass` (ClassValue) - Extra classes for the region wrappers
- **Slots:** `header`, `body`, `footer` — each renders its own `.drawer-header` / `.drawer-body` / `.drawer-footer` wrapper (skipped when empty); there is no default slot
- **Emits:** `update:open` (`false` on overlay click)

**Sub-components:**
- `UiSidebarText` - Section label: `text`, `customClass`
- `UiSidebarGroup` - `text`, `icon` (shown only when `collapsible`), `collapsible` (default false), `defaultOpen` (default true), `customClass`; default slot holds the links
- `UiSidebarLink` - `as` (default `'a'`), `to` / `href`, `text`, `icon`, `child` (indented), `active`, `disabled`, `tooltipText`, `tooltipPlacement` (default `'right'`), `ariaLabelledby`, `customClass`; `#badge` slot after the text
- `UiSidebarDropdown` - `title`, `subtitle`, `interactive` (default true; `false` renders static text), `placement` (default `'bottom'`), `customClass`; the default slot is the dropdown menu (e.g. `UiButtonMenuItem`s), rendered only when `interactive`

Toggle it from the navbar with `UiNavbarToggle`. The toggle is hidden below 1024px unless `show-toggle-button` is set. Its `collapsed` prop follows the rail: `aria-expanded` is `!collapsed`, and the tooltip switches to `expandText` when true. The usual app shell drives both states from one boolean:

```vue
<UiSidebar :rail="collapsed" v-model:open="collapsed">…</UiSidebar>
<UiNavbarToggle show-toggle-button :collapsed="collapsed" @toggle="collapsed = !collapsed" />
```

### UiPopoverMenu
Dropdown panel (account menus, overflow menus) with `header` / `body` / `footer` slots. Fill `#body` with `UiPopoverMenuGroup` blocks of `UiPopoverMenuItem` rows, separated by `UiDivider`.

```vue
<UiPopoverMenu
  id="account-menu"
  :is-opened="open"
  aria-label="Account menu"
  @hide-dropdown="open = false"
>
  <template #header>
    <UiPopoverMenuUser :user="user" />
  </template>

  <template #body>
    <UiPopoverMenuGroup>
      <UiPopoverMenuItem :as="NuxtLink" to="/dashboard" icon="&#xe871;" text="Dashboard" />
    </UiPopoverMenuGroup>

    <UiDivider />

    <UiPopoverMenuGroup>
      <UiPopoverMenuItem icon="&#xe879;" text="Sign out" is-destructive @click="signOut" />
    </UiPopoverMenuGroup>
  </template>

  <template #footer>
    <span class="subtitle-2 text-muted">v2.5.0</span>
  </template>
</UiPopoverMenu>
```

**Props:**
- `isOpened` (boolean) - Show / hide
- `id` (string) - DOM id; pass one when a page has more than one menu
- `ariaLabel` (string, default: 'Menu') - Accessible name
- `closable` (boolean, default: true) - Close button, pinned to the header's top right whatever the header holds (a custom `header` slot keeps it)
- `nativePopover` (boolean, default: true) - Renders as a native `popover="auto"` (top layer, click-outside and Esc handled by the browser) when the browser supports both the Popover API and CSS anchor positioning; browsers missing either — or `false` — keep the class-based rendering, where dismissal is the consumer's job (e.g. `v-on-click-outside`, harmless alongside the native branch)
- `title` (string) - Default header title; the default header is the title plus the close button, nothing else
- `menuItems` (array) - Shortcut that renders the body when no body slot is filled; entries take `UiPopoverMenuItem` props plus an `id`
- `currentRoute` - Active-row detection for `menuItems`

**Slots:** `header`, `body`, `footer` (no default slot). A filled `body` replaces the `menuItems` rows.

**Emits:** `hideDropdown`, `menuItemClick(to)`.

The default header is a `title` plus the close button; put identity (avatar, name, email) in the `header` slot with `UiPopoverMenuUser`. To add rows to a `menuItems` menu, render the body yourself in `#body`.

### UiPopoverMenuUser
Identity block for a popover menu's `header` slot: avatar beside the name and email.

```vue
<UiPopoverMenuUser :user="user">
  <template #avatar>
    <UiAvatar initials="CO" size="md" status="online" />
  </template>
  <template #trailing>
    <UiBadge text="Pro" variant="outline" size="sm" />
  </template>
</UiPopoverMenuUser>
```

**Props:** `user` (`{ displayName, email, photoURL }` — the Firebase shape), `displayName`, `email`, `photoUrl` (each wins over `user`), `alt`, `avatarClass`, `customClass`.
**Slots:** `avatar`, default (the two text lines), `trailing`.

### UiPopoverMenuGroup
Groups related rows inside the body; separate groups with `UiDivider`. Renders `role="group"`, so give each one a `text` or `ariaLabel` when a menu has more than one group.

```vue
<UiPopoverMenuGroup text="Workspace">
  <UiPopoverMenuItem icon="&#xe7fb;" text="Invite people" />
</UiPopoverMenuGroup>
```

**Props:** `text` (visible label, doubles as the accessible name), `ariaLabel`, `customClass`.

### UiPopoverMenuItem
One row inside a popover menu. Renders a `button` by default, an `a` with `as="a"` (`to` becomes its `href`), or a router component when passed one — so actions and links share a row style.

```vue
<UiPopoverMenuItem icon="&#xe8b8;" text="Command menu" shortcut="⌘K" @click="openPalette" />
<UiPopoverMenuItem as="a" to="https://example.com" text="Docs" icon-trailing="&#xe89e;" />
<UiPopoverMenuItem :as="NuxtLink" to="/projects" icon="&#xe8ef;" text="Projects" />
<UiPopoverMenuItem icon="&#xe879;" text="Delete" is-destructive />
```

**Props:** `as` ('button' | 'a' | 'div' | 'span' | router component, default 'button'), `text`, `icon`, `iconClass`, `iconStyle`, `iconTrailing`, `to`, `active` (leave unset for router components — they set their own active class), `disabled`, `isDestructive`, `shortcut`, `badge` (`Partial<IBadgeProps>`), `ariaLabel`, `customClass`.
**Slots:** default (label), `trailing` — replaces the badge / shortcut / trailing icon; use `as="div"` plus `#trailing` to embed a control (e.g. a theme switch) as a row.
**Emits:** `click(event)` — not emitted while `disabled`.

Rows rendered as `div`/`span` are containers: they drop the `menuitem` role and carry no `type`/`href`/`to`, but still emit `click` (clicks on an embedded control bubble up).

## Steppers

### UiStepper
Horizontal or vertical progress indicator for multi-step flows (checkout, onboarding, wizards).

```vue
<UiStepper
  :steps="steps"
  v-model:active-step="activeStep" />

<!-- Vertical layout -->
<UiStepper :steps="steps" v-model:active-step="activeStep" vertical  />

<!-- Linear mode: blocks selecting a step ahead of the current one -->
<UiStepper :steps="steps" v-model:active-step="activeStep" linear  />
```

**Props:**
- `steps` (`IStepItem[]`, required) - `{ id, label, description?, icon?, disabled? }`
- `activeStep` (string) - Id of the active step; defaults to the first step
- `vertical` (boolean, default: false) - Renders as a vertical list instead of a horizontal row
- `linear` (boolean, default: false) - Blocks selecting a step ahead of the current one, forcing sequential progression
- `customClass`

**Emits:** `update:activeStep(stepId)` - Fired when a step is selected; use `v-model:active-step`

## Tables

### UiDatatable
Data table with type-aware sorting, a column manager, row selection, a sticky header, and built-in loading/empty states.

```vue
<UiDatatable
  :columns="[
    { key: 'id', label: 'ID', hidden: true },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role', sortable: false },
    { key: 'total', label: 'Total', align: 'end' }
  ]"
  :items="users"
  default-sort-key="name"
  table-class="table-striped"
  column-manager
>
  <!-- Custom cell: slot name is `cell-<key>`, scoped value is `item` -->
  <template #cell-total="{ item }">
    {{ item.total.toLocaleString() }}
  </template>

  <!-- Left side of the toolbar -->
  <template #controls>
    <UiInputText id="search" v-model="search" label="Search" hide-label placeholder="Search" />
  </template>
</UiDatatable>
```

**Column (`IDatatableColumn`):**
- `key` (string) - Data field on each row; also the sort key and `cell-<key>` slot name
- `label` (string) - Header text shown to the user (decoupled from `key` for i18n); give utility columns one too
- `hideLabel` (boolean) - Keeps the label for screen readers but hides it in the header (actions, toggles)
- `sortable` (boolean) - Per-column sort opt-out; defaults to the table-level `sortable`
- `hidden` (boolean) - Starts hidden; toggleable via the column toggle / column manager
- `hideable` (boolean) - `false` keeps the column on screen and out of the column manager and show-all toggle; defaults to `false` for an empty `label`, `true` otherwise
- `fit` (boolean) - Column only as wide as its content, no wrapping (icon buttons, checkboxes)
- `align` ('start' | 'center' | 'end') - Text alignment for the header and cells
- `thClass` / `tdClass` (string) - Custom classes for the header / body cells

**Props:**
- `columns` (`IDatatableColumn[]`, required) - Column definitions
- `items` (`Record<string, any>[]`, required) - Rows keyed by each column's `key`
- `sortable` (boolean, default: true) - Enable sorting; numbers and numeric strings compare numerically, nullish values sort last
- `defaultSortKey` (string, default: '') / `defaultSortOrder` ('asc' | 'desc', default: 'asc') - Initial sort
- `tableClass` ('table-bordered' | 'table-striped' | 'table-borderless' | string, default: '') - Classes on the `<table>`
- `columnManager` (boolean, default: false) - Icon-only show/hide column menu; `columnManagerTooltip` (string, default: 'Manage columns') is its tooltip and accessible name
- `columnsToggleTooltip` (string | `{ showAll, hideDefault }`) - Tooltip of the "show all / restore hidden" button, which appears automatically when any column is `hidden`
- `toolbarButton` (`{ variant?, color?, size?, customClass?, rounded? }`) - Restyles both built-in toolbar buttons (default: outline, `sm`)
- `rowKey` (string) - Row field used as the stable `v-for` key (falls back to `id`, then index); also the row-selection identity
- `selectable` (boolean, default: false) - Leading checkbox column; the header checkbox selects/clears all rows and goes indeterminate when only some are selected. Pair with `v-model:selected`
- `selected` (`(string | number)[]`, default: `[]`) - Selected row identities, bound via `v-model:selected`
- `stickyHeader` (boolean, default: false) - Sticks the header while the body scrolls; wraps the table in `.table-responsive-sticky`
- `stickyHeight` (string | number, default: `32rem`) - Max height of the sticky scroll area (numbers are px); sets `--cffy-table-sticky-max-height`
- `isLoading` (boolean, default: false) + `skeletonRows` (number, default: 10) - Built-in loading skeleton (one cell per visible column)
- `caption` (string) - Accessible `<caption>` for the table
- `emptyStateTitle` (default: 'No data available') / `emptyStateSubtitle` / `emptyStateUseCustomIcon` (boolean) / `emptyStateIconCode` (string, default: '&#xeb83;') - Built-in `UiEmpty` state

**Slots:**
- `cell-<key>` (`{ item }`) - Custom cell
- `controls` - Left side of the toolbar (search, filters, bulk actions)
- `actions-start` / `actions-end` - Your buttons before / after the built-in ones, in the same button group
- `column-toggle` / `column-manager` - Replace a built-in button; scoped with `{ columns, allVisible, isVisible(key), isLocked(key), toggle(key), toggleAll() }`, where `columns` lists the hideable columns

Utility column: `{ key: 'actions', label: 'Actions', hideLabel: true, hideable: false, fit: true, sortable: false, align: 'end' }`. The column manager always keeps one hideable column visible.

The toolbar renders when any of these slots is used, a column is `hidden`, or `columnManager` is set.

```vue
<script setup lang="ts">
import { ref } from 'vue'
const selected = ref<(string | number)[]>([])
</script>

<template>
  <UiDatatable v-model:selected="selected" :columns="columns" :items="items" selectable sticky-header sticky-height="20rem" />
</template>
```

**Emits:** `update:selected` (row identities array)

> **Note:** Pagination and filtering are not built in — paginate/filter `items` in the parent and pass the current page.

## Timeline

### UiTimeline
Chronological event feed with dot/icon/image markers and a connector line.

```vue
<UiTimeline size="sm" :items="[
  { id: '1', title: 'New deployment', text: 'Atlas v2.4.0 released', time: '2 h ago', icon: '&#xe1b6;', variant: 'success' },
  { id: '2', title: 'Comment', text: 'Ana replied in Project Nebula', time: '1 day ago', icon: '&#xe0b9;', variant: 'primary' },
  { id: '3', title: 'Archived', text: 'Old drafts cleaned up', time: '2 days ago', variant: 'neutral' }
]" />
```

**Props:**
- `items` (`ITimelineItem[]`, default: `[]`) - `{ id, title?, text?, time?, icon?, imageUrl?, imageAlt?, variant? }`; marker priority is `imageUrl` > `icon` > plain dot. `variant` (`'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info'`) colors the marker
- `align` ('start' | 'alternate', default: 'start') - `'alternate'` centers the connector line and zig-zags content left/right
- `size` ('sm' | 'lg') - Tighter or larger spacing, markers and text; omit for the standard size
- `customClass` (ClassValue)

**Slots:** `item-<id>` (scoped `{ item }`) - per-item custom body (highest priority); `item` (scoped `{ item }`) applied to every item; both fall back to the default time/title/text markup

## State Components

### UiProgressBar
Determinate or indeterminate progress bar (`role="progressbar"`).

```vue
<UiProgressBar :value="60" text="60%" aria-label="Upload progress" />
<UiProgressBar :value="40" size="sm" animated aria-label="Syncing" />
<UiProgressBar :value="0" indeterminate aria-label="Loading" />
<UiProgressBar :value="75" gradient bar-class="gradient-success" aria-label="Storage used" />
```

**Props:**
- `value` (number, required) - Fill width as a percentage of the track (0–100)
- `ariaLabel` (string) - Accessible name; always set it
- `size` ('sm' | 'lg') - Thinner or thicker track
- `animated` (boolean, default: false) - Animated stripes on the fill
- `gradient` (boolean, default: false) - Gradient fill; pick the colors with a `gradient-<name>` class in `barClass` (`primary` … `info`, or a named palette such as `gradient-cyan`, `gradient-violet`)
- `indeterminate` (boolean, default: false) - Unknown progress: a sliding segment, and no `aria-valuenow`
- `text` (string | null) - Label inside the fill
- `ariaValuemin` / `ariaValuemax` (number, default: 0 / 100) - ARIA range only; the fill width always reads `value` as a percentage
- `customClass` / `customStyles` - Classes and inline styles for the track
- `barClass` / `barStyles` - Classes and inline styles for the fill

**Slots:** `default` - content inside the fill, after `text`

### UiProgressSpinner
Circular loading spinner (`role="status"`, labelled "Loading").

```vue
<UiProgressSpinner />
<UiProgressSpinner size="2rem" :custom-styles="{ '--cffy-progress-spinner-color': 'var(--cffy-primary-a10)' }" />
```

**Props:**
- `size` (string, default: '1.25rem') - Any CSS length
- `customClass` / `customStyles` - Classes and inline styles; set `--cffy-progress-spinner-color` to recolor it

### UiLoading, UiExpressiveLoading, UiShapeLoading
Full-block loading states (`role="status"`, `aria-live="polite"`).

```vue
<UiLoading title="Loading" subtitle="Fetching your data…" spinner-size="48px" />

<UiExpressiveLoading :title="['Warming up…', 'Almost there…', 'Finishing up…']" :interval="2500" size="lg" />

<UiShapeLoading title="Generating" subtitle="This may take a moment" />
```

**`UiLoading` props:** `title` / `subtitle` (string | null), `spinnerSize` (string | number, default: '65px'; numbers are px), `hideSpinner` (boolean, default: false), `customClass`, `loadingStyles`
**`UiExpressiveLoading` props:** `title` (string | string[] | null — an array cycles one message at a time), `interval` (ms, default: 3000), `size` ('sm' | 'md' | 'lg', default: 'md' — spinner 45 / 65 / 85px plus text size), `customClass`, `loadingStyles`
**`UiShapeLoading` props:** `title` / `subtitle` (string | null), shown over three animated shapes in a single color (the subtitle uses the title color), `customClass`, `loadingStyles`

All three also take `role` (default: 'status'), `ariaLabel` and `ariaLive` ('off' | 'polite' | 'assertive', default: 'polite'). None has a `color` prop.

### UiEmpty

```vue
<UiEmpty title="No projects yet" subtitle="Create your first project to get started.">
  <template #action>
    <UiButton variant="filled" color="primary" text="New project" />
  </template>
</UiEmpty>

<UiEmpty title="Inbox zero" use-custom-icon icon-code="&#xe156;" />
```

**Props:**
- `title` (string | null, optional) - Headline
- `subtitle` (string | null, optional) - Supporting text
- `useCustomIcon` (boolean, default: false) - Render `iconCode` as a static icon instead of the default animated icon
- `iconCode` (string, default: '&#xeb83;') - Material icon code used when `useCustomIcon` is true
- `role` (string, default: 'status') / `ariaLabel` (string, default: 'Empty state') / `ariaLive` ('off' | 'polite' | 'assertive', default: 'polite') - Live-region semantics
- `customClass` (string | string[] | null, optional) - Extra classes

**Slots:** `action` - call-to-action content (usually a `UiButton`), centered in a button group below the title/subtitle

### UiBaseSkeleton, UiGridSkeleton, UiTableSkeleton

```vue
<UiBaseSkeleton width="100%" height="1.25rem" />
<UiBaseSkeleton variant="thumbnail" />
<UiBaseSkeleton :width="64" :height="64" rounded />

<UiGridSkeleton
  :skeleton-grid-items="6"
  grid-layout-classes="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-lg-3 gap-4"
/>

<!-- UiTableSkeleton renders a <tbody>: put it inside a table -->
<table class="table">
  <UiTableSkeleton :skeleton-rows="8" :skeleton-cols="4" />
</table>
```

**`UiBaseSkeleton` props:** `width` / `height` (string | number; numbers are px), `size` ('sm' | 'md' | 'lg', default: 'md'), `variant` ('default' | 'thumbnail' | 'ai-generation' | 'shimmer', default: 'default'), `rounded` (boolean — pill shape), `customClass`, `skeletonStyles`
**`UiGridSkeleton` props:** `skeletonGridItems` (number, default: 12), `gridLayoutClasses` (string | string[] — the grid wrapper classes), `cardVariant` (string, default: 'pane'), `showFooter` (boolean, default: true)
**`UiTableSkeleton` props:** `skeletonRows` (number, default: 12), `skeletonCols` (number, default: 5), `customClass`, `skeletonStyles`

All three also take `role` (default: 'status'), `ariaLabel` and `ariaLive` (default: 'polite'). `UiDatatable` renders `UiTableSkeleton` itself through `is-loading`.

## Composables

### useToast
Programmatic toasts. Pass a `ref` to a mounted `UiAlertToast`. It returns `success`, `warning`, `danger`, `info` and `primary` helpers — each `(message, { duration? })` — plus a generic `onToastMessage(variant, message, { duration? })`. Calls made before the toast is mounted are ignored, so fire them from handlers or after `onMounted`.

```vue
<script setup lang="ts">
import { type IToastDisplay, useToast } from '@colorffy/ui'
import { ref } from 'vue'

const toastRef = ref<IToastDisplay | null>(null)
const toast = useToast(toastRef)

function onSave() {
  toast.success('Saved!', { duration: 3000 })
}
function onFail() {
  toast.onToastMessage('danger', 'Something went wrong.')
}
</script>

<template>
  <UiAlertToast ref="toastRef" placement="bottom-right" />
  <UiButton text="Save" @click="onSave" />
</template>
```

`duration` defaults to 3000 ms. Placement and title come from the `UiAlertToast` props (`placement`, `snackbarTitle`); the composable only sets variant, message and duration.

### useDateUtils
Date display helper.

```typescript
import { useDateUtils } from '@colorffy/ui'

const { parseDateTimeStr } = useDateUtils()
parseDateTimeStr('2026-10-04T14:30:00Z') // host locale and time zone
parseDateTimeStr('2026-10-04T14:30:00Z', 'en-US', 'America/New_York') // '10/04/2026, 10:30:00 AM'
```

`parseDateTimeStr(dateStr, locale?, timeZone?)` formats with `toLocaleString`: 2-digit day/month, numeric year, 2-digit hours/minutes/seconds, 12-hour clock. It is the only helper.

### useTextUtils
Text helpers.

```typescript
import { useTextUtils } from '@colorffy/ui'

const { formatPhoneNumber, isQueryParamNumber } = useTextUtils()
formatPhoneNumber('(123) 456-7890') // '123-456-7890'
formatPhoneNumber('12345678')       // '123-456-78'
isQueryParamNumber(route.query.id)  // true for '42', false for '12abc', '' or undefined
```

- `formatPhoneNumber(value)` - Strips non-digits and groups them in threes with dashes; the last group takes the final 1–4 digits
- `isQueryParamNumber(value)` - True only for a fully numeric value (reads the first entry of array query params)

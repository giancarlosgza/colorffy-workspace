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
Page header with title and subtitle.

```vue
<UiHeaderContent title="Page Title" subtitle="Optional subtitle" />
```

**Props:**
- `title` (string) - Main heading
- `subtitle` (string, optional) - Secondary text

### UiPaneContent
Content container/pane wrapper.

```vue
<UiPaneContent>
  <template #default>
    <p>Content goes here</p>
  </template>
</UiPaneContent>
```

## Accordion

### UiAccordion
Single collapsible accordion item.

```vue
<UiAccordion title="Section Title" name="accordion-group" icon="&#xe88a;">
  <template #content>
    <p>Accordion content</p>
  </template>
</UiAccordion>
```

**Props:**
- `title` (string, required) - Accordion header text
- `name` (string, required) - Group identifier
- `icon` (string, optional) - Leading Material Symbols icon (HTML entity) shown before the title; ignored when the `header` slot is used
- `open` (boolean, default: false) - Initial open state (also controllable via `v-model:open`)
- `size` ('sm' | 'md', optional) - Per-item size override; defaults to the group size

### UiAccordionGroup
Groups multiple accordion items (allows only one open at a time).

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
- `size` ('sm' | 'md', default: 'md') - Scales item paddings, arrow, and title
- `shape` ('rounded' | 'square', default: 'rounded') - Corner shape for items
- `isTransparent` (boolean, default: false) - Transparent background with outline border

## Alerts & Notifications

### UiAlert
Versatile alert component with multiple types and variants.

```vue
<UiAlert
  type="banner"
  variant="success"
  title="Success!"
  message="Operation completed successfully."
  :critical="false"
  dismissible
  @dismiss="onDismiss"
/>
```

**Props:**
- `type` ('banner' | 'snackbar' | 'tonal') - Alert style
- `variant` ('success' | 'warning' | 'danger' | 'info') - Alert color
- `title` (string, optional) - Alert heading
- `message` (string, required) - Alert text
- `critical` (boolean, default: false) - High-priority styling
- `dismissible` (boolean, default: false) - Show close button; clicking it hides the alert and emits `dismiss`
- `duration` (number, optional) - Auto-hide delay in ms for non-snackbar types; emits `dismiss` when the timer fires (ignored when `type="snackbar"` — use `UiAlertToast`/`useToast` instead)
- `closeLabel` (string, default: 'Close') - Accessible label for the close button (only rendered when `dismissible` is true)

**Events:** `dismiss` - Emitted when the alert is closed via the close button or the `duration` auto-hide timer

**Types:**
- `banner` - Full-width banner at top/bottom
- `snackbar` - Compact notification (bottom-right)
- `tonal` - Filled background alert box

### UiAlertToast
Toast notification for temporary messages.

```vue
<UiAlertToast
  variant="success"
  message="Saved successfully!"
  :duration="3000"
/>
```

**Props:**
- `variant` ('success' | 'warning' | 'danger' | 'info')
- `message` (string, required)
- `duration` (number, default: 3000) - Auto-dismiss time in ms

## Badges

### UiBadge
Badge/tag component for static labels, counts, and status indicators (not clickable — for interactive filters/tags use `UiChip`).

```vue
<UiBadge text="New" variant="primary" />
<UiBadge text="9" variant="danger" pill />
<UiBadge variant="danger" dot />
<UiBadge variant="danger" pill text="120" :max="99" />
```

**Props:**
- `text` (string | null) - Badge label
- `variant` ('primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'danger' | 'info' | 'gradient' | 'default' | 'outline' | `'tonal tonal-<intent>'`) - Color / style preset
- `size` ('sm') - Only `sm` is supported
- `pill` (boolean, default: false) - Fully rounded capsule style; reserve for numbers/initials only, not full-word labels
- `dot` (boolean, default: false) - Renders a label-less notification dot; `text`/`iconCode` are ignored while `dot` is set
- `max` (number, optional) - Caps numeric `text` at this value, rendering `{max}+` when exceeded (e.g. `text="120"` with `:max="99"` renders "99+")
- `attached` (boolean, default: false) - Overlays the badge on the top-end corner of the nearest `.position-relative` ancestor (e.g. on avatars or icon buttons); the parent must set `position: relative`
- `iconCode` (string, optional) - Leading Material Symbols code
- `iconClass` (string | string[] | object, optional) - Classes for the icon
- `customClass` (string | string[] | object, optional) - Extra classes

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
  text="Click me"
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
- `variant` ('filled' | 'tonal' | 'outline' | 'text' | 'link' | 'chip' | 'cta' | 'gradient' | 'frosted') - Button style
- `color` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'accent')
- `size` ('sm' | 'md' | 'lg')
- `text` (string) - Button label
- `loading` (boolean) - Show loading spinner
- `disabled` (boolean) - Disable interaction
- `type` ('button' | 'submit' | 'reset', default: 'button') - Native `<button>` type; ignored in link mode
- `to` (string | object, optional) - Navigation target; setting `to` (or `href`) switches the button into link mode, rendering an `<a>` (or the tag/component given via `as`) instead of a `<button>`
- `href` (string, optional) - Plain/external href; setting `href` (or `to`) switches to link mode
- `as` (string | object, default: 'a') - Tag/component to render in link mode (e.g. `'a'`, `RouterLink`, `NuxtLink`); only takes effect when `to`/`href` is set — passing `as` alone has no effect

**Slots:**
- `icon` - Prepend icon before text
- `default` - Custom content (overrides text prop)

```vue
<!-- Link mode: renders <a>/as instead of <button>, same button styling -->
<UiButton variant="filled" color="primary" text="Docs" href="https://colorffy.com" />
<UiButton variant="outline" text="Dashboard" to="/dashboard" as="router-link" />
```

**Variants:**
- `filled` - Solid background
- `tonal` - Subtle background with color
- `outline` - Transparent with border
- `text` - Text-only, no background

### UiButtonMenu
Button with dropdown menu.

```vue
<UiButtonMenu text="Actions" variant="filled">
  <template #menu>
    <UiButtonMenuItem @click="edit">Edit</UiButtonMenuItem>
    <UiButtonMenuDivider />
    <UiButtonMenuItem @click="delete">Delete</UiButtonMenuItem>
  </template>
</UiButtonMenu>
```

**Props:** Same as UiButton

**Slots:**
- `menu` - Menu content (items, dividers, text)

### UiButtonMenuItem
Menu item for UiButtonMenu.

```vue
<UiButtonMenuItem 
  icon="edit" 
  icon-trailing="chevron_right" 
  icon-trailing-class="text-muted"
  @click="handleEdit"
>
  Edit Item
</UiButtonMenuItem>
```

**Props:**
- `icon` (string, optional) - Icon code
- `iconClass` (string | string[], optional) - CSS classes for the icon
- `iconStyle` (string | object, optional) - Inline styles for the icon
- `iconTrailing` (string, optional) - Trailing icon code (placed on the right side)
- `iconTrailingClass` (string | string[], optional) - CSS classes for the trailing icon
- `iconTrailingStyle` (string | object, optional) - Inline styles for the trailing icon
- `disabled` (boolean)
- `badge` (object, optional) - Badge options (`text`, `variant`, etc.)
- `shortcut` (string, optional) - Keyboard shortcut text
- `isDestructive` (boolean, default: false) - Apply destructive styling (e.g. red)

**Events:**
- `click` - Emitted on click

### UiButtonMenuSubmenu
Submenu nested dropdown for nested menu trees. Must be placed inside a dropdown menu.

```vue
<UiButtonMenuSubmenu
  item-text="Export to"
  icon="folder"
  icon-trailing="chevron_right"
>
  <UiButtonMenuItem item-text="PDF" />
  <UiButtonMenuItem item-text="Word" />
</UiButtonMenuSubmenu>
```

**Props:**
- `id` (string, optional) - Dropdown wrapper element ID
- `placement` (string, default: 'right') - Placement of the submenu relative to the menu item
- `isMobile` (boolean, default: false) - Disable positioning logic on mobile screens
- `itemText` (string) - Submenu item title
- `icon` (string, optional) - Leading icon code
- `iconClass` / `iconStyle` (optional) - Leading icon customization
- `iconTrailing` (string, optional) - Trailing icon code
- `iconTrailingClass` / `iconTrailingStyle` (optional) - Trailing icon customization
- `disabled` (boolean, default: false) - Disable submenu trigger
- `badge` (object, optional) - Optional badge config
- `isDestructive` (boolean, default: false) - Apply destructive theme styling

### UiButtonMenuDivider
Visual separator in menu.

```vue
<UiButtonMenuDivider />
```

### UiButtonMenuText
Non-interactive text in menu (e.g., section headers).

```vue
<UiButtonMenuText text="Section Title" />
```

### UiButtonToggleGroup
Group of toggle buttons (single or multi-select).

```vue
<UiButtonToggleGroup
  v-model="selected"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]"
  :multiple="false"
/>
```

**Props:**
- `modelValue` (string | string[]) - Selected value(s)
- `options` (array) - Toggle options with `label` and `value`
- `multiple` (boolean) - Allow multiple selections
- `color` ('primary' | 'secondary' | etc.)

### UiButtonTooltip
Button with integrated tooltip.

```vue
<UiButtonTooltip
  text="Click me"
  tooltip="This is a helpful tooltip"
  variant="filled"
/>
```

**Props:** Same as UiButton, plus:
- `tooltip` (string, required) - Tooltip text
- `tooltipPlacement` ('top' | 'bottom' | 'left' | 'right')

### UiButtonGroup
Groups multiple buttons together into a single layout group.

```vue
<UiButtonGroup connected class="flex-nowrap">
  <UiButton text="Edit" />
  <UiButtonMenu icon tooltip-text="More Actions" />
</UiButtonGroup>
```

**Props:**
- `connected` (boolean, default: false) - Groups buttons closer with a small `0.25rem` gap and rounded outer boundaries
- `joined` (boolean, default: false) - Seamlessly joins buttons together with `0` gap, removing intermediate border-radii (forces `--_btn-radius: 0`)
- `vertical` (boolean, default: false) - Stacks buttons vertically
- `customClass` (string) - Custom CSS classes

**SCSS Styling Behavior:**
- Under `.btn-group-connected`, `.btn-icon` components automatically fall back to the standard `v.$button-border-radius` (instead of 100% circular shapes) to align next to neighboring buttons.
- Under `.btn-group-joined` (horizontal & vertical), all button components are flattened by setting `--_btn-radius: 0` or `border-radius: 0` for seamless alignments.

## Cards

### UiCard
Container card component.

```vue
<UiCard variant="pane">
  <template #header>
    <h3>Card Title</h3>
  </template>
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
- `variant` ('outline' | 'elevated' | 'pane')
- `size` ('xs' | 'sm' | 'md')
- `selectable` (boolean, default: false) - Adds `card-selectable` interactive styling
- `imageUrl` (string, optional) - Cover image URL rendered full-bleed at the top of the card (ignored when the `#media` slot is used)
- `imageAlt` (string, optional) - Alt text for the cover image (decorative/empty by default)
- `to` (string | object, optional) - Navigation destination; activates link mode (root renders as `as`/`a` instead of `div`) when set together with, or instead of, `href`
- `href` (string, optional) - Standard href for link mode (e.g. external links); activates link mode. External URLs (`http(s):`, `mailto:`, `tel:`, `//`) automatically get `target="_blank" rel="noopener noreferrer"`
- `as` (string | object, default: 'a') - Tag/component rendered in link mode; ignored unless `to`/`href` is set

**Slots:**
- `media` - Cover image area, defaults to the `imageUrl`/`imageAlt` image
- `header` - Card header section
- `body` - Main content area
- `footer` - Card footer section

## Chips

### UiChip
Single interactive chip (filter, input, or plain).

```vue
<UiChip text="Filter chip" icon-code="&#xe152;" @click="onClick" />
<UiChip text="Selected" selected />
<UiChip text="Removable" closable @remove="onRemove" />
```

**Props:**
- `id` (string | null)
- `text` (string | null) - Chip label
- `iconCode` (string | null) - Leading Material Symbols code, replaced by a check mark while `selected`
- `selected` (boolean, default: false) - Filter-chip active state
- `disabled` (boolean, default: false)
- `closable` (boolean, default: false) - Renders a trailing remove button
- `textOnly` (boolean, default: false) - Borderless text-only variant
- `closeLabel` (string, default: 'Remove') - Accessible label for the remove button

**Events:** `click`, `remove`

**Slots:** `default` - extra content rendered after `text`

### UiChipGroup
Chip set with single/multiple selection via `v-model`.

```vue
<UiChipGroup
  v-model="selected"
  :options="[{ id: 'a', text: 'Option A' }, { id: 'b', text: 'Option B' }]"
  aria-label="Filter"
/>
```

**Props:**
- `options` (`IChipOption[]`, required) - `{ id, text, iconCode?, disabled?, closable? }`
- `modelValue` (`string | string[] | null`) - single mode: `string | null`; multi mode: `string[]`
- `multiple` (boolean, default: false)
- `ariaLabel` (string | null)

**Events:** `update:modelValue`, `remove` (emits the option `id`)

**Note:** Chips are interactive filters/inputs; use `UiBadge` for static status labels.

## Dialogs

### UiModal
Modal dialog overlay.

```vue
<UiModal
  v-model="isOpen"
  title="Modal Title"
  :dismissible="true"
  size="md"
>
  <template #body>
    <p>Modal content</p>
  </template>
  <template #footer>
    <UiButton text="Cancel" @click="isOpen = false" />
    <UiButton text="Confirm" variant="filled" />
  </template>
</UiModal>
```

**Props:**
- `modelValue` (boolean) - Open/close state
- `title` (string) - Modal header
- `size` ('sm' | 'md' | 'lg' | 'xl' | 'full')
- `dismissible` (boolean, default: true) - Can close with overlay click/ESC

**Slots:**
- `header` - Custom header (overrides title)
- `body` - Modal content
- `footer` - Action buttons

### UiConfirmModal
Pre-configured confirmation dialog.

```vue
<UiConfirmModal
  v-model="showConfirm"
  title="Confirm Action"
  message="Are you sure you want to proceed?"
  confirm-text="Yes, proceed"
  cancel-text="Cancel"
  @confirm="handleConfirm"
  @cancel="handleCancel"
/>
```

**Props:**
- `modelValue` (boolean) - Open/close state
- `title` (string) - Dialog title
- `message` (string) - Confirmation message
- `confirmText` (string, default: 'Confirm')
- `cancelText` (string, default: 'Cancel')
- `variant` ('danger' | 'warning' | 'primary')

**Events:**
- `confirm` - User confirmed action
- `cancel` - User cancelled

## Dividers

### UiDivider
Separator for lists, forms, and sections. Renders a plain `<hr>`, or a labelled/vertical `<div role="separator">`.

```vue
<UiDivider />
<UiDivider text="OR" />
<UiDivider vertical />
<UiDivider inset />
```

**Props:**
- `text` (string | null) - Centered label between two hairlines
- `vertical` (boolean, default: false) - Vertical divider for inline flex content
- `inset` (boolean, default: false) - Indent from the inline start

## Icons

**All icon components share the same props pattern:**
- `iconCode/name/shape/tool` (string, required) - Identifier
- `size` (number, default: 24) - Size in pixels
- `color` (string) - Icon color

### UiIconMaterial

```vue
<UiIconMaterial icon-code="&#xe8b6;" :size="24" color="primary" />
```

### UiIconShapes, UiIconSvg

```vue
<UiIconShapes shape="circle-1" :size="24" />

<!-- UiIconSvg: paste any inline <svg> into the slot -->
<UiIconSvg :size="24">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="…" /></svg>
</UiIconSvg>

<!-- ...or pass raw markup via `content` for data-driven icons -->
<UiIconSvg :content="brandIcons[name]" :size="24" />
```

`UiIconSvg` replaces the removed `UiIconApp`/`UiIconTool`: keep the SVGs you
need in a local registry instead of a hardcoded library set. `color` recolors
monochrome icons; multi-color SVGs keep their own fills.

## Images

### UiAvatar
User avatar component; shows an image (`src`) or falls back to `initials`, with an optional decorative `maskShape`.

```vue
<UiAvatar src="/path/to/image.jpg" alt="John Doe" size="md" />
<UiAvatar initials="JD" size="lg" />
<UiAvatar src="/path/to/image.jpg" mask-shape="gem" status="online" />
```

**Props:**
- `src` (string, optional) - Image URL
- `alt` (string, default: 'Avatar') - Accessible name
- `initials` (string | null, optional) - Fallback initials when no image is set
- `size` ('sm' | 'md' | 'lg' | 'navbar' | 'menu')
- `maskShape` ('arch' | 'pill' | 'sunny' | 'gem' | 'cookie-6' | 'cookie-9' | 'cookie-12' | 'clover-4' | 'clover-8' | 'bum' | null, optional) - Decorative mask
- `maskStretch` (boolean, default: false) - Stretch the mask to 115%
- `status` ('online' | 'busy' | 'away' | 'offline' | null, optional) - Presence indicator dot on the avatar's bottom-end corner; passed through by `UiAvatarGroup`'s `avatars` entries

### UiAvatarGroup
Stacks avatars with an overlapping ring; from an `avatars` array or by composing `UiAvatar` via the default slot.

```vue
<UiAvatarGroup :avatars="[{ initials: 'JD' }, { initials: 'AS' }, { initials: 'MK' }]" :max="3" />
```

**Props:**
- `avatars` (`IAvatarProps[]`) - Avatars to render, in order; alternative to composing `UiAvatar` via the default slot
- `max` (number) - Caps rendered avatars, collapsing the remainder into a "+N" overflow avatar; only applies to `avatars`, not the slot
- `size` ('sm' | 'md' | 'lg' | 'navbar' | 'menu', default: 'sm') - Applied to every avatar in the group (and the overflow avatar)
- `customClass`

**Slots:** `default` - compose `UiAvatar` instances directly (always render in full, unaffected by `max`)

## Form Inputs

**Common props across all form inputs:**
- `modelValue` - Input value (v-model)
- `label` (string) - Field label (when `required` is true, appends ` *` suffix)
- `placeholder` (string)
- `required` (boolean) - Appends ` *` to label
- `disabled` (boolean)
- `error` (string) - Error message
- `hint` (string) - Helper text

### UiInputText

```vue
<UiInputText
  v-model="name"
  label="Name"
  type="email"
  placeholder="Enter your name"
  :required="true"
  :error="errorMessage"
/>
```

**Additional props:**
- `type` ('text' | 'email' | 'password' | 'url' | 'tel')

**Slots:** `#prefix`, `#suffix` - render a bordered box attached to the input (e.g. an icon or a "USD" label)

### UiInputTextarea

```vue
<UiInputTextarea v-model="description" label="Description" :rows="4" :maxlength="500" />
```

**Additional props:** `rows` (default: 3), `maxlength`

### UiInputSelect

```vue
<UiInputSelect
  v-model="selected"
  label="Choose option"
  :options="[
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' }
  ]"
/>
```

**Additional props:** `options` (array with `label` and `value`)

### UiInputCheck

```vue
<UiInputCheck 
  v-model="agreed" 
  label="I agree to the terms" 
  variant="switch"
  :hide-label="false"
/>
```

**Props:**
- `modelValue` (boolean)
- `label` (string)
- `disabled` (boolean)
- `color` (string)
- `variant` ('switch' | null) - style variant (renders switch checkbox when set to `'switch'`)
- `hideLabel` (boolean) - hides label text visually while keeping it accessible
- Also shares the common base props: `errorMessages`, `required`, `optionalLabel`

**Events:** `update:modelValue`, `onUpdate` (fires with the same value)

### UiInputRadio

```vue
<UiInputRadio
  v-model="choice"
  label="Select Plan"
  :options="[
    { label: 'Basic', value: 'basic' },
    { label: 'Premium', value: 'premium' }
  ]"
/>
```

**Props:**
- `modelValue` (any) - Selected value
- `label` (string) - Group label
- `options` (array, required) - List of radio options with `label` and `value`
- `disabled` (boolean)

### UiInputRange

```vue
<UiInputRange v-model="volume" :min="0" :max="100" :step="1" label="Volume" />
```

**Props:** `modelValue` (number), `min` (default: 0), `max` (default: 100), `step` (default: 1)

### UiInputFile

```vue
<UiInputFile v-model="files" label="Upload file" :multiple="false" accept=".jpg,.png,.pdf" />
```

**Props:** `modelValue` (File | File[]), `multiple` (boolean), `accept` (string), plus the common base props `errorMessages`, `disabled`, `required`, `optionalLabel`, `hideLabel` (renders the error feedback block when `errorMessages` is set)

### UiInputColorPicker

```vue
<UiInputColorPicker v-model="color" label="Choose color" :maxlength="7" />
```

**Props:** `modelValue` (string, hex color), `maxlength` (number, default: 7), plus the common base props `errorMessages`, `disabled`, `required`, `optionalLabel`, `hideLabel`. `v-model` works as expected (no separate `@on-update` wiring needed).

**Breaking change:** the length-limit prop was renamed `maxLength` → `maxlength` (lowercase).

### UiInputPhoneNumber

```vue
<UiInputPhoneNumber v-model="phone" label="Phone number" :default-country="'US'" />
```

**Props:** `modelValue` (string), `defaultCountry` (ISO country code)

### UiInputOtp
Segmented PIN/verification code input; auto-advances focus per box, supports paste and WebOTP autofill.

```vue
<UiInputOtp v-model="code" label="Verification code" @complete="onComplete" />
```

**Props:** `modelValue` (string), `length` (number, default: 6) - number of boxes, `integerOnly` (boolean, default: true) - numeric-only input; set `false` to allow alphanumeric codes, `autofocus` (boolean), plus the common base input props `errorMessages`, `disabled`, `required`, `readonly`, `variant`, `size`, `rounded`, `hideLabel`

**Events:** `update:modelValue`, `onUpdate`, `complete` (fires with the full value once every box is filled)

## Links

### UiLinkTooltip
Link with tooltip on hover.

```vue
<UiLinkTooltip
  href="/path"
  text="Learn more"
  tooltip="Additional information"
/>
```

**Props:**
- `href` (string, required) - Link URL
- `text` (string) - Link text
- `tooltip` (string) - Tooltip content

## Tooltips

### UiTooltip
Generic tooltip wrapper for any trigger (button, link, avatar, icon, …).

```vue
<UiTooltip text="Helpful hint">
  <UiButton variant="outline" text="Hover me" />
</UiTooltip>
```

**Props:**
- `text` (string | null) - Plain-text tooltip content; ignored when the `#content` slot is used
- `placement` (`FloatingPlacement`, default: 'top')
- `disabled` (boolean, default: false)
- `ariaId` (string) - Accessible id for the popper content (auto-generated by floating-vue when omitted)
- `customClass` - Applied to the trigger wrapper element

**Slots:** `default` - trigger element; `content` - rich body content, overrides `text`

**Note:** For a plain button or link needing tooltip + semantics in one component, prefer `UiButtonTooltip` / `UiLinkTooltip` instead.

## Lists

### UiListGroup
Container for list items.

```vue
<UiListGroup>
  <UiListItem>Item 1</UiListItem>
  <UiListItem>Item 2</UiListItem>
  <UiListItem>Item 3</UiListItem>
</UiListGroup>
```

### UiListItem
Individual list item.

```vue
<UiListItem 
  active 
  clickable 
  has-actions
  custom-icon-wrapper-class="bg-primary rounded-full"
  custom-icon-class="text-white"
  @click="handleClick"
>
  <template #icon>
    <UiIconMaterial icon-code="&#xe8b6;" />
  </template>
  List item text
  
  <template #list-action>
    <UiButton icon text="Edit" />
  </template>
</UiListItem>
```

**Props:**
- `active` (boolean) - Highlighted state
- `clickable` (boolean) - Show hover effect
- `disabled` (boolean) - Disables the item; strips `href`/`to` and blocks pointer events in link mode
- `hasActions` (boolean, default: false) - Wraps list item in flex layout to support trailing action templates (and sets `is-undecorated` to true automatically)
- `imageUrl` (string, optional) - Image URL rendered in place of the icon (takes precedence over `icon`); accepts `public/` paths, imported assets, or external URLs
- `imageAlt` (string, optional) - Alt text for the image (defaults to empty/decorative)
- `customImageClass` (string | string[], optional) - Custom CSS classes for the image (e.g. `rounded-full`)
- `customIconClass` (string | string[], optional) - Custom CSS classes for the icon component inside list item
- `customIconWrapperClass` (string | string[], optional) - Custom CSS classes for the list item icon wrapper container
- `to` (string | object, optional) - Navigation destination; activates link mode (the `.list-item` wrapper renders as `as`/`a` instead of a plain `div`)
- `href` (string, optional) - Standard href for link mode (e.g. external links); activates link mode
- `as` (string | object, default: 'a') - Tag/component rendered in link mode (e.g. `'router-link'`, `'nuxt-link'`); ignored unless `to`/`href` is set

**Slots:**
- `media` - Replaces the whole image/icon area with arbitrary content (e.g. `UiIconSvg`)
- `default` - Item content
- `list-action` - Append slot after the list-item content (visible when `hasActions` is true)

```vue
<!-- Image instead of icon -->
<UiListItem
  title="Jane Cooper"
  text="jane.cooper@example.com"
  image-url="/avatars/jane.jpg"
  image-alt="Jane Cooper avatar"
/>

<!-- Navigable row (renders as a link) -->
<UiListItem title="Dashboard" icon="&#xe88a;" to="/dashboard" />
<UiListItem title="Colorffy" icon="&#xe157;" href="https://colorffy.com" />
```

## Navigation

### UiNavigationBar
Bottom navigation bar.

```vue
<UiNavigationBar
  v-model="activeTab"
  :items="[
    { label: 'Home', value: 'home', icon: '&#xe88a;' },
    { label: 'Profile', value: 'profile', icon: '&#xe7fd;' }
  ]"
/>
```

**Props:**
- `modelValue` (string) - Active item value
- `items` (array) - Nav items with `label`, `value`, `icon`

### UiTabs
Horizontal tab navigation.

```vue
<UiTabs
  :tabs="[
    { id: 'inbox', label: 'Inbox', badge: { text: '12', variant: 'primary', pill: true } },
    { id: 'archived', label: 'Archived' }
  ]"
  :active-tab="activeTab"
  @update-active-tab="activeTab = $event"
/>
```

**Props:**
- `activeTab` (string) - Id of the active tab
- `tabs` (array) - Tab items: `{ id, label, disabled?, panelId?, badge?, icon? }`; `badge` accepts `Partial<IBadgeProps>` (`text`, `variant`, `pill`, `iconCode`, ...) rendered after the label; `icon` is a Material Symbols entity code rendered before the label
- `pillTabs` / `contrastTabs` (boolean) - Styling variants
- `fluid` (boolean, default: false) - Stretches every tab to fill the available width equally

The active indicator (underline, or the raised pill with `pillTabs`) is placed and animated with pure CSS anchor positioning; where anchor positioning is unsupported the active tab falls back to its own border/background.

**Emits:**
- `updateActiveTab` (tabId: string) - Fired when a tab is selected

### UiSegmentedControls
Compact segmented switcher with an animated active pill.

```vue
<UiSegmentedControls
  :tabs="[
    { id: 'grid', label: 'Grid' },
    { id: 'list', label: 'List' }
  ]"
  :active-tab="view"
  @update-active-tab="view = $event"
/>
```

**Props:**
- `tabs` (array) - Items: `{ id, label, disabled? }` (`position` is deprecated and ignored)
- `activeTab` (string) - Id of the active tab; defaults to the first tab

**Emits:**
- `updateActiveTab(tabId)` - Fired when a tab is selected

The pill is placed and animated with pure CSS anchor positioning, falling back to a bolder label on a filled background where anchor positioning is unsupported. Same mechanism as `UiTabs` and `UiNavigationBar` — see [component-guide.md](./component-guide.md).

### UiNavbarLink
Link for navbar navigation.

```vue
<UiNavbarLink href="/dashboard" text="Dashboard" active />
```

### UiBreadcrumb
SEO-friendly breadcrumb trail. Pass an ordered `items` list (root → current); the last entry is auto-marked as the current page (`aria-current="page"`, non-link). Emits a schema.org `BreadcrumbList` as inline JSON-LD by default.

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
- `items` (`IBreadcrumbItem[]`) - Entries `{ label, to?, href?, icon?, current? }`; omit `to`/`href` on the current page
- `as` (string | component, default `'a'`) - Polymorphic link (`'a'`, `NuxtLink`, `router-link`)
- `separator` (string, default `'/'`) / `separatorIcon` (string) - Item separator
- `structuredData` (boolean, default `true`) - Emit JSON-LD `BreadcrumbList`; disable to feed your own `useHead`
- `baseUrl` (string) - Origin prefix → absolute URLs in the JSON-LD
- `maxItems` (number, default `0`) - Collapse long trails to first + … + last N (visual only; JSON-LD keeps the full trail)
- `ariaLabel` (string, default `'Breadcrumb'`) - `<nav>` landmark name
- **Emits:** `itemClick(item, index)` · **Slots:** `#item="{ item, index, isCurrent }"`, `#separator`

### UiSidebar (Navigation Drawer)
Composable navigation drawer. It keeps two **independent** states: `rail`
(compact icons-only — a desktop concern, one-way/parent-controlled) and `open`
(the responsive mobile slide-in — supports `v-model:open`). On desktop the
drawer is always visible; `open` only drives the mobile show/hide, and a dimmed
overlay renders while open (emits `update:open` on dismiss).

```vue
<UiSidebar bordered :rail="rail" v-model:open="open" aria-label="Main navigation">
  <UiSidebarHeader>
    <UiSidebarDropdown title="Acme" subtitle="Workspace" />
  </UiSidebarHeader>

  <UiSidebarBody>
    <UiSidebarText text="Platform" />
    <UiSidebarLink :as="NuxtLink" to="/" text="Home" icon="&#xe88a;" tooltip-text="Home" />

    <UiSidebarGroup text="Account" collapsible :default-open="true" icon="&#xe853;">
      <UiSidebarLink :as="NuxtLink" to="/account" text="Profile" icon="&#xe853;" child />
      <UiSidebarLink :as="NuxtLink" to="/notifications" text="Notifications" icon="&#xe7f4;" child />
    </UiSidebarGroup>
  </UiSidebarBody>

  <UiSidebarFooter>
    <UiBadge text="v1.0.0" variant="outline" size="sm" />
  </UiSidebarFooter>
</UiSidebar>
```

**`UiSidebar` props:**
- `rail` (boolean) - Compact icons-only mode (`.drawer-rail`); one-way, no `update:rail` emit
- `open` (boolean) - Responsive mobile drawer (`.drawer-open` / `.drawer-closed`); use `v-model:open`
- `bordered` (boolean) - Right border instead of shadow
- `width` (string) - Sets `--theme-nav-drawer-width`
- `ariaLabel` (string, default `'Main navigation'`) - `<nav>` landmark name
- **Emits:** `update:open` (overlay dismiss)

**Sub-components:** `UiSidebarHeader` / `UiSidebarBody` / `UiSidebarFooter` (regions), `UiSidebarText` (section label), `UiSidebarGroup` (`collapsible`, `defaultOpen`, `icon`, `text`), `UiSidebarLink` (polymorphic `as`, `to`/`href`, `icon`, `child`, `tooltipText`), `UiSidebarDropdown` (`title`, `subtitle`, `interactive`).

> Pair with `UiNavbarToggle` to drive the states: `<UiNavbarToggle :collapsed="open" @toggle="open = !open" />`.

### UiPopoverMenu
Popover menu overlay.

```vue
<UiPopoverMenu :items="menuItems" />
```

## Steppers

### UiStepper
Horizontal or vertical progress indicator for multi-step flows (checkout, onboarding, wizards).

```vue
<UiStepper
  :steps="steps"
  :active-step="activeStep"
  @update-active-step="activeStep = $event"
/>

<!-- Vertical layout -->
<UiStepper :steps="steps" :active-step="activeStep" vertical @update-active-step="activeStep = $event" />

<!-- Linear mode: blocks selecting a step ahead of the current one -->
<UiStepper :steps="steps" :active-step="activeStep" linear @update-active-step="activeStep = $event" />
```

**Props:**
- `steps` (`IStepItem[]`, required) - `{ id, label, description?, icon?, disabled? }`
- `activeStep` (string) - Id of the active step; defaults to the first step
- `vertical` (boolean, default: false) - Renders as a vertical list instead of a horizontal row
- `linear` (boolean, default: false) - Blocks selecting a step ahead of the current one, forcing sequential progression
- `customClass`

**Emits:** `updateActiveStep(stepId)` - Fired when a step is selected

## Tables

### UiDatatable
Data table with type-aware sorting, a column manager, and built-in loading/empty states.

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
  column-manager
>
  <!-- Custom cell: slot name is `cell-<key>`, scoped value is `item` -->
  <template #cell-total="{ item }">
    {{ item.total.toLocaleString() }}
  </template>
</UiDatatable>
```

**Column (`IDatatableColumn`):**
- `key` (string) - Data field on each row; also the sort key and `cell-<key>` slot name
- `label` (string) - Header text shown to the user (decoupled from `key` for i18n)
- `sortable` (boolean) - Per-column sort opt-out; defaults to the table-level `sortable`
- `hidden` (boolean) - Starts hidden; toggleable via the column manager
- `align` ('start' | 'center' | 'end') - Text alignment for the header and cells
- `thClass` / `tdClass` (string) - Custom classes for the header / body cells

**Props:**
- `columns` (`IDatatableColumn[]`) - Column definitions
- `items` (array) - Table data (objects keyed by each column's `key`)
- `sortable` (boolean) - Enable sorting globally
- `defaultSortKey` (string) - Column `key` to sort by initially
- `defaultSortOrder` ('asc' | 'desc') - Initial sort direction
- `columnManager` (boolean) - Show the show/hide column menu
- `isLoading` (boolean) + `skeletonRows` (number) - Built-in loading skeleton
- `rowKey` (string) - Row field used as the stable `v-for` key (falls back to `id`, then index); also the row-selection identity
- `selectable` (boolean, default: false) - Renders a leading checkbox column for row selection. Pair with `v-model:selected`; the header checkbox selects/clears all rows and shows an indeterminate state when only some rows are selected
- `selected` (`(string | number)[]`, default: `[]`) - Selected row identities, bound via `v-model:selected`
- `stickyHeader` (boolean, default: false) - Sticks the header to the top of its scroll container while the body scrolls; wraps the table in `.table-responsive-sticky` (height capped via `--_table-sticky-max-height`, default `32rem`)
- `caption` (string) - Accessible `<caption>` for the table
- `emptyStateTitle` / `emptyStateSubtitle` - Built-in empty state text

```vue
<script setup lang="ts">
import { ref } from 'vue'
const selected = ref<(string | number)[]>([])
</script>

<template>
  <UiDatatable :columns="columns" :items="items" selectable v-model:selected="selected" sticky-header />
</template>
```

**Emits:** `update:selected` (row identities array)

> **Note:** Pagination and filtering are not built in — paginate/filter `items` in the parent and pass the current page.

## Timeline

### UiTimeline
Chronological event feed with dot/icon/image markers and a connector line.

```vue
<UiTimeline :items="[
  { id: '1', title: 'Nuevo despliegue', text: 'Atlas v2.4.0 publicado', time: 'Hace 2 h', icon: '&#xe1b6;', variant: 'success' },
  { id: '2', title: 'Comentario', text: 'Ana respondió en Proyecto Nébula', time: 'Hace 1 día', icon: '&#xe0b9;', variant: 'primary' }
]" />
```

**Props:**
- `items` (`ITimelineItem[]`) - `{ id, title?, text?, time?, icon?, imageUrl?, imageAlt?, variant? }`
- `align` ('start' | 'alternate', default: 'start') - `'alternate'` centers the connector line and zig-zags content left/right
- `customClass`

**Slots:** `item-<id>` - per-item custom body (highest priority); scoped `item` slot (`{ item }`) applied to every item; both fall back to the default title/text/time markup

## State Components

### UiLoading, UiExpressiveLoading, UiShapeLoading

```vue
<UiLoading size="md" color="primary" />
<UiExpressiveLoading />
<UiShapeLoading shape="circle" />
```

**Props:** `size` ('sm' | 'md' | 'lg'), `color`

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
- `customClass` (string | string[] | null, optional) - Extra classes

**Slots:** `action` - call-to-action content (usually a `UiButton`) rendered below the title/subtitle; the legacy `button` slot still works as a fallback

### UiBaseSkeleton, UiGridSkeleton, UiTableSkeleton

```vue
<UiBaseSkeleton width="100%" height="20px" />
<UiGridSkeleton :cols="3" :rows="5" />
<UiTableSkeleton :cols="4" :rows="8" />
```

**Props:** `width`, `height`, `cols`, `rows` (depending on skeleton type)

## Composables

### useToast
Show toast notifications. Pass a `ref` to a mounted `UiAlertToast` instance; returns variant helpers plus a generic `onToastMessage`.

```vue
<script setup lang="ts">
import { useToast } from '@colorffy/ui'
import { ref } from 'vue'

const toastRef = ref(null)
const toast = useToast(toastRef)

toast.success('Success!', { duration: 3000 })
toast.warning('Careful!')
toast.danger('Something went wrong.')
toast.info('Heads up.')
toast.primary('Welcome back!')
</script>

<template>
  <UiAlertToast ref="toastRef" />
</template>
```

### useDateUtils
Date formatting utilities.

```typescript
import { useDateUtils } from '@colorffy/ui'

const dateUtils = useDateUtils()
const formatted = dateUtils.format(new Date(), 'YYYY-MM-DD')
```

### useTextUtils
Text manipulation utilities.

```typescript
import { useTextUtils } from '@colorffy/ui'

const textUtils = useTextUtils()
const slug = textUtils.slugify('Hello World') // 'hello-world'
```

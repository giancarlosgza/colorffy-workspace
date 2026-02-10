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
- [Dialogs](#dialogs)
- [Icons](#icons)
- [Images](#images)
- [Form Inputs](#form-inputs)
- [Links](#links)
- [Lists](#lists)
- [Navigation](#navigation)
- [Tables](#tables)
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
<UiAccordion title="Section Title" name="accordion-group">
  <template #content>
    <p>Accordion content</p>
  </template>
</UiAccordion>
```

**Props:**
- `title` (string, required) - Accordion header text
- `name` (string, required) - Group identifier
- `open` (boolean, default: false) - Initial open state

### UiAccordionGroup
Groups multiple accordion items (allows only one open at a time).

```vue
<UiAccordionGroup>
  <UiAccordion title="Section 1" name="demo">
    <template #content><p>Content 1</p></template>
  </UiAccordion>
  <UiAccordion title="Section 2" name="demo">
    <template #content><p>Content 2</p></template>
  </UiAccordion>
</UiAccordionGroup>
```

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
  :dismissible="true"
/>
```

**Props:**
- `type` ('banner' | 'snackbar' | 'tonal') - Alert style
- `variant` ('success' | 'warning' | 'danger' | 'info') - Alert color
- `title` (string, optional) - Alert heading
- `message` (string, required) - Alert text
- `critical` (boolean, default: false) - High-priority styling
- `dismissible` (boolean, default: false) - Show close button

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
Badge/tag component for labels and counts.

```vue
<UiBadge text="New" variant="filled" color="primary" />
<UiBadge :count="5" variant="outline" color="danger" />
```

**Props:**
- `text` (string) - Badge text
- `count` (number) - Numeric badge (alternative to text)
- `variant` ('filled' | 'outline' | 'tonal')
- `color` ('primary' | 'secondary' | 'success' | 'warning' | 'danger')
- `size` ('sm' | 'md' | 'lg')

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
- `variant` ('filled' | 'tonal' | 'outline' | 'text') - Button style
- `color` ('primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'accent')
- `size` ('sm' | 'md' | 'lg')
- `text` (string) - Button label
- `loading` (boolean) - Show loading spinner
- `disabled` (boolean) - Disable interaction
- `type` ('button' | 'submit' | 'reset')

**Slots:**
- `icon` - Prepend icon before text
- `default` - Custom content (overrides text prop)

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
<UiButtonMenuItem icon="edit" @click="handleEdit">
  Edit Item
</UiButtonMenuItem>
```

**Props:**
- `icon` (string, optional) - Icon code
- `disabled` (boolean)

**Events:**
- `click` - Emitted on click

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
```

**Props:**
- `variant` ('pane' | 'outlined' | 'elevated')
- `padding` (boolean, default: true) - Apply internal padding

**Slots:**
- `header` - Card header section
- `body` - Main content area
- `footer` - Card footer section

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

## Icons

**All icon components share the same props pattern:**
- `iconCode/name/shape/tool` (string, required) - Identifier
- `size` (number, default: 24) - Size in pixels
- `color` (string) - Icon color

### UiIconMaterial

```vue
<UiIconMaterial icon-code="&#xe8b6;" :size="24" color="primary" />
```

### UiIconApp, UiIconShapes, UiIconTool

```vue
<UiIconApp name="settings" :size="24" />
<UiIconShapes shape="circle" :size="24" />
<UiIconTool tool="wrench" :size="24" />
```

## Images

### UiAvatar
User avatar component with fallback.

```vue
<UiAvatar
  src="/path/to/image.jpg"
  alt="John Doe"
  fallback="JD"
  size="md"
  shape="circle"
/>
```

**Props:**
- `src` (string) - Image URL
- `alt` (string) - Alt text
- `fallback` (string) - Text to show if image fails
- `size` ('sm' | 'md' | 'lg' | 'xl') or number (pixels)
- `shape` ('circle' | 'square' | 'rounded')

## Form Inputs

**Common props across all form inputs:**
- `modelValue` - Input value (v-model)
- `label` (string) - Field label
- `placeholder` (string)
- `required` (boolean)
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
<UiInputCheck v-model="agreed" label="I agree to the terms" />
```

**Props:** `modelValue` (boolean), `label`, `disabled`, `color`

### UiInputRadio

```vue
<UiInputRadio v-model="choice" value="option1" label="Option 1" name="radio-group" />
```

**Props:** `modelValue`, `value`, `label`, `name` (required), `disabled`

### UiInputRange

```vue
<UiInputRange v-model="volume" :min="0" :max="100" :step="1" label="Volume" />
```

**Props:** `modelValue` (number), `min` (default: 0), `max` (default: 100), `step` (default: 1)

### UiInputFile

```vue
<UiInputFile v-model="files" label="Upload file" :multiple="false" accept=".jpg,.png,.pdf" />
```

**Props:** `modelValue` (File | File[]), `multiple` (boolean), `accept` (string)

### UiInputColorPicker

```vue
<UiInputColorPicker v-model="color" label="Choose color" />
```

**Props:** `modelValue` (string, hex color)

### UiInputPhoneNumber

```vue
<UiInputPhoneNumber v-model="phone" label="Phone number" :default-country="'US'" />
```

**Props:** `modelValue` (string), `defaultCountry` (ISO country code)

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
<UiListItem active clickable @click="handleClick">
  <template #icon>
    <UiIconMaterial icon-code="&#xe8b6;" />
  </template>
  List item text
</UiListItem>
```

**Props:**
- `active` (boolean) - Highlighted state
- `clickable` (boolean) - Show hover effect
- `disabled` (boolean)

**Slots:**
- `icon` - Prepend icon
- `default` - Item content

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
  v-model="activeTab"
  :tabs="[
    { label: 'Tab 1', value: '1' },
    { label: 'Tab 2', value: '2' }
  ]"
/>
```

**Props:**
- `modelValue` (string) - Active tab value
- `tabs` (array) - Tab items

### UiSegmentedControls
Segmented control switcher.

```vue
<UiSegmentedControls
  v-model="view"
  :options="[
    { label: 'Grid', value: 'grid' },
    { label: 'List', value: 'list' }
  ]"
/>
```

### UiNavbarLink
Link for navbar navigation.

```vue
<UiNavbarLink href="/dashboard" text="Dashboard" active />
```

### UiDrawerLink
Link for drawer/sidebar navigation.

```vue
<UiDrawerLink href="/settings" active>
  <template #icon>
    <UiIconMaterial icon-code="&#xe8b8;" />
  </template>
  Settings
</UiDrawerLink>
```

### UiPopoverMenu
Popover menu overlay.

```vue
<UiPopoverMenu :items="menuItems" />
```

## Tables

### UiDatatable
Advanced data table with sorting, filtering, pagination.

```vue
<UiDatatable
  :columns="[
    { field: 'name', label: 'Name', sortable: true },
    { field: 'email', label: 'Email' },
    { field: 'role', label: 'Role', filterable: true }
  ]"
  :data="users"
  :paginate="true"
  :per-page="10"
/>
```

**Props:**
- `columns` (array) - Column definitions
- `data` (array) - Table data
- `paginate` (boolean) - Enable pagination
- `perPage` (number) - Rows per page
- `sortable` (boolean) - Enable sorting
- `filterable` (boolean) - Enable filtering

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
<UiEmpty title="No data found" message="Try adjusting your filters" icon="&#xe8b6;" />
```

**Props:** `title`, `message`, `icon`

### UiBaseSkeleton, UiGridSkeleton, UiTableSkeleton

```vue
<UiBaseSkeleton width="100%" height="20px" />
<UiGridSkeleton :cols="3" :rows="5" />
<UiTableSkeleton :cols="4" :rows="8" />
```

**Props:** `width`, `height`, `cols`, `rows` (depending on skeleton type)

## Composables

### useToast
Show toast notifications.

```typescript
import { useToast } from '@colorffy/ui'

const toast = useToast()

toast.show({
  message: 'Success!',
  variant: 'success',
  duration: 3000
})
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

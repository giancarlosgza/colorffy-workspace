# @giancarlosgza/colorful-ui

A modern Vue 3 component library built with TypeScript and ColorfulCSS. Features a comprehensive collection of UI components with built-in styling and full TypeScript support.

## Features

✨ **70+ Vue 3 Components** - Accordion, Alerts, Buttons, Cards, Dialogs, Forms, Navigation, and more  
🎨 **ColorfulCSS Integration** - Beautiful, consistent styling out of the box  
📘 **Full TypeScript Support** - Complete type definitions for all components  
🔌 **Flexible Installation** - Use globally or import individually  
🚀 **Tree-shakeable** - Import only what you need  
⚡ **Nuxt 3 Compatible** - Works seamlessly with Nuxt applications

## Installation

```bash
# npm
npm install @giancarlosgza/colorful-ui

# yarn
yarn add @giancarlosgza/colorful-ui

# pnpm
pnpm add @giancarlosgza/colorful-ui
```

### Peer Dependencies

This library requires the following peer dependencies:

```bash
npm install @giancarlosgza/colorfulcss @vueuse/components floating-vue vue
```

> **Note:** ColorfulCSS styles are automatically imported with the library, no need to import separately!

## Usage

### Option 1: Global Registration (Recommended for most cases)

Register all components globally in your `main.ts`:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ColorfulUI from '@giancarlosgza/colorful-ui'

const app = createApp(App)
app.use(ColorfulUI)
app.mount('#app')
```

Then use components anywhere without imports:

```vue
<template>
  <div>
    <UiButton variant="filled" color="primary" text="Click me!" />
    <UiCard>
      <template #body>
        <h2>Card Content</h2>
      </template>
    </UiCard>
  </div>
</template>
```

### Option 2: Individual Component Imports (Better for tree-shaking)

Import only the components you need:

```vue
<script setup lang="ts">
import { UiButton, UiCard, UiAlert } from '@giancarlosgza/colorful-ui'
</script>

<template>
  <div>
    <UiButton variant="filled" color="primary" text="Click me!" />
    <UiCard>
      <template #body>
        <h2>Card Content</h2>
      </template>
    </UiCard>
    <UiAlert 
      type="banner" 
      variant="success" 
      message="Operation successful!" 
    />
  </div>
</template>
```

### Option 3: Selective Global Registration

Register only specific components globally:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import { UiButton, UiCard, UiAlert } from '@giancarlosgza/colorful-ui'

const app = createApp(App)

// Register only needed components
app.component('UiButton', UiButton)
app.component('UiCard', UiCard)
app.component('UiAlert', UiAlert)

app.mount('#app')
```

## Nuxt 3 Usage

### Global Registration with Nuxt Plugin

Create a plugin file `plugins/colorful-ui.ts`:

```typescript
import ColorfulUI from '@giancarlosgza/colorful-ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ColorfulUI)
})
```

Then use components anywhere in your Nuxt app without imports:

```vue
<template>
  <div>
    <UiButton variant="filled" color="primary" text="Click me!" />
    <UiCard>
      <template #body>
        <h2>Card Content</h2>
      </template>
    </UiCard>
  </div>
</template>
```

### Individual Component Imports in Nuxt

Import components directly in your pages/components:

```vue
<script setup lang="ts">
import { UiButton, UiCard, UiAlert } from '@giancarlosgza/colorful-ui'
</script>

<template>
  <div>
    <UiButton variant="filled" color="primary" text="Click me!" />
    <UiCard>
      <template #body>
        <h2>Card Content</h2>
      </template>
    </UiCard>
  </div>
</template>
```

### Auto-imports (Optional)

To enable auto-imports in Nuxt, add to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  components: [
    {
      path: 'node_modules/@giancarlosgza/colorful-ui/dist',
      pattern: '**/*.vue',
      pathPrefix: false,
    }
  ]
})
```

> **Note:** With Nuxt, the CSS is automatically handled. No need for additional configuration!

## Component Categories

### Layout Components
- `UiHeaderContent` - Page header with title and subtitle
- `UiPaneContent` - Content container/pane

### UI Components

#### Accordion
- `UiAccordion` - Single accordion item
- `UiAccordionGroup` - Group of accordion items

#### Alerts
- `UiAlert` - Alert/notification component
- `UiAlertToast` - Toast notification

#### Badges
- `UiBadge` - Badge/tag component
- `UiBadgeGroup` - Group of badges

#### Buttons
- `UiButton` - Standard button
- `UiButtonMenu` - Button with dropdown menu
- `UiButtonMenuDivider` - Menu divider
- `UiButtonMenuItem` - Menu item
- `UiButtonMenuText` - Menu text item
- `UiButtonToggleGroup` - Toggle button group
- `UiButtonTooltip` - Button with tooltip

#### Cards
- `UiCard` - Card container

#### Dialogs
- `UiModal` - Modal dialog
- `UiConfirmModal` - Confirmation modal

#### Icons
- `UiIconApp` - Application icons
- `UiIconMaterial` - Material Design icons
- `UiIconShapes` - Shape icons
- `UiIconTool` - Tool icons

#### Images
- `UiAvatar` - Avatar component

#### Form Inputs
- `UiInputCheck` - Checkbox input
- `UiInputColorPicker` - Color picker
- `UiInputFile` - File upload
- `UiInputPhoneNumber` - Phone number input
- `UiInputRadio` - Radio button
- `UiInputRange` - Range slider
- `UiInputSelect` - Select dropdown
- `UiInputText` - Text input
- `UiInputTextarea` - Textarea input

#### Links
- `UiLinkTooltip` - Link with tooltip

#### Lists
- `UiListGroup` - List container
- `UiListItem` - List item

#### Navigation
- `UiDrawerLink` - Drawer navigation link
- `UiNavbarLink` - Navbar link
- `UiNavigationBar` - Navigation bar
- `UiPopoverMenu` - Popover menu
- `UiSegmentedControls` - Segmented control
- `UiTabs` - Tab navigation

#### Tables
- `UiDatatable` - Data table component

### State Components
- `UiBaseSkeleton` - Basic skeleton loader
- `UiEmpty` - Empty state
- `UiExpressiveLoading` - Expressive loading animation
- `UiGridSkeleton` - Grid skeleton loader
- `UiLoading` - Loading spinner
- `UiShapeLoading` - Shape loading animation
- `UiTableSkeleton` - Table skeleton loader

## Composables

The library also exports useful composables:

```typescript
import { useToast, useDateUtils, useTextUtils } from '@giancarlosgza/colorful-ui'

// Show toast notification
const toast = useToast()
toast.show({ message: 'Success!', variant: 'success' })

// Date utilities
const dateUtils = useDateUtils()

// Text utilities
const textUtils = useTextUtils()
```

## Component Examples

### Button

```vue
<template>
  <!-- Filled buttons -->
  <UiButton variant="filled" text="Primary" />
  <UiButton variant="filled" color="success" text="Success" />
  <UiButton variant="filled" color="danger" text="Danger" />
  
  <!-- Tonal buttons -->
  <UiButton variant="tonal" color="primary" text="Tonal" />
  
  <!-- Outline buttons -->
  <UiButton variant="outline" text="Outline" />
  
  <!-- With icon -->
  <UiButton variant="filled" text="With Icon">
    <template #icon>
      <UiIconMaterial icon-code="&#xe000;" />
    </template>
  </UiButton>
  
  <!-- Sizes -->
  <UiButton variant="filled" size="sm" text="Small" />
  <UiButton variant="filled" size="md" text="Medium" />
  <UiButton variant="filled" size="lg" text="Large" />
  
  <!-- Loading state -->
  <UiButton variant="filled" :loading="true" text="Loading" />
</template>
```

### Alert

```vue
<template>
  <UiAlert 
    type="banner"
    variant="success"
    title="Success!"
    message="Your operation completed successfully."
  />
  
  <UiAlert 
    type="snackbar"
    variant="warning"
    message="Warning message"
  />
  
  <UiAlert 
    type="tonal"
    variant="danger"
    title="Error"
    message="Something went wrong."
    :critical="true"
  />
</template>
```

### Card

```vue
<template>
  <UiCard variant="pane">
    <template #body>
      <h3>Card Title</h3>
      <p>Card content goes here...</p>
    </template>
  </UiCard>
</template>
```

### Accordion

```vue
<template>
  <UiAccordionGroup>
    <UiAccordion title="Section 1" name="accordion-demo">
      <template #content>
        <p>Content for section 1</p>
      </template>
    </UiAccordion>
    
    <UiAccordion title="Section 2" name="accordion-demo">
      <template #content>
        <p>Content for section 2</p>
      </template>
    </UiAccordion>
  </UiAccordionGroup>
</template>
```

### Form Inputs

```vue
<template>
  <UiInputText 
    v-model="name"
    label="Name"
    placeholder="Enter your name"
  />
  
  <UiInputSelect
    v-model="selected"
    :options="options"
    label="Choose option"
  />
  
  <UiInputCheck
    v-model="agree"
    label="I agree to terms"
  />
</template>
```

## TypeScript Support

All components come with full TypeScript support. Import types as needed:

```typescript
import type { 
  ButtonVariant, 
  ButtonColor, 
  AlertType,
  AlertVariant 
} from '@giancarlosgza/colorful-ui'

// Use in your components
const variant: ButtonVariant = 'filled'
const color: ButtonColor = 'primary'
```

## Styling

The library uses ColorfulCSS for styling, which is automatically imported. The CSS includes:
- Modern, responsive design
- Consistent color palette
- Utility classes
- Customizable themes

No additional CSS imports are needed - everything is bundled with the library!

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

ISC

## Author

Giancarlos Garza

## Links

- [npm Package](https://www.npmjs.com/package/@giancarlosgza/colorful-ui)
- [ColorfulCSS](https://www.npmjs.com/package/@giancarlosgza/colorfulcss)

---

Made with ❤️ using Vue 3 and TypeScript

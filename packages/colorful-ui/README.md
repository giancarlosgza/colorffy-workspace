# @colorful/ui

A modern Vue 3 component library built with TypeScript. Features a comprehensive collection of **unstyled, headless UI components** with full TypeScript support. Designed to work seamlessly with **ColorfulCSS** (optional) or your own custom styles.

## Features

✨ **70+ Vue 3 Components** - Accordion, Alerts, Buttons, Cards, Dialogs, Forms, Navigation, and more  
🎨 **Style-Agnostic** - Use with ColorfulCSS or bring your own styles  
📘 **Full TypeScript Support** - Complete type definitions for all components  
🔌 **Flexible Installation** - Use globally or import individually  
🚀 **Tree-shakeable** - Import only what you need  
⚡ **Nuxt 3 Compatible** - Works seamlessly with Nuxt applications  
🎯 **Headless Architecture** - Full control over styling and behavior

## Installation

### Install ColorfulUI

```bash
# npm
npm install @colorful/ui

# yarn
yarn add @colorful/ui

# pnpm
pnpm add @colorful/ui
```

### Install Peer Dependencies

ColorfulUI requires the following peer dependencies:

```bash
npm install @vueuse/components floating-vue vue
```

### Install ColorfulCSS (Optional, Recommended)

For pre-built, beautiful styling that works out of the box:

```bash
npm install @colorful/css
```

> **Note:** ColorfulUI components are **unstyled by default**. You can use ColorfulCSS for instant styling, or provide your own custom styles.

## Styling Options

### Option 1: Use ColorfulCSS (Recommended)

Import the compiled CSS in your `main.ts`:

```typescript
import { createApp } from 'vue'
import '@colorful/css' // Import styles
import ColorfulUI from '@colorful/ui'
import App from './App.vue'

const app = createApp(App)
app.use(ColorfulUI)
app.mount('#app')
```

### Option 2: Customize ColorfulCSS with SCSS

For full customization, use SCSS to override variables:

```scss
// src/assets/variables.scss
// Override ColorfulCSS variables
@forward '@colorful/css/scss/abstracts/variables' with (
  $primary: #4f46e5,
  $secondary: #ec4899,
  $accent: #0ea5e9,
);

// Import the framework
@use '@colorful/css/scss/main';
```

```scss
// src/assets/main.scss
@use 'variables' as *;

// Your custom styles
:root {
  --custom-var: value;
}
```

```typescript
// main.ts
import { createApp } from 'vue'
import './assets/main.scss' // Import customized styles
import ColorfulUI from '@colorful/ui'
import App from './App.vue'

const app = createApp(App)
app.use(ColorfulUI)
app.mount('#app')
```

### Option 3: Custom Styles

Use ColorfulUI components without any styling framework. Components use semantic class names like `.btn`, `.card`, `.alert`, etc. that you can style however you want:

```css
/* your-custom-styles.css */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  /* Your custom button styles */
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  /* Your custom card styles */
}
```

For more details on ColorfulCSS customization, see the [ColorfulCSS README](https://www.npmjs.com/package/@colorful/css).

## Usage

### Option 1: Global Registration (Recommended for most cases)

Register all components globally in your `main.ts`:

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import ColorfulUI from '@colorful/ui'

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
import { UiButton, UiCard, UiAlert } from '@colorful/ui'

const app = createApp(App)

// Register only needed components
app.component('UiButton', UiButton)
app.component('UiCard', UiCard)
app.component('UiAlert', UiAlert)

app.mount('#app')
```

## Nuxt 3 Usage

### Install Dependencies

```bash
npm install @colorful/ui @colorful/css
```

### Setup with ColorfulCSS

Add ColorfulCSS to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  css: ['@colorful/css'],
})
```

### Global Registration with Nuxt Plugin

Create a plugin file `plugins/colorful-ui.ts`:

```typescript
import ColorfulUI from '@colorful/ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ColorfulUI)
})
```

### Customize with SCSS (Advanced)

For full SCSS customization in Nuxt:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/variables.scss" as *;'
        }
      }
    }
  }
})
```

```scss
// assets/scss/variables.scss
@forward '@colorful/css/scss/abstracts/variables' with (
  $primary: #4f46e5,
  $secondary: #ec4899,
  $accent: #0ea5e9,
);

@use '@colorful/css/scss/main';
```

Then use components anywhere in your Nuxt app:

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
      path: 'node_modules/@colorful/ui/dist',
      pattern: '**/*.vue',
      pathPrefix: false,
    }
  ]
})
```

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
import { useToast, useDateUtils, useTextUtils } from '@colorful/ui'

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
} from '@colorful/ui'

// Use in your components
const variant: ButtonVariant = 'filled'
const color: ButtonColor = 'primary'
```

## Styling

### With ColorfulCSS (Recommended)

ColorfulUI is designed to work seamlessly with ColorfulCSS, which provides:
- Modern, responsive design system
- Consistent color palette with tonal variants
- Pre-built component styles
- Utility classes for rapid development
- Customizable themes with SCSS variables

Install ColorfulCSS and import it in your app:

```bash
npm install @colorful/css
```

```typescript
// main.ts
import '@colorful/css'
```

### Custom Styling

All components use semantic class names that you can style:

```css
/* Component classes */
.btn { /* Button styles */ }
.btn.btn-filled { /* Filled variant */ }
.btn.btn-primary { /* Primary color */ }

.card { /* Card styles */ }
.card.card-pane { /* Pane variant */ }

.alert { /* Alert styles */ }
.alert.alert-success { /* Success variant */ }

/* And more... */
```

### CSS Variable Overrides

Override CSS custom properties for runtime theming:

```css
:root {
  /* Theme colors */
  --theme-primary-base: #4f46e5;
  --theme-secondary-base: #ec4899;
  
  /* Component variables */
  --_btn-radius: 50px;
  --_card-bg-color: #ffffff;
}
```

For complete styling documentation, see the [ColorfulCSS README](https://www.npmjs.com/package/@colorful/css).

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

- [npm Package](https://www.npmjs.com/package/@colorful/ui)
- [ColorfulCSS](https://www.npmjs.com/package/@colorful/css)

---

Made with ❤️ using Vue 3 and TypeScript

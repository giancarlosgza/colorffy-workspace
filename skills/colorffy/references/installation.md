# Installation & Setup

Quick start guides for installing and configuring Colorffy in Vue 3 and Nuxt 3 projects.

## Package Overview

**@colorffy/ui**
- 70+ Vue 3 components (buttons, forms, cards, dialogs, navigation, tables, etc.)
- Unstyled/headless by default - full control over styling
- TypeScript support with complete type definitions
- Tree-shakeable - import only what you need

**@colorffy/css**
- Expressive SCSS framework with tonal color system
- Complete utility class library
- Flexible grid and flexbox layout systems
- Dark mode support built-in

**Peer Dependencies:**
- `@vueuse/components` - Composition utilities
- `floating-vue` - Tooltip/popover positioning
- `vue` (3.5+) - Vue framework

## Vue 3 Setup

### Option 1: With Colorffy CSS (Recommended)

```bash
# Install packages
npm install @colorffy/ui @colorffy/css
npm install @vueuse/components floating-vue
```

```typescript
// main.ts
import { createApp } from 'vue'
import ColorffyUI from '@colorffy/ui'
import App from './App.vue'
import '@colorffy/css' // Import compiled CSS

const app = createApp(App)
app.use(ColorffyUI)
app.mount('#app')
```

### Option 2: With Custom SCSS

```scss
// src/assets/variables.scss
// Optional: compile-time component defaults
@forward '@colorffy/css/scss/abstracts/variables' with (
  $button-border-radius: 4px,
  $card-border-radius: 8px,
);

@use '@colorffy/css/scss/main';

// Theme colors and fonts are CSS tokens (-500 = light mode, -50 = dark mode)
:root {
  --cffy-color-brand-primary-500: oklch(45% 0.2 275);
  --cffy-color-brand-primary-50: oklch(90% 0.06 275);
  --cffy-font-primary: 'Inter', sans-serif;
}
```

```typescript
// main.ts
import { createApp } from 'vue'
import ColorffyUI from '@colorffy/ui'
import App from './App.vue'
import './assets/variables.scss' // Import customized SCSS

const app = createApp(App)
app.use(ColorffyUI)
app.mount('#app')
```

Configure Vite for SCSS:

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/assets/variables.scss" as *;'
      }
    }
  }
})
```

### Option 3: Individual Component Imports

Better tree-shaking for smaller bundles:

```vue
<script setup lang="ts">
import { UiButton, UiCard, UiAlert } from '@colorffy/ui'
</script>

<template>
  <UiButton variant="filled" color="primary" text="Click me!" />
  <UiCard>
    <template #body>
      <p>Card content</p>
    </template>
  </UiCard>
</template>
```

Import CSS separately:

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import '@colorffy/css'

createApp(App).mount('#app')
```

## Nuxt 3 Setup

### Option 1: Global Registration with Colorffy CSS

```bash
# Install packages
npm install @colorffy/ui @colorffy/css
npm install @vueuse/components floating-vue
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@colorffy/css']
})
```

```typescript
// plugins/colorffy-ui.ts
import ColorffyUI from '@colorffy/ui'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ColorffyUI)
})
```

### Option 2: With Custom SCSS

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: [
    '@/assets/scss/integrations.scss',
    '@/assets/scss/main.scss'
  ]
})
```

```scss
// assets/scss/variables.scss: compile-time component defaults
@forward '@colorffy/css/scss/abstracts/variables' with (
  $button-border-radius: 4px !default,
  $card-border-radius: 8px !default,
);
```

```scss
// assets/scss/main.scss: theme colors and fonts are CSS tokens (-500 light, -50 dark)
:root {
  --cffy-color-brand-primary-500: oklch(45% 0.2 275);
  --cffy-color-brand-primary-50: oklch(90% 0.06 275);
  --cffy-font-primary: 'Inter', sans-serif;
}
```

### Option 3: Auto-Import Components (Nuxt)

Configure auto-imports for better DX:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  components: [
    {
      path: '~/node_modules/@colorffy/ui',
      prefix: 'Ui',
      extensions: ['.vue']
    }
  ]
})
```

Use components without imports:

```vue
<template>
  <!-- Components auto-imported -->
  <UiButton text="Click me" />
  <UiCard>
    <template #body>Auto-imported!</template>
  </UiCard>
</template>
```

## Import Strategies

### Global Registration

**Pros:** Convenient, all components available everywhere
**Cons:** Larger bundle size, harder tree-shaking
**Best for:** Apps using many components throughout

```typescript
app.use(ColorffyUI) // All components registered
```

### Individual Imports

**Pros:** Better tree-shaking, smaller bundles
**Cons:** Need explicit imports in each file
**Best for:** Apps prioritizing bundle size

```vue
<script setup>
import { UiButton, UiCard } from '@colorffy/ui'
</script>
```

### Selective Global Registration

**Pros:** Balance between convenience and bundle size
**Cons:** Need to manage registration
**Best for:** Apps with commonly used components

```typescript
// main.ts
import { UiButton, UiCard, UiAlert } from '@colorffy/ui'

app.component('UiButton', UiButton)
app.component('UiCard', UiCard)
app.component('UiAlert', UiAlert)
```

## TypeScript Configuration

Recommended tsconfig.json settings:

```json
{
  "compilerOptions": {
    "types": ["@colorffy/ui"],
    "moduleResolution": "bundler",
    "strict": true
  }
}
```

For better IDE support:

```typescript
// Import types explicitly
import type { ButtonVariant, AlertType } from '@colorffy/ui'
```

## Troubleshooting

### Peer Dependency Warnings

```bash
# Install all peer dependencies
npm install @vueuse/components floating-vue vue
```

Check version compatibility:
- Vue 3.5+
- Nuxt 4.2+ (if using Nuxt)

### SCSS Not Compiling

Ensure SCSS preprocessor is installed:

```bash
npm install -D sass
```

Verify Vite/Nuxt config has SCSS preprocessor options.

### Components Not Styled

1. Check CSS import: `import '@colorffy/css'`
2. Verify import order (CSS after Vue but before components)
3. Check browser devtools for CSS loading

### Tree-Shaking Issues

1. Use individual imports instead of global registration
2. Verify `sideEffects: false` in package.json
3. Check build tool import analysis

### Auto-Import Not Working (Nuxt)

1. Verify components directory configuration
2. Restart Nuxt dev server
3. Check `.nuxt/components.d.ts` is generated

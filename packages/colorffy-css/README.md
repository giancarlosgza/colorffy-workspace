# @colorffy/css

[![npm version](https://img.shields.io/npm/v/@colorffy/css?color=blue&label=npm&logo=npm&style=flat-square)](https://www.npmjs.com/package/@colorffy/css)
[![CI](https://img.shields.io/github/actions/workflow/status/giancarlosgza/colorffy-workspace/ci.yml?branch=main&label=CI&logo=github&style=flat-square)](https://github.com/giancarlosgza/colorffy-workspace/actions/workflows/ci.yml)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@colorffy/css?style=flat-square)](https://bundlephobia.com/package/@colorffy/css)
[![license](https://img.shields.io/npm/l/@colorffy/css?style=flat-square)](https://github.com/giancarlosgza/colorffy-workspace/blob/main/LICENSE)

An expressive SCSS framework for building vibrant and beautiful user interfaces. Colorffy CSS brings your designs to life with dynamic theming, vivid gradients, and a powerful tonal color system.

## ✨ Features

- 🎨 **Powerful Tonal Color System** - Dynamic color generation with variants
- 🌈 **Vivid Gradients** - Beautiful gradient utilities
- 🎭 **Dark Mode Support** - Built-in dark theme with smooth transitions
- 📦 **Modular Architecture** - Import only what you need
- 🚀 **Lightweight** - Optimized for performance
- 💪 **TypeScript Ready** - Full type definitions included
- 🎯 **Modern CSS** - Uses CSS custom properties (variables)
- 🔧 **Customizable** - Override any variable or mixin

## 📦 Installation

### NPM

```bash
npm install @colorffy/css
```

### PNPM

```bash
pnpm add @colorffy/css
```

### Yarn

```bash
yarn add @colorffy/css
```

## 🚀 Usage

### Import Compiled CSS

The easiest way to use Colorffy CSS is to import the compiled CSS file:

```javascript
// In your main JavaScript file
import '@colorffy/css'
```

```css
/* In your CSS file */
@import '@colorffy/css';
```

### Use Minified Version

For production builds, use the minified version:

```javascript
import '@colorffy/css/css/min'
```

### Import SCSS Source

Import the full SCSS framework:

```scss
// Import the complete framework
@use '@colorffy/css/scss/main';
```

### Customize SCSS Variables

Use `@forward` to override variables before importing:

```scss
// your-variables.scss
// Override variables using @forward
@forward '@colorffy/css/scss/abstracts/variables' with (
  $primary: #4f46e5,
  $secondary: #ec4899,
  $accent: #0ea5e9,
);

// Then import the full framework
@use '@colorffy/css/scss/main';
```

### Import Specific SCSS Modules

Import only the modules you need:

```scss
// Import specific components
@use '@colorffy/css/scss/components/button';
@use '@colorffy/css/scss/components/card';

// Import specific utilities
@use '@colorffy/css/scss/utilities/colors';
@use '@colorffy/css/scss/utilities/spacing';

// Import abstracts (variables, mixins, functions)
@use '@colorffy/css/scss/abstracts/variables' as vars;
@use '@colorffy/css/scss/abstracts/mixins' as mix;

// Use them in your styles
.custom-button {
  background: vars.$primary;
  @include mix.flex-center;
}
```

### Framework Integration

#### Vue 3

**Option 1: Import Compiled CSS**
```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import '@colorffy/css'

createApp(App).mount('#app')
```

**Option 2: Customize with SCSS**
```scss
// src/assets/variables.scss
// Override Colorffy CSS variables
@forward '@colorffy/css/scss/abstracts/variables' with (
  $primary: #4f46e5,
  $secondary: #ec4899,
  $accent: #0ea5e9,
);

// Import the full framework
@use '@colorffy/css/scss/main';
```

```scss
// src/assets/main.scss
@use 'variables' as *;

// Your custom styles
:root {
  --custom-var: value;
}
```

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.scss'

createApp(App).mount('#app')
```

#### Nuxt 3

**Option 1: Import Compiled CSS**
```javascript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@colorffy/css']
})
```

**Option 2: Customize with SCSS**
```javascript
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

#### Vite

```javascript
// main.js
import '@colorffy/css'
```

#### React

```javascript
// index.js or App.js
import '@colorffy/css'
```

## 🎨 Components & Utilities

Colorffy CSS includes styles for:

### Components
- Accordion
- Alert / Banner / Snackbar
- Badge
- Button
- Card
- Dialog / Modal
- Dropdown
- Image / Avatar
- List
- Progress
- Tabs
- Tooltip

### Layout
- Flex Container
- Grid Container
- Form Controls
- Input Groups
- Navbar
- Sidebar
- Header / Footer

### Utilities
- Colors & Gradients
- Spacing (margin, padding)
- Typography
- Display & Visibility
- Flexbox
- Position
- Borders
- Shadows
- Filters
- Transforms
- And more...

## 🎨 Color System

Colorffy CSS includes a powerful tonal color system:

```html
<!-- Primary colors -->
<div class="bg-primary">Primary</div>
<div class="text-primary">Dark variant</div>
<div class="border border-primary">Light variant</div>

<!-- Semantic colors -->
<div class="bg-success">Success</div>
<div class="bg-warning">Warning</div>
<div class="bg-danger">Danger</div>

<!-- Tonal variants -->
<div class="bg-primary-fixed">Tonal Primary</div>
<div class="bg-gradient">Gradient Primary</div>
```

## 📖 Documentation

For complete documentation, examples, and API reference, visit:
- [GitHub Repository](https://github.com/giancarlosgza/colorffy-ui)
- [Component Library Storybook](https://giancarlosgza.github.io/colorffy-ui)

## 🛠️ Customization

### Override Variables with @forward

The recommended way to customize Colorffy CSS is using `@forward` to override SCSS variables:

```scss
// variables.scss
// Step 1: Forward variables with your custom values
@forward '@colorffy/css/scss/abstracts/variables' with (
  $primary: #4f46e5,
  $secondary: #ec4899,
  $accent: #0ea5e9,
);

// Step 2: Import the main framework
@use '@colorffy/css/scss/main';
```

**Available Variables to Override:**
```scss
// Colors
$primary: #002678;
$secondary: #0075d6;
$accent: #fda001;

// Typography (defined in abstracts/_variables.scss)
$font-primary: 'Your Font Family';
$font-secondary: 'Your Font Family';

// Spacing (defined in abstracts/_variables.scss)
// Border radius, shadows, etc.
```

### Use Mixins & Functions

```scss
@use '@colorffy/css/scss/abstracts/mixins' as mix;
@use '@colorffy/css/scss/abstracts/functions' as fn;

.your-element {
  @include mix.flex-center;
  @include mix.glass-effect;
  @include mix.text-gradient(45deg, (#ff0080, #ff8c00));

  // Use color functions
  background: fn.tonal-color($primary, 10);
}
```

### Runtime Customization with CSS Variables

Override CSS custom properties at runtime:

```css
:root {
  /* Override theme colors */
  --theme-primary-base: #your-color;
  --theme-secondary-base: #your-color;

  /* Override component variables */
  --_btn-radius: 50px;
  --_card-bg-color: #your-bg;
}
```

## 📦 Package Exports

```json
{
  ".": {
    "sass": "./scss/main.scss",
    "style": "./dist/colorffy.css",
    "default": "./dist/colorffy.css"
  },
    "./scss": "./scss/main.scss",
    "./scss/*": "./scss/*",
    "./css": "./dist/colorffy.css",
    "./css/min": "./dist/colorffy.min.css"
}
```

**What you can import:**
- `@colorffy/css` - Compiled CSS (default)
- `@colorffy/css/scss` - Main SCSS entry point
- `@colorffy/css/scss/main` - Main SCSS file
- `@colorffy/css/scss/abstracts/variables` - Variables module
- `@colorffy/css/scss/abstracts/mixins` - Mixins module
- `@colorffy/css/scss/components/*` - Individual components
- `@colorffy/css/scss/utilities/*` - Individual utilities
- `@colorffy/css/css` - Compiled CSS (expanded)
- `@colorffy/css/css/min` - Compiled CSS (minified)

## 🏗️ Build

If you clone the repository and want to build from source:

```bash
# Build both expanded and minified versions
pnpm build

# Build only expanded version
pnpm build:expanded

# Build only minified version
pnpm build:minified

# Watch for changes
pnpm watch
```

## 📄 License

MIT © [Giancarlos Garza](https://github.com/giancarlosgza)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/giancarlosgza/colorffy-workspace/issues).

## ⭐ Show your support

- [Colorffy UI](https://www.npmjs.com/package/@colorffy/ui)
- [Colorffy CSS](https://www.npmjs.com/package/@colorffy/css)

Give a ⭐️ if this project helped you!

---

Made with ❤️ by [Giancarlos Garza](https://github.com/giancarlosgza) using Vue 3 and TypeScript.

Powered by [Colorffy](https://colorffy.com) 🎨
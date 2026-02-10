# Theming & Customization

Guide to customizing Colorffy CSS colors, typography, spacing, and other design tokens.

## Color System

Colorffy uses a **tonal color system** with semantic token naming for intuitive theming.

### Theme Colors

**Primary colors:**
- `$primary` - Main brand color
- `$secondary` - Secondary brand color
- `$accent` - Accent/highlight color

**Semantic colors:**
- `$success` - Success states (green)
- `$warning` - Warning states (yellow/orange)
- `$danger` - Error/danger states (red)
- `$info` - Informational states (blue)

**Neutral colors:**
- `$dark` - Dark text and backgrounds
- `$light` - Light backgrounds and text
- `$muted` - Muted/disabled text
- `$white` - White color

### Customizing Colors

#### SCSS Variables (Compile-time)

```scss
// assets/scss/abstracts/_variables.scss
/**
 * Override Colorffy CSS variables
 */
@forward '@colorffy/css/scss/abstracts/variables' with (
  // Theme colors
  $primary: #002662,
  $secondary: #22cbff,
  $accent: #0ee9a0,
  
  // Component tokens
  $card-border-radius: 8px,
  $form-border-radius: 4px,
  $button-border-radius: 4px,
  $dialog-border-radius: 8px
);
```

#### CSS Custom Properties (Runtime)

Override at runtime with CSS variables:

```css
:root {
  /* Theme colors - Base variants */
  --theme-primary-base: #002662;
  --theme-secondary-base: #22cbff;
  --theme-accent-base: #0ee9a0;
  --theme-surface-base: #ffffff;
  --theme-on-secondary: #ffffff;
  
  /* Fonts */
  --font-primary: 'Host Grotesk', sans-serif;
  --font-secondary: 'Geist Mono', monospace;
}
```

### Tonal Variants

Colorffy automatically generates tonal variants for each color:

```html
<!-- Solid background -->
<div class="bg-primary">Primary background</div>

<!-- Tonal (35% opacity) -->
<div class="bg-primary-fixed">Tonal primary</div>

<!-- Emphasis (darker) -->
<div class="bg-primary-emphasis">Emphasis primary</div>

<!-- Custom opacity -->
<div class="bg-primary-fixed bg-opacity-50">50% opacity</div>
```

## Dark Mode

### CSS Variables

Colorffy CSS uses semantic CSS variables for dark mode support. Toggle the `.dark-mode` class on a root element (like `<html>` or `<body>`).

```css
/* Define dark mode colors */
.dark-mode {
  --theme-primary-base: #c4dbff;
  --theme-secondary-base: #90deff;
  --theme-accent-base: #90ffda;
  --theme-surface-base: #000000;
  --theme-on-secondary: #000000;
}
```

### Manual Dark Mode Toggle

Implement a toggle in Vue:

```vue
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
}

watch(isDark, (dark) => {
  document.documentElement.classList.toggle('dark-mode', dark)
})

onMounted(() => {
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
  }
})
</script>

<template>
  <button @click="toggleDark">
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>
```

## Typography

### Font Families

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $font-family-primary: ('Inter', sans-serif),
  $font-family-secondary: ('Georgia', serif),
  $font-family-mono: ('Fira Code', monospace)
);
```

### Font Sizes

Colorffy uses a numeric sizing scale:

```scss
$font-sizes: (
  100: 0.75rem,   // Extra small
  200: 0.875rem,  // Small
  300: 1rem,      // Base
  400: 1.125rem,  // Medium
  500: 1.25rem,   // Large
  600: 1.5rem     // Extra large
);
```

Override specific sizes:

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $fs-100: 0.625rem,
  $fs-600: 2rem
);
```

### Font Weights

```scss
$font-weights: (
  400: 400,  // Normal
  500: 500,  // Medium
  600: 600,  // Semibold
  700: 700,  // Bold
  800: 800   // Extrabold
);
```

## Spacing Scale

Customize spacing values used by margin, padding, and gap utilities:

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $spacing-0: 0,
  $spacing-1: 0.25rem,
  $spacing-2: 0.5rem,
  $spacing-3: 1rem,
  $spacing-4: 1.5rem,
  $spacing-5: 3rem
);
```

## Border Radius

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $rounded-none: 0,
  $rounded-sm: 0.125rem,
  $rounded-md: 0.375rem,
  $rounded-lg: 0.5rem,
  $rounded-xl: 1rem,
  $rounded-full: 9999px
);
```

## Shadows

```scss
$shadows: (
  none: none,
  sm: 0 1px 2px rgba(0, 0, 0, 0.05),
  md: 0 4px 6px rgba(0, 0, 0, 0.1),
  lg: 0 10px 15px rgba(0, 0, 0, 0.1),
  xl: 0 20px 25px rgba(0, 0, 0, 0.15)
);
```

## Breakpoints

Customize responsive breakpoints:

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $breakpoint-sm: 576px,
  $breakpoint-md: 768px,
  $breakpoint-lg: 992px,
  $breakpoint-xl: 1200px,
  $breakpoint-xxl: 1400px
);
```

## Container Widths

```scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $container-max-widths: (
    sm: 540px,
    md: 720px,
    lg: 960px,
    xl: 1140px,
    xxl: 1320px
  )
);
```
Recommended folder structure for scalable theming:

### 1. Variables Override (`abstracts/_variables.scss`)

Use this to configure SCSS compile-time variables and component tokens.

```scss
// assets/scss/abstracts/_variables.scss
$custom-rounded-sm: 4px;
$custom-rounded-md: 8px;

@forward '@colorffy/css/scss/abstracts/variables' with (
    // Brand colors
    $primary: #002662,
    $secondary: #22cbff,
    $accent: #0ee9a0,

    // Component overrides
    $card-border-radius: $custom-rounded-sm,
    $form-border-radius: $custom-rounded-md,
    $button-border-radius: $custom-rounded-sm,
    $dialog-border-radius: $custom-rounded-md
);
```

### 2. Root Styles (`abstracts/_roots.scss`)

Use this to import the framework and define runtime CSS variables (fonts, themes).

```scss
// assets/scss/abstracts/_roots.scss
@use '@colorffy/css/scss/main';

:root {
    --theme-primary-base: #002662;
    --theme-secondary-base: #22cbff;
    --theme-accent-base: #0ee9a0;
    --theme-surface-base: #ffffff;
    --theme-on-secondary: #ffffff;

    --font-primary: 'Host Grotesk', Tahoma, Geneva, Verdana, sans-serif;
    --font-secondary: 'Geist Mono', Tahoma, Geneva, Verdana, sans-serif;
}

.dark-mode {
    --theme-primary-base: #c4dbff;
    --theme-secondary-base: #90deff;
    --theme-accent-base: #90ffda;
    --theme-surface-base: #000000;
    --theme-on-secondary: #000000;
}
```

### 3. Main Entry File (`main.scss`)

Import your abstracts in the correct order.

```scss
// assets/scss/main.scss
@use './abstracts/variables';
@use './abstracts/roots';
.custom-gradient-bg {
  background: var(--custom-gradient);
}
```

## Per-Component Customization

Components use scoped CSS variables (prefixed with `--_`) for internal values. You can override these variables to customize specific components.

```css
/* Customize card */
.card {
  --_card-bg-color: var(--theme-surface-pane);
  --_card-border-radius: 1rem;
  --_card-gutter-x: 2rem;
  --_card-gutter-y: 2rem;
}

/* Customize button */
.btn {
  --_btn-height: 48px;
  --_btn-radius: 999px;
  --_btn-padding-inline: 2rem;
}

/* Customize specific variants */
.btn-filled {
  --_btn-bg-color: var(--theme-primary-base);
}
```

## Best Practices

1. **Use SCSS variables for compile-time customization** - Better performance, smaller CSS
2. **Use CSS custom properties for runtime changes** - Dynamic theming, dark mode
3. **Start with semantic colors** - Use `$primary`, `$success`, etc. instead of specific colors
4. **Maintain consistent spacing scale** - Keep spacing multiples of base unit
5. **Test with dark mode** - Ensure sufficient contrast in both modes
6. **Document custom variables** - Add comments for team reference

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

### Brand Tokens & Theme Mappings

Colorffy maps brand tokens to semantic base theme properties depending on the active theme mode:

#### Base Dark Tokens
- **Definition**: `--color-brand-dark-500` (light mode value) and `--color-brand-dark-50` (dark mode value).
- **Base Light Token (`:root`)**:
  ```css
  --theme-dark-base: var(--color-brand-dark-500);
  ```
- **Base Dark Token (`.dark-mode`)**:
  ```css
  --theme-dark-base: var(--color-brand-dark-50);
  ```

#### Primary Brand & Dynamic Tones
- **Definition**: `--color-brand-primary-500` (light mode value) and `--color-brand-primary-50` (dark mode value).
- **Base Light Token (`:root`)**:
  ```css
  --theme-primary-base: var(--color-brand-primary-500);
  ```
- **Base Dark Token (`.dark-mode`)**:
  ```css
  --theme-primary-base: var(--color-brand-primary-50);
  ```

#### Dynamic Tones (Opacity Blending)
Colorffy generates dynamic color opacity tones (e.g. `a10` to `a90`) by blending base color tokens with background surfaces using `color-mix(in srgb)` to ensure consistent visibility and contrast:
```css
/* Generating a 10% opacity primary blend */
--theme-primary-a10: color-mix(in srgb, var(--theme-primary-base), var(--theme-surface-base) 95%);
```

#### Color Mix Best Practices
- **Opacity utilities (e.g., `bg-primary/50`)**: Use `color-mix(in oklab, color, transparent)`.
- **Tinted surfaces & borders**: Use `color-mix(in srgb, color, background)`.
- **Blending two vibrant colors**: Use `color-mix(in oklch, colorA, colorB)` to avoid muddy middle tones.

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
  $font-primary: var(--font-primary),
  $font-secondary: var(--font-secondary),
  $font-code: var(--font-code),
  $font-icons: var(--font-icons)
);
```

### Font Weights

```scss
$fw-400: 400; // Normal
$fw-500: 500; // Medium
$fw-600: 600; // Semibold
$fw-700: 700; // Bold
$fw-800: 800; // Extrabold
```

### Font Sizes (CSS Custom Properties)
Font sizes are fluid `clamp()` values on `:root`, named on a t-shirt scale anchored at `--fs-base` (16px max), since v2.5:

`--fs-4xs` (11px) · `--fs-3xs` (12px) · `--fs-2xs` (13px) · `--fs-xs` (14px) · `--fs-sm` (15px) · `--fs-base` (16px) · `--fs-lg` (20px) · `--fs-xl` (24px) · `--fs-2xl` (28px) · `--fs-3xl` (32px) · `--fs-4xl` (40px, h1) · `--fs-5xl` (~53px)

Each size has a unitless line-height companion: `--fs-{step}--line-height` (e.g. `--fs-lg--line-height: 1.4`).

**Deprecated (removed in v3):** the old ordinal names `--fs-100`…`--fs-600`, `--fs-sm-100`…`--fs-sm-500`, `--fs-xl-100` remain as aliases of the new tokens. Note the old scale was inverted (`--fs-100` was the *largest*). Always use the t-shirt names in new code.

## Spacing Scale

### Spacing Tokens (CSS Custom Properties, v2.5+)

All component spacing uses the `--space-*` tokens on `:root` — the number is the pixel value at a 16px root, and every step derives from `--space-unit: .25rem`:

`--space-4` · `--space-6` · `--space-8` · `--space-12` · `--space-14` · `--space-16` · `--space-20` · `--space-24` · `--space-32` · `--space-48`

Runtime density: override `--space-unit` on `:root` or any subtree to scale all component spacing proportionally (e.g. `--space-unit: .2rem` = 80% density). When writing custom CSS alongside Colorffy, use `var(--space-*)` instead of hardcoded rem/px spacing.

**Deprecated (removed in v3):** the `$space-1` / `$space-2` / `$space-3` SCSS variables (1/2/3rem). Use `var(--space-16)` / `var(--space-32)` / `var(--space-48)` instead — they resolve to the same values and follow density scaling.

### Utility Class Scale (separate from the tokens)

The `m-*`/`p-*`/`gap-*` utility classes are generated from the `$spacing-sizes` SCSS map, which keeps its own historical scale until v3:

```scss
$spacing-sizes: (
  px: 1px,
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 1rem,
  4: 1.5rem,
  5: 3rem,
  6: 4.5rem,
  7: 6rem,
  8: 7.5rem,
  9: 9rem,
  10: 12rem
);
```

## Border Radius

Border radius tokens are mapped from the `$border-radius` SCSS map:

```scss
$border-radius: (
  0: 0px,
  4: 4px,
  6: 6px,
  8: 8px,
  12: 12px,
  25: 25px,
  50: 50px
);

// Mapped helper variables:
$rounded-none: map.get($border-radius, 0);
$rounded-sm:   map.get($border-radius, 6);
$rounded-md:   map.get($border-radius, 8);
$rounded-lg:   map.get($border-radius, 12);
$rounded-xl:   map.get($border-radius, 25);
$rounded-full: map.get($border-radius, 50);
```

## Shadows (CSS Custom Properties)

Shadows are defined dynamically on `:root` as CSS custom properties based on active light/dark theme schemes:
- `--shadow-xs` - Extra small shadow
- `--shadow-sm` - Small/default shadow
- `--shadow-md` - Medium shadow
- `--shadow-lg` - Large shadow
- `--shadow-xl` - Extra large shadow

## Breakpoints

Breakpoints for media queries and grid systems are defined using SCSS maps:

```scss
// Layout media breakpoints
$breakpoints: (
  1155: 1155px,
  1024: 1024px,
  992: 992px,
  960: 960px,
  768: 768px,
  600: 600px,
  320: 320px
);

// Grid system breakpoints
$grid-breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
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

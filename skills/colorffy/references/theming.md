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

Theme colors and fonts are **not** SCSS-configurable: `$primary`, `$secondary`, `$accent`, `$success`, `$warning`, `$danger`, `$info`, `$muted`, `$primary-colors` and `$font-*` are deprecated (nothing reads them; removed in v3). Set the CSS tokens below instead. SCSS configures compile-time component values:

```scss
// assets/scss/abstracts/_variables.scss
@forward '@colorffy/css/scss/abstracts/variables' with (
  $card-border-radius: 8px,
  $form-border-radius: 4px,
  $button-border-radius: 4px,
  $dialog-border-radius: 8px
);
```

#### CSS Custom Properties (Runtime)

Theme colors are CSS tokens. Each brand color has a light-mode (`-500`) and dark-mode (`-50`) tone, for `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info` and `muted`; every tonal step and component derives from them:

```css
:root {
  --color-brand-primary-500: oklch(45% 0.2 275);
  --color-brand-primary-50: oklch(90% 0.06 275);
}
```

Or set one value for both modes with the `--theme-*-base` tokens:

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

Fonts are CSS tokens (the `$font-*` SCSS variables are deprecated and have no effect):

```css
:root {
  --font-primary: 'Plus Jakarta Sans', sans-serif;
  --font-secondary: 'DM Sans', sans-serif;
  --font-code: monospace;
}
```

### Font Weights

```scss
$fw-400: 400; // Normal
$fw-500: 500; // Medium
$fw-600: 600; // Semibold
$fw-700: 700; // Bold
$fw-800: 800; // Extrabold
```

### Shape, Weight & Motion Tokens (CSS Custom Properties)
Components read these `:root` tokens, so they can be overridden at runtime (globally or per subtree) without recompiling. The SCSS variables above set their defaults.

- Radius: `--radius-none` (0) · `--radius-sm` (6px) · `--radius-md` (8px) · `--radius-lg` (12px) · `--radius-xl` (25px) · `--radius-full` (50px)
- Border width: `--border-width-sm` (1px) · `--border-width-md` (2px)
- Font weight: `--fw-400` … `--fw-800`
- Easing: `--ease-decelerate` (enter), `--ease-accelerate` (exit), plus `linear()` curves `--ease-spring`, `--ease-overshoot-soft`, `--ease-emphasized`, `--ease-bounce`, `--ease-power-in`, `--ease-power-in-out`, `--ease-sine-in-out`. Under `prefers-reduced-motion: reduce`, spring / overshoot-soft / bounce resolve to `--ease-decelerate`
- Focus ring: `--focus-ring-color` (`--theme-on-background`) · `--focus-ring-offset` (`.3rem`)
- Duration: `--duration-100` · `-150` · `-200` · `-250` · `-300` · `-400` · `-500` · `-600` · `-800` (ms), each `calc(var(--duration-unit) * N)` with `--duration-unit: 1ms`; override `--duration-unit` to speed up or slow down all motion. Use these instead of hardcoded ms in custom transitions

In custom CSS alongside Colorffy, use these tokens (e.g. `border-radius: var(--radius-md)`) instead of hardcoded values.

### Component CSS Hooks
Components expose public CSS variables named `--<component>-<prop>` (unprefixed in 2.x, `--cffy-` prefixed in 3.0). Set them on `:root` or any wrapper; each feeds the component's private `--_*` variable, and variants (e.g. `nav-island`) keep their own values. Prefer hooks over overriding `--_*` variables, which also overrides every variant.

- **Navbar** (`.navbar`): `--navbar-bg-color`, `-color`, `-shadow`, `-radius`, `-padding-inline`, `-padding-block`, `-margin-block-end`, `-min-height`, `-easing`, `-duration`, `-brand-font-size`, `-brand-font-weight`, `-brand-size`, `-brand-hover-color`, `-title-font-size`, `-title-font-weight`, `-link-color`, `-link-hover-color`, `-link-hover-bg-color`, `-link-active-color`, `-link-active-bg-color`, `-link-font-size`, `-link-font-weight`, `-link-radius`, `-link-padding-inline`, `-link-padding-block`
- **Popover menu** (`.popover-menu-container`): `--popover-menu-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-min-width`, `-spacing`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-radius`, `-item-hover-color`, `-item-hover-bg-color`, `-item-active-color`, `-item-active-bg-color`
- **Menu tools** (`.menu-tools`): `--menu-tools-bg-color`, `-shadow`, `-radius`, `-padding`, `-gap`, `-max-height`, `-easing`, `-duration`, `-tabs-bg-color`, `-tab-hover-bg-color`, `-tab-active-bg-color`, `-tab-active-color`, `-link-hover-bg-color`, `-link-active-bg-color`, `-link-active-color`
- **Dropdown** (`.v-popper--theme-dropdown`, all `UiButtonMenu` panels): `--dropdown-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-min-width`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-radius`, `-item-padding-inline`, `-item-padding-block`, `-item-hover-color`, `-item-hover-bg-color`, `-item-active-color`, `-item-active-bg-color`
- **Dialog** (`.dialog`, `UiModal` / `UiConfirmModal`): `--dialog-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-spacing`, `-max-size`, `-title-font-size`, `-title-font-weight`, `-subtitle-color`, `-subtitle-font-size`, `-icon-bg-color`, `-icon-color`, `-backdrop-color`, `-backdrop-blur`, `-easing`, `-duration`
- **Sidebar** (`.navigation-drawer`, `UiSidebar`): `--sidebar-bg-color`, `-color`, `-border-color`, `-shadow`, `-radius`, `-padding`, `-spacing`, `-brand-size`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-font-weight`, `-item-radius`, `-item-hover-bg-color`, `-item-active-color`, `-item-active-bg-color`, `-item-active-icon-color`, `-overlay-color`, `-overlay-blur` (width stays `--theme-nav-drawer-width`)
- **Tabs** (`.tabs-navigation`, `UiTabs`): `--tabs-gap`, `-border-color`, `-indicator-color`, `-indicator-size`, `-easing`, `-duration`, `-link-color`, `-link-font-weight`, `-link-hover-color`, `-link-hover-bg-color`, `-link-active-color`; pill tabs only: `--tabs-pills-bg-color`, `-pills-radius`, `-pills-indicator-bg-color`, `-pills-indicator-shadow`
- **Segmented control** (`.tab-segmented-control`, `UiSegmentedControls`): `--segmented-control-radius`, `-border-color`, `-padding`, `-gap`, `-item-color`, `-item-font-size`, `-item-hover-bg-color`, `-item-active-color`, `-indicator-bg-color`, `-easing`, `-duration`
- **Footer** (`.footer`, `UiFooter`): `--footer-bg-color`, `-color`, `-muted-color`, `-border-color`, `-padding-inline`, `-padding-block`, `-margin-block-start`, `-gap`, `-title-font-size`, `-title-font-weight`, `-link-color`, `-link-hover-color`, `-link-font-size`, `-icon-color`
- **Progress** (`.progress`, `UiProgressBar`): `--progress-bg-color`, `-color`, `-label-color`, `-height`, `-radius`, `-font-size`, `-easing`, `-duration`; spinner `--progress-spinner-color`; skeleton `--skeleton-color`, `--skeleton-radius`; shapes loader `--loading-shapes-color`
- **Alert** (`.alert`, `UiAlert` / `UiAlertToast`): `--alert-bg-color`, `-border-color`, `-color`, `-icon-color`, `-radius`, `-font-size`, `-font-weight`, `-title-font-size`, `-title-font-weight`, `-icon-size`, `-padding-block`, `-padding-inline`, `-gap`, `-stack-gap`; snackbars `--alert-snackbar-bg-color`, `-snackbar-color`, `--alert-toast-offset`, `-toast-min-width`; PWA prompt `--pwa-alert-bg-color`, `-border-color`, `-shadow`, `-radius`, `-padding`, `-gap`
- **Card** (`.card`, `UiCard`): `--card-bg-color`, `-color`, `-border-width`, `-border-color`, `-radius`, `-shadow`, `-padding-inline`, `-padding-block`, `-title-font-size`, `-title-font-weight`, `-text-color`, `-hover-bg-color`, `-selected-border-color`, `-easing`
- **Button** (`.btn`, `UiButton`): `--btn-radius`, `-height`, `-padding-inline`, `-padding-block`, `-font-size`, `-font-weight`, `-icon-size`, `-shadow`, `-easing`, `-duration` (colors come from the theme tokens)
- **Chip** (`.btn-chip`, `UiChip`): `--chip-bg-color`, `-color`, `-border-color`, `-radius`, `-hover-bg-color`
- **Button groups** (`.btn-group`, `.chip-group`, `.fab-group`, `.toggle-btn-group`): `--btn-group-gap`, `--chip-group-gap`, `--fab-group-offset-block`, `-offset-inline`, `-gap`, `--toggle-btn-group-gap`, `--toggle-btn-bg-color`, `-color`, `-subtitle-color`, `-border-width`, `-border-color`, `-radius`, `-padding`, `-hover-border-color`, `-active-bg-color`, `-active-border-color`, `-easing`, `-duration`
- **Badge** (`.badge`, `UiBadge`): `--badge-bg-color`, `-color`, `-border-color`, `-radius`, `-font-size`, `-font-weight`, `-padding-block`, `-padding-inline`, `-icon-size`; `--badge-group-gap`
- **Accordion** (`.accordion`, `UiAccordion`): `--accordion-bg-color`, `-color`, `-border-color`, `-radius`, `-padding`, `-title-font-size`, `-body-font-size`, `-body-color`, `-icon-color`, `-hover-color`, `-hover-bg-color`, `-easing`, `-duration`, `-group-gap`
- **Avatar** (`.img-avatar`, `.initials-avatar`, `.avatar-group`, `UiAvatar`): `--avatar-radius`, `-easing`, `-duration`, `-tint-color`, `-tint-alpha`, `-initials-font-size`, `-initials-font-weight`, `-group-overlap`, `-group-ring-width`, `-group-ring-color`, `-status-size`, `-status-ring-width`, `-status-ring-color`, `-status-online-color`, `-status-busy-color`, `-status-away-color`, `-status-offline-color`
- **List** (`.list-group`, `UiListGroup`): `--list-gap`, `-bg-color`, `-border-color`, `-color`, `-subtitle-color`, `-title-font-size`, `-title-font-weight`, `-subtitle-font-size`, `-radius`, `-item-radius`, `-item-padding`, `-item-gap`, `-icon-bg-color`, `-icon-color`, `-icon-size`, `-icon-padding`, `-icon-radius`, `-image-size`, `-image-radius`, `-hover-bg-color`, `-pressed-bg-color`, `-arrow-color`, `-active-bg-color`, `-active-border-color`, `-active-icon-bg-color`, `-active-icon-color`, `-easing`, `-duration`
- **Popover** (`.popover`, `UiPopover`): `--popover-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-max-width`, `-max-height`, `-spacing`, `-offset`, `-title-font-size`, `-title-font-weight`, `-subtitle-font-size`, `-subtitle-color`, `-easing`, `-duration`
- **Tooltip** (`.v-popper--theme-tooltip`, `UiTooltip`; set on `:root`): `--tooltip-bg-color`, `-color`, `-padding`, `-radius`, `-shadow`, `-font-size`, `-font-weight`, `-kbd-bg-color`, `-kbd-color`
- **Breadcrumb** (`.breadcrumb-nav`, `UiBreadcrumb`): `--breadcrumb-gap`, `-color`, `-hover-color`, `-current-color`, `-current-font-weight`, `-current-max-width`, `-separator-color`, `-font-size`, `-icon-size`, `-icon-color`, `-easing`, `-duration`
- **Stepper** (`.stepper`, `UiStepper`): `--stepper-indicator-size`, `-indicator-radius`, `-indicator-bg-color`, `-indicator-color`, `-indicator-font-size`, `-indicator-icon-size`, `-current-indicator-bg-color`, `-current-indicator-color`, `-completed-indicator-bg-color`, `-completed-indicator-color`, `-connector-thickness`, `-connector-color`, `-completed-connector-color`, `-label-color`, `-current-label-color`, `-completed-label-color`, `-label-font-size`, `-label-font-weight`, `-label-max-width`, `-description-color`, `-description-font-size`, `-gap`, `-easing`, `-duration`
- **Timeline** (`.timeline`, `UiTimeline`): `--timeline-gap`, `-item-spacing`, `-connector-thickness`, `-connector-color`, `-dot-size`, `-dot-color`, `-icon-bg-color`, `-icon-color`, `-icon-size`, `-icon-padding`, `-icon-radius`, `-image-size`, `-image-radius`, `-title-font-size`, `-title-font-weight`, `-text-font-size`, `-text-color`, `-time-color`
- **Table** (`.table`, `UiDatatable`): `--table-bg-color`, `-color`, `-border-color`, `-border-width`, `-cell-padding-inline`, `-cell-padding-block`, `-font-size`, `-radius`, `-header-bg-color`, `-header-color`, `-header-font-size`, `-header-font-weight`, `-icon-color`, `-icon-size`, `-selected-bg-color`, `-striped-bg-color`, `-hover-bg-color`, `-easing`, `-duration`, `-sticky-max-height`, `-sticky-column-bg-color`
- **Inputs** (`.form-control`, `.form-select`, `.form-color-group`, `UiInputText`, …): `--input-height`, `-padding-inline`, `-padding-block`, `-radius`, `-bg-color`, `-color`, `-border-width`, `-border-color`, `-font-size`, `-shadow`, `-placeholder-color`, `-filled-bg-color`, `-hover-border-color`, `-focus-bg-color`, `-focus-border-color`, `-focus-ring-color`, `-invalid-color`, `-invalid-ring-color`, `-easing`, `-duration`, `-label-font-size`, `-label-font-weight`, `-label-gap`; `--form-group-spacing`; range `--input-range-track-color`, `-fill-color`, `-track-size`, `-radius`, `-thumb-height`, `-thumb-width`, `-thumb-ring-color`, `-easing`, `-duration`; file dropbox `--input-file-bg-color`, `-color`, `-border-width`, `-border-color`, `-radius`, `-height`, `-font-size`, `-hover-bg-color`, `-pressed-bg-color`, `-easing`, `-duration`
- **Checkbox, switch, radio** (`.form-check`, `UiInputCheck`, `UiInputRadio`): `--input-check-size`, `-gap`, `-spacing`, `-bg-color`, `-border-color`, `-border-width`, `-checked-color`, `-radius`, `-easing`, `-duration`; `--input-switch-bg-color`, `-border-color`, `-thumb-color`, `-checked-thumb-color`, `-checked-color`
- **Input prefix/suffix** (`.input-group`): follows `--input-radius`, `--input-border-width`, `--input-border-color`, `--input-bg-color`; own `--input-group-bg-color`, `-color`, `-padding-inline`, `-font-size`, `-icon-size`
- **OTP** (`.form-otp`, `UiInputOtp`): `--input-otp-gap`, `-font-size`, `-font-weight`; boxes follow `--input-height` and the other `--input-*` variables
- **Divider** (`.divider`, `UiDivider`): `--divider-thickness`, `-color`, `-spacing`, `-inset`, `-text-gap`, `-text-color`, `-text-font-size`
- **Carousel** (`.carousel` scroll buttons, `.carousel-btn`): `--carousel-btn-size`, `-bg-color`, `-color`, `-shadow`, `-radius`

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
    // Component overrides (brand colors are CSS tokens, see above)
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

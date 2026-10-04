# Theming & Customization

Guide to customizing Colorffy CSS colors, typography, spacing, and other design tokens.

## Color System

Colorffy uses a **tonal color system** with semantic token naming for intuitive theming.

### Theme Colors

Every color is a CSS token, set per brand color as `--cffy-color-brand-<name>-500` (light mode) and `--cffy-color-brand-<name>-50` (dark mode), and read through `--cffy-<name>-base` and its tonal steps (`--cffy-<name>-a10` … `a90`):

**Primary colors:** `primary` (main brand), `secondary`, `accent`

**Semantic colors:** `success`, `warning`, `danger`, `info`

**Neutral colors:** `muted` (secondary text), plus `--cffy-color-brand-black-500` / `--cffy-color-brand-white-500` behind `--cffy-on-background`

### Customizing Colors

#### SCSS Variables (Compile-time)

Theme colors and fonts are **not** SCSS-configurable (the old `$primary` … `$muted`, `$primary-colors` and `$font-*` variables were removed in 3.0). Set the CSS tokens below instead. SCSS configures compile-time component values:

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
  --cffy-color-brand-primary-500: oklch(45% 0.2 275);
  --cffy-color-brand-primary-50: oklch(90% 0.06 275);
}
```

Text colors follow automatically: each `--cffy-on-<name>` picks black or white from the lightness of the solid fill `--cffy-<name>-a10` (whichever contrasts more), and `--cffy-on-<name>-container` is mixed from the base. Set `--cffy-on-<name>` only to force a value. Browsers without relative color syntax (and Safari 16.4–17, which implements an older draft) keep fixed fallback values.

`--cffy-<name>-inverse` is the color on an inverse surface (toasts, snackbars, tooltips: dark in light mode, light in dark mode), kept readable for any brand color; snackbars use it for their icons and point `--cffy-primary-base` / `--cffy-on-background` at the inverse tones inside.

`--cffy-<name>-container` is the tinted surface for that color: `a10` mixed toward the background by `--cffy-tonal-dark-intensity` (`80%` in light mode, `58%` in dark mode). Lower it for stronger tints; the mix runs in `oklab`.

Or set one value for both modes with the `--cffy-*-base` tokens:

```css
:root {
  /* Theme colors - Base variants */
  --cffy-primary-base: #002662;
  --cffy-secondary-base: #22cbff;
  --cffy-accent-base: #0ee9a0;
  --cffy-surface-base: #ffffff;
  
  /* Fonts */
  --cffy-font-primary: 'Host Grotesk', sans-serif;
  --cffy-font-secondary: 'Geist Mono', monospace;
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

Colorffy CSS uses semantic CSS variables for dark mode support. Toggle the `.dark-mode` class on `<html>` (the tokens switch on `html.dark-mode`).

```css
/* Define dark mode colors */
.dark-mode {
  --cffy-primary-base: #c4dbff;
  --cffy-secondary-base: #90deff;
  --cffy-accent-base: #90ffda;
  --cffy-surface-base: #000000;
}
```

### Brand Tokens & Theme Mappings

Each base token picks its brand tone with `light-dark()`, and `html.dark-mode` switches `color-scheme` to `dark`, so one declaration on `:root` covers both modes:

```css
:root {
  --cffy-primary-base: light-dark(var(--cffy-color-brand-primary-500), var(--cffy-color-brand-primary-50));
  --cffy-dark-base: light-dark(var(--cffy-color-brand-dark-500), var(--cffy-color-brand-dark-50));
}
```

Set the `-500` / `-50` brand tokens to change both modes, or a `--cffy-<name>-base` token to pin one value.

#### Dynamic Tones (Opacity Blending)
Colorffy generates the tonal ramps (`a10` to `a90`) by blending each base color toward black with `color-mix(in oklab)` (`--cffy-on-background` in light mode, `--cffy-on-background-inverse` in dark mode), so every step is darker than the one before in both modes. A tinted surface (tonal button, badge or alert) is `--cffy-<name>-container`, with `--cffy-on-<name>-container` for its text: the darkest tone in light mode, a light tint in dark mode. Surfaces blend `--cffy-primary-base` into `--cffy-surface-base`:
```css
--cffy-primary-a10: color-mix(in oklab, var(--cffy-primary-base), var(--cffy-on-background) 11%);
--cffy-surface-a20: color-mix(in oklab, var(--cffy-primary-base), var(--cffy-surface-base) 90%);
```

#### Color Mix Best Practices
- **Opacity utilities (e.g., `bg-primary/50`)**: Use `color-mix(in oklab, color, transparent)`.
- **Tinted surfaces & borders**: Use `color-mix(in oklab, color, background)`.
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

Fonts are CSS tokens (there are no `$font-*` SCSS variables):

```css
:root {
  --cffy-font-primary: 'Plus Jakarta Sans', sans-serif;
  --cffy-font-secondary: 'DM Sans', sans-serif;
  --cffy-font-code: monospace;
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

- Radius: `--cffy-radius-none` (0) · `--cffy-radius-sm` (6px) · `--cffy-radius-md` (8px) · `--cffy-radius-lg` (12px) · `--cffy-radius-xl` (25px) · `--cffy-radius-full` (50px)
- Border width: `--cffy-border-width-sm` (1px) · `--cffy-border-width-md` (2px)
- Font weight: `--cffy-fw-400` … `--cffy-fw-800`
- Easing: `--cffy-ease-decelerate` (enter), `--cffy-ease-accelerate` (exit), plus `linear()` curves `--cffy-ease-spring`, `--cffy-ease-overshoot-soft`, `--cffy-ease-emphasized`, `--cffy-ease-bounce`, `--cffy-ease-power-in`, `--cffy-ease-power-in-out`, `--cffy-ease-sine-in-out`. Under `prefers-reduced-motion: reduce`, spring / overshoot-soft / bounce resolve to `--cffy-ease-decelerate`
- Focus ring: `--cffy-focus-ring-color` (`--cffy-on-background`) · `--cffy-focus-ring-offset` (`.3rem`)
- State layer (hover/pressed background of every interactive surface: list items, interactive cards, accordion headers, dropdown/menu items, tabs, chips, table rows, file dropbox, sidebar/navbar/menu links): `--cffy-state-layer-color` (`--cffy-primary-base`, the same tint that builds the surface ramp; destructive menu items and a valid file dropbox override it with danger/success) · `--cffy-state-hover-opacity` (`8%`) · `--cffy-state-pressed-opacity` (`12%`, also keyboard focus). Mixed in `oklab` with the component's own background; components have no per-component hover-background hooks
- Duration: `--cffy-duration-100` · `-150` · `-200` · `-250` · `-300` · `-400` · `-500` · `-600` · `-800` (ms), each `calc(var(--cffy-duration-unit) * N)` with `--cffy-duration-unit: 1ms`; override `--cffy-duration-unit` to speed up or slow down all motion. Use these instead of hardcoded ms in custom transitions

In custom CSS alongside Colorffy, use these tokens (e.g. `border-radius: var(--cffy-radius-md)`) instead of hardcoded values.

### Component CSS Hooks
Components expose public CSS variables named `--cffy-<component>-<property>`. Set them on `:root` or any wrapper; each feeds the component's private `--_<component>-<property>` variable, and variants (e.g. `nav-island`) keep their own values. Always set the hook, never the private variable: privates are internal, get renamed, and overriding one also overrides every variant. Interactive surfaces take their hover and pressed backgrounds from the state layer tokens above.

- **Navbar** (`.navbar`): `--cffy-navbar-bg-color`, `-color`, `-shadow`, `-radius`, `-padding-inline`, `-padding-block`, `-margin-block-end`, `-min-height`, `-easing`, `-duration`, `-brand-font-size`, `-brand-font-weight`, `-brand-size`, `-brand-hover-color`, `-title-font-size`, `-title-font-weight`, `-link-color`, `-link-hover-color`, `-link-active-color`, `-link-active-bg-color`, `-link-font-size`, `-link-font-weight`, `-link-radius`, `-link-padding-inline`, `-link-padding-block`
- **Popover menu** (`.popover-menu-container`): `--cffy-popover-menu-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-min-width`, `-spacing`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-radius`, `-item-hover-color`, `-item-active-color`, `-item-active-bg-color`
- **Menu tools** (`.menu-tools`): `--cffy-menu-tools-bg-color`, `-shadow`, `-radius`, `-padding`, `-gap`, `-max-height`, `-easing`, `-duration`, `-tabs-bg-color`, `-tab-active-bg-color`, `-tab-active-color`, `-link-active-bg-color`, `-link-active-color`
- **Dropdown** (`.v-popper--theme-dropdown`, all `UiButtonMenu` panels): `--cffy-dropdown-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-min-width`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-radius`, `-item-padding-inline`, `-item-padding-block`, `-item-hover-color`, `-item-active-color`, `-item-active-bg-color`
- **Dialog** (`.dialog`, `UiModal` / `UiConfirmModal`): `--cffy-dialog-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-padding`, `-spacing`, `-max-size`, `-title-font-size`, `-title-font-weight`, `-subtitle-color`, `-subtitle-font-size`, `-icon-bg-color`, `-icon-color`, `-backdrop-color`, `-backdrop-blur`, `-easing`, `-duration`
- **Sidebar** (`.navigation-drawer`, `UiSidebar`): `--cffy-sidebar-bg-color`, `-color`, `-border-color`, `-shadow`, `-radius`, `-padding`, `-spacing`, `-brand-size`, `-easing`, `-duration`, `-item-color`, `-item-font-size`, `-item-font-weight`, `-item-radius`, `-item-active-color`, `-item-active-bg-color`, `-item-active-icon-color`, `-overlay-color`, `-overlay-blur`, `-width` (default `--cffy-container-2xs`)
- **Tabs** (`.tabs-navigation`, `UiTabs`): `--cffy-tabs-gap`, `-border-color`, `-indicator-color`, `-indicator-size`, `-easing`, `-duration`, `-link-color`, `-link-font-weight`, `-link-hover-color`, `-link-active-color`; pill tabs only: `--cffy-tabs-pills-bg-color`, `-pills-radius`, `-pills-indicator-bg-color`, `-pills-indicator-shadow`
- **Segmented control** (`.tab-segmented-control`, `UiSegmentedControls`): `--cffy-segmented-control-radius`, `-border-color`, `-padding`, `-gap`, `-item-color`, `-item-font-size`, `-item-hover-bg-color`, `-item-active-color`, `-indicator-bg-color`, `-easing`, `-duration`
- **Footer** (`.footer`, `UiFooter`): `--cffy-footer-bg-color`, `-color`, `-muted-color`, `-border-color`, `-padding-inline`, `-padding-block`, `-margin-block-start`, `-gap`, `-title-font-size`, `-title-font-weight`, `-link-color`, `-link-hover-color`, `-link-font-size`, `-icon-color`
- **Progress** (`.progress`, `UiProgressBar`): `--cffy-progress-bg-color`, `-color`, `-label-color`, `-height`, `-radius`, `-font-size`, `-easing`, `-duration`; spinner `--cffy-progress-spinner-color`, `--cffy-progress-spinner-size`; skeleton `--cffy-skeleton-color`, `--cffy-skeleton-radius`; shapes loader `--cffy-loading-shapes-color`
- **Alert** (`.alert`, `UiAlert` / `UiAlertToast`): `--cffy-alert-bg-color`, `-border-color`, `-color`, `-icon-color`, `-radius`, `-font-size`, `-font-weight`, `-title-font-size`, `-title-font-weight`, `-icon-size`, `-padding-block`, `-padding-inline`, `-gap`, `-stack-gap`; snackbars `--cffy-alert-snackbar-bg-color`, `-snackbar-color`, `--cffy-alert-toast-offset`, `-toast-min-width`; PWA prompt `--cffy-pwa-alert-bg-color`, `-border-color`, `-shadow`, `-radius`, `-padding`, `-gap`
- **Card** (`.card`, `UiCard`): `--cffy-card-bg-color`, `-color`, `-border-width`, `-border-color`, `-radius`, `-shadow`, `-padding-inline`, `-padding-block`, `-title-font-size`, `-title-font-weight`, `-text-color`, `-selected-border-color`, `-easing`
- **Button** (`.btn`, `UiButton`): `--cffy-btn-radius`, `-height`, `-padding-inline`, `-padding-block`, `-font-size`, `-font-weight`, `-icon-size`, `-shadow`, `-easing`, `-duration` (colors come from the theme tokens)
- **Chip** (`.btn-chip`, `UiChip`): `--cffy-chip-bg-color`, `-color`, `-border-color`, `-radius`
- **Button groups** (`.btn-group`, `.chip-group`, `.fab-group`, `.toggle-btn-group`): `--cffy-btn-group-gap`, `--cffy-chip-group-gap`, `--cffy-fab-group-offset-block`, `-offset-inline`, `-gap`, `--cffy-toggle-btn-group-gap`, `--cffy-toggle-btn-bg-color`, `-color`, `-subtitle-color`, `-border-width`, `-border-color`, `-radius`, `-padding`, `-hover-border-color`, `-active-bg-color`, `-active-border-color`, `-easing`, `-duration`
- **Badge** (`.badge`, `UiBadge`): `--cffy-badge-bg-color`, `-color`, `-border-color`, `-radius`, `-font-size`, `-font-weight`, `-padding-block`, `-padding-inline`, `-icon-size`; `--cffy-badge-group-gap`
- **Accordion** (`.accordion`, `UiAccordion`): `--cffy-accordion-bg-color`, `-color`, `-border-color`, `-radius`, `-padding`, `-title-font-size`, `-body-font-size`, `-body-color`, `-icon-color`, `-hover-color`, `-easing`, `-duration`, `-group-gap`
- **Avatar** (`.img-avatar`, `.initials-avatar`, `.avatar-group`, `UiAvatar`): `--cffy-avatar-radius`, `-easing`, `-duration`, `-tint-color`, `-tint-alpha`, `-initials-font-size`, `-initials-font-weight`, `-group-overlap`, `-group-ring-width`, `-group-ring-color`, `-status-size`, `-status-ring-width`, `-status-ring-color`, `-status-online-color`, `-status-busy-color`, `-status-away-color`, `-status-offline-color`
- **List** (`.list-group`, `UiListGroup`): `--cffy-list-gap`, `-bg-color`, `-border-color`, `-color`, `-subtitle-color`, `-title-font-size`, `-title-font-weight`, `-subtitle-font-size`, `-radius`, `-item-radius`, `-item-padding`, `-item-gap`, `-icon-bg-color`, `-icon-color`, `-icon-size`, `-icon-padding`, `-icon-radius`, `-image-size`, `-image-radius`, `-arrow-color`, `-active-bg-color`, `-active-border-color`, `-active-icon-bg-color`, `-active-icon-color`, `-easing`, `-duration`
- **Popover** (`.popover`, `UiPopover`): `--cffy-popover-bg-color`, `-color`, `-border-color`, `-radius`, `-shadow`, `-max-width`, `-max-height`, `-spacing`, `-offset`, `-title-font-size`, `-title-font-weight`, `-subtitle-font-size`, `-subtitle-color`, `-easing`, `-duration`
- **Tooltip** (`.v-popper--theme-tooltip`, `UiTooltip`; set on `:root`): `--cffy-tooltip-bg-color`, `-color`, `-padding`, `-radius`, `-shadow`, `-font-size`, `-font-weight`, `-kbd-bg-color`, `-kbd-color`
- **Breadcrumb** (`.breadcrumb-nav`, `UiBreadcrumb`): `--cffy-breadcrumb-gap`, `-color`, `-hover-color`, `-current-color`, `-current-font-weight`, `-current-max-width`, `-separator-color`, `-font-size`, `-icon-size`, `-icon-color`, `-easing`, `-duration`
- **Stepper** (`.stepper`, `UiStepper`): `--cffy-stepper-indicator-size`, `-indicator-radius`, `-indicator-bg-color`, `-indicator-color`, `-indicator-font-size`, `-indicator-icon-size`, `-current-indicator-bg-color`, `-current-indicator-color`, `-completed-indicator-bg-color`, `-completed-indicator-color`, `-connector-thickness`, `-connector-color`, `-completed-connector-color`, `-label-color`, `-current-label-color`, `-completed-label-color`, `-label-font-size`, `-label-font-weight`, `-label-max-width`, `-description-color`, `-description-font-size`, `-gap`, `-easing`, `-duration`
- **Timeline** (`.timeline`, `UiTimeline`): `--cffy-timeline-gap`, `-item-spacing`, `-connector-thickness`, `-connector-color`, `-dot-size`, `-dot-color`, `-icon-bg-color`, `-icon-color`, `-icon-size`, `-icon-padding`, `-icon-radius`, `-image-size`, `-image-radius`, `-title-font-size`, `-title-font-weight`, `-text-font-size`, `-text-color`, `-time-color`
- **Table** (`.table`, `UiDatatable`): `--cffy-table-bg-color`, `-color`, `-border-color`, `-border-width`, `-cell-padding-inline`, `-cell-padding-block`, `-font-size`, `-radius`, `-header-bg-color`, `-header-color`, `-header-font-size`, `-header-font-weight`, `-icon-color`, `-icon-size`, `-selected-bg-color`, `-striped-bg-color`, `-easing`, `-duration`, `-sticky-max-height`, `-sticky-column-bg-color`
- **Inputs** (`.form-control`, `.form-select`, `.form-color-group`, `UiInputText`, …): `--cffy-input-height`, `-padding-inline`, `-padding-block`, `-radius`, `-bg-color`, `-color`, `-border-width`, `-border-color`, `-font-size`, `-shadow`, `-placeholder-color`, `-filled-bg-color`, `-hover-border-color`, `-focus-bg-color`, `-focus-border-color`, `-focus-ring-color`, `-invalid-color`, `-invalid-ring-color`, `-easing`, `-duration`, `-label-font-size`, `-label-font-weight`, `-label-gap`; `--cffy-form-group-spacing`; range `--cffy-input-range-track-color`, `-fill-color`, `-track-size`, `-radius`, `-thumb-height`, `-thumb-width`, `-thumb-ring-color`, `-easing`, `-duration`; file dropbox `--cffy-input-file-bg-color`, `-color`, `-border-width`, `-border-color`, `-radius`, `-height`, `-font-size`, `-easing`, `-duration`
- **Checkbox, switch, radio** (`.form-check`, `UiInputCheck`, `UiInputRadio`): `--cffy-input-check-size`, `-gap`, `-spacing`, `-bg-color`, `-border-color`, `-border-width`, `-checked-color`, `-radius`, `-easing`, `-duration`; `--cffy-input-switch-bg-color`, `-border-color`, `-thumb-color`, `-checked-thumb-color`, `-checked-color`
- **Input prefix/suffix** (`.input-group`): follows `--cffy-input-radius`, `--cffy-input-border-width`, `--cffy-input-border-color`, `--cffy-input-bg-color`; own `--cffy-input-group-bg-color`, `-color`, `-padding-inline`, `-font-size`, `-icon-size`
- **OTP** (`.form-otp`, `UiInputOtp`): `--cffy-input-otp-gap`, `-font-size`, `-font-weight`; boxes follow `--cffy-input-height` and the other `--cffy-input-*` variables
- **Divider** (`.divider`, `UiDivider`): `--cffy-divider-thickness`, `-color`, `-spacing`, `-inset`, `-text-gap`, `-text-color`, `-text-font-size`
- **Carousel** (`.carousel` scroll buttons, `.carousel-btn`): `--cffy-carousel-btn-size`, `-bg-color`, `-color`, `-shadow`, `-radius`
- **Header / hero / subheading** (`.header-container`, `.hero-content`, `.subheading-content`): `--cffy-header-margin-block-end`, `-gap`, `-title-font-size`, `-title-line-height`, `-description-font-size`, `-description-color`, `-description-max-width`; `--cffy-hero-gap`, `-margin-block-end`, `-max-width`, `-description-font-size`, `-description-line-height`, `-description-color`, `-actions-offset`, `-actions-gap`; `--cffy-subheading-gap`, `-actions-gap`
- **Navigation bar** (`.navigation-bar`, `UiNavigationBar`): `--cffy-navigation-bar-bg-color`, `-shadow`, `-item-color`, `-item-active-color`, `-item-hover-color`, `-font-size`, `-icon-size`, `-indicator-color`, `-indicator-radius`, `-easing`, `-duration`
- **Links, code, kbd** (base `a`, `.anchor-link`, `code`, `kbd`): `--cffy-link-color`, `-hover-color`, `-active-color`, `-underline-color`, `-easing`, `-duration`; `--cffy-code-color`, `-font-size`; `--cffy-kbd-bg-color`, `-color`, `-font-size`, `-radius`, `-shadow`
- **Icon wrap** (`.icon-wrap`): `--cffy-icon-wrap-padding`, `-radius`, `-bg-color`, `-color`, `-tint-alpha`

### Font Sizes (CSS Custom Properties)
Font sizes are fluid `clamp()` values on `:root`, named on a t-shirt scale anchored at `--cffy-fs-base` (16px max), since v2.5:

`--cffy-fs-4xs` (11px) · `--cffy-fs-3xs` (12px) · `--cffy-fs-2xs` (13px) · `--cffy-fs-xs` (14px) · `--cffy-fs-sm` (15px) · `--cffy-fs-base` (16px) · `--cffy-fs-lg` (20px) · `--cffy-fs-xl` (24px) · `--cffy-fs-2xl` (28px) · `--cffy-fs-3xl` (32px) · `--cffy-fs-4xl` (40px, h1) · `--cffy-fs-5xl` (~53px)

Each size has a unitless line-height companion: `--cffy-fs-{step}--line-height` (e.g. `--cffy-fs-lg--line-height: 1.4`).

**Removed in 3.0:** the old ordinal names `--fs-100`…`--fs-600`, `--fs-sm-100`…`--fs-sm-500`, `--fs-xl-100`. The old scale was inverted (`--fs-100` was the *largest*); the migration guide has the rename table.

## Spacing Scale

### Spacing Tokens (CSS Custom Properties, v2.5+)

All component spacing uses the `--cffy-space-*` tokens on `:root` — the number is the pixel value at a 16px root, and every step derives from `--cffy-space-unit: .25rem`:

`--cffy-space-4` · `--cffy-space-6` · `--cffy-space-8` · `--cffy-space-12` · `--cffy-space-14` · `--cffy-space-16` · `--cffy-space-20` · `--cffy-space-24` · `--cffy-space-32` · `--cffy-space-48`

Runtime density: override `--cffy-space-unit` on `:root` or any subtree to scale all component spacing proportionally (e.g. `--cffy-space-unit: .2rem` = 80% density). When writing custom CSS alongside Colorffy, use `var(--cffy-space-*)` instead of hardcoded rem/px spacing.

### Utility Class Scale

The `m-*`/`p-*`/`flow-*`/`top-*`/`translate-*` utilities keep their numbered steps but read the tokens, so `--cffy-space-unit` rescales them with the components. `px` stays `1px`:

| Step | Value | Step | Value |
|------|-------|------|-------|
| `1` | `--cffy-space-4` (0.25rem) | `6` | `--cffy-space-unit` × 18 (4.5rem) |
| `2` | `--cffy-space-8` (0.5rem) | `7` | × 24 (6rem) |
| `3` | `--cffy-space-16` (1rem) | `8` | × 30 (7.5rem) |
| `4` | `--cffy-space-24` (1.5rem) | `9` | × 36 (9rem) |
| `5` | `--cffy-space-48` (3rem) | `10` | × 48 (12rem) |

`gap-*` uses a finer scale: step `n` = `n` × `--cffy-space-unit` (`gap-3` = `--cffy-space-12` = 0.75rem, `gap-10` = 2.5rem).

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
- `--cffy-shadow-xs` - Extra small shadow
- `--cffy-shadow-sm` - Small/default shadow
- `--cffy-shadow-md` - Medium shadow
- `--cffy-shadow-lg` - Large shadow
- `--cffy-shadow-xl` - Extra large shadow

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
    --cffy-primary-base: #002662;
    --cffy-secondary-base: #22cbff;
    --cffy-accent-base: #0ee9a0;
    --cffy-surface-base: #ffffff;

    --cffy-font-primary: 'Host Grotesk', Tahoma, Geneva, Verdana, sans-serif;
    --cffy-font-secondary: 'Geist Mono', Tahoma, Geneva, Verdana, sans-serif;
}

.dark-mode {
    --cffy-primary-base: #c4dbff;
    --cffy-secondary-base: #90deff;
    --cffy-accent-base: #90ffda;
    --cffy-surface-base: #000000;
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

Set a component's public hooks (listed under [Component CSS Hooks](#component-css-hooks)) on `:root` for every instance, or on a wrapper or class for some of them. Never set the private `--_*` variables: they are internal, and overriding one also flattens every variant.

```css
/* Every card */
:root {
  --cffy-card-bg-color: var(--cffy-surface-pane);
  --cffy-card-radius: var(--cffy-radius-lg);
  --cffy-card-padding-inline: var(--cffy-space-32);
  --cffy-card-padding-block: var(--cffy-space-32);
}

/* Buttons inside the hero only */
.hero-content {
  --cffy-btn-height: 3rem;
  --cffy-btn-radius: var(--cffy-radius-full);
  --cffy-btn-padding-inline: var(--cffy-space-32);
}
```

Button colors come from the theme tokens (`--cffy-<color>-a10`, `--cffy-on-<color>`, `--cffy-<color>-container`), so recolor a variant by setting those on a wrapper rather than a per-variant variable.

## Best Practices

1. **Use SCSS variables for compile-time customization** - Better performance, smaller CSS
2. **Use CSS custom properties for runtime changes** - Dynamic theming, dark mode
3. **Start with semantic colors** - Use `var(--cffy-primary-a10)`, `var(--cffy-success-base)`, etc. instead of specific colors
4. **Maintain consistent spacing scale** - Keep spacing multiples of base unit
5. **Test with dark mode** - Ensure sufficient contrast in both modes
6. **Document custom variables** - Add comments for team reference

# Colorffy CSS Utilities Reference

Complete reference for utility classes in @colorffy/css.

## Table of Contents

- [Colors](#colors)
- [Spacing](#spacing)
- [Display](#display)
- [Typography](#typography)
- [Backgrounds](#backgrounds)
- [Borders](#borders)
- [Shadows](#shadows)
- [Filters](#filters)
- [Position](#position)
- [Sizing](#sizing)
- [Visibility](#visibility)
- [Transforms](#transforms)
- [Cursors](#cursors)
- [Opacity](#opacity)

## Colors

### Text Colors

**Pattern:** `text-{color}` where color is `primary`, `secondary`, `accent`, `success`, `warning`, `danger`, `info`, `dark`, `muted`, `light`, `white`

```html
<p class="text-primary">Primary text</p>
<p class="text-success">Success text</p>
<p class="text-muted">Muted text</p>
```

### Background Colors

**Pattern:** `bg-{color}` (same colors as text), plus `bg-{color}-fixed` for tonal variants

```html
<div class="bg-primary">Primary</div>
<div class="bg-primary-fixed">Tonal primary</div>
<div class="bg-gradient">Gradient</div>
```

### Border Colors

**Pattern:** `border-{color}` (same colors as text)

```html
<div class="border border-primary">Primary border</div>
```

## Spacing

Colorffy uses a consistent spacing system with sizes: `0`, `1`, `2`, `3`, `4`, `5`, `auto`.

### Margin

**Pattern:** `m{side}-{size}` where size is `0` (0), `1` (0.25rem), `2` (0.5rem), `3` (1rem), `4` (1.5rem), `5` (3rem), or `auto`

```html
<div class="m-3">All sides</div>
<div class="mx-3">Horizontal (left + right)</div>
<div class="my-3">Vertical (top + bottom)</div>
<div class="mt-3">Top</div>
<div class="me-3">Right (end)</div>
<div class="mb-3">Bottom</div>
<div class="ms-3">Left (start)</div>
```

### Padding

**Pattern:** `p{side}-{size}` (same size scale as margin)

```html
<div class="p-3">All sides</div>
<div class="px-3">Horizontal</div>
<div class="py-3">Vertical</div>
<div class="pt-3">Top</div>
<div class="pe-3">Right (end)</div>
<div class="pb-3">Bottom</div>
<div class="ps-3">Left (start)</div>
```

### Responsive Spacing

Add breakpoint prefixes: `sm`, `md`, `lg`, `xl`, `xxl`

```html
<!-- Margin responsive to breakpoints -->
<div class="m-2 m-md-4 m-lg-5">Responsive margin</div>

<!-- Padding responsive to breakpoints -->
<div class="p-1 p-sm-2 p-md-3">Responsive padding</div>
```

## Display

```html
<!-- Display types -->
<div class="d-none">Hidden</div>
<div class="d-block">Block</div>
<div class="d-inline-block">Inline block</div>
<div class="d-flex">Flex</div>
<div class="d-inline-flex">Inline flex</div>
<div class="d-grid">Grid</div>

<!-- Responsive display -->
<div class="d-none d-md-block">Hidden on mobile, block on medium+</div>
<div class="d-block d-lg-flex">Block on mobile, flex on large+</div>
```

## Typography

### Font Family

```html
<p class="font-primary">Primary font family</p>
<p class="font-secondary">Secondary font family</p>
```

### Font Size

**Pattern:** `fs-{100-600}` (100 smallest, 400 base, 600 largest), `fs-sm-{100-500}`, `fs-xl-100`

```html
<p class="fs-400">Base size</p>
<p class="fs-600">Largest</p>
<p class="fs-sm-300">Small variant</p>
<p class="fs-xl-100">Extra large</p>
```

### Font Weight

**Pattern:** `fw-{400,500,600,700,800}` (400=normal, 700=bold)

```html
<p class="fw-400">Normal</p>
<p class="fw-700">Bold</p>
```

### Text Alignment

```html
<p class="text-left">Left aligned</p>
<p class="text-start">Start aligned (LTR: left, RTL: right)</p>
<p class="text-center">Center aligned</p>
<p class="text-right">Right aligned</p>
<p class="text-end">End aligned (LTR: right, RTL: left)</p>

<!-- Responsive text alignment -->
<p class="text-start text-md-center text-lg-end">
  Responsive alignment
</p>
```

### Text Transform

```html
<p class="text-lowercase">lowercase text</p>
<p class="text-uppercase">UPPERCASE TEXT</p>
<p class="text-capitalize">Capitalized Text</p>
<p class="fl-capitalize">First Letter Capitalized</p>
```

### Text Wrapping

```html
<p class="text-wrap">Normal wrapping</p>
<p class="text-nowrap">No wrapping</p>
<p class="text-wrap-balance">Balanced text wrapping</p>
<p class="text-break">Break long words</p>
<p class="text-keep-all">Keep words together</p>
<p class="text-truncate">Truncate with ellipsis...</p>
```

### Line Height

```html
<p class="lh-1">Line height 1</p>
<p class="lh-sm">Small line height (1.25)</p>
<p class="lh-base">Base line height (1.5)</p>
<p class="lh-md">Medium line height (1.75)</p>
<p class="lh-lg">Large line height (2)</p>
```

### Text Decoration

```html
<p class="text-decoration-underline">Dashed underline</p>

<!-- Text with side lines -->
<div class="text-decoration-side-lines">
  Text with lines on both sides
</div>

<!-- Text with single line -->
<div class="text-decoration-side-lines decoration-single-line">
  Text with line on one side
</div>
```

### Text Headings

Predefined heading styles:

```html
<!-- Hero heading (extra large, bold) -->
<h1 class="text-hero">Hero Heading</h1>

<!-- Standard heading -->
<h2 class="text-heading">Standard Heading</h2>
<h2 class="text-heading heading-lg">Large Heading</h2>
<h2 class="text-heading heading-xl">Extra Large Heading</h2>

<!-- Subheading with optional paragraph -->
<h3 class="text-subheading">Subheading</h3>
<p>Subheading with description</p>

<!-- Subheading with custom margins -->
<h3 class="text-subheading subheading-m0">No margin</h3>
<h3 class="text-subheading subheading-m1">Small margin</h3>
<h3 class="text-subheading subheading-m2">Large margin</h3>

<!-- Subheading with linkable hash -->
<h3 class="text-subheading" data-link="true">
  Linkable Subheading (shows hash icon on hover)
</h3>

<!-- Title with hover effect on description -->
<h4 class="text-title-description">Title</h4>
<p class="subtitle-1">Highlighted on hover</p>
```

### Text Effects

```html
<!-- Highlight with pulse animation -->
<span class="text-highlight highlight-pulse">Pulsing text</span>
```

### Font Variations

```html
<!-- Tabular numbers (for consistent number alignment) -->
<p class="tabular-numbers">1234567890</p>
```

### Icon Weight (Material Icons)

For variable Material Icons:

```html
<span class="material-icons iw-semi-bold">home</span>
<span class="material-icons iw-bold">home</span>
<span class="material-icons ie-low">home</span>
```

## Backgrounds

### Background Colors

**Pattern:** `bg-{color}` where color is theme (primary, secondary, accent), semantic (success, warning, danger, info), neutral (dark, white), surface (body, surface-base, surface-pane), or special (frosted, transparent)

```html
<div class="bg-primary">Primary</div>
<div class="bg-success">Success</div>
<div class="bg-surface-pane">Surface pane</div>
<div class="bg-frosted">Frosted glass</div>
```

### Emphasis Backgrounds

**Pattern:** `bg-{color}-emphasis` (darker variants for primary, secondary, accent, success, warning, danger)

```html
<div class="bg-primary-emphasis">Primary emphasis</div>
```

### Fixed (Tonal) Backgrounds

**Pattern:** `bg-{color}-fixed` (35% opacity tonal variants for primary, secondary, accent, success, warning, danger)

```html
<div class="bg-primary-fixed">Tonal primary (35% opacity)</div>
```

### Background Opacity

**Pattern:** `bg-opacity-{0,10,25,50,75,100}` (combine with fixed backgrounds)

```html
<div class="bg-primary-fixed bg-opacity-50">50% opacity</div>
```

### Gradient Backgrounds

```html
<!-- Default gradient -->
<div class="bg-gradient">Gradient background</div>

<!-- Gradient variants (if available) -->
<div class="bg-gradient gradient-primary">Primary gradient</div>
<div class="bg-gradient gradient-secondary">Secondary gradient</div>
```

### Enhanced Backgrounds (Modern CSS)

Advanced background utilities using modern CSS color functions:

#### Color Mix

Blend two colors together:

```html
<div class="bg-color-mix">Mixed color background</div>
```

**CSS Variables:**
- `--_bg-color-one`: First color (default: primary)
- `--_bg-color-two`: Second color (default: white)
- `--_bg-color-mix-opacity`: Mix ratio (default: 90%)

```html
<div class="bg-color-mix" style="--_bg-color-one: var(--theme-accent-a10); --_bg-color-mix-opacity: 70%;">
  Custom color mix
</div>
```

#### Relative Color

Manipulate colors with relative color syntax:

```html
<div class="bg-relative-color">Relative color background</div>
```

**CSS Variables:**
- `--_bg-relative-base-color`: Base color to manipulate
- `--_bg-relative-alpha`: Alpha channel (0-1)

```html
<div class="bg-relative-color" style="--_bg-relative-base-color: var(--theme-success-a10); --_bg-relative-alpha: 0.5;">
  Semi-transparent success
</div>
```

#### Bordered Gradient

Background with gradient border effect:

```html
<div class="bg-bordered-gradient">
  Bordered gradient background
</div>
```

**CSS Variables:**
- `--_bg-color`: Background base color
- `--_bg-border-size`: Border thickness (default: 2px)

## Borders

### Border Sides

```html
<!-- All sides -->
<div class="border">All borders</div>

<!-- Individual sides -->
<div class="border-top">Top border</div>
<div class="border-end">Right border</div>
<div class="border-bottom">Bottom border</div>
<div class="border-start">Left border</div>

<!-- Remove borders -->
<div class="border-0">No border</div>
<div class="border-top-0">No top border</div>
```

### Border Width

**Pattern:** `border-{1-5}` (must combine with `border` class)

```html
<div class="border border-3">3px border</div>
```

### Border Radius

**Pattern:** `rounded-{none,sm,md,lg,xl,full}`, `rounded-{t|r|b|l}-{none,sm,md,lg,xl,full}`, `border-radius-{value}`

```html
<!-- All corners -->
<div class="rounded-md">Medium radius</div>
<div class="rounded-full">Fully rounded</div>

<!-- Individual sides (t=top, r=right, b=bottom, l=left) -->
<div class="rounded-t-lg">Top corners</div>
<div class="rounded-r-none">No right corners</div>
```

### Border Colors
See [Colors](#colors) section above.

## Shadows

**Pattern:** `shadow-{none,sm,md,lg,xl}` (omit size for default)

```html
<div class="shadow">Default shadow</div>
<div class="shadow-lg">Large shadow</div>
```

## Filters

### Invert

```html
<img class="filter-invert" src="...">Theme-aware invert</img>
```

### Hue Rotate

**Pattern:** `filter-hue-rotate-{0,15,30,45,60,90,180,270}`

```html
<img class="filter-hue-rotate-90" src="...">90 degrees</img>
```

### Grayscale, Sepia, Saturate, Brightness, Contrast

**Pattern:** `filter-{type}-{value}` where value is `0`, `25`, `50`, `75`, `100` (omit for 100), or `200` (sepia/saturate/brightness/contrast only)

```html
<!-- Grayscale -->
<img class="filter-grayscale" src="...">100% grayscale</img>
<img class="filter-grayscale-50" src="...">50% grayscale</img>

<!-- Sepia, Saturate, Brightness, Contrast use same pattern -->
<img class="filter-brightness-200" src="...">200% brightness</img>
```

## Position

```html
<div class="position-static">Static</div>
<div class="position-relative">Relative</div>
<div class="position-absolute">Absolute</div>
<div class="position-fixed">Fixed</div>
<div class="position-sticky">Sticky</div>
```

### Positioning Helpers

```html
<!-- Top/Bottom/Left/Right -->
<div class="position-absolute top-0">Top 0</div>
<div class="position-absolute bottom-0">Bottom 0</div>
<div class="position-absolute start-0">Left 0</div>
<div class="position-absolute end-0">Right 0</div>

<!-- Center positioning -->
<div class="position-absolute top-50 start-50 translate-middle">
  Centered
</div>
```

## Sizing

### Width & Height

**Pattern:** `{w|h}-{25,50,75,100,auto}`, `m{w|h}-100`, `min-{w|h}-0`

```html
<div class="w-100">100% width</div>
<div class="h-50">50% height</div>
<div class="mw-100">Max width 100%</div>
```

### Viewport Sizing

**Pattern:** `{vw|vh}-100`, `min-{vw|vh}-100`

```html
<div class="vh-100">100vh height</div>
<div class="min-vh-100">Min 100vh</div>
```

## Visibility

```html
<div class="visible">Visible</div>
<div class="invisible">Invisible (takes space)</div>

<!-- Screen reader only -->
<div class="visually-hidden">Hidden visually, accessible</div>
```

## Transforms

### Rotate

**Pattern:** `rotate-{0,45,90,180,270}`

```html
<div class="rotate-90">Rotate 90deg</div>
```

### Translate

**Pattern:** `translate-{x|y}-{0-5}` or `translate-{x|y}--{0-5}` (negative). Uses spacing scale (same as margin/padding).

```html
<div class="translate-x-3">Right 1rem</div>
<div class="translate-x--3">Left 1rem</div>
<div class="translate-y-3">Down 1rem</div>
<div class="translate-y--3">Up 1rem</div>
```

### Scale

**Pattern:** `scale-{0,50,75,100,125,150}` (100=normal)

```html
<div class="scale-100">Normal</div>
<div class="scale-150">150%</div>
```

## Cursors

**Pattern:** `cursor-{type}` where type is `auto`, `pointer`, `not-allowed`, `wait`, `move`, `grab`, `text`

```html
<div class="cursor-pointer">Pointer cursor</div>
```

## Opacity

**Pattern:** `opacity-{0,25,50,75,100}`

```html
<div class="opacity-50">50% opacity</div>
```

## Z-Index

**Pattern:** `z-{0,1,2,3,auto}` (1=10, 2=20, 3=30)

```html
<div class="z-3">Z-index 30</div>
```

## Aspect Ratio

**Pattern:** `ratio ratio-{1x1,4x3,16x9,21x9}`

```html
<div class="ratio ratio-16x9">16:9 Aspect</div>
```

## Overflow

```html
<div class="overflow-auto">Auto overflow</div>
<div class="overflow-hidden">Hidden overflow</div>
<div class="overflow-visible">Visible overflow</div>
<div class="overflow-scroll">Scroll overflow</div>

<!-- Directional overflow -->
<div class="overflow-x-auto">Horizontal scroll</div>
<div class="overflow-y-auto">Vertical scroll</div>
```

## Isolation

```html
<div class="isolate">Create stacking context</div>
<div class="isolation-auto">Auto isolation</div>
```

## Mix Blend Mode

**Pattern:** `mix-blend-{normal,multiply,screen,overlay,darken,lighten}`

```html
<div class="mix-blend-multiply">Multiply</div>
```

## Scroll Behavior

```html
<div class="scroll-smooth">Smooth scrolling</div>
<div class="scroll-auto">Auto scroll</div>
```

## User Select

```html
<div class="user-select-none">Cannot select</div>
<div class="user-select-all">Select all</div>
<div class="user-select-auto">Auto select</div>
```

## Quick Reference: Common Patterns

### Center Content

```html
<!-- Flexbox centering -->
<div class="d-flex justify-content-center align-items-center">
  Centered content
</div>

<!-- Absolute centering -->
<div class="position-relative">
  <div class="position-absolute top-50 start-50 translate-middle">
    Centered
  </div>
</div>

<!-- Text centering -->
<p class="text-center">Centered text</p>
```

### Card with Shadow

```html
<div class="bg-white rounded shadow-md p-4">
  <h3>Card Title</h3>
  <p>Card content</p>
</div>
```

### Responsive Spacing

```html
<div class="p-2 p-md-4 p-lg-5 m-1 m-md-2 m-lg-3">
  Responsive padding and margin
</div>
```

### Full-Width Banner

```html
<div class="w-100 bg-primary text-white p-3 text-center">
  Full-width banner
</div>
```

### Sticky Header

```html
<header class="position-sticky top-0 bg-white shadow z-3">
  Sticky header
</header>
```

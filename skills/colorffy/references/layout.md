# Colorffy CSS Layout Systems Reference

Complete reference for Grid and Flexbox layout systems in @colorffy/css.

## Table of Contents

- [Container System](#container-system)
- [12-Column Layout System](#12-column-layout-system)
- [CSS Grid System](#css-grid-system)
- [Flexbox Utilities](#flexbox-utilities)
- [Gap Utilities](#gap-utilities)
- [Alignment Utilities](#alignment-utilities)
- [Responsive Breakpoints](#responsive-breakpoints)

## Container System

Containers provide a responsive fixed-width or fluid-width layout wrapper.

### Fixed Container

Responsive container with max-width at each breakpoint:

```html
<div class="container">
  Content adapts to breakpoint
</div>
```

**Breakpoint behavior:**
- `< 576px`: 100% width
- `≥ 576px (sm)`: max-width 540px
- `≥ 768px (md)`: max-width 720px
- `≥ 992px (lg)`: max-width 960px
- `≥ 1200px (xl)`: max-width 1140px
- `≥ 1400px (xxl)`: max-width 1320px

### Fluid Container

Full-width container at all breakpoints:

```html
<div class="container-fluid">
  Always 100% width
</div>
```

## 12-Column Layout System

Colorffy uses a flexbox-based 12-column layout system with `.row` and `.col-*` classes.

### Basic Grid

```html
<div class="container">
  <div class="row">
    <div class="col">Column 1</div>
    <div class="col">Column 2</div>
    <div class="col">Column 3</div>
  </div>
</div>
```

### Fixed Column Widths

Specify column width (1-12):

```html
<div class="row">
  <div class="col-4">4 columns wide</div>
  <div class="col-8">8 columns wide</div>
</div>

<div class="row">
  <div class="col-6">Half width</div>
  <div class="col-6">Half width</div>
</div>

<div class="row">
  <div class="col-3">Quarter</div>
  <div class="col-3">Quarter</div>
  <div class="col-3">Quarter</div>
  <div class="col-3">Quarter</div>
</div>
```

### Responsive Columns

Use breakpoint prefixes: `sm`, `md`, `lg`, `xl`, `xxl`

```html
<!-- Stack on mobile, 2 columns on tablet+ -->
<div class="row">
  <div class="col-12 col-md-6">Column 1</div>
  <div class="col-12 col-md-6">Column 2</div>
</div>

<!-- 1 col mobile, 2 cols tablet, 4 cols desktop -->
<div class="row">
  <div class="col-12 col-md-6 col-lg-3">1</div>
  <div class="col-12 col-md-6 col-lg-3">2</div>
  <div class="col-12 col-md-6 col-lg-3">3</div>
  <div class="col-12 col-md-6 col-lg-3">4</div>
</div>
```

### Auto-Width Columns

Columns automatically size to fit content:

```html
<div class="row">
  <div class="col">Auto-sized</div>
  <div class="col">Auto-sized</div>
  <div class="col">Auto-sized</div>
</div>
```

### Mixed Column Widths

Combine fixed and auto-width columns:

```html
<div class="row">
  <div class="col-3">Fixed 3 cols</div>
  <div class="col">Auto fills remaining</div>
  <div class="col-4">Fixed 4 cols</div>
</div>
```

### Nested Grids

```html
<div class="row">
  <div class="col-8">
    <div class="row">
      <div class="col-6">Nested 1</div>
      <div class="col-6">Nested 2</div>
    </div>
  </div>
  <div class="col-4">Sidebar</div>
</div>
```

### Column Offset

Offset columns (not shown in default system, but common pattern):

```html
<!-- Center a 6-column element -->
<div class="row">
  <div class="col-6 mx-auto">Centered column</div>
</div>
```

## CSS Grid System

Modern CSS Grid utilities for creating responsive grid layouts.

### Grid Template Columns & Rows

Define grid columns and rows using repeat utilities:

```html
<!-- Grid with 3 columns -->
<div class="d-grid grid-repeat-cols-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Grid with 4 columns and 3 rows -->
<div class="d-grid grid-repeat-cols-4 grid-repeat-rows-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <!-- ... -->
</div>

<!-- Responsive grid columns -->
<div class="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-lg-4">
  <!-- 1 col mobile, 2 cols tablet, 4 cols desktop -->
</div>
```

**Available classes:**
- `grid-repeat-cols-{1-12}` - Create 1-12 equal columns
- `grid-repeat-rows-{1-12}` - Create 1-12 equal rows
- `grid-repeat-cols-{breakpoint}-{1-12}` - Responsive columns
- `grid-repeat-rows-{breakpoint}-{1-12}` - Responsive rows

### Grid Column Span

Control how many columns an item spans:

```html
<div class="d-grid grid-repeat-cols-4">
  <div class="grid-span-col-2">Spans 2 columns</div>
  <div>1 column</div>
  <div>1 column</div>
  <div class="grid-span-col-3">Spans 3 columns</div>
  <div>1 column</div>
</div>

<!-- Responsive spanning -->
<div class="d-grid grid-repeat-cols-4">
  <div class="grid-span-col-4 grid-span-col-md-2">
    Full width on mobile, half on tablet+
  </div>
</div>
```

**Available classes:**
- `grid-span-col-{1-12}` - Span 1-12 columns
- `grid-span-col-{breakpoint}-{1-12}` - Responsive spanning

### Grid Positioning

Explicitly position items in the grid:

```html
<div class="d-grid grid-repeat-cols-4">
  <!-- Start at column 2, end at column 4 -->
  <div class="grid-start-col-2 grid-end-col-4">Positioned item</div>
  
  <!-- Start at row 1, end at row 3 -->
  <div class="grid-start-row-1 grid-end-row-3">Tall item</div>
</div>
```

**Available classes:**
- `grid-start-col-{1-12}` - Start at column position
- `grid-end-col-{1-12}` - End at column position
- `grid-start-row-{1-12}` - Start at row position
- `grid-end-row-{1-12}` - End at row position

### Auto-Fit & Auto-Fill Grids

Create responsive grids that automatically adjust column count:

```html
<!-- Auto-fit: Expands columns when space available -->
<div class="d-grid grid-auto-fit-cols grid-list">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- Columns expand to fill available space -->
</div>

<!-- Auto-fill: Doesn't expand columns -->
<div class="d-grid grid-auto-fill-cols grid-list">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- Maintains minimum column width -->
</div>
```

**Note:** Default minimum column size is 200px, changes to 1fr on containers ≤ 400px.

### Auto Columns & Rows

Control the size of implicitly created grid tracks:

```html
<!-- Auto columns -->
<div class="d-grid grid-auto-cols">Auto-sized columns</div>
<div class="d-grid grid-min-cols">Min-content columns</div>
<div class="d-grid grid-max-cols">Max-content columns</div>
<div class="d-grid grid-fr-cols">Fractional unit columns</div>

<!-- Auto rows -->
<div class="d-grid grid-auto-rows">Auto-sized rows</div>
<div class="d-grid grid-min-rows">Min-content rows</div>
<div class="d-grid grid-max-rows">Max-content rows</div>
<div class="d-grid grid-fr-rows">Fractional unit rows</div>
```

### Grid Auto Flow

Control how items are auto-placed in the grid:

```html
<div class="d-grid grid-auto-flow-row">Fill rows first (default)</div>
<div class="d-grid grid-auto-flow-column">Fill columns first</div>
<div class="d-grid grid-auto-flow-dense">Dense packing algorithm</div>
<div class="d-grid grid-auto-flow-row-dense">Row-first with dense packing</div>
<div class="d-grid grid-auto-flow-column-dense">Column-first with dense packing</div>
```

### Subgrid

Inherit grid definition from parent:

```html
<div class="d-grid grid-repeat-cols-4">
  <div class="grid-span-col-2 d-grid grid-subgrid-cols">
    <!-- This grid inherits the parent's column tracks -->
    <div>Nested 1</div>
    <div>Nested 2</div>
  </div>
</div>
```

**Available classes:**
- `grid-subgrid-cols` - Inherit parent column tracks
- `grid-subgrid-rows` - Inherit parent row tracks

### CSS Grid Examples

#### Photo Gallery

```html
<div class="d-grid grid-repeat-cols-2 grid-repeat-cols-md-3 grid-repeat-cols-lg-4 gap-3">
  <div class="grid-span-col-2"><img src="featured.jpg" class="w-100"></div>
  <div><img src="photo1.jpg" class="w-100"></div>
  <div><img src="photo2.jpg" class="w-100"></div>
  <div><img src="photo3.jpg" class="w-100"></div>
  <!-- ... -->
</div>
```

#### Dashboard Layout with CSS Grid

```html
<div class="d-grid grid-repeat-cols-4 grid-repeat-rows-3 gap-3" style="min-height: 100vh;">
  <!-- Header spans all columns -->
  <header class="grid-span-col-4">Header</header>
  
  <!-- Sidebar spans 2 rows -->
  <aside class="grid-start-row-2 grid-end-row-4">Sidebar</aside>
  
  <!-- Main content -->
  <main class="grid-span-col-3 grid-start-row-2">Main content</main>
  
  <!-- Footer spans all columns -->
  <footer class="grid-span-col-4">Footer</footer>
</div>
```

#### Responsive Card Grid

```html
<div class="d-grid grid-auto-fit-cols gap-4 grid-list">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <!-- Automatically responsive -->
</div>
```

## Flexbox Utilities

Powerful utilities for flex layouts.

### Flex Container

```html
<!-- Enable flexbox -->
<div class="d-flex">Flex container</div>

<!-- Inline flex -->
<div class="d-inline-flex">Inline flex container</div>
```

### Flex Direction

```html
<div class="d-flex flex-row">Horizontal (default)</div>
<div class="d-flex flex-row-reverse">Horizontal reversed</div>
<div class="d-flex flex-column">Vertical</div>
<div class="d-flex flex-column-reverse">Vertical reversed</div>

<!-- Responsive direction -->
<div class="d-flex flex-column flex-md-row">
  Stack on mobile, horizontal on tablet+
</div>
```

### Flex Wrap

```html
<div class="d-flex flex-wrap">Items wrap to new lines</div>
<div class="d-flex flex-wrap-reverse">Wrap in reverse</div>
<div class="d-flex flex-nowrap">No wrapping (default)</div>
```

### Justify Content (Horizontal Alignment)

**Pattern:** `justify-content-{start,end,center,between,around,evenly}` with responsive variants

```html
<div class="d-flex justify-content-center">Center</div>
<div class="d-flex justify-content-between">Space between</div>
<div class="d-flex justify-content-start justify-content-md-center">Responsive</div>
```

### Align Items (Vertical Alignment)

**Pattern:** `align-items-{start,end,center,baseline,stretch}` with responsive variants

```html
<div class="d-flex align-items-center">Center</div>
<div class="d-flex align-items-start align-items-md-center">Responsive</div>
```

### Align Self (Individual Item Alignment)

**Pattern:** `align-self-{start,end,center,baseline,stretch}`

```html
<div class="d-flex">
  <div class="align-self-start">Top</div>
  <div class="align-self-center">Middle</div>
  <div class="align-self-end">Bottom</div>
</div>
```

### Align Content (Multi-line Alignment)

**Pattern:** `align-content-{start,center,between,around,stretch}` (for wrapped flex containers)

```html
<div class="d-flex flex-wrap align-content-center">Center lines</div>
```

### Flex Grow & Shrink

```html
<!-- Grow to fill space -->
<div class="d-flex">
  <div class="flex-grow-1">Grows</div>
  <div>Fixed size</div>
</div>

<!-- Prevent shrinking -->
<div class="d-flex">
  <div class="flex-shrink-0">Won't shrink</div>
  <div class="flex-shrink-1">Can shrink</div>
</div>

<!-- Fill available space -->
<div class="d-flex">
  <div class="flex-fill">Fills space</div>
  <div class="flex-fill">Fills space</div>
</div>
```

### Flex Order

```html
<div class="d-flex">
  <div class="order-3">Third</div>
  <div class="order-1">First</div>
  <div class="order-2">Second</div>
</div>

<!-- Responsive order -->
<div class="d-flex">
  <div class="order-2 order-md-1">Reorder on breakpoint</div>
  <div class="order-1 order-md-2">Reorder on breakpoint</div>
</div>
```

## Gap Utilities

**Pattern:** `gap-{0-5}`, `gap-inline-{0-5}`, `gap-block-{0-5}` with responsive variants. Sizes: 0 (0), 1 (0.25rem), 2 (0.5rem), 3 (1rem), 4 (1.5rem), 5 (3rem)

```html
<div class="d-flex gap-3">Gap between all items</div>
<div class="d-flex gap-inline-3">Horizontal spacing</div>
<div class="d-flex flex-column gap-block-3">Vertical spacing</div>
<div class="d-flex gap-2 gap-md-3 gap-lg-4">Responsive</div>
```

## Alignment Utilities

**Vertical:** `align-{baseline,top,middle,bottom,text-top,text-bottom}` (inline/table)

**Text:** `text-{start,center,end}` with responsive variants

```html
<span class="align-middle">Middle</span>
<p class="text-start text-md-center text-lg-end">Responsive text</p>
```

## Responsive Breakpoints

| Breakpoint | Infix | Width | Class Example |
|------------|-------|-------|---------------|
| XS | *none* | < 576px | `col-12` |
| SM | `sm` | ≥ 576px | `col-sm-6` |
| MD | `md` | ≥ 768px | `col-md-4` |
| LG | `lg` | ≥ 992px | `col-lg-3` |
| XL | `xl` | ≥ 1200px | `col-xl-2` |
| XXL | `xxl` | ≥ 1400px | `col-xxl-1` |

**Pattern:** `{property}-{breakpoint}-{value}`

```html
<div class="d-none d-md-block">Hidden mobile, visible tablet+</div>
<div class="col-12 col-md-6 col-lg-4">Responsive columns</div>
```

## Layout Patterns

### Holy Grail Layout

```html
<div class="d-flex flex-column min-vh-100">
  <header class="bg-primary text-white p-3">Header</header>
  <div class="d-flex flex-grow-1">
    <aside class="col-md-3 bg-primary p-3">Sidebar</aside>
    <main class="col-md-9 p-3">Main Content</main>
  </div>
  <footer class="bg-secondary text-white p-3">Footer</footer>
</div>
```

### Card Grid

```html
<div class="container">
  <div class="row gap-3">
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card">Card 1</div>
    </div>
    <!-- More cards -->
  </div>
</div>
```

### Centered Hero

```html
<section class="d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
  <h1>Hero Title</h1>
  <button class="btn btn-filled">CTA</button>
</section>
```

### Dashboard Layout

```html
<div class="d-flex">
  <aside class="bg-secondary text-white p-3" style="width: 250px;">
    <div>Logo</div>
    <nav class="d-flex flex-column gap-2">
      <a href="#">Dashboard</a>
    </nav>
  </aside>
  <main class="flex-grow-1">
    <header class="bg-primary shadow p-3">Header</header>
    <div class="p-4">Content</div>
  </main>
</div>
```

# Styling Guide

Approaches for styling Colorffy UI components and integrating with Colorffy CSS.

## Styling Philosophy

**Key Insight:** Colorffy UI components are unstyled/headless by default. This gives you three approaches:

1. **Use Colorffy CSS** - Pre-styled, consistent design system
2. **Custom CSS/SCSS** - Full control, style semantic class names
3. **Hybrid** - Colorffy CSS base + custom overrides

## Approach 1: Using Colorffy CSS

Colorffy CSS provides automatic styling for all Colorffy UI components through semantic class names.

### Basic Usage

```vue
<template>
  <!-- Component automatically styled by Colorffy CSS -->
  <UiButton variant="filled" color="primary" text="Styled Button" />
  
  <!-- Card with automatic styling -->
  <UiCard>
    <template #body>
      <h3>Card Title</h3>
      <p>Styled by Colorffy CSS</p>
    </template>
  </UiCard>
</template>
```

### Enhancing with Utility Classes

```vue
<template>
  <!-- Component + utility classes -->
  <UiButton 
    variant="filled" 
    color="primary"
    class="shadow-lg rounded-lg px-5"
    text="Enhanced Button" 
  />
  
  <!-- Card with utilities -->
  <UiCard class="shadow-lg rounded-lg">
    <template #body>
      <h3 class="text-primary fw-800 mb-3">Card Title</h3>
      <p class="text-muted">Card content with utilities</p>
    </template>
  </UiCard>
</template>
```

### Common Utility Patterns

```html
<!-- Spacing -->
<div class="p-4 m-3 gap-2">
  <UiButton text="Button 1" />
  <UiButton text="Button 2" />
</div>

<!-- Colors -->
<div class="bg-primary-fixed text-primary">
  Tonal background with primary text
</div>

<!-- Typography -->
<h1 class="text-hero fw-800 text-primary">
  Hero Heading
</h1>

<!-- Layout -->
<div class="d-flex justify-content-between align-items-center gap-3">
  <UiButton text="Left" />
  <UiButton text="Right" />
</div>
```

## Approach 2: Custom Styling

Style components using their semantic class names without Colorffy CSS.

### Component Class Names

Colorffy UI components use predictable class names:

```css
/* Button classes */
.btn { /* Base button */ }
.btn-filled { /* Filled variant */ }
.btn-outline { /* Outline variant */ }
.btn-tonal { /* Tonal variant */ }
.btn-text { /* Text variant */ }

/* Size modifiers */
.btn-sm { /* Small size */ }
.btn-md { /* Medium size */ }
.btn-lg { /* Large size */ }

/* State modifiers */
.btn-loading { /* Loading state */ }
.btn-disabled { /* Disabled state */ }
```

### Custom Button Styling

```css
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-filled {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.btn-filled:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transform: translateY(-1px);
}

.btn-outline {
  background: transparent;
  border: 2px solid currentColor;
  color: #667eea;
}

.btn-sm { padding: 0.375rem 0.75rem; font-size: 0.75rem; }
.btn-lg { padding: 0.75rem 1.5rem; font-size: 1rem; }
```

### Custom Card Styling

```css
.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.card-header {
  padding: 1rem;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
  font-weight: 600;
}

.card-body {
  padding: 1.5rem;
}

.card-footer {
  padding: 1rem;
  background: #f9fafb;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}
```

### Custom Input Styling

```css
.form-control {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  transition: all 0.2s;
}

.form-control:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-control:disabled {
  background: #f3f4f6;
  cursor: not-allowed;
  opacity: 0.6;
}

.form-control-error {
  border-color: #ef4444;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: #374151;
}

.form-error {
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #ef4444;
}
```

## Approach 3: Hybrid Styling

Combine Colorffy CSS with custom overrides for best of both worlds.

### Component-Level Overrides

```vue
<template>
  <UiButton 
    variant="filled" 
    color="primary"
    class="custom-button"
    text="Hybrid Styling"
  />
</template>

<style scoped>
.custom-button {
  /* Override Colorffy CSS defaults */
  font-size: 1.125rem;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
}

.custom-button:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}
</style>
```

### CSS Variable Overrides

```css
/* Override Colorffy CSS variables */
:root {
  --btn-padding: 0.75rem 1.5rem;
  --btn-border-radius: 0.5rem;
  --btn-font-weight: 600;
  
  --card-padding: 2rem;
  --card-border-radius: 1rem;
  --card-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Selective Module Imports

Import only specific Colorffy CSS modules:

```scss
// Import only what you need
@use '@colorffy/css/scss/base/typography';
@use '@colorffy/css/scss/utilities/spacing';
@use '@colorffy/css/scss/utilities/colors';
@use '@colorffy/css/scss/layout/grid';

// Then add custom component styles
@import './custom-buttons';
@import './custom-cards';
```

## Integration with Other CSS Frameworks

### With Tailwind CSS

```vue
<template>
  <!-- Colorffy component + Tailwind classes -->
  <UiButton 
    variant="filled"
    class="hover:scale-105 active:scale-95 transition-transform"
    text="Tailwind Enhanced"
  />
  
  <UiCard class="shadow-xl hover:shadow-2xl transition-shadow">
    <template #body class="prose">
      <h3>Content with Tailwind Typography</h3>
    </template>
  </UiCard>
</template>
```

### With UnoCSS

```vue
<template>
  <UiButton 
    variant="filled"
    class="shadow-lg hover:shadow-xl transition-shadow-200"
    text="UnoCSS Enhanced"
  />
</template>
```

### With Plain CSS-in-JS

```vue
<script setup lang="ts">
const buttonStyle = {
  fontSize: '1.125rem',
  padding: '1rem 2rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
}
</script>

<template>
  <UiButton 
    variant="filled"
    :style="buttonStyle"
    text="CSS-in-JS"
  />
</template>
```

## Best Practices

### 1. Choose One Primary Approach

**Recommendation:**
- Small projects: Colorffy CSS (fastest)
- Design system required: Custom CSS (full control)
- Existing codebase: Hybrid (gradual adoption)

### 2. Maintain Consistency

```vue
<!-- ❌ Avoid mixing approaches inconsistently -->
<UiButton class="custom-style" /><!-- Custom CSS -->
<UiButton class="btn-filled" />  <!-- Colorffy CSS -->

<!-- ✅ Use consistent approach -->
<UiButton variant="filled" class="shadow-lg" />
<UiButton variant="outline" class="shadow-md" />
```

### 3. Use CSS Variables for Theming

```css
/* Define theme once */
:root {
  --primary-color: #667eea;
  --spacing-unit: 0.25rem;
}

/* Use throughout */
.btn-filled {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
```

### 4. Leverage Scoped Styles

```vue
<style scoped>
/* Only affects this component */
.card {
  border-radius: 1rem;
}
</style>
```

### 5. Extract Reusable Styles

```css
/* styles/components.css */
.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.card-hover {
  transition: transform 0.2s;
}

.card-hover:hover {
  transform: translateY(-4px);
}
```

```vue
<template>
  <UiButton class="btn-gradient" />
  <UiCard class="card-hover" />
</template>
```

## Performance Considerations

1. **Colorffy CSS** - One CSS bundle, minimal runtime
2. **Custom CSS** - Control bundle size, load only needed styles
3. **Hybrid** - Balance between convenience and size

**Tree-shaking:** Works best with individual component imports and selective CSS module imports.

## Troubleshooting

**Styles not applying:**
- Check CSS import order
- Verify class names match component structure
- Use browser devtools to inspect actual classes
- Check CSS specificity conflicts

**Colorffy CSS overriding custom styles:**
- Increase specificity or use `!important` sparingly
- Override CSS variables instead
- Load custom CSS after Colorffy CSS

**Tailwind/UnoCSS purging Colorffy classes:**
- Add Colorffy package to safelist
- Configure PurgeCSS/UnoCSS to preserve classes

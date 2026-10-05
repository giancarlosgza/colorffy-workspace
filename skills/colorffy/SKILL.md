---
name: colorffy
description: Complete guide for Colorffy UI and CSS frameworks. Colorffy UI is a modern Vue 3 / Nuxt 3 component library with 70+ unstyled, headless components (buttons, cards, forms, dialogs, navigation, etc.) with TypeScript support. Colorffy CSS is an expressive SCSS framework with tonal color system, utility classes, and layout systems (grid, flexbox). Use when working with Colorffy packages, setting up Vue/Nuxt projects with Colorffy, choosing components, applying styles, using utility classes, implementing layouts, or integrating Colorffy UI with Colorffy CSS or custom styles.
---

# Colorffy

Complete framework for building Vue 3 and Nuxt 3 applications with Colorffy UI (component library) and Colorffy CSS (utility framework).

## Quick Reference Index

| Category | Guide | Description |
|----------|-------|-------------|
| **Getting Started** | **[Installation & Setup](references/installation.md)** | Install packages, configure Vue 3/Nuxt 3 |
| | **[Component Selection Guide](references/component-guide.md)** | Choose the right components for your needs |
| | **[Styling Guide](references/styling-guide.md)** | Colorffy CSS integration, custom styling approaches |
| **Theming** | **[Theming System](references/theming.md)** | Customize colors, typography, spacing, dark mode |
| **Reference** | **[Components API](references/components.md)** | Full reference for 70+ components |
| | **[CSS Utilities](references/utilities.md)** | Complete utility class reference |
| | **[Layout Systems](references/layout.md)** | Grid and Flexbox layout utilities |
| | **[Official Documentation](https://colorffy-ui-docs.pages.dev/)** | Hosted Colorffy documentation |
| | **[Changelog](https://colorffy-ui-docs.pages.dev/changelog)** | Notable changes per release, newest first |
| **Patterns** | **[Best Practices](references/best-practices.md)** | Common patterns, workflows, tips |

## Framework Overview

**Colorffy UI** (@colorffy/ui)
- 70+ Vue 3 components (buttons, forms, cards, dialogs, navigation, tables, etc.)
- Unstyled/headless by default - full control over styling
- TypeScript support, tree-shakeable
- Works with any styling approach

**Colorffy CSS** (@colorffy/css)
- Expressive SCSS framework with tonal color system
- Complete utility class library
- Flexible grid and flexbox layouts
- Dark mode support, customizable at runtime through `--cffy-*` CSS tokens

**Key Insight:** Colorffy UI components are unstyled by default. Style with Colorffy CSS, custom CSS, or any CSS framework.

## Quick Start

### Vue 3

```bash
npm install @colorffy/ui @colorffy/css
npm install @vueuse/components floating-vue
```

```typescript
// main.ts
import { createApp } from 'vue'
import ColorffyUI from '@colorffy/ui'
import '@colorffy/css'

const app = createApp(App)
app.use(ColorffyUI)
app.mount('#app')
```

### Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@colorffy/css']
})

// plugins/colorffy-ui.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ColorffyUI)
})
```

**[See complete installation guide →](references/installation.md)**

## Usage Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UiButton, UiCard, UiInputText, UiModal } from '@colorffy/ui'

const modal = ref()
const name = ref('')
</script>

<template>
  <!-- Components with Colorffy CSS styling -->
  <UiCard class="shadow-lg rounded-lg">
    <template #body>
      <h2 class="text-primary fw-bold mb-3">Welcome</h2>
      <UiInputText
        id="name"
        v-model="name"
        label="Name"
        placeholder="Enter your name"
        class="mb-3"
      />
      <UiButton
        variant="filled"
        color="primary"
        text="Open Modal"
        @click="modal.showDialog()"
      />
    </template>
  </UiCard>

  <!-- Dialogs open through their exposed showDialog() / closeDialog() -->
  <UiModal ref="modal" title="Hello" size="sm">
    <template #body>
      <p>Hello, {{ name }}!</p>
    </template>
  </UiModal>
</template>
```

## When to Read Each Guide

**[Installation & Setup](references/installation.md)** - When you need to:
- Install Colorffy in Vue 3 or Nuxt 3
- Configure SCSS customization
- Setup auto-imports
- Troubleshoot installation issues

**[Component Selection Guide](references/component-guide.md)** - When you need to:
- Choose the right component for a UI pattern
- Understand when to use one component vs another
- Find components by use case (forms, navigation, feedback, etc.)
- See component decision trees

**[Styling Guide](references/styling-guide.md)** - When you need to:
- Understand styling approaches (Colorffy CSS, custom, hybrid)
- Style components with Colorffy CSS utilities
- Write custom CSS for components
- Integrate with Tailwind, UnoCSS, or other frameworks

**[Theming System](references/theming.md)** - When you need to:
- Customize colors, typography, spacing
- Setup dark mode
- Override SCSS variables
- Configure design tokens

**[Components API](references/components.md)** - When you need to:
- Complete component API reference
- Specific props, slots, events documentation
- Component-specific features and options

**[CSS Utilities](references/utilities.md)** - When you need to:
- Specific utility class names
- Class patterns for spacing, colors, typography
- Responsive utility variants

**[Layout Systems](references/layout.md)** - When you need to:
- Build responsive layouts with grid or flexbox
- Understand column configurations
- Create complex layouts with alignment and gap utilities

**[Best Practices](references/best-practices.md)** - When you need to:
- Common patterns (forms, modals, tables, toasts)
- Code examples for typical use cases
- Performance tips and anti-patterns to avoid

## Component Categories Quick Reference

**Layout:** UiHeaderContent, UiPaneContent, UiCard
**Navigation:** UiNavbar (with UiNavbarBrand, UiNavbarTitle, UiNavbarToggle, UiNavbarCollapse, UiNavbarNav, UiNavbarLink, UiNavbarItem, UiNavbarAvatar, UiNavbarMobileMenu), UiTabs, UiNavigationBar, UiSegmentedControls, UiBreadcrumb, UiPagination, UiPopoverMenu
**Sidebar:** UiSidebar (`#header` / `#body` / `#footer` slots), UiSidebarGroup, UiSidebarLink, UiSidebarText, UiSidebarDropdown
**Buttons:** UiButton, UiButtonMenu, UiButtonMenuSubmenu, UiButtonToggleGroup, UiButtonTooltip
**Forms:** UiInputText, UiInputTextarea, UiInputSelect, UiInputCombobox, UiInputMultiSelect, UiInputCheck, UiInputRadio, UiInputRange, UiInputFile, UiInputPassword, UiInputSearch, UiInputTags, UiInputOtp, UiInputColorPicker, UiInputPhoneNumber
**Dialogs:** UiModal, UiConfirmModal
**Feedback:** UiAlert, UiAlertToast, UiLoading, UiEmpty
**Data:** UiDatatable, UiListGroup, UiAccordion
**Media:** UiAvatar, UiIconMaterial

**[See complete component list →](references/components.md)**

## Utility Class Categories Quick Reference

**Spacing:** `m-*`, `p-*`, `gap-*` (`px`, `0`–`10`, responsive)
**Colors:** `text-*`, `bg-*`, `border-*` (primary, success, danger, etc.)
**Typography:** `display-1`–`display-4` (prominent headings), `fs-*` (t-shirt: `4xs`–`5xl`, anchored at `base`), `fw-*` (400-800), `text-{align}`
**Layout:** `d-flex`, `d-grid`, `justify-content-*`, `align-items-*`
**Borders:** `border`, `rounded-{size}`
**Effects:** `shadow-*`, `opacity-*`, `filter-*`

**[See complete utilities reference →](references/utilities.md)**

## Design Tokens

Custom CSS written alongside Colorffy should consume the design tokens instead of hardcoded values. Every public token is `--cffy-*`; never write an unprefixed Colorffy name, and never set a private `--_*` variable (set the component's `--cffy-<component>-<property>` hook instead).

- **Spacing:** `var(--cffy-space-4/6/8/12/14/16/20/24/32/48)` — number = px; all derived from `--cffy-space-unit` (override it for runtime density)
- **Font sizes:** `var(--cffy-fs-4xs…5xl)` + `var(--cffy-fs-{step}--line-height)` companions
- **Widths:** `var(--cffy-container-3xs…7xl)` (16rem … 80rem), also as `max-w-{size}` utilities
- **Colors:** `--cffy-<color>-a10` for a solid fill with `--cffy-on-<color>` text; `--cffy-<color>-container` for a tinted surface with `--cffy-on-<color>-container` text

**[See theming reference →](references/theming.md)**

## Upgrading from 2.x

3.0 is a breaking release. When existing code uses a 2.x name, rewrite it following the [migration guide](https://colorffy-ui-docs.pages.dev/migration#upgrading-to-30), in this order:

1. **Deprecations removed:** ordinal font sizes (`--fs-100`, `.fs-500`, …) → the t-shirt scale (`--cffy-fs-4xl`, `.fs-lg`; the classes also set the paired line-height). `$space-1/2/3` → `var(--cffy-space-16/32/48)`. The `$primary` … `$muted`, `$primary-colors` and `$font-*` SCSS variables are gone → set the `--cffy-color-brand-*` / `--cffy-font-*` tokens.
2. **Namespace:** `--theme-*` swapped `theme-` for `--cffy-` (`--theme-primary-a10` → `--cffy-primary-a10`); every other public name gained the prefix (`--space-16` → `--cffy-space-16`, `--card-bg-color` → `--cffy-card-bg-color`). `--theme-nav-drawer-width` → `--cffy-sidebar-width`. Private `--_*` variables were renamed after their hooks, so overrides of old privates silently stop applying: set the public hook. The PrimeVue skin (`_prime.scss`, `--p-*`) is gone: move to `UiInputCombobox` / `UiInputMultiSelect` / `UiInputDate`, or copy the partial from `@colorffy/css@2.8`.
3. **Tonal colors:** text on a tinted surface reads `--cffy-on-<color>-container`, not `a90` (now the darkest ramp step in both modes). `--cffy-on-<color>-inverse` → `--cffy-on-background`. SCSS `btn-tonal()` / `container-tonal()` take the container token instead of an `$isDark` flag.
4. **Removed component API:** `UiPopoverMenu` `user` / `avatarUrl` / `avatarCustomClass` / `subtitle` (→ `UiPopoverMenuUser` in `#header`), `#body-extra` and the default slot (→ `#body`); `UiSidebarHeader` / `Body` / `Footer` and `UiSidebar`'s default slot (→ `#header` / `#body` / `#footer`, with `header-class` / `body-class` / `footer-class`); `UiEmpty` `#button` (→ `#action`); `UiInputFile` `large` (→ `size="lg"`); `BaseSkeleton` `isThumbnail` (→ `variant="thumbnail"`); `ISegmentedTab.position`; `UiButtonToggleGroup` `groupLabel` (→ `ariaLabel`); `UiDatatable` `skeletonCols` / `skeletonColExpanded` / `isExpanded` (the skeleton matches the visible columns).
5. **Events:** no `on` prefix — `@click`, `@update`, `@close` (dialogs), `@option-click`. Tabs and segmented controls use `v-model:active-tab`, the stepper `v-model:active-step`.
6. **ids:** the `id` prop renders unchanged on the main element or field (2.x wrote `button-<id>`, `<id>-input-text`, …); the color picker's text field is `<id>-text`.

Hand-written `@colorffy/css` markup also needs, since 2.5:

- **Tabs:** `.tabs-navigation` draws its active indicator with CSS anchor positioning, so the list needs a final `<li class="tab-indicator" aria-hidden="true" role="presentation"></li>`. `UiTabs` renders it already.
- **Chips:** `.btn-chip` is the outline container and `.chip-elevated` the raised one; a color class (`.chip-secondary`, `.chip-neutral`) only applies together with `.chip-active`.
- **Cards:** `.card-outline` / `.card-pane` / `.card-elevated` are static surfaces (one per card); add `.card-selectable` or `.card-link` for hover and press feedback.
- **Popover menu:** in browsers with the Popover API and CSS anchor positioning the panel is a top-layer `popover="auto"`; custom CSS that repositioned `.popover-menu` must target `.popover-menu[popover]`, or opt out with `:native-popover="false"`.

**[See the migration guide →](https://colorffy-ui-docs.pages.dev/migration)** · **[Changelog →](https://colorffy-ui-docs.pages.dev/changelog)**

## Support

- **Issues:** [GitHub Issues](https://github.com/giancarlosgza/colorffy-workspace/issues)
- **Discussions:** [GitHub Discussions](https://github.com/giancarlosgza/colorffy-workspace/discussions)

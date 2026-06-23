---
seo:
  title: Colorffy UI Documentation
  description: A modern Vue 3 component library and expressive SCSS framework for building vibrant, beautiful interfaces.
---

::u-page-hero
#headline
  :::u-button
  ---
  color: neutral
  variant: subtle
  size: sm
  to: https://github.com/giancarlosgza/colorffy-workspace/releases
  target: _blank
  trailing-icon: i-lucide-arrow-right
  ---
  v1.8.0 — Sidebar & Breadcrumb components
  :::

#title
Colorffy UI

#description
A modern Vue 3 component library and an expressive SCSS framework. 70+ headless UI components, a powerful tonal color system, and vivid theming — together or on their own.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /getting-started/introduction
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
  :::

  :::u-button
  ---
  color: neutral
  icon: i-simple-icons-github
  size: xl
  to: https://github.com/giancarlosgza/colorffy-workspace
  target: _blank
  variant: outline
  ---
  View on GitHub
  :::

#default

:::code-group
```bash [pnpm]
pnpm add @colorffy/ui @colorffy/css
```

```bash [npm]
npm install @colorffy/ui @colorffy/css
```

```bash [yarn]
yarn add @colorffy/ui @colorffy/css
```
:::
::

::u-page-section
---
title: Everything you need
description: A complete toolkit for building polished, themeable interfaces.
---
  :::u-page-grid
    ::::u-page-card
    ---
    icon: i-lucide-blocks
    to: /colorffy-ui/components/overview
    spotlight: true
    ---
    #title
    70+ headless components

    #description
    Accordions, dialogs, forms, tables, navigation, and more — accessible and unstyled.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-palette
    to: /colorffy-css/color-system
    spotlight: true
    ---
    #title
    Tonal color system

    #description
    Adaptive `--theme-*` tones generated from your brand colors with `color-mix()`.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-moon
    spotlight: true
    ---
    #title
    Dark mode built in

    #description
    Every component and color token adapts to light and dark automatically.
    ::::

    ::::u-page-card
    ---
    icon: i-simple-icons-typescript
    spotlight: true
    ---
    #title
    Fully typed

    #description
    Complete TypeScript definitions for every component, prop, and composable.
    ::::

    ::::u-page-card
    ---
    icon: i-lucide-feather
    spotlight: true
    ---
    #title
    Tree-shakeable

    #description
    Import only what you use, or register everything globally — your call.
    ::::

    ::::u-page-card
    ---
    icon: i-simple-icons-nuxtdotjs
    to: /colorffy-ui/usage
    spotlight: true
    ---
    #title
    Vue 3 & Nuxt ready

    #description
    Works in any Vue 3 app and drops into Nuxt 3/4 with a plugin or auto-imports.
    ::::
  :::
::

::u-page-section
---
title: A familiar, expressive API
description: Register once, then compose anywhere — style with Colorffy CSS or bring your own.
---
:::u-page-card
---
spotlight: true
---

```vue
<template>
  <UiButton variant="filled" color="primary" text="Get started" />
  <UiBadge text="New" variant="accent" pill />
</template>
```
:::
::

::u-page-section
:::u-page-logos
---
title: Works with your stack
items:
  - i-simple-icons-vuedotjs
  - i-simple-icons-nuxtdotjs
  - i-simple-icons-vite
  - i-simple-icons-sass
  - i-simple-icons-typescript
---
:::
::

::u-page-section
---
title: Start building with Colorffy UI
description: Install the packages and ship a polished, themeable UI today.
links:
  - label: Get Started
    to: /getting-started/introduction
    icon: i-lucide-rocket
    color: neutral
    size: xl
  - label: Browse components
    to: /colorffy-ui/components/overview
    color: neutral
    variant: outline
    size: xl
---
::

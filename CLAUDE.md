# Colorffy workspace

## Browser support

**Browser Support:** Use Baseline Widely available features freely. Baseline Newly available (or limited) features only behind `@supports` or with a working fallback, as anchor positioning is today. No polyfills.

## CSS custom properties (`@colorffy/css`)

- Token tiers, reuse the existing names: raw values (`--color-brand-*`, `--space-*`, `--fs-*`, `--shadow-*`) → semantic (`--theme-primary-a10`, `--theme-on-*`) → general UI (`--theme-surface-*`, `--theme-outline-*`) → component.
- Component variables: a public hook feeds a private variable declared on the component root, e.g. `--_card-bg-color: var(--card-bg-color, var(--theme-surface-container))`. Variants and states re-declare the private variable, never the hook. Hooks are unprefixed in 2.x and get the `--cffy-` prefix in 3.0.
- Private variables only for design decisions (background, color, border color/width, radius, padding, gap, font size/weight, shadow, easing, duration). Derived values use `currentColor`, `inherit` or `em` instead of another variable.
- Font sizes in `rem` or `--fs-*`, never `px`. `dvh` over `vh`. `color-mix()` in `oklab`/`oklch`, not `srgb`. Never register color tokens with `@property`.
- `_prime.scss` sets PrimeVue's own `--p-*` tokens and is outside the component variable convention.

# Colorffy workspace

## Browser support

**Browser Support:** Use Baseline Widely available features freely. Baseline Newly available (or limited) features only behind `@supports` or with a working fallback, as anchor positioning is today. No polyfills.

## CSS custom properties (`@colorffy/css`)

- Token tiers, reuse the existing names: raw values (`--color-brand-*`, `--space-*`, `--fs-*`, `--shadow-*`) → semantic (`--theme-primary-a10`, `--theme-on-*`) → general UI (`--theme-surface-*`, `--theme-outline-*`) → component.
- Component variables: a public hook feeds a private variable declared on the component root, e.g. `--_card-bg-color: var(--card-bg-color, var(--theme-surface-container))`. Variants and states re-declare the private variable, never the hook. Hooks are unprefixed in 2.x and get the `--cffy-` prefix in 3.0.
- Private variables only for design decisions (background, color, border color/width, radius, padding, gap, font size/weight, shadow, easing, duration). Derived values use `currentColor`, `inherit` or `em` instead of another variable.
- Font sizes in `rem` or `--fs-*`, never `px`. `dvh` over `vh`. `color-mix()` in `oklab`/`oklch`, not `srgb`. Never register color tokens with `@property`.
- `_prime.scss` sets PrimeVue's own `--p-*` tokens and is outside the component variable convention.

## Documenting a change

| Situation | Component page | Changelog | Migration | Skill ref | Playground |
|---|---|---|---|---|---|
| New prop / variant / component | yes | Added | — | yes | if worth seeing |
| Renamed prop, changed default | yes | Changed | yes | yes | if it uses it |
| Removed class or prop | yes | Changed | yes | yes | if it used it |
| Bug fix, API unchanged | — | Fixed | — | — | — |
| Behaviour change needing an edit | yes | Changed | yes | yes | if it uses it |
| Visual change, no edit needed | — | Changed | — | — | — |
| Internal refactor | — | — | — | — | — |

- **Component page** — `docs/content/3.colorffy-ui/2.components/`, or `2.colorffy-css/` for a CSS-only feature. Describes the current API as if it had always existed. A sentence that only makes sense to someone who knows the old version belongs in the changelog.
- **Changelog** — `docs/content/5.changelog.md`, under the current version, in `Added` / `Changed` / `Removed` / `Fixed`. Never optional: if a consumer can notice the difference between two releases, there is an entry. A `Fixed` entry explains the mechanism, not just the symptom.
- **Migration** — `docs/content/4.migration.md`, only when existing markup stops working or silently changes meaning unless the user edits it. Purely additive changes never land here. The changelog entry links to the section instead of repeating it.
- **Skill reference** — `skills/colorffy/references/`: `components.md` for components, `utilities.md` / `layout.md` / `theming.md` for CSS. Not published with the docs site, so it goes stale silently and then answers questions with the old API.
- **Playground** — `playground/nuxt/app/`. A realistic screen that uses the feature, never a prop gallery.
- **Types** — `packages/colorffy-ui/src/types/`. The JSDoc on each prop is what shows in the editor; update it whenever the prop changes.

# Colorffy workspace

## Browser support

**Browser Support:** Use Baseline Widely available features freely. Baseline Newly available (or limited) features only behind `@supports` or with a working fallback, as anchor positioning is today. No polyfills.

## CSS custom properties (`@colorffy/css`)

- Every public custom property carries the `--cffy-` namespace (the semantic `--theme-*` tier became `--cffy-*` directly); privates are `--_*`. Token tiers, reuse the existing names: raw values (`--cffy-color-brand-*`, `--cffy-space-*`, `--cffy-fs-*`, `--cffy-container-*`, `--cffy-shadow-*`) → semantic (`--cffy-primary-a10`, `--cffy-on-*`) → general UI (`--cffy-surface-*`, `--cffy-outline-*`) → component.
- Component variables: a public hook feeds a private variable declared on the component root, e.g. `--_card-bg-color: var(--cffy-card-bg-color, var(--cffy-surface-container))`. Hooks cover base values and the main element's hover/active states (`--cffy-navbar-link-hover-color`); variants (island, transparent, stuck, sizes) re-declare the private variable and never read or set a base hook; a primary style may read its own scoped hooks (`--cffy-tabs-pills-bg-color`). A variant that only repeats the base value is removed so the hook reaches it. States set the private variable instead of the property. Hover and pressed backgrounds of interactive surfaces come from the shared state layer, never a per-component hook: declare `--_<component>-state: 0%` on the element, paint `background-color: f.state-layer(var(--_<component>-state), var(--_<component>-bg-color))`, and set the state to `var(--cffy-state-hover-opacity)` on `:hover` and `var(--cffy-state-pressed-opacity)` on `:active, :focus-visible` (pressed after hover). The layer color is `--cffy-state-layer-color` (primary); a semantic surface (destructive, valid) re-declares that token on itself. Hover hooks are for text and border colors only. Hook names use the clean convention (`-padding-inline`, not `-gutter-x`), and a private is its hook's name with `--cffy-` swapped for `--_` (`--cffy-card-padding-inline` → `--_card-padding-inline`); a private without a hook uses the same `--_<component>-<property>` shape. Components that set a value inline set the public hook, never a private.
- Private variables only for design decisions (background, color, border color/width, radius, padding, gap, font size/weight, shadow, easing, duration). Derived values use `currentColor`, `inherit` or `em` instead of another variable.
- Font sizes in `rem` or `--cffy-fs-*`, never `px`. `dvh` over `vh`. `color-mix()` in `oklab`/`oklch`, not `srgb`. Never register color tokens with `@property`.

## Vue components (`@colorffy/ui`)

- `<script setup>` groups its statements under `/** Section */` labels, in this order, using only the ones it needs: `Interfaces`, `Props`, `Emits`, `Slots`, `Model`, `Labels`, `Data`, `Composables`, `Computed`, `Methods`, `Watchers`, `Lifecycle`, `Expose`. Local interfaces and types sit at the top, never between other statements. `Data` holds refs, template refs, ids (`useId()` and ids built from `props.id`), constants and plain variables; `Composables` holds `use*()` calls and the values derived from their results, after the data they read.
- No comments between functions or inside interface bodies. A comment stays only when it records something the code can't show (a browser quirk, an SSR or hydration constraint, a magic value, a non-obvious contract), on one line; anything that restates the code goes.
- Template comments are short sentence-case region labels (`<!-- Feedback -->`), with the same exception for a real constraint.

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

# Colorffy Design System — Open Component Backlog

What is left of the Phase 3 & 4 roadmap. Everything else shipped: UiAvatarGroup,
UiTooltip, UiStepper, UiTimeline, UiInputOtp, and all of Phase 4 (badge
`dot`/`max`/`attached`, tab icons and `fluid`, polymorphic `UiButton`, avatar
`status`, dismissible alerts, list item and card links, card media, datatable
selection and sticky header, accordion `icon`, `UiEmpty` `#action`). None of the
items below is breaking, so they can ship in any 3.x release.

**Status (2026-10-04, branch `v3`).** Items 1 (UiPagination) and 2 (small input
family) shipped with 3.0, stories included. Only item 3 is left, and it waits on
the PrimeVue decision.

## Conventions (apply to every item)

- Props typed in `packages/colorffy-ui/src/types/<name>.ts` with JSDoc per prop;
  reuse the canonical shared types (`ThemeColor`, `SizeLevel`, `FloatingPlacement`,
  `ClassValue`, `IBaseInputProps`, `IBaseLinkProps`) from `types/shared.ts`.
- Components in `packages/colorffy-ui/src/components/ui/<family>/`, exported from
  `components.ts` (auto-registered by `nuxt.ts`), types re-exported from `index.ts`.
- SCSS in `packages/colorffy-css/scss/components/_<name>.scss` inside
  `@layer components.<name>`, registered alphabetically in `main.scss`, public
  hooks feeding `--_<name>-*` private variables (see the repo `CLAUDE.md`).
- Every component ships with: Storybook stories, docs page in
  `docs/content/3.colorffy-ui/2.components/`, entries in
  `skills/colorffy/references/components.md`, and a playground usage where natural.
- Verify via `pnpm --filter @colorffy/ui build` + playground preview
  (rebuild dist + restart dev server for new components).

## 1. UiPagination (M) — shipped in 3.0

Built as planned, with these decisions:

- **Pages start at 1**; `v-model:page`, sized from `total` + `pageSize` or
  `totalPages`. A page past the end moves to the last page.
- **Collapsing keeps a fixed slot count** (`2 × siblingCount + 5`): first and
  last always show, an ellipsis never hides a single page, and the arrows
  don't move between pages.
- **Narrow screens** (below 600px, or `compact`) show `‹ Page 3 of 12 ›`.
  A media query, not a container query: inline-size containment would collapse
  the nav to zero width inside a flex row.
- **Accessibility:** arrows at the ends are `aria-disabled`, not `disabled`, so
  focus stays on them; the user's own page moves are announced through a polite
  live region (counts changed by filtering aren't, so typing a filter stays
  quiet). Labels are one `labels` object with a `{page}` / `{total}` template.
- **CSS:** `.pagination-nav` / `.pagination`, the buttons are
  `.btn.btn-text.btn-icon` with the current page styled through
  `[aria-current="page"]`; hooks for gap, radius, current colors and status
  color.
- **Datatable:** `pagination: { pageSize, …pagination options }` +
  `v-model:page`. It sorts every row then slices; select-all covers the current
  page; row identity falls back to the absolute index. The page resets to 1 on
  a new sort, page size or row count, except when the first rows arrive (so a
  page restored from the URL survives loading). Trade-off: deleting a row also
  changes the count and goes back to page 1. The pager hides at one page.
- **Playground:** billing invoices (22 months of history, 8 per page).

Original spec:

- **Types** (`types/pagination.ts`): `IPaginationProps` — `page: number` (v-model),
  `total?: number` + `pageSize?: number` (or `totalPages?: number` directly),
  `siblingCount?: number` (default 1), `showEdges?: boolean` (first/last buttons),
  `disabled?`, `ariaLabel?`, `customClass?`. Emits `update:page`.
- **Component**: `<nav aria-label>` + button list; ellipsis collapsing like
  `UiBreadcrumb`'s `maxItems`; current page gets `aria-current="page"`.
- **CSS**: new `_pagination.scss`; buttons reuse `.btn`/`.btn-icon` styles.
- **Datatable integration**: optional `pagination?: { pageSize: number }` prop on
  `UiDatatable` slicing `items` internally + rendered UiPagination in the footer;
  server-side mode stays possible by leaving `pagination` off and driving
  UiPagination standalone.
- **Acceptance**: keyboard focusable buttons, ellipsis correctness at edges,
  datatable slice + sort + selection interplay covered by stories.

## 2. Small input family (S each) — shipped in 3.0

Commits 75209d1 → 16efc76, stories in 0ca5db9. Built as planned, with these decisions:

- **CSS first:** the attached prefix/suffix boxes didn't fit an eye or clear
  button (separate box, and focus only highlighted the input), so
  `.input-group-inline` puts the adornments inside the field as squares the
  height of the input. The input stays the bordered element, so focus, invalid,
  variants and sizes needed no new rules. `UiInputText` exposes it as
  `adornments="inline"` and gained `autocomplete` (attributes on the component
  land on its wrapper, not the field).
- **Tags** use a field-styled wrapper, `.form-tags` (reads the `--cffy-input-*`
  hooks, `:focus-within` for focus, new `--cffy-input-tags-gap`), with chips
  rendered from the `.btn-chip.chip-closable` classes, not `UiChip`: a closable
  `UiChip` adds a second, inert button per tag. The separator is read from the
  text (mobile keyboards send no usable key name), adds are batched into one
  model update, and adds/removals are announced through a live region.
- **Fixed on the way:** `UiInputText` cached slot existence in a `computed`, so a
  suffix added later never rendered; error messages under an `.input-group`
  weren't styled.

Original spec:

1. **UiInputPassword** — wraps the text input with `type` toggling and a suffix
   visibility button (`&#xe8f4;` / `&#xe8f5;`); `revealed` v-model optional.
2. **UiInputSearch** — `type="search"`, leading search icon prefix, clear button
   suffix when non-empty, `search` emit on Enter, `clear` emit.
3. **UiInputTags** — chip input backed by `UiChip` (closable) + inner text input;
   `modelValue: string[]`, `max?`, `allowDuplicates?`, Enter/comma to commit,
   Backspace on empty input removes last tag. Emits `update:modelValue`,
   `add(tag)`, `remove(tag)`.

## 3. UiInputAutocomplete / UiInputMultiSelect (L) — decide first

- Native replacements for the PrimeVue components themed in `_prime.scss`
  (`.p-select`, `.p-multiselect`). Only worth building if dropping the PrimeVue
  dependency is a goal — decide before starting.
- Scope if built: filterable listbox (combobox ARIA pattern), keyboard nav,
  `options`/`optionLabel`/`optionValue` API matching `UiInputSelect`, chips for
  multiselect values (reuse UiChip), no virtual scrolling in v1.

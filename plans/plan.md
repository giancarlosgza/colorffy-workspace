# Colorffy Design System — Phase 3 & 4 Plan

Continuation of the component-library roadmap. Phases 1 (consistency foundation)
and 2 (UiChip/UiChipGroup, UiDivider, input prefix/suffix slots) shipped previously.
`UiTable` and `UiCarousel` remain explicitly excluded from the roadmap.

## Conventions (apply to every item)

- Props typed in `packages/colorffy-ui/src/types/<name>.ts` with JSDoc per prop;
  reuse the canonical shared types (`ThemeColor`, `SizeLevel`, `FloatingPlacement`,
  `ClassValue`, `IBaseInputProps`, `IBaseLinkProps`) from `types/shared.ts`.
- Components in `packages/colorffy-ui/src/components/ui/<family>/`, exported from
  `components.ts` (auto-registered by `nuxt.ts`), types re-exported from `index.ts`.
- SCSS in `packages/colorffy-css/scss/components/_<name>.scss` inside
  `@layer components.<name>`, registered alphabetically in `main.scss`, private
  vars named `--_<name>-*`, theme tokens only (no hardcoded colors).
- Every component ships with: Storybook stories, docs page in
  `docs/content/3.colorffy-ui/2.components/`, entries in
  `skills/colorffy/references/components.md` + `component-guide.md`, README list
  update, and a playground usage where natural.
- Verify via `pnpm --filter @colorffy/ui build` + playground preview
  (rebuild dist + restart dev server for new components).

---

## Phase 3 — New components

Ordered by priority. Effort: S (small), M (medium), L (large).

### 3.1 UiPagination (M) — highest priority

The biggest functional hole: `UiDatatable` sorts and manages columns but cannot page.

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
  datatable slice + sort interplay covered by stories.

### 3.2 UiAvatarGroup (S)

- **Types** (extend `types/avatar.ts`): `IAvatarGroupProps` — `avatars?: IAvatarProps[]`
  or default slot of `UiAvatar`s, `max?: number` (render "+N" overflow using the
  existing `initials` avatar), `size?` passthrough, `customClass?`.
- **CSS**: `.avatar-group` in `_image.scss` — negative `margin-inline-start`
  overlap, ring via `outline` in surface color, overflow avatar styled like
  `.initials-avatar`.
- **Playground**: dashboard team card header.

### 3.3 UiTooltip (S)

- Generic wrapper over floating-vue's `VTooltip` (already a dependency; theming
  exists in `_tooltip.scss`): default slot = trigger, `text?` prop or `#content`
  slot, `placement?: FloatingPlacement`, `disabled?`, `ariaId?`.
- Frees consumers from wrapping everything in `UiButtonTooltip`/`UiLinkTooltip`;
  those two stay (they add button/link semantics).

### 3.4 UiStepper (M)

- **Types** (`types/stepper.ts`): `IStepItem` — `id`, `label`, `description?`,
  `icon?` (Material entity), `disabled?`. `IStepperProps` — `steps: IStepItem[]`,
  `activeStep?: string` (or index), `vertical?: boolean`, `linear?: boolean`
  (block jumping ahead), `customClass?`. Emits `updateActiveStep(stepId)` —
  mirror the `UiTabs` emit naming.
- **States**: upcoming / current (`aria-current="step"`) / completed (check icon,
  reuse chip's `&#xe5ca;`) / error variant later.
- **CSS**: `_stepper.scss` — numbered circles, connector lines (`::after`),
  vertical modifier; tokens shared with `.divider` for connectors.
- **Keyboard**: arrow/Home/End roving like `Tabs.vue` (`nextEnabledIndex` pattern).

### 3.5 UiTimeline (M)

- Formalizes the dashboard "Actividad reciente" hand-rolled pattern.
- **Types** (`types/timeline.ts`): `ITimelineItem` — `id`, `title?`, `text?`,
  `time?`, `icon?`, `imageUrl?`/`imageAlt?`, `variant?: ThemeColor` (dot/icon
  color). `ITimelineProps` — `items?: ITimelineItem[]`, `align?: 'start' | 'alternate'`,
  `customClass?`. Per-item `#item-<id>` or scoped `#item` slot for custom bodies.
- **CSS**: `_timeline.scss` — dot/icon column + connector line, reuse
  `.list-item-icon-wrapper` sizing so lists and timelines align visually.
- **Playground**: replace or complement the activity feed list.

### 3.6 Small input family (S each) — builds on the prefix/suffix slots

All extend `IBaseInputProps` from day one (Phase 1 rule).

1. **UiInputPassword** — wraps the text input with `type` toggling and a suffix
   visibility button (`&#xe8f4;` / `&#xe8f5;`); `revealed` v-model optional.
2. **UiInputSearch** — `type="search"`, leading search icon prefix, clear button
   suffix when non-empty, `search` emit on Enter, `clear` emit.
3. **UiInputTags** — chip input backed by `UiChip` (closable) + inner text input;
   `modelValue: string[]`, `max?`, `allowDuplicates?`, Enter/comma to commit,
   Backspace on empty input removes last tag. Emits `update:modelValue`,
   `add(tag)`, `remove(tag)`.
4. **UiInputOtp** — segmented PIN boxes; `length?: number` (default 6),
   `modelValue: string`, auto-advance/backspace focus management, paste support,
   `complete` emit. New `.form-otp` CSS.

### 3.7 UiInputAutocomplete / UiInputMultiSelect (L) — last, or defer

- Native replacements for the PrimeVue components themed in `_prime.scss`
  (`.p-select`, `.p-multiselect`). Only worth building if dropping the PrimeVue
  dependency is a goal — decide before starting.
- Scope if built: filterable listbox (combobox ARIA pattern), keyboard nav,
  `options`/`optionLabel`/`optionValue` API matching `UiInputSelect`, chips for
  multiselect values (reuse UiChip), no virtual scrolling in v1.

---

## Phase 4 — Props & variants on existing components

Apply opportunistically as components get touched, or as a dedicated pass after 3.3.

| # | Component | Addition | Notes |
|---|-----------|----------|-------|
| 4.1 | `UiBadge` | `dot?: boolean` (label-less notification dot), `max?: number` (renders `99+`), attached/overlay mode (`.badge-attached` positioning parent) | Pairs with tab badges and avatar status |
| 4.2 | `UiTabs` | `icon?` per `ITabItem`, `fluid?: boolean` (equal-width), overflow-x scroll affordance on the tab list | Icons match `INavItem` shape |
| 4.3 | `UiButton` | polymorphic `as`/`to`/`href` (render `<a>`/router-link), `type?: 'button' \| 'submit' \| 'reset'` passthrough | `IBaseLinkProps` already establishes the `as` pattern |
| 4.4 | `UiAvatar` | `status?: 'online' \| 'busy' \| 'away' \| 'offline'` indicator dot | CSS dot in `_image.scss`, positioned on the mask-safe corner |
| 4.5 | `UiAlert` | `dismissible?: boolean` + `dismiss` emit; optional auto-hide `duration?` for non-snackbar types | Banner/tonal alerts currently can't be closed |
| 4.6 | `UiListItem` | `as`/`to`/`href` link rendering | `is-interactive` styles exist but items can't navigate |
| 4.7 | `UiCard` | `#media` slot / `imageUrl?` cover image, `href?` clickable card | Same image story as ListItem, one level up |
| 4.8 | `UiDatatable` | row selection (checkbox column, `v-model:selected`), `stickyHeader?: boolean`, `pagination?` (from 3.1) | The three most-requested datatable features |
| 4.9 | `UiAccordion` | leading `icon?` prop | Parity with list/menu items |
| 4.10 | `UiEmpty` | `#action` slot for a CTA | Empty states almost always need one |

**Suggested Phase 4 order**: 4.5 and 4.10 (trivial, high value) → 4.1 + 4.4
(notification/status pair) → 4.3 + 4.6 (polymorphic link rendering, shared
implementation) → 4.2, 4.7, 4.9 → 4.8 (largest, after 3.1 lands).

---

## Sequencing & orchestration

- **Sprint A (Phase 3 kickoff)**: 3.1 UiPagination (lead), 3.2 UiAvatarGroup and
  3.3 UiTooltip in parallel (small, disjoint files).
- **Sprint B**: 3.4 UiStepper + 3.5 UiTimeline in parallel; start 4.5/4.10 as fillers.
- **Sprint C**: 3.6 input family (Password/Search first, then Tags/Otp); remaining
  Phase 4 items opportunistically.
- **Decide separately**: 3.7 autocomplete/multiselect (dependency-removal decision).
- Orchestration pattern from Phases 1–2: disjoint file ownership per agent, no
  agent touches `components.ts`/`index.ts`/`nuxt.ts` (integrator wires exports),
  single build + preview verification at the end.

## Breaking-change policy

None of Phase 3 is breaking. Phase 4 items 4.3/4.6 must keep the current
button/list markup for existing usage (link rendering only activates when
`to`/`href` is passed). Any rename follows the Phase 1 pattern: land it, flag it
in the commit body, document it in the docs page and skills refs.

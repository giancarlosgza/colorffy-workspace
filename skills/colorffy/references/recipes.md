# UI Recipes

Full screens assembled from Colorffy components, taken from Orbit, the project-management app in `playground/nuxt`. Use a recipe as the starting structure when asked to build one of these screens, then adapt the data and copy. Docs with screenshots: `/colorffy-ui/recipes/*` on the docs site.

| Screen | Recipe |
|---|---|
| Layout around every signed-in page | App shell |
| Home after sign-in, KPIs, today's work | Dashboard |
| List of records with search, filters, grid/table views, create flow | Collection index |
| One record with breadcrumb, properties and tabbed sections | Detail page |
| Preferences, profile, notifications, security | Settings |
| Plan, usage, plan picker, payment method, invoices | Billing |

## Shared rules

- **Page frame:** `<div class="container mt-3 mb-5">` then `UiHeaderContent` (title, subtitle, `#actions`, `view-transition-name="page-title"`). `container-fluid` only for multi-pane screens. Title the navbar with `definePageMeta({ pageTitle: '…' })`.
- **Surfaces:** `UiCard variant="pane"`; `custom-class="h-100"` for cards in one row. Card header = `.card-title` + one `caption text-muted mb-0` line. `variant="outline"` only for options nested inside a pane.
- **Layout:** `row` + `col-* mb-3`; `d-grid gap-6` to stack a section's cards; `gap-block-*` on wrapping rows; `d-flex gap-2|3` inside cards. No fixed widths (use the `w-fixed` + `--cffy-w-fixed` hook).
- **Type:** metrics `fs-3xl fw-800 lh-1 tabular-numbers`; meta `caption text-muted`; labels `fw-700 mb-1` (`fw-600` in list rows); card-body headings `UiSubheadingContent as="h2" gutter="none"`.
- **Color:** at most one emphasized surface per screen (`bg-primary` card + `text-on-primary` content). Callouts `bg-<intent>-container text-on-<intent>-container rounded-md p-3`. Icon chips `UiIconMaterial class="icon-wrap icon-wrap-xs bg-<c>-container text-on-<c>-container"`. Status via `UiBadge` intent variants, not colored text.
- **Actions:** one filled primary per region; secondary `outline`, tertiary `text`; header actions `size="sm"` in `UiButtonGroup`; icon-only = `UiButtonTooltip` + `aria-label`; destructive = `UiConfirmModal`; row actions = `UiButtonMenu` at the row end.
- **States:** every collection has loading (skeleton sized like the content), empty (`UiEmpty` + the action that fills it) and no-results (`UiEmpty` + reset). Confirm actions with the shared toast. Async results in `aria-live="polite"`.
- **A11y:** every input has `label` (use `hide-label`, never omit). Tabs that switch page sections: `panelId` on each tab, panel `role="tabpanel" aria-labelledby="tab-<id>"` (UiTabs renders button ids as `tab-<id>`, so keep tab ids unique per page). Label progress bars and icon buttons.
- **Responsive/density:** `UiNavigationBar` replaces the sidebar on phones; `hide-actions-when-narrow` when actions have another entry point; `d-none d-lg-flex` / `d-none d-xl-block` for secondary columns; `data-density="compact"` on dense tables.
- **Motion:** pair state changes with Vue transitions using Colorffy's names: state swaps (loading/content/empty, tab panels, grid↔list) → `<Transition name="fade" mode="out-in">` with a `key` per branch; rows added/removed/reordered → `<TransitionGroup name="list">`; wizard steps → `slide-start` forward / `slide-end` back; a bar or message appearing under its content → `slide-up`; in-place panel → `scale`; between pages → view transitions (`experimental.viewTransition` + `view-transition-name`), not also Nuxt `page`/`layout` transitions. Wrap only the region that changes, skip first-render animation, tune with `--cffy-transition-*` / `--cffy-duration-unit`. Reduced motion is handled by the CSS.
- **Theming:** recipes read only tokens; restyle them with a `data-theme` preset on `<html>` (six ready-made presets in theming.md → Theme Presets). Elevation such as `shadow-sm` on cards is an optional add-on, not part of a recipe.
- **Custom CSS** (rare): `--cffy-space-*` for spacing, shape roles (`--cffy-shape-container|field|control`) for corners, never raw radius steps.

## App shell
**Use for:** the Nuxt layout wrapping every signed-in page.
**Regions:** grid → `grid-main-content`, nav → UiSidebar (UiSidebarDropdown switcher, UiSidebarLink, UiSidebarText, UiSidebarGroup), top bar → UiNavbar sticky (UiNavbarToggle, UiNavbarTitle, UiInputSearch, UiButtonMenu "New", bell + UiPopover, UiNavbarAvatar), account → UiPopoverMenu (UiPopoverMenuUser, groups, color mode UiTabs), phones → UiNavigationBar, feedback → one UiAlertToast

```vue
<div class="grid-main-content">
  <UiSidebar bordered :rail="collapsed" :open="collapsed" @update:open="collapsed = $event">
    <template #header><UiSidebarDropdown title="Orbit" subtitle="Product team" placement="right-start">
      <UiButtonMenuItem item-text="Personal" icon="&#xe7fd;" />
    </UiSidebarDropdown></template>
    <template #body>
      <UiSidebarLink :as="NuxtLink" to="/" text="Home" icon="&#xe88a;" tooltip-text="Home" />
      <UiSidebarText text="Favorites" />
      <UiSidebarGroup text="Workspace" icon="&#xe8b8;" collapsible :default-open="true">
        <UiSidebarLink :as="NuxtLink" to="/settings" text="Settings" icon="&#xe8b8;" tooltip-text="Settings" child />
      </UiSidebarGroup>
    </template>
    <template #footer><UiSidebarDropdown :title="user.name" :subtitle="user.email">
      <UiButtonMenuItem item-text="Sign out" icon="&#xe9ba;" is-destructive />
    </UiSidebarDropdown></template>
  </UiSidebar>
  <main>
    <UiNavbar v-on-click-outside="closeMenu" sticky fluid>
      <UiNavbarToggle show-toggle-button :collapsed="collapsed" @toggle="collapsed = !collapsed" />
      <UiNavbarTitle :title="(route.meta.pageTitle as string) || 'Home'" />
      <UiNavbarCollapse>
        <UiNavbarNav position="start"><UiNavbarItem>
          <UiInputSearch id="global-search" label="Search" hide-label variant="transparent" rounded />
        </UiNavbarItem></UiNavbarNav>
        <UiNavbarNav position="end"><UiNavbarItem>
          <UiNavbarAvatar :src="user.avatar" :alt="`${user.name} photo`" size="navbar" @click="menuOpen = !menuOpen" />
        </UiNavbarItem></UiNavbarNav>
      </UiNavbarCollapse>
      <UiPopoverMenu id="account-menu" :is-opened="menuOpen" :current-route="route" :closable="false" aria-label="Account menu" @hide-dropdown="closeMenu">
        <template #header><UiPopoverMenuUser :display-name="user.name" :email="user.email" :photo-url="user.avatar" /></template>
        <template #body><UiPopoverMenuGroup text="Preferences">
          <UiPopoverMenuItem as="div" text="Theme" icon="&#xe40a;"><template #trailing><ColorModePicker :show-labels="false" /></template></UiPopoverMenuItem>
        </UiPopoverMenuGroup></template>
      </UiPopoverMenu>
    </UiNavbar>
    <slot />
    <UiNavigationBar :as="NuxtLink" :items="mobileItems" :active-item="`/${route.path.split('/')[1] ?? ''}`" indicator-tab />
  </main>
  <UiAlertToast ref="toastRef" />
</div>
```

**Rules:**
- One boolean drives `rail` (≥1024px) and `open` (mobile drawer); keep it in `useState`. Every `UiSidebarLink` has `tooltip-text` for rail mode.
- `UiSidebarDropdown` menu items go in its default slot; `:interactive="false"` makes it a static label and drops them.
- Sidebar = destinations, navbar = actions. One filled primary in the navbar (the "New" `UiButtonMenu`, `placement="bottom-end"`).
- Notifications: `UiButton popovertarget="x" style="anchor-name: --x"` + `UiPopover id="x" anchor-name="--x"`.
- Color mode picker: `UiTabs pill-tabs size="sm" rounded fit icon-only`, ids prefixed with `useId()`, active tab = `'system'` until mounted (SSR-safe).
- One `UiAlertToast` in the layout, registered into a `useNotify()` composable on mount; pages call `notify(title, message, variant)`.
- Sidebar cards (trial, promo) use `border-radius: var(--cffy-shape-container)` and `--cffy-space-*` padding.

## Dashboard
**Use for:** a home screen after sign-in: what needs attention today, a few KPIs, the user's tasks, project progress and recent activity.
**Regions:** greeting → UiHeaderContent + UiButtonGroup, KPIs → UiCard ×4 (one `bg-primary`) + UiIconMaterial chip + UiTooltip, my tasks → UiCard + UiSubheadingContent + UiTabs + UiListGroup/UiListItem + UiInputCheck, projects → UiBadge + UiProgressBar + UiAvatarGroup, activity → UiTimeline / UiBaseSkeleton, quick create → UiButtonFabGroup

```vue
<UiHeaderContent headline="Saturday, October 3" title="Good morning, Ana" :subtitle="summary" size="md" hide-actions-when-narrow>
  <template #actions><UiButtonGroup>
    <UiButton :as="NuxtLink" to="/team" text="Invite" variant="outline" size="sm" />
    <UiButton text="New task" variant="filled" color="primary" size="sm" @click="createTask" />
  </UiButtonGroup></template>
</UiHeaderContent>
<div class="row mt-section">
  <div class="col-6 col-xl-3 mb-3"><UiCard variant="pane" custom-class="bg-primary h-100"><template #body><div class="text-on-primary">
    <p class="caption fw-600 mb-3">Tasks due this week</p>
    <p class="fs-3xl fw-800 lh-1 mb-2 tabular-numbers">{{ upcoming.length }}</p>
    <p class="caption mb-0 opacity-80">2 due today · 1 overdue</p>
  </div></template></UiCard></div>
  <div v-for="stat in stats" :key="stat.id" class="col-6 col-xl-3 mb-3"><UiCard variant="pane" custom-class="h-100"><template #body>
    <div class="d-flex align-items-start justify-content-between gap-2 mb-3">
      <p class="caption fw-600 text-muted mb-0">{{ stat.label }}</p>
      <UiIconMaterial :icon-code="stat.icon" class="icon-wrap icon-wrap-xs" :class="`bg-${stat.color}-container text-on-${stat.color}-container`" />
    </div>
    <p class="fs-3xl fw-800 lh-1 mb-2 tabular-numbers">{{ stat.value }}</p>
    <p class="caption text-muted text-truncate mb-0">{{ stat.note }}</p>
  </template></UiCard></div>
</div>
<UiCard variant="pane" custom-class="h-100">
  <template #header><UiSubheadingContent as="h2" title="My tasks" gutter="none" /></template>
  <template #body>
    <UiTabs v-model:active-tab="taskTab" :tabs="taskTabs" size="sm" />
    <div id="my-tasks-panel" role="tabpanel" :aria-labelledby="`tab-${taskTab}`" class="mt-2">
      <UiListGroup variant="flush"><UiListItem v-for="task in visibleTasks" :key="task.id" :title="task.title" :text="task.project" has-actions>
        <template #media><div><UiInputCheck :id="`task-${task.id}`" :label="task.title" :model-value="task.done" hide-label @update:model-value="toggleTask(task, $event)" /></div></template>
        <template #list-action><UiBadge :text="task.priority" variant="tonal tonal-warning" size="sm" /></template>
      </UiListItem></UiListGroup>
    </div>
  </template>
</UiCard>
<UiProgressBar :value="project.progress" :bar-class="project.status === 'off-track' ? 'bg-danger' : null" :aria-label="`${project.name} progress`" size="sm" class="flex-grow-1" />
<div v-if="activityLoading" role="status" aria-label="Loading recent activity">
  <UiBaseSkeleton v-for="row in 3" :key="row" width="60%" custom-class="mb-3" role="" aria-label="" aria-live="off" />
</div>
<UiTimeline v-else :items="activityItems" />
<UiButtonFabGroup>
  <UiButton text="Create" variant="filled" color="primary" custom-class="btn-fab fab-mobile" :aria-label="fabOpen ? 'Close quick create' : 'Quick create'" :aria-expanded="fabOpen" @click="fabOpen = !fabOpen" />
</UiButtonFabGroup>
```

**Rules:**
- One emphasized KPI only (`bg-primary` via `custom-class`, `text-on-primary` on an inner wrapper, note `opacity-80`); other KPIs show intent only in the `icon-wrap` chip. Values: `fs-3xl fw-800 lh-1 tabular-numbers`.
- Tabs that filter one list share a single `panelId`; the panel is `role="tabpanel"` with `aria-labelledby="tab-<activeId>"`. Count badges are `pill`, and `null` when the count is 0.
- Task checkbox goes in `UiListItem #media` with `label` = task title and `hide-label`; confirm toggles with the shared toast.
- Card headers: `UiSubheadingContent as="h2" gutter="none"` with at most one `text` "All …" link in `#actions`. Layout: `col-lg-7` + `col-lg-5`, both `custom-class="h-100"`; activity full width below.
- Skeleton loading: one `role="status"` wrapper with `aria-label`; silence each `UiBaseSkeleton` (`role=""`, `aria-label=""`, `aria-live="off"`).
- `hide-actions-when-narrow` on the header pairs with a `btn-fab fab-mobile` FAB (shows only below 768px) in `UiButtonFabGroup`; give it `aria-label` + `aria-expanded`.
- Progress `bar-class`: `bg-warning` at risk, `bg-danger` off track; percentages `tabular-numbers`.

## Collection index
**Use for:** the top-level list of one record type (projects, customers, documents): search, filter, sort, grid or table view, create, rename, archive.
**Regions:** header → UiHeaderContent + UiButtonGroup, toolbar → UiInputSearch + UiInputSelect (sort) + UiSegmentedControls (grid/list), filters → UiChipGroup (single) + UiChip toggle, loading → UiGridSkeleton / UiDatatable `is-loading`, no results → UiCard pane + UiEmpty, grid → link UiCard + UiBadge + UiProgressBar + UiAvatarGroup, list → UiDatatable + UiButtonMenu (UiButtonMenuSubmenu), create → UiModal + UiStepper, rename → UiModal sm, archive → UiConfirmModal.

```vue
<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent title="Projects" :subtitle="`${items.length} projects`">
      <template #actions><UiButton text="New project" variant="filled" color="primary" size="sm" @click="openWizard" /></template>
    </UiHeaderContent>
    <div class="d-flex flex-wrap align-items-start gap-2 mb-3">
      <UiInputSearch id="search" v-model="search" label="Search projects" hide-label class="flex-grow-1 mb-0" />
      <UiSegmentedControls v-model:active-tab="view" :tabs="viewTabs" />
    </div>
    <UiChipGroup :options="statusOptions" :model-value="status" aria-label="Filter by status" custom-class="mb-4" @update:model-value="status = typeof $event === 'string' ? $event : 'all'" />
    <div id="results" role="tabpanel" :aria-labelledby="`tab-${view}`">
      <Transition name="fade" mode="out-in">
        <UiGridSkeleton v-if="isLoading && view === 'grid'" :skeleton-grid-items="6" grid-layout-classes="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-xl-3 gap-3" aria-label="Loading projects" />
        <UiCard v-else-if="!isLoading && !filtered.length" variant="pane">
          <template #body>
            <UiEmpty :title="hasFilters ? 'No projects match these filters' : 'No projects yet'">
              <template #action><UiButton v-if="hasFilters" text="Clear filters" variant="outline" @click="clearFilters" /></template>
            </UiEmpty>
          </template>
        </UiCard>
        <div v-else-if="view === 'grid'" class="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-xl-3 gap-3">
          <UiCard v-for="p in filtered" :key="p.id" :as="NuxtLink" :to="`/projects/${p.id}`" variant="pane">
            <template #body>
              <p class="subtitle-1 fw-700 mb-1">{{ p.name }}</p>
              <UiProgressBar :value="p.progress" size="sm" :aria-label="`${p.name} progress`" />
            </template>
          </UiCard>
        </div>
        <UiCard v-else variant="pane">
          <template #body>
            <UiDatatable :columns="columns" :items="tableRows" :is-loading="isLoading" row-key="id" column-manager caption="Projects">
              <template #cell-actions="{ item }">
                <UiButtonMenu :id="`actions-${item.id}`" variant="text" size="sm" icon tooltip-text="Project actions" placement="bottom-end">
                  <template #icon><UiIconMaterial icon-code="&#xe5d3;" /></template>
                  <template #menu><UiButtonMenuItem item-text="Archive" icon="&#xe149;" is-destructive @click="confirmArchive(item.project)" /></template>
                </UiButtonMenu>
              </template>
            </UiDatatable>
          </template>
        </UiCard>
      </Transition>
    </div>
  </div>
</template>
```

**Rules:**
- One `filtered` computed applies search, filters and sort; the grid loops it, the empty state checks its length, and `tableRows` maps it for UiDatatable with sortable primitives (status rank, date value) plus the original record as `project` for the cells.
- `v-if` order inside `<Transition name="fade" mode="out-in">`: grid skeleton → no results (`!isLoading && !filtered.length`) → grid → list (UiDatatable shows its own skeleton rows via `is-loading`). The empty state's action matches its cause: outline "Clear filters" or filled "New project".
- UiChipGroup single mode emits `null` when the selected chip is clicked again; bind `:model-value` + `@update:model-value` and map `null` back to `'all'`. A separate yes/no filter is a standalone `UiChip :selected` with `color="secondary"`.
- Grid cards are link cards (`:as="NuxtLink" :to`): no `selectable`, no buttons inside. Row actions live in one icon `UiButtonMenu` per row (unique `id`, `tooltip-text`, `placement="bottom-end"`, submenu `left-start`, destructive item last after `UiButtonMenuDivider`). Actions column: `hideLabel: true, hideable: false, fit: true, sortable: false, align: 'end'`.
- Segmented tabs set `panelId`; the results wrapper is `role="tabpanel"` with `aria-labelledby="tab-<view>"`.
- Create wizard: `UiModal size="md" :close-on-click-outside="false"`, `UiStepper linear v-model:active-step`, validate in Next (show required errors only after the first attempt via a `showErrors` flag), first field `autofocus`, Back/Cancel `text` + Next/Create `filled primary` with `:loading`. Open it from `?new=1` and strip the query with `router.replace`.
- Archive via `UiConfirmModal variant="danger"` with `:is-loading`; it stays open on `confirm` until you call `closeDialog()`. Confirm completed actions with the shell's toast.

## Detail page
**Use for:** one record reached by id (`pages/<collection>/[id].vue`) with a summary, related items, files and history in tabs.
**Regions:** breadcrumb → UiBreadcrumb, header → icon tile + UiHeaderContent `size="md"` + UiButtonGroup (UiButtonTooltip, UiButtonMenu), properties → UiBadge + caption + UiTooltip/UiAvatarGroup, tabs → UiTabs + `section[role=tabpanel]` with `v-show`, overview → UiCard pane + UiProgressBar + `bg-*-container` callout + UiTimeline + UiAccordionGroup, tasks → UiListGroup per status + UiInputCheck + UiEmpty, files → UiInputFile + UiListGroup, activity → UiTimeline, unknown id → UiEmpty.

```vue
<template>
  <div class="container mt-3 mb-5">
    <template v-if="project">
      <UiBreadcrumb :as="NuxtLink" :items="[{ label: 'Projects', to: '/projects', icon: '&#xe2c7;' }, { label: project.name }]" separator-icon="&#xe5cc;" :structured-data="false" class="mb-3" />
      <div class="d-flex align-items-start gap-3">
        <span class="d-inline-flex p-3 rounded-lg flex-shrink-0 bg-primary-container text-on-primary-container">
          <UiIconMaterial :icon-code="project.icon" class="fs-2xl lh-1" />
        </span>
        <UiHeaderContent :headline="project.key" :title="project.name" :subtitle="project.description" size="md" class="flex-grow-1">
          <template #actions>
            <UiButtonMenu id="project-status" text="Status" variant="tonal" :color="status.color" size="sm" placement="bottom-end">
              <template #menu>
                <UiButtonMenuItem v-for="item in statuses" :key="item.id" :item-text="item.label" :icon="item.icon" :icon-trailing="item.id === status.id ? '&#xe5ca;' : null" @click="setStatus(item.id)" />
              </template>
            </UiButtonMenu>
          </template>
        </UiHeaderContent>
      </div>
      <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
        <UiBadge :text="status.label" :variant="`tonal tonal-${status.color}`" :icon-code="status.icon" />
        <span class="caption text-muted">{{ project.start }} → {{ project.due }}</span>
        <UiTooltip :text="teamNames"><UiAvatarGroup :avatars="team" :max="4" size="sm" /></UiTooltip>
      </div>
      <UiTabs v-model:active-tab="activeTab" :tabs="tabs" class="mb-4" />
      <section v-show="activeTab === 'overview'" id="project-panel-overview" role="tabpanel" aria-labelledby="tab-overview">
        <UiCard title="Budget" custom-class="h-100" variant="pane">
          <template #body>
            <p class="fs-3xl fw-800 lh-1 tabular-numbers mb-3">{{ spent }}</p>
            <UiProgressBar :value="spentPercent" aria-label="Budget spent" />
            <div v-if="spentPercent > 80" role="status" class="d-flex gap-2 p-3 mt-3 rounded-md bg-warning-container text-on-warning-container">…</div>
          </template>
        </UiCard>
      </section>
      <section v-show="activeTab === 'tasks'" id="project-panel-tasks" role="tabpanel" aria-labelledby="tab-tasks">…</section>
    </template>
    <UiCard v-else variant="pane" class="mt-5">
      <template #body>
        <UiEmpty title="Project not found" use-custom-icon icon-code="&#xe2c7;">
          <template #action><UiButton :as="NuxtLink" to="/projects" text="Back to projects" variant="filled" color="primary" /></template>
        </UiEmpty>
      </template>
    </UiCard>
  </div>
</template>
```

**Rules:**
- `UiTabs` gives each tab button the id `tab-<id>`; set `panelId` on every tab item and render `<section :id="panelId" role="tabpanel" aria-labelledby="tab-<id>">`. Keep tab ids unique on the page.
- Toggle panels with `v-show` (not `v-if`) so `aria-controls` always resolves and panel state survives; reset `activeTab` in a `watch` on `route.params.id`.
- Wrap the page in `<template v-if="record">` with a `UiEmpty` fallback (custom icon + back button in `#action`) for unknown ids.
- One status value drives the badge, the Status menu `color`, the menu's check (`icon-trailing`) and the current milestone `variant`.
- Callouts are `bg-<intent>-container text-on-<intent>-container rounded-md p-3`; at most one per card. Metrics are `fs-3xl fw-800 lh-1 tabular-numbers`.
- Task rows put `UiInputCheck` (`label` + `hide-label`) in `#media` and badges/avatars in `#list-action` with `has-actions`; file rows tint the tile via `custom-icon-wrapper-class="bg-<intent>-container"`.
- Breadcrumbs behind sign-in set `:structured-data="false"`; the last item has no `to`.

## Settings
**Use for:** tabbed account and app preferences grouped into cards of label/control rows.
**Regions:** header → UiHeaderContent, tab bar (`?tab=`) → UiTabs, panel → `section[role=tabpanel]` in `<Transition name="fade">`, group → UiCard pane, setting row → `row` + UiDivider, profile → UiAvatar + UiInputFile + UiInputText grid, notifications → table of UiInputCheck switches, security → UiInputOtp + UiListGroup flush, danger zone → UiAlert + UiConfirmModal, interface → UiTabs color-mode picker + UiButtonToggleGroup density.

```vue
<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent title="Settings" subtitle="Manage your profile, notifications and security." />
    <UiTabs :tabs="tabs" :active-tab="activeTab" class="mb-4" @update:active-tab="selectTab" />
    <Transition name="fade" mode="out-in">
      <section v-if="activeTab === 'profile'" id="settings-profile" role="tabpanel" aria-labelledby="tab-profile" class="d-grid gap-6">
        <UiCard variant="pane">
          <template #header>
            <p class="card-title">Profile</p>
            <p class="caption text-muted mb-0">This is how teammates see you.</p>
          </template>
          <template #body>
            <div class="row">
              <div class="col-12 col-md-4">
                <p class="fw-700 mb-1">Personal details</p>
                <p class="caption text-muted mb-3 mb-md-0">Used for @mentions and email.</p>
              </div>
              <div class="col-12 col-md-8 d-grid grid-repeat-cols-1 grid-repeat-cols-sm-2 gap-inline-4">
                <UiInputText id="profile-name" v-model="profile.name" label="Full name" required :error-messages="errors.name" />
                <UiInputText id="profile-email" v-model="profile.email" type="email" label="Email" required />
              </div>
            </div>
            <UiDivider custom-class="my-4" />
          </template>
          <template #footer>
            <div class="d-flex justify-content-end gap-2">
              <UiButton text="Save changes" variant="filled" color="primary" :loading="saving" :disabled="invalid" @click="save" />
            </div>
          </template>
        </UiCard>
      </section>
      <section v-else id="settings-security" role="tabpanel" aria-labelledby="tab-security" class="d-grid gap-6">
        <UiCard variant="pane">
          <template #header><p class="card-title text-danger">Danger zone</p></template>
          <template #body>
            <UiAlert type="tonal" variant="danger" title="Delete this workspace" message="Removes every project for everyone.">
              <template #actions><UiButton text="Delete workspace" variant="filled" color="danger" size="sm" @click="deleteModal?.showDialog()" /></template>
            </UiAlert>
          </template>
        </UiCard>
        <UiConfirmModal ref="deleteModal" title="Delete the workspace?" confirm-label="Delete workspace" :is-loading="deleting" @confirm="deleteWorkspace" />
      </section>
    </Transition>
  </div>
</template>
```

**Rules:**
- Each tab item sets `panelId`; each panel is `section[role=tabpanel]` with that `id` and `aria-labelledby="tab-<id>"` (UiTabs renders tab buttons as `tab-<id>`). Derive the active tab from `route.query.tab` so deep links work.
- Setting row: `row` with label column (`fw-700 mb-1` title + `caption text-muted mb-3 mb-md-0` hint) and control column; `col-md-4`/`col-md-8` for forms, `col-md-5`/`col-md-7` + `align-items-center` for a single short control. `UiDivider custom-class="my-4"` between rows.
- Every input keeps a `label`; use `hide-label` when the row title shows it. Matrix switches get a label naming channel and event.
- One filled primary save per card, right-aligned in `#footer`, with `:loading` and `:disabled` while invalid. Cards that apply instantly (theme, density) have no footer.
- Status via `UiBadge` `tonal tonal-success|warning` in the card header; 2FA uses `UiInputOtp :length="6" @complete` plus a verify button, and a `role="status"` `bg-success-container` callout when on.
- Danger zone is the last card: `card-title text-danger`, `UiAlert type="tonal" variant="danger"` with `#actions`, which only opens `UiConfirmModal`.
- Density: `UiButtonToggleGroup v-model` that sets `data-density` on `<html>` (remove it for `comfortable`).

## Billing
**Use for:** a subscription page with the current plan, usage against limits, a plan picker, the payment method and invoice history.
**Regions:** header → UiHeaderContent, current plan → UiCard `bg-primary text-on-primary` (the one emphasized surface) + UiBadge, usage → UiCard + UiProgressBar rows, plans → `section` + UiButtonToggleGroup + UiCard `selectable` options with UiInputRadio + UiBadge + UiDivider, payment method → UiCard + UiAlert + UiIconSvg logo, invoices → UiDatatable (`selectable`, `is-loading` → UiTableSkeleton, `#controls` with UiInputDate range + bulk bar), cancel → UiConfirmModal.

```vue
<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent title="Billing" subtitle="Your plan, usage, payment method and invoices." />
    <div class="row gap-block-4 mb-4">
      <div class="col-12 col-xl-5">
        <UiCard variant="pane" custom-class="bg-primary text-on-primary h-100">
          <template #body>
            <p class="overline opacity-80 mb-1">Current plan</p>
            <p class="fs-3xl fw-800 mb-3">$12 <span class="caption opacity-80">per seat / month</span></p>
            <UiButton href="#plans" text="Change plan" variant="filled" color="white" size="sm" />
            <UiButton text="Cancel plan" variant="frosted" size="sm" @click="cancelModal?.showDialog()" />
          </template>
        </UiCard>
      </div>
      <div class="col-12 col-xl-7">
        <UiCard title="Usage this period" variant="pane" custom-class="h-100">
          <template #body>
            <UiProgressBar v-for="m in usage" :key="m.id" :value="m.percent" :aria-label="`${m.label} used`" :bar-class="m.percent >= 80 ? 'bg-warning' : null" size="sm" class="mb-4" />
          </template>
        </UiCard>
      </div>
    </div>
    <section id="plans" class="mb-4" aria-labelledby="plans-title">
      <UiCard variant="pane">
        <template #body>
          <h2 id="plans-title" class="fs-lg fw-700">Plans</h2>
          <UiButtonToggleGroup v-model="cycle" :options="cycleOptions" aria-label="Billing cycle" />
          <div class="row gap-block-4 my-4">
            <div v-for="plan in plans" :key="plan.id" class="col-12 col-xl-4">
              <UiCard selectable variant="outline" :custom-class="{ 'h-100': true, 'selected': plan.id === selectedPlanId }" @click="selectedPlanId = plan.id">
                <template #body>
                  <UiInputRadio :id="`plan-${plan.id}`" v-model="selectedPlanId" :options="[{ label: plan.name, value: plan.id }]" option-label="label" option-value="value" :label="`${plan.name} plan`" hide-label />
                  <UiBadge v-if="plan.popular" text="Most popular" variant="tonal tonal-accent" size="sm" />
                </template>
              </UiCard>
            </div>
          </div>
          <UiButton :text="planAction.label" :disabled="planAction.disabled" variant="filled" color="primary" />
        </template>
      </UiCard>
    </section>
    <UiDatatable v-model:selected="selectedInvoices" data-density="compact" :columns="columns" :items="invoices" row-key="id" selectable :is-loading="loading" :pagination="{ pageSize: 8 }" />
    <UiConfirmModal ref="cancelModal" title="Cancel your Pro plan?" confirm-label="Cancel Pro" cancel-label="Keep Pro" loading-label="Canceling…" :is-loading="isCanceling" @confirm="cancelPlan" />
  </div>
</template>
```

**Rules:**
- Only the current plan card is `bg-primary text-on-primary`; secondary text on it uses `opacity-80` (not `text-muted`), its buttons are `filled color="white"` and `frosted`.
- Plan options are `UiCard selectable variant="outline"` with `selected` in `custom-class` plus a `UiInputRadio` (`hide-label`) for keyboard access. Mark "Most popular" with a badge only; a `border` utility overrides the `selected` border.
- Usage meters: label + "used of limit" caption, `UiProgressBar size="sm"` with an `aria-label`; at ≥ 80% use `bar-class="bg-warning"` and a `bg-warning-container text-on-warning-container` hint saying what to do.
- Payment problems are a tonal `UiAlert` (`danger` failed charge, `warning` expiring card) with the fix in `#actions`. Logos via `UiIconSvg :content`, `:decorative="false"` + `aria-label` when the logo names the company.
- Invoices: use `UiDatatable :is-loading` (renders `UiTableSkeleton`) instead of a hand-built skeleton table; `#controls` holds `UiInputDate mode="range" trigger="button"` (add your own reset button, `clearable` only works on the field trigger) and the selection count + tonal Download; status cells are tonal `UiBadge`s; amounts `tabular-numbers` in an `align: 'end'` column.
- Cancel goes through `UiConfirmModal` with labels naming the plan and a `loading-label` (the default reads "Deleting..."); call `closeDialog()` after the request resolves.

# Orbit — Colorffy playground

A Nuxt app that uses `@colorffy/css` and `@colorffy/ui` the way a real product would: Orbit is a project-management workspace for a small product team. Every screen uses the library's components, tokens and color utilities. There are no prop galleries.

```bash
pnpm --filter playground-nuxt dev   # http://localhost:3019
```

## Screens

| Route | Screen |
|---|---|
| `/` | Home: greeting, stats, my tasks, projects, recent activity |
| `/inbox` | Notifications with filters and a detail pane |
| `/projects` | Project grid and table, filters, new-project wizard |
| `/projects/:id` | Project overview, tasks, files and activity |
| `/team` | Members, roles, pending invites, invite form |
| `/billing` | Plan, usage, plan picker, payment method, invoices |
| `/settings` | Profile, appearance (live brand color), notifications, security |
| `/help` | Help center with search, categories, FAQ and footer |
| `/sign-in` | Split sign-in with two-factor step (auth layout) |

## Structure

- `layouts/default.vue`: app shell (sidebar, navbar, account menu, notifications, mobile navigation bar, toast)
- `layouts/auth.vue`: blank layout for sign-in
- `utils/workspace.ts`: mock data shared by every screen
- `composables/useNotify.ts`: `notify(title, message, variant)` shows the layout's toast
- `assets/scss/abstracts/_roots.scss`: brand color and font overrides

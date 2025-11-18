# Colorffy Workspace

A monorepo containing the Colorffy UI component library and Colorffy CSS framework.

## 📦 Packages

| Name | Version | Description |
|------|---------|-------------|
| [Colorffy Workspace](https://github.com/giancarlosgza/colorffy-workspace) | [![GitHub](https://img.shields.io/badge/GitHub-Monorepo-blue?style=flat-square&logo=github)](https://github.com/giancarlosgza/colorffy-workspace) | Monorepo containing all Colorffy packages |
| [@colorffy/css](https://www.npmjs.com/package/@colorffy/css) | [![npm](https://img.shields.io/npm/v/@colorffy/css?style=flat-square&logo=npm&label=npm)](https://www.npmjs.com/package/@colorffy/css) | Standalone CSS framework with SCSS source files |
| [@colorffy/ui](https://www.npmjs.com/package/@colorffy/ui) | [![npm](https://img.shields.io/npm/v/@colorffy/ui?style=flat-square&logo=npm&label=npm)](https://www.npmjs.com/package/@colorffy/ui) | Vue 3 component library with TypeScript |

## 🎮 Playgrounds

- **`playground/vue`** - Vue playground for testing components
- **`playground/nuxt`** - Nuxt playground for testing components

## 🛠️ Development

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
# Vue playground
cd playground/vue
pnpm dev

# Nuxt playground
cd playground/nuxt
pnpm dev

# Storybook
cd packages/colorffy-ui
pnpm storybook
```

### Build Packages

```bash
# Build colorffy-ui
cd packages/colorffy-ui
pnpm build

# Build colorffy-css
cd packages/colorffy-css
pnpm build
```

## 📚 Documentation

- [@colorffy/css Documentation](./packages/colorffy-css/README.md)
- [@colorffy/ui Documentation](./packages/colorffy-ui/README.md)
- [Storybook](https://giancarlosgza.github.io/colorffy-ui) - Component showcase

## 📄 License

MIT © [Giancarlos Garza](https://github.com/giancarlosgza)

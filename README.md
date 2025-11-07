# Colorful Workspace

A monorepo containing the Colorful UI component library and Nuxt template.

## 📦 Packages

- **`packages/colorful-ui`** - Vue 3 component library with TypeScript
- **`packages/nuxt-template`** - Nuxt application template
- **`playground/vue`** - Vue playground for testing components

## 🚀 Publishing a New Package Version

Follow these steps in order to update and publish a new version of the `@giancarlosgza/colorful-ui` package:

### 1. Sync Components (Nuxt Template → Colorful UI)

If you've made changes to components in the Nuxt template and want to sync them to the library:

```bash
# From nuxt-template directory
cd packages/nuxt-template
pnpm sync:ui
```

This copies component files from `nuxt-template/app/components` to `colorful-ui/src/components`.

### 2. Fix Import Paths

After syncing, fix the import paths in the synced components:

```bash
# From colorful-ui directory
cd packages/colorful-ui
pnpm fix:imports
```

This converts Nuxt-style imports (e.g., `#components`) to relative paths.

### 3. Build the Library

Build the library to generate the distribution files:

```bash
# From colorful-ui directory
pnpm build
```

This creates the `dist/` folder with compiled `.mjs`, `.cjs`, and `.d.ts` files.

### 4. Update Version

Bump the package version using semantic versioning:

```bash
# For bug fixes (1.0.0 → 1.0.1)
pnpm version:patch

# For new features (1.0.0 → 1.1.0)
pnpm version:minor

# For breaking changes (1.0.0 → 2.0.0)
pnpm version:major
```

This updates `package.json` and creates a git tag.

### 5. Publish to npm

Publish the package to npm registry:

```bash
# From colorful-ui directory
pnpm publish
```

This runs `prepublishOnly` (builds automatically) and publishes with `--access public`.

### 6. Update Storybook (Optional)

If you've added or updated component stories:

```bash
# Run Storybook locally
pnpm storybook

# Build static Storybook for deployment
pnpm build-storybook
```

The static build is created in `storybook-static/` and can be deployed to any hosting service.

### 7. Commit & Push Changes

```bash
git add .
git commit -m "chore: release v1.0.x"
git push
git push --tags
```

## 📝 Complete Workflow Example

```bash
# 1. Sync components from Nuxt template
cd packages/nuxt-template
pnpm sync:ui

# 2. Fix imports in colorful-ui
cd ../colorful-ui
pnpm fix:imports

# 3. Build the library
pnpm build

# 4. Bump version (patch/minor/major)
pnpm version:patch

# 5. Publish to npm
pnpm publish

# 6. Update Storybook (optional)
pnpm build-storybook

# 7. Commit and push
cd ../..
git add .
git commit -m "chore: release v1.0.x"
git push
git push --tags
```

## 🛠️ Development

### Install Dependencies

```bash
# From root
pnpm install
```

### Run Storybook

```bash
cd packages/colorful-ui
pnpm storybook
```

### Test in Vue Playground

```bash
cd playground/vue
pnpm dev
```

### Run Nuxt Template

```bash
cd packages/nuxt-template
pnpm dev
```

## 📚 Documentation

- **Component Library README**: `packages/colorful-ui/README.md`
- **Storybook**: Run `pnpm storybook` to view component documentation
- **GitHub Repository**: [nuxt--template-starter](https://github.com/giancarlosgza/nuxt--template-starter)

## 📄 License

ISC © Giancarlos Garza

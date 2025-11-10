# Colorful Workspace

A monorepo containing the Colorful UI component library and Nuxt template.

## 📦 Packages

- **`packages/colorful-css`** - Standalone CSS framework with SCSS source files
- **`packages/colorful-ui`** - Vue 3 component library with TypeScript
- **`packages/nuxt-template`** - Nuxt application template
- **`playground/vue`** - Vue playground for testing components
- **`playground/nuxt`** - Nuxt playground for testing components

## 🚀 Publishing a New Package Version

Follow these steps in order to update and publish a new version of the `@giancarlosgza/colorful-ui` package:

### 1. Build the Library

Build the library to generate the distribution files:

```bash
# From colorful-ui directory
cd packages/colorful-ui
pnpm build
```

This creates the `dist/` folder with compiled `.mjs`, `.cjs`, and `.d.ts` files.

### 2. Update Version

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

### 3. Publish to npm

Publish the package to npm registry:

```bash
# From colorful-ui directory
pnpm publish
```

This runs `prepublishOnly` (builds automatically) and publishes with `--access public`.

### 4. Update Storybook (Optional)

If you've added or updated component stories:

```bash
# Run Storybook locally
pnpm storybook

# Build static Storybook for deployment
pnpm build-storybook
```

The static build is created in `storybook-static/` and can be deployed to any hosting service.

### 5. Commit & Push Changes

```bash
git add .
git commit -m "chore: release v1.0.x"
git push
git push --tags
```

## 📝 Complete Workflow Example

```bash
# 1. Build the library
cd packages/colorful-ui
pnpm build

# 2. Bump version (patch/minor/major)
pnpm version:patch

# 3. Publish to npm
pnpm publish

# 4. Update Storybook (optional)
pnpm build-storybook

# 5. Commit and push
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

### Test in Nuxt Playground

```bash
cd playground/nuxt
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

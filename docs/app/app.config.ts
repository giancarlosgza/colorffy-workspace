export default defineAppConfig({
  // Nuxt UI theme — `colorffy` is the custom palette defined in app/app.css.
  ui: {
    colors: {
      primary: 'colorffy',
      neutral: 'slate'
    }
  },
  // Docus site chrome. `github` is auto-derived from the repo's git remote.
  header: {
    title: 'Colorffy'
  },
  seo: {
    title: 'Colorffy',
    titleTemplate: '%s · Colorffy',
    description: 'A modern Vue 3 component library and expressive SCSS framework.'
  }
})

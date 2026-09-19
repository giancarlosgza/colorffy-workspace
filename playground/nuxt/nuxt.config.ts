export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2025-11-07',
  devtools: { enabled: true },

  devServer: {
    port: 3019
  },

  // Native view transitions on every page
  experimental: {
    viewTransition: true
  },

  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400..800&family=Geist+Mono:wght@400..800&display=swap' }
      ]
    }
  },

  // Import Colorffy CSS styles
  css: [
    '@/assets/scss/integrations.scss',
    '@/assets/scss/main.scss'
  ],

  modules: [
    '@nuxtjs/color-mode',
    '@colorffy/ui/nuxt'
  ],

  // Color mode
  colorMode: {
    preference: 'system',
    classSuffix: '-mode'
  }
})

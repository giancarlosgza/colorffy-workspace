// Production URL — drives absolute URLs in sitemap.xml, llms.txt, and OG images,
// and is what lets nuxt-llms emit llms.txt (it needs a domain). Override via the
// NUXT_PUBLIC_SITE_URL env var (set in .github/workflows/deploy-docs.yml).
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://colorffy-ui-docs.pages.dev'

export default defineNuxtConfig({
  // Extend the Docus theme layer. Registering it here (instead of via the
  // `--extends docus` CLI flag) ensures this project is treated as a layer too,
  // so its app/app.config.ts and app/app.css are loaded and take precedence.
  extends: ['docus'],

  site: { url: siteUrl },
  llms: { domain: siteUrl },
})

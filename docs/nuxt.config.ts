export default defineNuxtConfig({
  // Extend the Docus theme layer. Registering it here (instead of via the
  // `--extends docus` CLI flag) ensures this project is treated as a layer too,
  // so its app/app.config.ts and app/app.css are loaded and take precedence.
  extends: ['docus']
})

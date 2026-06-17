import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import vue from '@vitejs/plugin-vue'
import { playwright } from '@vitest/browser-playwright'
import dts from 'vite-plugin-dts'
import { defineConfig } from 'vitest/config'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['src/**/*.ts', 'src/**/*.vue'],
      exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts']
    })
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        nuxt: resolve(__dirname, 'src/nuxt.ts')
      },
      name: 'ColorffyUI',
      formats: ['es', 'cjs']
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'floating-vue', '@vueuse/core', '@vueuse/components', '@colorffy/css', '@nuxt/kit', '@nuxt/schema'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        sourcemapExcludeSources: true
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        storybookTest({
          configDir: resolve(__dirname, '.storybook')
        })
      ],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
})

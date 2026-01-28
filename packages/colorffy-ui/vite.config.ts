/// <reference types="vitest/config" />
import { resolve } from 'node:path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [vue(), dts({
    insertTypesEntry: true,
    include: ['src/**/*.ts', 'src/**/*.vue'],
    exclude: ['src/**/*.test.ts', 'src/**/*.spec.ts']
  })],
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
      external: ['vue', 'floating-vue', '@colorffy/css', '@nuxt/kit', '@nuxt/schema'],
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
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
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
});
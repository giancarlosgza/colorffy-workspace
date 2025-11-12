import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

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
      name: 'ColorfulUI',
      formats: ['es', 'cjs']
    },
    sourcemap: true,
    rollupOptions: {
      external: ['vue', 'floating-vue', '@colorful/css', '@nuxt/kit', '@nuxt/schema'],
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
  }
})

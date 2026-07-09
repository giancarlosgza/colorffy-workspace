<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({ pageTitle: 'Inicio' })

/** Data */
// Package manager switcher for the install command
const pmTabs = [
  { id: 'pnpm', label: 'pnpm', position: 0 },
  { id: 'npm', label: 'npm', position: 1 },
  { id: 'yarn', label: 'yarn', position: 2 }
]
const activePm = ref('pnpm')
const installCommands: Record<string, string> = {
  pnpm: 'pnpm add @colorffy/ui @colorffy/css',
  npm: 'npm install @colorffy/ui @colorffy/css',
  yarn: 'yarn add @colorffy/ui @colorffy/css'
}

// Framework setup tabs (Nuxt / Vue) with panels
const setupTabs = ref([
  { id: 'nuxt', label: 'Nuxt', panelId: 'panel-nuxt' },
  { id: 'vue', label: 'Vue', panelId: 'panel-vue' }
])
const activeSetup = ref('nuxt')

const nuxtSetup = `// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@colorffy/ui/nuxt'],
  css: ['@colorffy/css']
})`
const vueSetup = `// main.ts
import { createApp } from 'vue'
import ColorffyUI from '@colorffy/ui'
import '@colorffy/css'
import App from './App.vue'

createApp(App).use(ColorffyUI).mount('#app')`
const usageSnippet = `<template>
  <UiButton variant="filled" color="primary" text="¡Hola!" />
  <UiBadge text="Nuevo" variant="tonal tonal-accent" />
</template>`

// Quick links to the demo pages
const pages = [
  { to: '/dashboard', icon: '&#xe871;', title: 'Dashboard', text: 'KPIs, progreso y pestañas' },
  { to: '/projects', icon: '&#xe8ef;', title: 'Proyectos', text: 'Datatable, filtros y vistas' },
  { to: '/account', icon: '&#xe853;', title: 'Cuenta', text: 'Formularios e integraciones' },
  { to: '/notifications', icon: '&#xe7f4;', title: 'Notificaciones', text: 'Alertas, toasts y diálogos' },
  { to: '/settings', icon: '&#xe8b8;', title: 'Configuración', text: 'Listas y preferencias' },
  { to: '/about', icon: '&#xe88e;', title: 'Acerca de', text: 'Historia y hoja de ruta' }
]

const copied = ref(false)

/** Computed */
const installCommand = computed(() => installCommands[activePm.value] ?? installCommands.pnpm ?? '')

/** Methods */
function copyInstall() {
  navigator.clipboard?.writeText(installCommand.value)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Hero -->
    <UiCard
      variant="outline"
      class="bg-bordered-gradient rounded-lg mb-4"
    >
      <template #body>
        <div class="d-flex justify-content-between align-items-start flex-wrap gap-3">
          <div>
            <UiBadge
              text="v1.7.1 · MIT"
              variant="outline"
              size="sm" icon-code="&#xf5f4;"
              icon-class="text-accent-fixed"
              custom-class="mb-2"
            />
            <h1 class="fs-700 fw-800 mb-1">
              <span class="text-primary">Colorffy UI</span>
            </h1>
            <p
              class="subtitle-1 text-muted mb-0"
              style="max-width: 48ch;"
            >
              Más de 70 componentes headless para Vue 3 y Nuxt. Empieza en menos de un minuto.
            </p>
            <div class="d-flex flex-wrap gap-2 mt-3">
              <UiButton
                text="Ver en GitHub"
                variant="filled"
                color="primary"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe86f;" />
                </template>
              </UiButton>
              <UiButton text="Documentación" variant="outline">
                <template #icon>
                  <UiIconMaterial icon-code="&#xe873;" />
                </template>
              </UiButton>
            </div>
          </div>
          <UiIconSvg
            :content="brandIcons.nuxt"
            size="xl"
          />
        </div>
      </template>
    </UiCard>

    <div class="row">
      <!-- Install -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="icon-wrap icon-wrap-sm icon-wrap-outline">
                <UiIconMaterial
                  icon-code="&#xe2c4;"
                  class="text-primary"
                />
              </span>
              <h2 class="fs-500 fw-800 mb-0">
                1 · Instalación
              </h2>
            </div>
            <UiSegmentedControls
              :tabs="pmTabs"
              :active-tab="activePm"
              @update-active-tab="activePm = $event"
            />
            <div class="bg-muted-fixed bg-opacity-10 d-flex align-items-center gap-2 rounded-md p-2 ps-3 mt-3">
              <code
                class="flex-grow-1 fs-sm-400"
                style="overflow-x: auto;
                white-space: nowrap;"
              >
                {{ installCommand }}
              </code>
              <UiButtonTooltip
                :tooltip-text="copied ? '¡Copiado!' : 'Copiar'"
                variant="text"
                size="sm"
                icon
                icon-variant="shape-sm"
                @on-click="copyInstall"
              >
                <template #icon>
                  <UiIconMaterial :icon-code="copied ? '&#xe876;' : '&#xe14d;'" :class="copied ? 'text-success' : ''" />
                </template>
              </UiButtonTooltip>
            </div>
            <UiAlert
              type="tonal"
              variant="info"
              message="@colorffy/css es opcional: trae sus estilos o usa los tuyos."
              class="mt-3 mb-0"
            />
          </template>
        </UiCard>
      </div>

      <!-- Setup -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex align-items-center gap-2 mb-3">
              <span class="icon-wrap icon-wrap-sm icon-wrap-outline">
                <UiIconMaterial icon-code="&#xe869;" class="text-accent" />
              </span>
              <h2 class="fs-500 fw-800 mb-0">
                2 · Configuración
              </h2>
            </div>
            <UiTabs
              :tabs="setupTabs"
              :active-tab="activeSetup"
              pill-tabs
              @update-active-tab="activeSetup = $event"
            />
            <div
              v-show="activeSetup === 'nuxt'"
              id="panel-nuxt"
              role="tabpanel"
              aria-labelledby="tab-nuxt"
              tabindex="0"
              class="bg-muted-fixed bg-opacity-10 rounded-md p-3 mt-3"
              style="overflow-x: auto;"
            >
              <pre class="mb-0"><code class="fs-sm-300">{{ nuxtSetup }}</code></pre>
            </div>
            <div
              v-show="activeSetup === 'vue'"
              id="panel-vue"
              role="tabpanel"
              aria-labelledby="tab-vue"
              tabindex="0"
              class="bg-muted-fixed bg-opacity-10 rounded-md p-3 mt-3"
              style="overflow-x: auto;"
            >
              <pre class="mb-0"><code class="fs-sm-300">{{ vueSetup }}</code></pre>
            </div>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Usage -->
    <UiCard
      variant="outline"
      class="card-pane mb-4"
    >
      <template #body>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span class="icon-wrap icon-wrap-sm icon-wrap-outline">
            <UiIconMaterial icon-code="&#xe86f;" class="text-success" />
          </span>
          <h2 class="fs-500 fw-800 mb-0">
            3 · Úsalo
          </h2>
        </div>
        <p class="subtitle-2 text-muted">
          Los componentes se auto-importan en Nuxt. Solo escríbelos en tu plantilla:
        </p>
        <div
          class="bg-muted-fixed bg-opacity-10 rounded-md p-3"
          style="overflow-x: auto;"
        >
          <pre class="mb-0"><code class="fs-sm-300">{{ usageSnippet }}</code></pre>
        </div>
      </template>
    </UiCard>

    <!-- Cover image + clickable card (image-url + href) -->
    <UiCard
      variant="outline"
      class="card-pane shadow-sm mb-4"
      image-url="https://picsum.photos/640/360"
      image-alt="Vista previa de la documentación de Colorffy"
      href="https://colorffy.com"
    >
      <template #body>
        <h3 class="subtitle-1 fw-700 mb-1">
          Documentación completa
        </h3>
        <p class="fs-sm-300 text-muted mb-0">
          Guías, ejemplos y referencia de la API en colorffy.com.
        </p>
      </template>
    </UiCard>

    <!-- Explore -->
    <h2 class="fs-500 fw-800 mb-3 mt-section">
      Explora la demo
    </h2>
    <div class="row">
      <div
        v-for="page in pages"
        :key="page.to"
        class="col-12 col-sm-6 col-lg-4 mb-3"
      >
        <NuxtLink
          :to="page.to"
          class="undecorated"
        >
          <UiCard
            variant="outline"
            selectable
            class="card-pane shadow-sm h-100"
          >
            <template #body>
              <div class="d-flex align-items-center gap-3">
                <span class="icon-wrap icon-wrap-sm icon-wrap-outline">
                  <UiIconMaterial :icon-code="page.icon" class="text-primary" />
                </span>
                <div class="flex-grow-1">
                  <p class="subtitle-1 fw-700 mb-0">
                    {{ page.title }}
                  </p>
                  <p class="fs-sm-300 text-muted mb-0">
                    {{ page.text }}
                  </p>
                </div>
                <UiIconMaterial icon-code="&#xe5cc;" class="text-muted" />
              </div>
            </template>
          </UiCard>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ pageTitle: 'Acerca de' })

/** Data */
// Principles shown through tabs + panels
const principleTabs = ref([
  { id: 'headless', label: 'Headless', panelId: 'panel-headless' },
  { id: 'a11y', label: 'Accesible', panelId: 'panel-a11y' },
  { id: 'typed', label: 'Tipado', panelId: 'panel-typed' }
])
const activePrinciple = ref('headless')

// Key metrics
const stats = [
  { label: 'Componentes', value: '70+', icon: '&#xe5c3;', iconClass: 'text-primary', trend: 'Estable', trendVariant: 'outline' },
  { label: 'Descargas / mes', value: '12k', icon: '&#xf090;', iconClass: 'text-accent', trend: '+18%', trendVariant: 'tonal tonal-success' },
  { label: 'Estrellas', value: '2.4k', icon: '&#xe838;', iconClass: 'text-warning', trend: '+120', trendVariant: 'tonal tonal-success' }
]

// Tech the library is built with / integrates with
const builtWith = [
  { brand: 'nuxt', name: 'Nuxt 4' },
  { brand: 'github', name: 'Open Source' }
] as const
const integrations = ['google', 'facebook', 'apple', 'stripe', 'discord', 'instagram'] as const

// Maintainers
const team = [
  { name: 'Giancarlos Garza', role: 'Creador y mantenedor', initials: 'GG', shape: 'gem', brand: 'github' },
  { name: 'Ana Ruiz', role: 'Diseño del sistema', initials: 'AR', shape: 'clover-4', brand: 'instagram' },
  { name: 'Luis Gómez', role: 'Accesibilidad', initials: 'LG', shape: 'arch', brand: 'discord' },
  { name: 'María Paz', role: 'Documentación', initials: 'MP', shape: 'pill', brand: 'twitter' }
] as const

// Roadmap milestones (nods to the real audit work)
const roadmap = ref([
  { id: 'v1', version: 'v1.0', title: 'Lanzamiento inicial', status: 'Lanzado', variant: 'tonal tonal-success', detail: 'Primer set de 50+ componentes headless con soporte para Nuxt.' },
  { id: 'v1_5', version: 'v1.5', title: 'Modo oscuro y temas', status: 'Lanzado', variant: 'tonal tonal-success', detail: 'Variables CSS y temas personalizables vía SCSS.' },
  { id: 'v1_7', version: 'v1.7', title: 'Navegación por teclado y ARIA', status: 'Lanzado', variant: 'tonal tonal-success', detail: 'Roving tabindex en Tabs y SegmentedControls, roles y aria-* en toda la librería.' },
  { id: 'v2', version: 'v2.0', title: 'Nueva API de columnas del Datatable', status: 'En progreso', variant: 'tonal tonal-warning', detail: 'Columnas explícitas { key, label, sortable, hidden } que desacoplan la etiqueta del dato.' }
])

const faqs = [
  { id: 'free', q: '¿Es gratis y de código abierto?', a: 'Sí, Colorffy UI es MIT. Úsalo en proyectos personales y comerciales.' },
  { id: 'css', q: '¿Necesito Colorffy CSS?', a: 'No. Los componentes son headless; puedes usar Colorffy CSS o tus propios estilos.' },
  { id: 'nuxt', q: '¿Funciona con Nuxt y Vue puro?', a: 'Ambos. Incluye un módulo de Nuxt con auto-imports y también funciona como plugin de Vue.' }
]

// Newsletter
const email = ref('')
const subscribed = ref(true)
const isJoining = ref(false)

/** Methods */
function join() {
  isJoining.value = true
  setTimeout(() => {
    isJoining.value = false
  }, 1400)
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
              text="v1.7.1"
              variant="outline"
              size="sm"
              icon-code="&#xf5f4;"
              icon-class="text-accent-fixed"
              custom-class="mb-2"
            />
            <h1 class="fs-700 fw-800 mb-1">
              Acerca de <span class="text-primary">Colorffy UI</span>
            </h1>
            <p class="subtitle-1 text-muted mb-0" style="max-width: 46ch;">
              Un sistema de diseño headless para Vue 3 y Nuxt: más de 70 componentes
              accesibles, tipados y sin estilos impuestos.
            </p>
            <UiButtonGroup
              connected
              class="mt-3"
            >
              <UiButton
                text="Ver en GitHub"
                variant="filled"
                color="primary"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe86f;" />
                </template>
              </UiButton>
              <UiButton
                text="Documentación"
                variant="outline"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe873;" />
                </template>
              </UiButton>
            </UiButtonGroup>
          </div>
          <UiIconSvg
            :content="brandIcons.nuxt"
            size="xl"
          />
        </div>
      </template>
    </UiCard>

    <!-- Mission -->
    <UiAlert
      type="tonal"
      variant="primary"
      title="Nuestra misión"
      message="Dar a los equipos control total sobre la apariencia y el comportamiento de su interfaz, sin sacrificar la accesibilidad ni la experiencia de desarrollo."
      class="mb-4"
    />

    <!-- Stats -->
    <div class="row">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="col-12 col-md-4 mb-3"
      >
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div class="icon-wrap icon-wrap-sm icon-wrap-outline mb-2">
                <UiIconMaterial
                  :icon-code="stat.icon"
                  :class="stat.iconClass"
                />
              </div>
              <UiBadge
                :text="stat.trend"
                :variant="stat.trendVariant"
                size="sm"
              />
            </div>
            <p class="fs-600 fw-800 mb-0">
              {{ stat.value }}
            </p>
            <p class="subtitle-2 text-muted mb-0">
              {{ stat.label }}
            </p>
          </template>
        </UiCard>
      </div>
      <div class="col-12 mb-3">
        <UiCard
          variant="outline"
          class="card-pane"
        >
          <template #body>
            <div class="d-flex justify-content-between subtitle-2 mb-3">
              <span class="fw-600">Cobertura de accesibilidad</span>
              <span class="text-muted tabular-numbers">92%</span>
            </div>
            <UiProgressBar
              :value="92"
              gradient
              bar-class="gradient-success"
              aria-label="Cobertura de accesibilidad"
            />
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Principles (tabs + panels) -->
    <UiCard
      variant="outline"
      class="card-pane mb-4"
    >
      <template #body>
        <h3 class="subtitle-1 fw-700 mb-3">
          Principios de diseño
        </h3>
        <UiTabs
          :tabs="principleTabs"
          :active-tab="activePrinciple"
          pill-tabs
          @update-active-tab="activePrinciple = $event"
        />

        <div
          v-show="activePrinciple === 'headless'"
          id="panel-headless"
          role="tabpanel"
          aria-labelledby="tab-headless"
          tabindex="0"
          class="mt-3"
        >
          <p class="subtitle-1 mb-1">
            Sin estilos impuestos
          </p>
          <p class="subtitle-2 text-muted mb-0">
            Cada componente expone nombres de clase semánticos. Trae Colorffy CSS o
            escribe los tuyos: el comportamiento no cambia.
          </p>
        </div>
        <div
          v-show="activePrinciple === 'a11y'"
          id="panel-a11y"
          role="tabpanel"
          aria-labelledby="tab-a11y"
          tabindex="0"
          class="mt-3"
        >
          <p class="subtitle-1 mb-1">
            Accesible por defecto
          </p>
          <p class="subtitle-2 text-muted mb-0">
            Roles WAI-ARIA, navegación por teclado con roving tabindex y nombres
            accesibles incluidos de fábrica.
          </p>
        </div>
        <div
          v-show="activePrinciple === 'typed'"
          id="panel-typed"
          role="tabpanel"
          aria-labelledby="tab-typed"
          tabindex="0"
          class="mt-3"
        >
          <p class="subtitle-1 mb-1">
            Totalmente tipado
          </p>
          <p class="subtitle-2 text-muted mb-0">
            Definiciones de TypeScript completas para props, emits y slots de cada
            componente.
          </p>
        </div>
      </template>
    </UiCard>

    <!-- Built with / integrations -->
    <div class="row">
      <div class="col-md-6 mb-3">
        <UiCard
          variant="outline"
          class="h-100 card-pane"
        >
          <template #body>
            <h3 class="subtitle-1 fw-700 mb-3">
              Construido con
            </h3>
            <div class="d-flex flex-wrap gap-4">
              <div
                v-for="tech in builtWith"
                :key="tech.brand"
                class="d-flex align-items-center gap-2"
              >
                <UiIconSvg
                  :content="brandIcons[tech.brand]"
                  size="md"
                />
                <span class="subtitle-1 fw-600">{{ tech.name }}</span>
              </div>
            </div>
          </template>
        </UiCard>
      </div>
      <div class="col-md-6 mb-3">
        <UiCard
          variant="outline"
          class="h-100 card-pane"
        >
          <template #body>
            <h3 class="subtitle-1 fw-700 mb-3">
              Funciona con
            </h3>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <UiIconSvg
                v-for="brand in integrations"
                :key="brand"
                :content="brandIcons[brand]"
                size="md"
                :decorative="false"
                :aria-label="brand"
              />
            </div>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Team -->
    <h3 class="subtitle-1 fw-700 mt-2 mb-3 mt-section">
      El equipo
    </h3>
    <div class="row">
      <div
        v-for="member in team"
        :key="member.name"
        class="col-6 col-lg-3 mb-3"
      >
        <UiCard
          variant="outline"
          class="card-pane text-center"
        >
          <template #body>
            <UiAvatar
              :initials="member.initials"
              :alt="member.name"
              size="md"
              :mask-shape="member.shape"
              class="bg-secondary-fixed mx-auto"
            />
            <p class="subtitle-1 fw-700 mt-2 mb-0">
              {{ member.name }}
            </p>
            <p class="fs-sm-300 text-muted mb-3">
              {{ member.role }}
            </p>
            <UiIconSvg
              :content="brandIcons[member.brand]"
              size="sm"
            />
          </template>
        </UiCard>
      </div>
    </div>

    <div class="row">
      <!-- Roadmap -->
      <div class="col-lg-7 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <h3 class="subtitle-1 fw-700 mb-3">
              Hoja de ruta
            </h3>
            <UiAccordionGroup
              is-transparent
            >
              <UiAccordion
                v-for="milestone in roadmap"
                :key="milestone.id"
                name="roadmap"
                :text="milestone.detail"
                :open="milestone.id === 'v1'"
              >
                <template #header>
                  <span class="d-inline-flex align-items-center gap-2 flex-wrap">
                    <UiBadge
                      :text="milestone.version"
                      variant="outline"
                      size="sm"
                    />
                    <span class="fw-600">{{ milestone.title }}</span>
                    <UiBadge
                      :text="milestone.status"
                      :variant="milestone.variant"
                      size="sm"
                    />
                  </span>
                </template>
              </UiAccordion>
            </UiAccordionGroup>
          </template>
        </UiCard>
      </div>

      <!-- FAQ -->
      <div class="col-lg-5 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <h3 class="subtitle-1 fw-700 mb-3">
              Preguntas frecuentes
            </h3>
            <!-- Borderless FAQ list: no surface, small size -->
            <UiAccordionGroup
              variant="borderless"
              size="sm"
            >
              <UiAccordion
                v-for="faq in faqs"
                :key="faq.id"
                name="about-faq"
                :title="faq.q"
                :text="faq.a"
                :open="faq.id === 'free'"
              />
            </UiAccordionGroup>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Newsletter / CTA -->
    <UiCard
      variant="pane"
      class="card-outline bg-primary-fixed bg-opacity-20 rounded-lg mt-section"
    >
      <template #body>
        <div class="row align-items-center">
          <div class="col-md-7 mb-3 mb-md-0">
            <h3 class="fs-500 fw-800 mb-1">
              Mantente al día
            </h3>
            <p class="subtitle-2 text-muted mb-0">
              Recibe novedades de versiones y nuevos componentes. Sin spam.
            </p>
          </div>
          <div class="col-md-5">
            <div class="input-group gap-2 mb-2">
              <UiInputText
                v-model="email"
                type="email"
                placeholder="tucorreo@ejemplo.com"
                variant="outline"
                rounded
                hide-label
                label="Correo electrónico"
              />
              <UiButton
                text="Unirme"
                variant="filled"
                color="primary"
                rounded
                :loading="isJoining"
                @on-click="join"
              />
            </div>

            <UiInputCheck
              id="newsletter-opt"
              v-model="subscribed"
              label="Acepto recibir el boletín mensual"
              size="sm"
            />
          </div>
        </div>
      </template>
    </UiCard>
  </div>
</template>

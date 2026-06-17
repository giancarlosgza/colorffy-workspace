<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({ pageTitle: 'Dashboard' })

/** Data */
// KPI cards — mix of determinate progress and one indeterminate (processing)
const stats = [
  { label: 'Ingresos', value: '$48,250', delta: '+12.5%', deltaVariant: 'tonal tonal-success', icon: '&#xe227;', iconClass: 'text-success', progress: 72, progressLabel: '72% de la meta mensual' },
  { label: 'Usuarios activos', value: '8,942', delta: '+4.1%', deltaVariant: 'tonal tonal-primary', icon: '&#xe7fb;', iconClass: 'text-primary', progress: 58, progressLabel: '58% de capacidad' },
  { label: 'Conversión', value: '3.6%', delta: '-0.8%', deltaVariant: 'tonal tonal-danger', icon: '&#xe6e1;', iconClass: 'text-danger', progress: 36, progressLabel: '36% del objetivo' },
  { label: 'Tickets', value: '127', delta: 'En vivo', deltaVariant: 'tonal tonal-warning', icon: '&#xe0b7;', iconClass: 'text-warning', progress: 0, indeterminate: true, progressLabel: 'Sincronizando…' }
]

// Tabs with associated panels (reports tab disabled to test disabled state)
const overviewTabs = ref([
  { id: 'summary', label: 'Resumen', panelId: 'panel-summary' },
  { id: 'analytics', label: 'Analítica', panelId: 'panel-analytics' },
  { id: 'reports', label: 'Reportes', panelId: 'panel-reports', disabled: true }
])
const activeOverviewTab = ref('summary')

// Per-channel analytics for the analytics panel
const channels = [
  { name: 'Búsqueda orgánica', value: 64, barClass: 'bg-success-fixed bg-opacity-90' },
  { name: 'Redes sociales', value: 48, barClass: 'bg-primary-fixed bg-opacity-90' },
  { name: 'Email', value: 27, barClass: 'bg-accent-fixed bg-opacity-90' },
  { name: 'Referidos', value: 12, barClass: 'bg-warning-fixed bg-opacity-90' }
]

// Activity feed
const activity = [
  { id: 1, title: 'Nuevo despliegue', text: 'Proyecto Atlas v2.4.0 publicado', icon: '&#xe1b6;', wrapper: 'bg-success-fixed', iconColor: 'text-success-emphasis' },
  { id: 2, title: 'Comentario', text: 'Ana respondió en Proyecto Nébula', icon: '&#xe0b9;', wrapper: 'bg-primary-fixed', iconColor: 'text-primary-emphasis' },
  { id: 3, title: 'Alerta de uso', text: 'API alcanzó el 80% del límite', icon: '&#xe002;', wrapper: 'bg-warning-fixed', iconColor: 'text-warning-emphasis' },
  { id: 4, title: 'Pago recibido', text: 'Suscripción Enterprise renovada', icon: '&#xe227;', wrapper: 'bg-accent-fixed', iconColor: 'text-accent-emphasis' }
]

/** Computed */
const activePanelLabel = computed(() => overviewTabs.value.find(t => t.id === activeOverviewTab.value)?.label ?? '')

/** Methods */
function onOverviewTabChange(tabId: string) {
  activeOverviewTab.value = tabId
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Header -->
    <UiHeaderContent
      title="Panel general"
      subtitle="Resumen del rendimiento de tu espacio de trabajo"
      actions
      :hide-actions-on-mobile="false"
    >
      <template #actions>
        <UiButtonGroup connected>
          <UiButton text="Exportar" variant="outline" size="sm">
            <template #icon>
              <UiIconMaterial icon-code="&#xf090;" />
            </template>
          </UiButton>
          <UiButton text="Nuevo informe" variant="filled" color="primary" size="sm">
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiButton>
        </UiButtonGroup>
      </template>
    </UiHeaderContent>

    <!-- KPI cards -->
    <div class="row mt-section">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="col-12 col-sm-6 col-lg-3 mb-3"
      >
        <UiCard
          variant="outline"
          size="sm"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div class="icon-wrap icon-wrap-sm icon-wrap-outline">
                <UiIconMaterial :icon-code="stat.icon" :class="stat.iconClass" />
              </div>
              <UiBadge :text="stat.delta" :variant="stat.deltaVariant" size="sm" />
            </div>
            <p class="subtitle-2 text-muted mb-0">
              {{ stat.label }}
            </p>
            <p class="fs-500 fw-800 mb-2">
              {{ stat.value }}
            </p>
            <UiProgressBar
              :value="stat.progress"
              :indeterminate="stat.indeterminate"
              :aria-label="stat.progressLabel"
              size="sm"
            />
            <p class="fs-sm-300 text-muted mt-1 mb-0">
              {{ stat.progressLabel }}
            </p>
          </template>
        </UiCard>
      </div>
    </div>

    <div class="row">
      <!-- Tabs with panels -->
      <div class="col-lg-8 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <UiTabs
              :tabs="overviewTabs"
              :active-tab="activeOverviewTab"
              pill-tabs
              @update-active-tab="onOverviewTabChange"
            />

            <!-- Panels -->
            <div
              v-show="activeOverviewTab === 'summary'"
              id="panel-summary"
              role="tabpanel"
              aria-labelledby="tab-summary"
              tabindex="0"
              class="mt-3"
            >
              <h4 class="subtitle-1 fw-700 mb-1">
                Rendimiento {{ activePanelLabel }}
              </h4>
              <p class="subtitle-2 text-muted">
                Indicadores combinados de las últimas 4 semanas.
              </p>
              <UiProgressBar
                :value="82"
                text="82%"
                gradient
                aria-label="Salud general del proyecto"
                class="mt-2"
              />
              <UiProgressBar
                :value="64"
                animated
                bar-class="bg-primary-fixed"
                aria-label="Cobertura de pruebas"
                text="Cobertura 64%"
                class="mt-2"
              />
            </div>

            <div
              v-show="activeOverviewTab === 'analytics'"
              id="panel-analytics"
              role="tabpanel"
              aria-labelledby="tab-analytics"
              tabindex="0"
              class="mt-3"
            >
              <h4 class="subtitle-1 fw-700 mb-3">
                Tráfico por canal
              </h4>
              <div
                v-for="channel in channels"
                :key="channel.name"
                class="mb-3"
              >
                <div class="d-flex justify-content-between subtitle-2 mb-1">
                  <span>{{ channel.name }}</span>
                  <span class="text-muted tabular-numbers">{{ channel.value }}%</span>
                </div>
                <UiProgressBar
                  :value="channel.value"
                  :bar-class="channel.barClass"
                  :aria-label="`Tráfico de ${channel.name}`"
                  size="sm"
                />
              </div>
            </div>

            <div
              v-show="activeOverviewTab === 'reports'"
              id="panel-reports"
              role="tabpanel"
              aria-labelledby="tab-reports"
              tabindex="0"
              class="mt-3"
            >
              <UiEmpty title="Sin reportes" subtitle="Esta sección está deshabilitada en la demo." />
            </div>
          </template>
        </UiCard>
      </div>

      <!-- Activity feed -->
      <div class="col-lg-4 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex justify-content-between align-items-center mb-2">
              <h4 class="subtitle-1 fw-700 mb-0">
                Actividad reciente
              </h4>
              <UiBadge text="4 nuevas" variant="outline" size="sm" />
            </div>
            <UiListGroup is-interactive is-undecorated variant="flush">
              <UiListItem
                v-for="item in activity"
                :key="item.id"
                :title="item.title"
                :text="item.text"
                :icon="item.icon"
                :custom-icon-wrapper-class="`${item.wrapper} rounded-full`"
                :custom-icon-class="item.iconColor"
              />
            </UiListGroup>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- System status -->
    <UiCard
      variant="outline"
      class="card-pane"
    >
      <template #body>
        <div class="d-flex justify-content-between align-items-center mb-3">
          <h4 class="subtitle-1 fw-700 mb-0">
            Estado del sistema
          </h4>
          <UiBadge text="Operativo" variant="tonal tonal-success" size="sm" icon-code="&#xe061;" />
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <p class="subtitle-2 mb-1">
              Migración de base de datos
            </p>
            <UiProgressBar :value="0" indeterminate aria-label="Migración en progreso" />
            <p class="fs-sm-300 text-muted mt-1 mb-0">
              Progreso indeterminado — en ejecución
            </p>
          </div>
          <div class="col-md-6 mb-3">
            <p class="subtitle-2 mb-1">
              Almacenamiento usado
            </p>
            <UiProgressBar
              :value="91"
              text="91%"
              bar-class="bg-danger-fixed bg-opacity-90"
              aria-label="Almacenamiento usado"
            />
            <p class="fs-sm-300 text-muted mt-1 mb-0">
              91 GB de 100 GB
            </p>
          </div>
        </div>
      </template>
    </UiCard>

    <!-- Floating action button -->
    <UiButtonFabGroup>
      <UiButton variant="tonal" color="primary" class="btn-fab" title="Nueva acción">
        <template #icon>
          <UiIconMaterial icon-code="&#xe145;" />
        </template>
      </UiButton>
    </UiButtonFabGroup>
  </div>
</template>

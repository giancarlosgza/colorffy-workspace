<script setup lang="ts">
import type { IDatatableColumn } from '@colorffy/ui'
import { NuxtLink } from '#components'
import { computed, ref } from 'vue'

definePageMeta({ pageTitle: 'Proyectos' })

/** Data */
// English data keys (as if from an API) with Spanish display labels
const columns: IDatatableColumn[] = [
  { key: 'id', label: 'ID', hidden: true },
  { key: 'name', label: 'Proyecto' },
  { key: 'owner', label: 'Responsable', sortable: false },
  { key: 'status', label: 'Estado' },
  { key: 'completion', label: 'Avance', align: 'end' },
  { key: 'budget', label: 'Presupuesto', align: 'end' },
  { key: 'createdAt', label: 'Creado', align: 'end' },
  { key: 'actions', label: 'Acciones', sortable: false }
]
const projects = [
  { id: 1, name: 'Atlas', owner: 'Ana Ruiz', status: 'active', completion: 82, budget: 48000, createdAt: '2025-10-01' },
  { id: 2, name: 'Nébula', owner: 'Luis Gómez', status: 'pending', completion: 35, budget: 12500, createdAt: '2025-10-03' },
  { id: 3, name: 'Aurora', owner: 'María Paz', status: 'active', completion: 67, budget: 89100, createdAt: '2025-10-05' },
  { id: 4, name: 'Horizonte', owner: 'Carlos Vela', status: 'archived', completion: 100, budget: 5230, createdAt: '2025-10-07' },
  { id: 5, name: 'Vertex', owner: 'Sofía León', status: 'active', completion: 54, budget: 145600, createdAt: '2025-10-10' },
  { id: 6, name: 'Ícaro', owner: 'Diego Mora', status: 'pending', completion: 21, budget: 7890, createdAt: '2025-10-12' },
  { id: 7, name: 'Océano', owner: 'Elena Cruz', status: 'archived', completion: 100, budget: 3450, createdAt: '2025-10-14' },
  { id: 8, name: 'Quántico', owner: 'Pablo Ríos', status: 'active', completion: 48, budget: 26780, createdAt: '2025-10-16' }
]

// View switcher (ButtonToggleGroup) — table vs cards
const viewMode = ref('table')
const viewOptions = [
  { id: 'table', icon: '&#xe8ef;', title: 'Tabla' },
  { id: 'cards', icon: '&#xe8f0;', title: 'Tarjetas' }
]

// Status filter (SegmentedControls)
const statusFilter = ref('all')
const statusTabs = [
  { id: 'all', label: 'Todos', position: 0 },
  { id: 'active', label: 'Activos', position: 1 },
  { id: 'pending', label: 'Pendientes', position: 2 },
  { id: 'archived', label: 'Archivados', position: 3 }
]

const search = ref('')
const isLoading = ref(false)

/** Computed */
const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesStatus = statusFilter.value === 'all' || project.status === statusFilter.value
    const matchesSearch = project.name.toLowerCase().includes(search.value.toLowerCase())
    return matchesStatus && matchesSearch
  })
})

/** Methods */
const statusMeta: Record<string, { label: string, variant: string, icon: string }> = {
  active: { label: 'Activo', variant: 'tonal tonal-success', icon: '&#xe061;' },
  pending: { label: 'Pendiente', variant: 'tonal tonal-warning', icon: '&#xe002;' },
  archived: { label: 'Archivado', variant: 'tonal tonal-neutral', icon: '&#xe149;' }
}
function formatCurrency(value: number) {
  return value.toLocaleString('es-ES', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}
function formatDate(value: string) {
  return new Date(value).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: '2-digit' })
}
function simulateLoading() {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1600)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Breadcrumb -->
    <UiBreadcrumb
      :as="NuxtLink"
      base-url="https://colorffy.com"
      separator-icon="&#xe5cc;"
      class="mb-3"
      :items="[
        { label: 'Inicio', to: '/' },
        { label: 'Proyectos' },
      ]"
    />

    <!-- Header -->
    <UiHeaderContent
      title="Proyectos"
      subtitle="Administra y supervisa todos los proyectos del equipo"
      actions
      :hide-actions-on-mobile="false"
    >
      <template #actions>
        <UiButton text="Nuevo proyecto" variant="filled" color="primary">
          <template #icon>
            <UiIconMaterial icon-code="&#xe145;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <!-- Toolbar -->
    <UiCard
      variant="outline"
      class="card-pane my-3"
    >
      <template #body>
        <UiSegmentedControls
          :tabs="statusTabs"
          :active-tab="statusFilter"
          @update-active-tab="statusFilter = $event"
        />

        <div class="d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <div class="input-group">
            <div class="input-group-prefix border border-transparent px-0">
              <UiIconMaterial icon-code="&#xe8b6;" />
            </div>
            <UiInputText
              v-model="search"
              placeholder="Buscar proyecto…"
              variant="transparent"
              rounded
              custom-class="px-2"
            />
          </div>
          <div>
            <UiButtonToggleGroup
              v-model="viewMode"
              :options="viewOptions"
              class="grid-repeat-cols-md-2"
              aria-label="Cambiar vista"
            />
          </div>
        </div>
      </template>
    </UiCard>

    <!-- Table view -->
    <UiCard
      v-if="viewMode === 'table'"
      variant="outline"
      class="card-pane"
    >
      <template #body>
        <UiDatatable
          :columns="columns"
          :items="filteredProjects"
          :is-loading="isLoading"
          :skeleton-rows="6"
          row-key="id"
          default-sort-key="name"
          caption="Listado de proyectos del equipo"
          column-manager
          column-manager-text="Columnas"
          column-manager-tooltip="Administrar columnas"
          :columns-toggle-tooltip="{ showAll: 'Mostrar todas', hideDefault: 'Ocultar predeterminadas' }"
          empty-state-title="No se encontraron proyectos"
          empty-state-subtitle="Ajusta el filtro o el término de búsqueda."
        >
          <template #controls>
            <UiButton
              text="Simular carga"
              variant="tonal"
              color="success"
              size="sm"
              @on-click="simulateLoading"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe5d5;" />
              </template>
            </UiButton>
          </template>
          <template #cell-name="{ item }">
            <span class="d-inline-flex align-items-center gap-2 fw-600">
              <UiAvatar :initials="item.name.charAt(0)" size="sm" mask-shape="pill" class="bg-secondary-fixed" />
              {{ item.name }}
            </span>
          </template>
          <template #cell-status="{ item }">
            <UiBadge
              :text="statusMeta[item.status]?.label ?? ''"
              :variant="statusMeta[item.status]?.variant ?? ''"
              :icon-code="statusMeta[item.status]?.icon ?? ''"
              size="sm"
            />
          </template>
          <template #cell-completion="{ item }">
            <div class="d-grid gap-1" style="min-width: 7rem;">
              <span class="text-muted text-end tabular-numbers fs-sm-300">{{ item.completion }}%</span>
              <UiProgressBar
                :value="item.completion"
                size="sm"
                :aria-label="`Avance de ${item.name}`"
                :bar-class="item.completion === 100 ? 'bg-success-fixed bg-opacity-90' : 'bg-primary-fixed bg-opacity-90'"
              />
            </div>
          </template>
          <template #cell-budget="{ item }">
            <span class="tabular-numbers">{{ formatCurrency(item.budget) }}</span>
          </template>
          <template #cell-createdAt="{ item }">
            <span class="text-muted">{{ formatDate(item.createdAt) }}</span>
          </template>
          <template #cell-actions="{ item }">
            <UiButtonMenu
              :id="`actions-${item.id}`"
              variant="outline"
              size="sm"
              icon
              tooltip-text="Acciones"
              placement="bottom-end"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe5d4;" />
              </template>
              <template #menu>
                <UiButtonMenuText :item-text="item.name" />
                <UiButtonMenuItem item-text="Ver detalles" icon="&#xe8f4;" />
                <UiButtonMenuItem item-text="Editar" icon="&#xe3c9;" shortcut="Ctrl+E" />
                <UiButtonMenuSubmenu item-text="Exportar como" icon="&#xe2c4;" placement="left-start">
                  <UiButtonMenuItem item-text="PDF" />
                  <UiButtonMenuItem item-text="CSV" />
                  <UiButtonMenuItem item-text="Excel" />
                </UiButtonMenuSubmenu>
                <UiButtonMenuDivider />
                <UiButtonMenuItem item-text="Eliminar" icon="&#xe872;" is-destructive />
              </template>
            </UiButtonMenu>
          </template>
        </UiDatatable>
      </template>
    </UiCard>

    <!-- Cards view -->
    <div v-else class="row">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="col-12 col-sm-6 col-lg-4 mb-3"
      >
        <UiCard
          variant="outline"
          size="sm"
          selectable
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="d-inline-flex align-items-center gap-2 fw-700">
                <UiAvatar
                  :initials="project.name.charAt(0)"
                  size="sm"
                  mask-shape="pill"
                  class="bg-secondary-fixed"
                />
                {{ project.name }}
              </span>
              <UiBadge
                :text="statusMeta[project.status]?.label ?? ''"
                :variant="statusMeta[project.status]?.variant ?? ''"
                size="sm"
              />
            </div>
            <p class="subtitle-2 text-muted mb-2">
              {{ project.owner }} · {{ formatCurrency(project.budget) }}
            </p>
            <UiProgressBar
              :value="project.completion"
              :text="`${project.completion}%`"
              :aria-label="`Avance de ${project.name}`"
            />
          </template>
        </UiCard>
      </div>
      <div
        v-if="filteredProjects.length === 0"
        class="col-12"
      >
        <UiEmpty
          title="No se encontraron proyectos"
          subtitle="Ajusta el filtro o el término de búsqueda."
        />
      </div>
    </div>
  </div>
</template>

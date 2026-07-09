<script setup lang="ts">
import type { IDatatableColumn, IStepItem } from '@colorffy/ui'
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

// Row selection (Datatable selectable + v-model:selected)
const selectedProjects = ref<(string | number)[]>([])

// "Nuevo proyecto" wizard (Stepper showcase)
const wizardSteps: IStepItem[] = [
  { id: 'details', label: 'Detalles', description: 'Nombre y descripción' },
  { id: 'team', label: 'Equipo', description: 'Responsable y prioridad' },
  { id: 'budget', label: 'Presupuesto', description: 'Monto y fecha límite' },
  { id: 'review', label: 'Revisar', description: 'Confirma y crea' }
]
const activeWizardStep = ref(wizardSteps[0]?.id ?? '')
const wizardForm = ref({ name: '', description: '', owner: '', priority: '', budget: '', deadline: '' })
const teamOptions = projects.map(project => project.owner)
const priorityOptions = ['Baja', 'Media', 'Alta']

/** Computed */
const filteredProjects = computed(() => {
  return projects.filter((project) => {
    const matchesStatus = statusFilter.value === 'all' || project.status === statusFilter.value
    const matchesSearch = project.name.toLowerCase().includes(search.value.toLowerCase())
    return matchesStatus && matchesSearch
  })
})
const wizardStepIndex = computed(() => wizardSteps.findIndex(step => step.id === activeWizardStep.value))
const isFirstWizardStep = computed(() => wizardStepIndex.value <= 0)
const isLastWizardStep = computed(() => wizardStepIndex.value === wizardSteps.length - 1)

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
function clearFilters() {
  search.value = ''
  statusFilter.value = 'all'
}
function goToPreviousWizardStep() {
  const prevStep = wizardSteps[wizardStepIndex.value - 1]
  if (prevStep)
    activeWizardStep.value = prevStep.id
}
function goToNextWizardStep() {
  const nextStep = wizardSteps[wizardStepIndex.value + 1]
  if (nextStep)
    activeWizardStep.value = nextStep.id
}
function createProject() {
  activeWizardStep.value = wizardSteps[0]?.id ?? ''
  wizardForm.value = { name: '', description: '', owner: '', priority: '', budget: '', deadline: '' }
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
          selectable
          v-model:selected="selectedProjects"
          sticky-header
          style="--_table-sticky-max-height: 18rem"
          column-manager
          column-manager-text="Columnas"
          column-manager-tooltip="Administrar columnas"
          :columns-toggle-tooltip="{ showAll: 'Mostrar todas', hideDefault: 'Ocultar predeterminadas' }"
          empty-state-title="No se encontraron proyectos"
          empty-state-subtitle="Ajusta el filtro o el término de búsqueda."
        >
          <template #controls>
            <span v-if="selectedProjects.length" class="subtitle-2 text-muted me-2">
              {{ selectedProjects.length }} seleccionados
            </span>
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
        >
          <template #action>
            <UiButton
              text="Limpiar filtros"
              variant="outline"
              @on-click="clearFilters"
            />
          </template>
        </UiEmpty>
      </div>
    </div>

    <!-- New project wizard (Stepper showcase) -->
    <h3 class="subtitle-1 fw-700 mb-3 mt-section">
      Asistente para crear un proyecto
    </h3>
    <UiCard variant="outline" class="card-pane">
      <template #body>
        <UiStepper
          :steps="wizardSteps"
          :active-step="activeWizardStep"
          linear
          class="mb-5"
          @update-active-step="activeWizardStep = $event"
        />

        <div v-if="activeWizardStep === 'details'">
          <h4 class="subtitle-2 fw-700 mb-3">
            Detalles del proyecto
          </h4>
          <UiInputText
            id="wizard-name"
            v-model="wizardForm.name"
            label="Nombre del proyecto"
            placeholder="Ej. Plataforma de clientes"
            class="mb-3"
          />
          <UiInputTextarea
            id="wizard-description"
            v-model="wizardForm.description"
            label="Descripción"
            placeholder="Breve resumen del objetivo del proyecto"
            :rows="3"
          />
        </div>

        <div v-else-if="activeWizardStep === 'team'">
          <h4 class="subtitle-2 fw-700 mb-3">
            Equipo asignado
          </h4>
          <UiInputSelect
            id="wizard-owner"
            v-model="wizardForm.owner"
            label="Responsable"
            :options="teamOptions"
            class="mb-3"
          />
          <UiInputRadio
            id="wizard-priority"
            v-model="wizardForm.priority"
            label="Prioridad"
            :options="priorityOptions"
          />
        </div>

        <div v-else-if="activeWizardStep === 'budget'">
          <h4 class="subtitle-2 fw-700 mb-3">
            Presupuesto y fechas
          </h4>
          <UiInputText
            id="wizard-budget"
            v-model="wizardForm.budget"
            type="number"
            label="Presupuesto estimado (USD)"
            placeholder="0"
            class="mb-3"
          />
          <UiInputText
            id="wizard-deadline"
            v-model="wizardForm.deadline"
            type="date"
            label="Fecha límite"
          />
        </div>

        <div v-else>
          <h4 class="subtitle-2 fw-700 mb-3">
            Revisar y confirmar
          </h4>
          <UiAlert
            message="Verifica los datos antes de crear el proyecto."
            type="tonal"
            variant="info"
            rounded
            class="mb-3"
          />
          <UiListGroup variant="flush" size="md" is-undecorated>
            <UiListItem title="Nombre" :text="wizardForm.name || 'Sin definir'" />
            <UiListItem title="Responsable" :text="wizardForm.owner || 'Sin asignar'" />
            <UiListItem title="Prioridad" :text="wizardForm.priority || 'Sin definir'" />
            <UiListItem
              title="Presupuesto"
              :text="wizardForm.budget ? formatCurrency(Number(wizardForm.budget)) : 'Sin definir'"
            />
          </UiListGroup>
        </div>

        <div class="d-flex justify-content-between mt-4">
          <UiButton
            text="Anterior"
            variant="outline"
            :disabled="isFirstWizardStep"
            @on-click="goToPreviousWizardStep"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe5c4;" />
            </template>
          </UiButton>
          <UiButton
            v-if="!isLastWizardStep"
            text="Siguiente"
            variant="filled"
            color="primary"
            icon-trailing
            @on-click="goToNextWizardStep"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe5c8;" />
            </template>
          </UiButton>
          <UiButton
            v-else
            text="Crear proyecto"
            variant="filled"
            color="success"
            @on-click="createProject"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiButton>
        </div>
      </template>
    </UiCard>
  </div>
</template>

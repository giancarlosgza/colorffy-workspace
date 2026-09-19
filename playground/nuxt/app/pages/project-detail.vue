<script setup lang="ts">
import type { ITimelineItem } from '@colorffy/ui'
import { computed, ref } from 'vue'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Proyecto' })

/** Data */
const router = useRouter()
const project = {
  name: 'Atlas',
  client: 'Grupo Meridian',
  progress: 82,
  budget: '$48,000',
  deadline: '14 de noviembre'
}

const activityFilter = ref<string | string[] | null>(null)
const activityFilters = [
  { id: 'deploys', text: 'Despliegues' },
  { id: 'reviews', text: 'Revisiones' },
  { id: 'billing', text: 'Pagos' }
]
const activity = [
  { id: 1, kind: 'deploys', title: 'Despliegue v2.4.0', text: 'Publicado en producción por Ana Ruiz', time: 'Hace 2 h', icon: '&#xe1b6;', variant: 'success' },
  { id: 2, kind: 'reviews', title: 'Revisión aprobada', text: 'Luis Gómez aprobó el rediseño del panel', time: 'Hace 6 h', icon: '&#xe8e8;', variant: 'primary' },
  { id: 3, kind: 'billing', title: 'Factura enviada', text: 'Octubre · $12,400', time: 'Hace 1 día', icon: '&#xe227;', variant: 'accent' },
  { id: 4, kind: 'deploys', title: 'Despliegue v2.3.9', text: 'Corrección de errores en el buscador', time: 'Hace 3 días', icon: '&#xe1b6;', variant: 'success' }
] as const

const members = [
  { id: 1, name: 'Ana Ruiz', role: 'Responsable', avatar: 'https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg', online: true },
  { id: 2, name: 'Luis Gómez', role: 'Diseño', avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg', online: true },
  { id: 3, name: 'María Paz', role: 'Front-end', avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', online: false }
]

const files = [
  { id: 1, name: 'Brief de marca.pdf', meta: '2.4 MB · hace 3 días', icon: '&#xe415;' },
  { id: 2, name: 'Prototipo v4.fig', meta: '18 MB · hace 1 semana', icon: '&#xe3f4;' },
  { id: 3, name: 'Contrato firmado.pdf', meta: '820 KB · hace 1 mes', icon: '&#xe873;' }
]

const isPublishing = ref(false)

/** Computed */
const filteredActivity = computed(() => {
  if (!activityFilter.value)
    return activity

  return activity.filter(item => item.kind === activityFilter.value)
})
const activityItems = computed<ITimelineItem[]>(() => filteredActivity.value.map(item => ({
  id: String(item.id),
  title: item.title,
  text: item.text,
  time: item.time,
  icon: item.icon,
  variant: item.variant
})))

/** Methods */
function goBack() {
  router.push('/projects')
}
function publish() {
  isPublishing.value = true
  setTimeout(() => {
    isPublishing.value = false
  }, 1600)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Page header -->
    <UiHeaderContent
      headline="Proyecto activo"
      :title="project.name"
      :subtitle="`Cliente: ${project.client} · Entrega ${project.deadline}`"
      size="lg"
      view-transition-name="page-title"
      back-button
      back-button-label="Volver a proyectos"
      @back="goBack"
    >
      <template #actions>
        <UiButtonGroup connected>
          <UiButton
            text="Compartir"
            variant="outline"
            size="sm"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe80d;" />
            </template>
          </UiButton>
          <UiButton
            text="Publicar"
            variant="filled"
            color="primary"
            size="sm"
            :loading="isPublishing"
            @on-click="publish"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe2c3;" />
            </template>
          </UiButton>
        </UiButtonGroup>
      </template>
    </UiHeaderContent>

    <div class="row mt-section">
      <div class="col-lg-8">
        <UiCard
          variant="outline"
          class="card-pane mb-3"
        >
          <template #body>
            <UiHeaderContent
              as="h2"
              heading-id="overview-heading"
              title="Resumen"
              subtitle="Avance general del proyecto y presupuesto consumido"
            >
              <template #actions>
                <UiButton
                  text="Exportar"
                  variant="outline"
                  size="sm"
                >
                  <template #icon>
                    <UiIconMaterial icon-code="&#xf090;" />
                  </template>
                </UiButton>
              </template>
            </UiHeaderContent>

            <section aria-labelledby="overview-heading">
              <UiSubheadingContent
                title="Estado actual"
                subtitle="Avance calculado sobre las tareas cerradas del sprint."
                as="h3"
                gutter="md"
              />
              <UiProgressBar
                :value="project.progress"
                :text="`${project.progress}%`"
                aria-label="Avance del proyecto"
                class="mb-3"
              />
              <div class="d-flex flex-wrap gap-3">
                <div>
                  <p class="subtitle-2 text-muted mb-1">
                    Presupuesto
                  </p>
                  <p class="subtitle-1 fw-700 mb-0">
                    {{ project.budget }}
                  </p>
                </div>
                <div>
                  <p class="subtitle-2 text-muted mb-1">
                    Entrega
                  </p>
                  <p class="subtitle-1 fw-700 mb-0">
                    {{ project.deadline }}
                  </p>
                </div>
              </div>
            </section>
          </template>
        </UiCard>

        <UiCard
          variant="outline"
          class="card-pane"
        >
          <template #body>
            <UiHeaderContent
              as="h2"
              title="Actividad"
              subtitle="Movimientos recientes del equipo"
              container-class="bg-accent-fixed bg-opacity-20 p-3 rounded-xl mb-3"
            >
              <template #actions>
                <UiChipGroup
                  v-model="activityFilter"
                  :options="activityFilters"
                  variant="elevated"
                  color="secondary"
                  aria-label="Filtrar actividad"
                />
              </template>
            </UiHeaderContent>

            <UiTimeline
              :items="activityItems"
              align="start"
            />
          </template>
        </UiCard>
      </div>

      <div class="col-lg-4">
        <!-- Narrow column: actions drop out -->
        <UiCard
          variant="outline"
          class="card-pane mb-3"
        >
          <template #body>
            <UiHeaderContent
              as="h2"
              title="Equipo"
              subtitle="3 personas asignadas"
              hide-actions-when-narrow
            >
              <template #actions>
                <UiButton
                  text="Invitar"
                  variant="outline"
                  size="sm"
                />
              </template>
            </UiHeaderContent>

            <UiListGroup
              variant="flush"
              size="sm"
            >
              <UiListItem
                v-for="member in members"
                :key="member.id"
                :title="member.name"
                :text="member.role"
                :to="member.id === 1 ? '/account' : undefined"
                :as="NuxtLink"
              >
                <template #media>
                  <span class="position-relative d-inline-block">
                    <UiAvatar
                      size="navbar"
                      :src="member.avatar"
                      :alt="`Foto de ${member.name}`"
                      mask-shape="cookie-9"
                      mask-stretch
                    />
                    <UiBadge
                      v-if="member.online"
                      dot
                      variant="success"
                      attached
                      aria-label="En línea"
                    />
                  </span>
                </template>
              </UiListItem>
            </UiListGroup>
          </template>
        </UiCard>

        <UiCard
          variant="outline"
          class="card-pane"
        >
          <template #body>
            <UiHeaderContent
              as="h2"
              title="Archivos"
            />

            <UiListGroup
              variant="flush"
              size="sm"
            >
              <UiListItem
                v-for="file in files"
                :key="file.id"
                :title="file.name"
                :text="file.meta"
                :icon="file.icon"
                custom-icon-wrapper-class="bg-secondary-fixed bg-opacity-20"
              />
            </UiListGroup>
          </template>
        </UiCard>
      </div>
    </div>
  </div>
</template>

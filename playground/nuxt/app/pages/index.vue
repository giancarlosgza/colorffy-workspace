<script setup lang="ts">
// Global Component Registration
import type { UiAlertToast, UiConfirmModal, UiModal } from '@colorffy/ui'

/** Data */
const sidebarCollapse = useState<boolean>('sidebarCollapse')

const colorMode = useColorMode()
const toastRef = ref<InstanceType<typeof UiAlertToast> | null>(null)
const dialogRef = ref<InstanceType<typeof UiModal> | null>(null)
const dialogSideSheetRef = ref<InstanceType<typeof UiModal> | null>(null)
const confirmModalRef = ref<InstanceType<typeof UiConfirmModal> | null>(null)
const rangeValue = ref<number>(50)

const datatableColumns = [
  { key: 'id', label: 'ID', hidden: true },
  { key: 'nombre', label: 'Nombre' },
  { key: 'descripcion', label: 'Descripción' },
  { key: 'estado', label: 'Estado' },
  { key: 'solicitudes', label: 'Solicitudes', align: 'end' as const },
  { key: 'creado', label: 'Fecha De Creación', align: 'end' as const },
  { key: 'acciones', label: 'Acciones', sortable: false }
]
const datatableItems = [
  { id: 1, nombre: 'Proyecto Atlas', descripcion: 'Sistema de monitoreo geoespacial.', estado: 'Activo', solicitudes: 234, creado: '2025-10-01' },
  { id: 2, nombre: 'Proyecto Nébula', descripcion: 'Pipeline de datos en tiempo real.', estado: 'Pendiente', solicitudes: 567, creado: '2025-10-03' },
  { id: 3, nombre: 'Proyecto Aurora', descripcion: 'Portal de visualización de métricas.', estado: 'Activo', solicitudes: 891, creado: '2025-10-05' },
  { id: 4, nombre: 'Proyecto Horizonte', descripcion: 'API pública para integración externa.', estado: 'Inactivo', solicitudes: 5123, creado: '2025-10-07' },
  { id: 5, nombre: 'Proyecto Vertex', descripcion: 'Motor de recomendaciones personalizadas.', estado: 'Activo', solicitudes: 1456, creado: '2025-10-10' },
  { id: 6, nombre: 'Proyecto Ícaro', descripcion: 'Servicio de autenticación y OAuth.', estado: 'Activo', solicitudes: 789, creado: '2025-10-12' },
  { id: 7, nombre: 'Proyecto Océano', descripcion: 'Archivador de documentos históricos.', estado: 'Archivado', solicitudes: 345, creado: '2025-10-14' },
  { id: 8, nombre: 'Proyecto Quántico', descripcion: 'Módulo de cálculo distribuido.', estado: 'Pendiente', solicitudes: 2678, creado: '2025-10-16' },
  { id: 9, nombre: 'Proyecto Eclipse', descripcion: 'Programador de tareas y jobs.', estado: 'Activo', solicitudes: 912, creado: '2025-10-18' },
  { id: 10, nombre: 'Proyecto Brisa', descripcion: 'Servicio de notificaciones multicanal.', estado: 'Inactivo', solicitudes: 2145, creado: '2025-10-20' },
  { id: 11, nombre: 'Proyecto Orion', descripcion: 'Design System con componentes y CSS para las plataformas', estado: 'Activo', solicitudes: 1345, creado: '2025-10-22' }
]

/** Methods */
function showToast() {
  if (!toastRef.value)
    return

  toastRef.value.title = 'Hello!'
  toastRef.value.message = 'This is a toast message triggered by clicking the Primary Button.'
  toastRef.value.variant = 'warning'
  toastRef.value?.showToast()
}
function showDialog() {
  if (!dialogRef.value)
    return

  dialogRef.value?.showDialog()
}
function closeDialog() {
  if (!dialogRef.value)
    return

  dialogRef.value?.closeDialog()
}
function showConfirmModal() {
  if (!confirmModalRef.value)
    return
  confirmModalRef.value?.showDialog()
}
function handleConfirm() {
  console.log('Confirmed!')
  confirmModalRef.value?.closeDialog()
}
</script>

<template>
  <div>
    <div class="container mt-3">
      <!-- Header -->
      <UiHeaderContent
        title="Welcome to Nuxt Colorffy UI"
        subtitle="A beautiful and customizable UI component library for Nuxt"
      />

      <!-- Content -->
      <div class="row">
        <div class="col-md-12">
          <UiCard
            variant="pane" size="sm"
            class="bg-bordered-gradient rounded-lg mb-3"
          >
            <template #body>
              <UiListGroup variant="flush" size="lg">
                <UiListItem text="List Item 1" icon="&#xe88a;" />
              </UiListGroup>
            </template>
          </UiCard>
        </div>
        <div class="col-md-12">
          <UiCard
            variant="pane"
            class="border border-gradient-corners bg-frosted border-muted rounded-lg p-3 mb-3"
          >
            <template #body>
              <h4 class="fs-600 mb-0">
                Bordered Gradient Corners
              </h4>
            </template>
          </UiCard>
        </div>
        <div class="col-md-12">
          <UiCard variant="pane">
            <template #header>
              <div class="d-flex gap-3">
                <UiButton
                  variant="filled"
                  text="Toggle Sidebar" @on-click="sidebarCollapse = !sidebarCollapse"
                />
                <NuxtLink class="btn btn-link" to="/about">
                  Go to About Page
                </NuxtLink>
                <UiButton
                  variant="filled"
                  color="secondary"
                  text="Toggle Popover"
                  popovertarget="popover-demo"
                  style="anchor-name: --demo-anchor"
                />
              </div>
            </template>
            <template #body>
              <h2 class="fs-400 fw-800">
                Testing <span class="text-gradient gradient-primary">Components</span>
              </h2>
              <p class="subtitle-1 text-muted mb-0">
                This is a test of your colorffy-ui library!
              </p>
              <div
                class="bg-success-fixed bg-opacity-20 border border-xxl border-inline border-success rounded-md p-2 mt-3"
              >
                <p class="text-success-high-contrast fw-800 mb-0">
                  Text Green
                </p>
              </div>
              <div
                class="bg-danger-fixed border border-lg border-left border-danger bg-opacity-20 rounded-md p-2 mt-2"
              >
                <p class="text-danger-high-contrast fw-800 mb-0">
                  Text Red
                </p>
              </div>

              <hr>

              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="bum"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="arch"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="pill"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="sunny"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="gem"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="clover-4"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="clover-8"
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="cookie-6" mask-stretch
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="cookie-9" mask-stretch
              />
              <UiAvatar
                src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                mask-shape="cookie-12" mask-stretch
              />

              <hr>
              <div class="d-flex flex-wrap gap-3">
                <UiIconApp brand="apple" size="md" />
                <UiIconApp brand="google" size="md" />
                <UiIconApp brand="facebook" size="md" />
                <UiIconApp brand="instagram" size="md" />
                <UiIconApp brand="discord" size="md" />
                <UiIconApp brand="nuxt" size="md" />
              </div>

              <hr>
              <div class="d-flex flex-wrap gap-3">
                <UiIconTool tool="Search Console" />
                <UiIconTool tool="Google Analytics" />
                <UiIconTool tool="Google Ads" />
                <UiIconTool tool="Firebase Console" />
                <UiIconTool tool="Plausible Analytics" />
              </div>

              <hr>
              <div class="d-flex flex-wrap gap-3">
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-primary icon-wrap-bordered" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-secondary icon-wrap-bordered" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-accent" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-success" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-warning icon-wrap-bordered" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-danger" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-outline" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-surface icon-wrap-bordered" />
                <UiIconMaterial icon-code="&#xe000;" class="icon-wrap icon-wrap-gradient gradient-secondary angle-90" />
              </div>
              <hr>
              <div class="d-flex flex-wrap gap-3">
                <UiIconMaterial icon-code="&#xe71c;" class="icon-wrap icon-wrap-primary icon-wrap-lg" />
                <UiIconMaterial icon-code="&#xe3b8;" class="icon-wrap icon-wrap-primary" />
                <UiIconMaterial icon-code="&#xe14e;" class="icon-wrap icon-wrap-success icon-wrap-sm icon-wrap-bordered" />
                <UiIconMaterial icon-code="&#xe23c;" class="icon-wrap icon-wrap-danger icon-wrap-xs icon-wrap-bordered" />
              </div>
            </template>
          </UiCard>

          <UiPopover
            id="popover-demo"
            anchor-name="--demo-anchor"
            position-block="top"
            position-inline="left"
            size="lg"
          >
            <template #header>
              <p class="popover-title">
                Filtros
              </p>
              <p class="popover-subtitle">
                Filtra por color, esquema, orden y categoría
              </p>
            </template>
            <template #body>
              <UiInputText
                id="search-popover"
                label="Search"
                placeholder="Search..."
              />
              <UiInputText
                id="search-popover-2"
                label="Name"
                placeholder="Name..."
              />
              <hr>
              <UiInputCheck
                id="featured-check"
                label="Featured"
              />
              <UiInputCheck
                id="featured-check-3"
                label="Featured 3"
              />
            </template>
            <template #footer>
              <UiButton
                variant="filled"
                text="Apply filters"
                class="btn-block"
              />
            </template>
          </UiPopover>
        </div>
      </div>
      <hr>

      <UiButtonGroup class="mt-section">
        <UiButton variant="filled" text="Primary Button" rounded @on-click="showToast" />
        <UiButton variant="filled" color="secondary" text="Secondary Button" />
        <UiButton variant="filled" color="accent" text="Accent Button" />

        <UiButton variant="filled" color="success" text="Success Button" />
        <UiButton variant="filled" color="warning" text="Warning Button" />
        <UiButton variant="filled" color="danger" text="Danger Button">
          <template #icon>
            <UiIconMaterial icon-code="&#xe000;" />
          </template>
        </UiButton>

        <UiButtonTooltip variant="default" text="Tooltip Button" tooltip-text="This is a tooltip example!">
          <template #icon>
            <UiIconMaterial icon-code="&#xe000;" />
          </template>
        </UiButtonTooltip>
      </UiButtonGroup>
      <UiButtonGroup connected joined class="mt-section">
        <UiButton variant="tonal" color="primary" text="Tonal Primary Button" @on-click="showDialog" />
        <UiButton variant="tonal" color="secondary" text="Tonal Secondary Button" @on-click="dialogSideSheetRef?.showDialog()" />
        <UiButtonTooltip variant="tonal" color="accent" text="Tonal Accent Button" tooltip-text="Example" />

        <UiButton variant="tonal" color="success" text="Tonal Success Button" />
        <UiButton variant="tonal" color="warning" text="Tonal Warning Button" />
        <UiButtonTooltip variant="tonal" color="danger" text="Tonal Danger Button" tooltip-text="Example" />
      </UiButtonGroup>

      <div class="row mt-section">
        <div class="col-md-6 d-flex gap-3">
          <UiButtonGroup connected vertical>
            <UiButtonTooltip
              variant="tonal" color="accent" icon
              tooltip-text="SUM"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe145;" />
              </template>
            </UiButtonTooltip>
            <UiButtonTooltip
              variant="tonal" color="accent" icon
              tooltip-text="MULTIPLY"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xf77b;" />
              </template>
            </UiButtonTooltip>
            <UiButtonTooltip
              variant="tonal" color="accent" icon
              tooltip-text="SUBTRACT"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe15b;" />
              </template>
            </UiButtonTooltip>
          </UiButtonGroup>
          <UiButtonGroup connected vertical>
            <UiButton variant="tonal" color="success" icon>
              <template #icon>
                <UiIconMaterial icon-code="&#xe145;" />
              </template>
            </UiButton>
            <UiButton variant="tonal" color="primary" icon>
              <template #icon>
                <UiIconMaterial icon-code="&#xf77b;" />
              </template>
            </UiButton>
            <UiButton variant="tonal" color="danger" icon>
              <template #icon>
                <UiIconMaterial icon-code="&#xe15b;" />
              </template>
            </UiButton>
          </UiButtonGroup>
        </div>
        <div class="col-md-6">
          <UiButtonGroup connected>
            <UiButton variant="tonal" color="danger" text="Archive" />
            <UiButton variant="tonal" color="danger" text="Report">
              <template #icon>
                <UiIconMaterial icon-code="&#xe160;" />
              </template>
            </UiButton>
            <UiButton variant="tonal" color="danger" text="Snooze" />
          </UiButtonGroup>
        </div>
      </div>
      <hr>

      <UiButtonGroup class="mt-section">
        <UiButtonMenu
          id="demo"
          variant="outline"
          text="Menu Button"
          icon-trailing
          :is-mobile="true"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe5c5;" />
          </template>
          <template #menu>
            <UiButtonMenuText item-text="My account" />
            <UiButtonMenuItem item-text="Profile" icon="&#xe853;" />
            <UiButtonMenuItem
              item-text="Billing" icon="&#xf041;"
              :badge="{ text: 'Issue', variant: 'tonal tonal-danger' }"
            />
            <UiButtonMenuItem
              item-text="Settings" icon="&#xe8b8;" shortcut="⌘ + P"
              :badge="{ text: '1', pill: true, variant: 'danger' }"
            />
            <UiButtonMenuDivider />
            <UiButtonMenuText item-text="Resources" />
            <UiButtonMenuItem item-text="Github" />
            <UiButtonMenuItem
              item-text="Support"
              :badge="{ text: 'NEW', variant: 'gradient', customClass: 'gradient-accent' }"
            />
            <UiButtonMenuItem item-text="API" disabled />
            <UiButtonMenuDivider />
            <UiButtonMenuItem item-text="Log Out" icon="&#xe9ba;" is-destructive />
          </template>
        </UiButtonMenu>
        <UiButton variant="chip" text="Chip Button" />
        <UiButton variant="outline" text="Small Button" size="sm" />
        <UiButton variant="outline" text="Large Button" size="lg" />
        <UiButton
          variant="outline"
          text="CTA Button"
          size="lg"
          class="btn-cta btn-gradient gradient-secondary text-white"
          @on-click="showConfirmModal"
        />
        <UiButton variant="gradient" text="Gradient Button" size="lg" class="btn-cta" />
      </UiButtonGroup>
      <hr>

      <UiBadgeGroup class="mt-section">
        <UiBadge variant="primary" text="Primary" />
        <UiBadge variant="secondary" text="Secondary" />
        <UiBadge variant="accent" text="Accent" />
        <UiBadge variant="success" text="Success" />
        <UiBadge variant="warning" text="Warning" />
        <UiBadge variant="danger" text="Danger" />
        <UiBadge variant="outline" text="Outline" icon-code="&#xe061;" icon-class="text-danger-fixed" />
        <UiBadge variant="default" text="Default" />
        <UiBadge variant="neutral" text="Neutral" />
      </UiBadgeGroup>
      <UiBadgeGroup class="mt-section">
        <UiBadge variant="tonal tonal-primary" text="Tonal Primary" />
        <UiBadge
          variant="tonal tonal-secondary" text="Tonal Secondary"
        />
        <UiBadge variant="tonal tonal-accent" text="Tonal Accent" />
        <UiBadge variant="tonal tonal-success" text="Tonal Success" />
        <UiBadge variant="tonal tonal-warning" text="Tonal Warning" />
        <UiBadge variant="tonal tonal-danger" text="Tonal Danger" />
      </UiBadgeGroup>
      <hr>

      <div class="row mt-section mt-section-lg">
        <div class="col-md-6">
          <UiPaneContent>
            <UiAccordionGroup is-transparent>
              <UiAccordion title="Accordion Demo" name="demo">
                <template #content>
                  <p>This is the content for Accordion Item 1.</p>
                </template>
              </UiAccordion>
              <UiAccordion title="Another Accordion" name="demo">
                <template #content>
                  <p>This is the content for Accordion Item 2.</p>
                </template>
              </UiAccordion>
            </UiAccordionGroup>
          </UiPaneContent>
        </div>
        <div class="col-md-6">
          <UiCard variant="outline" class="bg-gradient gradient-primary" style="--gradient-angle: 45deg;">
            <template #body>
              <p class="subtitle-1 font-primary fw-800 text-dark mb-0">
                This is a sample card component to demonstrate the usage of UiCard in Colorffy UI.
              </p>
            </template>
          </UiCard>
          <UiCard
            variant="outline" class="border border-xl border-gradient gradient-secondary mt-3"
            style="--gradient-angle: 45deg;"
          >
            <template #body>
              <p class="subtitle-1 mb-0">
                This is a sample card component to demonstrate the usage of UiCard in Colorffy UI.
              </p>
            </template>
          </UiCard>
        </div>
      </div>

      <div class="row mt-section mb-3">
        <div class="col-md-12">
          <UiCard variant="outline" class="card-pane">
            <template #body>
              <div>
                <UiDatatable
                  :columns="datatableColumns"
                  :items="datatableItems"
                  table-class="table-bordered scroll-fade-inline-effect"
                  column-manager
                  column-manager-text="Columnas"
                  column-manager-tooltip="Organizar columnas"
                  :columns-toggle-tooltip="{ showAll: 'Mostrar todas las columnas', hideDefault: 'Ocultar columnas' }"
                  empty-state-title="No se encontraron proyectos."
                  empty-state-subtitle="Intenta ajustar tus filtros o agregar nuevos proyectos."
                >
                  <template #controls>
                    <div class="d-flex align-items-center gap-3">
                      <UiInputText
                        id="search"
                        placeholder="Search..."
                      />
                      <UiButton
                        variant="outline"
                        size="sm" icon
                        icon-variant="shape-sm"
                      >
                        <template #icon>
                          <UiIconMaterial icon-code="&#xe2c4;" />
                        </template>
                      </UiButton>
                    </div>
                  </template>
                  <template #cell-nombre="{ item }">
                    <span class="fw-500">
                      <UiAvatar
                        :initials="item.nombre.charAt(0) + item.nombre.charAt(9)"
                        mask-shape="pill" mask-stretch
                        class="bg-secondary-fixed"
                      />
                      {{ item.nombre }}
                    </span>
                  </template>
                  <template #cell-descripcion="{ item }">
                    <span class="text-muted">
                      {{ item.descripcion }}
                    </span>
                  </template>
                  <template #cell-estado="{ item }">
                    <UiBadge
                      variant="outline"
                      :text="item.estado"
                      icon-code="&#xe061;"
                      :icon-class="
                        item.estado === 'Activo' ? 'text-success-fixed'
                        : item.estado === 'Pendiente' ? 'text-warning-fixed'
                          : item.estado === 'Inactivo' ? 'text-danger-fixed'
                            : item.estado === 'Archivado' ? 'text-muted' : 'text-muted'"
                      size="sm"
                    />
                  </template>
                  <template #cell-solicitudes="{ item }">
                    <div class="d-grid gap-1">
                      <div class="text-muted text-end tabular-numbers">
                        {{ item.solicitudes }}
                      </div>
                      <UiProgressBar
                        :value="(item.solicitudes % 1000) / 10"
                        size="sm"
                        :aria-valuemin="0"
                        :aria-valuemax="100"
                        :bar-class="
                          item.solicitudes < 1000 ? 'bg-success-fixed bg-opacity-90'
                          : item.solicitudes >= 1000 && item.solicitudes < 2000 ? 'bg-warning-fixed bg-opacity-90'
                            : 'bg-danger-fixed bg-opacity-90'"
                      />
                    </div>
                  </template>
                  <template #cell-creado="{ item }">
                    <span class="text-muted text-end d-block">
                      {{ new Date(item.creado).toLocaleDateString('es-ES', { year: 'numeric', month: 'short', day: '2-digit' }) }}
                    </span>
                  </template>
                  <template #cell-acciones="{ item }">
                    <UiButtonMenu
                      :id="`actions-menu-${item.id}`"
                      variant="outline"
                      size="sm"
                      text="Acciones"
                      tooltip-text="Ver acciones"
                      icon-trailing
                    >
                      <template #icon>
                        <UiIconMaterial icon-code="&#xe5c5;" />
                      </template>
                      <template #menu>
                        <UiButtonMenuText :item-text="item.nombre" />
                        <UiButtonMenuItem icon="&#xe89e;" item-text="Ver detalles" />
                        <UiButtonMenuItem
                          icon="&#xe7f4;"
                          item-text="Alertas"
                          :badge="{ text: '10', variant: 'danger', size: 'sm', pill: true }"
                        />
                        <UiButtonMenuItem icon="&#xe3c9;" item-text="Editar" />
                        <UiButtonMenuDivider />
                        <UiButtonMenuItem icon="&#xe872;" item-text="Eliminar" is-destructive />
                      </template>
                    </UiButtonMenu>
                  </template>
                </UiDatatable>
              </div>
            </template>
          </UiCard>
        </div>
      </div>

      <UiButtonFabGroup>
        <UiButton variant="tonal" color="primary" class="btn-fab" text="Add" @on-click="showDialog">
          <template #icon>
            <UiIconMaterial icon-code="&#xe145;" />
          </template>
        </UiButton>
        <UiButton variant="tonal" color="warning" class="btn-fab">
          <template #icon>
            <UiIconMaterial icon-code="&#xe0b0;" />
          </template>
        </UiButton>
      </UiButtonFabGroup>

      <UiAlert
        message="Your library is working correctly!"
        type="snackbar"
        variant="success"
      />

      <UiAlertToast ref="toastRef" />
      <UiModal
        ref="dialogRef"
        mode="headless"
        size="sm"
        class="dialog-backdrop-blur"
      >
        <template #header>
          <UiIconMaterial icon-code="&#xe838;" />
          <div>
            <p class="dialog-title">
              Modal Title Demo
            </p>
            <p class="dialog-subtitle">
              This is a subtitle for the modal dialog.
            </p>
          </div>
        </template>
        <template #body>
          <UiAlert message="This is an alert inside the modal dialog!" type="tonal" variant="accent" />
          <hr class="mt-1">
          <UiInputSelect
            id="theme" v-model="colorMode.preference" label="Theme Mode" option-label="label"
            rounded variant="filled"
            option-value="value" :options="[
              {
                label: 'Light',
                value: 'light',
              },
              {
                label: 'Dark',
                value: 'dark',
              },
            ]"
          />
          <UiInputText
            id="input-sample"
            label="Sample Input" placeholder="Enter some text..." class="mb-3"
            variant="outline"
          />
          <UiInputText
            id="input-sample-2"
            label="Sample Input" placeholder="Enter some text..." class="mb-3"
            variant="outline"
          />
          <UiInputText
            id="input-sample-3"
            label="Sample Input" placeholder="Enter some text..." class="mb-3"
            variant="filled"
          />
          <UiInputRange
            id="range-sample"
            v-model="rangeValue"
            variant="transparent"
            :label="`Sample Range: ${rangeValue}`"
            :min="0" :max="100" :step="10"
          />
          <p class="subtitle-1 fw-500">
            This is the content of the modal dialog.
          </p>
          <p class="subtitle-2 text-muted">
            Additional content can go here.
          </p>
        </template>
        <template #footer>
          <UiButton
            variant="text"
            text="Close"
            @on-click="closeDialog"
          />
        </template>
      </UiModal>

      <UiModal
        ref="dialogSideSheetRef"
        mode="side-sheet"
        :show-as-modal="false"
        :close-on-click-outside="false"
      >
        <template #header>
          <div>
            <p
              id="filters-dialog-title"
              class="dialog-title"
            >
              Filters
            </p>
            <p
              id="filters-dialog-description"
              class="dialog-subtitle"
            >
              Filter options for browsing content by color, scheme, sort order, and category
            </p>
          </div>
          <UiButton
            variant="outline"
            title="Close filters dialog"
            aria-label="Close filters dialog"
            icon
            @on-click="dialogSideSheetRef?.closeDialog()"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe5cd;" />
            </template>
          </UiButton>
        </template>
        <template #body>
          <UiInputRange
            id="range-sample-2"
            v-model="rangeValue"
            variant="transparent"
            :label="`Sample Range: ${rangeValue}`"
            :min="0" :max="100" :step="10"
          />
        </template>
        <template #footer>
          <UiButton
            variant="text"
            text="Close"
            @on-click="dialogSideSheetRef?.closeDialog()"
          />
        </template>
      </UiModal>

      <!-- Confirm Modal -->
      <UiConfirmModal
        ref="confirmModalRef"
        title="Remove Admin Privileges to the user Giancarlos?"
        message="This action cannot be undone. Are you sure you want to proceed with this action?"
        confirm-label="Confirmar"
        cancel-label="Cancelar"
        variant="danger"
        @confirm="handleConfirm"
      />
    </div>
  </div>
</template>

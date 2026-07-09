<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({ pageTitle: 'Configuración' })

/** Data */
// Settings categories switched via the segmented control (with panels)
const sectionTabs = ref([
  { id: 'general', label: 'General', position: 0, panelId: 'panel-general' },
  { id: 'notifications', label: 'Notificaciones', position: 1, panelId: 'panel-notifications' },
  { id: 'system', label: 'Sistema', position: 2, panelId: 'panel-system' }
])
const activeSection = ref('general')

// Toggle state
const darkMode = ref(false)
const reduceMotion = ref(false)
const notifEmail = ref(true)
const notifPush = ref(true)
const notifSms = ref(false)
const weeklyDigest = ref(true)

const isSaving = ref(false)

/** Methods */
function changeSection(sectionId: string) {
  activeSection.value = sectionId
}
function save() {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
  }, 1400)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Header -->
    <UiHeaderContent
      title="Configuración"
      subtitle="Administra las preferencias de tu cuenta y del sistema"
      actions
      :hide-actions-on-mobile="false"
    >
      <template #actions>
        <UiButton
          text="Guardar"
          variant="filled"
          color="success"
          :loading="isSaving"
          @on-click="save"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe161;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <!-- Section switcher -->
    <div class="mt-section mb-4">
      <UiSegmentedControls
        :tabs="sectionTabs"
        :active-tab="activeSection"
        @update-active-tab="changeSection"
      />
    </div>

    <!-- General -->
    <div
      v-show="activeSection === 'general'"
      id="panel-general"
      role="tabpanel"
      aria-labelledby="tab-general"
      tabindex="0"
    >
      <h3 class="subtitle-1 fw-700 mb-3">
        Cuenta
      </h3>
      <UiCard
        variant="outline"
        size="sm"
        class="card-pane mb-4"
      >
        <template #body>
          <UiListGroup
            is-interactive
            variant="flush"
            size="md"
          >
            <UiListItem
              title="Perfil"
              text="Nombre, foto e información pública"
              image-url="https://i.pravatar.cc/88?img=12"
              image-alt="Foto de perfil de Giancarlos"
              has-actions
            >
              <template #list-action>
                <span class="subtitle-2 text-muted d-inline-flex align-items-center gap-2 me-4">
                  Giancarlos
                </span>
              </template>
            </UiListItem>
            <UiListItem
              title="Correo electrónico"
              text="Dirección usada para iniciar sesión"
              icon="&#xe0be;"
              custom-icon-wrapper-class="bg-accent-fixed rounded-full"
              custom-icon-class="text-accent-emphasis"
              has-actions
            >
              <template #list-action>
                <span class="d-inline-flex align-items-center gap-2 me-4">
                  <UiBadge
                    text="Verificado"
                    variant="tonal tonal-success"
                    size="sm" icon-code="&#xe8e8;"
                  />
                </span>
              </template>
            </UiListItem>
            <UiListItem
              title="Idioma y región"
              text="Idioma de la interfaz y formato regional"
              icon="&#xe8e2;"
              custom-icon-wrapper-class="bg-secondary-fixed rounded-full"
              custom-icon-class="text-secondary-emphasis"
              has-actions
            >
              <template #list-action>
                <span class="subtitle-2 text-muted d-inline-flex align-items-center gap-2 me-4">
                  Español
                </span>
              </template>
            </UiListItem>
          </UiListGroup>
        </template>
      </UiCard>

      <h3 class="subtitle-1 fw-700 mb-3">
        Apariencia
      </h3>
      <UiCard
        variant="outline"
        size="sm"
        class="card-pane"
      >
        <template #body>
          <UiListGroup is-interactive is-undecorated variant="flush" size="md">
            <UiListItem
              title="Modo oscuro"
              text="Usa el tema oscuro en toda la aplicación"
              icon="&#xe51c;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <UiInputCheck
                  id="dark-mode"
                  v-model="darkMode"
                  label="Modo oscuro"
                  variant="switch"
                  size="lg"
                  hide-label
                  class="gap-0 mb-0"
                />
              </template>
            </UiListItem>
            <UiListItem
              title="Reducir movimiento"
              text="Minimiza animaciones y transiciones"
              icon="&#xe9e4;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <UiInputCheck
                  id="reduce-motion"
                  v-model="reduceMotion"
                  label="Reducir movimiento"
                  variant="switch"
                  size="lg"
                  hide-label
                  class="gap-0 mb-0"
                />
              </template>
            </UiListItem>
          </UiListGroup>
        </template>
      </UiCard>
    </div>

    <!-- Notifications -->
    <div
      v-show="activeSection === 'notifications'"
      id="panel-notifications"
      role="tabpanel"
      aria-labelledby="tab-notifications"
      tabindex="0"
    >
      <h3 class="subtitle-1 fw-700 mb-3">
        Canales de notificación
      </h3>
      <UiCard
        variant="outline"
        size="sm"
        class="card-pane"
      >
        <template #body>
          <UiListGroup is-interactive is-undecorated variant="flush" size="md">
            <UiListItem
              title="Correo electrónico"
              text="Recibe alertas en tu bandeja de entrada"
              icon="&#xe0be;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <UiInputCheck
                  id="n-email"
                  v-model="notifEmail"
                  label="Correo"
                  variant="switch"
                  size="lg"
                  hide-label
                  class="gap-0 mb-0"
                />
              </template>
            </UiListItem>
            <UiListItem
              title="Notificaciones push"
              text="Avisos en tiempo real en tus dispositivos"
              icon="&#xe7f4;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <UiInputCheck
                  id="n-push"
                  v-model="notifPush"
                  label="Push"
                  variant="switch"
                  size="lg"
                  hide-label
                  class="gap-0 mb-0"
                />
              </template>
            </UiListItem>
            <UiListItem
              title="SMS"
              text="Mensajes de texto para eventos críticos"
              icon="&#xe0b7;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <UiInputCheck
                  id="n-sms"
                  v-model="notifSms"
                  label="SMS"
                  variant="switch"
                  size="lg"
                  hide-label
                  class="gap-0 mb-0"
                />
              </template>
            </UiListItem>
            <UiListItem
              title="Resumen semanal"
              text="Un correo cada lunes con la actividad"
              icon="&#xe8f0;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
              has-actions
            >
              <template #list-action>
                <span class="d-inline-flex align-items-center gap-2">
                  <UiBadge
                    text="Nuevo"
                    variant="tonal tonal-accent"
                    size="sm"
                  />
                  <UiInputCheck
                    id="n-digest"
                    v-model="weeklyDigest"
                    label="Resumen"
                    variant="switch"
                    size="lg"
                    hide-label
                    class="gap-0 mb-0"
                  />
                </span>
              </template>
            </UiListItem>
          </UiListGroup>
        </template>
      </UiCard>
    </div>

    <!-- System -->
    <div
      v-show="activeSection === 'system'"
      id="panel-system"
      role="tabpanel"
      aria-labelledby="tab-system"
      tabindex="0"
    >
      <h3 class="subtitle-1 fw-700 mb-3">
        Información del sistema
      </h3>
      <UiCard
        variant="outline"
        size="sm"
        class="card-pane"
      >
        <template #body>
          <UiAlert
            message="Tu sistema está actualizado."
            type="tonal"
            variant="success"
            rounded
          />

          <UiListGroup
            is-interactive
            variant="flush"
            size="md"
            class="mt-2"
          >
            <UiListItem
              title="Actualización de software"
              text="Hay una actualización disponible"
              icon="&#xe8d7;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-success fs-300"
              has-actions
            >
              <template #list-action>
                <UiBadge
                  text="v1.7.2"
                  variant="outline"
                  size="sm"
                  class="me-4"
                  icon-code="&#xf5f4;"
                  icon-class="text-success"
                />
              </template>
            </UiListItem>
            <UiListItem
              title="Almacenamiento"
              text="Modelo, espacio, datos, etc."
              icon="&#xe1db;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="Acerca de"
              text="Versión, términos y avisos legales"
              icon="&#xe88e;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="Soporte"
              text="Contacto, garantía, ayuda"
              icon="&#xef73;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
            <UiListItem
              title="Accesibilidad"
              text="Control por voz, zoom, tamaño de texto"
              icon="&#xe84e;"
              custom-icon-wrapper-class="bg-transparent"
              custom-icon-class="text-muted"
            />
          </UiListGroup>
        </template>
      </UiCard>
    </div>
  </div>
</template>

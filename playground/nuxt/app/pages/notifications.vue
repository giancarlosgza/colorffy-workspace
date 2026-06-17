<script setup lang="ts">
import type { AlertPlacement, AlertVariant, UiAlertToast, UiConfirmModal, UiModal } from '@colorffy/ui'
import { ref } from 'vue'

definePageMeta({ pageTitle: 'Notificaciones' })

/** Data */
const toastRef = ref<InstanceType<typeof UiAlertToast> | null>(null)
const modalRef = ref<InstanceType<typeof UiModal> | null>(null)
const confirmRef = ref<InstanceType<typeof UiConfirmModal> | null>(null)
const confirmLoading = ref(false)
const taskRunning = ref(false)

const toastButtons: { variant: AlertVariant, label: string, title: string, message: string, placement: AlertPlacement }[] = [
  { variant: 'success', label: 'Éxito', title: '¡Listo!', message: 'Los cambios se guardaron correctamente.', placement: 'bottom' },
  { variant: 'warning', label: 'Aviso', title: 'Atención', message: 'Tu sesión expirará pronto.', placement: 'top' },
  { variant: 'danger', label: 'Error', title: 'Algo salió mal', message: 'No se pudo completar la solicitud.', placement: 'bottom-left' },
  { variant: 'info', label: 'Info', title: 'Novedad', message: 'Hay una nueva versión disponible.', placement: 'top-right' }
]

const inlineAlerts: { type: 'banner' | 'tonal', variant: AlertVariant, title: string, message: string }[] = [
  { type: 'banner', variant: 'primary', title: 'Sugerencia', message: 'Personaliza tu panel desde la configuración.' },
  { type: 'banner', variant: 'success', title: 'Completado', message: 'Tu copia de seguridad terminó.' },
  { type: 'tonal', variant: 'warning', title: 'Uso elevado', message: 'Has consumido el 85% de tu cuota mensual.' },
  { type: 'tonal', variant: 'info', title: 'Mantenimiento', message: 'El sistema estará en mantenimiento el domingo.' }
]

const faqs = [
  { id: 'billing', q: '¿Cómo cambio mi método de pago?', a: 'Ve a Cuenta → Facturación y selecciona "Editar método de pago".' },
  { id: 'export', q: '¿Puedo exportar mis datos?', a: 'Sí, desde cualquier tabla usa el menú de acciones para exportar a PDF, CSV o Excel.' },
  { id: 'team', q: '¿Cómo invito a mi equipo?', a: 'Desde Configuración → Miembros, ingresa los correos y envía las invitaciones.' }
]

/** Methods */
function fireToast(variant: AlertVariant, title: string, message: string, placement: AlertPlacement) {
  if (!toastRef.value)
    return
  toastRef.value.title = title
  toastRef.value.showToast({ variant, message, placement })
}
function onConfirm() {
  confirmLoading.value = true
  setTimeout(() => {
    confirmLoading.value = false
    confirmRef.value?.closeDialog()
    fireToast('success', 'Eliminado', 'El proyecto fue eliminado.', 'bottom')
  }, 1500)
}
function runTask() {
  taskRunning.value = true
  setTimeout(() => {
    taskRunning.value = false
    fireToast('success', 'Tarea completada', 'El proceso finalizó correctamente.', 'bottom')
  }, 2500)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Header -->
    <UiHeaderContent
      title="Notificaciones y feedback"
      subtitle="Alertas, toasts, diálogos y estados de progreso"
    />

    <div class="row mt-section">
      <!-- Toasts -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-1">
              Toasts
            </h4>
            <p class="subtitle-2 text-muted mb-3">
              Dispara un toast por variante y posición.
            </p>
            <UiButtonGroup connected>
              <UiButton
                v-for="btn in toastButtons"
                :key="btn.variant"
                :text="btn.label"
                variant="tonal"
                :color="btn.variant"
                size="sm"
                @on-click="fireToast(btn.variant, btn.title, btn.message, btn.placement)"
              />
            </UiButtonGroup>
          </template>
        </UiCard>
      </div>

      <!-- Dialogs -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-1">
              Diálogos
            </h4>
            <p class="subtitle-2 text-muted mb-3">
              Modal estándar y confirmación con estado de carga.
            </p>
            <div class="d-flex flex-wrap gap-2">
              <UiButton
                text="Abrir modal"
                variant="filled"
                color="primary"
                size="sm"
                @on-click="modalRef?.showDialog()"
              />
              <UiButton
                text="Confirmar eliminación"
                variant="outline"
                color="danger"
                size="sm"
                @on-click="confirmRef?.showDialog()"
              />
            </div>
          </template>
        </UiCard>
      </div>

      <!-- Inline alerts -->
      <div class="col-12 mb-3">
        <UiCard
          variant="outline"
          class="card-pane"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-3">
              Alertas en línea
            </h4>
            <UiAlert
              v-for="alert in inlineAlerts"
              :key="`${alert.type}-${alert.variant}`"
              :type="alert.type"
              :variant="alert.variant"
              :title="alert.title"
              :message="alert.message"
              class="mb-2"
            />
            <UiAlert
              type="banner"
              variant="danger"
              title="Acción crítica"
              message="Esto requiere tu atención inmediata."
              critical
              rounded
              class="mb-0"
            />
          </template>
        </UiCard>
      </div>

      <!-- Task progress (indeterminate) -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="subtitle-1 fw-700 mb-0">
                Proceso en segundo plano
              </h4>
              <UiBadge
                :text="taskRunning ? 'En curso' : 'Inactivo'"
                :variant="taskRunning ? 'tonal tonal-warning' : 'outline'"
                size="sm"
              />
            </div>
            <UiProgressBar
              v-if="taskRunning"
              :value="0"
              indeterminate
              aria-label="Procesando tarea"
              class="mb-2"
            />
            <UiProgressBar
              v-else
              :value="100"
              text="Listo"
              bar-class="bg-success-fixed bg-opacity-90"
              aria-label="Tarea inactiva"
              class="mb-4"
            />
            <UiButtonGroup class="justify-content-center">
              <UiButton
                :text="taskRunning ? 'Procesando…' : 'Ejecutar tarea'"
                variant="filled"
                color="primary"
                size="sm"
                :loading="taskRunning"
                :disabled="taskRunning"
                @on-click="runTask"
              />
            </UiButtonGroup>
          </template>
        </UiCard>
      </div>

      <!-- FAQ accordion -->
      <div class="col-lg-6 mb-3">
        <UiCard
          variant="outline"
          class="card-pane h-100"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-3">
              Preguntas frecuentes
            </h4>
            <UiAccordionGroup is-transparent>
              <UiAccordion
                v-for="faq in faqs"
                :key="faq.id"
                name="faq"
                :title="faq.q"
                :text="faq.a"
              />
            </UiAccordionGroup>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Toast outlet + dialogs -->
    <UiAlertToast ref="toastRef" />

    <UiModal ref="modalRef" mode="headless" size="sm" class="dialog-backdrop-blur">
      <template #header>
        <UiIconMaterial icon-code="&#xe88e;" />
        <div>
          <p class="dialog-title">
            Detalles de la notificación
          </p>
          <p class="dialog-subtitle">
            Información adicional del evento.
          </p>
        </div>
      </template>
      <template #body>
        <UiAlert type="tonal" variant="accent" message="Este es un modal de demostración." class="mb-2" />
        <p class="subtitle-2 text-muted mb-0">
          Aquí puedes mostrar el contenido completo de la notificación seleccionada.
        </p>
      </template>
      <template #footer>
        <UiButton variant="text" text="Cerrar" @on-click="modalRef?.closeDialog()" />
      </template>
    </UiModal>

    <UiConfirmModal
      ref="confirmRef"
      title="¿Eliminar este proyecto?"
      message="Esta acción no se puede deshacer. ¿Deseas continuar?"
      confirm-label="Eliminar"
      cancel-label="Cancelar"
      variant="danger"
      :is-loading="confirmLoading"
      @confirm="onConfirm"
    />
  </div>
</template>

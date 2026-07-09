<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({ pageTitle: 'Cuenta' })

/** Data */
const form = ref({
  name: 'Giancarlos',
  email: 'giancarlosgza@gmail.com',
  phone: '',
  bio: '',
  seats: 5, // number input — tests numeric coercion
  language: 'es',
  accent: '#4f46e5', // color picker (v-model)
  volume: 0, // range starting at 0 — tests falsy-zero handling
  emailNotif: true, // switch
  smsNotif: false, // checkbox (default false)
  marketing: false,
  plan: 'pro' // radio group
})

const languages = [
  { label: 'Español', value: 'es' },
  { label: 'English', value: 'en' },
  { label: 'Português', value: 'pt' }
]
const plans = [
  { name: 'Starter', id: 'starter' },
  { name: 'Pro', id: 'pro' },
  { name: 'Enterprise', id: 'enterprise' }
]

// Connected accounts (brand keys map to brandIcons)
const accounts = ref([
  { brand: 'google', name: 'Google', detail: 'giancarlosgza@gmail.com', connected: true },
  { brand: 'github', name: 'GitHub', detail: '@giancarlosgza', connected: true },
  { brand: 'facebook', name: 'Facebook', detail: 'Sin conectar', connected: false },
  { brand: 'apple', name: 'Apple', detail: 'Sin conectar', connected: false },
  { brand: 'nuxt', name: 'Nuxt', detail: 'Sin conectar', connected: false }
] as const)

// Controlled accordion for the danger zone
const dangerOpen = ref(false)
const isSaving = ref(false)

/** Computed */
const seatsType = computed(() => typeof form.value.seats)

/** Methods */
function save() {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
  }, 1500)
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Header -->
    <UiHeaderContent
      title="Configuración de la cuenta"
      subtitle="Administra tu perfil, preferencias e integraciones"
      actions
      :hide-actions-on-mobile="false"
    >
      <template #actions>
        <UiButton
          text="Guardar cambios"
          variant="filled"
          color="primary"
          :loading="isSaving"
          @on-click="save"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe161;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <div class="row mt-section">
      <!-- Left: forms -->
      <div class="col-lg-8">
        <!-- Profile -->
        <UiCard
          variant="outline"
          class="card-pane mb-3"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-3">
              Perfil
            </h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <UiInputText
                  id="name"
                  v-model="form.name"
                  label="Nombre"
                  placeholder="Tu nombre"
                  variant="outline"
                  rounded
                  required
                />
              </div>
              <div class="col-md-6 mb-3">
                <UiInputText
                  id="email"
                  v-model="form.email"
                  label="Correo electrónico"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                >
                  <!-- Prefix slot renders an attached icon box -->
                  <template #prefix>
                    <UiIconMaterial icon-code="&#xe0be;" />
                  </template>
                  <template #suffix>
                    <UiIconMaterial icon-code="&#xe86c;" />
                  </template>
                </UiInputText>
              </div>
              <div class="col-md-6 mb-3">
                <UiInputPhoneNumber
                  id="phone"
                  v-model="form.phone"
                  label="Teléfono"
                  placeholder="555 123 4567"
                />
              </div>
              <div class="col-md-6 mb-3">
                <UiInputText
                  id="seats"
                  v-model="form.seats"
                  label="Asientos del plan"
                  type="number"
                  variant="outline"
                  :min="1"
                  :max="50"
                  class="mb-2"
                />
                <p class="caption text-muted mb-0">
                  Valor: {{ form.seats }} · tipo: <code>{{ seatsType }}</code>
                </p>
              </div>
              <div class="col-12 mb-3">
                <UiInputTextarea
                  id="bio"
                  v-model="form.bio"
                  label="Biografía"
                  placeholder="Cuéntanos sobre ti…"
                  :rows="3"
                  resize="vertical"
                  optional-label
                />
              </div>
              <div class="col-12">
                <UiInputFile
                  id="avatar"
                  input-label="Subir una foto"
                  label="Foto de perfil"
                />
              </div>
            </div>
          </template>
        </UiCard>

        <!-- Preferences -->
        <UiCard
          variant="outline"
          class="card-pane mb-3"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-3">
              Preferencias
            </h4>
            <div class="row">
              <div class="col-md-6 mb-3">
                <UiInputSelect
                  id="language"
                  v-model="form.language"
                  label="Idioma"
                  option-label="label"
                  option-value="value"
                  variant="outline"
                  :options="languages"
                />
              </div>
              <div class="col-md-6 mb-3">
                <UiInputColorPicker
                  id="accent"
                  v-model="form.accent"
                  label="Color de acento"
                />
                <p class="fs-sm-300 text-muted mt-1 mb-0">
                  {{ form.accent }}
                </p>
              </div>
              <div class="col-12 mb-3">
                <UiInputRange
                  id="volume"
                  v-model="form.volume"
                  :label="`Volumen de notificaciones: ${form.volume}`"
                  :min="0"
                  :max="100"
                  :step="5"
                  size="lg"
                  class="mb-0"
                />
              </div>
            </div>

            <hr>

            <h5 class="subtitle-1 fw-600 mb-3">
              Notificaciones
            </h5>
            <UiInputCheck
              id="email-notif"
              v-model="form.emailNotif"
              label="Notificaciones por correo"
              variant="switch"
              size="lg"
            />
            <UiInputCheck
              id="sms-notif"
              v-model="form.smsNotif"
              label="Notificaciones por SMS"
              variant="switch"
              size="lg"
            />
            <UiInputCheck
              id="marketing"
              v-model="form.marketing"
              label="Acepto recibir correos de marketing"
            />

            <hr>

            <UiInputRadio
              id="plan"
              v-model="form.plan"
              label="Plan de suscripción"
              option-label="name"
              option-value="id"
              :options="plans"
              inline
            />
          </template>
        </UiCard>

        <!-- Danger zone (controlled accordion) -->
        <UiAccordionGroup
          is-transparent
          custom-class="bg-surface-pane"
        >
          <UiAccordion
            v-model:open="dangerOpen"
            name="account-settings"
            title="Zona de peligro"
            class="border border-md border-danger"
          >
            <template #content>
              <p class="subtitle-2 text-muted">
                Estas acciones son permanentes y no se pueden deshacer.
              </p>
              <UiButton
                text="Eliminar cuenta"
                variant="filled"
                color="danger"
                rounded
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe872;" />
                </template>
              </UiButton>
            </template>
          </UiAccordion>
        </UiAccordionGroup>
      </div>

      <!-- Right: connected accounts -->
      <div class="col-lg-4">
        <UiCard
          variant="outline"
          class="card-pane mb-3"
        >
          <template #body>
            <h4 class="subtitle-1 fw-700 mb-1">
              Cuentas conectadas
            </h4>
            <p class="subtitle-2 text-muted mb-3">
              Vincula servicios para iniciar sesión más rápido.
            </p>
            <div
              v-for="account in accounts"
              :key="account.brand"
              class="d-flex align-items-center gap-3 py-2"
            >
              <UiIconSvg
                :content="brandIcons[account.brand]"
                size="sm"
                :class="{ 'filter-invert': account.brand === 'apple' || account.brand === 'github' }"
              />
              <div class="flex-grow-1">
                <p class="subtitle-1 fw-600 mb-0">
                  {{ account.name }}
                </p>
                <p class="fs-sm-300 text-muted mb-0">
                  {{ account.detail }}
                </p>
              </div>
              <UiButton
                :text="account.connected ? 'Desconectar' : 'Conectar'"
                :variant="account.connected ? 'outline' : 'tonal'"
                :color="account.connected ? 'danger' : 'success'"
                size="sm"
              />
            </div>
          </template>
        </UiCard>
      </div>
    </div>
  </div>
</template>

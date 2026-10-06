<script setup lang="ts">
import type { IButtonToggleOption, IChipOption, IDialogDisplay, ITabItem } from '@colorffy/ui'
import { useColorffyConfig } from '@colorffy/ui'
import { en } from '@colorffy/ui/locales/en'
import { es } from '@colorffy/ui/locales/es'

definePageMeta({ pageTitle: 'Settings' })

/** Interfaces */
type TabId = 'profile' | 'appearance' | 'notifications' | 'security'
type EventId = 'mentions' | 'assignments' | 'status' | 'digest'
type ChannelId = 'email' | 'push' | 'slack'
interface ThemePreset { id: string, name: string, description: string, brand: string, dark: string, shape: string }

/** Data */
const DEFAULT_BRAND = '#004617'
const HEX_PATTERN = /^#[0-9a-f]{6}$/i
const timers = new Set<ReturnType<typeof setTimeout>>()
const tabIds: TabId[] = ['profile', 'appearance', 'notifications', 'security']
const twoFactorEnabled = ref(false)
const profile = reactive<{
  name: string | number | null
  email: string | number | null
  title: string | number | null
  phone: string | null
  bio: string | null
  timezone: string | number | Record<string, unknown> | null
  timeOff: Date[]
}>({
  name: currentUser.name,
  email: currentUser.email,
  title: currentUser.title,
  phone: '4155550132',
  bio: 'Product lead at Orbit. I keep the roadmap honest and the standups short.',
  timezone: 'America/New_York',
  timeOff: []
})
const today = new Date()
const nextMonday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + ((8 - today.getDay()) % 7 || 7))
const timeOffPresets = [
  { label: 'Next week', value: () => ({ start: nextMonday, end: new Date(nextMonday.getFullYear(), nextMonday.getMonth(), nextMonday.getDate() + 4) }) },
  { label: 'Rest of this month', value: () => ({ start: today, end: new Date(today.getFullYear(), today.getMonth() + 1, 0) }) }
]
const BIO_LIMIT = 160
const timezones = [
  { label: '(GMT-08:00) Pacific Time — Los Angeles', value: 'America/Los_Angeles' },
  { label: '(GMT-06:00) Central Time — Mexico City', value: 'America/Mexico_City' },
  { label: '(GMT-05:00) Eastern Time — New York', value: 'America/New_York' },
  { label: '(GMT+00:00) London', value: 'Europe/London' },
  { label: '(GMT+01:00) Central European Time — Berlin', value: 'Europe/Berlin' },
  { label: '(GMT+05:30) India — Kolkata', value: 'Asia/Kolkata' }
]
const photo = ref<File | null>(null)
const photoPreview = ref<string | null>(null)
const photoErrors = ref<string[]>([])
const savingProfile = ref(false)
const themeOptions = [
  { label: 'System', value: 'system' },
  { label: 'Light', value: 'light' },
  { label: 'Dark', value: 'dark' }
]
const languageOptions = [
  { label: 'English', value: 'en' },
  { label: 'Español', value: 'es' }
]
const language = useState<string>('orbit-language', () => 'en')
const brandColor = useState<string | null>('orbit-brand-color', () => DEFAULT_BRAND)
const brandPresets = [
  { name: 'Orbit green', hex: '#004617', dark: '#d4f5de' },
  { name: 'Violet', hex: '#6d28d9', dark: '#dac8ff' },
  { name: 'Teal', hex: '#0e7c86', dark: '#aee6e8' },
  { name: 'Coral', hex: '#ff7a59', dark: '#ffbfad' },
  { name: 'Lime', hex: '#a3e635', dark: '#d6f5a0' }
]
const themePresets: ThemePreset[] = [
  { id: 'orbit', name: 'Orbit', description: 'Forest green with balanced corners', brand: DEFAULT_BRAND, dark: '#d4f5de', shape: 'default' },
  { id: 'luxury', name: 'Luxury', description: 'Black ink and square edges, champagne at night', brand: '#111111', dark: '#e8d5a8', shape: 'sharp' },
  { id: 'playful', name: 'Playful', description: 'Bright blue on pill-shaped controls', brand: '#2f6bff', dark: '#a9c1ff', shape: 'pill' },
  { id: 'enterprise', name: 'Enterprise', description: 'Navy with balanced corners', brand: '#1e3a8a', dark: '#c3d3f7', shape: 'default' },
  { id: 'wellness', name: 'Wellness', description: 'Sage green and soft, rounded panels', brand: '#4f7a5c', dark: '#c6e3cd', shape: 'soft' },
  { id: 'studio', name: 'Studio', description: 'Violet with tight, subtle corners', brand: '#6d28d9', dark: '#dac8ff', shape: 'subtle' }
]
const leadProject = projects[0]!
const SHAPE_ROLES = ['container', 'field', 'control'] as const
const shapePresets: Record<string, Record<typeof SHAPE_ROLES[number], string>> = {
  sharp: { container: 'var(--cffy-radius-none)', field: 'var(--cffy-radius-none)', control: 'var(--cffy-radius-none)' },
  subtle: { container: 'var(--cffy-radius-sm)', field: 'var(--cffy-radius-md)', control: 'var(--cffy-radius-sm)' },
  default: { container: 'var(--cffy-radius-lg)', field: 'var(--cffy-radius-md)', control: 'var(--cffy-radius-md)' },
  soft: { container: 'var(--cffy-radius-xl)', field: 'var(--cffy-radius-lg)', control: 'var(--cffy-radius-lg)' },
  pill: { container: 'var(--cffy-radius-xl)', field: 'var(--cffy-radius-full)', control: 'var(--cffy-radius-full)' }
}
const shapeOptions: IButtonToggleOption[] = [
  { id: 'sharp', icon: '&#xe3c6;', title: 'Sharp', text: 'Square corners everywhere' },
  { id: 'subtle', icon: '&#xe920;', title: 'Subtle', text: 'Tight cards and buttons' },
  { id: 'default', icon: '&#xe835;', title: 'Default', text: 'Balanced panels, fields and buttons' },
  { id: 'soft', icon: '&#xe836;', title: 'Soft', text: 'Rounder panels and controls' },
  { id: 'pill', icon: '&#xe9f5;', title: 'Pill', text: 'Pill buttons and fields' }
]
const previewRoles: IChipOption[] = [
  { id: 'editor', text: 'Editor' },
  { id: 'viewer', text: 'Viewer' }
]
const shape = useState<string>('orbit-shape', () => 'default')
const densityOptions: IButtonToggleOption[] = [
  { id: 'compact', icon: '&#xeba8;', title: 'Compact', text: 'Tighter spacing, shorter fields and buttons' },
  { id: 'comfortable', icon: '&#xeb9e;', title: 'Comfortable', text: 'The default spacing' },
  { id: 'spacious', icon: '&#xeba9;', title: 'Spacious', text: 'More room around everything' }
]
const density = useState<string>('orbit-density', () => 'comfortable')
const previewEmail = ref('')
const previewRole = ref('editor')
const previewWelcome = ref<string | boolean | null>(true)
const textScale = ref<string | number | null>(100)
const reduceMotion = ref<string | boolean | null>(false)
const channels: { id: ChannelId, label: string }[] = [
  { id: 'email', label: 'Email' },
  { id: 'push', label: 'Push' },
  { id: 'slack', label: 'Slack' }
]
const events: { id: EventId, label: string, description: string }[] = [
  { id: 'mentions', label: 'Mentions', description: 'Someone @mentions you in a task, doc or comment.' },
  { id: 'assignments', label: 'Assignments', description: 'A task is assigned to you or its due date moves.' },
  { id: 'status', label: 'Status changes', description: 'A project you follow goes at risk or off track.' },
  { id: 'digest', label: 'Weekly digest', description: 'A Monday summary of progress across your projects.' }
]
const notificationPrefs = reactive<Record<EventId, Record<ChannelId, string | boolean | null>>>({
  mentions: { email: true, push: true, slack: true },
  assignments: { email: true, push: true, slack: false },
  status: { email: false, push: true, slack: true },
  digest: { email: true, push: false, slack: false }
})
const quietHoursOn = ref<string | boolean | null>(true)
const quietStart = ref<string | number | null>(20)
const savingNotifications = ref(false)
const setupKey = 'ORBT 7K2Q 9XMD 41PL'
const otp = ref('')
const otpErrors = ref<string[]>([])
const verifyingOtp = ref(false)
const recoveryCodes = ['4F7K-29QD', 'X8M2-LP4C', 'T6NV-93RA', 'H2JW-58EK', 'Q9BZ-17YU', 'D3RS-60MF', 'W5GA-82TN', 'K7CX-44PV']
const sessions = ref([
  { id: 's1', device: 'MacBook Pro · Chrome', detail: 'New York, US · Active now', icon: '&#xe320;', current: true },
  { id: 's2', device: 'iPhone 15 · Orbit for iOS', detail: 'New York, US · 2 hours ago', icon: '&#xe32c;', current: false },
  { id: 's3', device: 'Windows · Edge', detail: 'Austin, US · Sep 28', icon: '&#xe30c;', current: false }
])
const deleteModal = ref<IDialogDisplay | null>(null)
const deletingWorkspace = ref(false)
const deleteSummary = `All ${projects.length} projects, ${tasks.length} tasks and ${files.length} shared files will be removed for ${members.length} members after a 14-day grace period.`

/** Composables */
const route = useRoute()
const colorMode = useColorMode()
const { notify } = useNotify()
const activeTab = ref<TabId>(tabIds.find(id => id === route.query.tab) ?? 'profile')
const colorffy = useColorffyConfig()

/** Computed */
const tabs = computed<ITabItem[]>(() => [
  { id: 'profile', label: 'Profile', icon: '&#xe7fd;', panelId: 'settings-profile' },
  { id: 'appearance', label: 'Appearance', icon: '&#xe40a;', panelId: 'settings-appearance' },
  { id: 'notifications', label: 'Notifications', icon: '&#xe7f4;', panelId: 'settings-notifications' },
  {
    id: 'security',
    label: 'Security',
    icon: '&#xe897;',
    panelId: 'settings-security',
    badge: twoFactorEnabled.value ? null : { text: '1', variant: 'warning', pill: true }
  }
])
const bioLength = computed(() => (profile.bio ?? '').length)
const profileErrors = computed(() => ({
  name: String(profile.name ?? '').trim() ? [] : ['Add your name so teammates can find you.'],
  email: isValidEmail(String(profile.email ?? '')) ? [] : ['Enter a valid email, like gian@orbit.app.']
}))
const profileInvalid = computed(() => profileErrors.value.name.length > 0 || profileErrors.value.email.length > 0)
const avatarSrc = computed(() => photoPreview.value ?? currentUser.avatar)
const brandErrors = computed(() => !brandColor.value || HEX_PATTERN.test(brandColor.value) ? [] : ['Use a 6-digit hex value, like #004617.'])
const isCustomBrand = computed(() => (brandColor.value ?? DEFAULT_BRAND).toLowerCase() !== DEFAULT_BRAND)
const activePreset = computed(() => {
  const brand = (brandColor.value ?? DEFAULT_BRAND).toLowerCase()
  return themePresets.find(preset => preset.brand === brand && preset.shape === shape.value)?.id ?? null
})
const quietLabel = computed(() => {
  const hour = Number(quietStart.value ?? 20)
  return `${hour > 12 ? hour - 12 : hour}:00 ${hour >= 12 ? 'PM' : 'AM'}`
})
const otherSessions = computed(() => sessions.value.filter(session => !session.current).length)

/** Methods */
function later(callback: () => void, delay: number): void {
  const id = setTimeout(() => {
    timers.delete(id)
    callback()
  }, delay)
  timers.add(id)
}
function isValidEmail(value: string): boolean {
  const [local, domain, ...rest] = value.trim().split('@')
  return !rest.length && !!local && !!domain && domain.includes('.') && !domain.startsWith('.') && !domain.endsWith('.') && !/\s/.test(value.trim())
}
function selectTab(id: string): void {
  const match = tabIds.find(tabId => tabId === id)
  if (match)
    activeTab.value = match
}
function isWeekend(date: Date): boolean {
  return date.getDay() === 0 || date.getDay() === 6
}
function saveProfile(): void {
  if (profileInvalid.value)
    return
  savingProfile.value = true
  later(() => {
    savingProfile.value = false
    notify('Profile updated', 'Teammates will see your changes right away.')
  }, 700)
}
function resetBrand(): void {
  brandColor.value = DEFAULT_BRAND
}
function darkTint(hex: string): string {
  const color = hex.toLowerCase()
  return themePresets.find(preset => preset.brand === color)?.dark
    ?? brandPresets.find(preset => preset.hex === color)?.dark
    ?? `color-mix(in oklab, ${hex} 25%, white)`
}
function applyPreset(preset: ThemePreset): void {
  brandColor.value = preset.brand
  shape.value = preset.shape
}
function presetPreviewStyle(preset: ThemePreset): Record<string, string> {
  const radii = shapePresets[preset.shape]!
  return {
    '--preset-color': `light-dark(${preset.brand}, ${preset.dark})`,
    '--preset-container': radii.container,
    '--preset-field': radii.field,
    '--preset-control': radii.control
  }
}
function saveNotifications(): void {
  savingNotifications.value = true
  later(() => {
    savingNotifications.value = false
    notify('Notification preferences saved', 'Changes apply to new activity from now on.')
  }, 600)
}
function verifyTwoFactor(): void {
  if (verifyingOtp.value)
    return
  if (otp.value.length < 6) {
    otpErrors.value = ['Enter all 6 digits from your authenticator app.']
    return
  }
  verifyingOtp.value = true
  later(() => {
    verifyingOtp.value = false
    if (otp.value === '000000') {
      otpErrors.value = ['That code didn\'t match. Codes refresh every 30 seconds.']
      return
    }
    twoFactorEnabled.value = true
    otp.value = ''
    notify('Two-factor authentication is on', 'You\'ll enter a code from your authenticator when you sign in on a new device.')
  }, 800)
}
function turnOffTwoFactor(): void {
  twoFactorEnabled.value = false
  notify('Two-factor authentication is off', 'Your account is now protected by your password only.', 'warning')
}
async function copyRecoveryCodes(): Promise<void> {
  try {
    await navigator.clipboard.writeText(recoveryCodes.join('\n'))
    notify('Recovery codes copied', 'Keep them in your password manager, not in a shared doc.')
  } catch {
    notify('Couldn\'t copy the codes', 'Select the codes and copy them manually.', 'danger')
  }
}
function signOutSession(id: string): void {
  const session = sessions.value.find(item => item.id === id)
  sessions.value = sessions.value.filter(item => item.id !== id)
  if (session)
    notify('Session signed out', `${session.device} no longer has access to Orbit.`)
}
function signOutOthers(): void {
  const count = otherSessions.value
  sessions.value = sessions.value.filter(session => session.current)
  notify('Other sessions signed out', `Signed out of ${count} other ${count === 1 ? 'device' : 'devices'}.`)
}
function confirmDeleteWorkspace(): void {
  deletingWorkspace.value = true
  later(() => {
    deletingWorkspace.value = false
    deleteModal.value?.closeDialog()
    notify('Workspace scheduled for deletion', 'Orbit will be deleted on Oct 17. Restore it from Settings before then.', 'danger')
  }, 1000)
}

/** Watchers */
watch(photo, (file) => {
  if (photoPreview.value)
    URL.revokeObjectURL(photoPreview.value)
  photoPreview.value = null
  photoErrors.value = []
  if (!file)
    return
  if (!file.type.startsWith('image/')) {
    photoErrors.value = ['Choose a JPG, PNG or WebP image.']
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    photoErrors.value = ['Photos can be up to 5 MB.']
    return
  }
  photoPreview.value = URL.createObjectURL(file)
})
watch(language, (code) => {
  colorffy.locale = code === 'es' ? 'es-SV' : 'en-US'
  colorffy.labels = code === 'es' ? es : en
})
watch(brandColor, (hex) => {
  if (!import.meta.client || !hex || !HEX_PATTERN.test(hex))
    return
  const style = document.documentElement.style
  if (hex.toLowerCase() === DEFAULT_BRAND) {
    style.removeProperty('--cffy-color-brand-primary-500')
    style.removeProperty('--cffy-color-brand-primary-50')
    return
  }
  style.setProperty('--cffy-color-brand-primary-500', hex)
  style.setProperty('--cffy-color-brand-primary-50', darkTint(hex))
})
watch(shape, (preset) => {
  if (!import.meta.client)
    return
  const style = document.documentElement.style
  const radii = shapePresets[preset]
  SHAPE_ROLES.forEach((role) => {
    if (radii && preset !== 'default')
      style.setProperty(`--cffy-shape-${role}`, radii[role])
    else
      style.removeProperty(`--cffy-shape-${role}`)
  })
})
watch(density, (mode) => {
  if (!import.meta.client)
    return
  if (mode === 'comfortable')
    document.documentElement.removeAttribute('data-density')
  else
    document.documentElement.setAttribute('data-density', mode)
})
watch(otp, () => {
  otpErrors.value = []
})

/** Lifecycle */
onBeforeUnmount(() => {
  timers.forEach(id => clearTimeout(id))
  timers.clear()
  if (photoPreview.value)
    URL.revokeObjectURL(photoPreview.value)
})
</script>

<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent
      title="Settings"
      subtitle="Manage your profile, how Orbit looks, what reaches you and how your account is protected."
    />

    <UiTabs
      :tabs="tabs"
      :active-tab="activeTab"
      class="mb-4"
      @update:active-tab="selectTab"
    />

    <Transition name="fade" mode="out-in">
      <!-- Profile -->
      <section
        v-if="activeTab === 'profile'"
        id="settings-profile"
        role="tabpanel"
        aria-labelledby="tab-profile"
        class="d-grid gap-6"
      >
        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Profile
            </p>
            <p class="caption text-muted mb-0">
              This is how teammates see you across {{ workspace.name }}.
            </p>
          </template>

          <template #body>
            <div class="row align-items-center">
              <div class="col-12 col-md-4">
                <p class="fw-700 mb-1">
                  Photo
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  JPG, PNG or WebP, at least 400 × 400 px. Up to 5 MB.
                </p>
              </div>
              <div class="col-12 col-md-8 d-flex align-items-center gap-4">
                <UiAvatar :src="avatarSrc" :alt="`${currentUser.name} profile photo`" size="md" class="flex-shrink-0" />
                <div class="flex-grow-1">
                  <UiInputFile
                    id="profile-photo"
                    v-model="photo"
                    label="Profile photo"
                    hide-label
                    input-label="Upload photo"
                    :error-messages="photoErrors"
                  />
                  <UiButton
                    v-if="photo"
                    text="Remove photo"
                    variant="text"
                    size="sm"
                    class="mt-2"
                    @click="photo = null"
                  />
                </div>
              </div>
            </div>

            <UiDivider custom-class="my-4" />

            <div class="row">
              <div class="col-12 col-md-4">
                <p class="fw-700 mb-1">
                  Personal details
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Used for @mentions, invites and email notifications.
                </p>
              </div>
              <div class="col-12 col-md-8 d-grid grid-repeat-cols-1 grid-repeat-cols-sm-2 gap-inline-4">
                <UiInputText
                  id="profile-name"
                  v-model="profile.name"
                  label="Full name"
                  required
                  :error-messages="profileErrors.name"
                />
                <UiInputText
                  id="profile-email"
                  v-model="profile.email"
                  type="email"
                  label="Email"
                  required
                  :maxlength="80"
                  :error-messages="profileErrors.email"
                />
                <UiInputText
                  id="profile-title"
                  v-model="profile.title"
                  label="Job title"
                  placeholder="What do you do at Orbit?"
                />
                <UiInputPhoneNumber
                  id="profile-phone"
                  v-model="profile.phone"
                  label="Phone"
                  placeholder="415-555-0132"
                  :maxlength="14"
                  optional-label
                />
              </div>
            </div>

            <UiDivider custom-class="my-4" />

            <div class="row">
              <div class="col-12 col-md-4">
                <p class="fw-700 mb-1">
                  About
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Shown on your profile card when someone hovers your name.
                </p>
              </div>
              <div class="col-12 col-md-8">
                <UiInputTextarea
                  id="profile-bio"
                  v-model="profile.bio"
                  label="Bio"
                  placeholder="A line or two about what you work on."
                  :rows="3"
                  :maxlength="BIO_LIMIT"
                  class="mb-1"
                />
                <p
                  class="caption text-end mb-3"
                  :class="bioLength >= BIO_LIMIT - 20 ? 'text-warning-emphasis' : 'text-muted'"
                >
                  {{ bioLength }}/{{ BIO_LIMIT }} characters
                </p>
                <UiInputSelect
                  id="profile-timezone"
                  v-model="profile.timezone"
                  label="Time zone"
                  placeholder="Select a time zone"
                  :options="timezones"
                  option-label="label"
                  option-value="value"
                />
                <UiInputDate
                  id="profile-time-off"
                  v-model="profile.timeOff"
                  mode="multiple"
                  label="Out of office"
                  :min="today"
                  :disabled-dates="isWeekend"
                  :presets="timeOffPresets"
                  clearable
                  optional-label
                />
              </div>
            </div>
          </template>

          <template #footer>
            <div class="d-flex justify-content-end gap-2">
              <UiButton
                text="Save changes"
                variant="filled"
                color="primary"
                :loading="savingProfile"
                :disabled="profileInvalid"
                @click="saveProfile"
              />
            </div>
          </template>
        </UiCard>
      </section>

      <!-- Appearance -->
      <section
        v-else-if="activeTab === 'appearance'"
        id="settings-appearance"
        role="tabpanel"
        aria-labelledby="tab-appearance"
        class="d-grid gap-6"
      >
        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <div class="d-flex align-items-start justify-content-between gap-3">
              <div>
                <p class="card-title">
                  Theme presets
                </p>
                <p class="caption text-muted mb-0">
                  Each preset pairs a brand color with a shape. Pick one, then fine-tune its color and corners below.
                </p>
              </div>
              <UiBadge v-if="!activePreset" text="Custom" variant="tonal tonal-primary" icon-code="&#xe429;" />
            </div>
          </template>

          <template #body>
            <div class="toggle-btn-group theme-presets grid-repeat-cols-1 grid-repeat-cols-sm-2 grid-repeat-cols-lg-3" role="radiogroup" aria-label="Theme presets">
              <label
                v-for="preset in themePresets"
                :key="preset.id"
                class="toggle-btn"
                :class="{ 'toggle-btn-active': activePreset === preset.id }"
              >
                <input
                  type="radio"
                  name="theme-preset"
                  class="visually-hidden"
                  :value="preset.id"
                  :checked="activePreset === preset.id"
                  @change="applyPreset(preset)"
                >
                <span class="theme-preview" :style="presetPreviewStyle(preset)" aria-hidden="true">
                  <span class="theme-preview-line" />
                  <span class="theme-preview-line theme-preview-line-short" />
                  <span class="theme-preview-row">
                    <span class="theme-preview-field" />
                    <span class="theme-preview-button" />
                  </span>
                </span>
                <span class="d-block fw-700 fs-xs mt-3">{{ preset.name }}</span>
                <span class="d-block caption text-muted">{{ preset.description }}</span>
              </label>
            </div>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Brand color
            </p>
            <p class="caption text-muted mb-0">
              Orbit tints buttons, links and highlights with this color. Text on top of it switches between light and dark by itself, so it stays readable whatever you pick.
            </p>
          </template>

          <template #body>
            <div class="row">
              <div class="col-12 col-lg-5">
                <UiInputColorPicker
                  id="brand-color"
                  v-model="brandColor"
                  label="Custom color"
                  :error-messages="brandErrors"
                />
                <p class="caption text-muted mb-2">
                  Presets
                </p>
                <div class="d-flex flex-wrap gap-3 mb-4">
                  <button
                    v-for="preset in brandPresets"
                    :key="preset.hex"
                    type="button"
                    class="brand-swatch rounded-full border"
                    :style="{ backgroundColor: preset.hex }"
                    :title="preset.name"
                    :aria-label="preset.name"
                    :aria-pressed="brandColor?.toLowerCase() === preset.hex"
                    @click="brandColor = preset.hex"
                  />
                </div>
                <UiButton
                  text="Reset to Orbit green"
                  variant="outline"
                  size="sm"
                  :disabled="!isCustomBrand"
                  class="mb-4 mb-lg-0"
                  @click="resetBrand"
                >
                  <template #icon>
                    <UiIconMaterial icon-code="&#xf053;" />
                  </template>
                </UiButton>
              </div>

              <div class="col-12 col-lg-7">
                <div class="border rounded-lg p-3 d-grid gap-3" aria-label="Brand color preview" role="group">
                  <p class="overline text-muted mb-0">
                    Preview
                  </p>
                  <div class="d-grid grid-repeat-cols-1 grid-repeat-cols-sm-2 gap-3">
                    <div class="bg-primary text-on-primary rounded-lg p-3 d-flex align-items-center gap-2">
                      <UiIconMaterial icon-code="&#xe145;" class="fs-lg" />
                      <span class="fw-700 fs-xs">New project</span>
                    </div>
                    <div class="bg-primary-container text-on-primary-container rounded-lg p-3">
                      <p class="fw-700 mb-1">
                        Sprint 14 starts Monday
                      </p>
                      <p class="caption mb-0">
                        Planning is at 10:00 AM. Bring your estimates.
                      </p>
                    </div>
                  </div>
                  <p class="text-primary-emphasis fw-700 mb-0">
                    {{ leadProject.name }} is {{ leadProject.progress }}% done, with {{ leadProject.tasksTotal - leadProject.tasksDone }} tasks left before {{ leadProject.dueDate }}.
                  </p>
                  <div class="d-flex flex-wrap align-items-center gap-2">
                    <UiBadge :text="workspace.plan" variant="primary" />
                    <UiBadge text="In review" variant="tonal tonal-primary" icon-code="&#xe8f4;" />
                    <UiBadge text="Design system" variant="outline" />
                    <UiBadge text="3" variant="primary" size="sm" pill />
                  </div>
                  <div class="d-flex flex-wrap gap-2">
                    <UiButton text="Publish" variant="filled" color="primary" size="sm" />
                    <UiButton text="Share" variant="tonal" color="primary" size="sm" />
                    <UiButton text="Cancel" variant="text" size="sm" />
                  </div>
                </div>
              </div>
            </div>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Shape
            </p>
            <p class="caption text-muted mb-0">
              Sets the corners of panels, fields and buttons across Orbit. Badges and avatars keep their round shape.
            </p>
          </template>

          <template #body>
            <div class="row">
              <div class="col-12">
                <UiButtonToggleGroup v-model="shape" :options="shapeOptions" aria-label="Corner shape" class="mb-4" />
              </div>

              <div class="col-12 col-lg-7">
                <UiCard variant="outline" role="group" aria-label="Shape preview">
                  <template #body>
                    <p class="overline text-muted mb-1">
                      Preview
                    </p>
                    <p class="fw-700 mb-3">
                      Invite someone to {{ leadProject.name }}
                    </p>
                    <UiInputText
                      id="shape-preview-email"
                      v-model="previewEmail"
                      type="email"
                      label="Email"
                      placeholder="name@company.com"
                    />
                    <div class="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-3">
                      <UiChipGroup v-model="previewRole" :options="previewRoles" aria-label="Role" />
                      <UiInputCheck id="shape-preview-welcome" v-model="previewWelcome" label="Send a welcome email" />
                    </div>
                    <div class="d-flex flex-wrap justify-content-end gap-2">
                      <UiButton text="Cancel" variant="text" size="sm" />
                      <UiButton text="Send invite" variant="filled" color="primary" size="sm" />
                    </div>
                  </template>
                </UiCard>
              </div>
            </div>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Density
            </p>
            <p class="caption text-muted mb-0">
              Sets the spacing and the height of fields and buttons across Orbit. Text keeps its size, and touch screens keep full-size controls.
            </p>
          </template>

          <template #body>
            <UiButtonToggleGroup v-model="density" :options="densityOptions" aria-label="Density" />
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Interface
            </p>
            <p class="caption text-muted mb-0">
              Changes apply right away on this device.
            </p>
          </template>

          <template #body>
            <div class="row align-items-center">
              <div class="col-12 col-md-5">
                <p class="fw-700 mb-1">
                  Theme
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Pick a theme or follow your operating system.
                </p>
              </div>
              <div class="col-12 col-md-7">
                <ClientOnly>
                  <UiInputRadio
                    id="theme"
                    v-model="colorMode.preference"
                    label="Theme"
                    hide-label
                    :options="themeOptions"
                    option-label="label"
                    option-value="value"
                    class="mb-0"
                  />
                  <template #fallback>
                    <UiInputRadio
                      id="theme-fallback"
                      model-value="system"
                      label="Theme"
                      hide-label
                      :options="themeOptions"
                      option-label="label"
                      option-value="value"
                      disabled
                      class="mb-0"
                    />
                  </template>
                </ClientOnly>
              </div>
            </div>

            <UiDivider custom-class="my-4" />

            <div class="row align-items-center">
              <div class="col-12 col-md-5">
                <p class="fw-700 mb-1">
                  Component language
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Dates, field hints and button names in Colorffy components. Orbit's own text stays in English.
                </p>
              </div>
              <div class="col-12 col-md-7">
                <UiInputRadio
                  id="language"
                  v-model="language"
                  label="Component language"
                  hide-label
                  :options="languageOptions"
                  option-label="label"
                  option-value="value"
                  class="mb-0"
                />
              </div>
            </div>

            <UiDivider custom-class="my-4" />

            <div class="row align-items-center">
              <div class="col-12 col-md-5">
                <div class="d-flex align-items-center gap-2 mb-1">
                  <p class="fw-700 mb-0">
                    Text size
                  </p>
                  <UiBadge :text="`${textScale}%`" variant="tonal tonal-primary" size="sm" />
                </div>
                <p class="caption text-muted mb-3 mb-md-0">
                  Scales task lists, comments and docs.
                </p>
              </div>
              <div class="col-12 col-md-7">
                <UiInputRange
                  id="text-scale"
                  v-model="textScale"
                  label="Text size"
                  hide-label
                  size="sm"
                  :min="90"
                  :max="125"
                  :step="5"
                  class="mb-0"
                />
              </div>
            </div>

            <UiDivider custom-class="my-4" />

            <div class="row align-items-center">
              <div class="col-12 col-md-5">
                <p class="fw-700 mb-1">
                  Reduce motion
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Turns off animated transitions between boards and pages.
                </p>
              </div>
              <div class="col-12 col-md-7">
                <UiInputCheck
                  id="reduce-motion"
                  v-model="reduceMotion"
                  variant="switch"
                  :label="reduceMotion ? 'On' : 'Off'"
                />
              </div>
            </div>
          </template>
        </UiCard>
      </section>

      <!-- Notifications -->
      <section
        v-else-if="activeTab === 'notifications'"
        id="settings-notifications"
        role="tabpanel"
        aria-labelledby="tab-notifications"
        class="d-grid gap-6"
      >
        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Notify me about
            </p>
            <p class="caption text-muted mb-0">
              Slack messages go to you as direct messages from the Orbit app.
            </p>
          </template>

          <template #body>
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">
                      Event
                    </th>
                    <th v-for="channel in channels" :key="channel.id" scope="col" class="text-center">
                      {{ channel.label }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in events" :key="event.id">
                    <td>
                      <p class="fw-700 fs-xs mb-0">
                        {{ event.label }}
                      </p>
                      <p class="caption text-muted mb-0">
                        {{ event.description }}
                      </p>
                    </td>
                    <td v-for="channel in channels" :key="channel.id" class="text-center">
                      <UiInputCheck
                        :id="`notify-${event.id}-${channel.id}`"
                        v-model="notificationPrefs[event.id][channel.id]"
                        variant="switch"
                        :label="`${channel.label} notifications for ${event.label.toLowerCase()}`"
                        hide-label
                        class="d-inline-flex gap-0"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Quiet hours
            </p>
            <p class="caption text-muted mb-0">
              Pause push and Slack notifications after work. Email still arrives.
            </p>
          </template>

          <template #body>
            <UiInputCheck
              id="quiet-hours"
              v-model="quietHoursOn"
              variant="switch"
              label="Pause notifications on weeknights"
              class="mb-4"
            />
            <div class="row align-items-center">
              <div class="col-12 col-md-5">
                <p class="fw-700 mb-1">
                  Starts at {{ quietLabel }}
                </p>
                <p class="caption text-muted mb-3 mb-md-0">
                  Ends at 8:00 AM, Monday to Friday.
                </p>
              </div>
              <div class="col-12 col-md-7">
                <UiInputRange
                  id="quiet-start"
                  v-model="quietStart"
                  label="Quiet hours start"
                  hide-label
                  size="sm"
                  :min="18"
                  :max="23"
                  :disabled="!quietHoursOn"
                  class="mb-0"
                />
              </div>
            </div>
          </template>

          <template #footer>
            <div class="d-flex justify-content-end">
              <UiButton
                text="Save preferences"
                variant="filled"
                color="primary"
                :loading="savingNotifications"
                @click="saveNotifications"
              />
            </div>
          </template>
        </UiCard>
      </section>

      <!-- Security -->
      <section
        v-else
        id="settings-security"
        role="tabpanel"
        aria-labelledby="tab-security"
        class="d-grid gap-6"
      >
        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <div class="d-flex align-items-start justify-content-between gap-3">
              <div>
                <p class="card-title">
                  Two-factor authentication
                </p>
                <p class="caption text-muted mb-0">
                  Ask for a code from your phone, on top of your password, when you sign in.
                </p>
              </div>
              <UiBadge
                v-if="twoFactorEnabled"
                text="On"
                variant="tonal tonal-success"
                icon-code="&#xe86c;"
              />
              <UiBadge
                v-else
                text="Off"
                variant="tonal tonal-warning"
                icon-code="&#xe002;"
              />
            </div>
          </template>

          <template #body>
            <Transition name="fade" mode="out-in">
              <div
                v-if="twoFactorEnabled"
                class="bg-success-container text-on-success-container rounded-lg p-3 d-flex flex-wrap align-items-center gap-3"
                role="status"
              >
                <UiIconMaterial icon-code="&#xe86c;" class="fs-2xl" />
                <div class="flex-grow-1">
                  <p class="fw-700 mb-1">
                    Two-factor authentication is on
                  </p>
                  <p class="caption mb-0">
                    Orbit asks for a code from your authenticator app when you sign in on a new device.
                  </p>
                </div>
                <UiButton text="Turn off" variant="text" size="sm" @click="turnOffTwoFactor" />
              </div>

              <div v-else class="row">
                <div class="col-12 col-md-7">
                  <div class="d-grid gap-3 mb-4">
                    <div class="d-flex align-items-start gap-3">
                      <UiBadge text="1" variant="tonal tonal-primary" pill />
                      <div>
                        <p class="fw-700 mb-0">
                          Install an authenticator app
                        </p>
                        <p class="caption text-muted mb-0">
                          1Password, Authy and Google Authenticator all work.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-start gap-3">
                      <UiBadge text="2" variant="tonal tonal-primary" pill />
                      <div>
                        <p class="fw-700 mb-0">
                          Scan the QR code
                        </p>
                        <p class="caption text-muted mb-0">
                          Or type the setup key <span class="font-code">{{ setupKey }}</span> into the app.
                        </p>
                      </div>
                    </div>
                    <div class="d-flex align-items-start gap-3">
                      <UiBadge text="3" variant="tonal tonal-primary" pill />
                      <div>
                        <p class="fw-700 mb-0">
                          Enter the 6-digit code
                        </p>
                        <p class="caption text-muted mb-0">
                          The app shows a new code every 30 seconds.
                        </p>
                      </div>
                    </div>
                  </div>

                  <UiInputOtp
                    id="two-factor-code"
                    v-model="otp"
                    label="Verification code"
                    :length="6"
                    :disabled="verifyingOtp"
                    :error-messages="otpErrors"
                    @complete="verifyTwoFactor"
                  />
                  <UiButton
                    text="Verify and turn on"
                    variant="filled"
                    color="primary"
                    :loading="verifyingOtp"
                    :disabled="otp.length < 6"
                    @click="verifyTwoFactor"
                  />
                </div>
                <div class="col-12 col-md-5 mt-4 mt-md-0">
                  <div class="bg-muted-container text-on-muted-container rounded-lg p-4 d-grid place-items-center gap-2 text-center h-100">
                    <UiIconMaterial icon-code="&#xe00a;" class="fs-5xl lh-1" />
                    <p class="caption mb-0">
                      Scan with your authenticator app
                    </p>
                  </div>
                </div>
              </div>
            </Transition>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <div class="d-flex align-items-start justify-content-between gap-3">
              <div>
                <p class="card-title">
                  Recovery codes
                </p>
                <p class="caption text-muted mb-0">
                  Use one of these if you lose your phone. Each code works once.
                </p>
              </div>
              <UiButtonTooltip
                text="Copy"
                variant="outline"
                size="sm"
                tooltip-text="Copy all 8 codes"
                :disabled="!twoFactorEnabled"
                @click="copyRecoveryCodes"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe14d;" />
                </template>
              </UiButtonTooltip>
            </div>
          </template>

          <template #body>
            <Transition name="fade" mode="out-in">
              <div
                v-if="twoFactorEnabled"
                class="bg-muted-container text-on-muted-container rounded-lg p-3 d-grid grid-repeat-cols-2 grid-repeat-cols-md-4 gap-3 font-code"
              >
                <span v-for="code in recoveryCodes" :key="code" class="fs-xs">{{ code }}</span>
              </div>
              <p v-else class="caption text-muted mb-0">
                Turn on two-factor authentication to generate your recovery codes.
              </p>
            </Transition>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title">
              Active sessions
            </p>
            <p class="caption text-muted mb-0">
              Devices signed in to your Orbit account in the last 30 days.
            </p>
          </template>

          <template #body>
            <UiListGroup variant="flush">
              <TransitionGroup name="list">
                <UiListItem
                  v-for="session in sessions"
                  :key="session.id"
                  :title="session.device"
                  :text="session.detail"
                  :icon="session.icon"
                  custom-icon-wrapper-class="bg-secondary-container"
                  custom-icon-class="text-on-secondary-container"
                  has-actions
                >
                  <template #list-action>
                    <UiBadge
                      v-if="session.current"
                      text="This device"
                      variant="tonal tonal-success"
                      size="sm"
                    />
                    <UiButton
                      v-else
                      text="Sign out"
                      variant="text"
                      size="sm"
                      @click="signOutSession(session.id)"
                    />
                  </template>
                </UiListItem>
              </TransitionGroup>
            </UiListGroup>
          </template>

          <template #footer>
            <UiButton
              text="Sign out of all other sessions"
              variant="outline"
              size="sm"
              :disabled="otherSessions === 0"
              @click="signOutOthers"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe9ba;" />
              </template>
            </UiButton>
          </template>
        </UiCard>

        <UiCard variant="pane" class="shadow-sm">
          <template #header>
            <p class="card-title text-danger">
              Danger zone
            </p>
            <p class="caption text-muted mb-0">
              Only workspace owners can see this section.
            </p>
          </template>

          <template #body>
            <UiAlert
              type="tonal"
              variant="danger"
              title="Delete this workspace"
              :message="`Removes ${workspace.name} for everyone, including projects, files and comments. Billing stops at the end of the current period.`"
            >
              <template #actions>
                <UiButton
                  text="Delete workspace"
                  variant="filled"
                  color="danger"
                  size="sm"
                  @click="deleteModal?.showDialog()"
                >
                  <template #icon>
                    <UiIconMaterial icon-code="&#xe872;" />
                  </template>
                </UiButton>
              </template>
            </UiAlert>
          </template>
        </UiCard>

        <UiConfirmModal
          ref="deleteModal"
          :title="`Delete the ${workspace.name} workspace?`"
          :message="deleteSummary"
          confirm-label="Delete workspace"
          loading-label="Deleting…"
          :is-loading="deletingWorkspace"
          @confirm="confirmDeleteWorkspace"
        />
      </section>
    </Transition>
  </div>
</template>

<style scoped>
.brand-swatch {
  inline-size: 2rem;
  aspect-ratio: 1;
  padding: 0;
  cursor: pointer;
}

.brand-swatch[aria-pressed='true'] {
  outline: var(--cffy-border-width-md) solid var(--cffy-on-background);
  outline-offset: var(--cffy-space-4);
}

.theme-presets .toggle-btn:has(:focus-visible) {
  outline: var(--cffy-border-width-md) solid var(--cffy-focus-ring-color);
  outline-offset: var(--cffy-space-4);
}

.theme-preview {
  display: grid;
  gap: var(--cffy-space-6);
  padding: var(--cffy-space-12);
  border: var(--cffy-border-width-sm) solid var(--cffy-outline-surface);
  border-radius: var(--preset-container);
  background-color: var(--cffy-surface-container-low);
}

.theme-preview-line {
  block-size: 0.375rem;
  inline-size: 70%;
  border-radius: var(--cffy-radius-full);
  background-color: color-mix(in oklab, var(--cffy-on-background) 18%, transparent);
}

.theme-preview-line-short {
  inline-size: 45%;
}

.theme-preview-row {
  display: flex;
  gap: var(--cffy-space-6);
  margin-block-start: var(--cffy-space-6);
}

.theme-preview-field {
  flex: 1;
  block-size: 1.25rem;
  border: var(--cffy-border-width-sm) solid var(--cffy-outline-text-field);
  border-radius: var(--preset-field);
}

.theme-preview-button {
  inline-size: 2.5rem;
  block-size: 1.25rem;
  border-radius: var(--preset-control);
  background-color: var(--preset-color);
}
</style>

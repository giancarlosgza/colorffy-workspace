<script setup lang="ts">
import type { IDatatableColumn, ITabItem, LabelTemplate, UiConfirmModal, UiModal } from '@colorffy/ui'
import type { Intent, Member, Role } from '~/utils/workspace'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Team' })

/** Interfaces */
type TeamTab = 'members' | 'pending' | 'guests'

/** Data */
const ROLE_OPTIONS: Role[] = ['Owner', 'Admin', 'Member', 'Guest']
const ASSIGNABLE_ROLES: Role[] = ['Admin', 'Member', 'Guest']
const SKILL_TONES = ['primary', 'secondary', 'accent', 'info', 'success'] as const
const EMAIL_PATTERN = /^[^\s@]+@[^\s@][^\s.@]*\.[^\s@]+$/
const INVITE_LINK = 'https://orbit.app/join/product-team-7f3k'
const MESSAGE_TEMPLATES = [
  { id: 'welcome', label: 'Welcome to the team', text: 'Welcome aboard! We plan sprints and track releases in Orbit. Join to see what we\'re working on this week.' },
  { id: 'project', label: 'Join a project', text: 'We\'re kicking off a new project in Orbit and would love your input. Join to see the plan and your first tasks.' },
  { id: 'review', label: 'Review as a client', text: 'We share designs and progress in Orbit. Join as a guest to review the work and leave comments.' }
]
const PROJECT_OPTIONS = projects
  .filter(project => project.status !== 'completed')
  .map(project => ({ id: project.id, name: project.name, status: statusMeta[project.status].label }))
const columns: IDatatableColumn[] = [
  { key: 'name', label: 'Member' },
  { key: 'title', label: 'Title' },
  { key: 'role', label: 'Role' },
  { key: 'skills', label: 'Skills', sortable: false },
  { key: 'lastActive', label: 'Last active', sortable: false },
  { key: 'actions', label: 'Actions', hideLabel: true, hideable: false, fit: true, sortable: false, align: 'end' }
]
const proPlan = plans.find(plan => plan.id === 'pro')!
const teamMembers = ref<Member[]>(members.map(member => ({ ...member, skills: [...member.skills] })))
const activeTab = ref<TeamTab>('members')
const skillFilter = ref<string[]>([])
const resendingId = ref<string | null>(null)
const isRefreshing = ref(false)
const removeModal = ref<InstanceType<typeof UiConfirmModal> | null>(null)
const memberToRemove = ref<Member | null>(null)
const isRemoving = ref(false)
const inviteModal = ref<InstanceType<typeof UiModal> | null>(null)
const inviteForm = reactive({ emails: [] as string[], projectIds: [] as string[], phone: '', role: 'Member', message: '', sendCopy: true })
const inviteErrors = ref<string[]>([])
const skillsSummary: LabelTemplate = ({ count }) => count === 1 ? '1 skill' : `${count} skills`
const isSending = ref(false)

/** Composables */
const { notify } = useNotify()

/** Computed */
const activeMembers = computed(() => teamMembers.value.filter(m => m.status === 'active' && m.role !== 'Guest'))
const pendingInvites = computed(() => teamMembers.value.filter(m => m.status === 'pending'))
const guests = computed(() => teamMembers.value.filter(m => m.status === 'active' && m.role === 'Guest'))
const tabs = computed<ITabItem[]>(() => [
  { id: 'members', label: 'Members', badge: { text: String(activeMembers.value.length), variant: 'tonal tonal-primary', pill: true } },
  { id: 'pending', label: 'Pending', badge: { text: String(pendingInvites.value.length), variant: 'tonal tonal-warning', pill: true } },
  { id: 'guests', label: 'Guests', badge: { text: String(guests.value.length), variant: 'tonal tonal-info', pill: true } }
])
const skillOptions = computed(() => [...new Set(teamMembers.value.flatMap(member => member.skills))].sort((a, b) => a.localeCompare(b)))
const tabRows = computed(() => {
  if (activeTab.value === 'pending')
    return pendingInvites.value
  if (activeTab.value === 'guests')
    return guests.value
  return activeMembers.value
})
const visibleRows = computed(() => {
  const skills = skillFilter.value
  return skills.length ? tabRows.value.filter(member => member.skills.some(skill => skills.includes(skill))) : tabRows.value
})
const emptyState = computed(() => {
  if (skillFilter.value.length && tabRows.value.length)
    return { title: 'No one with these skills', subtitle: 'Pick fewer skills, or look in another tab.' }
  if (activeTab.value === 'pending')
    return { title: 'No pending invites', subtitle: 'Everyone you invited has joined Orbit.' }
  if (activeTab.value === 'guests')
    return { title: 'No guests yet', subtitle: 'Invite clients or contractors as guests to share single projects.' }
  return { title: 'No members', subtitle: 'Invite your team to start planning together.' }
})
const seatsUsed = computed(() => teamMembers.value.length)
const seatsLeft = computed(() => workspace.seatsTotal - seatsUsed.value)
const seatPercent = computed(() => Math.min(100, Math.round((seatsUsed.value / workspace.seatsTotal) * 100)))
const seatsLeftLabel = computed(() => {
  if (seatsLeft.value > 0)
    return `${seatsLeft.value} ${seatsLeft.value === 1 ? 'seat' : 'seats'} left`
  return 'No seats left'
})

/** Methods */
function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
function selectTab(id: string): void {
  activeTab.value = id as TeamTab
}
function avatarColor(color: Intent): Exclude<Intent, 'muted'> | 'neutral' {
  return color === 'muted' ? 'neutral' : color
}
function skillTone(skill: string): string {
  const sum = [...skill].reduce((total, char) => total + char.charCodeAt(0), 0)
  return SKILL_TONES[sum % SKILL_TONES.length]!
}
function findMember(id: string): Member | undefined {
  return teamMembers.value.find(member => member.id === id)
}
function changeRole(id: string, value: unknown): void {
  const member = findMember(id)
  if (!member || typeof value !== 'string' || value === member.role)
    return
  member.role = value as Role
  notify('Role updated', `${member.name} is now ${value === 'Admin' ? 'an' : 'a'} ${value}.`)
}
async function copyInviteLink(): Promise<void> {
  try {
    await navigator.clipboard.writeText(INVITE_LINK)
    notify('Invite link copied', 'Anyone with the link can join as a Member until Oct 17.', 'info')
  } catch {
    notify('Couldn\'t copy the link', INVITE_LINK, 'warning')
  }
}
function inviteEmailErrors(): string[] {
  const invalid = inviteForm.emails.filter(email => !EMAIL_PATTERN.test(email))
  if (invalid.length)
    return [`Check ${invalid.join(', ')}: that isn't a valid email address.`]
  return inviteForm.emails.length ? [] : ['Add at least one email address.']
}
function onEmailRejected(email: string, reason: 'duplicate' | 'max'): void {
  inviteErrors.value = [reason === 'duplicate' ? `${email} is already on the list.` : 'You can invite up to 10 people at once.']
}
function openInvite(): void {
  Object.assign(inviteForm, { emails: [], projectIds: [], phone: '', role: 'Member', message: '', sendCopy: true })
  inviteErrors.value = []
  inviteModal.value?.showDialog()
}
async function sendInvites(): Promise<void> {
  const emails = inviteForm.emails
  inviteErrors.value = inviteEmailErrors()
  if (inviteErrors.value.length)
    return

  inviteErrors.value = []
  isSending.value = true
  await wait(800)

  const role = inviteForm.role as Role
  emails.forEach((email, index) => {
    teamMembers.value.push({
      id: `invite-${Date.now()}-${index}`,
      name: email,
      initials: email.slice(0, 2).toUpperCase(),
      email,
      title: '',
      role,
      color: 'muted',
      status: 'pending',
      lastActive: 'Invite sent just now',
      skills: []
    })
  })

  isSending.value = false
  inviteModal.value?.closeDialog()
  activeTab.value = 'pending'

  const people = emails.length === 1 ? emails[0] : `${emails.length} people`
  const projectCount = inviteForm.projectIds.length
  const joins = projectCount ? ` They'll join ${projectCount} ${projectCount === 1 ? 'project' : 'projects'} too.` : ''
  const copy = inviteForm.sendCopy ? ' A copy is on its way to your inbox.' : ''
  notify('Invites sent', `${people} can now join Orbit as ${role}.${joins}${copy}`)
}
async function resendInvite(id: string): Promise<void> {
  const member = findMember(id)
  if (!member)
    return
  resendingId.value = id
  await wait(700)
  member.lastActive = 'Invite sent just now'
  resendingId.value = null
  notify('Invite resent', `We sent a fresh link to ${member.email}.`, 'info')
}
function revokeInvite(id: string): void {
  const member = findMember(id)
  if (!member)
    return
  teamMembers.value = teamMembers.value.filter(m => m.id !== id)
  notify('Invite revoked', `${member.email} can no longer join with the old link.`, 'warning')
}
async function copyEmails(): Promise<void> {
  const emails = visibleRows.value.map(member => member.email).join(', ')
  try {
    await navigator.clipboard.writeText(emails)
    notify('Emails copied', `${visibleRows.value.length} addresses are ready to paste.`, 'info')
  } catch {
    notify('Couldn\'t copy the emails', emails, 'warning')
  }
}
function exportMembers(): void {
  notify('Export started', `We'll email you a CSV of ${visibleRows.value.length} people when it's ready.`, 'info')
}
async function refreshMembers(): Promise<void> {
  isRefreshing.value = true
  await wait(700)
  isRefreshing.value = false
  notify('Team up to date', 'Roles and activity are current.', 'info')
}
function askRemove(id: string): void {
  memberToRemove.value = findMember(id) ?? null
  removeModal.value?.showDialog()
}
async function removeMember(): Promise<void> {
  const member = memberToRemove.value
  if (!member)
    return
  isRemoving.value = true
  await wait(700)
  teamMembers.value = teamMembers.value.filter(m => m.id !== member.id)
  isRemoving.value = false
  removeModal.value?.closeDialog()
  notify('Member removed', `${member.name} no longer has access to Orbit. Their tasks are still assigned to them.`)
}

/** Watchers */
watch(() => [...inviteForm.emails], () => {
  if (inviteErrors.value.length)
    inviteErrors.value = inviteEmailErrors()
})
</script>

<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent
      title="Team"
      subtitle="Manage who can access Orbit, what they can do and who still has to accept an invite."
    >
      <template #actions>
        <UiButtonGroup>
          <UiButtonTooltip
            text="Copy invite link"
            variant="outline"
            tooltip-text="Anyone with the link joins as a Member"
            @click="copyInviteLink"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe157;" />
            </template>
          </UiButtonTooltip>
          <UiButton text="Invite members" variant="filled" color="primary" @click="openInvite">
            <template #icon>
              <UiIconMaterial icon-code="&#xe7fe;" />
            </template>
          </UiButton>
        </UiButtonGroup>
      </template>
    </UiHeaderContent>

    <!-- Seats -->
    <UiCard custom-class="mb-4" variant="pane" class="shadow-sm">
      <template #body>
        <div class="d-flex flex-wrap align-items-center gap-4">
          <span class="d-inline-flex bg-primary-container text-on-primary-container rounded-lg p-2">
            <UiIconMaterial icon-code="&#xe7ef;" />
          </span>

          <div class="flex-grow-1">
            <div class="d-flex flex-wrap justify-content-between align-items-baseline gap-2 mb-2">
              <p class="fw-700 mb-0">
                {{ seatsUsed }} of {{ workspace.seatsTotal }} seats used
              </p>
              <p class="caption mb-0" :class="seatsLeft > 0 ? 'text-muted' : 'text-danger-emphasis'">
                {{ seatsLeftLabel }}
              </p>
            </div>
            <UiProgressBar :value="seatPercent" size="sm" aria-label="Seats used" />
            <p class="caption text-muted mt-2 mb-0">
              {{ workspace.plan }} plan · {{ formatCurrency(proPlan.monthly) }} per seat each month. Pending invites hold a seat until they expire.
            </p>
          </div>

          <UiLinkTooltip
            :as="NuxtLink"
            to="/billing"
            text="Add seats"
            variant="tonal"
            color="primary"
            size="sm"
            tooltip-text="Seats are billed per member on your Pro plan"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiLinkTooltip>
        </div>
      </template>
    </UiCard>

    <!-- Members -->
    <UiCard variant="pane" class="shadow-sm">
      <template #body>
        <UiDatatable
          data-density="compact"
          :columns="columns"
          :items="visibleRows"
          column-manager
          :toolbar-button="{ variant: 'text', customClass: 'text-neutral' }"
          :empty-state-title="emptyState.title"
          :empty-state-subtitle="emptyState.subtitle"
          empty-state-use-custom-icon
          empty-state-icon-code="&#xe7ef;"
        >
          <template #controls>
            <div class="d-flex flex-wrap align-items-center gap-3">
              <UiTabs
                :tabs="tabs"
                :active-tab="activeTab"
                pill-tabs
                fit
                size="sm"
                @update:active-tab="selectTab"
              />
              <UiInputMultiSelect
                id="team-skill-filter"
                v-model="skillFilter"
                label="Filter by skill"
                hide-label
                placeholder="All skills"
                :options="skillOptions"
                :max-chips="0"
                :max-chips-label="skillsSummary"
                size="sm"
                clearable
                class="mb-0"
                style="width: 12rem;"
              />
            </div>
          </template>

          <template #actions-start>
            <UiButtonTooltip
              variant="text"
              custom-class="text-neutral"
              size="sm"
              icon
              tooltip-text="Refresh"
              :loading="isRefreshing"
              @click="refreshMembers"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe5d5;" />
              </template>
            </UiButtonTooltip>
            <UiButtonTooltip variant="text" custom-class="text-neutral" size="sm" icon tooltip-text="Copy emails" @click="copyEmails">
              <template #icon>
                <UiIconMaterial icon-code="&#xe14d;" />
              </template>
            </UiButtonTooltip>
            <UiButtonTooltip variant="text" custom-class="text-neutral" size="sm" icon tooltip-text="Export CSV" @click="exportMembers">
              <template #icon>
                <UiIconMaterial icon-code="&#xf090;" />
              </template>
            </UiButtonTooltip>
          </template>

          <template #actions-end>
            <UiButtonMenu variant="text" custom-class="text-neutral" size="sm" icon placement="bottom-end" tooltip-text="More">
              <template #icon>
                <UiIconMaterial icon-code="&#xe5d4;" />
              </template>
              <template #menu>
                <UiButtonMenuItem item-text="Print list" icon="&#xe8ad;" @click="notify('Print preview', 'Opening the member list for printing.', 'info')" />
                <UiButtonMenuItem item-text="Audit log" icon="&#xe889;" @click="notify('Audit log', 'Every role change and invite from the last 90 days.', 'info')" />
              </template>
            </UiButtonMenu>
          </template>

          <template #cell-name="{ item }">
            <div class="d-flex align-items-center gap-3">
              <UiAvatar
                :src="item.avatar"
                :initials="item.avatar ? null : item.initials"
                :color="avatarColor(item.color)"
                :alt="item.name"
                :status="item.lastActive === 'Online' ? 'online' : null"
                variant="tonal"
                size="sm"
              />
              <div>
                <div class="d-flex flex-wrap align-items-center gap-2 fw-600 mb-0">
                  {{ item.name }}
                  <UiBadge v-if="item.id === currentUser.id" text="You" variant="tonal tonal-primary" size="sm" />
                  <UiBadge
                    v-if="item.status === 'pending'"
                    text="Pending"
                    variant="tonal tonal-warning"
                    icon-code="&#xe8b5;"
                    size="sm"
                  />
                </div>
                <p class="caption text-muted mb-0">
                  {{ item.email }}
                </p>
              </div>
            </div>
          </template>

          <template #cell-title="{ item }">
            <span :class="{ 'text-muted': !item.title }">{{ item.title || '—' }}</span>
          </template>

          <template #cell-role="{ item }">
            <UiInputSelect
              :id="`role-${item.id}`"
              :model-value="item.role"
              :options="item.role === 'Owner' ? ROLE_OPTIONS : ASSIGNABLE_ROLES"
              :label="`Role for ${item.name}`"
              placeholder="Choose a role"
              :disabled="item.role === 'Owner'"
              hide-label
              size="sm"
              class="mb-0"
              @update:model-value="changeRole(item.id, $event)"
            />
          </template>

          <template #cell-skills="{ item }">
            <UiBadgeGroup v-if="item.skills.length">
              <UiBadge
                v-for="skill in item.skills"
                :key="skill"
                :text="skill"
                :variant="`tonal tonal-${skillTone(skill)}`"
                size="sm"
              />
            </UiBadgeGroup>
            <span v-else class="text-muted">—</span>
          </template>

          <template #cell-lastActive="{ item }">
            <span :class="item.lastActive === 'Online' ? 'text-success-emphasis fw-600' : 'text-muted'">
              {{ item.lastActive }}
            </span>
          </template>

          <template #cell-actions="{ item }">
            <div v-if="item.status === 'pending'" class="d-flex justify-content-end gap-2">
              <UiButton
                text="Resend"
                variant="outline"
                size="sm"
                :loading="resendingId === item.id"
                @click="resendInvite(item.id)"
              />
              <UiButton text="Revoke" variant="tonal" color="danger" size="sm" @click="revokeInvite(item.id)" />
            </div>
            <UiButtonTooltip
              v-else-if="item.role !== 'Owner'"
              variant="text"
              custom-class="text-neutral"
              size="sm"
              icon
              :tooltip-text="`Remove ${item.name}`"
              @click="askRemove(item.id)"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xef66;" />
              </template>
            </UiButtonTooltip>
          </template>
        </UiDatatable>
      </template>
    </UiCard>

    <!-- Invite -->
    <UiModal ref="inviteModal" size="md">
      <template #header>
        <div>
          <p class="dialog-title">
            Invite members
          </p>
          <p class="dialog-subtitle">
            They'll get an email with a link to join {{ workspace.name }} · {{ workspace.team }}.
          </p>
        </div>
        <UiButton variant="text" custom-class="text-neutral" size="sm" icon aria-label="Close" @click="inviteModal?.closeDialog()">
          <template #icon>
            <UiIconMaterial icon-code="&#xe5cd;" />
          </template>
        </UiButton>
      </template>

      <template #body>
        <form id="invite-form" novalidate @submit.prevent="sendInvites">
          <UiInputTags
            id="invite-emails"
            v-model="inviteForm.emails"
            label="Email addresses"
            placeholder="maria@orbit.app, sam@studio.co"
            :max="10"
            :maxlength="80"
            remove-label="Remove"
            :error-messages="inviteErrors"
            required
            autofocus
            @reject="onEmailRejected"
          />

          <div class="row">
            <div class="col-12 col-md-6">
              <UiInputSelect
                id="invite-role"
                v-model="inviteForm.role"
                :options="ASSIGNABLE_ROLES"
                label="Role"
                placeholder="Choose a role"
                required
              />
            </div>
            <div class="col-12 col-md-6">
              <UiInputPhoneNumber
                id="invite-phone"
                v-model="inviteForm.phone"
                label="Phone for SMS invite"
                placeholder="415-555-0132"
                :maxlength="16"
                optional-label
              />
            </div>
          </div>

          <UiInputMultiSelect
            id="invite-projects"
            v-model="inviteForm.projectIds"
            label="Add to projects"
            placeholder="Search projects"
            :options="PROJECT_OPTIONS"
            option-label="name"
            option-value="id"
            option-group="status"
            :max-chips="2"
            clearable
            optional-label
          />

          <UiInputTextarea
            id="invite-message"
            v-model="inviteForm.message"
            label="Personal message"
            placeholder="Hey! We plan sprints and track releases in Orbit. Join us so you can follow the mobile app work."
            :rows="3"
            :maxlength="280"
            optional-label
          />
          <div class="d-flex align-items-center justify-content-between gap-2 mb-3">
            <UiButtonMenu
              id="invite-templates"
              text="Use a template"
              variant="text"
              custom-class="text-neutral"
              size="sm"
              placement="bottom-start"
              tooltip-text="Fill in the message from a template"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe873;" />
              </template>
              <template #menu>
                <UiButtonMenuItem
                  v-for="template in MESSAGE_TEMPLATES"
                  :id="`invite-template-${template.id}`"
                  :key="template.id"
                  :item-text="template.label"
                  @click="inviteForm.message = template.text"
                />
              </template>
            </UiButtonMenu>
            <UiButtonTooltip
              variant="text"
              custom-class="text-neutral"
              size="sm"
              icon
              tooltip-text="Copy invite link"
              @click="copyInviteLink"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe157;" />
              </template>
            </UiButtonTooltip>
          </div>

          <UiInputCheck id="invite-copy" v-model="inviteForm.sendCopy" label="Send me a copy" />

          <p class="d-flex align-items-center gap-2 caption bg-info-container text-on-info-container rounded-md p-2 mt-3 mb-0">
            <UiIconMaterial icon-code="&#xe88e;" class="fs-sm" />
            Each new member uses a seat. You have {{ Math.max(seatsLeft, 0) }} left on the {{ workspace.plan }} plan.
          </p>
        </form>
      </template>

      <template #footer>
        <UiButton text="Cancel" variant="text" :disabled="isSending" @click="inviteModal?.closeDialog()" />
        <UiButton
          text="Send invites"
          variant="filled"
          color="primary"
          type="submit"
          form="invite-form"
          :loading="isSending"
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe163;" />
          </template>
        </UiButton>
      </template>
    </UiModal>

    <!-- Remove member -->
    <UiConfirmModal
      ref="removeModal"
      variant="danger"
      :title="`Remove ${memberToRemove?.name ?? 'this member'} from Orbit?`"
      message="They lose access to every project right away. Their tasks stay assigned to them until you reassign them."
      confirm-label="Remove member"
      cancel-label="Keep member"
      :is-loading="isRemoving"
      @confirm="removeMember"
    />
  </div>
</template>

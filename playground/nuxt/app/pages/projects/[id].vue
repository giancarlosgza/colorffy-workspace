<script setup lang="ts">
import type { IAvatarProps, ITabItem, ITimelineItem, ThemeColor } from '@colorffy/ui'
import type { FileItem, Intent, Member, NotificationType, ProjectStatus, Task, TaskStatus } from '~/utils/workspace'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Project' })

interface ProjectNotes {
  brief: string
  scope: string[]
  outOfScope: string
  risks: string[]
  milestones: [string, string]
}

interface Upload {
  id: string
  name: string
  size: string
}

const route = useRoute()
const { notify } = useNotify()

/** Constants */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const STATUS_ORDER: ProjectStatus[] = ['planning', 'on-track', 'at-risk', 'off-track', 'completed']
const TASK_ORDER: TaskStatus[] = ['todo', 'in-progress', 'in-review', 'done']

const fileTypeMeta: Record<FileItem['type'], { icon: string, color: Intent }> = {
  pdf: { icon: '&#xe415;', color: 'danger' },
  image: { icon: '&#xe3f4;', color: 'accent' },
  doc: { icon: '&#xe873;', color: 'info' },
  sheet: { icon: '&#xe265;', color: 'success' }
}
const notificationMeta: Record<NotificationType, { icon: string, color: ThemeColor }> = {
  mention: { icon: '&#xe0e6;', color: 'primary' },
  assigned: { icon: '&#xe85e;', color: 'info' },
  comment: { icon: '&#xe0b9;', color: 'secondary' },
  status: { icon: '&#xe153;', color: 'warning' },
  system: { icon: '&#xe88e;', color: 'info' }
}
const projectNotes: Record<string, ProjectNotes> = {
  'mobile-app-v2': {
    brief: 'Field teams lose signal on trains and job sites. v2 keeps every list usable offline and gets a new workspace to its first task in under two minutes.',
    scope: ['Offline sync for tasks, comments and attachments', 'Five-step onboarding with workspace templates', 'Per-project push notification settings'],
    outOfScope: 'tablet layouts and home-screen widgets.',
    risks: ['Attachment sync waits on the new API endpoint, due Oct 14.', 'App Store review can add up to a week before launch.'],
    milestones: ['Onboarding prototype approved', 'Beta with 40 field teams']
  },
  'website-redesign': {
    brief: 'The site still sells last year\'s product. The redesign moves to the new brand, explains pricing on one page and lets marketing publish without engineering.',
    scope: ['Home, pricing, customers and blog templates', 'Brand refresh for illustrations and type', 'Migrate the 40 most-read articles'],
    outOfScope: 'the docs site and localized pages.',
    risks: ['Pricing copy still needs sign-off.', 'Budget is 82% spent with more than half the pages left.'],
    milestones: ['Homepage design signed off', 'Pricing page live behind a flag']
  },
  'billing-migration': {
    brief: 'Our payments provider retires the legacy subscriptions API in January. Every workspace moves to the new provider with no failed renewals and no downtime.',
    scope: ['Subscription and invoice data migration', 'Two weeks of dual writes with daily reconciliation', 'New card update and receipt emails'],
    outOfScope: 'usage-based pricing.',
    risks: ['The provider sandbox is down until Friday, so cutover moves a week.', 'The provider contract is still unsigned.'],
    milestones: ['Provider contract signed', 'Dual-write period starts']
  },
  'design-system': {
    brief: 'Three teams rebuild the same buttons and tables. One shared library with tokens and docs cuts UI review time and keeps the product consistent.',
    scope: ['Tokens for color, type and spacing', '40 core components with usage docs', 'A Figma library that mirrors the code'],
    outOfScope: 'marketing site components.',
    risks: ['Adoption depends on the mobile team migrating before their v2 launch.'],
    milestones: ['Token set v1 published', 'Mobile team migrated']
  },
  'analytics-dashboard': {
    brief: 'Customer success answers the same retention questions every week. Self-serve reports let account owners see activation and revenue without a data request.',
    scope: ['Activation, retention and revenue reports', 'CSV export and scheduled emails', 'Workspace-level permissions'],
    outOfScope: 'a custom report builder.',
    risks: ['The second analyst role is still open.', 'Event tracking on mobile is incomplete.'],
    milestones: ['Metric definitions agreed', 'Pilot with five accounts']
  },
  'onboarding-emails': {
    brief: 'New workspaces went quiet after day two. A five-email series walks owners through inviting their team and creating a first project.',
    scope: ['Five lifecycle emails for workspace owners', 'Trial reminder emails', 'Open and click tracking'],
    outOfScope: 'in-app onboarding checklists.',
    risks: ['Nothing open. Day-one open rate is 58%.'],
    milestones: ['Copy approved', 'Series live for new workspaces']
  },
  'api-v3': {
    brief: 'Partners build on an API that changes under them. v3 is versioned, adds webhooks and lets admins issue tokens scoped to a single project.',
    scope: ['Versioned REST endpoints for projects and tasks', 'Webhooks with retries and signing', 'Scoped personal and app tokens'],
    outOfScope: 'a GraphQL endpoint.',
    risks: ['Two partners still call v1 endpoints we plan to retire.'],
    milestones: ['Partner kickoff', 'Public beta of webhooks']
  }
}

/** State */
const activeTab = ref('overview')
const briefOpen = ref(true)
const statusOverrides = ref<Record<string, ProjectStatus>>({})
const taskOverrides = ref<Record<string, TaskStatus>>({})
const localEvents = ref<ITimelineItem[]>([])
const pendingFile = ref<File | null>(null)
const uploading = ref<Upload[]>([])
const uploaded = ref<FileItem[]>([])
const reviewAt = ref<Date | null>(null)
const today = new Date()
const reviewSlots = { step: 30, start: '09:00', end: '17:00' }

/** Computed */
const project = computed(() => projectById(String(route.params.id)))
const owner = computed(() => memberById(project.value?.ownerId ?? ''))
const status = computed<ProjectStatus>(() => {
  const current = project.value
  return current ? statusOverrides.value[current.id] ?? current.status : 'planning'
})
const notes = computed<ProjectNotes>(() => projectNotes[project.value?.id ?? ''] ?? {
  brief: project.value?.description ?? '',
  scope: [],
  outOfScope: 'nothing yet.',
  risks: [],
  milestones: ['Scope signed off', 'First release']
})

const team = computed(() => (project.value?.memberIds ?? []).map(id => memberById(id)))
const teamAvatars = computed(() => team.value.map(avatarOf))
const teamNames = computed(() => team.value.map(member => (member.id === project.value?.ownerId ? `${member.name} (lead)` : member.name)).join(', '))

const projectTasks = computed<Task[]>(() => tasks
  .filter(task => task.projectId === project.value?.id)
  .map(task => ({ ...task, status: taskOverrides.value[task.id] ?? task.status })))
const taskGroups = computed(() => TASK_ORDER
  .map(key => ({ status: key, items: projectTasks.value.filter(task => task.status === key) }))
  .filter(group => group.items.length > 0))
const openTasks = computed(() => projectTasks.value.filter(task => task.status !== 'done').length)
const tasksDone = computed(() => {
  const current = project.value
  if (!current)
    return 0
  const doneBefore = tasks.filter(task => task.projectId === current.id && task.status === 'done').length
  const doneNow = projectTasks.value.filter(task => task.status === 'done').length
  return current.tasksDone + doneNow - doneBefore
})
const progress = computed(() => (project.value ? Math.round((tasksDone.value / project.value.tasksTotal) * 100) : 0))

const spentRatio = computed(() => (project.value ? project.value.spent / project.value.budget : 0))
const spentPercent = computed(() => Math.round(spentRatio.value * 100))
const budgetLeft = computed(() => (project.value ? project.value.budget - project.value.spent : 0))
const budgetAtRisk = computed(() => spentRatio.value > 0.8 && status.value !== 'completed')

const fileList = computed(() => [...uploaded.value, ...files])

const tabs = computed<ITabItem[]>(() => [
  { id: 'overview', label: 'Overview', icon: '&#xe9b0;', panelId: 'project-panel-overview' },
  { id: 'tasks', label: 'Tasks', icon: '&#xe2e6;', panelId: 'project-panel-tasks', badge: openTasks.value ? { text: String(openTasks.value), variant: 'tonal tonal-primary', pill: true } : null },
  { id: 'files', label: 'Files', icon: '&#xe2c7;', panelId: 'project-panel-files', badge: { text: String(fileList.value.length), variant: 'tonal tonal-default', pill: true } },
  { id: 'activity', label: 'Activity', icon: '&#xe889;', panelId: 'project-panel-activity' }
])

const milestones = computed<ITimelineItem[]>(() => {
  const current = project.value
  if (!current)
    return []
  const [first, second] = notes.value.milestones
  const phases = [
    { id: 'kickoff', title: 'Kickoff', time: current.startDate, at: 0 },
    { id: 'first', title: first, time: dateBetween(current.startDate, current.dueDate, 0.35), at: 30 },
    { id: 'second', title: second, time: dateBetween(current.startDate, current.dueDate, 0.7), at: 65 },
    { id: 'launch', title: 'Launch', time: current.dueDate, at: 100 }
  ]
  const isDone = (at: number) => status.value === 'completed' || (status.value !== 'planning' && progress.value >= at)
  const currentIndex = phases.findIndex(phase => !isDone(phase.at))

  return phases.map((phase, index): ITimelineItem => {
    if (isDone(phase.at))
      return { id: phase.id, time: phase.time, title: phase.title, text: 'Done', icon: '&#xe5ca;', variant: 'success' }
    if (index === currentIndex) {
      const variant: ThemeColor = status.value === 'off-track' ? 'danger' : status.value === 'at-risk' ? 'warning' : 'primary'
      return { id: phase.id, time: phase.time, title: phase.title, text: `${statusMeta[status.value].label} · ${progress.value}% of tasks done`, icon: '&#xe153;', variant }
    }
    return { id: phase.id, time: phase.time, title: phase.title, text: 'Planned' }
  })
})

const activityItems = computed<ITimelineItem[]>(() => {
  const current = project.value
  if (!current)
    return []
  const fromInbox = notifications
    .filter(item => item.projectId === current.id)
    .map((item): ITimelineItem => {
      const actor = memberById(item.actorId)
      return { id: item.id, time: item.time, title: item.title, text: item.body, imageUrl: actor.avatar ?? null, imageAlt: actor.name, icon: notificationMeta[item.type].icon, variant: notificationMeta[item.type].color }
    })
  const completed = tasks
    .filter(task => task.projectId === current.id && task.status === 'done')
    .map((task): ITimelineItem => ({ id: `done-${task.id}`, time: task.due, title: `${memberById(task.assigneeId).name} completed ${task.title}`, icon: '&#xe86c;', variant: 'success' }))
  const created: ITimelineItem = { id: 'created', time: current.startDate, title: `${owner.value.name} created ${current.name}`, text: `${current.key} · ${current.memberIds.length} members · ${formatCurrency(current.budget)} budget`, icon: '&#xe145;', variant: 'secondary' }

  return [...localEvents.value, ...fromInbox, ...completed, created]
})

/** Methods */
function tonal(color: Intent): string {
  return color === 'muted' ? 'tonal tonal-default' : `tonal tonal-${color}`
}
function avatarOf(member: Member): IAvatarProps {
  if (member.avatar)
    return { src: member.avatar, alt: member.name }
  return { initials: member.initials, alt: member.name, color: member.color === 'muted' ? 'neutral' : member.color }
}
// Early-year dates belong to next year
function toDate(label: string): Date {
  const [month = 'Jan', day = '1'] = label.split(' ')
  const index = MONTHS.indexOf(month)
  return new Date(index < 5 ? 2027 : 2026, index, Number(day))
}
function dateBetween(start: string, end: string, ratio: number): string {
  const from = toDate(start)
  const days = Math.round((toDate(end).getTime() - from.getTime()) / 86400000)
  const date = new Date(from.getFullYear(), from.getMonth(), from.getDate() + Math.round(days * ratio))
  return `${MONTHS[date.getMonth()]} ${date.getDate()}`
}
function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${Math.max(1, Math.round(bytes / 1024))} KB`
}
function fileTypeOf(name: string): FileItem['type'] {
  const extension = name.split('.').pop()?.toLowerCase() ?? ''
  if (extension === 'pdf')
    return 'pdf'
  if (['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'fig'].includes(extension))
    return 'image'
  if (['xls', 'xlsx', 'csv', 'numbers'].includes(extension))
    return 'sheet'
  return 'doc'
}
function addEvent(event: Omit<ITimelineItem, 'id' | 'time'>) {
  localEvents.value.unshift({ id: `local-${Date.now()}`, time: 'Just now', ...event })
}

function isWeekend(date: Date): boolean {
  return date.getDay() === 0 || date.getDay() === 6
}
function isBooked(date: Date): boolean {
  const minutes = date.getHours() * 60 + date.getMinutes()
  const busy = date.getDate() % 2 === 0 ? [600, 780, 810, 900] : [570, 660, 840]
  return date < new Date() || busy.includes(minutes)
}
function onReviewScheduled(value: unknown): void {
  if (value instanceof Date)
    notify('Review scheduled', `${project.value?.name} review on ${new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(value)}. The team gets an invite.`)
}
async function copyLink() {
  try {
    await navigator.clipboard.writeText(window.location.href)
    notify('Link copied', `Anyone in ${workspace.name} with access can open ${project.value?.name}.`, 'success')
  } catch {
    notify('Couldn\'t copy the link', 'Your browser blocked clipboard access. Copy it from the address bar instead.', 'warning')
  }
}
function setStatus(next: ProjectStatus) {
  const current = project.value
  if (!current || next === status.value)
    return
  statusOverrides.value = { ...statusOverrides.value, [current.id]: next }
  addEvent({ title: `${currentUser.name} set the status to ${statusMeta[next].label}`, icon: statusMeta[next].icon, variant: statusMeta[next].color === 'muted' ? 'neutral' : statusMeta[next].color })
  notify('Status updated', `${current.name} is now ${statusMeta[next].label.toLowerCase()}. Followers get a summary tonight.`, 'info')
}
function toggleTask(task: Task, checked: string | boolean | null) {
  const original = tasks.find(item => item.id === task.id)?.status ?? 'todo'
  const next: TaskStatus = checked ? 'done' : (original === 'done' ? 'todo' : original)
  taskOverrides.value = { ...taskOverrides.value, [task.id]: next }
  if (checked)
    addEvent({ title: `${currentUser.name} completed ${task.title}`, icon: '&#xe86c;', variant: 'success' })
}
function startUpload(file: File | null) {
  if (!file)
    return
  const upload: Upload = { id: `upload-${Date.now()}`, name: file.name, size: formatSize(file.size) }
  uploading.value.push(upload)
  setTimeout(() => {
    uploading.value = uploading.value.filter(item => item.id !== upload.id)
    uploaded.value.unshift({ id: upload.id, name: upload.name, type: fileTypeOf(upload.name), size: upload.size, ownerId: currentUser.id, updated: 'Just now' })
    pendingFile.value = null
    addEvent({ title: `${currentUser.name} uploaded ${upload.name}`, icon: '&#xe2c6;', variant: 'accent' })
    notify('File uploaded', `${upload.name} is now shared with everyone on ${project.value?.name}.`, 'success')
  }, 1500)
}
function onFileSelected(file: File | null) {
  pendingFile.value = file
  startUpload(file)
}
function downloadFile(file: FileItem) {
  notify('Download started', `${file.name} · ${file.size}`, 'info')
}

/** Watchers */
watch(() => route.params.id, () => {
  activeTab.value = 'overview'
  briefOpen.value = true
  localEvents.value = []
})
</script>

<template>
  <div class="container mt-3 mb-5">
    <template v-if="project">
      <!-- Breadcrumb -->
      <UiBreadcrumb
        :as="NuxtLink"
        :items="[{ label: 'Projects', to: '/projects', icon: '&#xe2c7;' }, { label: project.name }]"
        separator-icon="&#xe5cc;" :structured-data="false" class="mb-3"
      />

      <!-- Header -->
      <div class="d-flex align-items-start gap-3">
        <span
          class="d-inline-flex p-3 rounded-lg flex-shrink-0"
          :class="`bg-${project.color}-container text-on-${project.color}-container`"
        >
          <UiIconMaterial :icon-code="project.icon" class="fs-2xl lh-1" />
        </span>
        <UiHeaderContent
          :headline="`${project.key} · Led by ${owner.name}`" :title="project.name"
          :subtitle="project.description" size="md" class="flex-grow-1"
        >
          <template #actions>
            <UiButtonGroup>
              <UiInputDate
                id="project-review"
                v-model="reviewAt"
                trigger="button"
                label="Schedule Review"
                hide-label
                placeholder="Schedule"
                :time-options="reviewSlots"
                :min="today"
                :disabled-dates="isWeekend"
                :disabled-times="isBooked"
                class="mb-0"
                @update="onReviewScheduled"
              />
              <UiButtonTooltip
                text="Share" variant="outline" tooltip-text="Copy a link to this project"
                @click="copyLink"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe157;" />
                </template>
              </UiButtonTooltip>
              <UiButtonMenu
                id="project-status" text="Status" variant="tonal" :color="statusMeta[status].color"
                icon-trailing tooltip-text="Change the project status" placement="bottom-end"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe5cf;" />
                </template>
                <template #menu>
                  <UiButtonMenuText item-text="Set project status" />
                  <UiButtonMenuItem
                    v-for="key in STATUS_ORDER" :key="key" :item-text="statusMeta[key].label"
                    :icon="statusMeta[key].icon" :icon-class="`text-${statusMeta[key].color}`"
                    :icon-trailing="key === status ? '&#xe5ca;' : null" @click="setStatus(key)"
                  />
                  <UiButtonMenuDivider />
                  <UiButtonMenuItem item-text="View status history" icon="&#xe889;" @click="activeTab = 'activity'" />
                </template>
              </UiButtonMenu>
            </UiButtonGroup>
          </template>
        </UiHeaderContent>
      </div>

      <!-- Properties -->
      <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
        <UiBadge
          :text="statusMeta[status].label" :variant="tonal(statusMeta[status].color)"
          :icon-code="statusMeta[status].icon"
        />
        <UiBadge
          :text="`${priorityMeta[project.priority].label} priority`"
          :variant="tonal(priorityMeta[project.priority].color)"
        />
        <span class="d-inline-flex align-items-center gap-1 caption text-muted">
          <UiIconMaterial icon-code="&#xe935;" />
          {{ project.startDate }} → {{ project.dueDate }}
        </span>
        <UiTooltip :text="teamNames" placement="bottom">
          <UiAvatarGroup :avatars="teamAvatars" :max="4" size="sm" />
        </UiTooltip>
      </div>

      <!-- Tabs -->
      <UiTabs v-model:active-tab="activeTab" :tabs="tabs" class="mb-4" />

      <!-- Overview -->
      <section
        v-show="activeTab === 'overview'" id="project-panel-overview" role="tabpanel"
        aria-labelledby="tab-overview"
      >
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <UiCard title="Progress" class="h-100 shadow-sm" variant="pane">
              <template #body>
                <div class="d-flex align-items-end justify-content-between gap-2 mb-2">
                  <p class="fs-3xl fw-700 tabular-numbers mb-0">
                    {{ progress }}%
                  </p>
                  <p class="caption text-muted mb-1">
                    {{ tasksDone }} of {{ project.tasksTotal }} tasks done
                  </p>
                </div>
                <UiProgressBar
                  :value="progress" :aria-label="`${project.name} progress`"
                  :bar-class="status === 'completed' ? 'bg-success' : null"
                />
                <div class="d-flex justify-content-between caption text-muted mt-2">
                  <span>Started {{ project.startDate }}</span>
                  <span>Due {{ project.dueDate }}</span>
                </div>
              </template>
            </UiCard>
          </div>

          <div class="col-12 col-md-6 mb-3">
            <UiCard title="Budget" class="h-100 shadow-sm" variant="pane">
              <template #body>
                <div class="d-flex align-items-end justify-content-between gap-2 mb-2">
                  <p class="fs-3xl fw-700 tabular-numbers mb-0">
                    {{ formatCurrency(project.spent) }}
                  </p>
                  <p class="caption text-muted mb-1">
                    of {{ formatCurrency(project.budget) }} · {{ formatCurrency(budgetLeft) }} left
                  </p>
                </div>
                <UiProgressBar
                  :value="spentPercent" :aria-label="`${project.name} budget spent`"
                  :bar-class="budgetAtRisk ? 'bg-warning' : null"
                />
                <div
                  v-if="budgetAtRisk"
                  class="d-flex align-items-start gap-2 p-3 mt-3 rounded-md bg-warning-container text-on-warning-container"
                  role="status"
                >
                  <UiIconMaterial icon-code="&#xe002;" class="fs-lg lh-1" />
                  <p class="mb-0">
                    <span class="fw-700">{{ spentPercent }}% spent with {{ 100 - progress }}% of the work left.</span>
                    Review scope with {{ owner.name.split(' ')[0] }} before the next sprint.
                  </p>
                </div>
                <div
                  v-else-if="status === 'completed'"
                  class="d-flex align-items-start gap-2 p-3 mt-3 rounded-md bg-success-container text-on-success-container"
                >
                  <UiIconMaterial icon-code="&#xe86c;" class="fs-lg lh-1" />
                  <p class="mb-0">
                    Closed under budget with {{ formatCurrency(budgetLeft) }} to spare.
                  </p>
                </div>
                <p v-else class="caption text-muted mt-3 mb-0">
                  {{ spentPercent }}% of the budget is spent with {{ progress }}% of tasks done.
                </p>
              </template>
            </UiCard>
          </div>

          <div class="col-12 col-lg-7 mb-3">
            <UiCard title="Milestones" class="h-100 shadow-sm" variant="pane">
              <template #body>
                <UiTimeline :items="milestones" size="sm" />
              </template>
            </UiCard>
          </div>

          <div class="col-12 col-lg-5 mb-3">
            <UiAccordionGroup>
              <UiAccordion
                id="project-brief" v-model:open="briefOpen" name="project-notes" title="Brief"
                icon="&#xe873;"
              >
                <template #content>
                  <p class="mb-0">
                    {{ notes.brief }}
                  </p>
                </template>
              </UiAccordion>
              <UiAccordion id="project-scope" name="project-notes" title="Scope" icon="&#xe6b1;">
                <template #content>
                  <ul class="ps-3 mb-2">
                    <li v-for="item in notes.scope" :key="item" class="fs-xs mb-1">
                      {{ item }}
                    </li>
                  </ul>
                  <p class="caption text-muted mb-0">
                    Out of scope: {{ notes.outOfScope }}
                  </p>
                </template>
              </UiAccordion>
              <UiAccordion
                id="project-risks" name="project-notes" :title="`Risks · ${notes.risks.length}`"
                icon="&#xe002;" icon-class="text-warning"
              >
                <template #content>
                  <ul class="ps-3 mb-0">
                    <li v-for="item in notes.risks" :key="item" class="fs-xs mb-1">
                      {{ item }}
                    </li>
                  </ul>
                </template>
              </UiAccordion>
            </UiAccordionGroup>
          </div>
        </div>
      </section>

      <!-- Tasks -->
      <section v-show="activeTab === 'tasks'" id="project-panel-tasks" role="tabpanel" aria-labelledby="tab-tasks">
        <UiCard v-if="!taskGroups.length" variant="pane" class="shadow-sm">
          <template #body>
            <UiEmpty
              title="No tasks yet"
              :subtitle="`Tasks you add to ${project.name} show up here, grouped by status.`"
            />
          </template>
        </UiCard>

        <div v-for="group in taskGroups" :key="group.status" class="mb-4">
          <div class="d-flex align-items-center gap-2 mb-2">
            <UiBadge
              :text="taskStatusMeta[group.status].label" :variant="tonal(taskStatusMeta[group.status].color)"
              size="sm"
            />
            <span class="caption text-muted tabular-numbers">{{ group.items.length }}</span>
          </div>
          <UiListGroup>
            <TransitionGroup name="list">
              <UiListItem
                v-for="task in group.items" :key="task.id" :title="task.title"
                :text="`${memberById(task.assigneeId).name} · Due ${task.due}`"
                :custom-class="{ 'opacity-70': task.status === 'done' }" has-actions
              >
                <template #media>
                  <UiInputCheck
                    :id="`task-${task.id}`" :model-value="task.status === 'done'"
                    :label="`Mark ${task.title} as done`" hide-label @update:model-value="toggleTask(task, $event)"
                  />
                </template>
                <template #list-action>
                  <div class="d-flex align-items-center gap-2">
                    <UiBadge
                      v-if="task.overdue && task.status !== 'done'" text="Overdue" variant="danger"
                      icon-code="&#xe8b5;" size="sm"
                    />
                    <UiBadge
                      :text="priorityMeta[task.priority].label" :variant="tonal(priorityMeta[task.priority].color)"
                      size="sm"
                    />
                    <UiTooltip :text="`Assigned to ${memberById(task.assigneeId).name}`">
                      <UiAvatar v-bind="avatarOf(memberById(task.assigneeId))" size="sm" />
                    </UiTooltip>
                  </div>
                </template>
              </UiListItem>
            </TransitionGroup>
          </UiListGroup>
        </div>
      </section>

      <!-- Files -->
      <section v-show="activeTab === 'files'" id="project-panel-files" role="tabpanel" aria-labelledby="tab-files">
        <UiInputFile
          id="project-upload" :model-value="pendingFile" label="Upload a file" hide-label
          input-label="Drop a file here or click to browse · up to 25 MB" size="lg" class="mb-4"
          @update:model-value="onFileSelected"
        />

        <div class="d-flex align-items-center justify-content-between mb-2">
          <p class="subtitle-1 fw-700 mb-0">
            Shared files
          </p>
          <span class="caption text-muted">{{ fileList.length }} files</span>
        </div>
        <UiListGroup>
          <TransitionGroup name="list">
            <UiListItem
              v-for="upload in uploading" :key="upload.id" :title="upload.name"
              :text="`Uploading · ${upload.size}`" has-actions
            >
              <template #media>
                <span class="d-inline-flex p-2 rounded-md bg-muted-container text-on-muted-container">
                  <UiProgressSpinner size="1.25rem" />
                </span>
              </template>
            </UiListItem>
            <UiListItem
              v-for="file in fileList" :key="file.id" :title="file.name"
              :text="`${file.size} · ${memberById(file.ownerId).name} · ${file.updated}`"
              :icon="fileTypeMeta[file.type].icon"
              :custom-icon-wrapper-class="`bg-${fileTypeMeta[file.type].color}-container`"
              :custom-icon-class="`text-on-${fileTypeMeta[file.type].color}-container`" has-actions
            >
              <template #list-action>
                <UiButtonTooltip
                  variant="text" icon icon-variant="compact" size="sm"
                  :tooltip-text="`Download ${file.name}`" @click="downloadFile(file)"
                >
                  <template #icon>
                    <UiIconMaterial icon-code="&#xf090;" />
                  </template>
                </UiButtonTooltip>
              </template>
            </UiListItem>
          </TransitionGroup>
        </UiListGroup>
      </section>

      <!-- Activity -->
      <section
        v-show="activeTab === 'activity'" id="project-panel-activity" role="tabpanel"
        aria-labelledby="tab-activity"
      >
        <UiCard variant="pane" class="shadow-sm">
          <template #body>
            <UiTimeline :items="activityItems" />
          </template>
        </UiCard>
      </section>
    </template>

    <!-- Unknown project -->
    <UiCard v-else class="mt-5 shadow-sm" variant="pane">
      <template #body>
        <UiEmpty
          title="Project not found" subtitle="It may have been archived, or the link is missing a character."
          use-custom-icon icon-code="&#xe2c7;"
        >
          <template #action>
            <UiButton :as="NuxtLink" to="/projects" text="Back to projects" variant="filled" color="primary">
              <template #icon>
                <UiIconMaterial icon-code="&#xe5c4;" />
              </template>
            </UiButton>
          </template>
        </UiEmpty>
      </template>
    </UiCard>
  </div>
</template>

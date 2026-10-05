<script setup lang="ts">
import type { IAvatarProps, IChipOption, IDatatableColumn, IDialogDisplay, ISegmentedTab, IStepItem } from '@colorffy/ui'
import type { DirectoryPerson } from '~/utils/directory'
import type { Intent, Member, Project, ProjectStatus } from '~/utils/workspace'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Projects' })

/** Data */
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const STATUS_ORDER: ProjectStatus[] = ['planning', 'on-track', 'at-risk', 'off-track', 'completed']
const PRIORITY_ORDER = ['low', 'medium', 'high', 'urgent']
const portfolios = ['Product launches', 'Growth', 'Platform']
const viewTabs: ISegmentedTab[] = [
  { id: 'grid', label: 'Grid' },
  { id: 'list', label: 'List' }
]
const statusOptions: IChipOption[] = [
  { id: 'all', text: 'All' },
  ...STATUS_ORDER.map(status => ({ id: status, text: statusMeta[status].label }))
]
const sortOptions = [
  { label: 'Sort by due date', value: 'due' },
  { label: 'Sort by progress', value: 'progress' },
  { label: 'Sort by name', value: 'name' }
]
const columns: IDatatableColumn[] = [
  { key: 'name', label: 'Name' },
  { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status' },
  { key: 'priority', label: 'Priority' },
  { key: 'progress', label: 'Progress' },
  { key: 'budget', label: 'Budget', align: 'end' },
  { key: 'due', label: 'Due', align: 'end' },
  { key: 'actions', label: 'Actions', sortable: false, align: 'end' }
]
const wizardSteps: IStepItem[] = [
  { id: 'details', label: 'Details', description: 'Name, color and dates' },
  { id: 'team', label: 'Team', description: 'Members and lead' },
  { id: 'review', label: 'Review', description: 'Check and create' }
]
const visibilityOptions = [
  { label: 'Workspace · everyone in Orbit can find and join it', value: 'workspace' },
  { label: 'Private · only the people you add can see it', value: 'private' }
]
const items = ref<Project[]>(projects.map(project => ({ ...project })))
const isLoading = ref(true)
const view = ref('grid')
const search = ref('')
const statusFilter = ref('all')
const onlyMine = ref(false)
const sortKey = ref<string>('due')
const wizardRef = ref<IDialogDisplay | null>(null)
const wizardStep = ref('details')
const stepTransition = ref('slide-start')
const showErrors = ref(false)
const creating = ref(false)
const draft = reactive({ name: '', description: '', client: null as string | null, labels: [] as string[], visibility: 'workspace', color: '#5b5bd6', start: null as Date | null, due: null as Date | null, leadId: currentUser.id, stakeholderIds: [] as string[] })
const labelOptions = ['Customer', 'Design', 'Engineering', 'Internal', 'Launch', 'Marketing', 'Q4', 'Research']
const team = reactive<Record<string, boolean>>(Object.fromEntries(members.map(member => [member.id, member.id === currentUser.id])))
const renameRef = ref<IDialogDisplay | null>(null)
const renameTarget = ref<Project | null>(null)
const renameValue = ref('')
const archiveRef = ref<IDialogDisplay | null>(null)
const archiveTarget = ref<Project | null>(null)
const archiving = ref(false)

/** Composables */
const route = useRoute()
const router = useRouter()
const { notify } = useNotify()
const { results: clientResults, loading: clientsLoading, search: searchClients } = useRemoteSearch(clients, name => name)
const { results: peopleResults, loading: peopleLoading, search: searchPeople } = useRemoteSearch(companyPeople, person => `${person.name} ${person.title}`)

/** Computed */
const needsAttention = computed(() => items.value.filter(p => p.status === 'at-risk' || p.status === 'off-track').length)
const completedCount = computed(() => items.value.filter(p => p.status === 'completed').length)
const headerSubtitle = computed(() => `${items.value.length} projects · ${needsAttention.value} need attention · ${completedCount.value} completed`)
const hasFilters = computed(() => search.value.trim() !== '' || statusFilter.value !== 'all' || onlyMine.value)
const filteredProjects = computed(() => {
  const query = search.value.trim().toLowerCase()
  const list = items.value.filter((project) => {
    const matchesStatus = statusFilter.value === 'all' || project.status === statusFilter.value
    const matchesMine = !onlyMine.value || project.ownerId === currentUser.id || project.memberIds.includes(currentUser.id)
    const matchesQuery = !query || `${project.name} ${project.key} ${project.description}`.toLowerCase().includes(query)
    return matchesStatus && matchesMine && matchesQuery
  })

  return list.sort((a, b) => {
    if (sortKey.value === 'progress')
      return b.progress - a.progress
    if (sortKey.value === 'name')
      return a.name.localeCompare(b.name)
    return dayValue(a.dueDate) - dayValue(b.dueDate)
  })
})
const tableRows = computed(() => filteredProjects.value.map(project => ({
  id: project.id,
  name: project.name,
  owner: memberById(project.ownerId).name,
  status: STATUS_ORDER.indexOf(project.status),
  priority: PRIORITY_ORDER.indexOf(project.priority),
  progress: project.progress,
  budget: project.budget,
  due: dayValue(project.dueDate),
  project
})))
const wizardIndex = computed(() => wizardSteps.findIndex(step => step.id === wizardStep.value))
const isLastStep = computed(() => wizardIndex.value === wizardSteps.length - 1)
const teamMembers = computed(() => members.filter(member => team[member.id]))
const nameErrors = computed(() => (showErrors.value && !draft.name.trim() ? ['Give the project a name to continue'] : []))
const dueErrors = computed(() => (draft.start && draft.due && draft.due < draft.start ? ['The due date has to come after the start date'] : []))
const visibilityLabel = computed(() => (draft.visibility === 'private' ? 'Private' : 'Workspace'))

/** Methods */
// Early-year dates belong to next year
function dayValue(date: string): number {
  const [month = 'Jan', day = '1'] = date.split(' ')
  const index = MONTHS.indexOf(month)
  return ((index < 5 ? 12 : 0) + index) * 31 + Number(day)
}
function tonal(color: Intent): string {
  return color === 'muted' ? 'tonal tonal-default' : `tonal tonal-${color}`
}
function avatarOf(member: Member): IAvatarProps {
  if (member.avatar)
    return { src: member.avatar, alt: member.name }
  return { initials: member.initials, alt: member.name, color: member.color === 'muted' ? 'neutral' : member.color }
}
function teamAvatars(project: Project): IAvatarProps[] {
  return project.memberIds.map(id => avatarOf(memberById(id)))
}
function formatDate(value: Date): string {
  return value.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}
function onStatusChange(value: string | string[] | null) {
  statusFilter.value = typeof value === 'string' ? value : 'all'
}
function clearFilters() {
  search.value = ''
  statusFilter.value = 'all'
  onlyMine.value = false
}
function exportProjects() {
  notify('Export started', `We'll email projects.csv to ${currentUser.email} in a minute.`, 'info')
}
function resetWizard() {
  Object.assign(draft, { name: '', description: '', client: null, labels: [], visibility: 'workspace', color: '#5b5bd6', start: null, due: null, leadId: currentUser.id, stakeholderIds: [] })
  members.forEach((member) => {
    team[member.id] = member.id === currentUser.id
  })
  wizardStep.value = 'details'
  showErrors.value = false
}
function openWizard() {
  resetWizard()
  wizardRef.value?.showDialog()
}
function closeWizard() {
  wizardRef.value?.closeDialog()
}
function goBack() {
  const previous = wizardSteps[wizardIndex.value - 1]
  if (previous)
    wizardStep.value = previous.id
}
function goNext() {
  if (wizardStep.value === 'details' && (!draft.name.trim() || dueErrors.value.length)) {
    showErrors.value = true
    return
  }
  const next = wizardSteps[wizardIndex.value + 1]
  if (next)
    wizardStep.value = next.id
}
function createProject() {
  creating.value = true
  setTimeout(() => {
    creating.value = false
    closeWizard()
    notify('Project created', `${draft.name.trim()} is ready. Add the first tasks or invite the rest of the team.`, 'success')
  }, 700)
}
function openFromQuery() {
  if (route.query.new !== '1')
    return
  openWizard()
  const { new: _new, ...query } = route.query
  router.replace({ query })
}
function openRename(project: Project) {
  renameTarget.value = project
  renameValue.value = project.name
  renameRef.value?.showDialog()
}
function saveRename() {
  const name = renameValue.value.trim()
  const target = items.value.find(project => project.id === renameTarget.value?.id)
  if (!name || !target)
    return
  target.name = name
  renameRef.value?.closeDialog()
  notify('Project renamed', `It now shows up as ${name} everywhere in Orbit.`, 'success')
}
function duplicateProject(project: Project) {
  notify('Duplicating project', `${project.name} (copy) will appear in Planning once its ${project.tasksTotal} tasks are copied.`, 'info')
}
function moveProject(project: Project, portfolio: string) {
  notify(`Moved to ${portfolio}`, `${project.name} now lives in the ${portfolio} portfolio.`, 'info')
}
function confirmArchive(project: Project) {
  archiveTarget.value = project
  archiveRef.value?.showDialog()
}
function archiveProject() {
  const target = archiveTarget.value
  if (!target)
    return
  archiving.value = true
  setTimeout(() => {
    items.value = items.value.filter(project => project.id !== target.id)
    archiving.value = false
    archiveRef.value?.closeDialog()
    notify('Project archived', `${target.name} moved to the archive. Restore it from Settings within 30 days.`, 'success')
  }, 600)
}

/** Watchers */
watch(teamMembers, (team) => {
  if (!team.some(member => member.id === draft.leadId))
    draft.leadId = currentUser.id
})
watch(() => route.query.new, openFromQuery)
watch(wizardIndex, (next, previous) => {
  stepTransition.value = next > previous ? 'slide-start' : 'slide-end'
})

/** Lifecycle */
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 800)
  openFromQuery()
})
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Header -->
    <UiHeaderContent title="Projects" :subtitle="headerSubtitle">
      <template #actions>
        <UiButtonGroup>
          <UiButton text="Export" variant="outline" @click="exportProjects">
            <template #icon>
              <UiIconMaterial icon-code="&#xf090;" />
            </template>
          </UiButton>
          <UiButton text="New project" variant="filled" color="primary" @click="openWizard">
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiButton>
        </UiButtonGroup>
      </template>
    </UiHeaderContent>

    <!-- Toolbar -->
    <div class="d-flex flex-wrap align-items-start gap-2">
      <UiInputSearch
        id="project-search"
        v-model="search"
        label="Search projects"
        hide-label
        placeholder="Search by name, key or description"
        class="flex-grow-1 mb-0"
      />
      <UiInputSelect
        id="project-sort"
        v-model="sortKey"
        label="Sort projects"
        hide-label
        placeholder="Sort by"
        :options="sortOptions"
        option-label="label"
        option-value="value"
      />
      <UiSegmentedControls v-model:active-tab="view" :tabs="viewTabs" />
    </div>

    <div class="d-flex flex-wrap align-items-center gap-2 mb-4">
      <UiChipGroup
        :options="statusOptions"
        :model-value="statusFilter"
        aria-label="Filter by status"
        @update:model-value="onStatusChange"
      />
      <span class="text-muted" aria-hidden="true">·</span>
      <UiChip
        text="My projects"
        icon-code="&#xe7fd;"
        color="secondary"
        :selected="onlyMine"
        @click="onlyMine = !onlyMine"
      />
    </div>

    <Transition name="fade" mode="out-in">
      <!-- Loading -->
      <UiGridSkeleton
        v-if="isLoading && view === 'grid'"
        :skeleton-grid-items="6"
        grid-layout-classes="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-xl-3 gap-3"
        card-variant="outline"
        :show-footer="false"
        aria-label="Loading projects"
      />

      <!-- No results -->
      <UiCard v-else-if="!filteredProjects.length" variant="pane" class="shadow-sm">
        <template #body>
          <UiEmpty
            :title="hasFilters ? 'No projects match these filters' : 'No projects yet'"
            :subtitle="hasFilters ? 'Try another status, or search for a project key like WEB or MOB.' : 'Create a project to start planning work with your team.'"
          >
            <template #action>
              <UiButton v-if="hasFilters" text="Clear filters" variant="outline" @click="clearFilters" />
              <UiButton v-else text="New project" variant="filled" color="primary" @click="openWizard" />
            </template>
          </UiEmpty>
        </template>
      </UiCard>

      <!-- Grid view -->
      <div v-else-if="view === 'grid'" class="d-grid grid-repeat-cols-1 grid-repeat-cols-md-2 grid-repeat-cols-xl-3 gap-3">
        <UiCard
          v-for="project in filteredProjects"
          :key="project.id"
          :as="NuxtLink"
          :to="`/projects/${project.id}`"

          variant="pane"
          class="shadow-sm"
        >
          <template #body>
            <div class="d-flex align-items-start justify-content-between gap-3 mb-3">
              <span class="d-inline-flex p-2 rounded-md" :class="`bg-${project.color}-container text-on-${project.color}-container`">
                <UiIconMaterial :icon-code="project.icon" class="fs-lg lh-1" />
              </span>
              <UiBadge
                :text="statusMeta[project.status].label"
                :variant="tonal(statusMeta[project.status].color)"
                :icon-code="statusMeta[project.status].icon"
                size="sm"
              />
            </div>
            <p class="subtitle-1 fw-700 mb-1">
              {{ project.name }}
              <span class="caption text-muted fw-500 ms-1">{{ project.key }}</span>
            </p>
            <p class="subtitle-2 text-muted mb-3">
              {{ project.description }}
            </p>
            <div class="d-flex justify-content-between caption mb-1">
              <span class="text-muted">{{ project.tasksDone }} of {{ project.tasksTotal }} tasks</span>
              <span class="fw-600 tabular-numbers">{{ project.progress }}%</span>
            </div>
            <UiProgressBar
              :value="project.progress"
              size="sm"
              :aria-label="`${project.name} progress`"
              :bar-class="project.status === 'completed' ? 'bg-success' : null"
            />
          </template>
          <template #footer>
            <div class="d-flex align-items-center justify-content-between gap-2">
              <span class="d-inline-flex align-items-center gap-1 caption" :class="project.status === 'off-track' ? 'text-danger-emphasis fw-600' : 'text-muted'">
                <UiIconMaterial icon-code="&#xe935;" />
                {{ project.status === 'completed' ? 'Shipped' : 'Due' }} {{ project.dueDate }}
              </span>
              <UiAvatarGroup :avatars="teamAvatars(project)" :max="3" size="sm" />
            </div>
          </template>
        </UiCard>
      </div>

      <!-- List view -->
      <UiCard v-else variant="pane" class="shadow-sm">
        <template #body>
          <UiDatatable
            :columns="columns"
            :items="tableRows"
            :is-loading="isLoading"
            :skeleton-rows="6"
            row-key="id"
            column-manager
            column-manager-tooltip="Choose columns"
            caption="Projects in the Orbit product workspace"
          >
            <template #controls>
              <span class="caption text-muted">{{ filteredProjects.length }} of {{ items.length }} projects</span>
            </template>

            <template #cell-name="{ item }">
              <NuxtLink :to="`/projects/${item.id}`" class="d-inline-flex align-items-center gap-2 text-on-body">
                <span class="d-inline-flex p-1 rounded-sm" :class="`bg-${item.project.color}-container text-on-${item.project.color}-container`">
                  <UiIconMaterial :icon-code="item.project.icon" class="fs-sm lh-1" />
                </span>
                <span class="fw-600 text-nowrap">{{ item.name }}</span>
              </NuxtLink>
            </template>

            <template #cell-owner="{ item }">
              <span class="d-inline-flex align-items-center gap-2 text-nowrap">
                <UiAvatar v-bind="avatarOf(memberById(item.project.ownerId))" size="sm" />
                {{ item.owner }}
              </span>
            </template>

            <template #cell-status="{ item }">
              <UiBadge
                :text="statusMeta[item.project.status as ProjectStatus].label"
                :variant="tonal(statusMeta[item.project.status as ProjectStatus].color)"
                :icon-code="statusMeta[item.project.status as ProjectStatus].icon"
                size="sm"
              />
            </template>

            <template #cell-priority="{ item }">
              <UiBadge
                :text="priorityMeta[item.project.priority as Project['priority']].label"
                :variant="item.project.priority === 'urgent' ? 'danger' : tonal(priorityMeta[item.project.priority as Project['priority']].color)"
                size="sm"
              />
            </template>

            <template #cell-progress="{ item }">
              <div class="d-flex align-items-center gap-2 w-fixed" style="--cffy-w-fixed: 9rem;">
                <UiProgressBar :value="item.progress" size="sm" class="flex-grow-1" :aria-label="`${item.name} progress`" />
                <span class="caption tabular-numbers">{{ item.progress }}%</span>
              </div>
            </template>

            <template #cell-budget="{ item }">
              <span class="d-block tabular-numbers fw-600">{{ formatCurrency(item.budget) }}</span>
              <span class="caption text-muted text-nowrap">{{ formatCurrency(item.project.spent) }} spent</span>
            </template>

            <template #cell-due="{ item }">
              <span class="text-nowrap" :class="{ 'text-danger-emphasis fw-600': item.project.status === 'off-track' }">
                {{ item.project.dueDate }}
              </span>
            </template>

            <template #cell-actions="{ item }">
              <UiButtonMenu
                :id="`project-actions-${item.id}`"
                variant="text"
                size="sm"
                icon
                icon-variant="compact"
                tooltip-text="Project actions"
                placement="bottom-end"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe5d3;" />
                </template>
                <template #menu>
                  <UiButtonMenuText :item-text="`${item.project.key} · ${item.name}`" />
                  <UiButtonMenuItem item-text="View" icon="&#xe8f4;" @click="navigateTo(`/projects/${item.id}`)" />
                  <UiButtonMenuItem item-text="Rename" icon="&#xe3c9;" shortcut="R" @click="openRename(item.project)" />
                  <UiButtonMenuItem item-text="Duplicate" icon="&#xe14d;" shortcut="⌘D" @click="duplicateProject(item.project)" />
                  <UiButtonMenuSubmenu item-text="Move to" icon="&#xe2c8;" icon-trailing="&#xe5cc;" placement="left-start">
                    <UiButtonMenuItem
                      v-for="portfolio in portfolios"
                      :key="portfolio"

                      :item-text="portfolio"
                      @click="moveProject(item.project, portfolio)"
                    />
                  </UiButtonMenuSubmenu>
                  <UiButtonMenuDivider />
                  <UiButtonMenuItem item-text="Archive" icon="&#xe149;" is-destructive @click="confirmArchive(item.project)" />
                </template>
              </UiButtonMenu>
            </template>
          </UiDatatable>
        </template>
      </UiCard>
    </Transition>

    <!-- New project wizard -->
    <UiModal ref="wizardRef" size="md" :close-on-click-outside="false">
      <template #header>
        <div>
          <p class="dialog-title">
            New project
          </p>
          <p class="dialog-subtitle">
            Step {{ wizardIndex + 1 }} of {{ wizardSteps.length }} · {{ wizardSteps[wizardIndex]?.description }}
          </p>
        </div>
        <UiButton variant="text" icon icon-variant="compact" aria-label="Close" @click="closeWizard">
          <template #icon>
            <UiIconMaterial icon-code="&#xe5cd;" />
          </template>
        </UiButton>
      </template>

      <template #body>
        <UiStepper
          v-model:active-step="wizardStep"
          :steps="wizardSteps"
          linear
          class="mb-4"
        />

        <Transition :name="stepTransition" mode="out-in">
          <!-- Details -->
          <div v-if="wizardStep === 'details'">
            <UiInputText
              id="new-project-name"
              v-model="draft.name"
              label="Project name"
              placeholder="Customer portal"
              maxlength="60"
              required
              autofocus
              :error-messages="nameErrors"
            />
            <UiInputTextarea
              id="new-project-description"
              v-model="draft.description"
              label="Description"
              placeholder="What will this project ship, and why now?"
              :rows="3"
              maxlength="280"
              optional-label
            />
            <UiInputCombobox
              id="new-project-client"
              v-model="draft.client"
              label="Client"
              placeholder="Search the CRM or type a new client"
              :options="clientResults"
              remote
              :loading="clientsLoading"
              free-text
              clearable
              optional-label
              @search="searchClients"
            />
            <UiInputMultiSelect
              id="new-project-labels"
              v-model="draft.labels"
              label="Labels"
              placeholder="Pick or create labels"
              :options="labelOptions"
              free-text
              :max="5"
              optional-label
            />
            <UiInputRadio
              id="new-project-visibility"
              v-model="draft.visibility"
              label="Visibility"
              :options="visibilityOptions"
              option-label="label"
              option-value="value"
              :inline="false"
            />
            <div class="row">
              <div class="col-12 col-sm-4">
                <UiInputColorPicker id="new-project-color" v-model="draft.color" label="Color" />
              </div>
              <div class="col-6 col-sm-4">
                <UiInputDate id="new-project-start" v-model="draft.start" label="Start date" clearable />
              </div>
              <div class="col-6 col-sm-4">
                <UiInputDate id="new-project-due" v-model="draft.due" label="Due date" :min="draft.start" :error-messages="dueErrors" clearable />
              </div>
            </div>
          </div>

          <!-- Team -->
          <div v-else-if="wizardStep === 'team'">
            <p class="subtitle-2 text-muted mb-2">
              {{ teamMembers.length }} of {{ members.length }} people added. Guests only see this project.
            </p>
            <UiListGroup variant="flush" size="sm" class="mb-3">
              <UiListItem
                v-for="member in members"
                :key="member.id"
                :title="member.id === currentUser.id ? `${member.name} (you)` : member.name"
                :text="member.status === 'pending' ? `${member.title} · Invite pending` : `${member.title} · ${member.role}`"
                :disabled="member.status === 'pending'"
                has-actions
              >
                <template #media>
                  <UiAvatar v-bind="avatarOf(member)" size="navbar" />
                </template>
                <template #list-action>
                  <UiInputCheck
                    :id="`new-project-member-${member.id}`"
                    v-model="team[member.id]"
                    :label="`Add ${member.name}`"
                    hide-label
                    :disabled="member.id === currentUser.id || member.status === 'pending'"
                  />
                </template>
              </UiListItem>
            </UiListGroup>
            <UiInputCombobox
              id="new-project-lead"
              v-model="draft.leadId"
              label="Project lead"
              placeholder="Search the team"
              :options="teamMembers"
              option-label="name"
              option-value="id"
              empty-text="Add them to the team first"
            >
              <template #option="{ option }">
                <UiAvatar v-bind="avatarOf(option as Member)" size="sm" />
                <span class="d-flex flex-column">
                  <span>{{ (option as Member).name }}</span>
                  <span class="caption text-muted">{{ (option as Member).title }}</span>
                </span>
              </template>
            </UiInputCombobox>
            <UiInputMultiSelect
              id="new-project-stakeholders"
              v-model="draft.stakeholderIds"
              label="Stakeholders"
              placeholder="Search the company directory"
              :options="peopleResults"
              option-label="name"
              option-value="id"
              remote
              :min-search-length="2"
              :loading="peopleLoading"
              optional-label
              @search="searchPeople"
            >
              <template #option="{ option }">
                <span class="d-flex flex-column">
                  <span>{{ (option as DirectoryPerson).name }}</span>
                  <span class="caption text-muted">{{ (option as DirectoryPerson).title }}</span>
                </span>
              </template>
            </UiInputMultiSelect>
          </div>

          <!-- Review -->
          <div v-else>
            <div class="d-flex align-items-center gap-3 p-3 rounded-lg bg-primary-container text-on-primary-container mb-3">
              <span class="d-inline-block p-3 rounded-md" :style="{ backgroundColor: draft.color }" aria-hidden="true" />
              <div>
                <p class="subtitle-1 fw-700 mb-0">
                  {{ draft.name || 'Untitled project' }}
                </p>
                <p class="caption mb-0">
                  {{ draft.description || 'No description yet' }}
                </p>
              </div>
            </div>
            <div class="d-grid grid-repeat-cols-2 gap-3">
              <div>
                <p class="overline text-muted mb-1">
                  Visibility
                </p>
                <p class="d-flex align-items-center gap-1 mb-0">
                  <UiIconMaterial :icon-code="draft.visibility === 'private' ? '&#xe897;' : '&#xe80b;'" />
                  {{ visibilityLabel }}
                </p>
              </div>
              <div>
                <p class="overline text-muted mb-1">
                  Dates
                </p>
                <p class="mb-0">
                  {{ draft.start ? formatDate(draft.start) : 'No start date' }} → {{ draft.due ? formatDate(draft.due) : 'No due date' }}
                </p>
              </div>
              <div>
                <p class="overline text-muted mb-1">
                  Lead
                </p>
                <p class="mb-0">
                  {{ memberById(draft.leadId).name }}
                </p>
              </div>
              <div>
                <p class="overline text-muted mb-1">
                  Team · {{ teamMembers.length }}
                </p>
                <UiAvatarGroup :avatars="teamMembers.map(avatarOf)" :max="5" size="sm" />
              </div>
              <div v-if="draft.client">
                <p class="overline text-muted mb-1">
                  Client
                </p>
                <p class="mb-0">
                  {{ draft.client }}
                </p>
              </div>
              <div v-if="draft.labels.length">
                <p class="overline text-muted mb-1">
                  Labels
                </p>
                <UiBadgeGroup>
                  <UiBadge v-for="tag in draft.labels" :key="tag" :text="tag" variant="tonal tonal-primary" size="sm" />
                </UiBadgeGroup>
              </div>
              <div v-if="draft.stakeholderIds.length">
                <p class="overline text-muted mb-1">
                  Stakeholders · {{ draft.stakeholderIds.length }}
                </p>
                <p class="mb-0">
                  {{ draft.stakeholderIds.map(id => personById(id)?.name).join(', ') }}
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </template>

      <template #footer>
        <UiButton v-if="wizardIndex > 0" text="Back" variant="text" @click="goBack" />
        <UiButton v-else text="Cancel" variant="text" @click="closeWizard" />
        <UiButton v-if="!isLastStep" text="Next" variant="filled" color="primary" icon-trailing @click="goNext">
          <template #icon>
            <UiIconMaterial icon-code="&#xe5c8;" />
          </template>
        </UiButton>
        <UiButton v-else text="Create project" variant="filled" color="primary" :loading="creating" @click="createProject" />
      </template>
    </UiModal>

    <!-- Rename -->
    <UiModal ref="renameRef" size="sm">
      <template #header>
        <p class="dialog-title">
          Rename project
        </p>
      </template>
      <template #body>
        <UiInputText
          id="rename-project"
          v-model="renameValue"
          label="Project name"
          maxlength="60"
          :error-messages="renameValue.trim() ? [] : ['A project needs a name']"
        />
      </template>
      <template #footer>
        <UiButton text="Cancel" variant="text" @click="renameRef?.closeDialog()" />
        <UiButton text="Save" variant="filled" color="primary" :disabled="!renameValue.trim()" @click="saveRename" />
      </template>
    </UiModal>

    <!-- Archive -->
    <UiConfirmModal
      ref="archiveRef"
      variant="danger"
      :title="`Archive ${archiveTarget?.name ?? 'project'}?`"
      message="Its tasks and files become read-only and it leaves every list. You can restore it from Settings for 30 days."
      confirm-label="Archive"
      cancel-label="Keep project"
      :is-loading="archiving"
      @confirm="archiveProject"
    />
  </div>
</template>

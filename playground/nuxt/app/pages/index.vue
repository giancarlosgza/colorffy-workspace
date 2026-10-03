<script setup lang="ts">
import type { IAvatarProps, ITabItem, ITimelineItem, ThemeColor } from '@colorffy/ui'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Home' })

const { notify } = useNotify()

/** Data */
const myTasks = ref<Task[]>(tasks.filter(task => task.assigneeId === currentUser.id).map(task => ({ ...task })))
const taskTab = ref('upcoming')
const activityLoading = ref(true)
const fabOpen = ref(false)
let draftCount = 0
let activityTimer: ReturnType<typeof setTimeout> | null = null

// Team tasks closed earlier this month
const completedEarlier = 23

const activeProjects = projects.filter(project => project.status !== 'completed')
const atRiskProjects = projects.filter(project => project.status === 'at-risk' || project.status === 'off-track')
const homeProjects = activeProjects.slice(0, 4)

const quickActions = [
  { id: 'task', label: 'New task', icon: '&#xe2e6;' },
  { id: 'project', label: 'New project', icon: '&#xe2cc;' },
  { id: 'invite', label: 'Invite teammate', icon: '&#xe7fe;' }
]

const quietSkeleton = { role: '', ariaLabel: '', ariaLive: 'off' } as const

const activityItems: ITimelineItem[] = activity.map(entry => ({
  id: entry.id,
  icon: entry.icon,
  time: entry.time,
  variant: themeColor(entry.color)
}))

/** Computed */
const openTasks = computed(() => myTasks.value.filter(task => task.status !== 'done'))
const upcomingTasks = computed(() => openTasks.value.filter(task => !task.overdue))
const overdueTasks = computed(() => openTasks.value.filter(task => task.overdue))
const completedTasks = computed(() => myTasks.value.filter(task => task.status === 'done'))
const dueTodayCount = computed(() => upcomingTasks.value.filter(task => task.due === 'Today').length)

const visibleTasks = computed(() => {
  if (taskTab.value === 'overdue')
    return overdueTasks.value
  if (taskTab.value === 'completed')
    return completedTasks.value
  return upcomingTasks.value
})

const summary = computed(() => {
  const today = dueTodayCount.value
  const late = overdueTasks.value.length
  const todayLabel = `${today} ${today === 1 ? 'task' : 'tasks'}`

  if (today && late)
    return `You have ${todayLabel} due today and ${late} overdue.`
  if (today)
    return `You have ${todayLabel} due today.`
  if (late)
    return `Nothing due today, but ${late} ${late === 1 ? 'task is' : 'tasks are'} overdue.`
  return 'Your day is clear. Nice work.'
})

const taskTabs = computed<ITabItem[]>(() => [
  { id: 'upcoming', label: 'Upcoming', panelId: 'my-tasks-panel', badge: countBadge(upcomingTasks.value.length, 'tonal tonal-primary') },
  { id: 'overdue', label: 'Overdue', panelId: 'my-tasks-panel', badge: countBadge(overdueTasks.value.length, 'danger') },
  { id: 'completed', label: 'Completed', panelId: 'my-tasks-panel', badge: countBadge(completedTasks.value.length, 'tonal tonal-success') }
])

const emptyTaskMessage = computed(() => {
  if (taskTab.value === 'overdue')
    return 'Nothing overdue. You are ahead of schedule.'
  if (taskTab.value === 'completed')
    return 'Tasks you check off show up here.'
  return 'No upcoming tasks. Enjoy the focus time.'
})

const stats = computed(() => [
  {
    id: 'active',
    label: 'Active projects',
    value: activeProjects.length,
    note: `${activeProjects.filter(project => project.status === 'planning').length} in planning`,
    icon: '&#xe2c7;',
    color: 'info'
  },
  {
    id: 'completed',
    label: 'Completed this month',
    value: completedEarlier + completedTasks.value.length,
    note: '+6 vs September',
    noteClass: 'text-success-emphasis fw-600',
    icon: '&#xe86c;',
    color: 'success'
  },
  {
    id: 'risk',
    label: 'At-risk projects',
    value: atRiskProjects.length,
    note: atRiskProjects.map(project => project.name).join(' · '),
    icon: '&#xe002;',
    color: 'warning',
    tooltip: 'Projects their owners marked at risk or off track'
  }
])

/** Lifecycle */
onMounted(() => {
  activityTimer = setTimeout(() => {
    activityLoading.value = false
  }, 800)
})
onBeforeUnmount(() => {
  if (activityTimer)
    clearTimeout(activityTimer)
})

/** Methods */
function themeColor(color: Intent): ThemeColor {
  return color === 'muted' ? 'neutral' : color
}
function tonalVariant(color: Intent): string {
  return color === 'muted' ? 'tonal tonal-default' : `tonal tonal-${color}`
}
function countBadge(count: number, variant: string): ITabItem['badge'] {
  return count ? { text: String(count), variant, pill: true } : null
}
function projectName(task: Task): string {
  return projectById(task.projectId)?.name ?? 'No project'
}
function dueLabel(task: Task): string {
  if (task.status === 'done')
    return 'Done'
  return task.overdue ? `Due ${task.due}` : task.due
}
function dueClass(task: Task): string {
  if (task.status === 'done')
    return 'text-muted'
  if (task.overdue)
    return 'text-danger-emphasis fw-700'
  return task.due === 'Today' ? 'text-warning-emphasis fw-600' : 'text-muted'
}
function avatarFor(member: Member): IAvatarProps {
  return member.avatar
    ? { src: member.avatar, alt: member.name }
    : { initials: member.initials, alt: member.name, color: themeColor(member.color) }
}
function memberNames(project: Project): string {
  return project.memberIds.map(id => memberById(id).name).join(', ')
}
function progressBarClass(project: Project): string | null {
  if (project.status === 'off-track')
    return 'bg-danger'
  return project.status === 'at-risk' ? 'bg-warning' : null
}
function projectRowClass(index: number): string {
  if (index === 0)
    return 'pb-3'
  return index === homeProjects.length - 1 ? 'border border-top pt-3' : 'border border-top py-3'
}
function describe(id: string) {
  const entry = activity.find(item => item.id === id)
  return {
    actor: entry ? memberById(entry.actorId).name : '',
    action: entry?.action ?? '',
    target: entry?.target ?? ''
  }
}
function toggleTask(task: Task, checked: string | boolean | null) {
  task.status = checked ? 'done' : 'todo'
  if (checked)
    notify('Task completed', `"${task.title}" moved to Completed.`, 'success')
  else
    notify('Task reopened', `"${task.title}" is back on your list.`, 'info')
}
function createTask() {
  draftCount += 1
  myTasks.value.unshift({
    id: `draft-${draftCount}`,
    title: draftCount === 1 ? 'Untitled task' : `Untitled task ${draftCount}`,
    projectId: '',
    assigneeId: currentUser.id,
    due: 'Today',
    status: 'todo',
    priority: 'medium'
  })
  taskTab.value = 'upcoming'
  notify('Task created', 'Added to Upcoming and due today. Give it a name when you are ready.', 'success')
}
function runQuickAction(id: string) {
  fabOpen.value = false
  if (id === 'task')
    createTask()
  else if (id === 'project')
    navigateTo('/projects?new=1')
  else
    navigateTo('/team')
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <!-- Greeting -->
    <UiHeaderContent
      headline="Saturday, October 3"
      :title="`Good morning, ${currentUser.name.split(' ')[0]}`"
      :subtitle="summary"
      size="md"
      hide-actions-when-narrow
      view-transition-name="page-title"
    >
      <template #actions>
        <UiButton :as="NuxtLink" to="/team" text="Invite" variant="outline" size="sm">
          <template #icon>
            <UiIconMaterial icon-code="&#xe7fe;" />
          </template>
        </UiButton>
        <UiButton text="New task" variant="filled" color="primary" size="sm" @on-click="createTask">
          <template #icon>
            <UiIconMaterial icon-code="&#xe145;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <!-- Stats -->
    <div class="row mt-section">
      <div class="col-6 col-xl-3 mb-3">
        <UiCard custom-class="bg-primary h-100">
          <template #body>
            <div class="text-on-primary">
              <div class="d-flex align-items-start justify-content-between gap-2 mb-3">
                <p class="caption fw-600 mb-0">
                  Tasks due this week
                </p>
                <UiIconMaterial icon-code="&#xe878;" class="icon-wrap icon-wrap-xs bg-primary-container text-on-primary-container" />
              </div>
              <p class="fs-3xl fw-800 lh-1 mb-2 tabular-numbers">
                {{ upcomingTasks.length }}
              </p>
              <p class="caption mb-0 opacity-80">
                {{ dueTodayCount }} due today · {{ overdueTasks.length }} overdue
              </p>
            </div>
          </template>
        </UiCard>
      </div>

      <div v-for="stat in stats" :key="stat.id" class="col-6 col-xl-3 mb-3">
        <UiCard variant="outline" custom-class="h-100">
          <template #body>
            <div class="d-flex align-items-start justify-content-between gap-2 mb-3">
              <div class="d-flex align-items-center gap-1">
                <p class="caption fw-600 text-muted mb-0">
                  {{ stat.label }}
                </p>
                <UiTooltip v-if="stat.tooltip" :text="stat.tooltip">
                  <UiButton
                    variant="text"
                    icon
                    icon-variant="compact-sm"
                    size="sm"
                    custom-class="text-neutral"
                    :aria-label="`About ${stat.label.toLowerCase()}`"
                  >
                    <template #icon>
                      <UiIconMaterial icon-code="&#xe88e;" />
                    </template>
                  </UiButton>
                </UiTooltip>
              </div>
              <UiIconMaterial
                :icon-code="stat.icon"
                class="icon-wrap icon-wrap-xs"
                :class="`bg-${stat.color}-container text-on-${stat.color}-container`"
              />
            </div>
            <p class="fs-3xl fw-800 lh-1 mb-2 tabular-numbers">
              {{ stat.value }}
            </p>
            <p class="caption mb-0 text-truncate" :class="stat.noteClass ?? 'text-muted'">
              {{ stat.note }}
            </p>
          </template>
        </UiCard>
      </div>
    </div>

    <div class="row">
      <!-- My tasks -->
      <div class="col-lg-7 mb-3">
        <UiCard variant="outline" custom-class="h-100">
          <template #header>
            <UiSubheadingContent as="h2" title="My tasks" gutter="none">
              <template #actions>
                <UiButton :as="NuxtLink" to="/projects" text="All tasks" variant="text" size="sm" />
              </template>
            </UiSubheadingContent>
          </template>
          <template #body>
            <UiTabs
              :tabs="taskTabs"
              :active-tab="taskTab"
              size="sm"
              @update-active-tab="taskTab = $event"
            />

            <div
              id="my-tasks-panel"
              role="tabpanel"
              :aria-labelledby="`tab-${taskTab}`"
              class="mt-2"
            >
              <UiListGroup v-if="visibleTasks.length" variant="flush">
                <UiListItem
                  v-for="task in visibleTasks"
                  :key="task.id"
                  :title="task.title"
                  :text="projectName(task)"
                  has-actions
                >
                  <template #media>
                    <div>
                      <UiInputCheck
                        :id="`task-${task.id}`"
                        :label="task.title"
                        :model-value="task.status === 'done'"
                        hide-label
                        @update:model-value="toggleTask(task, $event)"
                      />
                    </div>
                  </template>
                  <template #list-action>
                    <div class="d-flex align-items-center gap-2">
                      <span class="caption text-nowrap" :class="dueClass(task)">
                        {{ dueLabel(task) }}
                      </span>
                      <UiBadge
                        :text="priorityMeta[task.priority].label"
                        :variant="tonalVariant(priorityMeta[task.priority].color)"
                        size="sm"
                      />
                    </div>
                  </template>
                </UiListItem>
              </UiListGroup>

              <p v-else class="subtitle-2 text-muted text-center py-5 mb-0">
                {{ emptyTaskMessage }}
              </p>
            </div>
          </template>
        </UiCard>
      </div>

      <!-- Projects -->
      <div class="col-lg-5 mb-3">
        <UiCard variant="outline" custom-class="h-100">
          <template #header>
            <UiSubheadingContent as="h2" title="Projects" gutter="none">
              <template #actions>
                <UiButton :as="NuxtLink" to="/projects" text="All projects" variant="text" size="sm" />
              </template>
            </UiSubheadingContent>
          </template>
          <template #body>
            <div
              v-for="(project, index) in homeProjects"
              :key="project.id"
              :class="projectRowClass(index)"
            >
              <div class="d-flex align-items-center gap-3 mb-2">
                <UiIconMaterial
                  :icon-code="project.icon"
                  class="icon-wrap icon-wrap-xs"
                  :class="`bg-${project.color}-container text-on-${project.color}-container`"
                />
                <div class="flex-grow-1 overflow-hidden">
                  <p class="mb-0 text-truncate">
                    <NuxtLink :to="`/projects/${project.id}`" class="fw-600 text-on-body">
                      {{ project.name }}
                    </NuxtLink>
                  </p>
                  <p class="caption text-muted mb-0">
                    Due {{ project.dueDate }} · {{ project.tasksDone }}/{{ project.tasksTotal }} tasks
                  </p>
                </div>
                <UiBadge
                  :text="statusMeta[project.status].label"
                  :variant="tonalVariant(statusMeta[project.status].color)"
                  size="sm"
                />
              </div>
              <div class="d-flex align-items-center gap-3">
                <UiProgressBar
                  :value="project.progress"
                  :bar-class="progressBarClass(project)"
                  :aria-label="`${project.name} progress`"
                  size="sm"
                  class="flex-grow-1"
                />
                <span class="caption fw-600 tabular-numbers">{{ project.progress }}%</span>
                <UiTooltip :text="memberNames(project)">
                  <UiAvatarGroup :avatars="project.memberIds.map(id => avatarFor(memberById(id)))" :max="3" size="sm" />
                </UiTooltip>
              </div>
            </div>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Recent activity -->
    <UiCard variant="outline">
      <template #header>
        <UiSubheadingContent
          as="h2"
          title="Recent activity"
          subtitle="Updates from projects you follow"
          gutter="none"
        >
          <template #actions>
            <UiButton :as="NuxtLink" to="/inbox" text="Open inbox" variant="text" size="sm" />
          </template>
        </UiSubheadingContent>
      </template>
      <template #body>
        <div v-if="activityLoading" role="status" aria-label="Loading recent activity">
          <div v-for="row in 4" :key="row" class="d-flex align-items-center gap-3 mb-3">
            <UiBaseSkeleton variant="thumbnail" rounded v-bind="quietSkeleton" />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <UiBaseSkeleton :width="row % 2 ? '55%' : '40%'" v-bind="quietSkeleton" />
              <UiBaseSkeleton size="sm" width="5rem" v-bind="quietSkeleton" />
            </div>
          </div>
        </div>

        <UiTimeline v-else :items="activityItems">
          <template #item="{ item }">
            <div class="d-flex align-items-start justify-content-between gap-3">
              <p class="mb-0">
                <span class="fw-700">{{ describe(item.id).actor }}</span>
                {{ describe(item.id).action }}
                <span class="fw-600">{{ describe(item.id).target }}</span>
              </p>
              <span class="caption text-muted text-nowrap">{{ item.time }}</span>
            </div>
          </template>
        </UiTimeline>
      </template>
    </UiCard>

    <!-- Quick create -->
    <UiButtonFabGroup>
      <UiButton
        text="Create"
        variant="filled"
        color="primary"
        custom-class="btn-fab fab-mobile"
        :aria-label="fabOpen ? 'Close quick create' : 'Quick create'"
        :aria-expanded="fabOpen"
        @on-click="fabOpen = !fabOpen"
      >
        <template #icon>
          <UiIconMaterial :icon-code="fabOpen ? '&#xe5cd;' : '&#xe145;'" />
        </template>
      </UiButton>
      <template v-if="fabOpen">
        <UiButton
          v-for="action in quickActions"
          :key="action.id"
          :text="action.label"
          :aria-label="action.label"
          variant="tonal"
          color="primary"
          custom-class="btn-fab fab-mobile"
          @on-click="runQuickAction(action.id)"
        >
          <template #icon>
            <UiIconMaterial :icon-code="action.icon" />
          </template>
        </UiButton>
      </template>
    </UiButtonFabGroup>
  </div>
</template>

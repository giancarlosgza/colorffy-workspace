<script setup lang="ts">
import type { AvatarStatus, IAvatarProps, IDatePreset, IDateRange, ISegmentedTab, ThemeColor } from '@colorffy/ui'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Inbox' })

/** Interfaces */
type InboxItem = (typeof notifications)[number]
type FilterId = 'all' | 'mentions' | 'assigned' | 'unread'

/** Data */
const items = ref<InboxItem[]>(notifications.map(item => ({ ...item })))
const activeFilter = ref<FilterId>('all')
const selectedId = ref<string | null>(null)
const showDesktopTip = ref(true)
const billingProject = projectById('billing-migration')!
const snoozePresets: IDatePreset[] = [
  { label: 'Later today', value: () => atHour(0, Math.min(new Date().getHours() + 3, 23)) },
  { label: 'Tomorrow morning', value: () => atHour(1, 9) },
  { label: 'Next week', value: () => atHour((8 - new Date().getDay()) % 7 || 7, 9) }
]
const groupOrder: InboxItem['group'][] = ['Today', 'Yesterday', 'Earlier']
const typeMeta: Record<NotificationType, { label: string, color: Intent, icon: string }> = {
  mention: { label: 'Mention', color: 'accent', icon: '&#xe0e6;' },
  assigned: { label: 'Assigned', color: 'primary', icon: '&#xe7fe;' },
  comment: { label: 'Comment', color: 'info', icon: '&#xe0b9;' },
  status: { label: 'Status', color: 'warning', icon: '&#xe153;' },
  system: { label: 'Workspace', color: 'muted', icon: '&#xe88e;' }
}
const filters: { id: FilterId, label: string, empty: string, hint: string, icon: string }[] = [
  { id: 'all', label: 'All', empty: 'Inbox zero', hint: 'Archived notifications stay out of your way.', icon: '&#xe156;' },
  { id: 'mentions', label: 'Mentions', empty: 'No mentions', hint: 'When a teammate @mentions you, it lands here.', icon: '&#xe0e6;' },
  { id: 'assigned', label: 'Assigned', empty: 'Nothing assigned', hint: 'Tasks assigned to you will show up here.', icon: '&#xe7fe;' },
  { id: 'unread', label: 'Unread', empty: 'No unread notifications', hint: 'You have read everything in your inbox.', icon: '&#xe877;' }
]

/** Composables */
const { notify } = useNotify()

/** Computed */
const unreadCount = computed(() => items.value.filter(item => item.unread).length)
const currentFilter = computed(() => filters.find(filter => filter.id === activeFilter.value) ?? filters[0]!)
// The open item stays listed under Unread
const filtered = computed(() => items.value.filter(item => matches(item, activeFilter.value) || (activeFilter.value === 'unread' && item.id === selectedId.value)))
const groups = computed(() => groupOrder
  .map(label => ({ label, items: filtered.value.filter(item => item.group === label) }))
  .filter(group => group.items.length))
const filterTabs = computed<ISegmentedTab[]>(() => filters.map((filter) => {
  const count = items.value.filter(item => matches(item, filter.id)).length
  return {
    id: filter.id,
    label: filter.label,
    badge: count ? { text: String(count), variant: 'tonal tonal-primary', pill: true } : null
  }
}))
const selected = computed(() => items.value.find(item => item.id === selectedId.value) ?? null)
const selectedActor = computed(() => (selected.value ? memberById(selected.value.actorId) : null))
const selectedProject = computed(() => (selected.value?.projectId ? projectById(selected.value.projectId) : undefined))
const headerSubtitle = computed(() => (unreadCount.value
  ? `${unreadCount.value} unread · ${items.value.length} in your inbox`
  : `You're all caught up · ${items.value.length} in your inbox`))
const emptyDetail = computed(() => {
  if (!filtered.value.length)
    return { title: 'You\'re all caught up', subtitle: currentFilter.value.hint }
  if (!unreadCount.value)
    return { title: 'You\'re all caught up', subtitle: 'New mentions, assignments and status changes will show up here.' }
  return {
    title: 'Pick a notification',
    subtitle: `${unreadCount.value} unread ${unreadCount.value === 1 ? 'notification is' : 'notifications are'} waiting for you.`
  }
})

/** Methods */
function matches(item: InboxItem, filter: FilterId): boolean {
  if (filter === 'mentions')
    return item.type === 'mention'
  if (filter === 'assigned')
    return item.type === 'assigned'
  if (filter === 'unread')
    return item.unread
  return true
}
function themeColor(color: Intent): ThemeColor {
  return color === 'muted' ? 'neutral' : color
}
function containerClass(color: Intent): string {
  return `bg-${color}-container text-on-${color}-container`
}
function avatarFor(member: Member): IAvatarProps {
  return member.avatar
    ? { src: member.avatar, alt: member.name }
    : { initials: member.initials, alt: member.name, color: themeColor(member.color) }
}
function presence(member: Member): AvatarStatus {
  if (member.lastActive === 'Online' || member.lastActive.includes('min ago'))
    return 'online'
  return member.lastActive.includes('hour') ? 'away' : 'offline'
}
function listPresence(member: Member): AvatarStatus | null {
  const status = presence(member)
  return status === 'offline' ? null : status
}
function rowText(item: InboxItem): string {
  const project = item.projectId ? projectById(item.projectId)?.name : 'Workspace'
  return `${project} · ${item.time}`
}
function setFilter(id: string) {
  if (id === activeFilter.value)
    return

  activeFilter.value = id as FilterId
}
function select(item: InboxItem) {
  selectedId.value = item.id
  item.unread = false
}
function toggleRead() {
  if (selected.value)
    selected.value.unread = !selected.value.unread
}
function snooze(until: Date | IDateRange | null) {
  if (!selected.value || !(until instanceof Date))
    return

  const { id, title } = selected.value
  items.value = items.value.filter(item => item.id !== id)
  selectedId.value = null
  const when = until.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })
  notify('Notification snoozed', `"${title}" comes back ${when}.`, 'info')
}
function archive() {
  if (!selected.value)
    return

  const { id, title } = selected.value
  items.value = items.value.filter(item => item.id !== id)
  selectedId.value = null
  notify('Notification archived', `"${title}" moved to Archive.`, 'success')
}
function atHour(daysAhead: number, hour: number): Date {
  const today = new Date()
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysAhead, hour)
}
function openProject() {
  if (selectedProject.value)
    navigateTo(`/projects/${selectedProject.value.id}`)
}
function markAllRead() {
  const count = unreadCount.value
  items.value.forEach((item) => {
    item.unread = false
  })
  notify('All caught up', `Marked ${count} ${count === 1 ? 'notification' : 'notifications'} as read.`, 'success')
}
function enableDesktopNotifications() {
  showDesktopTip.value = false
  notify('Desktop notifications on', 'We will ping you for mentions and assignments.', 'info')
}
</script>

<template>
  <div class="container-fluid mt-3 mb-5">
    <UiHeaderContent title="Inbox" :subtitle="headerSubtitle" view-transition-name="page-title">
      <template #actions>
        <UiButtonGroup>
          <UiButton
            text="Mark all as read"
            variant="tonal"
            color="primary"
            size="sm"
            :disabled="!unreadCount"
            @click="markAllRead"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe877;" />
            </template>
          </UiButton>
          <UiButtonTooltip
            variant="text"
            icon
            size="sm"
            custom-class="text-neutral"
            tooltip-text="Notification settings"
            @click="navigateTo('/settings')"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe429;" />
            </template>
          </UiButtonTooltip>
        </UiButtonGroup>
      </template>
    </UiHeaderContent>

    <!-- Alerts -->
    <UiAlert
      type="tonal"
      variant="danger"
      :title="`${billingProject.name} is off track`"
      :message="`The provider sandbox is down until Friday, so the cutover moves one week. ${billingProject.tasksDone} of ${billingProject.tasksTotal} tasks done, due ${billingProject.dueDate}.`"
      class="mb-3"
    >
      <template #actions>
        <UiButton
          :as="NuxtLink"
          :to="`/projects/${billingProject.id}`"
          text="View project"
          variant="filled"
          color="danger"
          size="sm"
        />
      </template>
    </UiAlert>

    <Transition name="fade">
      <UiAlert
        v-if="showDesktopTip"
        type="banner"
        variant="info"
        title="Turn on desktop notifications"
        message="Get a ping for mentions and assignments, even when Orbit is in a background tab."
        dismissible
        close-label="Dismiss"
        class="mb-3"
        @dismiss="showDesktopTip = false"
      >
        <template #actions>
          <UiButton text="Turn on" variant="filled" color="primary" size="sm" @click="enableDesktopNotifications" />
        </template>
      </UiAlert>
    </Transition>

    <UiSegmentedControls :tabs="filterTabs" :active-tab="activeFilter" @update:active-tab="setFilter" />

    <div class="row">
      <!-- Notification list -->
      <div class="col-xl-5 col-xxl-4" :class="{ 'd-none d-xl-block': selected }">
        <UiPaneContent aria-label="Notifications" is-full-height custom-class="mb-3">
          <Transition name="fade" mode="out-in">
            <UiEmpty
              v-if="!filtered.length"
              key="empty"
              :title="currentFilter.empty"
              :subtitle="currentFilter.hint"
              use-custom-icon
              :icon-code="currentFilter.icon"
              custom-class="py-5"
            />

            <TransitionGroup v-else key="list" name="list" tag="div">
              <section
                v-for="group in groups"
                :key="group.label"
                class="mt-3"
                :aria-labelledby="`inbox-group-${group.label}`"
              >
                <p :id="`inbox-group-${group.label}`" class="overline text-muted mb-2">
                  {{ group.label }}
                </p>
                <UiListGroup is-interactive is-undecorated>
                  <TransitionGroup name="list">
                    <UiListItem
                      v-for="item in group.items"
                      :key="item.id"
                      :title="item.title"
                      :text="rowText(item)"
                      :active="item.id === selectedId"
                      :aria-current="item.id === selectedId ? 'true' : undefined"
                      has-actions
                      tabindex="0"
                      @click="select(item)"
                      @keydown.enter.prevent="select(item)"
                      @keydown.space.prevent="select(item)"
                    >
                      <template #media>
                        <UiIconMaterial
                          v-if="item.type === 'system'"
                          :icon-code="typeMeta.system.icon"
                          class="icon-wrap icon-wrap-xs"
                          :class="containerClass(typeMeta.system.color)"
                        />
                        <UiAvatar
                          v-else
                          v-bind="avatarFor(memberById(item.actorId))"
                          size="navbar"
                          :status="listPresence(memberById(item.actorId))"
                        />
                      </template>
                      <template #list-action>
                        <div class="d-flex align-items-center gap-2">
                          <span
                            class="d-none d-sm-inline-flex caption fw-600 rounded-sm px-2 py-1 text-nowrap"
                            :class="containerClass(typeMeta[item.type].color)"
                          >
                            {{ typeMeta[item.type].label }}
                          </span>
                          <UiBadge dot variant="primary" :class="{ 'visibility-hidden': !item.unread }" />
                          <span v-if="item.unread" class="visually-hidden">Unread</span>
                        </div>
                      </template>
                    </UiListItem>
                  </TransitionGroup>
                </UiListGroup>
              </section>
            </TransitionGroup>
          </Transition>
        </UiPaneContent>
      </div>

      <!-- Detail -->
      <div class="col-xl-7 col-xxl-8" :class="{ 'd-none d-xl-block': !selected }">
        <UiPaneContent aria-label="Notification details" is-full-height custom-class="mb-3">
          <Transition name="fade" mode="out-in">
            <article v-if="selected && selectedActor" :key="selected.id">
              <div class="d-flex align-items-center gap-2 mb-4">
                <UiButtonTooltip
                  class="d-xl-none"
                  variant="text"
                  icon
                  size="sm"
                  custom-class="text-neutral"
                  tooltip-text="Back to inbox"
                  @click="selectedId = null"
                >
                  <template #icon>
                    <UiIconMaterial icon-code="&#xe5c4;" />
                  </template>
                </UiButtonTooltip>
                <span class="d-inline-flex align-items-center gap-1 caption fw-600 rounded-sm px-2 py-1" :class="containerClass(typeMeta[selected.type].color)">
                  <UiIconMaterial :icon-code="typeMeta[selected.type].icon" class="fs-sm lh-1" />
                  {{ typeMeta[selected.type].label }}
                </span>
                <span class="caption text-muted">{{ selected.time }}</span>

                <div class="d-flex align-items-center gap-1 ms-auto">
                  <UiInputDate
                    id="inbox-snooze"
                    :model-value="null"
                    trigger="button"
                    label="Snooze until"
                    hide-label
                    placeholder="Snooze"
                    size="sm"
                    time
                    :minute-step="15"
                    :min="new Date()"
                    :presets="snoozePresets"
                    :labels="{ apply: 'Snooze' }"
                    class="mb-0"
                    @update:model-value="snooze"
                  />
                  <UiButtonTooltip
                    variant="text"
                    icon
                    size="sm"
                    custom-class="text-neutral"
                    :tooltip-text="selected.unread ? 'Mark as read' : 'Mark as unread'"
                    @click="toggleRead"
                  >
                    <template #icon>
                      <UiIconMaterial :icon-code="selected.unread ? '&#xe151;' : '&#xf18a;'" />
                    </template>
                  </UiButtonTooltip>
                  <UiButtonTooltip
                    variant="text"
                    icon
                    size="sm"
                    custom-class="text-neutral"
                    tooltip-text="Archive"
                    @click="archive"
                  >
                    <template #icon>
                      <UiIconMaterial icon-code="&#xe149;" />
                    </template>
                  </UiButtonTooltip>
                  <UiButtonTooltip
                    variant="text"
                    icon
                    size="sm"
                    custom-class="text-neutral"
                    tooltip-text="Open project"
                    :disabled="!selectedProject"
                    @click="openProject"
                  >
                    <template #icon>
                      <UiIconMaterial icon-code="&#xe89e;" />
                    </template>
                  </UiButtonTooltip>
                </div>
              </div>

              <div class="d-flex align-items-center gap-3 mb-3">
                <UiAvatar v-bind="avatarFor(selectedActor)" size="menu" :status="presence(selectedActor)" />
                <div>
                  <p class="fw-700 mb-0">
                    {{ selectedActor.name }}
                  </p>
                  <p class="caption text-muted mb-0">
                    {{ selectedActor.title }} · {{ selectedActor.lastActive }}
                  </p>
                </div>
              </div>

              <h2 class="fs-lg fw-700 mb-3">
                {{ selected.title }}
              </h2>
              <blockquote class="border border-md border-left border-primary ps-3 mb-4">
                <p class="fs-base mb-0">
                  {{ selected.body }}
                </p>
              </blockquote>

              <UiCard
                v-if="selectedProject"
                :as="NuxtLink"
                :to="`/projects/${selectedProject.id}`"

                variant="pane"
                class="shadow-sm"
              >
                <template #body>
                  <div class="d-flex align-items-center gap-3 mb-3">
                    <UiIconMaterial
                      :icon-code="selectedProject.icon"
                      class="icon-wrap icon-wrap-xs"
                      :class="containerClass(selectedProject.color)"
                    />
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="fw-700 mb-0 text-truncate">
                        {{ selectedProject.name }}
                      </p>
                      <p class="caption text-muted mb-0">
                        {{ selectedProject.key }} · Due {{ selectedProject.dueDate }} · {{ selectedProject.tasksDone }}/{{ selectedProject.tasksTotal }} tasks
                      </p>
                    </div>
                    <UiBadge
                      :text="statusMeta[selectedProject.status].label"
                      :variant="`tonal tonal-${statusMeta[selectedProject.status].color}`"
                      size="sm"
                    />
                  </div>
                  <UiProgressBar
                    :value="selectedProject.progress"
                    :aria-label="`${selectedProject.name} progress`"
                    size="sm"
                  />
                </template>
              </UiCard>

              <UiButton
                v-else
                :as="NuxtLink"
                to="/billing"
                text="Add payment method"
                variant="filled"
                color="primary"
                size="sm"
              >
                <template #icon>
                  <UiIconMaterial icon-code="&#xe870;" />
                </template>
              </UiButton>
            </article>

            <div v-else key="empty" class="d-flex justify-content-center py-5">
              <UiEmpty
                :title="emptyDetail.title"
                :subtitle="emptyDetail.subtitle"
                use-custom-icon
                icon-code="&#xe877;"
              >
                <template #action>
                  <UiButton
                    v-if="unreadCount && activeFilter !== 'unread'"
                    text="Show unread"
                    variant="tonal"
                    color="primary"
                    size="sm"
                    @click="setFilter('unread')"
                  />
                  <UiButton
                    v-else-if="!unreadCount"
                    :as="NuxtLink"
                    to="/"
                    text="Back to Home"
                    variant="tonal"
                    color="primary"
                    size="sm"
                  />
                </template>
              </UiEmpty>
            </div>
          </Transition>
        </UiPaneContent>
      </div>
    </div>
  </div>
</template>

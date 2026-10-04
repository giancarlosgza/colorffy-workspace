<script setup lang="ts">
import type { IChipOption, IconShape } from '@colorffy/ui'
import { NuxtLink } from '#components'

definePageMeta({ pageTitle: 'Help center' })

type CategoryId = 'getting-started' | 'projects' | 'billing' | 'integrations' | 'security'
type Tone = 'primary' | 'accent' | 'success' | 'info' | 'warning'
type SearchStatus = 'idle' | 'searching' | 'results'

interface Category {
  id: CategoryId
  title: string
  description: string
  articles: number
  tone: Tone
  shape: IconShape
}

interface Article {
  id: string
  title: string
  excerpt: string
  category: CategoryId
  readTime: string
  updated: string
  keywords: string[]
}

const route = useRoute()
const router = useRouter()

const categories: Category[] = [
  { id: 'getting-started', title: 'Getting started', description: 'Set up your workspace, invite your team and plan your first project in under ten minutes.', articles: 14, tone: 'primary', shape: 'star-1' },
  { id: 'projects', title: 'Projects & tasks', description: 'Boards, lists, timelines, dependencies and recurring tasks.', articles: 32, tone: 'accent', shape: 'blob-3' },
  { id: 'billing', title: 'Billing & plans', description: 'Plans, seats, invoices, taxes and payment methods.', articles: 11, tone: 'success', shape: 'circle-2' },
  { id: 'integrations', title: 'Integrations', description: 'Connect Slack, GitHub, Figma and 40 other tools.', articles: 26, tone: 'info', shape: 'shape-2' },
  { id: 'security', title: 'Security & admin', description: 'Single sign-on, two-factor, permissions and data export.', articles: 17, tone: 'warning', shape: 'lighting-1' }
]

const articles: Article[] = [
  { id: 'a1', title: 'Invite teammates and choose their role', excerpt: 'Send invites from the Team page, pick Admin or Member, and see how seats are counted on your plan.', category: 'getting-started', readTime: '3 min read', updated: 'Updated Sep 24', keywords: ['invite', 'teammates', 'members', 'role', 'seats'] },
  { id: 'a2', title: 'Give guests access to a single project', excerpt: 'Guests see only the projects you add them to. They can comment and finish tasks, and they don\'t use a seat.', category: 'security', readTime: '4 min read', updated: 'Updated Sep 18', keywords: ['guest', 'guests', 'access', 'client', 'external'] },
  { id: 'a3', title: 'Change your plan or billing cycle', excerpt: 'Move between Free, Pro and Business, or switch to yearly billing and save two months.', category: 'billing', readTime: '2 min read', updated: 'Updated Sep 30', keywords: ['plan', 'change', 'billing', 'upgrade', 'downgrade', 'yearly'] },
  { id: 'a4', title: 'Export your workspace data', excerpt: 'Download tasks as CSV or the whole workspace as JSON, including comments and links to attachments.', category: 'security', readTime: '3 min read', updated: 'Updated Aug 29', keywords: ['export', 'data', 'csv', 'json', 'backup', 'download'] },
  { id: 'a5', title: 'Set up SAML single sign-on', excerpt: 'Connect Okta, Microsoft Entra ID or Google Workspace and require SSO for every member.', category: 'security', readTime: '6 min read', updated: 'Updated Sep 12', keywords: ['sso', 'saml', 'okta', 'entra', 'google', 'login'] },
  { id: 'a6', title: 'Connect Slack to Orbit', excerpt: 'Get mentions and status changes as Slack messages, and turn any message into a task.', category: 'integrations', readTime: '3 min read', updated: 'Updated Sep 21', keywords: ['slack', 'notifications', 'channel', 'integration'] },
  { id: 'a7', title: 'Automate status changes with rules', excerpt: 'Move tasks, notify owners and flag projects when a due date slips, without writing code.', category: 'projects', readTime: '5 min read', updated: 'Updated Sep 27', keywords: ['automations', 'automation', 'rules', 'status', 'workflow'] },
  { id: 'a8', title: 'Create recurring tasks', excerpt: 'Repeat a task every week, month or sprint, and choose what happens to its subtasks.', category: 'projects', readTime: '2 min read', updated: 'Updated Sep 9', keywords: ['recurring', 'tasks', 'repeat', 'schedule'] },
  { id: 'a9', title: 'Download invoices and receipts', excerpt: 'Find every invoice on the Billing page, add your tax ID and send copies to your finance team.', category: 'billing', readTime: '2 min read', updated: 'Updated Oct 1', keywords: ['invoice', 'invoices', 'receipt', 'tax', 'vat', 'billing'] },
  { id: 'a10', title: 'Turn on two-factor authentication', excerpt: 'Add an authenticator app to your account and save recovery codes in case you lose your phone.', category: 'security', readTime: '3 min read', updated: 'Updated Sep 15', keywords: ['2fa', 'two-factor', 'authenticator', 'security', 'codes'] },
  { id: 'a11', title: 'Plan your first project', excerpt: 'Start from a template, set a due date and break the work into milestones your team can follow.', category: 'getting-started', readTime: '4 min read', updated: 'Updated Sep 20', keywords: ['project', 'first', 'template', 'create', 'milestones'] },
  { id: 'a12', title: 'Link GitHub pull requests to tasks', excerpt: 'Mention a task key like MOB-42 in a pull request and Orbit moves the task when it merges.', category: 'integrations', readTime: '4 min read', updated: 'Updated Sep 5', keywords: ['github', 'pull', 'request', 'code', 'integration'] }
]

const topics: IChipOption[] = [
  { id: 'invite', text: 'Invite teammates', iconCode: '&#xe7fe;' },
  { id: 'guests', text: 'Guest access', iconCode: '&#xe7ef;' },
  { id: 'automations', text: 'Automations', iconCode: '&#xea0b;' },
  { id: 'export', text: 'Export data', iconCode: '&#xe2c4;' },
  { id: 'sso', text: 'SAML SSO', iconCode: '&#xe0da;' }
]

const proPlan = plans.find(plan => plan.id === 'pro')!
const businessPlan = plans.find(plan => plan.id === 'business')!

const faqs = [
  {
    id: 'faq-invites',
    icon: '&#xe7fe;',
    title: 'How do I invite teammates to my workspace?',
    text: `Open Team, choose Invite member and enter one or more emails. Invites stay valid for 7 days and each accepted invite uses a seat. ${workspace.name} has ${workspace.seatsUsed} of ${workspace.seatsTotal} seats in use right now.`
  },
  {
    id: 'faq-guests',
    icon: '&#xe7ef;',
    title: 'What can guests see and do?',
    text: 'Guests only see the projects you add them to. They can comment, upload files and complete tasks assigned to them, but they can\'t create projects or browse the member list. Guests are free on Pro and Business.'
  },
  {
    id: 'faq-billing',
    icon: '&#xe870;',
    title: 'How does billing work when I add or remove members?',
    text: `Pro costs ${formatCurrency(proPlan.monthly)} per member each month, or ${formatCurrency(proPlan.yearly)} when billed yearly. New members are prorated for the days left in the period, and removed members turn into credit on your next invoice.`
  },
  {
    id: 'faq-export',
    icon: '&#xe2c4;',
    title: 'Can I export my data?',
    text: 'Yes. Owners and admins can export tasks as CSV or the whole workspace as JSON from Settings. We email you a download link within 15 minutes, and the link works for 24 hours.'
  },
  {
    id: 'faq-sso',
    icon: '&#xe0da;',
    title: 'Do you support single sign-on (SSO)?',
    text: `SAML single sign-on is included in ${businessPlan.name} at ${formatCurrency(businessPlan.monthly)} per member. It works with Okta, Microsoft Entra ID and Google Workspace, and you can require it for every member except the owner.`
  }
]

const loadingTitles = ['Searching articles…', 'Checking the changelog…', 'Ranking the best answers…']

const query = ref<string | null>('')
const selectedTopic = ref<string | null>(null)
const status = ref<SearchStatus>('idle')
const resultsLabel = ref('')
const results = ref<Article[]>([])
let searchTimer: ReturnType<typeof setTimeout> | undefined

function categoryById(id: CategoryId): Category {
  return categories.find(category => category.id === id) ?? categories[0]!
}

function rankArticles(text: string): Article[] {
  const words = text.toLowerCase().split(/[^a-z0-9-]+/).filter(word => word.length > 1)
  return articles
    .map((article, index) => {
      const haystack = `${article.title} ${article.keywords.join(' ')}`.toLowerCase()
      const score = words.filter(word => haystack.includes(word)).length
      return { article, score, index }
    })
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3)
    .map(item => item.article)
}

function startSearch(label: string, found: Article[]): void {
  clearTimeout(searchTimer)
  status.value = 'searching'
  resultsLabel.value = label
  searchTimer = setTimeout(() => {
    results.value = found
    status.value = 'results'
  }, 1500)
}

function clearTopicQuery(): void {
  if (route.query.topic)
    router.replace({ query: {} })
}

function submitSearch(): void {
  const text = String(query.value ?? '').trim()
  if (!text)
    return
  clearTopicQuery()
  selectedTopic.value = topics.find(topic => topic.text === text)?.id ?? null
  startSearch(`Top results for “${text}”`, rankArticles(text))
}

function pickTopic(value: string | string[] | null): void {
  const topic = topics.find(item => item.id === value)
  selectedTopic.value = topic?.id ?? null
  if (!topic) {
    clearSearch()
    return
  }
  clearTopicQuery()
  query.value = topic.text
  startSearch(`Top results for “${topic.text}”`, rankArticles(topic.text))
}

function openCategory(id: unknown): void {
  const category = categories.find(item => item.id === id)
  if (!category)
    return
  selectedTopic.value = null
  query.value = ''
  startSearch(`Top articles in ${category.title}`, articles.filter(article => article.category === category.id).slice(0, 3))
  document.getElementById('help-search')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function clearSearch(): void {
  clearTimeout(searchTimer)
  status.value = 'idle'
  results.value = []
  selectedTopic.value = null
  query.value = ''
  clearTopicQuery()
}

watch(() => route.query.topic, openCategory)

onMounted(() => openCategory(route.query.topic))

onBeforeUnmount(() => clearTimeout(searchTimer))
</script>

<template>
  <div>
    <div class="container mt-3 mb-5">
      <UiHeroContent
        headline="Orbit help center"
        title="How can we help?"
        subtitle="Guides and answers for everything in Orbit, from your first project to single sign-on."
        size="md"
        align="center"
        custom-class="pt-5 mb-4"
      />

      <form id="help-search" class="row mb-3" role="search" @submit.prevent="submitSearch">
        <div class="col-12 max-w-2xl mx-auto d-flex align-items-start gap-2">
          <UiInputSearch
            id="help-query"
            v-model="query"
            label="Search the help center"
            hide-label
            size="lg"
            rounded
            :maxlength="80"
            placeholder="Search for “guest access” or “export data”"
            class="flex-grow-1 mb-0"
          />
          <UiButton
            type="submit"
            text="Search"
            variant="filled"
            color="primary"
            size="lg"
            rounded
            :loading="status === 'searching'"
          />
        </div>
      </form>

      <div class="d-flex flex-wrap align-items-center justify-content-center gap-2 mb-5">
        <span class="caption text-muted">Popular topics</span>
        <UiChipGroup
          :model-value="selectedTopic"
          :options="topics"
          aria-label="Popular topics"
          @update:model-value="pickTopic"
        />
      </div>

      <!-- Search results -->
      <section v-if="status !== 'idle'" class="mb-5" aria-live="polite">
        <UiExpressiveLoading
          v-if="status === 'searching'"
          :title="loadingTitles"
          :interval="600"
          size="sm"
          aria-label="Searching the help center"
          custom-class="py-5"
        />
        <template v-else>
          <UiSubheadingContent
            as="h2"
            :title="resultsLabel"
            :subtitle="`${results.length} articles, ranked by how often teams open them.`"
            gutter="sm"
          >
            <template #actions>
              <UiChip
                text="Clear search"
                icon-code="&#xe5cd;"
                variant="elevated"
                @click="clearSearch"
              />
            </template>
          </UiSubheadingContent>
          <div class="d-grid grid-repeat-cols-1 grid-repeat-cols-md-3 gap-4">
            <UiCard
              v-for="article in results"
              :key="article.id"

              variant="pane"
              class="shadow-sm"
            >
              <template #header>
                <UiBadge
                  :text="categoryById(article.category).title"
                  :variant="`tonal tonal-${categoryById(article.category).tone}`"
                  size="sm"
                />
              </template>
              <template #body>
                <p class="fw-700 fs-sm mb-2">
                  {{ article.title }}
                </p>
                <p class="caption text-muted mb-0">
                  {{ article.excerpt }}
                </p>
              </template>
              <template #footer>
                <p class="caption text-muted mb-0">
                  {{ article.readTime }} · {{ article.updated }}
                </p>
              </template>
            </UiCard>
          </div>
        </template>
      </section>

      <!-- Categories -->
      <UiSubheadingContent
        as="h2"
        title="Browse by topic"
        subtitle="Step-by-step guides written by the Orbit support team."
      />
      <div class="d-grid grid-repeat-cols-1 grid-repeat-cols-sm-2 grid-repeat-cols-lg-3 gap-4 mb-5">
        <UiCard
          v-for="(category, index) in categories"
          :key="category.id"
          :as="NuxtLink"
          :to="{ query: { topic: category.id } }"
          :custom-class="index === 0 ? 'grid-span-col-sm-2' : null"

          variant="pane"
          class="shadow-sm"
        >
          <template #body>
            <div class="d-flex align-items-start gap-3">
              <span class="d-inline-flex flex-shrink-0 p-2 rounded-lg" :class="`bg-${category.tone}-container`">
                <UiIconShapes :shape="category.shape" :size="index === 0 ? 'md' : 'sm'" />
              </span>
              <span class="d-grid gap-1">
                <span class="d-flex flex-wrap align-items-center gap-2">
                  <span class="fw-700 fs-sm">{{ category.title }}</span>
                  <UiBadge v-if="index === 0" text="Start here" variant="tonal tonal-primary" size="sm" />
                </span>
                <span class="caption text-muted">{{ category.description }}</span>
                <span class="caption fw-700" :class="`text-${category.tone}-emphasis`">{{ category.articles }} articles</span>
              </span>
            </div>
          </template>
        </UiCard>
      </div>

      <!-- FAQ -->
      <div class="row mb-5">
        <div class="col-12 col-lg-4">
          <UiSubheadingContent
            as="h2"
            title="Frequently asked questions"
            subtitle="Short answers to what product teams ask us most."
          />
        </div>
        <div class="col-12 col-lg-8">
          <UiAccordionGroup>
            <UiAccordion
              v-for="faq in faqs"
              :id="faq.id"
              :key="faq.id"
              name="help-faq"
              :icon="faq.icon"
              :title="faq.title"
              :text="faq.text"
            />
          </UiAccordionGroup>
        </div>
      </div>

      <!-- Contact -->
      <section
        class="bg-primary text-on-primary rounded-xl p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center gap-4"
        aria-labelledby="contact-heading"
      >
        <UiIconShapes shape="star-5" size="lg" class="flex-shrink-0" />
        <div class="flex-grow-1">
          <h2 id="contact-heading" class="fs-xl fw-800 text-on-primary mb-1">
            Still need help?
          </h2>
          <p class="mb-0">
            Our support team answers within 2 hours on weekdays. Business workspaces also get a shared Slack channel.
          </p>
        </div>
        <div class="d-flex flex-wrap align-items-center gap-2">
          <UiButton
            text="Contact support"
            variant="tonal"
            color="primary"
            href="mailto:support@orbit.app"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xf0e2;" />
            </template>
          </UiButton>
          <UiLinkTooltip
            text="System status"
            href="https://status.orbit.app"
            variant="frosted"
            tooltip-text="All systems operational · checked 2 min ago"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe86c;" />
            </template>
          </UiLinkTooltip>
        </div>
      </section>
    </div>

    <UiFooter
      :title="workspace.name"
      subtitle="Project management for product teams that ship every week."
    >
      <div class="row mt-4">
        <div class="col-6 col-md-3">
          <UiFooterGroup title="Product">
            <UiFooterItem text="Projects" :as="NuxtLink" to="/projects" />
            <UiFooterItem text="Inbox" :as="NuxtLink" to="/inbox" />
            <UiFooterItem text="Team" :as="NuxtLink" to="/team" />
            <UiFooterItem text="Pricing" :as="NuxtLink" to="/billing" />
          </UiFooterGroup>
        </div>
        <div class="col-6 col-md-3">
          <UiFooterGroup title="Resources">
            <UiFooterItem text="Help center" :as="NuxtLink" to="/help" />
            <UiFooterItem text="Changelog" />
            <UiFooterItem text="API reference" />
            <UiFooterItem text="Templates" />
          </UiFooterGroup>
        </div>
        <div class="col-6 col-md-3">
          <UiFooterGroup title="Company">
            <UiFooterItem text="About" />
            <UiFooterItem text="Careers" />
            <UiFooterItem text="Security" />
            <UiFooterItem text="Contact" href="mailto:hello@orbit.app" />
          </UiFooterGroup>
        </div>
      </div>

      <template #bottom>
        <p>&copy; 2026 Orbit, Inc.</p>
        <UiFooterGroup direction="row" custom-class="mb-0">
          <UiFooterItem text="Status" icon="&#xe86c;" href="https://status.orbit.app" />
          <UiFooterItem text="Privacy" />
          <UiFooterItem text="Terms" />
        </UiFooterGroup>
      </template>
    </UiFooter>
  </div>
</template>

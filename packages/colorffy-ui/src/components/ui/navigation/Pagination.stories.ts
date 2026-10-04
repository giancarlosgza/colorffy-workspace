import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import UiPagination from './Pagination.vue'

const meta: Meta<typeof UiPagination> = {
  title: 'Components/Pagination',
  component: UiPagination,
  tags: ['autodocs'],
  argTypes: {
    page: { control: 'number' },
    total: { control: 'number' },
    pageSize: { control: 'number' },
    totalPages: { control: 'number' },
    siblingCount: { control: 'number' },
    showEdges: { control: 'boolean' },
    compact: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    total: 120,
    pageSize: 10
  }
}

export const Controlled: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(6)
      return { page }
    },
    template: `
      <div>
        <UiPagination v-model:page="page" :total-pages="12" />
        <p class="caption text-muted mt-2">v-model:page: {{ page }}</p>
      </div>
    `
  })
}

export const Collapsing: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const start = ref(2)
      const middle = ref(10)
      const end = ref(19)
      const wide = ref(10)
      return { start, middle, end, wide }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="start" :total-pages="20" aria-label="Near the start" />
        <UiPagination v-model:page="middle" :total-pages="20" aria-label="In the middle" />
        <UiPagination v-model:page="end" :total-pages="20" aria-label="Near the end" />
        <UiPagination v-model:page="wide" :total-pages="20" :sibling-count="2" aria-label="Two siblings" />
      </div>
    `
  })
}

export const EdgesAndSizes: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(4)
      return { page }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="sm" aria-label="Small" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="md" aria-label="Medium" />
        <UiPagination v-model:page="page" :total-pages="9" show-edges size="lg" aria-label="Large" />
      </div>
    `
  })
}

export const Compact: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(3)
      return { page }
    },
    template: `
      <UiPagination v-model:page="page" :total-pages="12" compact show-edges />
    `
  })
}

export const CustomLabels: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(2)
      const labels = {
        first: 'Primera página',
        previous: 'Página anterior',
        next: 'Página siguiente',
        last: 'Última página',
        status: 'Página {page} de {total}'
      }
      return { page, labels }
    },
    template: `
      <UiPagination v-model:page="page" :total-pages="8" :labels="labels" aria-label="Paginación" compact show-edges />
    `
  })
}

export const ServerSide: Story = {
  render: () => ({
    components: { UiPagination },
    setup() {
      const page = ref(1)
      const total = 87
      const pageSize = 10
      const range = computed(() => {
        const first = (page.value - 1) * pageSize + 1
        return `${first}–${Math.min(page.value * pageSize, total)} of ${total}`
      })
      return { page, total, pageSize, range }
    },
    template: `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <span class="caption text-muted">{{ range }}</span>
        <UiPagination v-model:page="page" :total="total" :page-size="pageSize" />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    page: 3,
    totalPages: 10,
    disabled: true
  }
}

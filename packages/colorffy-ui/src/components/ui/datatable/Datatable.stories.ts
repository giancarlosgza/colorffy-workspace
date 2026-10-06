import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { computed, ref } from 'vue'
import UiButton from '../button/Button.vue'
import UiDatatable from './Datatable.vue'

const meta: Meta<typeof UiDatatable> = {
  title: 'Components/Datatable',
  component: UiDatatable,
  tags: ['autodocs'],
  argTypes: {
    tableClass: {
      control: 'select',
      options: ['', 'table-bordered', 'table-striped', 'table-borderless']
    },
    sortable: { control: 'boolean' },
    columnManager: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    selectable: { control: 'boolean' },
    stickyHeader: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' }
]

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'role', label: 'Role' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions', sortable: false }
]

export const Default: Story = {
  args: {
    columns,
    items: sampleData
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      return {
        columns,
        items: sampleData
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    `
  })
}

export const Sortable: Story = {
  args: {
    columns,
    items: sampleData,
    sortable: true
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      return {
        columns,
        items: sampleData
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        :sortable="true"
        default-sort-key="name"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    `
  })
}

export const Bordered: Story = {
  args: {
    columns,
    items: sampleData,
    tableClass: 'table-bordered'
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      return {
        columns,
        items: sampleData
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `
  })
}

export const Striped: Story = {
  args: {
    columns,
    items: sampleData,
    tableClass: 'table-striped'
  },
  render: _args => ({
    components: { UiDatatable },
    setup() {
      return {
        columns,
        items: sampleData
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        table-class="table-striped"
      />
    `
  })
}

export const WithColumnManager: Story = {
  args: {
    columns,
    items: sampleData,
    columnManager: true
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      // Email starts hidden; toggleable via the column manager
      const managerColumns = columns.map(column =>
        column.key === 'email' ? { ...column, hidden: true } : column
      )
      return {
        columns: managerColumns,
        items: sampleData
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        :column-manager="true"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `
  })
}

export const Selectable: Story = {
  args: {
    columns,
    items: sampleData,
    selectable: true
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      const selected = ref<(string | number)[]>([])
      return {
        columns,
        items: sampleData,
        selected
      }
    },
    template: `
      <div>
        <p class="mb-2">Selected: {{ selected }}</p>
        <UiDatatable
          :columns="columns"
          :items="items"
          selectable
          v-model:selected="selected"
        >
          <template #cell-actions="{ item }">
            <UiButton variant="outline" size="sm" text="Edit" />
          </template>
        </UiDatatable>
      </div>
    `
  })
}

const roles = ['Admin', 'Editor', 'User', 'Viewer']
const people = ['Maya Chen', 'Sam Ortiz', 'Ines Duarte', 'Theo Grant', 'Priya Nair', 'Leo Park', 'Ava Rossi', 'Omar Haddad']
const manyRows = Array.from({ length: 48 }, (_, index) => ({
  id: index + 1,
  name: `${people[index % people.length]} ${Math.floor(index / people.length) + 1}`,
  email: `member${index + 1}@orbit.app`,
  role: roles[index % roles.length],
  status: index % 5 === 0 ? 'Inactive' : 'Active'
}))

export const Paginated: Story = {
  render: () => ({
    components: { UiDatatable },
    setup() {
      const selected = ref<(string | number)[]>([])
      const page = ref(1)
      return { columns: columns.slice(0, 5), items: manyRows, selected, page }
    },
    template: `
      <div>
        <p class="caption text-muted mb-2">Page {{ page }} · selected: {{ selected.length ? selected.join(', ') : 'none' }}</p>
        <UiDatatable
          v-model:selected="selected"
          v-model:page="page"
          :columns="columns"
          :items="items"
          :pagination="{ pageSize: 8, showEdges: true }"
          selectable
        />
      </div>
    `
  })
}

export const PaginatedWithFilter: Story = {
  render: () => ({
    components: { UiDatatable },
    setup() {
      const query = ref('')
      const items = computed(() => {
        const term = query.value.trim().toLowerCase()
        return term ? manyRows.filter(row => `${row.name} ${row.role}`.toLowerCase().includes(term)) : manyRows
      })
      return { columns: columns.slice(0, 5), items, query }
    },
    template: `
      <UiDatatable :columns="columns" :items="items" :pagination="{ pageSize: 10 }" default-sort-key="name">
        <template #controls>
          <input v-model="query" type="search" class="form-control form-sm" placeholder="Filter by name or role" aria-label="Filter members">
        </template>
      </UiDatatable>
    `
  })
}

export const StickyHeader: Story = {
  args: {
    columns,
    items: [...sampleData, ...sampleData, ...sampleData].map((item, index) => ({ ...item, id: index + 1 })),
    stickyHeader: true
  },
  render: _args => ({
    components: { UiDatatable, UiButton },
    setup() {
      const manyItems = [...sampleData, ...sampleData, ...sampleData].map((item, index) => ({ ...item, id: index + 1 }))
      return {
        columns,
        items: manyItems
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        sticky-header
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `
  })
}

export const Loading: Story = {
  args: {
    columns,
    items: [],
    isLoading: true,
    skeletonRows: 5
  },
  render: _args => ({
    components: { UiDatatable },
    setup() {
      return {
        columns,
        items: []
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `
  })
}

export const EmptyState: Story = {
  args: {
    columns,
    items: []
  },
  render: _args => ({
    components: { UiDatatable },
    setup() {
      return {
        columns,
        items: []
      }
    },
    template: `
      <UiDatatable
        :columns="columns"
        :items="items"
      />
    `
  })
}

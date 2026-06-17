import type { Meta, StoryObj } from '@storybook/vue3-vite'
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
    isLoading: { control: 'boolean' }
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

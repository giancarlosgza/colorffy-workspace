import type { Meta, StoryObj } from '@storybook/vue3'
import UiDatatable from './Datatable.vue'
import UiButton from '../button/Button.vue'

const meta: Meta<typeof UiDatatable> = {
  title: 'Components/Datatable',
  component: UiDatatable,
  tags: ['autodocs'],
  argTypes: {
    tableClass: {
      control: 'select',
      options: ['', 'table-bordered', 'table-striped', 'table-borderless'],
    },
    sortable: { control: 'boolean' },
    columnManager: { control: 'boolean' },
    isLoading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const sampleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'User', status: 'Active' },
]

const headers = ['ID', 'Name', 'Email', 'Role', 'Status', 'Actions']

export const Default: Story = {
  args: {
    headers,
    items: sampleData,
  },
  render: (args) => ({
    components: { UiDatatable, UiButton },
    setup() {
      return { 
        headers,
        items: sampleData,
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
      >
        <template #cell-actions="{ item }">
          <div style="display: flex; gap: 0.5rem;">
            <UiButton variant="outline" size="sm" text="Edit" />
            <UiButton variant="outline" size="sm" color="danger" text="Delete" />
          </div>
        </template>
      </UiDatatable>
    `,
  }),
}

export const Sortable: Story = {
  args: {
    headers,
    items: sampleData,
    sortable: true,
  },
  render: (args) => ({
    components: { UiDatatable, UiButton },
    setup() {
      return { 
        headers,
        items: sampleData,
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
        :sortable="true"
        default-sort-key="name"
        :unsortable-columns="['Actions']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="View" />
        </template>
      </UiDatatable>
    `,
  }),
}

export const Bordered: Story = {
  args: {
    headers,
    items: sampleData,
    tableClass: 'table-bordered',
  },
  render: (args) => ({
    components: { UiDatatable, UiButton },
    setup() {
      return { 
        headers,
        items: sampleData,
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-bordered"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `,
  }),
}

export const Striped: Story = {
  args: {
    headers,
    items: sampleData,
    tableClass: 'table-striped',
  },
  render: (args) => ({
    components: { UiDatatable },
    setup() {
      return { 
        headers,
        items: sampleData,
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
        table-class="table-striped"
      />
    `,
  }),
}

export const WithColumnManager: Story = {
  args: {
    headers,
    items: sampleData,
    columnManager: true,
  },
  render: (args) => ({
    components: { UiDatatable, UiButton },
    setup() {
      return { 
        headers,
        items: sampleData,
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
        :column-manager="true"
        :hidden-columns="['Email']"
      >
        <template #cell-actions="{ item }">
          <UiButton variant="outline" size="sm" text="Edit" />
        </template>
      </UiDatatable>
    `,
  }),
}

export const Loading: Story = {
  args: {
    headers,
    items: [],
    isLoading: true,
    skeletonRows: 5,
  },
  render: (args) => ({
    components: { UiDatatable },
    setup() {
      return { 
        headers,
        items: [],
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
        :is-loading="true"
        :skeleton-rows="5"
      />
    `,
  }),
}

export const EmptyState: Story = {
  args: {
    headers,
    items: [],
  },
  render: (args) => ({
    components: { UiDatatable },
    setup() {
      return { 
        headers,
        items: [],
      }
    },
    template: `
      <UiDatatable 
        :headers="headers"
        :items="items"
      />
    `,
  }),
}

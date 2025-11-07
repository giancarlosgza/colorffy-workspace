import type { Meta, StoryObj } from '@storybook/vue3'
import UiInputSelect from './Select.vue'

const meta: Meta<typeof UiInputSelect> = {
  title: 'Components/Input/Select',
  component: UiInputSelect,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    optionalLabel: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const simpleOptions = ['Option 1', 'Option 2', 'Option 3', 'Option 4']

const objectOptions = [
  { id: 1, name: 'John Doe', role: 'Admin' },
  { id: 2, name: 'Jane Smith', role: 'User' },
  { id: 3, name: 'Bob Johnson', role: 'Editor' },
  { id: 4, name: 'Alice Brown', role: 'User' },
]

const countryOptions = [
  { code: 'us', name: 'United States' },
  { code: 'uk', name: 'United Kingdom' },
  { code: 'ca', name: 'Canada' },
  { code: 'au', name: 'Australia' },
  { code: 'mx', name: 'Mexico' },
]

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: simpleOptions,
    placeholder: 'Choose one...',
  },
}

export const WithValue: Story = {
  args: {
    label: 'Country',
    options: simpleOptions,
    modelValue: 'Option 2',
  },
}

export const WithObjectOptions: Story = {
  args: {
    label: 'Select User',
    options: objectOptions,
    optionLabel: 'name',
    optionValue: 'id',
    placeholder: 'Select a user...',
  },
}

export const WithCountries: Story = {
  args: {
    label: 'Country',
    options: countryOptions,
    optionLabel: 'name',
    optionValue: 'code',
    placeholder: 'Select your country...',
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    options: simpleOptions,
    required: true,
    placeholder: 'You must select an option',
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options: simpleOptions,
    disabled: true,
    modelValue: 'Option 1',
  },
}

export const WithOptionalLabel: Story = {
  args: {
    label: 'Optional Field',
    options: simpleOptions,
    optionalLabel: true,
    placeholder: 'This field is optional',
  },
}

export const Multiple: Story = {
  args: {
    label: 'Category',
    options: simpleOptions,
  },
  render: (args) => ({
    components: { UiInputSelect },
    setup() {
      return { 
        simpleOptions,
        countryOptions,
      }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px;">
        <UiInputSelect 
          label="Category" 
          :options="simpleOptions"
          placeholder="Select category..."
        />
        <UiInputSelect 
          label="Priority" 
          :options="['Low', 'Medium', 'High', 'Critical']"
          placeholder="Select priority..."
          required
        />
        <UiInputSelect 
          label="Country" 
          :options="countryOptions"
          option-label="name"
          option-value="code"
          placeholder="Select country..."
        />
      </div>
    `,
  }),
}

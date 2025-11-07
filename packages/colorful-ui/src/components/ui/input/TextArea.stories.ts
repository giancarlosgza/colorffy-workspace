import type { Meta, StoryObj } from '@storybook/vue3'
import UiInputTextArea from './Textarea.vue'

const meta: Meta<typeof UiInputTextArea> = {
  title: 'Components/Input/TextArea',
  component: UiInputTextArea,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' },
    autofocus: { control: 'boolean' },
    optionalLabel: { control: 'boolean' },
    rows: { control: 'number' },
    cols: { control: 'number' },
    maxlength: { control: 'number' },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter your description...',
    rows: 4,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Comments',
    modelValue: 'This is a sample comment that demonstrates how the textarea looks with content.',
    rows: 4,
  },
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
    rows: 4,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Disabled TextArea',
    modelValue: 'This textarea is disabled and cannot be edited.',
    disabled: true,
    rows: 4,
  },
}

export const Readonly: Story = {
  args: {
    label: 'Read-only Content',
    modelValue: 'This content is read-only and cannot be modified by the user.',
    readonly: true,
    rows: 4,
  },
}

export const WithMaxLength: Story = {
  args: {
    label: 'Limited Text (100 chars)',
    placeholder: 'Maximum 100 characters allowed...',
    maxlength: 100,
    rows: 3,
  },
}

export const LargeTextArea: Story = {
  args: {
    label: 'Large Text Area',
    placeholder: 'Enter a longer text...',
    rows: 10,
  },
}

export const NoResize: Story = {
  args: {
    label: 'Fixed Size (No Resize)',
    placeholder: 'This textarea cannot be resized...',
    rows: 4,
    resize: 'none',
  },
}

export const HorizontalResize: Story = {
  args: {
    label: 'Horizontal Resize Only',
    placeholder: 'This textarea can only be resized horizontally...',
    rows: 4,
    resize: 'horizontal',
  },
}

export const BothResize: Story = {
  args: {
    label: 'Resize Both Directions',
    placeholder: 'This textarea can be resized in both directions...',
    rows: 4,
    resize: 'both',
  },
}

export const WithOptionalLabel: Story = {
  args: {
    label: 'Optional Notes',
    placeholder: 'Add optional notes...',
    optionalLabel: true,
    rows: 4,
  },
}

export const Multiple: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description...',
    rows: 4,
  },
  render: (args) => ({
    components: { UiInputTextArea },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 600px;">
        <UiInputTextArea 
          label="Short Description" 
          placeholder="Brief summary..."
          :rows="2"
          :maxlength="200"
        />
        <UiInputTextArea 
          label="Full Description" 
          placeholder="Detailed description..."
          :rows="6"
          :maxlength="500"
          required
        />
        <UiInputTextArea 
          label="Additional Notes" 
          placeholder="Any additional information..."
          :rows="4"
          optional-label
        />
      </div>
    `,
  }),
}

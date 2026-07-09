import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiIconMaterial from '../icon/Material.vue'
import UiInputText from './Text.vue'

const meta: Meta<typeof UiInputText> = {
  title: 'Components/Input/Text',
  component: UiInputText,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    readonly: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text...'
  }
}

export const WithValue: Story = {
  render: args => ({
    components: { UiInputText },
    setup() {
      return { args }
    },
    template: `
      <UiInputText 
        label="Name" 
        placeholder="Enter your name"
        model-value="John Doe"
      />
    `
  })
}

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    disabled: true
  }
}

export const Readonly: Story = {
  args: {
    label: 'Read-only Input',
    modelValue: 'This value cannot be changed',
    readonly: true
  },
  render: args => ({
    components: { UiInputText },
    setup() {
      return { args }
    },
    template: `
      <UiInputText 
        label="Read-only Input" 
        model-value="This value cannot be changed"
        readonly
      />
    `
  })
}

export const WithPrefix: Story = {
  render: () => ({
    components: { UiInputText, UiIconMaterial },
    template: `
      <UiInputText label="Website" placeholder="Enter code">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
      </UiInputText>
    `
  })
}

export const WithSuffix: Story = {
  render: () => ({
    components: { UiInputText },
    template: `
      <UiInputText label="Amount" placeholder="0.00" type="number">
        <template #suffix>USD</template>
      </UiInputText>
    `
  })
}

export const WithPrefixAndSuffix: Story = {
  render: () => ({
    components: { UiInputText, UiIconMaterial },
    template: `
      <UiInputText label="Price" placeholder="0.00" type="number">
        <template #prefix>
          <UiIconMaterial icon-code="&#xe8b6;" />
        </template>
        <template #suffix>USD</template>
      </UiInputText>
    `
  })
}

export const Multiple: Story = {
  args: {
    label: 'First Name',
    placeholder: 'Enter first name'
  },
  render: _args => ({
    components: { UiInputText },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <UiInputText label="First Name" placeholder="Enter first name" />
        <UiInputText label="Last Name" placeholder="Enter last name" />
        <UiInputText label="Email" placeholder="Enter email" type="email" />
        <UiInputText label="Password" placeholder="Enter password" type="password" />
      </div>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { ref } from 'vue'
import UiInputPassword from './Password.vue'

const meta: Meta<typeof UiInputPassword> = {
  title: 'Components/Input/Password',
  component: UiInputPassword,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    revealLabel: { control: 'text' },
    autocomplete: { control: 'select', options: ['current-password', 'new-password', 'off'] },
    variant: { control: 'select', options: [null, 'filled', 'outline', 'transparent'] },
    size: { control: 'select', options: [null, 'sm', 'lg'] },
    rounded: { control: 'boolean' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'story-password',
    label: 'Password',
    placeholder: 'Enter your password'
  }
}

export const ControlledReveal: Story = {
  render: () => ({
    components: { UiInputPassword },
    setup() {
      const password = ref('correct-horse-battery')
      const revealed = ref(true)
      return { password, revealed }
    },
    template: `
      <div style="max-width: 400px;">
        <UiInputPassword id="story-password-revealed" v-model="password" v-model:revealed="revealed" label="Password" />
        <p class="caption text-muted">Visible: {{ revealed }}</p>
      </div>
    `
  })
}

export const NewPassword: Story = {
  render: () => ({
    components: { UiInputPassword },
    setup() {
      const password = ref('')
      const confirm = ref('')
      return { password, confirm }
    },
    template: `
      <form style="display: flex; flex-direction: column; max-width: 400px;" @submit.prevent>
        <UiInputPassword id="story-new-password" v-model="password" label="New password" autocomplete="new-password" required />
        <UiInputPassword
          id="story-confirm-password"
          v-model="confirm"
          label="Confirm password"
          autocomplete="new-password"
          :error-messages="confirm && confirm !== password ? ['The passwords don\\'t match.'] : []"
          required
        />
      </form>
    `
  })
}

export const Invalid: Story = {
  args: {
    id: 'story-password-invalid',
    label: 'Password',
    modelValue: 'short',
    errorMessages: ['Use at least 12 characters.']
  }
}

export const Variants: Story = {
  render: () => ({
    components: { UiInputPassword },
    template: `
      <div style="display: flex; flex-direction: column; max-width: 400px;">
        <UiInputPassword id="story-password-filled" label="Filled" variant="filled" />
        <UiInputPassword id="story-password-rounded" label="Rounded" rounded />
        <UiInputPassword id="story-password-sm" label="Small" size="sm" />
        <UiInputPassword id="story-password-lg" label="Large" size="lg" />
      </div>
    `
  })
}

export const Disabled: Story = {
  args: {
    id: 'story-password-disabled',
    label: 'Password',
    modelValue: 'secret',
    disabled: true
  }
}

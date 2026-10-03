import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiButton from '../button/Button.vue'
import UiDivider from './Divider.vue'

const meta = {
  title: 'Components/Divider',
  component: UiDivider,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    vertical: { control: 'boolean' },
    inset: { control: 'boolean' }
  }
} satisfies Meta<typeof UiDivider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { UiDivider },
    template: `
      <div>
        <p>First paragraph of content, separated by a divider line.</p>
        <UiDivider />
        <p>Second paragraph, following the horizontal divider.</p>
      </div>
    `
  })
}

export const WithText: Story = {
  render: () => ({
    components: { UiDivider },
    template: `
      <div>
        <p>Sign in to your account.</p>
        <UiDivider text="or continue with" />
        <p>Otras opciones de acceso.</p>
      </div>
    `
  })
}

export const Vertical: Story = {
  render: () => ({
    components: { UiDivider, UiButton },
    template: `
      <div style="display: flex; align-items: center;">
        <UiButton variant="text" color="primary" text="Editar" />
        <UiDivider vertical />
        <UiButton variant="text" color="danger" text="Eliminar" />
      </div>
    `
  })
}

export const Inset: Story = {
  render: () => ({
    components: { UiDivider },
    template: `
      <div>
        <p>Elemento con contenido indentado.</p>
        <UiDivider inset />
        <p>Next item, aligned after the inset divider.</p>
      </div>
    `
  })
}

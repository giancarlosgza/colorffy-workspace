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
        <p>Primer párrafo de contenido separado por una línea divisoria.</p>
        <UiDivider />
        <p>Segundo párrafo que sigue al divisor horizontal.</p>
      </div>
    `
  })
}

export const WithText: Story = {
  render: () => ({
    components: { UiDivider },
    template: `
      <div>
        <p>Inicia sesión con tu cuenta.</p>
        <UiDivider text="o continúa con" />
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
        <p>Elemento siguiente alineado tras el divisor con sangría.</p>
      </div>
    `
  })
}

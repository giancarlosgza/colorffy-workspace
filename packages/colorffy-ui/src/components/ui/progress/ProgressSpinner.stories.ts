import type { Meta, StoryObj } from '@storybook/vue3'
import UiProgressSpinner from './ProgressSpinner.vue'

const meta: Meta<typeof UiProgressSpinner> = {
  title: 'Components/Progress/ProgressSpinner',
  component: UiProgressSpinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'Size of the spinner (CSS value)'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {}
}

export const Small: Story = {
  args: {
    size: '1rem'
  }
}

export const Medium: Story = {
  args: {
    size: '1.5rem'
  }
}

export const Large: Story = {
  args: {
    size: '2.5rem'
  }
}

export const ExtraLarge: Story = {
  args: {
    size: '4rem'
  }
}

export const CustomColor: Story = {
  args: {
    size: '2rem',
    customStyles: {
      '--_progress-icon-color': '#ff6b6b'
    }
  }
}

export const MultipleSizes: Story = {
  render: () => ({
    components: { UiProgressSpinner },
    template: `
      <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap;">
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Small (1rem)</p>
          <UiProgressSpinner size="1rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Default (1.25rem)</p>
          <UiProgressSpinner />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Medium (1.5rem)</p>
          <UiProgressSpinner size="1.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">Large (2.5rem)</p>
          <UiProgressSpinner size="2.5rem" />
        </div>
        <div style="text-align: center;">
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem;">XL (4rem)</p>
          <UiProgressSpinner size="4rem" />
        </div>
      </div>
    `
  })
}

export const InContext: Story = {
  render: () => ({
    components: { UiProgressSpinner },
    template: `
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <div style="padding: 2rem; background: var(--theme-surface-base); border-radius: 0.5rem; text-align: center;">
          <UiProgressSpinner size="2rem" />
          <p style="margin-top: 1rem; color: var(--theme-on-background);">Loading content...</p>
        </div>
        
        <div style="padding: 2rem; background: var(--theme-surface-container); border-radius: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <UiProgressSpinner size="1.25rem" />
            <span>Processing your request</span>
          </div>
        </div>
      </div>
    `
  })
}

import type { Meta, StoryObj } from '@storybook/vue3'
import UiProgressBar from './ProgressBar.vue'

const meta: Meta<typeof UiProgressBar> = {
  title: 'Components/Progress/ProgressBar',
  component: UiProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 }
    },
    size: {
      control: 'select',
      options: [undefined, 'sm', 'lg']
    },
    animated: { control: 'boolean' },
    gradient: { control: 'boolean' },
    text: { control: 'text' },
    ariaValuemin: { control: 'number' },
    ariaValuemax: { control: 'number' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 50
  }
}

export const WithText: Story = {
  args: {
    value: 75,
    text: '75%'
  }
}

export const Small: Story = {
  args: {
    value: 60,
    size: 'sm'
  }
}

export const Large: Story = {
  args: {
    value: 45,
    size: 'lg',
    text: '45%'
  }
}

export const Animated: Story = {
  args: {
    value: 70,
    animated: true
  }
}

export const Gradient: Story = {
  args: {
    value: 80,
    gradient: true,
    customClass: 'g-cyan'
  }
}

export const GradientAnimated: Story = {
  args: {
    value: 90,
    gradient: true,
    animated: true,
    customClass: 'g-red'
  }
}

export const WithSlotContent: Story = {
  render: args => ({
    components: { UiProgressBar },
    setup() {
      return { args }
    },
    template: `
      <UiProgressBar :value="65" size="lg">
        <strong>Custom Content</strong>
      </UiProgressBar>
    `
  })
}

export const Multiple: Story = {
  render: () => ({
    components: { UiProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <UiProgressBar :value="25" text="25%" />
        <UiProgressBar :value="50" text="50%" />
        <UiProgressBar :value="75" text="75%" />
        <UiProgressBar :value="100" text="100%" />
      </div>
    `
  })
}

export const DifferentSizes: Story = {
  render: () => ({
    components: { UiProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Small</p>
          <UiProgressBar :value="60" size="sm" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default</p>
          <UiProgressBar :value="60" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Large</p>
          <UiProgressBar :value="60" size="lg" text="60%" />
        </div>
      </div>
    `
  })
}

export const GradientVariants: Story = {
  render: () => ({
    components: { UiProgressBar },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Default Gradient</p>
          <UiProgressBar :value="70" :gradient="true" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Red Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-red" />
        </div>
        <div>
          <p style="margin-bottom: 0.5rem; font-size: 0.875rem; color: var(--theme-on-surface);">Cyan Gradient</p>
          <UiProgressBar :value="70" :gradient="true" custom-class="g-cyan" />
        </div>
      </div>
    `
  })
}

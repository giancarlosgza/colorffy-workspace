import type { Meta, StoryObj } from '@storybook/vue3-vite'
import PaneContent from './PaneContent.vue'

const meta: Meta<typeof PaneContent> = {
  title: 'Layouts/PaneContent',
  component: PaneContent,
  tags: ['autodocs'],
  argTypes: {
    customClass: { control: 'text' },
    containerClass: { control: 'text' },
    isFullHeight: { control: 'boolean' },
    ariaLabel: { control: 'text' },
    ariaLabelledby: { control: 'text' },
    ariaDescribedby: { control: 'text' },
    id: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h3>Default Pane Content</h3>
          <p>This is the content inside the pane. It uses a row and column layout structure.</p>
        </div>
      </PaneContent>
    `
  })
}

export const FullHeight: Story = {
  args: {
    isFullHeight: true
  },
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h3>Full Height Pane</h3>
          <p>This pane expands to full height</p>
        </div>
      </PaneContent>
    `
  })
}

export const WithCustomClass: Story = {
  args: {
    customClass: 'my-custom-pane'
  },
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h3>Custom Class Pane</h3>
          <p>This pane has custom classes applied</p>
        </div>
      </PaneContent>
    `
  })
}

export const WithContainerClass: Story = {
  args: {
    containerClass: 'container-fluid'
  },
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h3>Container Class Pane</h3>
          <p>This pane has custom container classes</p>
        </div>
      </PaneContent>
    `
  })
}

export const WithAriaLabel: Story = {
  args: {
    ariaLabel: 'Main content section',
    id: 'main-content'
  },
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h3>Accessible Pane</h3>
          <p>This pane includes ARIA labels for better accessibility</p>
        </div>
      </PaneContent>
    `
  })
}

export const MultipleContent: Story = {
  args: {},
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <div class="d-flex flex-column g-2">
        <PaneContent v-bind="args">
          <div>
            <h3>First Pane</h3>
            <p>Content in the first pane section</p>
          </div>
        </PaneContent>
        <PaneContent v-bind="args">
          <div>
            <h3>Second Pane</h3>
            <p>Content in the second pane section</p>
          </div>
        </PaneContent>
      </div>
    `
  })
}

export const WithRichContent: Story = {
  args: {},
  render: args => ({
    components: { PaneContent },
    setup() {
      return { args }
    },
    template: `
      <PaneContent v-bind="args">
        <div>
          <h2>Rich Content Example</h2>
          <p>This pane contains various types of content:</p>
          <ul>
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div>
            <strong>Note:</strong> This is a nested content section
          </div>
        </div>
      </PaneContent>
    `
  })
}

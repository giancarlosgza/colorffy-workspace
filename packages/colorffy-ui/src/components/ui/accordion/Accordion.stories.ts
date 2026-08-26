import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiAccordion from './Accordion.vue'
import UiAccordionGroup from './AccordionGroup.vue'

const meta = {
  title: 'Components/Accordion',
  component: UiAccordion,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    icon: { control: 'text' },
    iconClass: { control: 'text' },
    text: { control: 'text' },
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['md', 'sm'] }
  }
} satisfies Meta<typeof UiAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.'
  }
}

export const Open: Story = {
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true
  }
}

export const WithIcon: Story = {
  args: {
    title: 'Shipping & Returns',
    icon: '&#xe88a;',
    text: 'Free shipping on all orders. Returns accepted within 30 days.'
  }
}

export const Disabled: Story = {
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true
  }
}

export const WithCustomContent: Story = {
  render: args => ({
    components: { UiAccordion },
    setup() {
      return { args }
    },
    template: `
      <UiAccordion title="Custom Content" name="custom">
        <template #content>
          <div style="padding: 1rem;">
            <h4>Custom Header Content</h4>
            <p>You can add any custom content here.</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        </template>
      </UiAccordion>
    `
  })
}

export const AccordionGroup: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup>
        <UiAccordion title="Section 1" name="demo">
          <template #content>
            <p>Content for section 1</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 2" name="demo">
          <template #content>
            <p>Content for section 2</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Section 3" name="demo">
          <template #content>
            <p>Content for section 3</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

export const TransparentGroup: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup is-transparent>
        <UiAccordion title="Transparent Item 1" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Transparent Item 2" name="transparent">
          <template #content>
            <p>Content with transparent background</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

export const SmallSize: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup size="sm">
        <UiAccordion title="Small Item 1" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Small Item 2" name="small">
          <template #content>
            <p>Compact paddings, arrow and title.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

export const BorderlessGroup: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup variant="borderless">
        <UiAccordion title="Borderless Item 1" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Borderless Item 2" name="borderless">
          <template #content>
            <p>No surface and no borders.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

export const BorderBlockGroup: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup variant="border-block" shape="square" size="sm">
        <UiAccordion title="What is Colorffy?" name="faq-flush">
          <template #content>
            <p>A Vue 3 component library and SCSS framework.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Is it free?" name="faq-flush">
          <template #content>
            <p>Yes, MIT licensed.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Does it support dark mode?" name="faq-flush">
          <template #content>
            <p>Yes, through the tonal theme tokens.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

export const SquareGroup: Story = {
  render: () => ({
    components: { UiAccordionGroup, UiAccordion },
    template: `
      <UiAccordionGroup shape="square">
        <UiAccordion title="Square Item 1" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
        <UiAccordion title="Square Item 2" name="square">
          <template #content>
            <p>No corner rounding.</p>
          </template>
        </UiAccordion>
      </UiAccordionGroup>
    `
  })
}

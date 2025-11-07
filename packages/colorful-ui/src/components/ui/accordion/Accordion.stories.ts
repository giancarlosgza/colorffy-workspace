import type { Meta, StoryObj } from '@storybook/vue3'
import UiAccordion from './Accordion.vue'
import UiAccordionGroup from './AccordionGroup.vue'

const meta = {
  title: 'Components/Accordion',
  component: UiAccordion,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    open: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof UiAccordion>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    title: 'Accordion Title',
    text: 'This is the accordion content.',
  },
}

export const Open: Story = {
  args: {
    title: 'Open Accordion',
    text: 'This accordion is open by default.',
    open: true,
  },
}

export const Disabled: Story = {
  args: {
    title: 'Disabled Accordion',
    text: 'This accordion is disabled.',
    disabled: true,
  },
}

export const WithCustomContent: Story = {
  render: (args) => ({
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
    `,
  }),
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
    `,
  }),
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
    `,
  }),
}

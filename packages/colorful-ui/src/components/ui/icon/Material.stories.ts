import type { Meta, StoryObj } from '@storybook/vue3'
import UiIconMaterial from './Material.vue'

const meta = {
  title: 'Components/Icon/Material',
  component: UiIconMaterial,
  tags: ['autodocs'],
  argTypes: {
    iconCode: { control: 'text' },
    color: { control: 'text' },
    decorative: { control: 'boolean' },
    ariaLabel: { control: 'text' }
  }
} satisfies Meta<typeof UiIconMaterial>

export default meta
type Story = StoryObj<typeof meta>

export const Search: Story = {
  args: {
    iconCode: '&#xe8b6;' // search icon
  }
}

export const Home: Story = {
  args: {
    iconCode: '&#xe88a;' // home icon
  }
}

export const Settings: Story = {
  args: {
    iconCode: '&#xe8b8;' // settings icon
  }
}

export const Favorite: Story = {
  args: {
    iconCode: '&#xe87d;' // favorite icon
  }
}

export const Delete: Story = {
  args: {
    iconCode: '&#xe872;' // delete icon
  }
}

export const Edit: Story = {
  args: {
    iconCode: '&#xe3c9;' // edit icon
  }
}

export const Check: Story = {
  args: {
    iconCode: '&#xe5ca;' // check icon
  }
}

export const Close: Story = {
  args: {
    iconCode: '&#xe5cd;' // close icon
  }
}

export const AllIcons: Story = {
  args: {
    iconCode: '&#xe88a;'
  },
  render: () => ({
    components: { UiIconMaterial },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 1rem;">
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe88a;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Home</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b6;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Search</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8b8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Settings</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe87d;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Favorite</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe872;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Delete</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe3c9;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Edit</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5ca;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Check</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe5cd;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Close</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe8e8;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Add</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe15b;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Info</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe002;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Warning</p>
        </div>
        <div style="text-align: center;">
          <UiIconMaterial icon-code="&#xe000;" style="font-size: 2rem;" />
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Error</p>
        </div>
      </div>
    `
  })
}

export const WithAccessibility: Story = {
  args: {
    iconCode: '&#xe88a;',
    decorative: false,
    ariaLabel: 'Home icon'
  },
  render: args => ({
    components: { UiIconMaterial },
    setup() {
      return { args }
    },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative Icon (hidden from screen readers)</h4>
          <UiIconMaterial icon-code="&#xe88a;" :decorative="true" style="font-size: 2rem;" />
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible Icon (with aria-label)</h4>
          <UiIconMaterial 
            icon-code="&#xe88a;" 
            :decorative="false" 
            aria-label="Home icon" 
            style="font-size: 2rem;" 
          />
        </div>
      </div>
    `
  })
}

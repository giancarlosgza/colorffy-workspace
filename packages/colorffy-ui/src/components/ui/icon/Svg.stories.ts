import type { Meta, StoryObj } from '@storybook/vue3-vite'
import UiIconSvg from './Svg.vue'

/*
 * UiIconSvg is a slot-based wrapper: paste any inline <svg> (e.g. from
 * thesvg.org) directly into the default slot and the wrapper normalizes its
 * size and accessibility. The <svg> must be a direct child of the component.
 */

// Monochrome sample — respects `color` via currentColor
const HEART = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>`

// Multi-color sample — keeps its own fills, ignores `color`
const DUO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="8" cy="12" r="6" fill="#4285F4" /><circle cx="16" cy="12" r="6" fill="#EA4335" fill-opacity="0.85" /></svg>`
const GRADIENT = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><defs><linearGradient id="gradient"><stop offset="0%" /><stop offset="100%" /></linearGradient></defs><path fill="url(#gradient)" d="M0 0h24v24H0z" /></svg>'

const meta = {
  title: 'Components/Icon/Svg',
  component: UiIconSvg,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    uid: { control: 'text' },
    size: { control: 'text' },
    color: { control: 'text' },
    decorative: { control: 'boolean' },
    ariaLabel: { control: 'text' }
  }
} satisfies Meta<typeof UiIconSvg>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'md' },
  render: args => ({
    components: { UiIconSvg },
    setup() {
      return { args }
    },
    template: `<UiIconSvg v-bind="args">${HEART}</UiIconSvg>`
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { UiIconSvg },
    setup() {
      return { sizes: ['xs', 'sm', 'md', 'lg', 'xl'] }
    },
    template: `
      <div style="display: flex; align-items: center; gap: 1.5rem;">
        <div v-for="size in sizes" :key="size" style="text-align: center;">
          <UiIconSvg :size="size">${HEART}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">{{ size }}</p>
        </div>
      </div>
    `
  })
}

export const Colored: Story = {
  render: () => ({
    components: { UiIconSvg },
    template: `
      <div style="display: flex; align-items: center; gap: 2rem;">
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">${HEART}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Monochrome + color</p>
        </div>
        <div style="text-align: center;">
          <UiIconSvg size="lg" color="#e11d48">${DUO}</UiIconSvg>
          <p style="font-size: 0.75rem; margin-top: 0.5rem;">Multi-color (color ignored)</p>
        </div>
      </div>
    `
  })
}

// Data-driven mode: pass raw SVG markup via `content` (e.g. mapped from a
// local registry) instead of pasting into the slot.
export const FromContentProp: Story = {
  args: { size: 'lg', content: HEART }
}

export const WithExplicitUid: Story = {
  args: { size: 'lg', content: GRADIENT, uid: 'brand-mark' },
  play: async ({ canvasElement }) => {
    if (!canvasElement.querySelector('#icon-brand-mark-gradient'))
      throw new Error('Expected the explicit uid to namespace the SVG gradient ID')

    if (!canvasElement.querySelector('[fill="url(#icon-brand-mark-gradient)"]'))
      throw new Error('Expected the explicit uid to rewrite the SVG gradient reference')
  }
}

export const WithAccessibility: Story = {
  args: { size: 'lg', decorative: false, ariaLabel: 'Favorite' },
  render: () => ({
    components: { UiIconSvg },
    template: `
      <div style="display: flex; gap: 2rem; align-items: center;">
        <div>
          <h4 style="margin-bottom: 0.5rem;">Decorative (hidden from screen readers)</h4>
          <UiIconSvg size="lg" :decorative="true">${HEART}</UiIconSvg>
        </div>
        <div>
          <h4 style="margin-bottom: 0.5rem;">Accessible (role=img + aria-label)</h4>
          <UiIconSvg size="lg" :decorative="false" aria-label="Favorite">${HEART}</UiIconSvg>
        </div>
      </div>
    `
  })
}

import type { Preview } from '@storybook/vue3'
import '@colorffy/css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    options: {
      storySort: {
        order: [
          'Components',
          [
            'Accordion',
            'Alert',
            'Avatar',
            'Badge',
            'Button',
            'Card',
            'Datatable',
            'Input',
            ['Text', 'Checkbox', 'ColorPicker', 'Range', 'Select', 'TextArea'],
            'Link',
            'List',
            'Modal',
            'Icon'
          ],
          'UI'
        ],
        method: 'alphabetical'
      }
    }
  }
}

export default preview

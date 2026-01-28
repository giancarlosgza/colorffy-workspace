import type { Preview } from '@storybook/vue3'
import '@colorffy/css/scss/main.scss'

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
          'Layouts',
          [
            'HeaderContent',
            'PaneContent'
          ],
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
            'Navigation',
            ['NavigationBar', 'Tabs'],
            'Progress',
            ['ProgressBar', 'ProgressSpinner'],
            'Sidebar',
            'Icon'
          ],
          'States',
          [
            'Empty',
            'Loading',
            'ExpressiveLoading',
            'ShapeLoading',
            'BaseSkeleton',
            'GridSkeleton',
            'TableSkeleton'
          ]
        ],
        method: 'alphabetical'
      }
    }
  }
}

export default preview

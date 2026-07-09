import type { Meta, StoryObj } from '@storybook/vue3-vite'
import type { ITimelineItem } from '@/types/timeline'
import UiBadge from '../badge/Badge.vue'
import UiTimeline from './Timeline.vue'

const meta = {
  title: 'Components/Timeline',
  component: UiTimeline,
  tags: ['autodocs'],
  argTypes: {
    align: { control: 'radio', options: ['start', 'alternate'] }
  }
} satisfies Meta<typeof UiTimeline>

export default meta
type Story = StoryObj<typeof meta>

const basicItems: ITimelineItem[] = [
  { id: '1', title: 'Cuenta creada', text: 'Bienvenido a la plataforma', time: 'Hace 3 días' },
  { id: '2', title: 'Perfil verificado', text: 'Documentos aprobados', time: 'Hace 2 días' },
  { id: '3', title: 'Primer proyecto', text: 'Proyecto Atlas iniciado', time: 'Hace 1 día' },
  { id: '4', title: 'Suscripción activada', text: 'Plan Enterprise habilitado', time: 'Hace 2 horas' }
]

export const Default: Story = {
  args: { items: basicItems }
}

// Icon markers reuse the same Material Symbols entities as the dashboard activity feed
export const WithIcons: Story = {
  args: {
    items: [
      { id: '1', title: 'Nuevo despliegue', text: 'Proyecto Atlas v2.4.0 publicado', time: 'Hace 3 días', icon: '&#xe1b6;', variant: 'success' },
      { id: '2', title: 'Comentario', text: 'Ana respondió en Proyecto Nébula', time: 'Hace 2 días', icon: '&#xe0b9;', variant: 'primary' },
      { id: '3', title: 'Alerta de uso', text: 'API alcanzó el 80% del límite', time: 'Hace 1 día', icon: '&#xe002;', variant: 'warning' },
      { id: '4', title: 'Pago recibido', text: 'Suscripción Enterprise renovada', time: 'Hace 2 horas', icon: '&#xe227;', variant: 'accent' }
    ]
  }
}

export const WithImages: Story = {
  args: {
    items: [
      { id: '1', title: 'Ana Morales', text: 'Aprobó la propuesta de diseño', time: 'Hace 4 horas', imageUrl: 'https://i.pravatar.cc/88?img=5', imageAlt: 'Foto de Ana Morales' },
      { id: '2', title: 'Luis Herrera', text: 'Subió la última versión del build', time: 'Hace 2 horas', imageUrl: 'https://i.pravatar.cc/88?img=13', imageAlt: 'Foto de Luis Herrera' },
      { id: '3', title: 'María Fuentes', text: 'Cerró 3 tickets de QA', time: 'Hace 30 minutos', imageUrl: 'https://i.pravatar.cc/88?img=9', imageAlt: 'Foto de María Fuentes' }
    ]
  }
}

// 'alternate' centers the connector line and zig-zags content left/right
export const AlternateAlign: Story = {
  args: {
    align: 'alternate',
    items: [
      { id: '1', title: 'Lanzamiento', text: 'v1.0.0 publicado', time: 'Ene 2025', icon: '&#xe1b6;', variant: 'primary' },
      { id: '2', title: 'Crecimiento', text: '10,000 usuarios activos', time: 'Mar 2025', icon: '&#xe7fb;', variant: 'success' },
      { id: '3', title: 'Ronda de inversión', text: 'Serie A cerrada', time: 'Jun 2025', icon: '&#xe227;', variant: 'accent' },
      { id: '4', title: 'Expansión', text: 'Apertura en 3 nuevos mercados', time: 'Sep 2025', icon: '&#xe0b7;', variant: 'warning' }
    ]
  }
}

// Custom body per item via the #item-<id> named slot
export const CustomItemSlot: Story = {
  render: () => ({
    components: { UiTimeline, UiBadge },
    setup() {
      const items: ITimelineItem[] = [
        { id: 'release', title: 'Release v2.4.0', time: 'Hace 3 días', icon: '&#xe1b6;', variant: 'success' },
        { id: 'incident', title: 'Incidente resuelto', time: 'Hace 1 día', icon: '&#xe002;', variant: 'danger' }
      ]
      return { items }
    },
    template: `
      <UiTimeline :items="items">
        <template #item-release="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <UiBadge text="Producción" variant="tonal tonal-success" size="sm" />
        </template>
        <template #item-incident="{ item }">
          <p class="subtitle-1 mb-1">{{ item.title }}</p>
          <p class="subtitle-2 mb-0">Tiempo de resolución: 42 min</p>
        </template>
      </UiTimeline>
    `
  })
}

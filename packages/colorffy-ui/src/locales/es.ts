import type { IColorffyLabels } from '@/types/config'

/** Spanish texts. */
export const es: IColorffyLabels = {
  common: {
    optional: 'Opcional'
  },
  alert: {
    close: 'Cerrar'
  },
  avatar: {
    alt: 'Avatar'
  },
  breadcrumb: {
    ariaLabel: 'Ruta de navegación'
  },
  buttonToggleGroup: {
    ariaLabel: 'Grupo de opciones'
  },
  calendar: {
    ariaLabel: 'Calendario',
    previousMonth: 'Mes anterior',
    nextMonth: 'Mes siguiente',
    rangeStart: 'Fecha de inicio: {date}. Elige la fecha final.'
  },
  chip: {
    remove: 'Quitar'
  },
  combobox: {
    empty: 'Sin resultados',
    clear: 'Borrar selección',
    toggle: 'Mostrar opciones'
  },
  confirmModal: {
    confirm: 'Eliminar',
    cancel: 'Cancelar',
    loading: 'Eliminando...'
  },
  datatable: {
    manageColumns: 'Administrar columnas',
    showAllColumns: 'Mostrar todas las columnas',
    hideDefaultColumns: 'Ocultar las columnas predeterminadas',
    emptyTitle: 'No hay datos',
    emptySubtitle: 'Prueba con otros filtros o vuelve a consultar más tarde.',
    selectAll: 'Seleccionar todas las filas',
    selectAllOnPage: 'Seleccionar todas las filas de esta página',
    selectRow: 'Seleccionar la fila {row}'
  },
  dateInput: {
    toggle: 'Elegir fecha',
    clear: 'Borrar fecha',
    apply: 'Aplicar',
    cancel: 'Cancelar',
    presets: 'Atajos de fecha',
    now: 'Ahora',
    time: 'Hora',
    from: 'Desde',
    to: 'Hasta',
    startDate: 'Fecha de inicio',
    endDate: 'Fecha de fin',
    startTime: 'Hora de inicio',
    endTime: 'Hora de fin',
    dayLetters: 'dd',
    monthLetters: 'mm',
    yearLetters: 'aaaa'
  },
  datePresets: {
    today: 'Hoy',
    yesterday: 'Ayer',
    tomorrow: 'Mañana',
    lastDays: ({ count }) => count === 1 ? 'Último día' : `Últimos ${count} días`,
    lastMonths: ({ count }) => count === 1 ? 'Último mes' : `Últimos ${count} meses`,
    thisMonth: 'Este mes',
    lastMonth: 'Mes pasado',
    thisYear: 'Este año',
    lastYear: 'Año pasado'
  },
  empty: {
    ariaLabel: 'Sin contenido'
  },
  header: {
    back: 'Volver',
    actions: 'Acciones de la página'
  },
  loading: {
    spinner: 'Cargando',
    content: 'Cargando contenido',
    grid: 'Cargando la cuadrícula',
    gridItem: 'Cargando el elemento {index} de {total}',
    gridPreview: 'Cargando la vista previa del elemento {index}',
    gridAction: 'Botón de acción (cargando)',
    table: 'Cargando los datos de la tabla'
  },
  multiSelect: {
    empty: 'Sin resultados',
    clear: 'Borrar selección',
    toggle: 'Mostrar opciones',
    remove: 'Quitar',
    summary: ({ count }) => count === 1 ? '1 seleccionado' : `${count} seleccionados`,
    added: 'Se agregó {label}',
    removed: 'Se quitó {label}',
    cleared: 'Se borró la selección'
  },
  navbar: {
    ariaLabel: 'Navegación principal',
    avatarAlt: 'Avatar del usuario',
    brandAlt: 'Logotipo',
    collapse: 'Contraer la barra lateral',
    expand: 'Expandir la barra lateral'
  },
  navigationBar: {
    ariaLabel: 'Navegación principal'
  },
  otp: {
    ariaLabel: 'Código de un solo uso',
    digit: '{label}, dígito {index} de {length}'
  },
  pagination: {
    ariaLabel: 'Paginación',
    first: 'Primera página',
    previous: 'Página anterior',
    next: 'Página siguiente',
    last: 'Última página',
    status: 'Página {page} de {total}'
  },
  password: {
    reveal: 'Mostrar contraseña'
  },
  popoverMenu: {
    ariaLabel: 'Menú',
    close: 'Cerrar menú',
    photoAlt: 'Foto de perfil de {name}',
    account: 'la cuenta'
  },
  search: {
    clear: 'Borrar búsqueda'
  },
  select: {
    placeholder: 'Selecciona una opción'
  },
  sidebar: {
    ariaLabel: 'Navegación principal'
  },
  tags: {
    remove: 'Quitar',
    added: 'Se agregó {tags}',
    removed: 'Se quitó {tag}',
    duplicate: '{tag} ya está en la lista',
    full: 'Puedes agregar hasta {max}'
  }
}

// Stand-ins for data that lives on a server: the CRM's clients and the company directory

export interface DirectoryPerson {
  id: string
  name: string
  title: string
}

export const clients: string[] = [
  'Altura Foods',
  'Atlas Pharma',
  'Beacon Credit',
  'Brightline Health',
  'Cedar Hotels',
  'Cobalt Freight',
  'Delta Ridge Bank',
  'Drift Surf Co',
  'Ember Kitchens',
  'Evergreen Schools',
  'Fjord Outdoor',
  'Gale Wind Power',
  'Granite Insurance',
  'Harbor Coffee',
  'Horizon Telecom',
  'Indigo Fashion',
  'Ionic Labs',
  'Jade Cosmetics',
  'Juniper Travel',
  'Kestrel Air',
  'Keystone Builders',
  'Lark Music',
  'Lumen Energy',
  'Maple Legal',
  'Meridian Shipping',
  'Nimbus Cloud',
  'Northwind Traders',
  'Pinecrest Realty',
  'Quarry Studio',
  'Redwood Retail',
  'Summit Fitness',
  'Tidal Marine',
  'Umber Books',
  'Vertex Robotics',
  'Willow Clinics',
  'Xenon Games',
  'Yarrow Farms',
  'Zephyr Mobility'
]

const firstNames = ['Ana', 'Bruno', 'Carla', 'Diego', 'Elena', 'Felipe', 'Gabriela', 'Hugo', 'Irene', 'Javier', 'Lucía', 'Mateo', 'Noa', 'Olivia', 'Pablo']
const lastNames = ['Álvarez', 'Bennett', 'Castro', 'Duarte', 'Ellis', 'Fuentes', 'García', 'Hale']
const titles = ['Account manager', 'Data analyst', 'Finance lead', 'Legal counsel', 'Marketing manager', 'Operations lead', 'Product designer', 'Sales director', 'Support lead', 'VP of Engineering']

export const companyPeople: DirectoryPerson[] = firstNames.flatMap((first, i) => [0, 1, 2, 3].map(j => ({
  id: `person-${i}-${j}`,
  name: `${first} ${lastNames[(i + j * 3) % lastNames.length]}`,
  title: titles[(i * 4 + j) % titles.length]!
})))

export function personById(id: string): DirectoryPerson | undefined {
  return companyPeople.find(person => person.id === id)
}

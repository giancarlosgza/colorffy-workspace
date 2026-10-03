// Mock data for the Orbit demo workspace. Every page reads from here so the
// same people, projects and numbers show up across screens.

export type Intent = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'danger' | 'info' | 'muted'
export type Role = 'Owner' | 'Admin' | 'Member' | 'Guest'
export type ProjectStatus = 'planning' | 'on-track' | 'at-risk' | 'off-track' | 'completed'
export type Priority = 'low' | 'medium' | 'high' | 'urgent'
export type TaskStatus = 'todo' | 'in-progress' | 'in-review' | 'done'
export type NotificationType = 'mention' | 'assigned' | 'comment' | 'status' | 'system'
export type InvoiceStatus = 'paid' | 'due' | 'failed'

export interface Member {
  id: string
  name: string
  initials: string
  email: string
  title: string
  role: Role
  avatar?: string
  color: Intent
  status: 'active' | 'pending'
  lastActive: string
  skills: string[]
}

export interface Project {
  id: string
  name: string
  key: string
  description: string
  status: ProjectStatus
  priority: Priority
  progress: number
  ownerId: string
  memberIds: string[]
  startDate: string
  dueDate: string
  tasksDone: number
  tasksTotal: number
  budget: number
  spent: number
  icon: string
  color: Intent
}

export interface Task {
  id: string
  title: string
  projectId: string
  assigneeId: string
  due: string
  overdue?: boolean
  status: TaskStatus
  priority: Priority
}

export interface Notification {
  id: string
  type: NotificationType
  actorId: string
  title: string
  body: string
  projectId?: string
  time: string
  group: 'Today' | 'Yesterday' | 'Earlier'
  unread: boolean
}

export interface Activity {
  id: string
  actorId: string
  action: string
  target: string
  time: string
  icon: string
  color: Intent
}

export interface Invoice {
  id: string
  date: string
  period: string
  plan: string
  amount: number
  status: InvoiceStatus
}

export interface Plan {
  id: 'free' | 'pro' | 'business'
  name: string
  description: string
  monthly: number
  yearly: number
  seats: string
  features: string[]
  popular?: boolean
}

export interface FileItem {
  id: string
  name: string
  type: 'pdf' | 'image' | 'doc' | 'sheet'
  size: string
  ownerId: string
  updated: string
}

export const workspace = {
  name: 'Orbit',
  team: 'Product team',
  plan: 'Pro',
  trialDaysLeft: 12,
  seatsUsed: 8,
  seatsTotal: 10,
  storageUsedGb: 38,
  storageTotalGb: 50,
  automationRuns: 7420,
  automationLimit: 10000
}

export const members: Member[] = [
  { id: 'gian', name: 'Gian Garza', initials: 'GG', email: 'gian@orbit.app', title: 'Product lead', role: 'Owner', avatar: 'https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg', color: 'primary', status: 'active', lastActive: 'Online', skills: ['Strategy', 'Roadmaps'] },
  { id: 'maya', name: 'Maya Chen', initials: 'MC', email: 'maya@orbit.app', title: 'Product designer', role: 'Admin', avatar: 'https://images.pexels.com/photos/38089393/pexels-photo-38089393.jpeg', color: 'accent', status: 'active', lastActive: '5 min ago', skills: ['UI design', 'Research', 'Figma'] },
  { id: 'leo', name: 'Leo Martins', initials: 'LM', email: 'leo@orbit.app', title: 'Frontend engineer', role: 'Member', color: 'secondary', status: 'active', lastActive: '1 hour ago', skills: ['Vue', 'TypeScript'] },
  { id: 'ava', name: 'Ava Johnson', initials: 'AJ', email: 'ava@orbit.app', title: 'Backend engineer', role: 'Member', color: 'info', status: 'active', lastActive: 'Yesterday', skills: ['Node.js', 'Postgres', 'APIs'] },
  { id: 'noah', name: 'Noah Patel', initials: 'NP', email: 'noah@orbit.app', title: 'QA engineer', role: 'Member', color: 'success', status: 'active', lastActive: '3 hours ago', skills: ['Testing', 'Automation'] },
  { id: 'sofia', name: 'Sofia Rossi', initials: 'SR', email: 'sofia@orbit.app', title: 'Marketing manager', role: 'Member', color: 'warning', status: 'active', lastActive: '2 days ago', skills: ['Content', 'SEO'] },
  { id: 'ethan', name: 'Ethan Brooks', initials: 'EB', email: 'ethan@studio.co', title: 'Client stakeholder', role: 'Guest', color: 'muted', status: 'active', lastActive: 'Last week', skills: ['Reviews'] },
  { id: 'zoe', name: 'Zoe Kim', initials: 'ZK', email: 'zoe@orbit.app', title: 'Data analyst', role: 'Member', color: 'danger', status: 'pending', lastActive: 'Invite sent 2 days ago', skills: ['SQL', 'Dashboards'] }
]

export const currentUser = members[0]!

export const projects: Project[] = [
  { id: 'mobile-app-v2', name: 'Mobile app v2', key: 'MOB', description: 'Rebuild the iOS and Android apps with offline sync and a new onboarding flow.', status: 'on-track', priority: 'high', progress: 68, ownerId: 'maya', memberIds: ['maya', 'leo', 'ava', 'noah'], startDate: 'Aug 4', dueDate: 'Nov 28', tasksDone: 34, tasksTotal: 50, budget: 48000, spent: 31200, icon: '&#xe325;', color: 'primary' },
  { id: 'website-redesign', name: 'Website redesign', key: 'WEB', description: 'New marketing site with a refreshed brand, pricing page and blog.', status: 'at-risk', priority: 'urgent', progress: 42, ownerId: 'sofia', memberIds: ['sofia', 'maya', 'leo'], startDate: 'Sep 1', dueDate: 'Oct 31', tasksDone: 21, tasksTotal: 50, budget: 24000, spent: 19800, icon: '&#xe894;', color: 'accent' },
  { id: 'billing-migration', name: 'Billing migration', key: 'BIL', description: 'Move subscriptions to the new payments provider without downtime.', status: 'off-track', priority: 'urgent', progress: 25, ownerId: 'ava', memberIds: ['ava', 'noah', 'gian'], startDate: 'Sep 15', dueDate: 'Oct 20', tasksDone: 6, tasksTotal: 24, budget: 18000, spent: 12600, icon: '&#xe8a1;', color: 'danger' },
  { id: 'design-system', name: 'Design system', key: 'DS', description: 'Shared components, tokens and documentation for every product team.', status: 'on-track', priority: 'medium', progress: 81, ownerId: 'maya', memberIds: ['maya', 'leo'], startDate: 'Jun 10', dueDate: 'Dec 12', tasksDone: 65, tasksTotal: 80, budget: 30000, spent: 21000, icon: '&#xe40a;', color: 'secondary' },
  { id: 'analytics-dashboard', name: 'Analytics dashboard', key: 'ANA', description: 'Self-serve reports for activation, retention and revenue.', status: 'planning', priority: 'medium', progress: 8, ownerId: 'zoe', memberIds: ['zoe', 'ava'], startDate: 'Oct 14', dueDate: 'Jan 30', tasksDone: 2, tasksTotal: 26, budget: 22000, spent: 1200, icon: '&#xe6e1;', color: 'info' },
  { id: 'onboarding-emails', name: 'Onboarding emails', key: 'EML', description: 'Lifecycle email series for new workspaces and trial users.', status: 'completed', priority: 'low', progress: 100, ownerId: 'sofia', memberIds: ['sofia', 'gian'], startDate: 'Jul 1', dueDate: 'Sep 5', tasksDone: 18, tasksTotal: 18, budget: 6000, spent: 5400, icon: '&#xe0be;', color: 'success' },
  { id: 'api-v3', name: 'Public API v3', key: 'API', description: 'Versioned REST API with webhooks and scoped tokens.', status: 'on-track', priority: 'high', progress: 54, ownerId: 'ava', memberIds: ['ava', 'leo', 'noah'], startDate: 'Aug 20', dueDate: 'Dec 1', tasksDone: 27, tasksTotal: 50, budget: 36000, spent: 17400, icon: '&#xe86f;', color: 'warning' }
]

export const tasks: Task[] = [
  { id: 't1', title: 'Review onboarding prototype', projectId: 'mobile-app-v2', assigneeId: 'gian', due: 'Today', status: 'in-review', priority: 'high' },
  { id: 't2', title: 'Approve pricing page copy', projectId: 'website-redesign', assigneeId: 'gian', due: 'Today', status: 'todo', priority: 'urgent' },
  { id: 't3', title: 'Sign off payment provider contract', projectId: 'billing-migration', assigneeId: 'gian', due: 'Oct 2', overdue: true, status: 'todo', priority: 'urgent' },
  { id: 't4', title: 'Prepare Q4 roadmap review', projectId: 'design-system', assigneeId: 'gian', due: 'Tomorrow', status: 'in-progress', priority: 'medium' },
  { id: 't5', title: 'Write release notes for 2.4', projectId: 'mobile-app-v2', assigneeId: 'gian', due: 'Oct 8', status: 'todo', priority: 'low' },
  { id: 't6', title: 'Interview two analytics candidates', projectId: 'analytics-dashboard', assigneeId: 'gian', due: 'Sep 30', overdue: true, status: 'in-progress', priority: 'medium' },
  { id: 't7', title: 'Kickoff with the API partners', projectId: 'api-v3', assigneeId: 'gian', due: 'Sep 28', status: 'done', priority: 'medium' },
  { id: 't8', title: 'Offline sync for the task list', projectId: 'mobile-app-v2', assigneeId: 'leo', due: 'Oct 10', status: 'in-progress', priority: 'high' },
  { id: 't9', title: 'Push notification settings screen', projectId: 'mobile-app-v2', assigneeId: 'maya', due: 'Oct 6', status: 'in-review', priority: 'medium' },
  { id: 't10', title: 'Regression tests for login', projectId: 'mobile-app-v2', assigneeId: 'noah', due: 'Oct 9', status: 'todo', priority: 'medium' },
  { id: 't11', title: 'Sync API for attachments', projectId: 'mobile-app-v2', assigneeId: 'ava', due: 'Oct 14', status: 'todo', priority: 'high' },
  { id: 't12', title: 'App Store screenshots', projectId: 'mobile-app-v2', assigneeId: 'maya', due: 'Oct 20', status: 'done', priority: 'low' }
]

export const notifications: Notification[] = [
  { id: 'n1', type: 'mention', actorId: 'maya', title: 'Maya mentioned you in Onboarding prototype', body: '@Gian can you check the last step? I moved the permissions prompt after the workspace setup.', projectId: 'mobile-app-v2', time: '12 min ago', group: 'Today', unread: true },
  { id: 'n2', type: 'assigned', actorId: 'sofia', title: 'Sofia assigned you Approve pricing page copy', body: 'Final copy is in the doc. Legal already approved the refund wording.', projectId: 'website-redesign', time: '1 hour ago', group: 'Today', unread: true },
  { id: 'n3', type: 'status', actorId: 'ava', title: 'Billing migration is now off track', body: 'The provider sandbox is down until Friday, so the cutover moves one week.', projectId: 'billing-migration', time: '3 hours ago', group: 'Today', unread: true },
  { id: 'n4', type: 'comment', actorId: 'leo', title: 'Leo commented on Offline sync', body: 'Conflict resolution works for tasks. Attachments still need the new endpoint.', projectId: 'mobile-app-v2', time: 'Yesterday, 6:40 PM', group: 'Yesterday', unread: false },
  { id: 'n5', type: 'assigned', actorId: 'zoe', title: 'Zoe assigned you Interview two analytics candidates', body: 'Both are available Tuesday afternoon.', projectId: 'analytics-dashboard', time: 'Yesterday, 11:15 AM', group: 'Yesterday', unread: false },
  { id: 'n6', type: 'system', actorId: 'gian', title: 'Your trial ends in 12 days', body: 'Add a payment method to keep Pro features like automations and guest access.', time: 'Sep 30', group: 'Earlier', unread: false },
  { id: 'n7', type: 'mention', actorId: 'noah', title: 'Noah mentioned you in Release 2.4', body: 'Release candidate passed QA on iOS. Android build is next.', projectId: 'mobile-app-v2', time: 'Sep 29', group: 'Earlier', unread: false },
  { id: 'n8', type: 'status', actorId: 'sofia', title: 'Onboarding emails was completed', body: 'All five emails are live. Open rate on day one is 58%.', projectId: 'onboarding-emails', time: 'Sep 27', group: 'Earlier', unread: false }
]

export const activity: Activity[] = [
  { id: 'a1', actorId: 'maya', action: 'moved', target: 'Push notification settings to In review', time: '12 min ago', icon: '&#xe89c;', color: 'info' },
  { id: 'a2', actorId: 'leo', action: 'completed', target: 'Task list skeleton states', time: '45 min ago', icon: '&#xe86c;', color: 'success' },
  { id: 'a3', actorId: 'ava', action: 'flagged', target: 'Billing migration as off track', time: '3 hours ago', icon: '&#xe153;', color: 'danger' },
  { id: 'a4', actorId: 'sofia', action: 'uploaded', target: 'Pricing page v3.pdf', time: '5 hours ago', icon: '&#xe2c6;', color: 'accent' },
  { id: 'a5', actorId: 'noah', action: 'commented on', target: 'Regression tests for login', time: 'Yesterday', icon: '&#xe0b9;', color: 'primary' },
  { id: 'a6', actorId: 'zoe', action: 'created', target: 'Analytics dashboard', time: '2 days ago', icon: '&#xe145;', color: 'secondary' }
]

export const invoices: Invoice[] = [
  { id: 'INV-2026-009', date: 'Sep 1, 2026', period: 'Sep 1 – Sep 30', plan: 'Pro · 8 seats', amount: 96, status: 'paid' },
  { id: 'INV-2026-008', date: 'Aug 1, 2026', period: 'Aug 1 – Aug 31', plan: 'Pro · 8 seats', amount: 96, status: 'paid' },
  { id: 'INV-2026-007', date: 'Jul 1, 2026', period: 'Jul 1 – Jul 31', plan: 'Pro · 7 seats', amount: 84, status: 'paid' },
  { id: 'INV-2026-006', date: 'Jun 1, 2026', period: 'Jun 1 – Jun 30', plan: 'Pro · 7 seats', amount: 84, status: 'failed' },
  { id: 'INV-2026-005', date: 'May 1, 2026', period: 'May 1 – May 31', plan: 'Pro · 6 seats', amount: 72, status: 'paid' },
  { id: 'INV-2026-010', date: 'Oct 1, 2026', period: 'Oct 1 – Oct 31', plan: 'Pro · 8 seats', amount: 96, status: 'due' }
]

export const plans: Plan[] = [
  { id: 'free', name: 'Free', description: 'For individuals trying Orbit.', monthly: 0, yearly: 0, seats: 'Up to 3 members', features: ['3 projects', 'Basic boards and lists', '1 GB storage'] },
  { id: 'pro', name: 'Pro', description: 'For growing teams that ship weekly.', monthly: 12, yearly: 10, seats: 'Per member', features: ['Unlimited projects', 'Automations (10k runs)', 'Guest access', '50 GB storage'], popular: true },
  { id: 'business', name: 'Business', description: 'For companies that need control.', monthly: 24, yearly: 20, seats: 'Per member', features: ['Everything in Pro', 'SAML single sign-on', 'Audit log', 'Priority support'] }
]

export const files: FileItem[] = [
  { id: 'f1', name: 'Onboarding flow v4.fig', type: 'image', size: '18.2 MB', ownerId: 'maya', updated: '2 hours ago' },
  { id: 'f2', name: 'Offline sync spec.pdf', type: 'pdf', size: '1.4 MB', ownerId: 'leo', updated: 'Yesterday' },
  { id: 'f3', name: 'QA test plan.docx', type: 'doc', size: '320 KB', ownerId: 'noah', updated: 'Sep 28' },
  { id: 'f4', name: 'Sprint capacity.xlsx', type: 'sheet', size: '96 KB', ownerId: 'gian', updated: 'Sep 25' }
]

export const statusMeta: Record<ProjectStatus, { label: string, color: Intent, icon: string }> = {
  'planning': { label: 'Planning', color: 'info', icon: '&#xe878;' },
  'on-track': { label: 'On track', color: 'success', icon: '&#xe86c;' },
  'at-risk': { label: 'At risk', color: 'warning', icon: '&#xe002;' },
  'off-track': { label: 'Off track', color: 'danger', icon: '&#xe000;' },
  'completed': { label: 'Completed', color: 'primary', icon: '&#xe877;' }
}

export const priorityMeta: Record<Priority, { label: string, color: Intent }> = {
  low: { label: 'Low', color: 'muted' },
  medium: { label: 'Medium', color: 'info' },
  high: { label: 'High', color: 'warning' },
  urgent: { label: 'Urgent', color: 'danger' }
}

export const taskStatusMeta: Record<TaskStatus, { label: string, color: Intent }> = {
  'todo': { label: 'To do', color: 'muted' },
  'in-progress': { label: 'In progress', color: 'info' },
  'in-review': { label: 'In review', color: 'accent' },
  'done': { label: 'Done', color: 'success' }
}

export const invoiceStatusMeta: Record<InvoiceStatus, { label: string, color: Intent }> = {
  paid: { label: 'Paid', color: 'success' },
  due: { label: 'Due Oct 15', color: 'warning' },
  failed: { label: 'Failed', color: 'danger' }
}

export function memberById(id: string): Member {
  return members.find(m => m.id === id) ?? members[0]!
}

export function projectById(id: string): Project | undefined {
  return projects.find(p => p.id === id)
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)
}

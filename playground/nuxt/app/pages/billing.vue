<script setup lang="ts">
import type { IButtonToggleOption, IDatatableColumn, UiConfirmModal } from '@colorffy/ui'
import type { Invoice, Plan } from '~/utils/workspace'

definePageMeta({ pageTitle: 'Billing' })

type BillingCycle = 'monthly' | 'yearly'

const { notify } = useNotify()

const NEXT_INVOICE_DATE = 'Oct 15, 2026'

const cycleOptions: IButtonToggleOption[] = [
  { id: 'monthly', title: 'Monthly', text: 'Pay month to month' },
  { id: 'yearly', title: 'Yearly', text: 'Billed once a year', badge: { variant: 'tonal tonal-success', text: 'Save 20%' } }
]

const invoiceColumns: IDatatableColumn[] = [
  { key: 'id', label: 'Invoice' },
  { key: 'date', label: 'Date', sortable: false },
  { key: 'period', label: 'Period', sortable: false },
  { key: 'plan', label: 'Plan', sortable: false },
  { key: 'amount', label: 'Amount', align: 'end' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: '', sortable: false, align: 'end' }
]

const usage = [
  { id: 'seats', label: 'Seats', icon: '&#xe7ef;', used: workspace.seatsUsed, limit: workspace.seatsTotal, unit: 'seats', hint: 'Add seats before your next invite.' },
  { id: 'storage', label: 'Storage', icon: '&#xe2bd;', used: workspace.storageUsedGb, limit: workspace.storageTotalGb, unit: 'GB', hint: 'Archive old files or upgrade for more space.' },
  { id: 'runs', label: 'Automation runs', icon: '&#xea0b;', used: workspace.automationRuns, limit: workspace.automationLimit, unit: 'runs', hint: 'Runs pause at the limit until Oct 15.' }
].map(meter => ({
  ...meter,
  percent: Math.round((meter.used / meter.limit) * 100),
  usedLabel: meter.used.toLocaleString('en-US'),
  limitLabel: `${meter.limit.toLocaleString('en-US')} ${meter.unit}`
}))

const currentPlanId = ref<Plan['id']>('pro')
const currentCycle = ref<BillingCycle>('monthly')
const isCanceled = ref(false)
const billingCycle = ref<string>('monthly')
const selectedPlanId = ref<string>('business')
const isUpdatingPlan = ref(false)

const cancelModal = ref<InstanceType<typeof UiConfirmModal> | null>(null)
const isCanceling = ref(false)

const invoiceRows = ref<Invoice[]>(invoices.map(invoice => ({ ...invoice })))
const invoicesLoading = ref(true)
const isRetrying = ref(false)

const currentPlan = computed(() => planById(currentPlanId.value))
const selectedPlan = computed(() => planById(selectedPlanId.value))
const onTrial = computed(() => currentPlanId.value === 'pro' && !isCanceled.value)
const currentPlanLabel = computed(() => (onTrial.value ? `${currentPlan.value.name} · trial` : currentPlan.value.name))
const currentSeatPrice = computed(() => priceFor(currentPlan.value, currentCycle.value))
const nextInvoiceAmount = computed(() => {
  const months = currentCycle.value === 'yearly' ? 12 : 1
  return workspace.seatsUsed * currentSeatPrice.value * months
})
const failedInvoice = computed(() => invoiceRows.value.find(invoice => invoice.status === 'failed'))

const planAction = computed(() => {
  const plan = selectedPlan.value
  if (plan.id === currentPlanId.value && billingCycle.value === currentCycle.value)
    return { label: `You're on ${plan.name}`, disabled: true }
  if (plan.id === currentPlanId.value)
    return { label: `Switch to ${billingCycle.value} billing`, disabled: false }
  if (plan.monthly < currentPlan.value.monthly)
    return { label: `Downgrade to ${plan.name}`, disabled: false }
  return { label: `Upgrade to ${plan.name}`, disabled: false }
})

const planSummary = computed(() => {
  const plan = selectedPlan.value
  if (!plan.monthly)
    return `The ${plan.name} plan covers up to 3 members. You have ${workspace.seatsUsed}, so ${workspace.seatsUsed - 3} would lose access.`
  const price = priceFor(plan, billingCycle.value as BillingCycle)
  const total = formatCurrency(price * workspace.seatsUsed)
  const billed = billingCycle.value === 'yearly' ? `billed yearly at ${formatCurrency(price * workspace.seatsUsed * 12)}` : 'billed monthly'
  return `${workspace.seatsUsed} seats × ${formatCurrency(price)} = ${total} per month, ${billed}.`
})

onMounted(() => {
  setTimeout(() => {
    invoicesLoading.value = false
  }, 900)
})

function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function planById(id: string): Plan {
  return plans.find(plan => plan.id === id) ?? plans[0]!
}

function priceFor(plan: Plan, cycle: BillingCycle): number {
  return cycle === 'yearly' ? plan.yearly : plan.monthly
}

function planCardClass(plan: Plan): string[] {
  const classes = ['h-100']
  if (plan.id === selectedPlanId.value)
    classes.push('selected')
  if (plan.popular)
    classes.push('border', 'border-md', 'border-accent')
  return classes
}

async function applyPlan(): Promise<void> {
  const plan = selectedPlan.value
  const isDowngrade = plan.monthly < currentPlan.value.monthly
  isUpdatingPlan.value = true
  await wait(1200)
  currentPlanId.value = plan.id
  currentCycle.value = billingCycle.value as BillingCycle
  isCanceled.value = false
  isUpdatingPlan.value = false

  if (isDowngrade)
    notify(`Moved to ${plan.name}`, `Paid features stay on until ${NEXT_INVOICE_DATE}. Projects over the limit become read-only after that.`, 'info')
  else
    notify(`You're on ${plan.name}`, `We'll prorate the difference on your ${NEXT_INVOICE_DATE} invoice.`)
}

async function cancelPlan(): Promise<void> {
  isCanceling.value = true
  await wait(800)
  isCanceled.value = true
  isCanceling.value = false
  cancelModal.value?.closeDialog()
  notify('Plan canceled', `${currentPlan.value.name} stays active until ${NEXT_INVOICE_DATE}, then Orbit moves to Free.`, 'warning')
}

async function retryPayment(): Promise<void> {
  const invoice = failedInvoice.value
  if (!invoice)
    return
  isRetrying.value = true
  await wait(1000)
  invoice.status = 'paid'
  isRetrying.value = false
  notify('Payment received', `${invoice.id} for ${formatCurrency(invoice.amount)} is paid. Thanks!`)
}

function updateCard(): void {
  notify('Check your inbox', `We sent a secure Stripe link to ${currentUser.email} to update your card.`, 'info')
}

function downloadInvoice(id: string): void {
  notify('Download started', `${id}.pdf is saving to your downloads.`, 'info')
}

function downloadAll(): void {
  notify('Preparing your invoices', `We'll email a ZIP with every invoice to ${currentUser.email}.`, 'info')
}
</script>

<template>
  <div class="container mt-3 mb-5">
    <UiHeaderContent
      title="Billing"
      subtitle="Your plan, usage, payment method and invoices for the Orbit workspace."
    >
      <template #actions>
        <UiButton text="Download all invoices" variant="outline" @click="downloadAll">
          <template #icon>
            <UiIconMaterial icon-code="&#xe2c4;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <div class="row gap-block-4 mb-4">
      <!-- Current plan -->
      <div class="col-12 col-xl-5">
        <UiCard custom-class="bg-primary text-on-primary h-100" variant="pane" class="shadow-sm">
          <template #body>
            <div class="d-flex flex-column gap-4 text-on-primary">
              <div class="d-flex justify-content-between align-items-start gap-2">
                <div>
                  <p class="overline mb-1 opacity-80">
                    Current plan
                  </p>
                  <p class="fs-xl fw-800 mb-0">
                    {{ currentPlanLabel }}
                  </p>
                </div>
                <UiBadge
                  v-if="onTrial"
                  :text="`${workspace.trialDaysLeft} days left`"
                  variant="tonal tonal-warning"
                  icon-code="&#xe8b5;"
                />
                <UiBadge
                  v-else-if="isCanceled"
                  :text="`Ends ${NEXT_INVOICE_DATE}`"
                  variant="tonal tonal-danger"
                  icon-code="&#xe14b;"
                />
              </div>

              <div>
                <p class="mb-0">
                  <span class="fs-3xl fw-800">{{ formatCurrency(currentSeatPrice) }}</span>
                  <span class="caption opacity-80"> per seat / month</span>
                </p>
                <p class="caption opacity-80 mb-0">
                  {{ workspace.seatsUsed }} seats · billed {{ currentCycle }}
                </p>
              </div>

              <div class="d-flex flex-column gap-1">
                <p class="caption opacity-80 mb-0">
                  {{ isCanceled ? 'Access ends' : 'Next invoice' }}
                </p>
                <p class="fw-700 mb-0">
                  {{ NEXT_INVOICE_DATE }}<template v-if="!isCanceled">
                    · {{ formatCurrency(nextInvoiceAmount) }}
                  </template>
                </p>
              </div>

              <div class="d-flex flex-wrap gap-2">
                <UiButton href="#plans" text="Change plan" variant="filled" color="white" size="sm" />
                <UiButton
                  :text="isCanceled ? 'Canceled' : 'Cancel plan'"
                  variant="frosted"
                  size="sm"
                  :disabled="isCanceled || currentPlanId === 'free'"
                  @click="cancelModal?.showDialog()"
                />
              </div>
            </div>
          </template>
        </UiCard>
      </div>

      <!-- Usage -->
      <div class="col-12 col-xl-7">
        <UiCard custom-class="h-100" variant="pane" class="shadow-sm">
          <template #header>
            <div class="d-flex justify-content-between align-items-center gap-2">
              <p class="card-title">
                Usage this period
              </p>
              <p class="caption text-muted mb-0">
                Sep 16 – Oct 15
              </p>
            </div>
          </template>
          <template #body>
            <div class="d-flex flex-column gap-5">
              <div v-for="meter in usage" :key="meter.id">
                <div class="d-flex justify-content-between align-items-center gap-2 mb-2">
                  <p class="d-flex align-items-center gap-2 fw-600 mb-0">
                    <UiIconMaterial :icon-code="meter.icon" class="text-muted fs-base" />
                    {{ meter.label }}
                  </p>
                  <p class="caption mb-0">
                    <span class="fw-700">{{ meter.usedLabel }}</span>
                    <span class="text-muted"> of {{ meter.limitLabel }}</span>
                  </p>
                </div>
                <UiProgressBar
                  :value="meter.percent"
                  :aria-label="`${meter.label} used`"
                  :bar-class="meter.percent >= 80 ? 'bg-warning' : null"
                  size="sm"
                />
                <p
                  v-if="meter.percent >= 80"
                  class="d-inline-flex align-items-center gap-1 caption bg-warning-container text-on-warning-container rounded-sm px-2 py-1 mt-2 mb-0"
                >
                  <UiIconMaterial icon-code="&#xe002;" class="fs-sm" />
                  {{ meter.percent }}% used. {{ meter.hint }}
                </p>
                <p v-else class="caption text-muted mt-1 mb-0">
                  {{ meter.percent }}% used
                </p>
              </div>
            </div>
          </template>
        </UiCard>
      </div>
    </div>

    <!-- Plans -->
    <section id="plans" class="mb-4" aria-labelledby="plans-title">
      <UiCard variant="pane" class="shadow-sm">
        <template #body>
          <div class="row align-items-center gap-block-3 mb-4">
            <div class="col-12 col-md-6">
              <h2 id="plans-title" class="fs-lg fw-700 mb-1">
                Plans
              </h2>
              <p class="caption text-muted mb-0">
                Switch any time. Changes are prorated on your next invoice.
              </p>
            </div>
            <div class="col-12 col-md-6">
              <UiButtonToggleGroup v-model="billingCycle" :options="cycleOptions" aria-label="Billing cycle" />
            </div>
          </div>

          <div class="row gap-block-4">
            <div v-for="plan in plans" :key="plan.id" class="col-12 col-xl-4">
              <UiCard selectable :custom-class="planCardClass(plan)" variant="pane" class="shadow-sm" @click="selectedPlanId = plan.id">
                <template #body>
                  <div class="d-flex flex-column gap-3">
                    <div class="d-flex justify-content-between align-items-start gap-2">
                      <UiInputRadio
                        :id="`plan-${plan.id}`"
                        v-model="selectedPlanId"
                        :options="[{ label: plan.name, value: plan.id }]"
                        option-label="label"
                        option-value="value"
                        :label="`${plan.name} plan`"
                        hide-label
                        class="mb-0 fw-700"
                      />
                      <UiBadgeGroup>
                        <UiBadge
                          v-if="plan.popular"
                          text="Most popular"
                          variant="tonal tonal-accent"
                          icon-code="&#xe838;"
                          size="sm"
                        />
                        <UiBadge v-if="plan.id === currentPlanId" text="Current" variant="tonal tonal-primary" size="sm" />
                      </UiBadgeGroup>
                    </div>

                    <p class="caption text-muted mb-0">
                      {{ plan.description }}
                    </p>

                    <div>
                      <p class="d-flex flex-wrap align-items-baseline gap-1 mb-0">
                        <span class="fs-3xl fw-800">{{ formatCurrency(priceFor(plan, billingCycle as BillingCycle)) }}</span>
                        <span class="caption text-muted">{{ plan.monthly ? 'per member / month' : 'free forever' }}</span>
                      </p>
                      <p class="caption text-muted mb-0">
                        {{ plan.seats }}<template v-if="plan.monthly && billingCycle === 'yearly'">
                          · billed yearly
                        </template>
                      </p>
                    </div>

                    <UiDivider custom-class="my-0" />

                    <ul class="d-flex flex-column gap-2 p-0 m-0" :aria-label="`${plan.name} features`">
                      <li v-for="feature in plan.features" :key="feature" class="d-flex align-items-center gap-2">
                        <UiIconMaterial icon-code="&#xe5ca;" class="text-success fs-base" />
                        {{ feature }}
                      </li>
                    </ul>
                  </div>
                </template>
              </UiCard>
            </div>
          </div>

          <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 mt-4">
            <p class="caption text-muted mb-0">
              {{ planSummary }}
            </p>
            <UiButton
              :text="planAction.label"
              :disabled="planAction.disabled"
              variant="filled"
              color="primary"
              @click="applyPlan"
            />
          </div>

          <div
            v-if="isUpdatingPlan"
            class="position-absolute top-0 right-0 bottom-0 left-0 z-5 d-flex align-items-center justify-content-center text-center bg-frosted rounded-lg"
          >
            <UiLoading
              title="Updating your plan…"
              :subtitle="`Moving Orbit to ${selectedPlan.name}. This takes a few seconds.`"
              spinner-size="48px"
            />
          </div>
        </template>
      </UiCard>
    </section>

    <!-- Payment method -->
    <UiCard title="Payment method" custom-class="mb-4" variant="pane" class="shadow-sm">
      <template #body>
        <UiAlert
          v-if="failedInvoice"
          type="tonal"
          variant="danger"
          title="Your June payment failed"
          :message="`We couldn't charge the Visa ending 4242 for ${failedInvoice.id} (${formatCurrency(failedInvoice.amount)}). Retry now or update your card to keep Pro features.`"
          custom-class="mb-4"
        >
          <template #actions>
            <UiButton
              text="Retry payment"
              variant="filled"
              color="danger"
              size="sm"
              :loading="isRetrying"
              @click="retryPayment"
            />
          </template>
        </UiAlert>

        <div class="d-flex flex-wrap align-items-center gap-3">
          <span class="d-inline-flex bg-info-container text-on-info-container rounded-md px-3 py-2 fw-800 fs-sm" aria-hidden="true">
            VISA
          </span>
          <div class="flex-grow-1">
            <div class="d-flex align-items-center gap-2 fw-600 mb-0">
              Visa ending 4242
              <UiBadge text="Default" variant="tonal tonal-primary" size="sm" />
            </div>
            <p class="caption text-muted mb-0">
              Expires 08/2028 · Receipts go to {{ currentUser.email }}
            </p>
          </div>
          <UiButton text="Update" variant="outline" size="sm" @click="updateCard">
            <template #icon>
              <UiIconMaterial icon-code="&#xe3c9;" />
            </template>
          </UiButton>
        </div>

        <UiDivider />

        <div class="d-flex align-items-center gap-2 caption text-muted mb-0">
          <UiIconMaterial icon-code="&#xe897;" class="fs-sm" />
          Payments are processed securely by
          <UiIconSvg :content="brandIcons.stripe" :size="48" :decorative="false" aria-label="Stripe" />
        </div>
      </template>
    </UiCard>

    <!-- Invoices -->
    <UiCard title="Invoices" variant="pane" class="shadow-sm">
      <template #body>
        <div v-if="invoicesLoading" class="table-responsive">
          <table class="table table-hover">
            <thead>
              <tr>
                <th v-for="column in invoiceColumns" :key="column.key" scope="col">
                  {{ column.label }}
                </th>
              </tr>
            </thead>
            <UiTableSkeleton :skeleton-rows="4" :skeleton-cols="invoiceColumns.length" aria-label="Loading invoices" />
          </table>
        </div>

        <UiDatatable
          v-else
          :columns="invoiceColumns"
          :items="invoiceRows"
          default-sort-key="id"
          default-sort-order="desc"
          caption="Amounts in USD. Taxes are included where they apply."
        >
          <template #cell-id="{ item }">
            <span class="fw-600">{{ item.id }}</span>
          </template>

          <template #cell-amount="{ item }">
            <span class="tabular-numbers">{{ formatCurrency(item.amount) }}</span>
          </template>

          <template #cell-status="{ item }">
            <UiBadge
              :text="invoiceStatusMeta[item.status as Invoice['status']].label"
              :variant="`tonal tonal-${invoiceStatusMeta[item.status as Invoice['status']].color}`"
              size="sm"
            />
          </template>

          <template #cell-actions="{ item }">
            <UiButtonTooltip
              variant="text"
              custom-class="text-neutral"
              size="sm"
              icon
              :tooltip-text="`Download ${item.id}`"
              @click="downloadInvoice(item.id)"
            >
              <template #icon>
                <UiIconMaterial icon-code="&#xe2c4;" />
              </template>
            </UiButtonTooltip>
          </template>
        </UiDatatable>
      </template>
    </UiCard>

    <!-- Cancel plan -->
    <UiConfirmModal
      ref="cancelModal"
      variant="danger"
      :title="`Cancel your ${currentPlan.name} ${onTrial ? 'trial' : 'plan'}?`"
      :message="`Orbit moves to Free on ${NEXT_INVOICE_DATE}. Automations stop, guests lose access and projects over the limit become read-only.`"
      :confirm-label="`Cancel ${currentPlan.name}`"
      :cancel-label="`Keep ${currentPlan.name}`"
      :is-loading="isCanceling"
      @confirm="cancelPlan"
    />
  </div>
</template>

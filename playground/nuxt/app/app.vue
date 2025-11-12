<script setup lang="ts">
import { UiAccordion, UiAccordionGroup, UiAlert, UiAlertToast, UiAvatar, UiBadge, UiBadgeGroup, UiButton, UiButtonFabGroup, UiButtonGroup, UiButtonMenu, UiButtonMenuDivider, UiButtonMenuItem, UiButtonMenuText, UiButtonTooltip, UiCard, UiHeaderContent, UiIconMaterial, UiInputSelect, UiInputText, UiModal, UiNavbar, UiNavbarAvatar, UiNavbarBrand, UiNavbarCollapse, UiNavbarItem, UiNavbarMobileMenu, UiNavbarTitle, UiNavbarToggle, UiPaneContent, UiSidebar, UiSidebarBody, UiSidebarDropdown, UiSidebarFooter, UiSidebarGroup, UiSidebarHeader, UiSidebarLink, UiSidebarText } from '@colorful/ui'

/** Data */
const colorMode = useColorMode()
const route = useRoute()
const toastRef = ref<InstanceType<typeof UiAlertToast> | null>(null)
const dialogRef = ref<InstanceType<typeof UiModal> | null>(null)
const sidebarCollapse = useState<boolean>('sidebarCollapse', () => false)
const user = {
  displayName: 'Giancarlos',
  email: 'giancarlosgza@gmail.com',
  photoURL: 'https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg'
}

/** Methods */
function showToast() {
  if (!toastRef.value)
    return

  toastRef.value.title = 'Hello!'
  toastRef.value.message = 'This is a toast message triggered by clicking the Primary Button.'
  toastRef.value.variant = 'warning'
  toastRef.value?.showToast()
}
function showDialog() {
  if (!dialogRef.value)
    return
  dialogRef.value?.showDialog()
}
function closeDialog() {
  if (!dialogRef.value)
    return
  dialogRef.value?.closeDialog()
}
</script>

<template>
  <div class="grid-main-content">
    <NuxtRouteAnnouncer />

    <!-- Sidebar -->
    <UiSidebar bordered :rail="sidebarCollapse">
      <UiSidebarHeader>
        <!-- <UiIconMaterial icon-code="&#xe88a;" class="drawer-brand-icon" /> -->
        <img
          src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" class="img-fluid"
          alt="Avatar Image"
        >
        <UiSidebarDropdown title="Nuxt" subtitle="Colorful UI" placement="right-start" :interactive="false">
          <UiButtonMenuText item-text="Workspace" />
          <UiButtonMenuItem
            item-text="Switch to Personal" icon="&#xe853;"
            icon-class="bg-primary-fixed rounded-sm p-1"
          />
          <UiButtonMenuItem
            item-text="Switch to Enterprise" icon="&#xe70e;"
            icon-class="bg-accent-fixed rounded-sm p-1"
          />
        </UiSidebarDropdown>
      </UiSidebarHeader>

      <UiSidebarBody>
        <UiSidebarText text="Platform" />
        <UiSidebarLink to="/" icon="&#xe88a;" active tooltip-text="Go to home page" tooltip-placement="top">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe88a;" />
              <span>Home</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>
        <UiSidebarLink to="/components" icon="&#xe5c3;" tooltip-text="View components">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe5c3;" />
              <span>Components</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>
        <UiSidebarLink to="/templates" icon="&#xe866;" tooltip-text="View templates">
          <template #link="{ linkTarget, linkClasses }">
            <NuxtLink :to="linkTarget" :class="linkClasses">
              <UiIconMaterial icon-code="&#xe866;" />
              <span>Templates</span>
            </NuxtLink>
          </template>
        </UiSidebarLink>

        <!-- Group -->
        <UiSidebarGroup text="Documentation">
          <UiSidebarLink to="/docs" icon="&#xe873;" child tooltip-text="View docs">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe873;" />
                <span>Documentation</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/api" icon="&#xe8ef;" text="API Reference" child tooltip-text="API docs">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe8ef;" />
                <span>API Reference</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/guides" icon="&#xe866;" text="Guides" child tooltip-text="View guides">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe866;" />
                <span>Guides</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
        </UiSidebarGroup>

        <!-- Collapsible Group -->
        <UiSidebarText text="Resources" />
        <UiSidebarGroup text="Settings" collapsible :default-open="true" icon="&#xe8b8;">
          <UiSidebarLink to="/settings/profile" icon="&#xe853;" child tooltip-text="User profile">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe853;" />
                <span>Profile</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/account" icon="&#xe8b8;" child tooltip-text="Account">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe8b8;" />
                <span>Account</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/security" icon="&#xe32a;" child tooltip-text="Security">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe32a;" />
                <span>Security</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/notifications" icon="&#xe7f4;" child tooltip-text="Notifications">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xe7f4;" />
                <span>Notifications</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
          <UiSidebarLink to="/settings/billing" icon="&#xf041;" child tooltip-text="Billing">
            <template #link="{ linkTarget, linkClasses }">
              <NuxtLink :to="linkTarget" :class="linkClasses">
                <UiIconMaterial icon-code="&#xf041;" />
                <span>Billing</span>
              </NuxtLink>
            </template>
          </UiSidebarLink>
        </UiSidebarGroup>
      </UiSidebarBody>

      <UiSidebarFooter>
        <div class="d-flex flex-wrap gap-2 align-items-center">
          <UiSidebarDropdown title="Gian" subtitle="giancarlosgza@gmail.com" :interactive="false" />
        </div>
        <div class="mt-2">
          <UiBadge text="v1.0.0" variant="outline" size="sm" icon-code="&#xf5f4;" icon-class="text-accent-fixed" />
        </div>
      </UiSidebarFooter>
    </UiSidebar>

    <!-- Content -->
    <main>
      <!-- Navbar -->
      <UiNavbar sticky fluid>
        <UiNavbarToggle :collapsed="sidebarCollapse" @toggle="sidebarCollapse = !sidebarCollapse" />
        <UiNavbarTitle :title="(route.meta.pageTitle as string) || 'Dashboard'">
          <template #brand>
            <UiNavbarBrand text="Admin" initials="A">
              <template #link="{ linkTarget, brandText }">
                <NuxtLink :to="linkTarget" class="navbar-logo">
                  {{ brandText }}
                </NuxtLink>
              </template>
            </UiNavbarBrand>
          </template>
        </UiNavbarTitle>

        <UiNavbarMobileMenu>
          <UiNavbarAvatar v-if="user" :src="user.photoURL" :alt="`${user.displayName} photo`" size="sm" />
        </UiNavbarMobileMenu>

        <UiNavbarCollapse>
          <template #start>
            <UiNavbarItem>
              <UiBadge
                text="ADMIN" variant="outline" custom-class="my-0" icon-code="&#xef3d;"
                icon-class="text-gradient g-violet"
              />
            </UiNavbarItem>
            <UiNavbarItem>
              <UiNavbarAvatar v-if="user" :src="user.photoURL" :alt="`${user.displayName} photo`" size="navbar" />
            </UiNavbarItem>
          </template>
        </UiNavbarCollapse>
      </UiNavbar>

      <div class="container mt-3">
        <!-- Header -->
        <UiHeaderContent
          title="Welcome to Nuxt Colorful UI"
          subtitle="A beautiful and customizable UI component library for Nuxt"
        />

        <!-- Content -->
        <div class="row">
          <div class="col-md-12">
            <UiCard variant="pane">
              <template #header>
                <UiButton variant="filled" text="Toggle Sidebar" @on-click="sidebarCollapse = !sidebarCollapse" />
              </template>
              <template #body>
                <h2 class="fs-400 fw-800">
                  Testing <span class="text-gradient g-primary">Components</span>
                </h2>
                <p class="subtitle-1 text-muted mb-0">
                  This is a test of your colorful-ui library!
                </p>
                <div
                  class="bg-success-fixed bg-opacity-20 border border-xxl border-inline border-success rounded-md p-2 mt-3"
                >
                  <p class="text-success-high-contrast fw-800 mb-0">
                    Text Green
                  </p>
                </div>
                <div
                  class="bg-danger-fixed border border-lg border-left border-danger bg-opacity-20 rounded-md p-2 mt-2"
                >
                  <p class="text-danger-high-contrast fw-800 mb-0">
                    Text Red
                  </p>
                </div>

                <hr>

                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="bum"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="arch"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="pill"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="sunny"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="gem"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="clover-4"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="clover-8"
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="cookie-6" mask-stretch
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="cookie-9" mask-stretch
                />
                <UiAvatar
                  src="https://images.pexels.com/photos/34692331/pexels-photo-34692331.jpeg" size="md"
                  mask-shape="cookie-12" mask-stretch
                />
              </template>
            </UiCard>
          </div>
        </div>
        <hr>

        <UiButtonGroup class="mt-section">
          <UiButton variant="filled" text="Primary Button" rounded @on-click="showToast" />
          <UiButton variant="filled" color="secondary" text="Secondary Button" />
          <UiButton variant="filled" color="accent" text="Accent Button" />

          <UiButton variant="filled" color="success" text="Success Button" />
          <UiButton variant="filled" color="warning" text="Warning Button" />
          <UiButton variant="filled" color="danger" text="Danger Button">
            <template #icon>
              <UiIconMaterial icon-code="&#xe000;" />
            </template>
          </UiButton>

          <UiButtonTooltip variant="default" text="Tooltip Button" tooltip-text="This is a tooltip example!">
            <template #icon>
              <UiIconMaterial icon-code="&#xe000;" />
            </template>
          </UiButtonTooltip>
        </UiButtonGroup>

        <UiButtonGroup connected class="mt-section">
          <UiButton variant="tonal" color="primary" text="Tonal Primary Button" @on-click="showDialog" />
          <UiButton variant="tonal" color="secondary" text="Tonal Secondary Button" />
          <UiButton variant="tonal" color="accent" text="Tonal Accent Button" />

          <UiButton variant="tonal" color="success" text="Tonal Success Button" />
          <UiButton variant="tonal" color="warning" text="Tonal Warning Button" />
          <UiButton variant="tonal" color="danger" text="Tonal Danger Button" />
        </UiButtonGroup>

        <div class="row mt-section">
          <div class="col-md-6">
            <UiButtonGroup connected joined vertical>
              <UiButton variant="tonal" color="accent" icon>
                <template #icon>
                  <UiIconMaterial icon-code="&#xe145;" />
                </template>
              </UiButton>
              <UiButton variant="tonal" color="accent" icon>
                <template #icon>
                  <UiIconMaterial icon-code="&#xf77b;" />
                </template>
              </UiButton>
              <UiButton variant="tonal" color="accent" icon>
                <template #icon>
                  <UiIconMaterial icon-code="&#xe15b;" />
                </template>
              </UiButton>
            </UiButtonGroup>
          </div>
          <div class="col-md-6">
            <UiButtonGroup connected>
              <UiButton variant="tonal" color="danger" text="Archive" />
              <UiButton variant="tonal" color="danger" text="Report">
                <template #icon>
                  <UiIconMaterial icon-code="&#xe160;" />
                </template>
              </UiButton>
              <UiButton variant="tonal" color="danger" text="Snooze" />
            </UiButtonGroup>
          </div>
        </div>
        <hr>

        <UiButtonGroup class="mt-section">
          <UiButtonMenu id="demo" variant="outline" text="Menu Button" icon-trailing>
            <template #icon>
              <UiIconMaterial icon-code="&#xe5c5;" />
            </template>
            <template #menu>
              <UiButtonMenuText item-text="My account" />
              <UiButtonMenuItem item-text="Profile" icon="&#xe853;" />
              <UiButtonMenuItem
                item-text="Billing" icon="&#xf041;"
                :badge="{ text: 'Issue', variant: 'tonal tonal-danger' }"
              />
              <UiButtonMenuItem
                item-text="Settings" icon="&#xe8b8;" shortcut="⌘ + P"
                :badge="{ text: '1', pill: true, variant: 'danger' }"
              />
              <UiButtonMenuDivider />
              <UiButtonMenuText item-text="Resources" />
              <UiButtonMenuItem item-text="Github" />
              <UiButtonMenuItem
                item-text="Support"
                :badge="{ text: 'NEW', variant: 'gradient', customClass: 'g-accent' }"
              />
              <UiButtonMenuItem item-text="API" disabled />
              <UiButtonMenuDivider />
              <UiButtonMenuItem item-text="Log Out" icon="&#xe9ba;" is-destructive />
            </template>
          </UiButtonMenu>
          <UiButton variant="chip" text="Chip Button" />
          <UiButton variant="outline" text="Small Button" size="sm" />
          <UiButton variant="outline" text="Large Button" size="lg" />
          <UiButton variant="outline" text="CTA Button" size="lg" class="btn-cta btn-gradient g-secondary text-white" />
          <UiButton variant="gradient" text="Gradient Button" size="lg" class="btn-cta" />
        </UiButtonGroup>
        <hr>

        <UiBadgeGroup class="mt-section">
          <UiBadge variant="primary" text="Primary" />
          <UiBadge variant="secondary" text="Secondary" />
          <UiBadge variant="accent" text="Accent" />
          <UiBadge variant="success" text="Success" />
          <UiBadge variant="warning" text="Warning" />
          <UiBadge variant="danger" text="Danger" />
          <UiBadge variant="outline" text="Outline" icon-code="&#xe061;" icon-class="text-danger-fixed" />
          <UiBadge variant="default" text="Default" />
          <UiBadge variant="neutral" text="Neutral" />
        </UiBadgeGroup>
        <UiBadgeGroup class="mt-section">
          <UiBadge variant="tonal tonal-primary" text="Tonal Primary" />
          <UiBadge variant="tonal tonal-secondary" text="Tonal Secondary" />
          <UiBadge variant="tonal tonal-accent" text="Tonal Accent" />
          <UiBadge variant="tonal tonal-success" text="Tonal Success" />
          <UiBadge variant="tonal tonal-warning" text="Tonal Warning" />
          <UiBadge variant="tonal tonal-danger" text="Tonal Danger" />
        </UiBadgeGroup>
        <hr>

        <div class="row mt-section mt-section-lg">
          <div class="col-md-6">
            <UiPaneContent>
              <UiAccordionGroup is-transparent>
                <UiAccordion title="Accordion Demo" name="demo">
                  <template #content>
                    <p>This is the content for Accordion Item 1.</p>
                  </template>
                </UiAccordion>
                <UiAccordion title="Another Accordion" name="demo">
                  <template #content>
                    <p>This is the content for Accordion Item 2.</p>
                  </template>
                </UiAccordion>
              </UiAccordionGroup>
            </UiPaneContent>
          </div>
          <div class="col-md-6">
            <UiCard variant="outline" class="bg-gradient g-primary" style="--gradient-angle: 45deg;">
              <template #body>
                <p class="subtitle-1 font-primary fw-800 text-dark mb-0">
                  This is a sample card component to demonstrate the usage of UiCard in Colorful UI.
                </p>
              </template>
            </UiCard>
            <UiCard
              variant="outline" class="border border-xl border-gradient g-secondary mt-3"
              style="--gradient-angle: 45deg;"
            >
              <template #body>
                <p class="subtitle-1 mb-0">
                  This is a sample card component to demonstrate the usage of UiCard in Colorful UI.
                </p>
              </template>
            </UiCard>
          </div>
        </div>

        <UiButtonFabGroup>
          <UiButton variant="tonal" color="primary" class="btn-fab" text="Add" @on-click="showDialog">
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiButton>
          <UiButton variant="tonal" color="warning" class="btn-fab">
            <template #icon>
              <UiIconMaterial icon-code="&#xe0b0;" />
            </template>
          </UiButton>
        </UiButtonFabGroup>

        <UiAlert message="Your library is working correctly!" type="snackbar" variant="success" />

        <UiAlertToast ref="toastRef" />
        <UiModal ref="dialogRef" mode="headless" size="sm">
          <template #header>
            <UiIconMaterial icon-code="&#xe838;" />
            <div>
              <p class="dialog-title">
                Modal Title Demo
              </p>
              <p class="dialog-subtitle">
                This is a subtitle for the modal dialog.
              </p>
            </div>
          </template>
          <template #body>
            <UiAlert message="This is an alert inside the modal dialog!" type="tonal" variant="accent" />
            <hr class="mt-1">
            <UiInputSelect
              id="theme" v-model="colorMode.preference" label="Theme Mode" option-label="label"
              option-value="value" :options="[
                {
                  label: 'Light',
                  value: 'light',
                },
                {
                  label: 'Dark',
                  value: 'dark',
                },
              ]"
            />
            <UiInputText id="input-sample" label="Sample Input" placeholder="Enter some text..." class="mb-3" />
            <p class="subtitle-1 fw-500">
              This is the content of the modal dialog.
            </p>
            <p class="subtitle-2 text-muted">
              Additional content can go here.
            </p>
          </template>
          <template #footer>
            <UiButton variant="text" text="Close" @on-click="closeDialog" />
          </template>
        </UiModal>
      </div>
    </main>
  </div>
</template>

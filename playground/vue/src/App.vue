<script setup lang="ts">
// Manual Component Registration
import { UiButton, UiCard, UiAlert, UiBadge, UiIconMaterial, UiBadgeGroup, UiHeaderContent, UiAccordionGroup, UiAccordion, UiPaneContent, UiButtonTooltip, UiAlertToast, UiModal, UiInputText, UiDrawerLink, UiButtonMenu, UiButtonMenuItem, UiButtonMenuText } from '@colorful/ui'
import { ref } from 'vue';

/** Data */
const toastRef = ref<InstanceType<typeof UiAlertToast> | null>(null)
const dialogRef = ref<InstanceType<typeof UiModal> | null>(null);

/** Methods */
function showToast() {
  if (!toastRef.value) return;

  toastRef.value.title = "Hello!";
  toastRef.value.message = "This is a toast message triggered by clicking the Primary Button.";
  toastRef.value.variant = "warning";
  toastRef.value?.showToast();
}
function showDialog() {
  if (!dialogRef.value) return;
  dialogRef.value?.showDialog();
}
function closeDialog() {
  if (!dialogRef.value) return;
  dialogRef.value?.closeDialog();
}
</script>

<template>
  <div class="grid-main-content">
    <div class="navigation-drawer drawer-bordered">
      <div class="drawer-content">
        <header class="drawer-header">
          <UiIconMaterial icon-code="&#xe88a;" />
        </header>
        <nav class="drawer-body">
          <a href="/" class="drawer-item router-link-exact-active">
            <UiIconMaterial icon-code="&#xe88a;" />
            Home
          </a>
        </nav>
      </div>
    </div>
    <main>
      <div class="container mt-5">
        <!-- Header -->
        <UiHeaderContent title="Welcome to Vue Colorful UI"
          subtitle="A beautiful and customizable UI component library for Vue.js" />


        <!-- Content -->
        <div class="row">
          <div class="col-md-12">
            <UiCard variant="pane">
              <template #body>
                <h2 class="fs-400 fw-800">Testing <span class="text-gradient g-secondary">Components</span></h2>
                <p class="subtitle-1 text-muted mb-0">This is a test of your colorful-ui library!</p>
                <div
                  class="bg-success-fixed bg-opacity-20 border border-xxl border-inline border-success rounded-md p-2 mt-3">
                  <p class="text-success-high-contrast fw-800 mb-0">
                    Text Green
                  </p>
                </div>
                <div
                  class="bg-danger-fixed border border-lg border-left border-danger bg-opacity-20 rounded-md p-2 mt-2">
                  <p class="text-danger-high-contrast fw-800 mb-0">
                    Text Red
                  </p>
                </div>
              </template>
            </UiCard>
          </div>
        </div>
        <hr>

        <div class="btn-group spacing">
          <UiButton variant="filled" text="Primary Button" @on-click="showToast"></UiButton>
          <UiButton variant="filled" color="secondary" text="Secondary Button"></UiButton>
          <UiButton variant="filled" color="accent" text="Accent Button"></UiButton>

          <UiButton variant="filled" color="success" text="Success Button"></UiButton>
          <UiButton variant="filled" color="warning" text="Warning Button"></UiButton>
          <UiButton variant="filled" color="danger" text="Danger Button">
            <template #icon>
              <UiIconMaterial icon-code="&#xe000;"></UiIconMaterial>
            </template>
          </UiButton>

          <UiButtonTooltip variant="default" text="Tooltip Button" tooltip-text="This is a tooltip example!">
            <template #icon>
              <UiIconMaterial icon-code="&#xe000;"></UiIconMaterial>
            </template>
          </UiButtonTooltip>
        </div>

        <div class="btn-group spacing">
          <UiButton variant="tonal" text="Tonal Primary Button" @on-click="showDialog"></UiButton>
          <UiButton variant="tonal" color="secondary" text="Tonal Secondary Button"></UiButton>
          <UiButton variant="tonal" color="accent" text="Tonal Accent Button"></UiButton>

          <UiButton variant="tonal" color="success" text="Tonal Success Button"></UiButton>
          <UiButton variant="tonal" color="warning" text="Tonal Warning Button"></UiButton>
          <UiButton variant="tonal" color="danger" text="Tonal Danger Button"></UiButton>
        </div>
        <hr>

        <div class="btn-group spacing">
          <UiButtonMenu variant="outline" text="Outline Menu Button">
            <template #menu>
              <UiButtonMenuText item-text="Header" />
              <UiButtonMenuItem item-text="Item 1" icon="&#xe5c3;" />
              <UiButtonMenuItem item-text="Item 2" icon="&#xe5c4;" />
              <UiButtonMenuItem item-text="Item 3" icon="&#xe5c5;" />
            </template>
          </UiButtonMenu>
          <UiButton variant="chip" text="Chip Button"></UiButton>
          <UiButton variant="outline" text="Small Button" size="sm"></UiButton>
          <UiButton variant="outline" text="Large Button" size="lg"></UiButton>
          <UiButton variant="outline" text="CTA Button" size="lg" class="btn-cta btn-gradient g-secondary"></UiButton>
          <UiButton variant="gradient" text="Gradient Button" size="lg" class="btn-cta"></UiButton>
        </div>
        <hr>

        <UiBadgeGroup class="spacing">
          <UiBadge variant="outline" text="Default"></UiBadge>
          <UiBadge variant="primary" text="Primary"></UiBadge>
          <UiBadge variant="success" text="Success"></UiBadge>
          <UiBadge variant="danger" text="Danger"></UiBadge>
        </UiBadgeGroup>
        <hr>

        <div class="row spacing">
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
            <UiCard variant="outline" class="bg-gradient g-secondary" style="--gradient-angle: 45deg;">
              <template #body>
                <p class="subtitle-1 font-primary fw-800 mb-0">
                  This is a sample card component to demonstrate the usage of UiCard in Colorful UI.
                </p>
              </template>
            </UiCard>
            <UiCard variant="outline" class="border border-xl border-gradient g-secondary mt-3"
              style="--gradient-angle: 45deg;">
              <template #body>
                <p class="subtitle-1 font-primary fw-800 mb-0">
                  This is a sample card component to demonstrate the usage of UiCard in Colorful UI.
                </p>
              </template>
            </UiCard>
          </div>
        </div>

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
            <UiInputText label="Sample Input" placeholder="Enter some text..." id="input-sample" class="mb-3" />
            <p class="subtitle-1 fw-500">This is the content of the modal dialog.</p>
            <p class="subtitle-2 text-muted">Additional content can go here.</p>
          </template>
          <template #footer>
            <UiButton variant="text" text="Close" @on-click="closeDialog" />
          </template>
        </UiModal>
      </div>
    </main>
  </div>
</template>

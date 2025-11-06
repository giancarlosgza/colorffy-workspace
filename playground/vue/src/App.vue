<script setup lang="ts">
// Manual Component Registration
import { UiButton, UiCard, UiAlert, UiBadge, UiIconMaterial, UiBadgeGroup, UiHeaderContent, UiAccordionGroup, UiAccordion, UiPaneContent, UiButtonTooltip, UiAlertToast, UiModal, UiInputText } from '@giancarlosgza/colorful-ui'
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
  <div class="container mt-5">
    <!-- Header -->
    <UiHeaderContent title="Welcome to Colorful UI"
      subtitle="A beautiful and customizable UI component library for Vue.js" />


    <!-- Content -->
    <div class="row">
      <div class="col-md-12">
        <UiCard variant="pane">
          <template #body>
            <h2 class="fs-500">Testing Components</h2>
            <p class="subtitle-1 text-muted mb-0">This is a test of your colorful-ui library!</p>
          </template>
        </UiCard>
      </div>
    </div>

    <div class="d-flex gap-3 spacing">
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

    <div class="d-flex gap-3 spacing">
      <UiButton variant="tonal" text="Tonal Primary Button" @on-click="showDialog"></UiButton>
      <UiButton variant="tonal" color="secondary" text="Tonal Secondary Button"></UiButton>
      <UiButton variant="tonal" color="accent" text="Tonal Accent Button"></UiButton>

      <UiButton variant="tonal" color="success" text="Tonal Success Button"></UiButton>
      <UiButton variant="tonal" color="warning" text="Tonal Warning Button"></UiButton>
      <UiButton variant="tonal" color="danger" text="Tonal Danger Button"></UiButton>
    </div>

    <div class="d-flex gap-3 spacing">
      <UiButton variant="outline" text="Outline Button"></UiButton>
      <UiButton variant="chip" text="Chip Button"></UiButton>
      <UiButton variant="outline" text="Small Button" size="sm"></UiButton>
      <UiButton variant="outline" text="Large Button" size="lg"></UiButton>
      <UiButton variant="outline" text="CTA Button" size="lg" class="btn-cta"></UiButton>
      <UiButton variant="gradient" text="Gradient Button" size="lg" class="btn-cta"></UiButton>
    </div>

    <UiBadgeGroup class="spacing">
      <UiBadge variant="outline" text="Default"></UiBadge>
      <UiBadge variant="primary" text="Primary"></UiBadge>
      <UiBadge variant="success" text="Success"></UiBadge>
      <UiBadge variant="danger" text="Danger"></UiBadge>
    </UiBadgeGroup>

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
</template>

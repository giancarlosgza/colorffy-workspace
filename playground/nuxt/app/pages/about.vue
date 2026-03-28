<script>
</script>

<template>
  <div class="container mt-3">
    <!-- Header -->
    <UiHeaderContent
      title="About Page"
      subtitle="This is the about page of the Nuxt application"
      actions :hide-actions-on-mobile="false"
    >
      <template #actions>
        <UiButton
          text="CREATE USER"
          variant="filled"
          rounded
        >
          <template #icon>
            <UiIconMaterial icon-code="&#xe145;" />
          </template>
        </UiButton>
      </template>
    </UiHeaderContent>

    <UiPaneContent>
      <UiEmpty
        title="No Data Available"
        subtitle="There is currently no data to display."
        use-custom-icon
      />

      <div class="row">
        <div class="col-md-12 mb-3">
          <UiInputFile
            id="file-upload"
            input-label="Upload a file"
            label="Image"
          />
        </div>
        <div class="col-md-6">
          <UiInputText
            id="text"
            label="Text"
            placeholder="Enter some text"
          />
        </div>
        <div class="col-md-6">
          <UiInputText
            id="text-disabled"
            label="Text"
            placeholder="This input is disabled"
            disabled
          />
        </div>
      </div>
    </UiPaneContent>

    <div class="row">
      <div class="col-md-12">
        <UiCard variant="pane" class="mt-3">
          <template #body>
            <p>This is a card component. You can use it to display content in a structured way.</p>
          </template>
        </UiCard>
      </div>

      <div class="col-md-12 mb-3 d-grid grid-repeat-cols-md-2 gap-3">
        <div class="bg-gradient gradient-primary w-100 rounded-lg p-5" />
        <div class="bg-gradient gradient-secondary w-100 rounded-lg p-5" />
        <div class="bg-gradient gradient-accent w-100 rounded-lg p-5" />
        <div class="bg-gradient gradient-success w-100 rounded-lg p-5" />

        <div class="bg-gradient gradient-yellow w-100 rounded-lg p-5" />
        <div class="bg-gradient gradient-indigo-dark angle-90 w-100 rounded-lg p-5" />
      </div>
    </div>
  </div>
</template>

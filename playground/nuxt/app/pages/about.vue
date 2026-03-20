<script>
</script>

<template>
  <div class="container mt-3">
    <!-- Header -->
    <UiHeaderContent
      title="About Page"
      subtitle="This is the about page of the Nuxt application"
    />

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
          large
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
  </div>
</template>

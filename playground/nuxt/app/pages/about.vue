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
        <UiButtonGroup connected>
          <UiButton
            text="CREATE USER"
            variant="filled"
            color="white"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe145;" />
            </template>
          </UiButton>
          <UiButton
            text="REFRESH"
            variant="outline"
            class="btn-filled filled-white"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe86a;" />
            </template>
          </UiButton>
          <UiButtonTooltip
            tooltip-text="Download"
            variant="tonal"
            color="accent"
            icon icon-variant="shape-sm"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xf090;" />
            </template>
          </UiButtonTooltip>
          <UiButtonMenu
            tooltip-text="Manage"
            variant="tonal"
            color="accent"
            tooltip-placement="left"
            placement="bottom"
          >
            <template #icon>
              <UiIconMaterial icon-code="&#xe8b8;" />
            </template>
            <template #menu>
              <UiButtonMenuItem item-text="Edit" />
            </template>
          </UiButtonMenu>
        </UiButtonGroup>
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
        <div class="col-md-12">
          <UiInputTextarea
            id="text-disabled"
            label="Text"
            placeholder="This input is disabled"
            disabled
          />
        </div>
        <div class="col-md-4">
          <UiInputText
            id="text"
            label="Text"
            placeholder="Enter some text"
            size="sm"
            hide-label
            optional-label
          />
        </div>
        <div class="col-md-4">
          <UiInputText
            id="text-disabled"
            label="Text"
            placeholder="This input is disabled"
            size="lg"
            disabled
            required
            optional-label
          />
        </div>
        <div class="col-md-4">
          <UiInputSelect
            id="text-select"
            label="Text"
            placeholder="Select your option"
            size="sm"
            optional-label
            hide-label
            option-label="label"
            option-value="value"
            :options="[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]"
          />
        </div>
        <div class="col-md-4">
          <UiInputColorPicker
            id="color-picker"
            label="Color Picker"
          />
        </div>
        <div class="col-md-4">
          <UiInputRange
            id="range"
            label="Range"
            size="lg"
            :min="0" :max="10"
            :step="1"
          />
        </div>

        <div class="col-md-4">
          <UiInputCheck
            id="check"
            label="Switch"
            variant="switch"
            hide-label
            size="lg"
          />
          <UiInputCheck
            id="switch"
            label="Checkbox"
            size="lg"
            required
          />
          <UiInputRadio
            id="radio"
            label="Favorite Color"
            option-label="name"
            option-value="id"
            required
            :options="[
              { name: 'Red', hex: '#ff0000', id: 'red' },
              { name: 'Blue', hex: '#0000ff', id: 'blue' },
              { name: 'Green', hex: '#00ff00', id: 'green' },
            ]"
          />
        </div>
      </div>
    </UiPaneContent>

    <div class="row">
      <div class="col-md-12">
        <UiCard variant="pane" class="my-3">
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

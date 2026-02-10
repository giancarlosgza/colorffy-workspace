# Best Practices & Patterns

Common patterns, workflows, and best practices for using Colorffy UI and CSS effectively.

## Common Patterns

### Form with Validation

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UiInputText, UiInputSelect, UiButton } from '@colorffy/ui'

const name = ref('')
const role = ref('')
const errors = ref({ name: '', role: '' })

const validate = () => {
  errors.value = { name: '', role: '' }
  if (!name.value) errors.value.name = 'Name is required'
  if (!role.value) errors.value.role = 'Role is required'
  return !errors.value.name && !errors.value.role
}

const submit = () => {
  if (validate()) {
    console.log('Form valid:', { name: name.value, role: role.value })
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="d-flex flex-column gap-3">
    <UiInputText
      v-model="name"
      label="Name"
      placeholder="Enter your name"
      :error="errors.name"
      required
    />
    
    <UiInputSelect
      v-model="role"
      label="Role"
      :options="[
        { label: 'Developer', value: 'dev' },
        { label: 'Designer', value: 'designer' },
        { label: 'Manager', value: 'manager' }
      ]"
      :error="errors.role"
      required
    />
    
    <UiButton 
      type="submit"
      variant="filled" 
      color="primary"
      text="Submit"
    />
  </form>
</template>
```

### Modal with Actions

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UiModal, UiButton, UiInputText } from '@colorffy/ui'

const isOpen = ref(false)
const itemName = ref('')

const handleSave = () => {
  console.log('Saving:', itemName.value)
  isOpen.value = false
  itemName.value = ''
}

const handleCancel = () => {
  isOpen.value = false
  itemName.value = ''
}
</script>

<template>
  <UiButton text="Edit Item" @click="isOpen = true" />
  
  <UiModal v-model="isOpen" title="Edit Item" size="md">
    <template #body>
      <UiInputText
        v-model="itemName"
        label="Item Name"
        placeholder="Enter item name"
      />
    </template>
    <template #footer>
      <div class="d-flex gap-2 justify-content-end">
        <UiButton 
          text="Cancel" 
          variant="outline"
          @click="handleCancel" 
        />
        <UiButton 
          text="Save" 
          variant="filled"
          color="primary"
          @click="handleSave" 
        />
      </div>
    </template>
  </UiModal>
</template>
```

### Confirmation Dialog

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UiConfirmModal } from '@colorffy/ui'

const showConfirm = ref(false)

const handleDelete = () => {
  console.log('Item deleted')
}
</script>

<template>
  <UiButton 
    text="Delete"
    variant="filled"
    color="danger"
    @click="showConfirm = true"
  />
  
  <UiConfirmModal
    v-model="showConfirm"
    title="Confirm Deletion"
    message="Are you sure you want to delete this item? This action cannot be undone."
    confirm-text="Delete"
    cancel-text="Cancel"
    variant="danger"
    @confirm="handleDelete"
  />
</template>
```

### Toast Notifications

```vue
<script setup lang="ts">
import { useToast } from '@colorffy/ui'

const toast = useToast()

const showSuccess = () => {
  toast.show({
    message: 'Operation completed successfully!',
    variant: 'success',
    duration: 3000
  })
}

const showError = () => {
  toast.show({
    message: 'Something went wrong. Please try again.',
    variant: 'danger',
    duration: 5000
  })
}

const showInfo = () => {
  toast.show({
    message: 'Processing your request...',
    variant: 'info',
    duration: 2000
  })
}
</script>

<template>
  <div class="d-flex gap-2">
    <UiButton text="Success" color="success" @click="showSuccess" />
    <UiButton text="Error" color="danger" @click="showError" />
    <UiButton text="Info" color="info" @click="showInfo" />
  </div>
</template>
```

### Data Table with Actions

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { UiDatatable, UiButton, UiButtonMenu, UiButtonMenuItem } from '@colorffy/ui'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' }
])

const columns = [
  { field: 'name', label: 'Name', sortable: true },
  { field: 'email', label: 'Email', sortable: true },
  { field: 'role', label: 'Role', filterable: true },
  { field: 'actions', label: 'Actions' }
]

const editUser = (user) => {
  console.log('Edit:', user)
}

const deleteUser = (user) => {
  console.log('Delete:', user)
}
</script>

<template>
  <UiDatatable
    :columns="columns"
    :data="users"
    :paginate="true"
    :per-page="10"
  >
    <template #cell-actions="{ row }">
      <UiButtonMenu text="Actions" variant="text" size="sm">
        <template #menu>
          <UiButtonMenuItem @click="editUser(row)">Edit</UiButtonMenuItem>
          <UiButtonMenuItem @click="deleteUser(row)">Delete</UiButtonMenuItem>
        </template>
      </UiButtonMenu>
    </template>
  </UiDatatable>
</template>
```

### Responsive Card Grid

```vue
<template>
  <div class="container">
    <div class="row gap-3">
      <div 
        v-for="item in items" 
        :key="item.id"
        class="col-12 col-md-6 col-lg-4"
      >
        <UiCard class="h-100">
          <template #header>
            <h3>{{ item.title }}</h3>
          </template>
          <template #body>
            <p>{{ item.description }}</p>
          </template>
          <template #footer>
            <UiButton 
              text="View Details" 
              variant="filled"
              size="sm"
            />
          </template>
        </UiCard>
      </div>
    </div>
  </div>
</template>
```

### Loading States

```vue
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { UiLoading, UiTableSkeleton, UiDatatable } from '@colorffy/ui'

const loading = ref(true)
const data = ref([])

onMounted(async () => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  data.value = [/* fetched data */]
  loading.value = false
})
</script>

<template>
  <div>
    <UiTableSkeleton v-if="loading" :cols="4" :rows="5" />
    <UiDatatable v-else :data="data" :columns="columns" />
  </div>
</template>
```

### Empty States

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { UiEmpty, UiButton, UiDatatable } from '@colorffy/ui'

const data = ref([])
const hasData = computed(() => data.value.length > 0)
</script>

<template>
  <div>
    <UiDatatable v-if="hasData" :data="data" :columns="columns" />
    <UiEmpty
      v-else
      title="No data found"
      message="Try adjusting your filters or create a new item"
      icon="&#xe8b6;"
    >
      <template #action>
        <UiButton text="Create New" variant="filled" color="primary" />
      </template>
    </UiEmpty>
  </div>
</template>
```

## Best Practices

### 1. Component Organization

**Group related components:**

```vue
<!-- ❌ Avoid -->
import { UiButton } from '@colorffy/ui'
import { UiCard } from '@colorffy/ui'
import { UiAlert } from '@colorffy/ui'

<!-- ✅ Better -->
import { UiButton, UiCard, UiAlert } from '@colorffy/ui'
```

### 2. Form Validation

**Validate on blur and submit:**

```vue
<script setup lang="ts">
const validateField = (field: string) => {
  // Validate individual field
}

const validateForm = () => {
  // Validate entire form before submit
}
</script>

<template>
  <UiInputText
    v-model="email"
    @blur="validateField('email')"
    :error="errors.email"
  />
</template>
```

### 3. Error Handling

**Provide clear, actionable error messages:**

```typescript
// ❌ Avoid generic errors
errors.value.name = 'Invalid'

// ✅ Be specific
errors.value.name = 'Name must be at least 3 characters'
errors.value.email = 'Please enter a valid email address'
```

### 4. Loading States

**Show appropriate feedback during async operations:**

```vue
<UiButton 
  text="Save"
  variant="filled"
  :loading="isSaving"
  :disabled="isSaving"
  @click="save"
/>
```

### 5. Responsive Design

**Mobile-first approach:**

```html
<!-- ✅ Start small, scale up -->
<div class="col-12 col-md-6 col-lg-4">
  Content
</div>

<!-- ❌ Avoid starting large -->
<div class="col-4 col-md-6 col-sm-12">
  Content
</div>
```

### 6. Accessibility

**Always provide labels and ARIA attributes:**

```vue
<UiInputText
  v-model="email"
  label="Email Address"
  placeholder="you@example.com"
  type="email"
  required
  aria-describedby="email-hint"
/>
<p id="email-hint" class="form-hint">
  We'll never share your email
</p>
```

### 7. Performance

**Use v-show for frequently toggled content:**

```vue
<!-- ✅ For frequent toggling -->
<UiCard v-show="isVisible">Content</UiCard>

<!-- ✅ For conditional rendering -->
<UiModal v-if="isOpen">Content</UiModal>
```

### 8. TypeScript Usage

**Leverage type definitions:**

```typescript
import type { ButtonVariant, AlertType } from '@colorffy/ui'

const variant = ref<ButtonVariant>('filled')
const alertType = ref<AlertType>('success')
```

### 9. Composables

**Extract reusable logic:**

```typescript
// composables/useConfirmDelete.ts
import { ref } from 'vue'
import { useToast } from '@colorffy/ui'

export function useConfirmDelete() {
  const showConfirm = ref(false)
  const toast = useToast()
  
  const confirmDelete = async (item: any) => {
    showConfirm.value = true
    // Handle confirmation
  }
  
  return {
    showConfirm,
    confirmDelete
  }
}
```

### 10. Layout Hierarchy

**Use consistent spacing scale:**

```html
<!-- Section spacing: gap-5 -->
<div class="container gap-5">
  <!-- Component spacing: gap-3 -->
  <div class="card gap-3">
    <!-- Element spacing: gap-1 -->
    <div class="d-flex gap-1">
      <UiButton />
      <UiButton />
    </div>
  </div>
</div>
```

## Anti-Patterns to Avoid

1. **Don't use inline styles excessively** - Use utility classes or scoped styles
2. **Don't override component internals** - Use provided props and slots
3. **Don't skip labels on form inputs** - Always provide accessible labels
4. **Don't forget error handling** - Always handle async operation failures
5. **Don't use too many modal layers** - Max 2 modals deep
6. **Don't put complex logic in templates** - Extract to computed properties or methods
7. **Don't ignore responsive breakpoints** - Test at all sizes
8. **Don't mix naming conventions** - Stick to one approach (Colorffy CSS or custom)

## Performance Tips

1. **Lazy load routes and components** for faster initial load
2. **Use individual imports** instead of global registration for better tree-shaking
3. **Debounce search inputs** to reduce API calls
4. **Virtualize long lists** with libraries like vue-virtual-scroller
5. **Use v-memo** for expensive list items
6. **Optimize images** and use modern formats (WebP, AVIF)
7. **Code split** large feature modules

<script setup lang="ts">
import type { ITagsInputEmits, ITagsInputProps } from '@/types/input'
import { computed, ref, watch } from 'vue'
import { formatLabel, useLabels } from '@/composables/useColorffyConfig'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<ITagsInputProps>(), {
  id: null,
  label: null,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  optionalLabel: false,
  variant: null,
  rounded: false,
  customClass: null,
  size: null,
  hideLabel: false,
  max: null,
  allowDuplicates: false,
  separator: ',',
  maxlength: 50
})

/** Emits */
const emit = defineEmits<ITagsInputEmits>()
/** Labels */
const l10n = useLabels('tags')
const l10nCommon = useLabels('common')
const removeText = computed(() => props.removeLabel ?? l10n.value.remove)

/** Model */
const model = defineModel<string[]>('modelValue', { default: () => [] })

/** Data */
const draft = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const announcement = ref('')

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const inputId = computed(() => props.id ?? undefined)
const describedById = computed(() => (hasErrors.value && props.id ? `${props.id}-error-0` : undefined))
const isFull = computed(() => props.max != null && model.value.length >= props.max)
const isLocked = computed(() => props.disabled || props.readonly)

const groupClasses = computed(() => ['form-group', { 'form-invalid': hasErrors.value }])
const labelClasses = computed(() => ['mb-2', { 'visually-hidden': props.hideLabel }])
const fieldClasses = computed(() => [
  'form-tags',
  props.variant ? `form-${props.variant}` : null,
  props.size ? `form-${props.size}` : null,
  { 'form-rounded': props.rounded },
  props.customClass
])

/** Methods */
function setTags(tags: string[]): void {
  model.value = tags
  emit('update', tags)
}
// One pass over every candidate: the v-model value only updates after the parent re-renders
function addTags(candidates: string[]): void {
  const next = [...model.value]
  const added: string[] = []
  const messages: string[] = []
  let overMax = false
  for (const raw of candidates) {
    const tag = raw.trim().slice(0, props.maxlength)
    if (!tag)
      continue
    if (props.max != null && next.length >= props.max) {
      emit('reject', tag, 'max')
      overMax = true
      continue
    }
    if (!props.allowDuplicates && next.some(existing => existing.toLowerCase() === tag.toLowerCase())) {
      emit('reject', tag, 'duplicate')
      messages.push(formatLabel(l10n.value.duplicate, { tag }))
      continue
    }
    next.push(tag)
    added.push(tag)
  }
  if (overMax)
    messages.push(formatLabel(l10n.value.full, { max: props.max! }))
  if (added.length) {
    setTags(next)
    added.forEach(tag => emit('add', tag))
    messages.unshift(formatLabel(l10n.value.added, { tags: added.join(', ') }))
  }
  if (messages.length)
    announcement.value = messages.join('. ')
}
function removeAt(index: number): void {
  const tag = model.value[index]
  if (tag === undefined || isLocked.value)
    return
  setTags(model.value.filter((_, i) => i !== index))
  emit('remove', tag)
  announcement.value = formatLabel(l10n.value.removed, { tag })
  inputRef.value?.focus()
}
function commit(): void {
  addTags([draft.value])
  draft.value = ''
}
function onKeydown(event: KeyboardEvent): void {
  // An empty Enter still submits the surrounding form
  if (event.key === 'Enter' && draft.value.trim()) {
    event.preventDefault()
    commit()
  } else if (event.key === 'Backspace' && !draft.value && model.value.length) {
    removeAt(model.value.length - 1)
  }
}
// A list is split here, before the field's maxlength can cut the paste short
function onPaste(event: ClipboardEvent): void {
  const text = event.clipboardData?.getData('text') ?? ''
  if (!text.includes('\n') && !(props.separator && text.includes(props.separator)))
    return
  event.preventDefault()
  const lines = `${draft.value}${text}`.split(/\r?\n/)
  addTags(props.separator ? lines.flatMap(line => line.split(props.separator)) : lines)
  draft.value = ''
}
function focusInput(event: MouseEvent): void {
  if (event.target === event.currentTarget)
    inputRef.value?.focus()
}

/** Watchers */
// The separator is read from the text, not the key: mobile keyboards send no usable key name
watch(draft, (value) => {
  if (!props.separator || !value.includes(props.separator))
    return
  const parts = value.split(props.separator)
  draft.value = parts.pop() ?? ''
  addTags(parts)
})
</script>

<template>
  <div :class="groupClasses">
    <label
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>

    <div
      :class="fieldClasses"
      @click="focusInput"
    >
      <span
        v-for="(tag, index) in model"
        :key="`${tag}-${index}`"
        class="btn btn-chip chip-closable"
        :class="{ disabled: isLocked }"
      >
        <span class="chip-content">{{ tag }}</span>
        <button
          v-if="!isLocked"
          type="button"
          class="chip-remove"
          :aria-label="`${removeText} ${tag}`"
          @click="removeAt(index)"
        >
          <UiIconMaterial icon-code="&#xe5cd;" />
        </button>
      </span>

      <input
        :id="inputId"
        ref="inputRef"
        v-model="draft"
        class="form-tags-input"
        :class="{ 'visually-hidden': model.length && (isFull || isLocked) }"
        type="text"
        enterkeyhint="enter"
        :maxlength="maxlength"
        :placeholder="model.length ? undefined : placeholder ?? undefined"
        :disabled="disabled"
        :readonly="readonly || isFull"
        :required="required && !model.length"
        :aria-invalid="hasErrors || undefined"
        :aria-describedby="describedById"
        @keydown="onKeydown"
        @paste="onPaste"
        @blur="commit"
      >
    </div>

    <!-- Feedback -->
    <p
      v-if="hasErrors"
      :id="describedById"
      class="invalid-feedback"
    >
      {{ errorMessages?.[0] }}
    </p>
    <p
      v-else-if="optionalLabel"
      class="caption text-muted mt-1"
    >
      {{ l10nCommon.optional }}
    </p>

    <span class="visually-hidden" aria-live="polite">{{ announcement }}</span>
  </div>
</template>

<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { IInputOtpEmits, IInputOtpProps } from '@/types/input'
import { computed, nextTick, onMounted, ref, useId, watch } from 'vue'

/** Props */
const props = withDefaults(defineProps<IInputOtpProps>(), {
  id: null,
  label: null,
  modelValue: '',
  length: 6,
  errorMessages: () => [],
  placeholder: null,
  disabled: false,
  required: false,
  readonly: false,
  rounded: false,
  customClass: null,
  optionalLabel: false,
  variant: null,
  size: null,
  hideLabel: false,
  integerOnly: true,
  autofocus: false
})

/** Emits */
const emit = defineEmits<IInputOtpEmits>()

/** Model */
const model = defineModel<string>('modelValue', { default: '' })

/** Refs */
const boxRefs = ref<(HTMLInputElement | null)[]>([])

/** Composables */
const labelId = useId()

/** Computed */
const hasErrors = computed(() => props.errorMessages?.length > 0)
const baseId = computed(() => props.id ?? undefined)
const describedById = computed(() => (hasErrors.value && baseId.value ? `${baseId.value}-error-0` : undefined))

// One character per box, derived from the model string (padded/truncated to `length`).
const boxes = computed(() => {
  const chars = (model.value ?? '').split('').slice(0, props.length)
  return Array.from({ length: props.length }, (_, index) => chars[index] ?? '')
})

const groupClasses = computed(() => [
  'form-group',
  { 'form-invalid': hasErrors.value }
])
const labelClasses = computed(() => [
  'mb-2',
  { 'visually-hidden': props.hideLabel }
])
const boxClasses = computed(() => {
  const classes = ['form-control', 'form-otp-box']
  if (props.variant) {
    classes.push(`form-${props.variant}`)
  }
  if (props.size) {
    classes.push(`form-${props.size}`)
  }
  if (props.rounded) {
    classes.push('form-rounded')
  }
  if (props.customClass) {
    classes.push(props.customClass)
  }
  return classes
})

/** Methods */
function setBoxRef(el: Element | ComponentPublicInstance | null, index: number) {
  boxRefs.value[index] = (el as HTMLInputElement) ?? null
}

function boxId(index: number) {
  return baseId.value ? `${baseId.value}-otp-${index}` : undefined
}

function boxLabel(index: number) {
  const base = props.label || 'One-time code'
  return `${base}, digit ${index + 1} of ${props.length}`
}

function sanitizeValue(value: string) {
  if (!value) {
    return ''
  }
  return props.integerOnly ? value.replace(/[^0-9]/g, '') : value
}

function setValue(value: string) {
  model.value = value
  emit('onUpdate', value)
  if (value.length === props.length) {
    emit('complete', value)
  }
}

function focusBox(index: number) {
  const clamped = Math.max(0, Math.min(index, props.length - 1))
  nextTick(() => {
    const target = boxRefs.value[clamped]
    target?.focus()
    target?.select()
  })
}

// Fills boxes starting at `startIndex` with `value`'s characters. Shared by
// paste and by native autofill (e.g. WebOTP), which can drop the full code
// into a single box's `input` event.
function distribute(value: string, startIndex: number) {
  const chars = boxes.value.slice()
  let cursor = startIndex
  for (const char of value) {
    if (cursor >= props.length) {
      break
    }
    chars[cursor] = char
    cursor += 1
  }

  setValue(chars.join(''))
  focusBox(Math.min(cursor, props.length - 1))
}

function handleInput(event: Event, index: number) {
  const target = event.target as HTMLInputElement
  const sanitized = sanitizeValue(target.value)

  if (sanitized.length > 1) {
    distribute(sanitized, index)
    return
  }

  const chars = boxes.value.slice()
  chars[index] = sanitized
  target.value = sanitized
  setValue(chars.join(''))

  if (sanitized && index < props.length - 1) {
    focusBox(index + 1)
  }
}

function handleKeydown(event: KeyboardEvent, index: number) {
  if (props.disabled || props.readonly) {
    return
  }

  if (event.key === 'Backspace') {
    if (boxes.value[index]) {
      return
    }
    if (index > 0) {
      event.preventDefault()
      const chars = boxes.value.slice()
      chars[index - 1] = ''
      setValue(chars.join(''))
      focusBox(index - 1)
    }
    return
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    focusBox(index - 1)
    return
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    focusBox(index + 1)
  }
}

function handlePaste(event: ClipboardEvent, index: number) {
  event.preventDefault()
  const sanitized = sanitizeValue(event.clipboardData?.getData('text') ?? '')

  if (!sanitized) {
    return
  }

  distribute(sanitized, index)
}

function handleFocus(event: FocusEvent) {
  (event.target as HTMLInputElement)?.select()
}

/** Lifecycle */
onMounted(() => {
  if (props.autofocus) {
    const firstEmpty = boxes.value.findIndex(char => !char)
    focusBox(firstEmpty === -1 ? 0 : firstEmpty)
  }
})

/** Watchers */
watch(() => props.length, () => {
  // Truncate the model when `length` shrinks below the current value size.
  if (model.value.length > props.length) {
    setValue(model.value.slice(0, props.length))
  }
})
</script>

<template>
  <div :class="groupClasses">
    <!-- Main Group Label -->
    <label
      v-if="label"
      :id="labelId"
      :class="labelClasses"
    >
      {{ label }}{{ required ? ' *' : '' }}
    </label>

    <!-- Otp Boxes -->
    <div
      class="form-otp"
      role="group"
      :aria-labelledby="label ? labelId : undefined"
      :aria-describedby="describedById"
    >
      <input
        v-for="(char, index) in boxes"
        :id="boxId(index)"
        :key="`otp-box-${index}`"
        :ref="(el) => setBoxRef(el, index)"
        :class="boxClasses"
        type="text"
        :inputmode="integerOnly ? 'numeric' : 'text'"
        :autocomplete="index === 0 ? 'one-time-code' : 'off'"
        maxlength="1"
        :value="char"
        :placeholder="placeholder ?? undefined"
        :disabled="disabled"
        :readonly="readonly"
        :required="required && index === 0"
        :aria-label="boxLabel(index)"
        :aria-invalid="hasErrors || undefined"
        @input="handleInput($event, index)"
        @keydown="handleKeydown($event, index)"
        @paste="handlePaste($event, index)"
        @focus="handleFocus"
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
      Optional
    </p>
  </div>
</template>

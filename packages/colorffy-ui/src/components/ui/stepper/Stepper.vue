<script setup lang="ts">
import type { ComponentPublicInstance } from 'vue'
import type { IStepItem, IStepperEmits, IStepperProps } from '@/types/stepper'
import { computed, ref, toRef, watch } from 'vue'
import UiIconMaterial from '../icon/Material.vue'

/** Props */
const props = withDefaults(defineProps<IStepperProps>(), {
  activeStep: undefined,
  vertical: false,
  linear: false,
  customClass: null
})

/** Emits */
const emit = defineEmits<IStepperEmits>()

/** Data */
const steps = toRef(props, 'steps')
const activeStepId = ref<string>(props.activeStep ?? steps.value?.[0]?.id ?? '')
const stepButtons = ref<(HTMLButtonElement | null)[]>([])

/** Computed */
const currentIndex = computed(() => {
  const index = steps.value.findIndex(step => step.id === activeStepId.value)
  return index === -1 ? 0 : index
})

/** Watchers */
watch(() => props.activeStep, (newVal) => {
  activeStepId.value = newVal ?? (steps.value?.[0]?.id ?? '')
})

/** Methods */
function setStepButton(el: Element | ComponentPublicInstance | null, index: number) {
  stepButtons.value[index] = (el as HTMLButtonElement) ?? null
}
function stepStatus(index: number): 'completed' | 'current' | 'upcoming' {
  if (index < currentIndex.value)
    return 'completed'

  if (index === currentIndex.value)
    return 'current'

  return 'upcoming'
}
function isStepBlocked(step: IStepItem, index: number): boolean {
  if (step.disabled)
    return true

  if (props.linear && index > currentIndex.value)
    return true

  return false
}
function handleSelectedStep(step: IStepItem, index: number) {
  if (isStepBlocked(step, index))
    return

  activeStepId.value = step.id
  emit('updateActiveStep', step.id)
}
function nextEnabledIndex(from: number, direction: number): number {
  const count = steps.value.length
  let index = from
  for (let step = 0; step < count; step++) {
    index = (index + direction + count) % count
    if (!isStepBlocked(steps.value[index], index))
      return index
  }
  return from
}
function focusStep(index: number) {
  const step = steps.value[index]
  if (!step || isStepBlocked(step, index))
    return
  handleSelectedStep(step, index)
  stepButtons.value[index]?.focus()
}
function onStepKeydown(event: KeyboardEvent, index: number) {
  switch (event.key) {
    case 'ArrowRight':
    case 'ArrowDown':
      event.preventDefault()
      focusStep(nextEnabledIndex(index, 1))
      break
    case 'ArrowLeft':
    case 'ArrowUp':
      event.preventDefault()
      focusStep(nextEnabledIndex(index, -1))
      break
    case 'Home':
      event.preventDefault()
      focusStep(nextEnabledIndex(steps.value.length - 1, 1))
      break
    case 'End':
      event.preventDefault()
      focusStep(nextEnabledIndex(0, -1))
      break
  }
}
</script>

<template>
  <ol
    class="stepper"
    :class="[{ 'stepper-vertical': vertical }, customClass]"
  >
    <li
      v-for="(step, stepIndex) in steps"
      :key="step.id"
      class="step-item"
      :class="`step-${stepStatus(stepIndex)}`"
    >
      <button
        :id="`step-${step.id}`"
        :ref="(el) => setStepButton(el, stepIndex)"
        type="button"
        class="step-trigger"
        :aria-current="stepStatus(stepIndex) === 'current' ? 'step' : undefined"
        :aria-disabled="isStepBlocked(step, stepIndex) || undefined"
        :tabindex="stepStatus(stepIndex) === 'current' ? 0 : -1"
        :disabled="isStepBlocked(step, stepIndex)"
        @click="handleSelectedStep(step, stepIndex)"
        @keydown="onStepKeydown($event, stepIndex)"
      >
        <span class="step-indicator" aria-hidden="true">
          <UiIconMaterial
            v-if="stepStatus(stepIndex) === 'completed'"
            icon-code="&#xe5ca;"
          />
          <UiIconMaterial
            v-else-if="step.icon"
            :icon-code="step.icon"
          />
          <span v-else class="step-number">{{ stepIndex + 1 }}</span>
        </span>

        <span class="step-text">
          <span class="step-label">{{ step.label }}</span>
          <span v-if="step.description" 
          class="step-description">{{ step.description }}</span>
        </span>
      </button>
    </li>
  </ol>
</template>

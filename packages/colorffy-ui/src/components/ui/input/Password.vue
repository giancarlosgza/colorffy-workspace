<script setup lang="ts">
import type { IPasswordInputEmits, IPasswordInputProps } from '@/types/input'
import { computed } from 'vue'
import { useLabels } from '@/composables/useColorffyConfig'
import UiButton from '../button/Button.vue'
import UiIconMaterial from '../icon/Material.vue'
import UiInputText from './Text.vue'

/** Props */
const props = withDefaults(defineProps<IPasswordInputProps>(), {
  modelValue: null,
  maxlength: 128,
  autocomplete: 'current-password'
})

/** Emits */
const emit = defineEmits<IPasswordInputEmits>()
/** Labels */
const l10n = useLabels('password')
const revealText = computed(() => props.revealLabel ?? l10n.value.reveal)

/** Model */
const model = defineModel<string | null>('modelValue', { default: null })
const revealed = defineModel<boolean>('revealed', { default: false })

/** Computed */
const textProps = computed(() => {
  const { modelValue: _modelValue, revealLabel: _revealLabel, ...rest } = props
  return rest
})
</script>

<template>
  <UiInputText
    v-bind="textProps"
    v-model="model"
    :type="revealed ? 'text' : 'password'"
    adornments="inline"
    @update="emit('update', $event as string | null)"
  >
    <template #suffix>
      <UiButton
        variant="text"
        custom-class="text-neutral"
        size="sm"
        icon
        :aria-label="revealText"
        :aria-pressed="revealed"
        :aria-controls="id ?? undefined"
        :disabled="disabled"
        @click="revealed = !revealed"
      >
        <template #icon>
          <UiIconMaterial :icon-code="revealed ? '&#xe8f5;' : '&#xe8f4;'" />
        </template>
      </UiButton>
    </template>
  </UiInputText>
</template>

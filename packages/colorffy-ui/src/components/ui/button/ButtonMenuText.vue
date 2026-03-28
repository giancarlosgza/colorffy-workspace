<script setup lang="ts">
import type { IButtonMenuTextProps } from '@/types/button'

/** Props */
withDefaults(defineProps<IButtonMenuTextProps>(), {
  itemText: ''
})
</script>

<template>
  <li>
    <span class="v-dropdown-item v-text-item">{{ itemText }}</span>
  </li>
</template>

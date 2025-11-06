<script setup lang="ts">
/** Interfaces */
interface IButtonMenuTextProps {
  itemText?: string
}

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

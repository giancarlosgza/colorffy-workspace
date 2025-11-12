<script setup lang="ts">
import type { INavbarTitleProps } from '@/types/navbar'

/** Props */
const props = withDefaults(defineProps<INavbarTitleProps>(), {
  title: '',
  customClass: null
})
</script>

<template>
  <div class="nav-title" :class="customClass">
    <!-- Brand slot -->
    <slot name="brand" />

    <!-- Page title -->
    <span v-if="title" class="page-title">
      {{ title }}
    </span>
    
    <!-- Custom title slot -->
    <slot name="title" />
  </div>
</template>

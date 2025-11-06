<script setup lang="ts">
/** Interfaces */
interface INavbarLinkProps {
  text?: string
  link?: string | object
  disabled?: boolean
  customClass?: string | string[]
}

/** Props */
const props = withDefaults(defineProps<INavbarLinkProps>(), {
  text: '',
  link: '',
  disabled: false,
  customClass: ''
})
</script>

<template>
  <li class="nav-item">
    <NuxtLink
      :to="props.disabled ? '' : props.link"
      class="nav-link"
      :class="props.customClass"
      :disabled="props.disabled"
      :aria-disabled="props.disabled || undefined"
    >
      <slot name="icon" />
      {{ props.text }}
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import BaseButton from "./base.vue"
</script>

<template>
  <BaseButton
    v-bind="$props"
    tertiary
  >
    <slot />
  </BaseButton>
</template>

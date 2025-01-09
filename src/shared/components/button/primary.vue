<script setup lang="ts">
import BaseButton from "./base.vue"
</script>

<template>
  <BaseButton
    v-bind="$props"
    primary
  >
    <slot />
  </BaseButton>
</template>

<script setup lang="ts">
defineProps<{
  required?: boolean
}>()

const model = defineModel<string | undefined>()
const id = useId()
</script>

<template>
  <label :for="id">
    <input
      :id="id"
      v-model="model"
    >
  </label>
  <slot />
</template>

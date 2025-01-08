<script lang="ts" setup>
const { x = 1 } = defineProps<{
  x?: number
}>()
</script>

<template>
  <div class="flex-row">
    <slot />
  </div>
</template>

<style lang="css" scoped>
.flex-row {
  display: flex;
  flex-direction: row;
  gap: v-bind('`${8 * x}px`');
}
</style>

<script lang="ts" setup>
import type { FlexProps } from "./props"

const { x = 1 } = defineProps<FlexProps>()

const gap = computed(() => `${8 * x}px`)
</script>

<template>
  <div
    class="flex"
    :class="{ row: row, col: col }"
  >
    <slot />
  </div>
</template>

<style lang="css" scoped>
.flex {
  display: flex;
  gap: v-bind(gap);

  & .row {
    flex-direction: row;
  }

  & .col {
    flex-direction: row;
  }
}
</style>

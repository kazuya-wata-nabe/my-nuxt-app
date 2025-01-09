<script setup lang="ts">
import BaseFlex from "./box/base-flex.vue"
import type { FlexProps } from "./box/props"

defineProps<Omit<FlexProps, "row">>()
</script>

<template>
  <BaseFlex
    v-bind="$props"
    col
  >
    <slot />
  </BaseFlex>
</template>

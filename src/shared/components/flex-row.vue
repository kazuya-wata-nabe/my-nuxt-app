<script setup lang="ts">
import BaseFlex from "./box/base-flex.vue"
import type { FlexProps } from "./box/props"

defineProps<Omit<FlexProps, "col">>()
</script>

<template>
  <BaseFlex
    v-bind="$props"
    row
  >
    <slot />
  </BaseFlex>
</template>

<script lang="ts" setup>
export type Props = {
  primary?: true
  secondary?: true
  tertiary?: true
}

defineProps<Props>()
</script>

<template>
  <button
    class="button"
    :class="{
      ...$props,
    }"
  >
    <slot />
  </button>
</template>

<style scoped>
.button {
  border: none;
  width: 120px;
  border-radius: 8px;
  height: 48px;

  &.primary {
    color: white;
    background-color: steelblue
  }

  & .secondary {
    background-color: steelblue
  }

  &.tertiary {
    color: steelblue;
    border: 1px solid steelblue;
    background-color: white
  }
}
</style>

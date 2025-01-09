<script lang="ts" setup>
defineProps<{
  options: { value: string, label: string }[]
}>()
</script>

<template>
  <select class="select">
    <option value="">
      --
    </option>
    <template
      v-for="item in options"
      :key="item.value"
    >
      <option :value="item.value">
        {{ item.label }}
      </option>
    </template>
  </select>
</template>

<style scoped>
.select {
  height: 24px;
  width: 120px;
}
</style>

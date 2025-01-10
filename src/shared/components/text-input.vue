<script setup lang="ts">
defineProps<{
  mask?: true
  required?: boolean
}>()

const id = useId()
const model = defineModel<string | undefined>()
</script>

<template>
  <div class="text-input">
    <label :for="id">
      <slot />
      <input
        :id="id"
        v-model="model"
        :required="required"
        :type="mask ? 'password' : 'text'"
      >
    </label>
  </div>
</template>

<style lang="css" scoped>
.text-input {
  width: 320px;
  display: grid;
  grid-template-columns: 120px 1fr;
}
</style>

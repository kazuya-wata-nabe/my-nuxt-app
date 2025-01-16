<script setup lang="ts">
import { withBase } from "vitepress"

defineProps<{
  src: string
}>()

const onClickImg = (e: MouseEvent) => {
  if (!(e.target instanceof HTMLImageElement)) return

  const { src } = e.target
  console.debug(e.target.src)
  window.open(src, "_blank")
}
</script>

<template>
  <div class="image-container">
    <img
      :src="withBase(src)"
      @click="onClickImg"
    >
  </div>
</template>

<style scoped>
.image-container {
  overflow: auto;

  > img {
    max-width: none;
    cursor: pointer;
  }
}
</style>

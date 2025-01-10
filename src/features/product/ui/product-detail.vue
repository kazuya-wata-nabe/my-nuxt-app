<script setup lang="ts">
import type { ProductWithId } from "@/features/product/model/product"

const props = defineProps<{
  product: ProductWithId
}>()

const item = computed(() => ({
  name: props.product.name,
  price: "¥" + props.product.price.toLocaleString("ja"),
  description: props.product.description,
}))
</script>

<template>
  <CardContainer>
    <p>{{ item.name }}</p>
    <p>{{ item.price }}</p>
    <p>{{ item.description }}</p>
  </CardContainer>
</template>

<style scoped>
</style>

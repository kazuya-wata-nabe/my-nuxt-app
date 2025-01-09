<script setup lang="ts">
import type { ProductWithId } from "@/features/product/model/product"

const props = defineProps<{
  product: ProductWithId
}>()

const item = computed(() => ({
  path: "/product/" + props.product.id,
  name: props.product.name,
  price: "¥" + props.product.price.toLocaleString("ja"),
}))
</script>

<template>
  <CardContainer>
    <p>{{ item.name }}</p>
    <p>{{ item.price }}</p>
    <NuxtLink :to="item.path">詳細</NuxtLink>
  </CardContainer>
</template>

<style scoped>
</style>

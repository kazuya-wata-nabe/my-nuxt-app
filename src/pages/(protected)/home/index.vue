<script lang="ts" setup>
import { fetchProductList } from "~/features/product/api"
import ProductCard from "~/features/product/ui/product-card.vue"

const { data: products } = useAsyncData(() => fetchProductList())
</script>

<template>
  <main>
    <FlexCol :x="4">
      <FlexRow>
        <template
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard
            :product="product"
          />
        </template>
      </FlexRow>
    </FlexCol>
  </main>
</template>

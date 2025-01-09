<script lang="ts" setup>
import { fetchProductList } from "~/features/product/api"
import ProductCard from "~/features/product/ui/product-card.vue"
import { useAPI } from "~/shared/composables/use-api"

const { data: products } = useAPI(() => fetchProductList())
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

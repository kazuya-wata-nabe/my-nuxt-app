<script setup lang="ts">
import { updateCart } from "~/features/cart/api"
import { fetchProduct } from "~/features/product/api"
import { ProductFormSchema, type Product } from "~/features/product/model/product"
import ProductDetail from "~/features/product/ui/product-detail.vue"
import { useForm } from "~/shared/composables/use-form"

definePageMeta({
  props: true,
})

const props = defineProps<{
  id: string
}>()

const options = [
  { value: "red", label: "あか" },
  { value: "blue", label: "あお" },
  { value: "yellow", label: "きいろ" },
]

const { defineField, handleSubmit, errors } = useForm(ProductFormSchema)
const [name] = defineField("name")

const onClick = handleSubmit(() => console.debug("ok"), console.debug)

// name.value
const { data: product } = useAsyncData(() => fetchProduct(props.id))
const onClickAddCart = (product: Product) => {
  updateCart(product).then(
    async () => navigateTo("/cart"),
  )
}
</script>

<template>
  <FlexCol>
    <template v-if="product">
      <ProductDetail :product="product" />
    </template>

    <SelectSingle :options="options" />
    <TextInput
      v-model="name"
    >
      {{ errors.name }}
    </TextInput>
    <ButtonPrimary @click="onClick">
      click
      <ButtonPrimary @click="onClickAddCart">
        add cart
      </ButtonPrimary>
    </buttonprimary>
  </FlexCol>
</template>

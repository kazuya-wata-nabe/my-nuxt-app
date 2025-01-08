<script setup lang="ts">
import { ProductFormSchema } from "~/feature/product/model/product"
import { useForm } from "~/shared/composables/use-form"

const { defineField } = useForm(ProductFormSchema)
const [name] = defineField("name")
</script>

<template>
  <FlexCol>
    <input>
  </FlexCol>
</template>

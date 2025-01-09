<script setup lang="ts">
import { ProductFormSchema } from "~/features/product/model/product"
import { useForm } from "~/shared/composables/use-form"

const options = [
  { value: "red", label: "あか" },
  { value: "blue", label: "あお" },
  { value: "yellow", label: "きいろ" },
]

const { defineField, errors } = useForm(ProductFormSchema)
const [name] = defineField("name")
</script>

<template>
  <FlexCol>
    <SelectSingle :options="options" />
    <TextInput
      v-model="name"
    >
      {{ errors }}
    </TextInput>
  </FlexCol>
</template>

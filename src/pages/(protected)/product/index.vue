<script setup lang="ts">
import { ProductFormSchema } from "~/feature/product/model/product"
import { useForm } from "~/shared/composables/use-form"

const { defineField, errors } = useForm(ProductFormSchema)
const [name] = defineField("name")
</script>

<template>
  <FlexCol>
    <TextInput
      v-model="name"
    >
      {{ errors }}
    </TextInput>
  </FlexCol>
</template>

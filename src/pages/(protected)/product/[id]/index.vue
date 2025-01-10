<script setup lang="ts">
import { ProductFormSchema } from "~/features/product/model/product"
import { useForm } from "~/shared/composables/use-form"

const options = [
  { value: "red", label: "あか" },
  { value: "blue", label: "あお" },
  { value: "yellow", label: "きいろ" },
]

const { defineField, handleSubmit, errors } = useForm(ProductFormSchema)
const [name] = defineField("name")

const onClick = handleSubmit(() => console.debug("ok"), console.debug)

// name.value
</script>

<template>
  <FlexCol>
    <SelectSingle :options="options" />
    <TextInput
      v-model="name"
    >
      {{ errors.name }}
    </TextInput>
    <ButtonPrimary @click="onClick">
      click
    </ButtonPrimary>
  </FlexCol>
</template>

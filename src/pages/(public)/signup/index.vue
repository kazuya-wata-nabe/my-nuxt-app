<script setup lang="ts">
import { postSignUp } from "~/features/user/api"
import { SignUpUserSchema } from "~/features/user/model/signup-user"
import { useForm } from "~/shared/composables/use-form"

const { fetch: refreshSession } = useUserSession()
const { defineField, handleSubmit, errors } = useForm(SignUpUserSchema)

const onSubmit = handleSubmit((values) => {
  postSignUp(values)
    .then(async () => {
      await refreshSession()
      return navigateTo("/")
    })
    .catch(err => alert(err))
})

const [name] = defineField("name")
const [email] = defineField("email")
const [password] = defineField("password")
</script>

<template>
  <FlexCol>
    <TextInput
      v-model="name"
      required
    >
      name
    </TextInput>
    {{ errors.name }}

    <TextInput
      v-model="email"
      autocomplete="false"
      required
    >
      email
    </TextInput>
    {{ errors.email }}

    <TextInput
      v-model="password"
      autocomplete="false"
      mask
    >
      password
    </TextInput>
    {{ errors.password }}

    <ButtonPrimary @click="onSubmit">
      sing up
    </ButtonPrimary>
  </FlexCol>
</template>

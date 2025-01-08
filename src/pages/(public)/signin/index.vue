<script setup lang="ts">
const { fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: "",
  password: "",
})

const login = async () => {
  $fetch("/api/signin", {
    method: "POST",
    body: credentials,
  })
    .then(async () => {
      await refreshSession()
      await navigateTo("/")
    })
    .catch(() => alert("Bad credentials"))
}
</script>

<template>
  <form @submit.prevent="login">
    <input
      v-model="credentials.email"
      type="email"
      placeholder="Email"
    >
    <input
      v-model="credentials.password"
      type="password"
      placeholder="Password"
    >
    <button type="submit">
      Login
    </button>
  </form>
</template>

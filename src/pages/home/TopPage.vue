<script lang="ts" setup>
const count = ref(0)
const countup = () => count.value++
const onShowError = () => showError({
  statusCode: 400,
  message: "someting wrong",
})
</script>

<template>
  <main>
    <div>home</div>
    <button @click="countup">
      countup
    </button>
    {{ count }}
    <button @click="onShowError">
      onShowError
    </button>
  </main>
</template>

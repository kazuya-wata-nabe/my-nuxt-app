<script lang="ts" setup>
defineOptions({ name: "HomePage" })

const newError = () => {
  throw "error"
}
</script>

<template>
  <main>
    <div>home</div>
    <button
      @click="newError"
    >
      throw error
    </button>
  </main>
</template>

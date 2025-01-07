<script lang="ts" setup>
const count = ref(0)
const countup = () => count.value++
</script>

<template>
  <main>
    <div>home</div>
    <button @click="countup">
      countup
    </button>
    {{ count }}
  </main>
</template>

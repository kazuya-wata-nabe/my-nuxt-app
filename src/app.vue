<script setup lang="ts">
const someErrorLogger = (err: unknown) => console.debug("error is: ", err)
</script>

<template>
  <Head>
    <Title>nuxt sample</Title>
    <Meta
      name="description"
      :content="'nuxt sample'"
    />
  </Head>
  <NuxtErrorBoundary @error="someErrorLogger">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NuxtErrorBoundary>
</template>

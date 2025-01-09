<template>
  <article class="card-container">
    <slot />
  </article>
</template>

<style lang="css" scoped>
.card-container {
  width: 240px;
  height: 240px;
  border: 1px solid;
  padding: 0 8px;
  position: "relative"
}
</style>

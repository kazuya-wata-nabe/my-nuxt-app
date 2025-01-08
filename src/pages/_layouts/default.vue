<script lang="ts" setup>
const { loggedIn, user, clear } = useUserSession()
const signOut = () => clear()
</script>

<template>
  <div>
    <div>
      <p>loggedIn: {{ loggedIn }}</p>
      <button
        v-if="loggedIn"
        @click="signOut"
      >
        sign out
      </button>
      <div v-if="user">
        {{ user }}
      </div>
    </div>
    <slot />
  </div>
</template>

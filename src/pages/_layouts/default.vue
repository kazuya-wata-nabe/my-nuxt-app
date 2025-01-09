<script lang="ts" setup>
import { useAuth } from "~/shared/composables/use-auth"

const { signedIn, currentUser, signOut } = useAuth()
</script>

<template>
  <div>
    <div>
      <FlexRow>
        <ButtonTertiary
          v-if="signedIn"
          @click="signOut"
        >
          sign out
        </ButtonTertiary>
        <p>signedIn: {{ signedIn }}</p>
      </FlexRow>

      <div v-if="currentUser">
        hello, {{ currentUser.name }}
      </div>
    </div>

    <slot />
  </div>
</template>

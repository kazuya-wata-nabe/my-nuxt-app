<script lang="ts" setup>
import { useAuth } from "~/shared/composables/use-auth"

const { signedIn, currentUser, signUp, signOut } = useAuth()
const router = useRouter()
const isSignUpPage = computed(() => router.currentRoute.value.path.endsWith("signup"))
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

        <ButtonTertiary
          v-if="!signedIn && !isSignUpPage"
          @click="signUp"
        >
          sign up
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

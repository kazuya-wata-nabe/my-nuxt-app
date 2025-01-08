import { useAuth } from "@/shared/composables/use-auth"

export default defineNuxtRouteMiddleware((to) => {
  const { currentUser } = useAuth()

  if (!currentUser.value && to.path !== "/signin") {
    const path = "/signin"
    return { path }
  }
})

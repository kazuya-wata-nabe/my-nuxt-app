/**
 * @see https://nuxt.com/modules/auth-utils#session-management
 */
declare module "#auth-utils" {
  interface User {
    name: string
  }
}

export const useAuth = () => {
  const { loggedIn: signedIn, user: currentUser, clear } = useUserSession()

  const signUp = async () => {
    clear().then(async () => {
      return navigateTo("/signup")
    })
  }

  const signOut = async () => {
    clear().then(async () => {
      return navigateTo("/signin")
    })
  }

  return {
    signedIn,
    currentUser,
    signUp,
    signOut,
  }
}

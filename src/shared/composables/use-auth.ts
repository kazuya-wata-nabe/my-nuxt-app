export const useAuth = () => {
  const { user: currentUser, clear } = useUserSession()

  const logout = () => async () => {
    clear().then(async () => {
      return navigateTo("/signin")
    })
  }

  return {
    currentUser,
    logout,
  }
}

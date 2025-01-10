import type { SignUpForm } from "./signup-user"

export type UserRepository = {
  signUp: (user: SignUpForm) => Promise<void>
}

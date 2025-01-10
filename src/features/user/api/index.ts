import type { SignUpForm } from "@/features/user/model/signup-user"

export const postSignUp = (body: SignUpForm) => {
  return $fetch("/api/singiup", {
    method: "POST",
    body,
  })
}

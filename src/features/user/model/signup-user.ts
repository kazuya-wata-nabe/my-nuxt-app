import { v } from "~/shared/utils/validator"

export type SignUpForm = {
  name: string
  email: string
  password: string
}

export const SignUpUserSchema = v.newSchema<SignUpForm>({
  name: v.string({ optional: true }),
  email: v.string({}),
  password: v.string({}),
})

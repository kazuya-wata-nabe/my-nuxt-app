import { optional, required, v } from "~/shared/utils/validator"

export type SignUpForm = {
  name: string
  email: string
  password: string
}

export const SignUpUserSchema = v.newSchema({
  name: v.string({ optional })({ min: 0, max: 20 }),
  email: v.string({ required })({ min: 0, max: 0 }),
  password: v.string({ required })({ min: 0, max: 0 }),
})

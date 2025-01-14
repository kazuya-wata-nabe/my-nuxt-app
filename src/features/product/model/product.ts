import { optional, required, v } from "@/shared/utils/validator"

export type Product = {
  name: string
  price: number
  description: string
}

export type ProductWithId = Product & { id: string }

export const ProductFormSchema = v.newSchema({
  name: v.string({ required })({ min: 2, max: 2000 }),
  price: v.number.required(),
  description: v.string({ optional })({ min: 1, max: 200 }),
})

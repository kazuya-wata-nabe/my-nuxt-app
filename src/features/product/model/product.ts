import { v } from "@/shared/utils/validator"

export type Product = {
  name: string
  price: number
  description: string
}

export type ProductWithId = Product & { id: string }

export const ProductFormSchema = v.newSchema<Product>({
  name: v.string({ min: 1, max: 50 }),
  price: v.number.required(),
  description: v.string({ min: 1, max: 200 }),
})

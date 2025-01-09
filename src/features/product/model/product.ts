import { v } from "@/shared/utils/validator"

export type Product = {
  name: string
  price: number
}

export type ProductWithId = Product & { id: string }

export const ProductFormSchema = v.newSchema<Product>({
  name: v.string.required(v.min(1)),
  price: v.number.required(),
})

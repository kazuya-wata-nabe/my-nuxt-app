import { v } from "~/shared/utils/validator"

// type Product = {
//   name: string
//   price: number
// }

export const ProductFormSchema = v.newSchema({
  name: v.string.required(),
  price: v.number.required(),
})

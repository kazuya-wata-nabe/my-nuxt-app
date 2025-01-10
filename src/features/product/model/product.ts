import { v } from "@/shared/utils/validator"

export type Product = {
  name: string
  price: number
  description: string
}

export type ProductWithId = Product & { id: string }

export const ProductFormSchema = v.newSchema({
  name: v.string("required")({ min: 2, max: 2000 }),
  price: v.number.required(),
  description: v.string("optional")({ min: 1, max: 200 }),
})

//   const ProductFormSchema: vb.ObjectSchema<{
//     readonly name: vb.SchemaWithPipe<[vb.StringSchema<undefined>, vb.NonEmptyAction<string, undefined>, vb.MinLengthAction<string, 1, undefined>, vb.MaxLengthAction<string, 9, undefined>]>;
//     readonly price: vb.NumberSchema<...>;
//     readonly description: vb.OptionalSchema<vb.SchemaWithPipe<[vb.StringSchema<undefined>, vb.MinLengthAction<string, 1, undefined>, vb.MaxLengthAction<string, 9, undefined>]>, undefined>
// }, undefined>

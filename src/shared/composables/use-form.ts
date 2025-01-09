import { toTypedSchema } from "@vee-validate/valibot"
import { useForm as VeeUseForm } from "vee-validate"
import type { Entries, FormSchema, TypedSchema } from "@/shared/utils/validator"

export const useForm = <T extends Entries, U extends FormSchema<T, undefined>>(schema: U) => {
  return VeeUseForm<TypedSchema<typeof schema>>({
    validationSchema: toTypedSchema(schema),
  })
}

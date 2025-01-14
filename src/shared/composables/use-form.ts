import { toTypedSchema } from "@vee-validate/valibot"
import { useForm as VeeUseForm } from "vee-validate"
import type { Entries, FormSchema, TypedSchema } from "@/shared/utils/validator"

type FormOptions = {
  validateOnMount: boolean
}

export const useForm = <T extends Entries, U extends FormSchema<T, undefined>>(schema: U, option: FormOptions = { validateOnMount: false }) => {
  return VeeUseForm<TypedSchema<typeof schema>>({
    validationSchema: toTypedSchema(schema),
    validateOnMount: option.validateOnMount,
  })
}

import { toTypedSchema } from "@vee-validate/valibot"
import { useForm as VeeUseForm } from "vee-validate"
import type { InferOutput, ObjectEntries, ObjectSchema } from "valibot"

export const useForm = <T extends ObjectEntries, U extends ObjectSchema<T, undefined>>(schema: U) => {
  return VeeUseForm<InferOutput<typeof schema>>({
    validationSchema: toTypedSchema(schema),
  })
}

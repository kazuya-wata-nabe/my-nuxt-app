import * as vb from "valibot"

export type {
  ObjectEntries as Entries,
  ObjectSchema as FormSchema,
  InferOutput as TypedSchema,
} from "valibot"

// type ToSchema<T> = T extends Record<string, unknown> ? {
//   [K in keyof T]: vb.BaseSchema<Required<T[K]>, Required<T[K]>, vb.BaseIssue<unknown>>
// } : never

type Kind = "required" | "optional"

type StringSetting = {
  min: number
  max: number
}

type ValidationRule = vb.PipeItem<string, string, vb.BaseIssue<unknown>>
// PipeItem<InferOutput<TSchema>, InferOutput<TSchema>, BaseIssue<unknown>>

const string = <T extends Kind>(kind: T) => <U extends ValidationRule>({ min, max }: StringSetting, ...items: U[]) => {
  const register = (priory: ValidationRule[]) => Array.from<ValidationRule>([
    ...priory,
    vb.minLength(min, "短すぎます"),
    vb.maxLength(max, "長すぎます"),
    ...items,
  ])
  switch (kind) {
    case "required":
      return vb.pipe(vb.string(), ...register([vb.nonEmpty("必須項目です")]))
    case "optional":
      return vb.optional(vb.pipe(vb.string(), ...register([])))
    default:
      return kind satisfies never
  }
}

const email = () => vb.pipe(vb.string(), vb.email())

const number = {
  required: () => vb.number(),
  optional: () => vb.number(),
}

export const required = { required: true } as const
export const optional = { optional: true } as const

export const v = {
  string,
  email,
  number,
  newSchema: <T extends vb.ObjectEntries>(entries: T) => vb.object({ ...entries }),
}

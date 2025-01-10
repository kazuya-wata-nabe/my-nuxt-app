import * as vb from "valibot"

export type {
  ObjectEntries as Entries,
  ObjectSchema as FormSchema,
  InferOutput as TypedSchema,
} from "valibot"

export type ToSchema<T> = T extends Record<string, unknown> ? {
  [K in keyof T]-?: T[K] extends Required<T>[K] ?
    vb.BaseSchema<T[K], T[K], vb.BaseIssue<unknown>>
    : vb.OptionalSchema<vb.BaseSchema<NonNullable<T[K]>, NonNullable<T[K]>, vb.BaseIssue<unknown>>, undefined>
} : never

type Kind = { required: true, optional?: never } | { required?: never, optional: true }

type Range<
  N extends number,
  Result extends number = never,
  C extends never[] = [],
> = C["length"] extends N
  ? Result
  : Range<N, Result | C["length"], [...C, never]>

type StringSetting = {
  min: Range<201>
  max: Range<201>
}

type ValidationRule = vb.PipeItem<string, string, vb.BaseIssue<unknown>>

const string = <T extends Kind>(kind: T) => <U extends ValidationRule>({ min, max }: StringSetting, ...items: U[]) => {
  const register = (priory: ValidationRule[]) => Array.from<ValidationRule>([
    ...priory,
    vb.minLength(min, "短すぎます"),
    vb.maxLength(max || Number.MAX_SAFE_INTEGER, "長すぎます"),
    ...items,
  ])
  switch (kind.required) {
    case true:
      return vb.pipe(vb.string(), ...register([vb.nonEmpty("必須項目です")]))
    case undefined:
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

export const required = true
export const optional = true

export const v = {
  string,
  email,
  number,
  newSchema: <T extends vb.ObjectEntries>(entries: T) => vb.object({ ...entries }),
  newSchema2: <T extends Record<string, unknown>>(entries: ToSchema<T>) => vb.object({ ...entries }),
}

import * as vb from "valibot"

export type {
  ObjectEntries as Entries,
  ObjectSchema as FormSchema,
  InferOutput as TypedSchema,
} from "valibot"

type ToSchema<T> = T extends Record<string, unknown> ? {
  [K in keyof T]: vb.BaseSchema<T[K], T[K], vb.BaseIssue<unknown>>;
} : never

type TItems<T> = vb.PipeItem<T, T, vb.BaseIssue<unknown>>[]

type StringSetting = {
  min?: number
  max?: number
  optional?: true
}

const string = ({ min, max, optional }: StringSetting, ...items: TItems<string>) => {
  const rules: TItems<string> = []
  if (!optional) {
    rules.push(vb.nonEmpty("必須項目です"))
  }

  if (min) {
    rules.push(vb.minLength(min, `${min}文字はだめです`))
  }

  if (max) {
    rules.push(vb.maxLength(max, `${max}文字は多すぎます`))
  }

  return vb.pipe<vb.StringSchema<string>, TItems<string>>(
    vb.string(""),
    ...rules,
    ...items,
  )
}

const email = () => vb.pipe<vb.StringSchema<undefined>, TItems<string>>(vb.string(), vb.email())

const number = {
  required: () => vb.number(),
  optional: () => vb.number(),
}

export const v = {
  string,
  number,
  email,
  newSchema: <T>(entries: ToSchema<T>) => vb.object({ ...entries }),
}

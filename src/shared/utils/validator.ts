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

const string = {
  required: (...items: TItems<string>) => vb.pipe<vb.StringSchema<undefined>, TItems<string>>(vb.string(), ...items),
  optional: () => vb.string(),
}

const number = {
  required: () => vb.number(),
  optional: () => vb.number(),
}

export const v = {
  string,
  number,
  newSchema: <T>(entries: ToSchema<T>) => vb.object({ ...entries }),
  min: <N extends number>(n: N): vb.MinLengthAction<string, N, string> => vb.minLength(n, `${n}文字はだめです`),
  max: <N extends number>(n: N): vb.MaxLengthAction<string, N, string> => vb.maxLength(n, `${n}文字は多すぎます`),
}

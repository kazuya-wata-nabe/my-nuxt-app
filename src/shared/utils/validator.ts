import * as vb from "valibot"

type ToSchema<T extends Record<string, unknown>> = {
  [K in keyof T]: vb.BaseSchema<T[K], T[K], vb.BaseIssue<unknown>>;
}

export type ObjSchema = vb.ObjectEntries
// export type FormSchema<T extends object, U extends ToSchema<T>> = vb.ObjectSchema<ToSchema<T>, undefined>
export type FormSchema<T extends Record<string, unknown>> = vb.ObjectSchema<ToSchema<T>, undefined>

const newSchema = <T extends vb.ObjectEntries>(entries: T) => {
  return vb.object({
    ...entries,
  })
}
// const newSchema = <T extends object>(entries: ToSchema<T>) => {
//   return vb.object({
//     ...entries,
//   })
// }

const string = {
  required: () => vb.pipe(vb.string(), vb.minLength(1), vb.maxLength(5)),
  optional: () => vb.string(),
}

const number = {
  required: () => vb.number(),
  optional: () => vb.number(),
}

export const v = {
  string,
  number,
  newSchema,
}

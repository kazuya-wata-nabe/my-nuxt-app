import * as v from "valibot"

const bodySchema = v.object({
  email: v.pipe(v.string(), v.nonEmpty()),
  password: v.pipe(v.string(), v.minLength(8)),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, v.parser(bodySchema))

  if (email === "test@example.com" && password === "passw0rd") {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: "John Doe",
      },
    })
    return {}
  }
  throw createError({
    statusCode: 401,
    message: "Bad credentials",
  })
})

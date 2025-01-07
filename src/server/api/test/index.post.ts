export default defineEventHandler(async (event) => {
  
  // const name = await readBody(event)
  // readValidatedBodyでvalidationできる
  // const name = await readValidatedBody(event)

  return {
    hello: 'world'
  }
})

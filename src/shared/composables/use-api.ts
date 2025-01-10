import type { AsyncDataOptions, NuxtApp } from "nuxt/app"

export const useAPI = <T>(
  handler: (ctx?: NuxtApp) => Promise<T>,
  options?: AsyncDataOptions<T>,
) => {
  return useAsyncData(() => handler(), {
    ...options,
    // $fetch: useNuxtApp().$api
  })
}

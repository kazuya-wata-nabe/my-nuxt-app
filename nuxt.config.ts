// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "nuxt-auth-utils",
  ],
  devtools: { enabled: true },
  srcDir: "src",
  compatibilityDate: "2024-11-01",
  typescript: {
    typeCheck: true,
  },
  hooks: {
    "pages:extend"(pages) {
      // add a route
      pages.push({
        name: "home",
        path: "/",
        file: "@/pages/home/TopPage.vue",
      })
    },
  },
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: "double",
        semi: false,
      },
    },
  },
})

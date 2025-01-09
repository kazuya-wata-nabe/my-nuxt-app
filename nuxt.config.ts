// https://nuxt.com/docs/api/configuration/nuxt-config

import type { NuxtPage } from "nuxt/schema"

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxt/test-utils/module",
    "nuxt-auth-utils",
  ],
  components: {
    dirs: [
      {
        path: "shared/components",
        extensions: [".vue"],
        ignore: ["**/base*.vue"],
      },
    ],
  },
  devtools: { enabled: true },
  dir: {
    layouts: "pages/_layouts",
    middleware: "pages/_middleware",
  },
  srcDir: "src",
  compatibilityDate: "2024-11-01",
  typescript: {
    typeCheck: true,
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        path: "/",
        name: "home",
        file: "@/pages/(protected)/home",
      })

      const setMiddleware = (pages: NuxtPage[]) => {
        for (const page of pages) {
          page.meta ||= {}
          page.meta.middleware = ["auth"]
          if (page.children) {
            setMiddleware(page.children)
          }
        }
      }
      const protectedPages = pages.filter(page => page.file?.includes("/pages/(protected)/"))
      setMiddleware(protectedPages)
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

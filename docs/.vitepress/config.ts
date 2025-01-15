import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Nuxt App",
  description: "A VitePress Site",
  lang: "ja-JP",
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "UI Wire",
        items: [
          // This shows `/guide/index.md` page.
          { text: "Introduction", link: "/ui-wire/" },
          { text: "ログイン", link: "/ui-wire/01-login/" },
          { text: "トップ画面", link: "/ui-wire/02-top/" },
        ],
      },
    ],
    outline: "deep",
    socialLinks: [
      // { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})

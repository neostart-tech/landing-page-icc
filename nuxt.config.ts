// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: "static" },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/test-utils", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "fr",
    strategy: "no_prefix", // pas de /fr ou /en dans l’URL
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "fr", name: "Français", file: "fr.json" },
    ],
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      alwaysRedirect: false,
    },
  },

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});

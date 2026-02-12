// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: { preset: "static" },
  modules: ["@nuxt/eslint", "@nuxt/ui", "@nuxt/test-utils", "@nuxtjs/i18n"],

  i18n: {
    defaultLocale: "fr",
    strategy: "no_prefix",
    locales: [
      { code: "fr", name: "Français", file: "fr.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
    langDir: "locales/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
      alwaysRedirect: false,
      fallbackLocale: "fr",
    },
  },

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
    "/**": {
      headers: {
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": "1; mode=block",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Permissions-Policy": "geolocation=(self), microphone=(), camera=()",
      },
    },
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

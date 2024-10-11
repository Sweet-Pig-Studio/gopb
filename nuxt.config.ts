// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-maplibre"
  ],
  tailwindcss: { exposeConfig: true },

  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_API_URL,
    }
  }
});
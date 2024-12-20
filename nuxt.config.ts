// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  typescript: {
    typeCheck: true,
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-maplibre",
    "@pinia/nuxt"
  ],
  tailwindcss: { exposeConfig: true },

  runtimeConfig: {
    public: {
      apiURL: process.env.NUXT_API_URL,
    }
  }
});
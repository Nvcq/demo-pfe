// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-gpt-assistant/nuxt",
    [
      "@nuxtjs/tailwindcss",
      {
        config: "~/tailwind.config.js",
      },
    ],
  ],
  runtimeConfig: {
    public: {
      openaiApiKey: process.env.OPENAI_API_KEY,
    },
  },
});

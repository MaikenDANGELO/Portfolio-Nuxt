import Aura from '@primeuix/themes/aura';
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/Portfolio-Nuxt/'
  },
  css: ["~/public/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@primevue/nuxt-module",
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura,
        variables: {
          '--p-primary-color': '#D7AC4F',
          '--p-primary-color-text': '#fcfbfb',
          '--p-background-color': '#0C0B1D',
          '--p-card-color': '#fcfbfb',
          '--p-card-subtitle-color': '#AF8D43',
          '--p-button-primary-active-background': '#c6bbb9',
          '--p-button-text-plain-color': '#fcfbfb',
        }
      },
    },
  },
});
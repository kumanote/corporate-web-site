// https://nuxt.com/docs/api/configuration/nuxt-config

import ja from './locales/ja.json'
import en from './locales/en.json'

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'ja',
            name: '日本語',
          },
          {
            code: 'en',
            name: 'English',
          },
        ],
        defaultLocale: 'ja',
        vueI18n: {
          legacy: false,
          locale: 'ja',
          messages: {
            ja,
            en,
          },
        },
      },
    ],
  ],
})

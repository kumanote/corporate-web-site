// https://nuxt.com/docs/api/configuration/nuxt-config
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
            ja: {
              author: '合同会社kumanote',
              service: 'サービス',
              system_development: 'システム開発',
              consultant: 'コンサルタント',
              our_products: '自社サービス',
              blog: 'ブログ',
              blog_top: 'ブログTOP',
              blog_activities: '直近の記事',
              blog_series: '連載記事',
              about_us: '会社概要',
              members: '社員紹介',
              contact: 'お問い合わせ',
              legal: '法務',
              privacy_policy: '個人情報保護方針',
            },
            en: {
              author: 'kumanote LLC.',
              service: 'service',
              system_development: 'system development',
              consultant: 'consultant',
              our_products: 'our products',
              blog: 'blog',
              blog_top: 'blog top',
              blog_activities: 'activities',
              blog_series: 'series',
              about_us: 'about us',
              contact: 'contact',
              legal: 'legal',
              privacy_policy: 'privacy policy',
            },
          },
        },
      },
    ],
  ],
})

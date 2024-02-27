// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image','@nuxtjs/i18n'],
  i18n: {
    locales: [
      {
        code: 'EN',
        file: 'en-US.json'
      },
      {
        code: 'DE',
        file: 'de-DE.json'
      }
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'DE',
    detectBrowserLanguage: false,
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxtjs/device'],
	nitro: {
    compressPublicAssets: true,
  },
  app: {
	head: {
		charset: 'utf-8',
		viewport: 'width=device-width, initial-scale=1',
  }
},
	css: ['animate.css'],
	image: {
		quality: 100,
		screens: {
			md: 768,
			lg: 1024,
			xl: 1280,
			'2xl': 1536,
		}
	},
	ssr: false,
	i18n: {
		locales: [
			{
				code: 'EN',
				file: { path: 'en-US.json', cache: false }
			},
			{
				code: 'DE',
				file: { path: 'de-DE.json', cache: false }
			}
		],
		lazy: true,
		langDir: 'lang',
		defaultLocale: 'DE',
		detectBrowserLanguage: false
	},

	devtools: {
		enabled: true
	}
});
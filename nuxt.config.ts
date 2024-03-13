// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/seo', '@nuxtjs/device'],

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
		defaultLocale: 'EN',
		detectBrowserLanguage: false
	},

	devtools: {
		enabled: true
	}
});

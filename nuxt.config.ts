export default defineNuxtConfig({
	app:{
		head: {
			title: 'Makoto - Website developer',
			htmlAttrs: {
			  lang: 'en',
			},
			meta: [
			  { charset: 'utf-8' },
			  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
			  { hid: 'description', name: 'description', content: '' },
			  { name: 'format-detection', content: 'telephone=no' },
			  { name: 'keywords', content: ''}
			],
			link: [
			  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			  { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
			  { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:display=swap' },
			  { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' } 
			],
		},


	},

	modules: [
		'@nuxtjs/tailwindcss',  	//css framework
		'~/modules/sitemap',		//sitemap creator
		'@nuxtjs/i18n',				//i18n for multilang page
		'@nuxtjs/strapi',			//strapi
	],

	tailwindcss: {
		configPath: 'tailwind.config',
	},

	builder: 'vite',			//webpack alternative for nuxtjs/vuejs
	
	sitemap: {
		hostname: 'https://makoto.click',
	},


	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en.json' },
  			{ code: 'pl', iso: 'pl-PL', file: 'pl.json' }
		],
  		langDir: 'lang/',
		defaultLocale: 'en',
	},
	
	strapi: {
		url: 'http://localhost:1337',
		prefix: '/api',
		version: 'v4',
		cookie: {},
		cookieName: 'strapi_jwt'
	},

	css: [
		'@/assets/css/global.css',
	]
})

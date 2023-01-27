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
		'@unlighthouse/nuxt',		//lighthouse buided in page, port:5678
		'@nuxtjs/i18n',				//i18n for multilang page
	],

	builder: 'vite',			//webpack alternative for nuxtjs/vuejs
	
	sitemap: {
		hostname: 'https://makoto.click',
	},


	unlighthouse: {
		scanner: {
		  device: 'desktop', // simulate a desktop device
		}
	},

	i18n: {
		locales: ['en', 'pl'],
		defaultLocale: 'en',
		vueI18n: {
			legacy: false,
			locale: 'en',
			messages: {
			  en: {
				home: 'Home',
				portfolio: 'Portfolio',
				contact: 'Contact',
				mystack: 'My Stack',
				blog: 'Blog',
				login: 'Login',
				welcome: 'Welcome',

			  },
			  pl: {
				home: 'Start',
				portfolio: 'Portfolio',
				contact: 'Kontakt',
				mystack: 'Moje technologie',
				blog: 'Blog',
				login: 'Zaloguj się',
				welcome: 'Witam',
			  }
			}
		  }
	},
	

	css: [
		'@/assets/css/global.css',
	]
})

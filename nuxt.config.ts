export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4,
	},
	app: {
		head: {
			title: 'Makoto - Website developer',
			htmlAttrs: {
				lang: 'en',
			},
			meta: [{
					charset: 'utf-8'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1'
				},
				{
					name: 'format-detection',
					content: 'telephone=no'
				},
				{
					name: 'description',
					content: 'Makoto - Web developer. I create websites with CMS support. I have been creating websites for 6 years and computer graphics including logos for 8 years.'
				},
				{
					name: 'keywords',
					content: 'Makoto, MakotoPD, Web developer, developer, web dev, dev, js, javascript, typescript, ts, programista, strony internetowe, websites, website, doświadczenie, nowoczesne, experience, modern, modern websites, nowoczesne strony'
				},
				{
					name: 'og:image',
					content: '/og.png'
				}
			],
			link: [{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico'
				},
				{
					rel: 'stylesheet',
					href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
					media: 'print', 
					onload: 'this.media="all"'
				},
				{
					rel: 'alternate',
					hreflang: 'pl',
					href: 'https://makoto.com.pl/pl'
				},
				{
					rel: 'alternate',
					hreflang: 'en-GB',
					href: 'https://makoto.com.pl'
				},
				{
					rel: 'canonical',
					href: 'https://makoto.com.pl'
				}
			],
		},

	},

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/i18n',
		'@nuxt/image',
		'nuxt-gtag',
		'@nuxtjs/google-fonts',
		'@nuxtjs/robots',
		'@nuxtjs/sitemap',
		"@nuxthub/core",
	],

	devtools: { enabled: true },

	plugins: [{
		src: "@/plugins/aos",
		ssr: false,
		mode: "client"
	}],

	tailwindcss: {
		configPath: 'tailwind.config',
	},

	hub: {
	},

	robots: {
		UserAgent: '*',
		Disallow: '',
		Sitemap: 'https://makoto.com.pl/sitemap.xml'
	},

	builder: 'vite', //webpack alternative for nuxtjs/vuejs


	i18n: {
		locales: [{
				code: 'en',
				iso: 'en-US',
				file: 'en.json'
			},
			{
				code: 'pl',
				iso: 'pl-PL',
				file: 'pl.json'
			}
		],
		langDir: 'lang/',
		defaultLocale: 'en',
		compilation: {
			strictMessage: false,
		},
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		}
	},


	gtag: {
		id: 'G-7P472XF9TT'
	},

	googleFonts: {
		display: 'swap',
		families: {
			Roboto: true,
		}
	},

	site: {
		sources: [
			'/api/__sitemap__/urls',
		  ]
	},

	css: [
		'@/assets/css/global.css',
	]
})
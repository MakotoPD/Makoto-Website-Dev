export default defineNuxtConfig({
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
					content: 'Makoto - Web developer. I create websites with CMS support. I have been creating websites for 6 years and computer graphics including logos for 8 years. | Tworzę strony internetowe z wsparciem CMS. Tworzę strony od 6 lat oraz grafiki komputerowe w tym loga od 8 lat'
				},
				{
					name: 'keywords',
					content: 'Makoto, MakotoPD, Web developer, developer, js, javascript, typescript, ts, programista, strony internetowe, websites, website, doświadczenie, nowoczesne, experience, modern, modern websites, nowoczesne strony'
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
					href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
				},
				{
					rel: 'alternate',
					hreflang: 'pl',
					href: 'https://makoto.pl/pl'
				},
				{
					rel: 'alternate',
					hreflang: 'en-GB',
					href: 'https://makoto.pl'
				},
			],
		},

	},

	modules: [
		'@nuxtjs/tailwindcss', //css framework
		'@nuxtjs/i18n', //i18n for multilang page
		'@nuxt/image-edge', //images
		'nuxt-gtag', //gtag google analytics
		'@nuxtjs/google-fonts', //google fonts
		'@nuxtjs/supabase',
	],

	supabase: {
		redirect: false
	},

	devtools: { enabled: true },

	plugins: [{
		src: "@/plugins/aos",
		ssr: false,
		mode: "client"
	}],

	tailwindcss: {
		configPath: 'tailwind.config',
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
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: 'i18n_redirected',
			redirectOn: 'root',
		}
	},


	gtag: {
		id: 'G-HP3FPJW3BW'
	},

	googleFonts: {
		display: 'swap',
		families: {
			Roboto: true,
		}
	},

	css: [
		'@/assets/css/global.css',
	]
})
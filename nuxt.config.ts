export default defineNuxtConfig({
	nitro: {
		prerender: {
		  autoSubfolderIndex: false
		}
	},
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
					content: 'Makoto - Web developer. Experienced web developer offers modern, responsive designs, SEO optimization and technical support. Specializing in JavaScript, VueJS, React and more. Create exceptional websites with us!'
				},
				{
					name: 'keywords',
					content: 'programista stron internetowych, tworzenie stron www, nowoczesne technologie webowe, Nuxt.js, Vue.js, React, optymalizacja SEO, responsywne strony, projektowanie stron internetowych, wsparcie techniczne, HTML5, CSS3, JavaScript, Node.js, WordPress, portfolio web development, usługi webowe, aktualizacja stron, utrzymanie stron internetowych, rozwój aplikacji webowych, Makoto, MakotoPD, web developer, website development, modern web technologies, Nuxt.js, Vue.js, React, SEO optimization, responsive websites, web design, technical support, HTML5, CSS3, JavaScript, Node.js, WordPress, web development portfolio, web services, website updates, website maintenance, web application development'
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
			script: [
				{children: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MMVH46RC');"},
				{defer: true, src: 'https://cloud.umami.is/script.js', "data-website-id": '84056d40-a170-4a24-9d8a-e10d2144dd7e'}
			]
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
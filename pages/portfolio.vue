<template>
	<div>
		<Head>
			<Title>Makoto - {{ $t('page.portfolio.title') }}</Title>
		</Head>

		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.portfolio.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.portfolio.subtitle') }}</h2>
			</div>
		</div>
		

		<div class="container mx-auto mb-12">
			<div class="mb-6 px-4 sm:px-0">
				<h2 class="text-primary text-3xl font-light mb-4">{{ $t('page.portfolio.filter') }}:</h2>
				<div class="flex gap-x-4">
					<button @click="filter" data-type="All" class="bg-gray-600 px-5 py-2 rounded-full text-white hover:bg-gray-600/50 duration-150">All</button>
					<button @click="filter" data-type="Logo" class="bg-gray-600 px-5 py-2 rounded-full text-white hover:bg-gray-600/50 duration-150">Logos</button>
					<button @click="filter" data-type="Web" class="bg-gray-600 px-5 py-2 rounded-full text-white hover:bg-gray-600/50 duration-150">Websites</button>
				</div>
			</div>
			<div id="gallery" class="mb-96">
				<div class="galleryLogos grid sm:grid-cols-2 md:grid-cols-3 place-items-center px-8 sm:px-0">
					<div v-for="companies in logos.logos" data-aos-offset="0" data-aos="zoom-in-up" class="m-6 xl:h-64 xl:w-64 overflow-hidden rounded-lg bg-gray-700">
						<nuxt-img preload data-type="Logo" loading="lazy" quality="30" :src="companies.src" :alt="companies.alt"  />
					</div>
					
				</div>

				<div class="galleryWebs grid sm:grid-cols-2 md:grid-cols-3 place-items-center px-8 sm:px-0">
					<div v-for="companies in webs.webs" class="m-6  overflow-hidden rounded-lg bg-gray-700 cursor-pointer hover:scale-105 duration-150" @click="openpdf">
						<nuxt-img preload data-type="Web" loading="lazy" quality="30" :data-link="companies.link" :src="companies.src" :alt="companies.alt"  />
					</div>
				</div>
			</div>
			

		</div>
	</div>

</template>

<script setup lang="ts">
useHead({
	title: 'Portfolio - Makoto',
})

import logos from '~/static/json/logos.json'
import webs from '~/static/json/websites.json'

let openpdf = (e) => {
	let link = e.srcElement.attributes[5].value
	console.log(link)

	window.open(link, "_blank")
}


let filter = (e) => {

	let filterType = e.srcElement.attributes[0].value
	console.log(filterType)

	let gallery = document.querySelector('#gallery')

	console.log(gallery)

	let logos = document.querySelector('.galleryLogos')
	let webs = document.querySelector('.galleryWebs')

	if (filterType == 'Logo') {
		logos?.classList.remove('hidden')
		webs?.classList.add('hidden')
	}
	if (filterType == 'Web') {
		webs?.classList.remove('hidden')
		logos?.classList.add('hidden')
	}
	if (filterType == 'All') {
		logos?.classList.remove('hidden')
		webs?.classList.remove('hidden')
	}
}
	
onMounted(() => {

})
</script>
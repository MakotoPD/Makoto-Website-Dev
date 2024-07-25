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
					<button @click="clearFilter" data-type="All" class="bg-gray-600 px-5 py-2 rounded-full text-white hover:bg-gray-600/50 duration-150">All</button>
					<label class="relative">
						<input v-model="checkedFilters" class="hidden peer" name="Logo" value="Logo" type="checkbox">
						<span class="block bg-gray-600 select-none cursor-pointer px-5 py-2 rounded-full text-white peer-checked:bg-primary">Logos</span>
					</label>
					<label class="relative">
						<input v-model="checkedFilters" class="hidden peer" name="Web" value="Web" type="checkbox">
						<span class="block bg-gray-600 select-none cursor-pointer px-5 py-2 rounded-full text-white peer-checked:bg-primary">Websites</span>
					</label>
				</div>
			</div>
			<div id="gallery" class="mb-96">
				<div v-if="checkedFilters.includes('Logo')" class="galleryLogos grid sm:grid-cols-2 md:grid-cols-3 place-items-center px-8 sm:px-0">
					<div v-for="companies in logos.logos" data-aos-offset="0" data-aos="zoom-in-up" class="m-6 xl:h-64 xl:w-64 overflow-hidden rounded-lg bg-gray-700">
						<nuxt-img preload data-type="Logo" loading="lazy" quality="30" :src="companies.src" :alt="companies.alt"  />
					</div>
					
				</div>

				<div v-if="checkedFilters.includes('Web')" class="galleryWebs grid sm:grid-cols-2 md:grid-cols-3 place-items-center px-8 sm:px-0">
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

const checkedFilters = ref([ "Logo", "Web" ])



let openpdf = (e: any) => {
	let link = e.srcElement.dataset.link
	console.log(link)

	window.open(link, "_blank")
}

let clearFilter = () => {
	checkedFilters.value = [ "Logo", "Web" ]
}


</script>
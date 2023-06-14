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
			<div class="grid grid-cols-2 md:grid-cols-3 place-items-center">
				<div v-for="companies in imgs.logos"  class="m-6 xl:h-64 xl:w-64 overflow-hidden rounded-lg bg-gray-700">
					<nuxt-img preload  loading="lazy" quality="30" :src="companies.src" :alt="companies.alt"  />
				</div>
			</div>
		</div>
	</div>

</template>

<script setup lang="ts">
useHead({
	title: 'Portfolio - Makoto',
})

import imgs from '~/static/json/logos.json'
</script>
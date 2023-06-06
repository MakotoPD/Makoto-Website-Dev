<template>
	<div>

		<Head>
			<Title>Makoto - {{ $t('page.contact.title') }}</Title>
		</Head>


		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.contact.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.contact.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12 text-white/90">
			<div class="flex justify-center text-lg font-light text-center">
				<p>{{ $t('page.contact.desc') }}</p>
			</div>

			<div class="flex items-center justify-center space-x-8 mt-2">
				<NuxtLink to="https://www.instagram.com/makotopd/" target="_blank" class="checkout_box flex px-3 py-1 border-2 border-gray-600 bg-pink-300/20 rounded-xl hover:border-pink-600/40 hover:bg-pink-300/40 duration-75">
					<i class='text-pink-400/70 bx bx-sm bxl-instagram-alt mr-2'></i>
					Instagram
				</NuxtLink>
				<NuxtLink to="https://twitter.com/MakotoPl" target="_blank" class="checkout_box flex px-3 py-1 border-2 border-gray-600 bg-blue-300/20 rounded-xl hover:border-blue-600/40 hover:bg-blue-300/40 duration-75">
					<i class='text-blue-400/70 bx bx-sm bxl-twitter mr-2'></i>
					Twitter
				</NuxtLink>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12 text-white/90">
			<div class="flex justify-center text-lg font-light text-center">
				<p>{{ $t('page.contact.or') }}</p>
			</div>

			<div class="mt-4 rounded-xl bg-gray-800/40 py-12 px-8 text-center">
			 	<p class="text-white/50 animate-pulse">Work in progress</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Contact - Makoto',
})
</script>
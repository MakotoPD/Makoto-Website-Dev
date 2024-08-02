<template>

	<Head>
		<Title>Makoto - {{ $t('page.mystack.title') }}</Title>
	</Head>

	<div class="mb-36">

		 

		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.mystack.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.mystack.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12 relative">

			<div  class="z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-14 gap-y-14">
				<div data-aos="zoom-in-up" class="checkout_box relative border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 pr-8 pl-14 text-white/80 h-full" v-for="item in $tm('page.mystack.Stack')">
					{{ $rt(item.desc) }}


					<div class="p-1 absolute -left-6 -top-6 w-16 h-16 rounded-lg border-2 border-gray-600 bg-gray-800/30 backdrop-blur-sm">
						<nuxt-img loading="lazy" :src="$rt(item.icon)" alt="icon" class="z-10" />
					</div>
				</div>
			</div>
			
			<div class=" hidden md:block -z-10 absolute left-0 -top-24 w-full">
				<img class="w-full opacity-50" src="/bg/elipse.png" alt="bg">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>
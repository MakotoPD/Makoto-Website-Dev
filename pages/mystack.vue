<template>
	<div class="mb-36">

		<Head>
			<Title>Makoto - {{ $t('page.mystack.title') }}</Title>
		</Head>

		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.mystack.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.mystack.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12">
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-x-14 gap-y-14">
				<div class="checkout_box relative border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 pr-8 pl-14 text-white/80 h-full" v-for="item in $tm('page.mystack.Stack')">
					{{ item.desc({normalize}) }}


					<div class="p-1 absolute -left-6 -top-6 w-16 h-16 rounded-lg border-2 border-gray-600 bg-gray-800/30 backdrop-blur-sm">
						<nuxt-img loading="lazy" :src="item.icon({normalize})" alt="icon" class="z-10" />
					</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script setup lang="ts">

function normalize([v]: string[]) {
  return v
}
</script>
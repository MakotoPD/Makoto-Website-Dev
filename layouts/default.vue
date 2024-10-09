<template>
	<Head>
		<NoScript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMVH46RC"
			height="0" width="0" style="display:none;visibility:hidden"></iframe></NoScript>
		<NoScript>
			<img height="1" width="1" style="display:none"src="https://www.facebook.com/tr?id=1516447535903195&ev=PageView&noscript=1"/>
		</NoScript>
	</Head>
	<div class="w-screen h-full main">
		<SpeedInsights/>
		<header class="desktopmenu hidden w-full md:flex flex-col justify-center">
			<div class="relative w-full flex justify-between p-2 border-b bg-gray-400/10 border-gray-500 backdrop-blur-sm">
				<div>
					<NuxtLink :to="localePath('/')">
						<nuxt-img src="/logo.png" quality="20" alt="logo" class="h-8" />
					</NuxtLink>
				</div>
				<div class="flex flex-nowrap space-x-4 items-center text-gray-400 pr-4">
					<NuxtLink class="hover:text-gray-200 duration-300" :to="localePath('/')">
						{{ $t('menu.home') }}
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" :to="localePath('/Portfolio')">
						{{ $t('menu.portfolio') }}
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" :to="localePath('/Contact')">
						{{ $t('menu.contact') }}
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" :to="localePath('/MyStack')">
						{{ $t('menu.mystack') }}
					</NuxtLink>
					<NuxtLink class="hover:text-gray-200 duration-300" :to="localePath('/Pricing')">
						{{ $t('menu.pricing') }}
					</NuxtLink>
				</div>
				<div class="absolute right-4 -bottom-8 h-8 w-20 flex justify-center items-center rounded-b-md font-semibold bg-blue-400/90">
					<select v-model="locale" class="bg-transparent text-white">
						<option class="text-black" value="en">en</option>
						<option class="text-black" value="pl">pl</option>
					</select>
				</div>
			</div>
			<img src="/gradientBG.png" alt="background" class="h-10 w-fit">
		</header>

		<header id="mobileNav" class="ease-in-out duration-300 z-[100] grid grid-cols-5 bg-gray-700/40 backdrop-blur-md fixed bottom-2 left-1/2 -translate-x-1/2 py-2 px-4 md:hidden w-11/12 border border-gray-500 rounded-2xl">
			<NuxtLink :to="localePath('/Portfolio')" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-image-alt'></i>
				<p class="text-white/80 text-xs text-center">{{ $t('menu.portfolio') }}</p>
			</NuxtLink>
			<NuxtLink :to="localePath('/Contact')" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-mobile'></i>
				<p class="text-white/80 text-xs text-center">{{ $t('menu.contact') }}</p>
			</NuxtLink>
			<NuxtLink :to="localePath('/')" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxs-home-alt-2'></i>
				<p class="text-white/80 text-xs text-center">{{ $t('menu.home') }}</p>
			</NuxtLink>
			<NuxtLink :to="localePath('/MyStack')" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bxl-codepen'></i>
				<p class="text-white/80 text-xs text-center">{{ $t('menu.mystack') }}</p>
			</NuxtLink>
			<NuxtLink :to="localePath('/Pricing')" class="mobileMenu py-1 flex flex-col -space-y-0.5 items-center">
				<i class='text-white/90 bx-sm bx bx-money'></i>
				<p class="text-white/80 text-xs text-center">{{ $t('menu.pricing') }}</p>
			</NuxtLink>
		</header>
		<slot />


		<Footer/>
	</div>

</template>

<script setup lang="ts">
import { SpeedInsights } from "@vercel/speed-insights/nuxt"


import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()


onMounted(() => {


	let lastScrollTop: any;
	let navbar = <HTMLInputElement>document.getElementById('mobileNav');

	window.addEventListener('scroll',function(){
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		if(scrollTop > lastScrollTop){
			navbar.style.bottom='-80px';
		}
		else{
			navbar.style.bottom='8px';
		}

		lastScrollTop = scrollTop;
	});
})

</script>


<style>

.router-link-active.mobileMenu{
	@apply bg-white/90 rounded-lg shadow-lg;
}

.router-link-active.mobileMenu i {
	color: rgb(0, 0, 0, 0.9) !important;
}

.router-link-active.mobileMenu p {
	color: rgb(0, 0, 0, 0.9) !important;
}

</style>
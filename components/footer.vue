<template>
	<div class="pt-12 bg-gray-800 ">
		<div class="grid md:grid-cols-3 gap-3 px-12 pb-6 container mx-auto">
			<div>
				<nuxt-img src="/logo.png" quality="20" alt="logo" class="h-8" />
				<div class="mt-2 flex space-x-2">
					<p class="text-white/70">Select language:</p>
					<select v-model="locale" class="bg-gray-700 rounded-lg text-white px-2">
						<option class="" value="en">en</option>
						<option class="" value="pl">pl</option>
					</select>
				</div>
			</div>
			
			<div>
				<p class="text-white/20 tracking-widest text-lg">Navigation</p>
				<div class="flex flex-col text-gray-400 pl-2">
					<NuxtLink :to="localePath('/')" class="hover:text-white/90">
						{{ $t('menu.home') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Portfolio')" class="hover:text-white/90">
						{{ $t('menu.portfolio') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Contact')" class="hover:text-white/90">
						{{ $t('menu.contact') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/MyStack')" class="hover:text-white/90">
						{{ $t('menu.mystack') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/privacy-policy')" class="hover:text-white/90">
						{{ $t('page.privacy.title') }}
					</NuxtLink>
				</div>
			</div>

			<div>
				<p class="text-white/20 tracking-widest text-lg">Social Media</p>
				<div class="flex flex-col text-gray-400 pl-2">
					<NuxtLink target="_blank" to="https://www.instagram.com/makotopd/" class="hover:text-white/90">
						Instagram
					</NuxtLink>
					<NuxtLink target="_blank" to="https://x.com/MakotoPD" class="hover:text-white/90">
						X / Twitter
					</NuxtLink>
					<NuxtLink target="_blank" rel="me" href="https://github.com/MakotoPD">
						GitHub
					</NuxtLink>
					<NuxtLink target="_blank" to="https://www.twitch.tv/makoto_pl/" class="hover:text-white/90">
						Twitch
					</NuxtLink>
					<NuxtLink target="_blank" to="https://www.youtube.com/@makotopd" class="hover:text-white/90">
						YouTube
					</NuxtLink>
					<NuxtLink target="_blank" rel="me" href="https://www.facebook.com/MakotoPL">
						Facebook
					</NuxtLink>
				</div>
			</div>
		</div>
		<div class="w-full py-4 flex justify-center items-center text-white/70">
			<p>Copyright © 2018-2024 MakotoPD. MIT.</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()
</script>

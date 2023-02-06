<template>
	<div class="bg-gray-900 w-screen h-screen">
		<NuxtLoadingIndicator color="#4A6AAD"/>
		<header class="w-full flex flex-col justify-center">
			<div class="relative w-full flex justify-between p-2 border-b border-gray-500">
				<div>
					<NuxtLink :to="localePath('/')">
						<img src="/logo.png" alt="logo.png" class="h-8">
					</NuxtLink>
				</div>
				<div class="flex flex-nowrap space-x-4 items-center text-gray-400 pr-4">
					<NuxtLink :to="localePath('/')">
						{{ $t('menu.home') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Portfolio')">
						{{ $t('menu.portfolio') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Contact')">
						{{ $t('menu.contact') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/MyStack')">
						{{ $t('menu.mystack') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Blog')">
						{{ $t('menu.blog') }}
					</NuxtLink>
				</div>
				<div class="absolute right-4 -bottom-8 h-8 w-20 flex justify-center items-center rounded-b-md font-semibold bg-blue-400/90">
					<select v-model="locale">
						<option value="en">en</option>
						<option value="pl">pl</option>
					</select>
				</div>
			</div>
			<img src="/gradientBG.png" alt="background" class="h-10">
		</header>
		<slot />

		<footer>

		</footer>
	</div>

</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()


const token = useStrapiToken()

const cookie = useCookie('strapi_jwt')
cookie.value = token

</script>
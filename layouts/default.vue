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
						{{ $t('home') }}
					</NuxtLink>
					<NuxtLink to="/Portfolio">
						{{ $t('portfolio') }}
					</NuxtLink>
					<NuxtLink :to="localePath('/Contact')">
						{{ $t('contact') }}
					</NuxtLink>
					<NuxtLink to="/MyStack">
						{{ $t('mystack') }}
					</NuxtLink>
					<NuxtLink to="/Blog">
						{{ $t('blog') }}
					</NuxtLink>
					<NuxtLink to="/Login">
						{{ $t('login') }}
					</NuxtLink>
				</div>
				<div class="absolute right-4 -bottom-8 h-8 w-20 flex justify-center items-center rounded-b-md text-white font-semibold bg-blue-400/90">
					Beta
				</div>
			</div>
			<img src="/gradientBG.png" alt="background" class="h-10">
		</header>
		<div>
			<form>
				<select v-model="locale">
					<option value="en">en</option>
					<option value="pl">pl</option>
				</select>
				<p class="text-white">{{ $t('welcome') }}</p>
			</form>
		</div>
		<slot />

		<footer>

		</footer>
	</div>

</template>

<script setup lang="ts">
import { useI18n, useLocalePath } from '#imports'
const { locale } = useI18n()

const localePath = useLocalePath()

onMounted(() => {
	
	if (typeof window.ethereum !== 'undefined') {  
	console.log("Metamask is installed")
	console.log(window.ethereum)
	} else {
	console.log("Metamask is not installed")
	}
})


</script>
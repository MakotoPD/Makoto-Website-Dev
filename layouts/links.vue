<template>
	<div class="h-screen">
		<NuxtLoadingIndicator color="#4A6AAD"/>

		<header class="w-full flex flex-col">
			<div class="relative w-full flex justify-between p-2 border-b bg-gray-400/10 border-gray-500">
				<div>
					<NuxtLink :to="localePath('/')">
						<nuxt-img src="/logo.png" quality="20" alt="logo" class="h-8" />
					</NuxtLink>
				</div>
			</div>
		</header>
		<slot />
	</div>
</template>

<script lang="ts" setup>
import { useI18n, useLocalePath } from '#imports'

const { locale } = useI18n()

const localePath = useLocalePath()
</script>
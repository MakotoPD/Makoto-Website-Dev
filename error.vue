<template>
	<div class="bg-gray-900 w-screen h-screen">
		<NuxtErrorBoundary>
			<div class="py-36 flex justify-center items-center flex-col">
				<div class="mb-12 text-center">
					<h1 class="text-6xl font-bold text-blue-600">{{error.statusCode}}</h1>
					<h2 class="text-2xl font-bold text-blue-500">{{error.message}}</h2>
				</div>
				<button @click="handleClearError" class="px-6 py-2 border border-blue-400 rounded-xl text-blue-500 hover:shadow-lg hover:bg-gray-800 duration-150">Powrót do strony głównej</button>
			</div>
		</NuxtErrorBoundary>
	</div>
</template>

<script setup lang="ts">
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>
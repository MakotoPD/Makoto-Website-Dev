<template>
	<div class="flex justify-center items-center">
		blog
		<div class="container mx-auto flex">
			<div v-for="b in blogs.data" class="w-44 py-4 rounded-lg bg-gray-700 text-white">
				<p>{{ b.attributes.title }}</p>
				<p>{{ b.attributes.body }}</p>
			</div>
		</div>
		
	</div>
</template>

<script setup lang="ts">
const { find } = useStrapi()

const blogs = await find('blogs')

</script>
<template>
	<div>

		<Head>
			<Title>Makoto - {{ $t('page.contact.title') }}</Title>
		</Head>

		<div class="flex justify-center items-center">
			{{ $t('contact') }}
		</div>

	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Contact - Makoto',
})
</script>
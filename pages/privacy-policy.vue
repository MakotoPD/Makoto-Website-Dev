<template>
	<div>
		<Head>
			<Title>Makoto - {{ $t('page.privacy.title') }}</Title>
		</Head>


		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.privacy.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.privacy.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-3 mb-14">
			<ul class="list-decimal list-inside text-gray-200">
				<li class="py-4 text-2xl font-semibold" v-for="item in $tm('page.privacy.ul')">
					{{ $rt(item.headling) }}
					
					<p class="text-base font-medium pt-2" v-html="$rt(item.desc)"></p>
				</li>
			</ul>
		</div>
	</div>
</template>
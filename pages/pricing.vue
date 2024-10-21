<template>
	<Head>
		<Title>Makoto - {{ $t('page.pricing.title') }}</Title>
	</Head>

	<div class="mb-36">

		 <Sendmail v-if="contactFormPopup" @closeclicked="contactFormPopup = false" :type="type" :plan="plan" />

		<div class="container mx-auto px-4 md:px-36">
			<div class="items-center pt-24 mb-24 md:mb-44">
				<h1 class="text-white text-4xl">{{ $t('page.pricing.title') }}</h1>
				<h2 class="text-primary text-3xl font-light">{{ $t('page.pricing.subtitle') }}</h2>
			</div>
		</div>

		<div class="container mx-auto px-12 sm:px-24 mb-12 relative">

			<h3 class="text-center text-5xl text-white/80 ">{{ $t('page.pricing.web') }}</h3>

			<div class="mt-24 flex flex-wrap gap-14 justify-center">
				<div class="relative self-stretch">
					<NuxtImg src="/icons/strawberry.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.website.small.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>
						<div>
							<h2 class="mb-4 text-red-600/80">{{ $t('page.pricing.website.small.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.website.small.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.website.small.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.website.small.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
							
						</div>

						<button @click="opencontactForm('website', 'small')"  class="rounded-xl px-6 py-2 bg-[#F43F5E30] border border-1 border-red-600/50 hover:bg-[#F43F5Eaa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>
				


				<div class="relative self-stretch">
					<NuxtImg src="/icons/blueberries.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.website.medium.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>

						<div>
							<h2 class="mb-4 text-blue-600/80">{{ $t('page.pricing.website.medium.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.website.medium.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.website.medium.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.website.medium.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
						</div>

						<button @click="opencontactForm('website', 'medium')"  class="rounded-xl px-6 py-2 bg-[#0284C730] border border-1 border-blue-600/50 hover:bg-[#0284C7aa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>
				

				<div class="relative self-stretch">
					<NuxtImg src="/icons/banana.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.website.big.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>
						<div>
							<h2 class="mb-4 text-yellow-600/80">{{ $t('page.pricing.website.big.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.website.big.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.website.big.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.website.big.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
						</div>

						<button @click="opencontactForm('website', 'big')"  class="rounded-xl px-6 py-2 bg-[#EAB30830] border border-1 border-yellow-600/50  hover:bg-[#EAB308aa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>


				<div class="relative self-stretch">
					<NuxtImg src="/icons/kiwi.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.website.custom.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>
						<div>
							<h2 class="mb-4 text-green-600/80">{{ $t('page.pricing.website.custom.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.website.custom.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.website.custom.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.website.custom.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
						</div>

						<button @click="opencontactForm('website', 'custom')"  class="rounded-xl px-6 py-2 bg-[#08ea3130] border border-1 border-green-600/50  hover:bg-[#08ea31aa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>
				

			</div>

			<div class=" hidden md:block -z-10 absolute left-0 -top-24 w-full">
				<img class="w-full opacity-50" src="/bg/elipse.png" alt="bg">
			</div>
		</div>

		<div class="mt-44 container mx-auto px-12 sm:px-24 mb-12 relative">

			<h3 class="text-center text-5xl text-white/80 ">Logo</h3>

			<div class="mt-24 flex flex-wrap gap-14 justify-center">

				<div class="relative self-stretch">
					<NuxtImg src="/icons/strawberry.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.logo.small.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>
						<div>
							<h2 class="mb-4 text-red-600/80">{{ $t('page.pricing.logo.small.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.logo.small.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.logo.small.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.logo.small.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
							
						</div>

						<button @click="opencontactForm('logo', 'small')"  class="rounded-xl px-6 py-2 bg-[#F43F5E30] border border-1 border-red-600/50 hover:bg-[#F43F5Eaa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>
				

				<div class="relative self-stretch">
					<NuxtImg src="/icons/blueberries.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.logo.medium.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>

						<div>
							<h2 class="mb-4 text-blue-600/80">{{ $t('page.pricing.logo.medium.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.logo.medium.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.logo.medium.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.logo.medium.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
						</div>

						<button @click="opencontactForm('logo', 'medium')"  class="rounded-xl px-6 py-2 bg-[#0284C730] border border-1 border-blue-600/50 hover:bg-[#0284C7aa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>
				

				<div class="relative self-stretch">
					<NuxtImg src="/icons/banana.png"  class="absolute -z-[10] left-0 top-0 -translate-x-1/2 -translate-y-1/2 text-8xl" />
					<div class="absolute z-50 top-0 left-0 w-full h-px glowbig"></div>

					<div
						:class="$t('page.pricing.logo.big.class')"
						class="h-full backdrop-blur-lg px-6 py-4 rounded-2xl text-white w-72 flex flex-col justify-between items-start"
					>
						<div>
							<h2 class="mb-4 text-yellow-600/80">{{ $t('page.pricing.logo.big.title') }}</h2>
							<h3 class='text-4xl'>{{ $t('page.pricing.logo.big.price') }}</h3>
							<h3 class="mb-4 text-white/80">{{ $t('page.pricing.logo.big.subtitle') }}</h3>

							<ul class="mb-12">
								<li class="flex items-start gap-2 my-1" v-for="prop in $tm('page.pricing.logo.big.props')">  <NuxtImg src="/icons/check.svg" class="h-4 mt-1" /> <p>{{ $rt(prop.name) }}</p> </li>
							</ul>
						</div>

						<button @click="opencontactForm('logo', 'big')"  class="rounded-xl px-6 py-2 bg-[#EAB30830] border border-1 border-yellow-600/50  hover:bg-[#EAB308aa] duration-150">
							{{ $t('page.pricing.button') }}
						</button>
					</div>
				</div>

			</div>

			<div class=" hidden md:block -z-10 absolute left-0 -top-24 w-full">
				<img class="w-full opacity-50" src="/bg/elipse.png" alt="bg">
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const i18nHead = useLocaleHead({
  addSeoAttributes: {
    canonicalQueries: ['en']
  }
})

useHead({
	title: t('web.title.price'),
	meta: [
		{ 
			name: 'description', 
			content: t('web.description'),
		}
	],
	htmlAttrs: {
		lang: i18nHead.value.htmlAttrs!.lang
	},
})



let contactFormPopup = ref(false);

let type = ref('')
let plan = ref('')


let opencontactForm = (x: string, y: string) => {
	type.value = x
	plan.value = y

	contactFormPopup.value = true
}

</script>
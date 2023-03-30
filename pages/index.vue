<template>
	<div>

		<Head>
			<Title>Makoto - {{ $t('page.home.title') }}</Title>
		</Head>

		<Header/>
		<div class="py-24 md:py-36">
			<div class="flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-14">
				<div class="w-44 md:w-64 flex flex-col md:items-start">
					<div class="boxFirst w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/diamond.svg" />
					</div>
					<p class="text-sm md:text-base text-gray-300 mt-2 md:mt-6 leading-5 md:leading-8">
						{{ $t('page.home.Props.diamond') }}
					</p>
				</div>
				<div class="w-44 md:w-64 flex flex-col md:items-start">
					<div class="boxSecond w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/pen.svg" />
					</div>
					<p class="text-sm md:text-base text-gray-300 mt-2 md:mt-6 leading-5 md:leading-8">
						{{ $t('page.home.Props.pen') }}
					</p>
				</div>
				<div class="w-44 md:w-64 flex flex-col md:items-start">
					<div class="boxThird w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/meta.svg" />
					</div>
					<p class="text-sm md:text-base text-gray-300 mt-2 md:mt-6 leading-5 md:leading-8">
						{{  $t('page.home.Props.meta') }}
					</p>
				</div>
			</div>
		</div>
		<div class="py-24 md:py-36 relative">
			<img src="/bg/Ellipse1.png" alt="null" class="absolute -z-10 right-0 top-0 -translate-y-1/2">

			<div class="text-white flex flex-col space-y-14 items-center justify-center">
				<h2 class="text-5xl font-semibold text-center">{{ $t('page.home.Specifically.specifically') }}</h2>

				<div class="grid md:grid-cols-2 gap-4 px-4 md:px-0">
					<div class="specifillacy_box flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
						<h3 class="text-xl">
							<span class="text-primary mr-2">
								{{ $t('page.home.Specifically.frontend').split(" ")[0] }}
							</span>
							<span>
								{{ $t('page.home.Specifically.frontend').split(" ")[1] }}
							</span>
						</h3>
						<div class="text-gray-400">
							{{ $t('page.home.Specifically.Frontend.main') }}
						</div>
						<div class="pl-2">
							<ul class="list-disc list-inside text-gray-200">
								<li v-for="item in $tm('page.home.Specifically.Frontend.ul')">
									{{ item({normalize}) }}
								</li>
							</ul>
						</div>
					</div>

					<div class="specifillacy_box flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
						<h3 class="text-xl">
							<span class="text-primary mr-2">
								{{ $t('page.home.Specifically.graphic').split(" ")[0] }}
							</span>
							<span>
								{{ $t('page.home.Specifically.graphic').split(" ")[1] }}
							</span>
						</h3>
						<div class="text-gray-400">
							{{ $t('page.home.Specifically.Graphic.main') }}
						</div>
						<div class="pl-2">
							<ul class="list-disc list-inside text-gray-200">
								<li v-for="item in $tm('page.home.Specifically.Graphic.ul')">
									{{ item({normalize}) }}
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>

		<div class="md:py-36">
			<div class="text-white flex flex-col space-y-14 items-center justify-center mx-4 md:mx-0">
				<h2 class="text-5xl font-semibold text-center">{{ $t('page.home.Support.support') }}</h2>

				<div class="container mx-auto grid xl:grid-cols-2 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-12 px-8">
					<div class="w-full text-center mb-8 xl:mb-0">
						<h3 class="text-4xl md:text-6xl font-semibold w-10/12 mx-auto">{{ $t('page.home.Support.build') }}</h3>
					</div>
					<div class="w-full">
						<div>
							<h3 class="text-2xl mb-4">
								<span class="text-primary">
									{{ $t('page.home.Support.Why.why').split(" ").shift() }}
								</span>
								{{ $t('page.home.Support.Why.why').split(" ")[1] }}
								{{ $t('page.home.Support.Why.why').split(" ")[2] }} 
							</h3>

							<p class="text-gray-400">
								{{ $t('page.home.Support.Why.desc') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="py-24 md:py-36 relative">
			<img src="/bg/Ellipse2.png" alt="null" class="absolute -z-10 left-0 top-40 -translate-y-1/2">
			<div class="text-white flex flex-col space-y-8 items-center justify-center">
				<h2 class="text-5xl font-semibold text-center">{{ $t('page.home.Tech.technology') }}</h2>

				<div class="container mx-auto grid md:grid-cols-2 place-items-center px-8 text-gray-400">
					<div class="max-w-md md:py-24 text-sm lg:text-xl">
						{{ $t('page.home.Tech.main') }}
					</div>
					<nuxt-img src="/technology.png" quality="60" alt="technology" class="max-h-64 md:max-h-96" />
				</div>
			</div>
		</div>

		<div class="container mx-auto">
			<div class="md:pt-14 pb-36 relative">
				<div class="text-white flex flex-col space-y-8 items-center justify-center">
					<h2 class="text-5xl font-semibold text-center">{{ $t('page.home.Grow.Title') }}</h2>
					<div class="grid md:grid-cols-3 gap-4">

						<div class="checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
								<i class='text-blue-400/70 bx bx-sm bx-line-chart'></i>
							</div>
							<h3 class="text-lg font-semibold text-white/80">{{ $t('page.home.Grow.Position.Title') }}</h3>
							<p class="text-gray-400">
								{{ $t('page.home.Grow.Position.Desc') }}
							</p>
						</div>

						<div class="checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
								<i class='text-blue-400/70 bx bx-sm bxs-rocket'></i>
							</div>
							<h3 class="text-lg font-semibold text-white/80">{{ $t('page.home.Grow.Speed.Title') }}</h3>
							<p class="text-gray-400">
								{{ $t('page.home.Grow.Speed.Desc') }}
							</p>
						</div>

						<div class="checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
								<i class='text-blue-400/70 bx bx-sm bxs-bar-chart-alt-2'></i>
							</div>
							<h3 class="text-lg font-semibold text-white/80">{{ $t('page.home.Grow.Stats.Title') }}</h3>
							<p class="text-gray-400">
								{{ $t('page.home.Grow.Stats.Desc') }}
							</p>
						</div>
						
						
					</div>
				</div>
			</div>
		</div>
		

		
	</div>
</template>

<style>
.boxFirst{
	background-color: hwb(45 3% 8% / 0.3);
	border-color: #EAB308;
	border-width: 3px;
}
.boxSecond{
	background-color: hwb(200 1% 22% / 0.3);
	border-color: #0284C7;
	border-width: 3px;
}
.boxThird{
	background-color: hwb(350 25% 4% / 0.3);
	border-color: #F43F5E;
	border-width: 3px;
}

.specifillacy_box{
	position: relative;
}

.specifillacy_box::after{
	position: absolute;
	content: '';
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	background: radial-gradient(82.36% 82.36% at 32.96% 17.64%, rgba(55, 116, 202, 0.19) 0%, rgba(31, 41, 55, 0) 100%);
}

.checkout_box{
	position: relative;
}

.checkout_box::after{
	position: absolute;
	content: '';
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	background: radial-gradient(82.36% 82.36% at 32.96% 17.64%, rgba(55, 116, 202, 0.19) 0%, rgba(31, 41, 55, 0) 100%);
}
</style>

<script setup lang="ts">
function normalize([v]: string[]) {
  return v
}
</script>
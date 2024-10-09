<template>
	<div>

		<Head>
			<Title>Makoto - {{ $t('page.home.title') }}</Title>
		</Head>

		<Header/>
		<div class="pt-24 md:py-36">
			<div class="flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-14">
				<div data-aos="fade-up" class="w-52 md:w-64 flex flex-col items-center md:items-start">
					<div class="glowbig mx-2 w-16 h-px md:w-28 bg-white"></div>
					<div class="p-2 bg-[#EAB30810] w-fit border border-1 border-yellow-600/20 rounded-2xl">
						<div class="glow w-16 h-px md:w-28 bg-white"></div>
						<div class="boxFirst bg-[#EAB30830] border border-1 border-yellow-600/50 w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
							<img src="/icons/diamond.svg" alt="icon diamond" />
						</div>
					</div>

					<p class="text-sm md:text-base text-gray-300 mt-4 md:mt-6 leading-5 md:leading-8">
						{{ $t('page.home.Props.diamond') }}
					</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="150" class="w-52 md:w-64 flex flex-col items-center md:items-start">
					<div class="glowbig mx-2 w-16 h-px md:w-28 bg-white"></div>
					<div class="p-2 bg-[#0284C710] w-fit border border-1 border-blue-600/20 rounded-2xl">
						<div class="glow w-16 h-px md:w-28 bg-white"></div>
						<div class="boxSecond bg-[#0284C730] border border-1 border-blue-600/50 w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
							<img src="/icons/pen.svg" alt="icon pen" />
						</div>
					</div>

					<p class="text-sm md:text-base text-gray-300 mt-4 md:mt-6 leading-5 md:leading-8">
						{{ $t('page.home.Props.pen') }}
					</p>
				</div>
				<div data-aos="fade-up" data-aos-delay="300" class="w-52 md:w-64 flex flex-col items-center md:items-start">
					<div class="glowbig mx-2 w-16 h-px md:w-28 bg-white"></div>
					<div class="p-2 bg-[#F43F5E10] w-fit border border-1 border-red-600/20 rounded-2xl">
						<div class="glow w-16 h-px md:w-28 bg-white"></div>
						<div class="boxThird bg-[#F43F5E30] border border-1 border-red-600/50 w-16 h-16 p-2 md:p-0 md:w-28 md:h-28 rounded-xl flex justify-center items-center">
							<img src="/icons/meta.svg" alt="icon meta" />
						</div>
					</div>
					<p class="text-sm md:text-base text-gray-300 mt-4 md:mt-6 leading-5 md:leading-8">
						{{  $t('page.home.Props.meta') }}
					</p>
				</div>
			</div>
		</div>
		<div class="py-24 md:py-36 relative">
			<img src="/bg/Ellipse1.png" alt="null" class="absolute -z-10 right-0 top-0 -translate-y-1/2">

			<div class="text-white flex flex-col space-y-14 items-center justify-center">
				<h2 data-aos="fade-up" class="text-5xl font-semibold text-center">{{ $t('page.home.Specifically.specifically') }}</h2>

				<div class="grid md:grid-cols-2 gap-4 px-4 md:px-0">
					<div data-aos="fade-up" class="relative specifillacy_box flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
						<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>
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
									{{ $rt(item) }}
								</li>
							</ul>
						</div>
					</div>

					<div data-aos="fade-up" data-aos-delay="150" class="relative specifillacy_box flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
						<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

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
									{{ $rt(item) }}
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>


		<div class="mb-12 px-4 md:px-0">
			<h3 data-aos="fade-up" class="text-white/90 text-center font-semibold text-5xl mb-8">{{ $t('page.home.Trusted.header') }}</h3>
			<div data-aos="fade-up" class="relative checkout_box border-2 border-gray-600 bg-gray-800/30 py-8 md:py-20 px-12 rounded-2xl container mx-auto ">
				<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

				<div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-7 place-content-center place-items-center">
					<nuxt-img quality="30" class="py-2 px-6 h-[4rem] md:h-[5rem] object-contain grayscale hover:grayscale-0 duration-150" v-for="companies in imgs.companies" :src="companies.src" :alt="companies.company"  />
				</div>
			</div>
			
		</div>

		<div class="md:py-36">
			<div class="text-white flex flex-col space-y-14 items-center justify-center mx-4 md:mx-0">
				<h2 data-aos="fade-up" class="text-5xl font-semibold text-center">{{ $t('page.home.Support.support') }}</h2>

				<div data-aos="fade-up" class="relative container mx-auto grid xl:grid-cols-2 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-12 px-8">
					<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

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
				<h2 data-aos="fade-up" class="text-5xl font-semibold text-center">{{ $t('page.home.Tech.technology') }}</h2>

				<div data-aos="fade-up" class="container mx-auto grid md:grid-cols-2 place-items-center px-8 text-gray-400">
					<div class="max-w-md md:py-24 text-sm lg:text-xl">
						{{ $t('page.home.Tech.main') }}
					</div>
					<nuxt-img src="technology.png" quality="60" alt="technology" class="max-h-64 md:max-h-96" />
				</div>
			</div>
		</div>

		<div class="container mx-auto">
			<div class="md:pt-14 pb-36 relative">
				<div class="text-white flex flex-col space-y-8 items-center justify-center">
					<h2 data-aos="fade-up" class="text-5xl font-semibold text-center">{{ $t('page.home.Grow.Title') }}</h2>
					<div class="grid md:grid-cols-3 gap-4">

						<div data-aos="fade-up" class="relative checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

							<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
								<i class='text-blue-400/70 bx bx-sm bx-line-chart'></i>
							</div>
							<h3 class="text-lg font-semibold text-white/80">{{ $t('page.home.Grow.Position.Title') }}</h3>
							<p class="text-gray-400">
								{{ $t('page.home.Grow.Position.Desc') }}
							</p>
						</div>

						<div data-aos="fade-up" data-aos-delay="150" class="relative checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

							<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
								<i class='text-blue-400/70 bx bx-sm bxs-rocket'></i>
							</div>
							<h3 class="text-lg font-semibold text-white/80">{{ $t('page.home.Grow.Speed.Title') }}</h3>
							<p class="text-gray-400">
								{{ $t('page.home.Grow.Speed.Desc') }}
							</p>
						</div>

						<div data-aos="fade-up" data-aos-delay="300" class="relative checkout_box max-w-[19rem] mx-auto w-fit flex flex-col items-start space-y-1 border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
							<div class="absolute -top-0.5 left-0 w-full h-px glowbig"></div>

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
.glowbig{
	background: linear-gradient(to right, transparent 5%, white 50%, transparent 95%)
}
.glow{
	background: linear-gradient(to right, transparent 10%, rgba(255, 255, 255, 0.80) 50%, transparent 90%)
}
/* .boxFirst{
	background-color: hwb(45 3% 8% / 0.3);
	border-color: #EAB308;
	border-width: 1px;
} */
/* .boxSecond{
	background-color: hwb(200 1% 22% / 0.3);
	border-color: #0284C7;
	border-width: 3px;
} */
/* .boxThird{
	background-color: hwb(350 25% 4% / 0.3);
	border-color: #F43F5E;
	border-width: 3px;
} */

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
	z-index: -1;
	background: radial-gradient(82.36% 82.36% at 32.96% 17.64%, rgba(55, 116, 202, 0.19) 0%, rgba(31, 41, 55, 0) 100%);
}

</style>

<script setup lang="ts">
import imgs from '~/static/json/trusted.json'

</script>

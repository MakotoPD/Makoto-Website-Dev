<template>
	<div>
		<Header/>
		<div class="py-36">
			<div class="flex justify-center space-x-14">
				<div class="w-64 h-36">
					<div class="boxFirst w-28 h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/diamond.svg" />
					</div>
					<p class="text-gray-300 mt-6 leading-8">
						{{ $t('page.home.Props.diamond') }}
					</p>
				</div>
				<div class="w-64 h-36">
					<div class="boxSecond w-28 h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/pen.svg" />
					</div>
					<p class="text-gray-300 mt-6 leading-8">
						{{ $t('page.home.Props.pen') }}
					</p>
				</div>
				<div class="w-64 h-36">
					<div class="boxThird w-28 h-28 rounded-xl flex justify-center items-center">
						<img src="/icons/meta.svg" />
					</div>
					<p class="text-gray-300 mt-6 leading-8">
						{{  $t('page.home.Props.meta') }}
					</p>
				</div>
			</div>
		</div>
		<div class="py-36">
			<div class="text-white flex flex-col space-y-14 items-center justify-center">
				<h2 class="text-5xl font-semibold">{{ $t('page.home.Specifically.specifically') }}</h2>

				<div class="flex justify-center space-x-10">
					<div class="flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800 rounded-xl py-6 px-8">
						<div class="text-xl">
							<span class="text-primary mr-2">
								{{ $t('page.home.Specifically.frontend').split(" ")[0] }}
							</span>
							<span>
								{{ $t('page.home.Specifically.frontend').split(" ")[1] }}
							</span>
						</div>
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

					<div class="flex flex-col space-y-4 border-2 max-w-sm border-gray-600 bg-gray-800 rounded-xl py-6 px-8">
						<div class="text-xl">
							<span class="text-primary mr-2">
								{{ $t('page.home.Specifically.graphic').split(" ")[0] }}
							</span>
							<span>
								{{ $t('page.home.Specifically.graphic').split(" ")[1] }}
							</span>
						</div>
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
	</div>
</template>

<style>
.boxFirst{
	background-color: #eab20866;
	border-color: #EAB308;
	border-width: 3px;
}
.boxSecond{
	background-color: #0284C766;
	border-color: #0284C7;
	border-width: 3px;
}
.boxThird{
	background-color: #F43F5E66;
	border-color: #F43F5E;
	border-width: 3px;
}
</style>

<script setup lang="ts">
function normalize([v]: string[]) {
  return v
}
</script>
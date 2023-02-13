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
			<div class="text-white">
				<p v-for="t in $t('page.home.Specifically')" >{{ t }}</p>
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

</script>
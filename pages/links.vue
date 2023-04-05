<template>
	<div class="pt-12 pb-36 flex justify-center">
		
		<div class="max-w-[16.5rem] max-h-[28rem] specifillacy_box border-2 border-gray-600 bg-gray-800/30 rounded-xl py-6 px-8">
			<nuxt-img src="/makoto_avatar.jpg" loading="lazy" alt="Image" class="max-w-[12rem] rounded-xl" />
			<div class="mt-4 text-white/90">
				<p class="text-center" >Patryk <span class="text-white/50 underline">@Makoto</span> Dąbrowski</p>
 
				<div class="mt-4 grid grid-cols-4 gap-2 place-items-center">
					<a href="https://twitter.com/MakotoPl" target="_blank" class="flex flex-nowrap items-center space-x-3">
						<div class="bg-blue-300/20 p-2 flex items-center justify-center rounded-lg">
							<i class='text-blue-400/70 bx bx-sm bxl-twitter'></i>
						</div>
					</a>
					
					<a href="https://www.twitch.tv/makoto_pl/" class="flex flex-nowrap items-center space-x-3">
						<div class="bg-purple-300/20 p-2 flex items-center justify-center rounded-lg">
							<i class='text-purple-400/70 bx bx-sm bxl-twitch'></i>
						</div>
					</a>

					<a href="https://www.instagram.com/makotopd/" class="flex flex-nowrap items-center space-x-3">
						<div class="bg-pink-300/20 p-2 flex items-center justify-center rounded-lg">
							<i class='text-pink-400/70 bx bx-sm bxl-instagram-alt'></i>
						</div>
					</a>

					<a href="https://mastodon.online/@MakotoPD" class="flex flex-nowrap items-center space-x-3">
						<div class="bg-violet-300/20 p-2 flex items-center justify-center rounded-lg">
							<i class='text-violet-400/70 bx bx-sm bxl-mastodon'></i>
						</div>
					</a>

					<div class="flex flex-nowrap items-center space-x-3 col-span-4">
						<div class="bg-indigo-300/20 p-2 flex items-center justify-center rounded-lg">
							<i class='text-indigo-400/70 bx bx-sm bxl-discord-alt'></i>

							<p class="ml-2 text-indigo-400/70 font-semibold">MakotoPD<span class="text-sm font-medium">#0487</span></p>
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>


<script lang="ts" setup>

definePageMeta({
	layout: "links",
});

</script>
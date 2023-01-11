<template>
	<div class="bg-gray-900 w-screen h-screen">
		<div class="w-full flex flex-col justify-center">
			<div class="relative w-full flex justify-between p-2 border-b border-gray-500">
				<div>
					<NuxtLink to="/">
						<img src="/logo.png" alt="logo.png" class="h-8">
					</NuxtLink>
				</div>
				<div class="flex flex-nowrap space-x-4 items-center text-gray-400 pr-4">
					<NuxtLink to="/">
						Home
					</NuxtLink>
					<NuxtLink to="/Portfolio">
						Portfolio
					</NuxtLink>
					<NuxtLink to="/Contact">
						Contact
					</NuxtLink>
					<NuxtLink to="/MyStack">
						My Stack
					</NuxtLink>
					<NuxtLink to="/Blog">
						Contact
					</NuxtLink>
					<NuxtLink to="/Login">
						Login
					</NuxtLink>
				</div>
				<div class="absolute right-4 -bottom-8 h-8 w-20 flex justify-center items-center rounded-b-md text-white font-semibold bg-blue-400/90">
					Beta
				</div>
			</div>
			<img src="/x.png" alt="background" class="h-10">
		</div>

		<slot />
	</div>

</template>
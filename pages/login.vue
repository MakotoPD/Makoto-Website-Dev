<template>
    <div>
        <div class="min-h-[40rem] flex flex-col items-center">
			<div class="g-signin2" data-onsuccess="onSignIn"></div>

			<div class="h-24"></div>

			<a href="#" onclick="signOut();" class="text-white">Sign out</a>
		</div>
    </div>
</template>
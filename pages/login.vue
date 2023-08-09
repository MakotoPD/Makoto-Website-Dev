<template>
    <div>
        <div class="min-h-[40rem] flex flex-col items-center">
			<div class="g-signin2" data-onsuccess="onSignIn"></div>

			<div class="h-24"></div>

			<a href="#" onclick="signOut();" class="text-white">Sign out</a>
		</div>
    </div>
</template>

<script setup>
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
	}

	let signOut = () => {
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		console.log('User signed out.');
		});
	}


</script>
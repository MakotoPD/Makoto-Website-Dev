<template>
    <div>
        <div class="min-h-[40rem] flex flex-col items-center">
            <div id="g_id_onload"
                data-client_id="910831308616-pqgau9ecq4climsp63qf09flvluo7src.apps.googleusercontent.com"
                data-callback="handleCredentialResponse">
            </div>
            <div class="g_id_signin" data-type="standard"></div>
			<div class="h-24"></div>

			<a href="#" id="GoogleSignOut" class="text-white">Sign out</a>
		</div>
    </div>
</template>

<script setup lang="ts">
useHead({
	meta: [
		{ name: 'google-signin-client_id', content: '910831308616-pqgau9ecq4climsp63qf09flvluo7src.apps.googleusercontent.com'}
	],
	script: [
		{ src:"https://apis.google.com/js/platform.js?onload=init", async: true, defear: true },
		{ src:"https://accounts.google.com/gsi/client?onload=init", async: true, defer: true }
	]
})

    let handleCredentialResponse = (googleUser) => {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        console.log(profile)
	}

	let signOut = () => {
		var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		    console.log('User signed out.');
		});
	}

    function init() {
        gapi.load('auth2', function() {
            client_id: '910831308616-pqgau9ecq4climsp63qf09flvluo7src.apps.googleusercontent.com'/* Ready. Make a call to gapi.auth2.init or some other API */
            console.log('auth2 load')
        });
    }


onMounted(() => {


    let handleCredentialResponse = (googleUser) => {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        console.log(profile)
	}

    let GoogleSignOut = document.querySelector('#GoogleSignOut')

    GoogleSignOut?.addEventListener('click', () => {
        var auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
		console.log('User signed out.');
		});
	})
		

})


</script>